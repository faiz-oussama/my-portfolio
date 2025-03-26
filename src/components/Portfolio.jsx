import React, { useContext, useEffect, useRef, useState } from "react";
import ToggleButton from "./ToggleButton";
import { DarkModeContext } from "./DarkModeProvider";
import Iridescence from '../assets/iridescence';
import RotatingText from '../assets/RotatingText';
import TechIcon from '../assets/TechIcon';

export default function Portfolio() {
    const { darkMode } = useContext(DarkModeContext);
    const grainCanvasRef = useRef(null);
    const contactGrainCanvasRef = useRef(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const [currentStatIndex, setCurrentStatIndex] = useState(0);
    const [currentBlogIndex, setCurrentBlogIndex] = useState(0);
    
    // Stats and blog data
    const stats = [
        {
            number: "3+",
            text: "Years of experience in the field of web development"
        },
        {
            number: "8+",
            text: "Major projects developed successfully"
        },
        { 
            number: "100k+", 
            text: "Lines of code authored across various languages and projects" 
        },
        { 
            number: "50+", 
            text: "Critical bugs fixed" 
        }
    ];
    
    const blogPosts = [
        { 
            image: "/assets/tailwind-blogpost-ylV1NaYL.svg", 
            title: "Building a responsive design system with Tailwind CSS."
        },
        { 
            image: "/assets/tailwind-blogpost-ylV1NaYL.svg", 
            title: "Creating intuitive UI animations with React."
        },
        { 
            image: "/assets/tailwind-blogpost-ylV1NaYL.svg", 
            title: "Best practices for modern web development."
        }
    ];
    
    // Slider drag functionality
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [startY, setStartY] = useState(0);
    const [translateX, setTranslateX] = useState(0);
    const circleSliderRef = useRef(null);
    const blogSliderRef = useRef(null);
    
    // Auto-rotate sliders with pause during interaction
    useEffect(() => {
        if (isDragging) return;
        
        const statInterval = setInterval(() => {
            setCurrentStatIndex((prev) => (prev + 1) % stats.length);
        }, 4000);
        
        const blogInterval = setInterval(() => {
            setCurrentBlogIndex((prev) => (prev + 1) % blogPosts.length);
        }, 5000);
        
        return () => {
            clearInterval(statInterval);
            clearInterval(blogInterval);
        };
    }, [isDragging, stats.length, blogPosts.length]);
    
    // Slider navigation functions
    const nextStat = () => {
        setCurrentStatIndex((prev) => (prev + 1) % stats.length);
    };
    
    const prevStat = () => {
        setCurrentStatIndex((prev) => (prev - 1 + stats.length) % stats.length);
    };
    
    const nextBlog = () => {
        setCurrentBlogIndex((prev) => (prev + 1) % blogPosts.length);
    };
    
    const prevBlog = () => {
        setCurrentBlogIndex((prev) => (prev - 1 + blogPosts.length) % blogPosts.length);
    };
    
    // Handle drag start
    const handleDragStart = (e, type) => {
        setIsDragging(true);
        if (e.type.includes('mouse')) {
            setStartX(e.pageX);
            setStartY(e.pageY);
        } else {
            setStartX(e.touches[0].pageX);
            setStartY(e.touches[0].pageY);
        }
    };
    
    // Handle drag move
    const handleDragMove = (e, type) => {
        if (!isDragging) return;
        
        let currentX;
        if (e.type.includes('mouse')) {
            currentX = e.pageX;
        } else {
            currentX = e.touches[0].pageX;
        }
        
        const diff = currentX - startX;
        
        if (type === 'blog') {
            setTranslateX(diff);
        }
    };
    
    // Handle drag end
    const handleDragEnd = (e, type) => {
        if (!isDragging) return;
        
        let endX;
        if (e.type.includes('mouse')) {
            endX = e.pageX;
        } else {
            endX = e.changedTouches[0].pageX;
        }
        
        const diff = endX - startX;
        const threshold = 80; // Minimum drag distance to trigger slide change
        
        if (type === 'stat') {
            if (Math.abs(diff) > threshold) {
                if (diff > 0) {
                    prevStat();
                } else {
                    nextStat();
                }
            }
        } else if (type === 'blog') {
            if (Math.abs(diff) > threshold) {
                if (diff > 0) {
                    prevBlog();
                } else {
                    nextBlog();
                }
            }
            
            // Reset translate
            setTranslateX(0);
        }
        
        setIsDragging(false);
    };
    
    // Event listeners for circle stats slider
    useEffect(() => {
        const circleSlider = circleSliderRef.current;
        if (!circleSlider) return;
        
        const handleMouseDown = (e) => handleDragStart(e, 'stat');
        const handleMouseMove = (e) => handleDragMove(e, 'stat');
        const handleMouseUp = (e) => handleDragEnd(e, 'stat');
        const handleTouchStart = (e) => handleDragStart(e, 'stat');
        const handleTouchMove = (e) => handleDragMove(e, 'stat');
        const handleTouchEnd = (e) => handleDragEnd(e, 'stat');
        
        circleSlider.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
        circleSlider.addEventListener('touchstart', handleTouchStart);
        window.addEventListener('touchmove', handleTouchMove);
        window.addEventListener('touchend', handleTouchEnd);
        
        return () => {
            circleSlider.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
            circleSlider.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', handleTouchEnd);
        };
    }, [isDragging]);
    
    // Event listeners for blog slider
    useEffect(() => {
        const blogSlider = blogSliderRef.current;
        if (!blogSlider) return;
        
        const handleMouseDown = (e) => handleDragStart(e, 'blog');
        const handleMouseMove = (e) => handleDragMove(e, 'blog');
        const handleMouseUp = (e) => handleDragEnd(e, 'blog');
        const handleTouchStart = (e) => handleDragStart(e, 'blog');
        const handleTouchMove = (e) => handleDragMove(e, 'blog');
        const handleTouchEnd = (e) => handleDragEnd(e, 'blog');
        
        blogSlider.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
        blogSlider.addEventListener('touchstart', handleTouchStart);
        window.addEventListener('touchmove', handleTouchMove);
        window.addEventListener('touchend', handleTouchEnd);
        
        return () => {
            blogSlider.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
            blogSlider.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', handleTouchEnd);
        };
    }, [isDragging]);
    
    // Grain effect animation
    useEffect(() => {
        if (grainCanvasRef.current && contactGrainCanvasRef.current) {
            const canvases = [grainCanvasRef.current, contactGrainCanvasRef.current];
            
            canvases.forEach(canvas => {
                const ctx = canvas.getContext('2d');
                const noise = () => Math.random() * 255;
                
                let isAnimating = true;
                const generateNoise = () => {
                    if (!isAnimating) return;
                    
                    const imgData = ctx.createImageData(canvas.width, canvas.height);
                    const data = imgData.data;
                    
                    for (let i = 0; i < data.length; i += 4) {
                        const value = noise();
                        data[i] = value;
                        data[i + 1] = value;
                        data[i + 2] = value;
                        data[i + 3] = Math.random() * 50;
                    }
                    
                    ctx.putImageData(imgData, 0, 0);
                    requestAnimationFrame(generateNoise);
                };
                
                generateNoise();
                
                return () => {
                    isAnimating = false;
                };
            });
        }
    }, []);
    
    // Toggle mobile menu
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    
    useEffect(() => {
        const link = document.createElement('link');
        link.href = 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap';
        link.rel = 'stylesheet';
        document.head.appendChild(link);
        
        // Add animation styles for gradient and logo animations
        const style = document.createElement('style');
        style.textContent = `
          @keyframes gradient-x {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient-x {
            background-size: 200% 200%;
            animation: gradient-x 15s ease infinite;
          }
          @keyframes spin-slow {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          .animate-spin-slow {
            animation: spin-slow 12s linear infinite;
          }
          @keyframes bounce-slow {
            0%, 100% { transform: translateY(0) rotate(45deg); }
            50% { transform: translateY(-10px) rotate(45deg); }
          }
          .animate-bounce-slow {
            animation: bounce-slow 6s ease-in-out infinite;
          }
          .bg-grid {
            background-image: linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
            background-size: 20px 20px;
          }
          @keyframes pulse-wave {
            0% { transform: scale(0.95); opacity: 1; }
            50% { transform: scale(1.05); opacity: 0.8; }
            100% { transform: scale(0.95); opacity: 1; }
          }
          .animate-pulse-wave {
            animation: pulse-wave 4s ease-in-out infinite;
          }
        `;
        document.head.appendChild(style);
        
        return () => {
            document.head.removeChild(link);
            document.head.removeChild(style);
        };
    }, []);
    
    // Update initial stat to show 453K
    useEffect(() => {
        setCurrentStatIndex(1);
    }, []);
    
    return (
        <div className={`min-h-screen ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`} style={{ 
            fontFamily: "'Space Grotesk', sans-serif",
            letterSpacing: "-0.02em"
        }}>
            {/* HEADER SECTION */}
            <header className="header-main w-full fixed z-[99]">
                {/* top line */}
                <div className="top-line w-full h-[10px] fixed top-0 left-0" style={{
                    backgroundColor: darkMode ? "#000" : "white"
                }}></div>
                
                {/* header container */}
                <div className="header-container flex items-start w-full m-auto max-w-[1800px] px-[40px] z-[20]">
                    {/* logo box */}
                    <div className="header-logo-box flex items-center justify-between w-auto pr-[1em] h-[80px] rounded-b-[30px] mr-[11px] relative z-[0] group" style={{
                        backgroundColor: darkMode ? "#000" : "white"
                    }}>
                        {/* top right corner */}
                        <svg className="svg-corner corner-logo-box-two absolute top-0 -right-7.5 z-[99]" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_310_2)">
                                <path d="M30 0H0V30C0 13.431 13.431 0 30 0Z" fill="white"></path>
                            </g>
                            <defs>
                                <clipPath id="clip0_310_2">
                                    <rect width="30" height="30" fill="white"></rect>
                                </clipPath>
                                <linearGradient id="gradient-fill" x1="0" y1="0" x2="30" y2="30" gradientUnits="userSpaceOnUse">
                                    <stop offset="0%" stopColor="#6c72cb" />
                                    <stop offset="100%" stopColor="#cb69c1" />
                                </linearGradient>
                            </defs>
                        </svg>

                        {/* bottom left corner */}
                        <svg className="svg-corner corner-logo-box-two absolute bottom-0 -rotate-90 z-[99]" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_310_2)">
                                <path d="M30 0H0V30C0 13.431 13.431 0 30 0Z" fill="white"></path>
                            </g>
                            <defs>
                                <clipPath id="clip0_310_2">
                                    <rect width="30" height="30" fill="white"></rect>
                                </clipPath>
                                <linearGradient id="gradient-fill" x1="0" y1="0" x2="30" y2="30" gradientUnits="userSpaceOnUse">
                                    <stop offset="0%" stopColor="#6c72cb" />
                                    <stop offset="100%" stopColor="#cb69c1" />
                                </linearGradient>
                            </defs>
                        </svg>
                        {/* bottom right corner inverse */}
                        <svg className="svg-corner corner-logo-box-two absolute -bottom-7 rotate-0 z-[99]" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_310_2)">
                                <path d="M30 0H0V30C0 13.431 13.431 0 30 0Z" fill="white"></path>
                            </g>
                            <defs>
                                <clipPath id="clip0_310_2">
                                    <rect width="30" height="30" fill=""></rect>
                                </clipPath>
                                <linearGradient id="gradient-fill" x1="0" y1="0" x2="30" y2="30" gradientUnits="userSpaceOnUse">
                                    <stop offset="0%" stopColor="#6c72cb" />
                                    <stop offset="100%" stopColor="#cb69c1" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <a href="#" className="font-medium px-4 relative">
                            {/* Background animated shapes */}
                            <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden">
                                <div className="absolute w-8 h-8 rounded-full bg-gradient-to-r from-[#6c72cb] to-[#cb69c1] top-1 left-1 animate-pulse"></div>
                                <div className="absolute w-6 h-6 border border-[#6c72cb] rounded-sm -bottom-2 right-8 rotate-12 animate-spin-slow"></div>
                                <div className="absolute w-4 h-4 bg-[#cb69c1] rotate-45 bottom-4 right-4 animate-bounce-slow"></div>
                            </div>
                            
                            <div className="flex flex-col justify-center items-center relative">
                                <div className="flex items-center">
                                    <div className="text-[1.8rem] font-bold tracking-tighter relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                                        <span className={`relative z-10 ${darkMode ? 'text-white' : 'text-black'}`}>
                                            <span className="bg-gradient-to-r from-[#6c72cb] via-[#9c79e0] to-[#cb69c1] bg-clip-text text-transparent">O</span>
                                            <span>ussama</span>
                                        </span>
                                        <div className="absolute -top-1 -left-1 w-8 h-8 opacity-20 group-hover:opacity-60 transition-opacity duration-500">
                                            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full animate-spin-slow">
                                                <circle cx="50" cy="50" r="45" stroke={darkMode ? "#ffffff" : "#000000"} strokeWidth="3" />
                                                <path d="M50 5C74.8528 5 95 25.1472 95 50" stroke={darkMode ? "#ffffff" : "#000000"} strokeWidth="2" strokeLinecap="round" />
                                            </svg>
                                        </div>
                                    </div>
                                    
                                    <div className="mx-2 h-8 flex items-center">
                                        <div className={`w-px h-full ${darkMode ? 'bg-gradient-to-b from-[#6c72cb] to-[#cb69c1]' : 'bg-gradient-to-b from-[#6c72cb] to-[#cb69c1]'} animate-pulse`}></div>
                                    </div>
                                    
                                    <div className="text-[1.8rem] font-bold tracking-tighter group-hover:scale-105 transition-transform duration-500">
                                        <span className={`relative z-10 ${darkMode ? 'text-white' : 'text-black'}`}>
                                            <span className="bg-gradient-to-r from-[#cb69c1] via-[#9c79e0] to-[#6c72cb] bg-clip-text text-transparent">F</span>
                                            <span>aiz</span>
                                        </span>
                                    </div>
                                </div>
                                
                                <div className={`text-[0.7rem] tracking-[0.3em] uppercase -mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'} flex items-center group-hover:tracking-[0.4em] transition-all duration-500 ease-in-out`}>
                                    <span className="w-8 h-px bg-gradient-to-r from-transparent to-current mr-2 group-hover:w-10 transition-all duration-500"></span>
                                    SOFTWARE ENGINEER
                                    <span className="w-8 h-px bg-gradient-to-r from-current to-transparent ml-2 group-hover:w-10 transition-all duration-500"></span>
                                </div>
                            </div>
                        </a>
                        
                        {/* Add subtle shine effect overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-10 translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-1000 pointer-events-none"></div>
                        
                        

                        
                        {/* Mobile Menu Button (only visible on mobile) */}
                        <div 
                            className="mobile-menu flex md:hidden cursor-pointer font-medium w-[80px] mr-[0.6em] h-[40px] justify-center items-center rounded-[20px] relative z-[2] group overflow-hidden" 
                            style={{
                                color: darkMode ? "#F9F8F6" : "#000",
                                border: darkMode ? "1.5px solid #F9F8F6" : "1.5px solid #000"
                            }}
                            onClick={toggleMenu}
                        >
                            <span className="relative z-10">{menuOpen ? "Close" : "Menu"}</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-[#6c72cb] to-[#cb69c1] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                            <svg className="svg-corner corner-menu-one absolute left-[-41px] bottom-[-22px] rotate-[180deg]" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_310_2)">
                                    <path d="M30 0H0V30C0 13.431 13.431 0 30 0Z" fill="#5C54F9"></path>
                                </g>
                                <defs>
                                    <clipPath id="clip0_310_2">
                                        <rect width="30" height="30" fill="white"></rect>
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        
                        {/* Mobile Menu Container */}
                        <div className={`menu-container ${menuOpen ? 'flex opacity-100 translate-y-0' : 'hidden opacity-0 -translate-y-4'} flex-col p-[2em_1em] bg-gradient-to-br from-[#5C54F9] to-[#7863e8] h-[80dvh] max-h-[540px] w-full absolute top-[80px] rounded-[30px_0_30px_30px] shadow-[0_10px_20px_#00000040] text-[#F9F8F6] transition-all duration-300`}>
                            <div className="absolute inset-0 rounded-[30px_0_30px_30px] bg-grid opacity-10"></div>
                            <canvas ref={grainCanvasRef} className="grain absolute w-full h-full opacity-10 mix-blend-overlay rounded-[30px_0_30px_30px]"></canvas>
                            
                            <a href="#projects" className="mobile-link text-[2rem] w-full border-b border-[#F9F8F6] pb-[0.3em] mb-[0.3em] cursor-pointer transition-all duration-300 hover:pl-2 flex items-center group">
                                <span className="w-0 h-0 rounded-full bg-white mr-0 group-hover:w-2 group-hover:h-2 group-hover:mr-2 transition-all duration-300"></span>
                                Projects
                            </a>
                            <a href="#about" className="mobile-link text-[2rem] w-full border-b border-[#F9F8F6] pb-[0.3em] mb-[0.3em] cursor-pointer transition-all duration-300 hover:pl-2 flex items-center group">
                                <span className="w-0 h-0 rounded-full bg-white mr-0 group-hover:w-2 group-hover:h-2 group-hover:mr-2 transition-all duration-300"></span>
                                About
                            </a>
                            <a href="#blog" className="mobile-link text-[2rem] w-full border-b border-[#F9F8F6] pb-[0.3em] mb-[0.3em] cursor-pointer transition-all duration-300 hover:pl-2 flex items-center group">
                                <span className="w-0 h-0 rounded-full bg-white mr-0 group-hover:w-2 group-hover:h-2 group-hover:mr-2 transition-all duration-300"></span>
                                Blog
                            </a>
                            <a href="#contact" className="mobile-link text-[2rem] w-full border-b border-[#F9F8F6] pb-[0.3em] mb-[0.3em] cursor-pointer transition-all duration-300 hover:pl-2 flex items-center group">
                                <span className="w-0 h-0 rounded-full bg-white mr-0 group-hover:w-2 group-hover:h-2 group-hover:mr-2 transition-all duration-300"></span>
                                Contact
                            </a>
                            
                            <div className="mobile-theme-switch absolute bottom-[1em] w-fit rounded-[50px] h-[60px] border-[1.5px] border-[#F9F8F6] flex p-[0.6em] items-center justify-center backdrop-blur-sm" style={{
                                backgroundColor: darkMode ? "#F9F8F6" : "rgba(92, 84, 249, 0.5)"
                            }}>
                                <label className="container IsLight">
                                    <input type="checkbox" />
                                    <div></div>
                                </label>
                                <p className="m-0 absolute left-[calc(100%+1em)] opacity-50" style={{
                                    color: darkMode ? "#000" : "#F9F8F6"
                                }}>Light Mode</p>
                            </div>
                        </div>
                    </div>
                    
                    {/* Desktop Navigation - hidden on mobile */}
                    <div className="hidden md:block" style={{ transform: "translateX(0px)" }}>
                        <nav className="navigation relative top-[10px] h-[58px] rounded-[50px] py-0 px-[0.5em] flex items-center justify-evenly backdrop-blur-[10px] saturate-[200%] bg-[#ffffff80] border border-[rgba(209,213,219,.5)] shadow-[0_3px_20px_-5px_#00000026]">
                            <a href="#projects" className="text-base font-medium mx-[0.85em] leading-[1.15] transition-all duration-300 select-none relative group">
                                <span className="relative z-10">Projects</span>
                                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#6c72cb] to-[#cb69c1] group-hover:w-full transition-all duration-300 rounded-full"></span>
                            </a>
                            <a href="#about" className="text-base font-medium mx-[0.85em] leading-[1.15] transition-all duration-300 select-none relative group">
                                <span className="relative z-10">About</span>
                                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#6c72cb] to-[#cb69c1] group-hover:w-full transition-all duration-300 rounded-full"></span>
                            </a>
                            <a href="#blog" className="text-base font-medium mx-[0.85em] leading-[1.15] transition-all duration-300 select-none relative group">
                                <span className="relative z-10">Blog</span>
                                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#6c72cb] to-[#cb69c1] group-hover:w-full transition-all duration-300 rounded-full"></span>
                            </a>
                            <a href="#contact" className="text-base font-medium mx-[0.85em] mr-[2em] leading-[1.15] transition-all duration-300 select-none relative group">
                                <span className="relative z-10">Contact</span>
                                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#6c72cb] to-[#cb69c1] group-hover:w-full transition-all duration-300 rounded-full"></span>
                            </a>
                            
                            <label className="container IsLight relative z-10">
                                <input type="checkbox" />
                                <div></div>
                            </label>
                        </nav>
                    </div>
                </div>
            </header>

            {/* HERO SECTION */}
            <div className="hero mt-[10px] mb-[2rem] overflow-hidden">
                <div className="main-container w-full m-auto px-[40px]">
                    <div className="hero-container min-h-[630px] h-[85vh] overflow-hidden relative">
                        {/* Content area with glass panels */}
                        <div className="w-full relative z-[3] flex flex-col lg:flex-row h-full justify-between">
                            {/* Main content on left with iridescence background */}
                            <div className="w-full lg:w-[65%] h-full p-[2.5rem] md:p-[3.5rem] flex flex-col justify-between relative rounded-[20px] overflow-hidden">
                                {/* Iridescence background with rounded corners */}
                                <div className="absolute inset-0 overflow-hidden rounded-[20px]">
                                    <div className="absolute inset-0 z-[1]">
                                        <Iridescence
                                            mouseReactive={false}
                                            speed={1}
                                            className="w-full h-full"
                                        />
                                    </div>
                                    
                                    {/* Subtle grain overlay */}
                                    <canvas ref={grainCanvasRef} className="grain absolute w-full h-full z-[2] opacity-20" width="904" height="895"></canvas>
                                    
                                    {/* SVG Corner for top-left (intersection with logo) */}
                                    <svg className="svg-corner absolute top-0 left-0 z-[5] rotate-180" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_hero_corner_tl)">
                                            <path d="M30 0H0V30C0 13.431 13.431 0 30 0Z" fill={darkMode ? "#000" : "#fff"}></path>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_hero_corner_tl">
                                                <rect width="30" height="30" fill="white"></rect>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    
                                    
                                    
                                </div>
                                
                                {/* Main content area */}
                                <div className="mt-10 max-w-[600px] relative z-[3]">
                                    <h1 className="heading-text">
                                        <div className="overflow-hidden">
                                            <div className="slide-up font-light text-[1.2rem] mb-2 tracking-wide opacity-70">Hello, I'm an</div>
                                        </div>
                                        <div className="overflow-hidden mb-2">
                                            <div className="slide-up text-[clamp(3rem,6vw,4.5rem)] font-semibold leading-tight">
                                                <span>Equal Parts</span> <span className="text-gradient bg-gradient-to-r from-[#6c72cb] to-[#cb69c1] bg-clip-text text-transparent">Creative</span>
                                            </div>
                                        </div>
                                        <div className="rotating-text-container h-[3.5rem] overflow-hidden">
                                            <RotatingText
                                                texts={['Full-Stack Developer', 'Software Engineer', 'Problem Solver']}
                                                mainClassName="text-[clamp(1.5rem,3vw,2rem)] font-medium opacity-80"
                                                splitLevelClassName="overflow-hidden"
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -20 }}
                                                transition={{ duration: 0.5, ease: "easeOut" }}
                                                rotationInterval={3000}
                                            />
                                        </div>
                                    </h1>
                                    
                                    <p className="max-w-[500px] mt-6 text-[1.1rem] leading-relaxed opacity-75">
                                        Crafting elegant digital solutions with a focus on user experience, 
                                        performance and accessibility. Building the web of tomorrow, today.
                                    </p>
                                    
                                    <div className="mt-8 flex flex-wrap gap-4">
                                        <a href="#projects" className="btn-primary px-6 py-3 rounded-full bg-gradient-to-r from-[#6c72cb] to-[#cb69c1] text-white shadow-lg shadow-purple-500/20 font-medium">
                                            View Projects
                                        </a>
                                        <a href="#contact" className="btn-secondary px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-sm hover:bg-white/20 transition duration-300">
                                            Contact Me
                                        </a>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Right side - Stats and Blog (independent) */}
                            <div className="w-full lg:w-[30%] h-full flex flex-col p-6 justify-center items-center gap-8 ml-auto">
                                {/* Stats Component - Circular with 3D effect */}
                                <div className="w-[350px] h-[350px] bg-black rounded-full flex flex-col items-center justify-center relative overflow-hidden shadow-xl group transition-all duration-500 hover:scale-[1.02]">
                                    {/* Sophisticated background elements */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-900"></div>
                                    <div className="absolute inset-0 opacity-30">
                                        <div className="absolute w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                                    </div>
                                    
                                    {/* Glowing rim */}
                                    <div className="absolute inset-[2px] rounded-full border border-purple-500/10"></div>
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                    
                                    {/* Animated particles */}
                                    <div className="absolute inset-0">
                                        <div className="absolute w-2 h-2 rounded-full bg-purple-300/30 animate-pulse-slow" style={{top: '20%', left: '30%'}}></div>
                                        <div className="absolute w-1 h-1 rounded-full bg-blue-300/30 animate-pulse-slow" style={{top: '70%', left: '60%', animationDelay: '1s'}}></div>
                                        <div className="absolute w-3 h-3 rounded-full bg-pink-300/20 animate-pulse-slow" style={{top: '40%', left: '80%', animationDelay: '0.5s'}}></div>
                                        <div className="absolute w-1.5 h-1.5 rounded-full bg-indigo-300/30 animate-pulse-slow" style={{top: '80%', left: '20%', animationDelay: '1.5s'}}></div>
                                    </div>
                                    
                                    {/* Circular progress indicator */}
                                    <svg className="absolute inset-[20px] w-[calc(100%-40px)] h-[calc(100%-40px)] -rotate-90">
                                        <circle 
                                            cx="50%" 
                                            cy="50%" 
                                            r="calc(50% - 10px)" 
                                            fill="none" 
                                            stroke="rgba(139, 92, 246, 0.1)" 
                                            strokeWidth="4"
                                        />
                                        <circle 
                                            cx="50%" 
                                            cy="50%" 
                                            r="calc(50% - 10px)" 
                                            fill="none" 
                                            stroke="url(#statProgressGradient)" 
                                            strokeWidth="4"
                                            strokeDasharray="calc(3.14 * (100% - 20px))"
                                            strokeDashoffset="calc(3.14 * (100% - 20px) * 0.25)"
                                            strokeLinecap="round"
                                        />
                                        <defs>
                                            <linearGradient id="statProgressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="#8B5CF6" />
                                                <stop offset="50%" stopColor="#EC4899" />
                                                <stop offset="100%" stopColor="#8B5CF6" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    
                                    {/* Content with better typography */}
                                    <div className="text-white flex flex-col items-center justify-center h-full z-10">
                                        <div className="text-[8rem] font-bold leading-none bg-gradient-to-br from-white via-purple-100 to-blue-200 bg-clip-text text-transparent transition-all duration-500 group-hover:scale-105">132</div>
                                        <div className="text-gray-400 text-center text-sm max-w-[60%] mt-2 tracking-wide">
                                            LITERS OF COFFEE
                                            <br />
                                            <span className="text-gray-500 text-xs">CONSUMED THIS YEAR</span>
                                        </div>
                                    </div>
                                    
                                    {/* Interactive navigation dots */}
                                    <div className="absolute bottom-[2rem] flex gap-2">
                                        <div className="w-2 h-2 rounded-full bg-purple-500 cursor-pointer hover:scale-150 transition-transform"></div>
                                        <div className="w-2 h-2 rounded-full bg-gray-600 cursor-pointer hover:scale-150 transition-transform"></div>
                                        <div className="w-2 h-2 rounded-full bg-gray-600 cursor-pointer hover:scale-150 transition-transform"></div>
                                        <div className="w-2 h-2 rounded-full bg-gray-600 cursor-pointer hover:scale-150 transition-transform"></div>
                                    </div>
                                </div>
                                
                                {/* Blog Component - Card with modern design */}
                                <div className="w-[350px] overflow-hidden relative shadow-xl group transition-all duration-500 hover:scale-[1.02] rounded-2xl">
                                    {/* Article image header with overlay */}
                                    <div className="h-[200px] bg-gradient-to-br from-[#6c5ce7] to-[#4834d4] relative">
                                        {/* Gradient mesh background */}
                                        <div className="absolute inset-0">
                                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#7c3aed,#4723d0)] mix-blend-multiply"></div>
                                            <div className="absolute w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                                        </div>
                                        
                                        {/* WebGL icon with glow effect */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="relative group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                                                <div className="absolute inset-0 bg-[#844fee] blur-xl opacity-50 scale-150"></div>
                                                <div className="relative p-4 bg-black/20 rounded-xl backdrop-blur-sm border border-white/10">
                                                    <svg width="70" height="70" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M21 16.0022V7.99782C21 7.17476 20.4404 6.43606 19.6361 6.1817L13.6361 4.1817C12.8691 3.93502 12.0322 3.93502 11.2652 4.1817L5.26515 6.1817C4.46095 6.43606 3.90132 7.17476 3.90132 7.99782V16.0022C3.90132 16.8252 4.46094 17.5639 5.26515 17.8183L11.2652 19.8183C12.0322 20.065 12.8691 20.065 13.6361 19.8183L19.6361 17.8183C20.4404 17.5639 21 16.8252 21 16.0022Z" stroke="#f0c5ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                        <path d="M3.90137 7.70423L12.0014 12.0042L20.1014 7.70423" stroke="#f0c5ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                        <path d="M12 12V21" stroke="#f0c5ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                        <path d="M12.0013 11.9988L7.80127 9.59882" stroke="#f0c5ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Content area with refined typography */}
                                    <div className="bg-white dark:bg-gray-900 p-6">
                                        {/* Tags with refined design */}
                                        <div className="flex gap-2 mb-3">
                                            <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 text-xs font-medium rounded-full">WebGL</span>
                                            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs font-medium rounded-full">JavaScript</span>
                                        </div>
                                        
                                        {/* Title with hover animation */}
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-purple-700 dark:group-hover:text-purple-400 transition-colors duration-300 leading-tight">
                                            Getting started with WebGL shaders in JavaScript
                                        </h3>
                                        
                                        {/* Description with elegant truncation */}
                                        <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 line-clamp-2 leading-relaxed">
                                            Learn how to create stunning visual effects with WebGL shaders and take your web experiences to the next level with this comprehensive guide.
                                        </p>
                                        
                                        {/* Footer with metadata and action */}
                                        <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800 flex justify-between items-center">
                                            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                                <span>5 min read</span>
                                                <span className="mx-2">•</span>
                                                <span>Tutorial</span>
                                            </div>
                                            
                                            {/* Read button with animation */}
                                            <button className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-700 dark:text-purple-400 group-hover:bg-purple-700 dark:group-hover:bg-purple-700 group-hover:text-white transition-colors duration-300">
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* TECHNOLOGIES SECTION */}
            <section className="technologies w-full m-auto max-w-[1160px] px-[40px] mb-20" id="technologies">
                <div className="technologies-content mt-[4em] flex flex-col items-center w-full">
                    <p className="technologies-title text-[1.2rem] font-light tracking-[1px] uppercase opacity-50 mb-[4em]" style={{
                        color: darkMode ? "#F9F8F6" : "#000"
                    }}>Technologies & Tools</p>
                    
                    {/* Main technologies grid - Replaced with animated icons */}
                    <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {/* Programming Languages */}
                        <div className="tech-category col-span-2 md:col-span-3 lg:col-span-4 mb-8">
                            <h3 className="text-2xl font-semibold mb-6 flex items-center" style={{
                                color: darkMode ? "#F9F8F6" : "#000"
                            }}>
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#4CAF50] to-[#8BC34A] flex items-center justify-center shadow-lg shadow-green-500/20 mr-3">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 3L3 8L8 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M16 3L21 8L16 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M3 8H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M3 17H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M8 21L12 13L16 21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                Programming Languages
                            </h3>
                            
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                                <TechIcon 
                                    name="Java" 
                                    color={darkMode ? "#f89820" : "#5382a1"} 
                                    className="transform hover:-translate-y-2 transition-transform duration-300"
                                />
                                <TechIcon 
                                    name="Python" 
                                    color={darkMode ? "#4B8BBE" : "#306998"} 
                                    className="transform hover:-translate-y-2 transition-transform duration-300"
                                />
                                <TechIcon 
                                    name="C#" 
                                    color={darkMode ? "#9B4F96" : "#68217A"} 
                                    className="transform hover:-translate-y-2 transition-transform duration-300"
                                />
                                <TechIcon 
                                    name="C++" 
                                    color={darkMode ? "#649AD2" : "#044F88"} 
                                    className="transform hover:-translate-y-2 transition-transform duration-300"
                                />
                                <TechIcon 
                                    name="JavaScript" 
                                    color={darkMode ? "#F7DF1E" : "#F0DB4F"} 
                                    className="transform hover:-translate-y-2 transition-transform duration-300"
                                />
                                <TechIcon 
                                    name="TypeScript" 
                                    color={darkMode ? "#3178C6" : "#2F74C0"} 
                                    className="transform hover:-translate-y-2 transition-transform duration-300"
                                />
                                <TechIcon 
                                    name="PHP" 
                                    color={darkMode ? "#8993be" : "#474A8A"} 
                                    className="transform hover:-translate-y-2 transition-transform duration-300"
                                />
                                
                                    </div>
                                </div>
                                
                        {/* Libraries and Frameworks */}
                        <div className="tech-category col-span-2 md:col-span-3 lg:col-span-4 mb-8">
                            <h3 className="text-2xl font-semibold mb-6 flex items-center" style={{
                                            color: darkMode ? "#F9F8F6" : "#000"
                            }}>
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#9C27B0] to-[#673AB7] flex items-center justify-center shadow-lg shadow-purple-500/20 mr-3">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 3L21 8V16L12 21L3 16V8L12 3Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M16.5 10.5L7.5 15.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M7.5 8.5L16.5 13.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M12 3V21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                Libraries & Frameworks
                            </h3>
                            
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                                <TechIcon 
                                    name="Spring" 
                                    color={darkMode ? "#6DB33F" : "#6DB33F"} 
                                    className="transform hover:-translate-y-2 transition-transform duration-300"
                                />
                                <div 
                                    className="tech-icon flex flex-col items-center justify-center transform hover:-translate-y-2 transition-transform duration-300"
                                    onMouseEnter={(e) => e.currentTarget.querySelector('img').classList.add('scale-110')}
                                    onMouseLeave={(e) => e.currentTarget.querySelector('img').classList.remove('scale-110')}
                                >
                                    <div className="relative flex items-center justify-center rounded-full overflow-hidden transition-all duration-300 ease-in-out" style={{ width: "50px", height: "50px" }}>
                                        <img 
                                            src="/tech-stack/spring-boot.svg" 
                                            alt="Spring Boot" 
                                            className="w-[35px] h-[35px] transition-all duration-300 animate-fadeIn"
                                        />
                                    </div>
                                    <span className="mt-2 text-sm font-medium opacity-70 transition-all duration-300" style={{ color: darkMode ? "#6DB33F" : "#6DB33F" }}>
                                        Spring Boot
                                    </span>
                                </div>
                                <TechIcon 
                                    name="Flask" 
                                    color={darkMode ? "#FFFFFF" : "#000000"} 
                                    className="transform hover:-translate-y-2 transition-transform duration-300"
                                />
                                <div 
                                    className="tech-icon flex flex-col items-center justify-center transform hover:-translate-y-2 transition-transform duration-300"
                                    onMouseEnter={(e) => e.currentTarget.querySelector('img').classList.add('scale-110')}
                                    onMouseLeave={(e) => e.currentTarget.querySelector('img').classList.remove('scale-110')}
                                >
                                    <div className="relative flex items-center justify-center rounded-full overflow-hidden transition-all duration-300 ease-in-out" style={{ width: "50px", height: "50px" }}>
                                        <img 
                                            src="/tech-stack/dotnet.svg" 
                                            alt=".NET" 
                                            className="w-[35px] h-[35px] transition-all duration-300 animate-fadeIn"
                                        />
                                    </div>
                                    <span className="mt-2 text-sm font-medium opacity-70 transition-all duration-300" style={{ color: darkMode ? "#512BD4" : "#5C2D91" }}>
                                        .NET
                                    </span>
                                </div>
                                <TechIcon 
                                    name="React" 
                                    color={darkMode ? "#61DAFB" : "#149ECA"} 
                                    className="transform hover:-translate-y-2 transition-transform duration-300"
                                />
                                <div 
                                    className="tech-icon flex flex-col items-center justify-center transform hover:-translate-y-2 transition-transform duration-300"
                                    onMouseEnter={(e) => e.currentTarget.querySelector('img').classList.add('scale-110')}
                                    onMouseLeave={(e) => e.currentTarget.querySelector('img').classList.remove('scale-110')}
                                >
                                    <div className="relative flex items-center justify-center rounded-full overflow-hidden transition-all duration-300 ease-in-out" style={{ width: "50px", height: "50px" }}>
                                        <img 
                                            src="/tech-stack/react-native.svg" 
                                            alt="React Native" 
                                            className="w-[35px] h-[35px] transition-all duration-300 animate-fadeIn"
                                        />
                                    </div>
                                    <span className="mt-2 text-sm font-medium opacity-70 transition-all duration-300" style={{ color: darkMode ? "#61DAFB" : "#149ECA" }}>
                                        React Native
                                    </span>
                                </div>
                                <TechIcon 
                                    name="NextJS" 
                                    color={darkMode ? "#FFFFFF" : "#000000"} 
                                    className="transform hover:-translate-y-2 transition-transform duration-300"
                                />
                                <TechIcon 
                                    name="Laravel" 
                                    color={darkMode ? "#FF2D20" : "#FF2D20"} 
                                    className="transform hover:-translate-y-2 transition-transform duration-300"
                                />
                                <div 
                                    className="tech-icon flex flex-col items-center justify-center transform hover:-translate-y-2 transition-transform duration-300"
                                    onMouseEnter={(e) => e.currentTarget.querySelector('img').classList.add('scale-110')}
                                    onMouseLeave={(e) => e.currentTarget.querySelector('img').classList.remove('scale-110')}
                                >
                                    <div className="relative flex items-center justify-center rounded-full overflow-hidden transition-all duration-300 ease-in-out" style={{ width: "50px", height: "50px" }}>
                                        <img 
                                            src="/tech-stack/kafka.svg" 
                                            alt="Kafka" 
                                            className="w-[35px] h-[35px] transition-all duration-300 animate-fadeIn"
                                        />
                                    </div>
                                    <span className="mt-2 text-sm font-medium opacity-70 transition-all duration-300" style={{ color: darkMode ? "#231F20" : "#231F20" }}>
                                        Kafka
                                    </span>
                                </div>
                            </div>
                        </div>
                                
                        {/* Databases */}
                        <div className="tech-category col-span-2 md:col-span-3 lg:col-span-4 mb-8">
                            <h3 className="text-2xl font-semibold mb-6 flex items-center" style={{
                                            color: darkMode ? "#F9F8F6" : "#000"
                            }}>
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2196F3] to-[#03A9F4] flex items-center justify-center shadow-lg shadow-blue-500/20 mr-3">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 5C16.4183 5 20 4.32843 20 3.5C20 2.67157 16.4183 2 12 2C7.58172 2 4 2.67157 4 3.5C4 4.32843 7.58172 5 12 5Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M20 3.5V20.5C20 21.3284 16.4183 22 12 22C7.58172 22 4 21.3284 4 20.5V3.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M20 12C20 12.8284 16.4183 13.5 12 13.5C7.58172 13.5 4 12.8284 4 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M20 16.5C20 17.3284 16.4183 18 12 18C7.58172 18 4 17.3284 4 16.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M20 7.5C20 8.32843 16.4183 9 12 9C7.58172 9 4 8.32843 4 7.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                Databases
                            </h3>
                            
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                                <TechIcon 
                                    name="PostgreSQL" 
                                    color={darkMode ? "#336791" : "#0064a5"} 
                                    className="transform hover:-translate-y-2 transition-transform duration-300"
                                />
                                <TechIcon 
                                    name="MySQL" 
                                    color={darkMode ? "#005571" : "#005571"} 
                                    className="transform hover:-translate-y-2 transition-transform duration-300"
                                />
                                <TechIcon 
                                    name="MongoDB" 
                                    color={darkMode ? "#47A248" : "#13AA52"} 
                                    className="transform hover:-translate-y-2 transition-transform duration-300"
                                />
                                <TechIcon 
                                    name="Firebase" 
                                    color={darkMode ? "#FFCA28" : "#FFA000"} 
                                    className="transform hover:-translate-y-2 transition-transform duration-300"
                                />
                                <TechIcon 
                                    name="Oracle" 
                                    color={darkMode ? "#F80000" : "#F80000"} 
                                    className="transform hover:-translate-y-2 transition-transform duration-300"
                                />
                                <TechIcon 
                                    name="Elasticsearch" 
                                    color={darkMode ? "#005571" : "#005571"} 
                                    className="transform hover:-translate-y-2 transition-transform duration-300"
                                />
                                    </div>
                                    </div>
                                </div>
                                
                    {/* Tools tag cloud - Keep this section but enhance it */}
                    <div className="mt-8 w-full">
                        <h3 className="text-2xl font-semibold mb-6 flex items-center" style={{
                            color: darkMode ? "#F9F8F6" : "#000"
                        }}>
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#9C27B0] to-[#673AB7] flex items-center justify-center shadow-lg shadow-purple-500/20 mr-3">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 4C10.3431 4 9 5.34315 9 7C9 8.65685 10.3431 10 12 10C13.6569 10 15 8.65685 15 7C15 5.34315 13.6569 4 12 4Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M4 12C4 10.3431 5.34315 9 7 9H17C18.6569 9 20 10.3431 20 12V20C20 21.6569 18.6569 23 17 23H7C5.34315 23 4 21.6569 4 20V12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            DevOps & Cloud Services
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                        <TechIcon 
                            name="git" 
                            color={darkMode ? "#F05032" : "#F05032"} 
                            className="transform hover:-translate-y-2 transition-transform duration-300"
                        />
                        <TechIcon 
                            name="docker" 
                            color={darkMode ? "#4285F4" : "#4285F4"} 
                            className="transform hover:-translate-y-2 transition-transform duration-300"
                        />
                        <TechIcon 
                            name="kubernetes" 
                            color={darkMode ? "#326CE5" : "#326CE5"} 
                            className="transform hover:-translate-y-2 transition-transform duration-300"
                        />
                        <TechIcon 
                            name="terraform" 
                            color={darkMode ? "#623CE4" : "#623CE4"} 
                            className="transform hover:-translate-y-2 transition-transform duration-300"
                        />
                        <TechIcon 
                            name="jenkins" 
                            color={darkMode ? "#D24939" : "#D24939"} 
                            className="transform hover:-translate-y-2 transition-transform duration-300"
                        />
                        <TechIcon 
                            name="github actions" 
                            color={darkMode ? "#2088FF" : "#2088FF"} 
                            className="transform hover:-translate-y-2 transition-transform duration-300"
                        />
                        <TechIcon 
                            name="apache" 
                            color={darkMode ? "#343434" : "#343434"} 
                            className="transform hover:-translate-y-2 transition-transform duration-300"
                        />
                        <TechIcon 
                            name="tomcat" 
                            color={darkMode ? "#FF9900" : "#FF9900"} 
                            className="transform hover:-translate-y-2 transition-transform duration-300"
                        />
                        <TechIcon 
                            name="nginx" 
                            color={darkMode ? "#009639" : "#009639"} 
                            className="transform hover:-translate-y-2 transition-transform duration-300"
                        />
                        <TechIcon 
                            name="graphql" 
                            color={darkMode ? "#E10098" : "#E10098"} 
                            className="transform hover:-translate-y-2 transition-transform duration-300"
                        />
                        <TechIcon 
                            name="AWS" 
                            color={darkMode ? "#FF9900" : "#FF9900"} 
                            className="transform hover:-translate-y-2 transition-transform duration-300"
                        />
                        
                        </div>
                        
                        <h3 className="text-xl font-semibold mb-6 text-center" style={{
                            color: darkMode ? "#F9F8F6" : "#000"
                        }}>Other Technologies</h3>
                        
                        <div className="flex flex-wrap justify-center gap-3">
                            {["Git", "GitHub", "Docker", "AWS", "Vercel", "Jest", "Testing Library", "Redux", "Zustand", "Framer Motion", 
                              "GraphQL", "Firebase", "Webpack", "Vite", "SCSS", "Storybook", "CI/CD", "Accessibility", "SEO", "Performance Optimization"]
                              .map((tool, index) => (
                                <div key={index} 
                                    className="px-4 py-2 rounded-full border 
                                    transform hover:scale-110 hover:-translate-y-1 
                                    transition-all duration-300 cursor-default
                                    hover:shadow-md hover:bg-opacity-20 backdrop-blur-sm"
                                    style={{
                                        color: darkMode ? "#F9F8F6" : "#000",
                                        backgroundColor: `rgba(${108 + index % 50}, ${114 + index % 30}, ${203 - index % 40}, 0.1)`,
                                        borderColor: `rgba(${108 + index % 50}, ${114 + index % 30}, ${203 - index % 40}, 0.3)`
                                    }}
                                >
                                    {tool}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            
            {/* PROJECTS SECTION */}
            <section className="projects w-full m-auto max-w-[1160px] px-[40px]" id="projects">
                <div className="projects-content mt-[6em] flex flex-col items-center w-full">
                    <p className="projects-title text-[1.2rem] font-light tracking-[1px] uppercase opacity-50 mb-[4em]" style={{
                        color: darkMode ? "#F9F8F6" : "#000"
                    }}>Selected Work</p>
                    
                    <div className="project-cards min-h-[400px] w-full flex flex-col">
                        <div className="transform-gpu translate-y-0 scale-100 opacity-100">
                            <a target="_blank" href="#" className="card w-full mb-[1.5em] border-b relative flex items-end group overflow-hidden" style={{
                                borderColor: darkMode ? "#F9F8F6" : "#000",
                                borderWidth: darkMode ? "2px" : "1px"
                            }}>
                                {/* Animated background gradient */}
                                <div className="absolute inset-0 bg-gradient-to-r from-[#6c72cb]/0 via-[#9c79e0]/0 to-[#cb69c1]/0 group-hover:from-[#6c72cb]/5 group-hover:via-[#9c79e0]/5 group-hover:to-[#cb69c1]/5 transition-all duration-500 ease-out opacity-0 group-hover:opacity-100"></div>
                                
                                {/* Animated line indicator */}
                                <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-gradient-to-r from-[#6c72cb] to-[#cb69c1] group-hover:w-full transition-all duration-700 ease-in-out"></div>
                                
                                <div className="card-text w-full text-black flex flex-col justify-end items-start pb-[1em] pl-0 group-hover:pl-[1em] transition-all duration-300 ease-out">
                                    <p className="description text-[0.8rem] relative left-[8px] top-[15px] font-light tracking-[1px] uppercase mb-[0.4em] opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                                       style={{ color: darkMode ? "#F9F8F6" : "#000" }}>React Utility Library</p>
                                    <h2 className="title tracking-[-1px] text-[6rem] font-medium transform group-hover:translate-x-2 transition-transform duration-500 ease-out"
                                        style={{ color: darkMode ? "#F9F8F6" : "#000" }}>Haiku</h2>
                                </div>
                                
                                {/* Arrow indicator */}
                                <div className="absolute right-4 bottom-[40px] opacity-0 transform translate-x-8 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out">
                                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke={darkMode ? "#F9F8F6" : "#000"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                            </a>
                        </div>
                        
                        <div className="transform-gpu translate-y-0 scale-100 opacity-100">
                            <a target="_blank" href="#" className="card w-full mb-[1.5em] border-b relative flex items-end group overflow-hidden" style={{
                                borderColor: darkMode ? "#F9F8F6" : "#000",
                                borderWidth: darkMode ? "2px" : "1px"
                            }}>
                                {/* Animated background gradient */}
                                <div className="absolute inset-0 bg-gradient-to-r from-[#6c72cb]/0 via-[#9c79e0]/0 to-[#cb69c1]/0 group-hover:from-[#6c72cb]/5 group-hover:via-[#9c79e0]/5 group-hover:to-[#cb69c1]/5 transition-all duration-500 ease-out opacity-0 group-hover:opacity-100"></div>
                                
                                {/* Animated line indicator */}
                                <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-gradient-to-r from-[#6c72cb] to-[#cb69c1] group-hover:w-full transition-all duration-700 ease-in-out"></div>
                                
                                <div className="card-text w-full text-black flex flex-col justify-end items-start pb-[1em] pl-0 group-hover:pl-[1em] transition-all duration-300 ease-out">
                                    <p className="description text-[0.8rem] relative left-[8px] top-[15px] font-light tracking-[1px] uppercase mb-[0.4em] opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                                       style={{ color: darkMode ? "#F9F8F6" : "#000" }}>Animated UI Components</p>
                                    <h2 className="title tracking-[-1px] text-[6rem] font-medium transform group-hover:translate-x-2 transition-transform duration-500 ease-out"
                                        style={{ color: darkMode ? "#F9F8F6" : "#000" }}>React Bits</h2>
                                </div>
                                
                                {/* Arrow indicator */}
                                <div className="absolute right-4 bottom-[40px] opacity-0 transform translate-x-8 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out">
                                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke={darkMode ? "#F9F8F6" : "#000"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                            </a>
                        </div>
                        
                        <div className="transform-gpu translate-y-0 scale-100 opacity-100">
                            <a target="_blank" href="#" className="card w-full mb-[1.5em] border-b relative flex items-end group overflow-hidden" style={{
                                borderColor: darkMode ? "#F9F8F6" : "#000",
                                borderWidth: darkMode ? "2px" : "1px"
                            }}>
                                {/* Animated background gradient */}
                                <div className="absolute inset-0 bg-gradient-to-r from-[#6c72cb]/0 via-[#9c79e0]/0 to-[#cb69c1]/0 group-hover:from-[#6c72cb]/5 group-hover:via-[#9c79e0]/5 group-hover:to-[#cb69c1]/5 transition-all duration-500 ease-out opacity-0 group-hover:opacity-100"></div>
                                
                                {/* Animated line indicator */}
                                <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-gradient-to-r from-[#6c72cb] to-[#cb69c1] group-hover:w-full transition-all duration-700 ease-in-out"></div>
                                
                                <div className="card-text w-full text-black flex flex-col justify-end items-start pb-[1em] pl-0 group-hover:pl-[1em] transition-all duration-300 ease-out">
                                    <p className="description text-[0.8rem] relative left-[8px] top-[15px] font-light tracking-[1px] uppercase mb-[0.4em] opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                                       style={{ color: darkMode ? "#F9F8F6" : "#000" }}>Straightforward IP Tracker</p>
                                    <h2 className="title tracking-[-1px] text-[6rem] font-medium transform group-hover:translate-x-2 transition-transform duration-500 ease-out"
                                        style={{ color: darkMode ? "#F9F8F6" : "#000" }}>IP Wire</h2>
                                </div>
                                
                                {/* Arrow indicator */}
                                <div className="absolute right-4 bottom-[40px] opacity-0 transform translate-x-8 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out">
                                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke={darkMode ? "#F9F8F6" : "#000"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ABOUT SECTION */}
            <section className="about overflow-x-hidden w-full m-[6em_auto] max-w-[1160px] px-[40px]" id="about">
                <div className="about-content overflow-hidden py-[4em] flex gap-[4em]">
                    <div className="videos relative w-fit">
                        <video className="about-video w-full max-w-[400px] min-w-[300px] rounded-[30px]" preload="none" autoPlay loop playsInline poster="https://davidhaz.com/images/pic_placeholder.webp">
                            <source src="https://davidhaz.com/videos/photo_0.mp4" type="video/mp4" />
                        </video>
                        
                        <video className="about-video-overlay max-w-[300px] absolute transform rotate-[-20deg] scale-150 z-[2] right-[-70px] bottom-[-70px] mix-blend-mode-exclusion transition-transform duration-400" preload="none" autoPlay loop playsInline poster="https://davidhaz.com/images/hello_480_placeholder.webp" style={{
                            filter: darkMode ? "none" : "grayscale(100%)"
                        }}>
                            <source src="https://davidhaz.com/videos/photo_01.mp4" type="video/mp4" />
                        </video>
                    </div>
                    
                    <div className="text w-full h-[400px] flex flex-col justify-between" style={{
                        color: darkMode ? "#F9F8F6" : "#000"
                    }}>
                        <p className="text-[2.2rem] max-w-[28ch] min-w-[20ch] mb-[1em] font-light">
                            <span className="word">I'm&nbsp;</span>
                            <span className="word">a&nbsp;</span>
                            <span className="word">web&nbsp;</span>
                            <span className="word font-semibold">developer&nbsp;</span>
                            <span className="word">&amp;&nbsp;</span>
                            <span className="word font-semibold">designer&nbsp;</span>
                            <span className="word">based&nbsp;</span>
                            <span className="word">in&nbsp;</span>
                            <span className="word">Cluj-Napoca!&nbsp;</span>
                            <span className="word">I&nbsp;</span>
                            <span className="word">specialize&nbsp;</span>
                            <span className="word">in&nbsp;</span>
                            <span className="word font-semibold">Frontend&nbsp;</span>
                            <span className="word font-semibold">Engineering,&nbsp;</span>
                            <span className="word">focusing&nbsp;</span>
                            <span className="word">on&nbsp;</span>
                            <span className="word">building&nbsp;</span>
                            <span className="word">high&nbsp;</span>
                            <span className="word">quality&nbsp;</span>
                            <span className="word">web&nbsp;</span>
                            <span className="word">experiences&nbsp;</span>
                            <span className="word">through&nbsp;</span>
                            <span className="word font-semibold">clean&nbsp;</span>
                            <span className="word font-semibold">code&nbsp;</span>
                            <span className="word">and&nbsp;</span>
                            <span className="word">thoughtful&nbsp;</span>
                            <span className="word">design.&nbsp;</span>
                        </p>
                        
                        <a href="#contact" className="star-button blur blur-visible w-fit mb-0 py-[0.5em] px-[1em] rounded-[50px] font-medium text-[1.8rem] flex gap-[0.3em] items-center transition-[filter,background-color,color] duration-300" style={{
                            color: darkMode ? "#F9F8F6" : "#000",
                            border: darkMode ? "2px solid #F9F8F6" : "2px solid #000"
                        }}>
                            <span className="text-[1.5rem]">✦</span>
                            Get in touch
                            <span className="text-[1.5rem]">✦</span>
                        </a>
                    </div>
                </div>
            </section>

            {/* CONTACT SECTION */}
            <section className="contact-container w-full max-w-[1800px] m-[2em_auto_auto] h-auto px-[40px]" id="contact">
                <div className="contact relative w-full overflow-x-hidden h-[700px] rounded-[30px] py-[5em] px-[6em] mb-[2em]">
                    <div className="contact-gradient rounded-[30px] overflow-hidden h-full w-full left-0 top-0 absolute">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-blue-500 to-teal-400 animate-gradient-x"></div>
                        
                        <canvas ref={contactGrainCanvasRef} className="grain absolute rounded-[30px] top-0 left-0 w-full h-full z-[1] opacity-30 mix-blend-overlay" width="904" height="895"></canvas>
                    </div>
                    
                    <div className="contact-content h-full relative flex flex-col justify-between z-[2]">
                        <h2 className="text-[6rem] font-medium text-[#F9F8F6] leading-[1.05em]">
                            Wanna create <br/> something <span className="font-bold">awesome</span> <br/> together?
                        </h2>
                        
                        <div className="contact-details self-end flex flex-col items-end">
                            <a href="mailto:faizouss123@gmail.com" className="star-button text-[#F9F8F6] border-2 border-[#F9F8F6] hover:bg-[#F9F8F6] hover:text-black p-[0.5em_1em] rounded-[50px] flex gap-[0.3em] items-center font-medium text-[1.8rem]">
                                <span>✦</span>Let's talk<span>✦</span>
                            </a>
                            
                            <p className="mail-link font-light text-[1.4rem] text-[#F9F8F6] mt-[1em]">
                                Don't like flashy buttons? Reach out at&nbsp;
                                <a className="text-[#F9F8F6] font-medium border-b-2 border-transparent transition-[border-bottom] duration-300 hover:cursor-pointer hover:border-white">contact@example.com</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
