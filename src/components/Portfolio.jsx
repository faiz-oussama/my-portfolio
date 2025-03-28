import { motion } from 'framer-motion';
import React, { useContext, useEffect, useRef, useState } from "react";
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import BlurText from '../assets/BlurText';
import CountUp from '../assets/CountUp';
import Iridescence from '../assets/iridescence';
import RotatingText from '../assets/RotatingText';
import TechIcon from '../assets/TechIcon';
import { DarkModeContext } from "./DarkModeProvider";
export default function Portfolio() {
    const { darkMode } = useContext(DarkModeContext);
    const grainCanvasRef = useRef(null);
    const contactGrainCanvasRef = useRef(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const [currentStatIndex, setCurrentStatIndex] = useState(0);
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
    
    // Stats and blog data
    const stats = [
        {
            number: "132+",
            text: "Liters of coffee consumed this year"
        },
        {
            number: "8+",
            text: "Major projects developed successfully"
        },
        { 
            number: "100k+", 
            text: "Total lines of code written" 
        },
        { 
            number: "50+", 
            text: "Critical bugs fixed" 
        }
    ];
    
    const ProjectsOverView = [
        {
            image: "path/to/maghrebai_copilot_image.jpg",
            title: "MoroccoGuide-AI",
            description: "An AI-Powered travel planner that creates personalized Morocco trip itineraries.",
            technologies: ["Reactjs", "Nodejs", "Expressjs", "MongoDB", "GeminiAPI"]
        },
        {
            image: "path/to/logflow_analytics_image.jpg",
            title: "LogFlow-Analytics",
            description: "Real-Time Log Streaming and Analytics Platform for comprehensive log management.",
            technologies: ["Java", "ELK Stack", "Kafka", "JavaFX"]
        },
        {
            image: "path/to/ai_visual_voice_search_image.jpg",
            title: "Visual Search E-commerce Website",
            description: "Visual and Voice Product Search using Deep Learning Models",
            technologies: ["Flask", "Tensorflow"]
        },
        {
            image: "path/to/gomaps_image.jpg",
            title: "GoMaps",
            description: "App that allows users to search for nearby places such as cafés, restaurants, hotels, and more.",
            technologies: ["JavaScript", "Leaflet.js", "JavaFX"]
        },
        {
            image: "path/to/university_management_system_image.jpg",
            title: "University Management",
            description: "Complete University Management System with student, faculty, and administrative features",
            technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"]
        },
        {
            image: "path/to/chat_app_advanced_image.jpg",
            title: "Real-time Chat App",
            description: "Real-time Chat Application with advanced features like file sharing, and more",
            technologies: ["C++", "Sockets", "QT", "Multithreading"]
        }
    ];

 
    
    // Toggle mobile menu
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentStatIndex((prev) => (prev + 1) % stats.length);
        }, 5000); 
    
        return () => clearInterval(timer);
    }, []);
    
    return (
        <div className={`min-h-screen w-full`} style={{ 
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
                <div className="header-container flex items-start w-full m-auto max-w-[1800px] z-[20]">
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
                        <svg className="svg-corner corner-logo-box-two absolute ml-[2em] -bottom-7 rotate-0 z-[99]" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                        <a href="#" className="font-medium px-4 ml-[2em] relative">
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
                            <a href="#skills" className="mobile-link text-[2rem] w-full border-b border-[#F9F8F6] pb-[0.3em] mb-[0.3em] cursor-pointer transition-all duration-300 hover:pl-2 flex items-center group">
                                <span className="w-0 h-0 rounded-full bg-white mr-0 group-hover:w-2 group-hover:h-2 group-hover:mr-2 transition-all duration-300"></span>
                                Skills
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
                            <a href="#skills" className="text-base font-medium mx-[0.85em] leading-[1.15] transition-all duration-300 select-none relative group">
                                <span className="relative z-10">Skills</span>
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
            <div className="hero mt-[10px] overflow-hidden">
                <div className="main-container w-full">
                    <div className="min-h-[630px] h-[85vh] overflow-hidden relative">
                        {/* Content area with glass panels */}
                        <div className="w-full relative z-[3] flex flex-col lg:flex-row h-full justify-between">
                            {/* Main content on left with iridescence background */}
                            <div className="w-fit lg:w-[70%] ml-[2em] h-full p-[2.5rem] md:p-[3.5rem] flex flex-col justify-between relative rounded-[20px] overflow-hidden">
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
                                    
                                    <BlurText
                                        text="Crafting elegant digital solutions with a focus on user experience, performance and accessibility. Building the web of tomorrow, TODAY !"
                                        delay={100}
                                        animateBy="words"
                                        direction="top"
                                        className="max-w-[500px] mt-6 text-[1.1rem] leading-relaxed opacity-75"
                                    />
                                    
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
                            <div className="w-full lg:w-[27%] h-full flex flex-col gap-4 ml-[1em]">
                                {/* Stats Component - Circular with 3D effect */}
                                <div className="w-[310px] h-[450px] bg-black rounded-full flex flex-col items-center justify-center relative overflow-hidden shadow-xl group transition-all duration-500 hover:scale-[1.02]">                                    {/* Sophisticated background elements */}
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
                                    
                                    
                                    {/* Content with better typography */}
                                    <Swiper
                                        spaceBetween={30}
                                        slidesPerView={1}
                                        scrollbar={{ draggable: true }}
                                        autoplay={{
                                            delay: 5000,
                                            disableOnInteraction: false,
                                        }}
                                        pagination={{
                                            clickable: true,
                                            el: '.stats-pagination',
                                            bulletClass: 'w-2 h-2 rounded-full bg-gray-600 cursor-pointer transition-all duration-300 mx-1',
                                            bulletActiveClass: 'bg-purple-500 scale-110'
                                        }}
                                        modules={[Autoplay, Pagination, EffectFade]}
                                        effect="cards"
                                        fadeEffect={{ crossFade: true }}
                                        onSlideChange={(swiper) => setCurrentStatIndex(swiper.activeIndex)}
                                        className="projects-swiper w-full h-full"
                                    >
                                        {stats.map((stat, index) => (
                                            <SwiperSlide key={index}>
                                                <div className="text-white flex flex-col items-center justify-center h-full z-10 p-7">
                                                <motion.div 
                                                        className="text-[5rem] font-bold leading-none bg-gradient-to-br from-white via-purple-100 to-blue-200 bg-clip-text text-transparent"
                                                        initial={{ scale: 0.9, opacity: 0 }}
                                                        animate={{ scale: 1, opacity: 1 }}
                                                        exit={{ scale: 0.9, opacity: 0 }}
                                                        transition={{ duration: 0.5 }}
                                                    >
                                                        {stat.number.includes('k') ? (
                                                            <>
                                                                <CountUp
                                                                    from={0}
                                                                    to={parseInt(stat.number)}
                                                                    separator=","
                                                                    duration={1}
                                                                    className="count-up-text"
                                                                />
                                                                k+
                                                            </>
                                                        ) : (
                                                            <CountUp
                                                                from={0}
                                                                to={stat.number}
                                                                separator=","
                                                                duration={1}
                                                                className="count-up-text"
                                                            />
                                                        )}
                                                    </motion.div>
                                                    <motion.div 
                                                        className="text-gray-400 text-center text-[2em] md:text-base w-full max-w-[80%] mt-2 tracking-wide"
                                                        initial={{ y: 10, opacity: 0 }}
                                                        animate={{ y: 0, opacity: 1 }}
                                                        exit={{ y: -10, opacity: 0 }}
                                                        transition={{ duration: 0.5, delay: 0.1 }}
                                                    >
                                                        {stat.text}
                                                    </motion.div>
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>

                                    {/* Custom pagination container */}
                                    <div className="stats-pagination absolute bottom-[1rem] flex justify-center w-full gap-2"></div>
                                    
                                </div>
                                
                                {/* Blog Component - Card with modern design */}
                                <div className="w-[320px] h-full relative transition-all duration-500 hover:scale-[1.02] rounded-3xl bottom-0 overflow-hidden">
                                <Swiper
                                    spaceBetween={30}
                                    slidesPerView={1}
                                    scrollbar={{ draggable: true }}
                                    autoplay={{
                                        delay: 5000,
                                        disableOnInteraction: false,
                                    }}
                                    pagination={{
                                        clickable: true,
                                        el: '.projects-pagination',
                                        bulletClass: 'w-2 h-2 rounded-full bg-gray-600 cursor-pointer transition-all duration-300 mx-1',
                                        bulletActiveClass: 'bg-purple-500 scale-110'
                                    }}
                                    modules={[Autoplay, Pagination, EffectFade]}
                                    effect="cards"
                                    fadeEffect={{ crossFade: true }}
                                    onSlideChange={(swiper) => setCurrentProjectIndex(swiper.activeIndex)}
                                    className="stats-swiper w-full h-full"
                                >
                                    {ProjectsOverView.map((project, index) => (
                                        <SwiperSlide key={index}>
                                            <div className="group h-full bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-[1.02] relative">
                                                {/* Reduced header height to provide more room for content */}
                                                <div className="h-[150px] bg-gradient-to-br from-[#6c5ce7] to-[#4834d4] relative overflow-hidden">
                                                    <div className="absolute inset-0">
                                                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#7c3aed,#4723d0)] mix-blend-multiply"></div>
                                                        <div className="absolute w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                                                        
                                                        {/* Animated particles */}
                                                        <div className="absolute w-3 h-3 rounded-full bg-white/20 top-[20%] left-[15%] animate-pulse-slow"></div>
                                                        <div className="absolute w-2 h-2 rounded-full bg-white/30 top-[60%] left-[80%] animate-pulse-slow" style={{animationDelay: '0.8s'}}></div>
                                                        <div className="absolute w-4 h-4 rounded-full blur-sm bg-indigo-300/20 top-[30%] left-[50%] animate-float-slow"></div>
                                                    </div>
                                                    
                                                    {/* Project icon/visual with optimized positioning */}
                                                    <div className="absolute inset-0 flex items-center justify-center opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700">
                                                        <div className="relative">
                                                            <div className="absolute inset-0 bg-purple-400/20 blur-xl rounded-full scale-150"></div>
                                                            {project.icon ? (
                                                                <img 
                                                                    src={project.icon} 
                                                                    alt={project.title} 
                                                                    className="w-16 h-16 object-contain relative z-10"
                                                                />
                                                            ) : (
                                                                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 flex items-center justify-center relative z-10">
                                                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M3 8L8 3M8 3L13 8M8 3V16" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                                        <path d="M16 21L11 16M16 21L21 16M16 21V8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                                    </svg>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black/20 to-transparent"></div>
                                                </div>
                                                
                                                {/* Expanded content area with better spacing */}
                                                <div className="h-[220px] p-6 overflow-hidden relative z-10 flex flex-col">
                                                    {/* More compact tech stack display */}
                                                    <div className="flex flex-wrap gap-1 mb-3">
                                                        {project.technologies.slice(0, 4).map((tech, index) => (
                                                            <span 
                                                                key={index} 
                                                                className="px-2 py-0.5 bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 text-xs font-medium rounded-full border border-blue-100 dark:border-blue-800/50 shadow-sm backdrop-blur-sm transition-all duration-300 hover:scale-105"
                                                            >
                                                                {tech}
                                                            </span>
                                                        ))}
                                                        {project.technologies.length > 4 && (
                                                            <span className="px-2 py-0.5 bg-gray-50 text-gray-500 dark:bg-gray-800/30 dark:text-gray-400 text-xs font-medium rounded-full border border-gray-100 dark:border-gray-800/50">
                                                                +{project.technologies.length - 4}
                                                            </span>
                                                        )}
                                                    </div>
                                                    
                                                    {/* Larger project title with better spacing */}
                                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-purple-700 dark:group-hover:text-purple-400 transition-colors duration-300 leading-tight mb-3">
                                                        {project.title}
                                                    </h3>
                                                    
                                                    {/* Expanded description area (3 lines instead of 2) */}
                                                    <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3 leading-relaxed mb-4 flex-grow">
                                                        {project.description}
                                                    </p>
                                                    
                                                </div>
                                                
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                    
                                </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            



                {/* TECHNOLOGIES SECTION */}
                <section className="technologies w-full m-auto max-w-[1160px] px-[40px] mb-20" id="technologies">
                    <div className="technologies-content mt-[4em] flex flex-col items-center w-full">
                        {/* Enhanced header with subtle animation */}
                        <div className="section-header relative mb-16 flex flex-col items-center">
                            <span className="absolute -top-8 opacity-5 text-[5rem] font-bold tracking-wider blur-sm">
                                TECH STACK
                            </span>
                            <p className="technologies-title text-[1.2rem] font-light tracking-[1px] uppercase relative z-10 before:absolute before:w-12 before:h-[3px] before:bg-gradient-to-r before:from-[#6c72cb] before:to-[#cb69c1] before:-bottom-4 before:left-1/2 before:-translate-x-1/2" style={{
                                color: darkMode ? "#F9F8F6" : "#000"
                            }}>Technologies & Tools</p>
                        </div>
                        
                        {/* Programming Languages - Enhanced styling */}
                        <div className="tech-category w-full mb-16">
                            <div className="category-header mb-8 flex items-center">
                                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#4CAF50] to-[#8BC34A] flex items-center justify-center shadow-lg shadow-green-500/20 mr-4 rotate-3">
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 3L3 8L8 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M16 3L21 8L16 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M3 8H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M3 17H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M8 21L12 13L16 21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold" style={{color: darkMode ? "#F9F8F6" : "#000"}}>
                                        Programming Languages
                                    </h3>
                                    <div className="h-[2px] w-32 bg-gradient-to-r from-[#4CAF50]/80 to-transparent mt-1"></div>
                                </div>
                            </div>
                            
                            {/* Preserved your existing grid with enhanced hover effects */}
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8">
                                <TechIcon 
                                    name="Java" 
                                    color={darkMode ? "#f89820" : "#5382a1"} 
                                    className="transform hover:-translate-y-2 hover:scale-110 transition-all duration-300"
                                />
                                <TechIcon 
                                    name="Python" 
                                    color={darkMode ? "#4B8BBE" : "#306998"} 
                                    className="transform hover:-translate-y-2 hover:scale-110 transition-all duration-300"
                                />
                                <TechIcon 
                                    name="C#" 
                                    color={darkMode ? "#9B4F96" : "#68217A"} 
                                    className="transform hover:-translate-y-2 hover:scale-110 transition-all duration-300"
                                />
                                <TechIcon 
                                    name="C++" 
                                    color={darkMode ? "#649AD2" : "#044F88"} 
                                    className="transform hover:-translate-y-2 hover:scale-110 transition-all duration-300"
                                />
                                <TechIcon 
                                    name="JavaScript" 
                                    color={darkMode ? "#F7DF1E" : "#F0DB4F"} 
                                    className="transform hover:-translate-y-2 hover:scale-110 transition-all duration-300"
                                />
                                <TechIcon 
                                    name="TypeScript" 
                                    color={darkMode ? "#3178C6" : "#2F74C0"} 
                                    className="transform hover:-translate-y-2 hover:scale-110 transition-all duration-300"
                                />
                                <TechIcon 
                                    name="PHP" 
                                    color={darkMode ? "#8993be" : "#474A8A"} 
                                    className="transform hover:-translate-y-2 hover:scale-110 transition-all duration-300"
                                />
                            </div>
                        </div>
                        
                        {/* Libraries and Frameworks - Enhanced styling */}
                        <div className="tech-category w-full mb-16">
                            <div className="category-header mb-8 flex items-center">
                                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#9C27B0] to-[#673AB7] flex items-center justify-center shadow-lg shadow-purple-500/20 mr-4 -rotate-3">
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 3L21 8V16L12 21L3 16V8L12 3Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M16.5 10.5L7.5 15.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M7.5 8.5L16.5 13.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M12 3V21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold" style={{color: darkMode ? "#F9F8F6" : "#000"}}>
                                        Libraries & Frameworks
                                    </h3>
                                    <div className="h-[2px] w-40 bg-gradient-to-r from-[#9C27B0]/80 to-transparent mt-1"></div>
                                </div>
                            </div>
                            
                            <div className="relative">
                                {/* Subtle background decorative elements */}
                                <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-gradient-to-br from-purple-500/5 to-transparent blur-3xl"></div>
                                <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br from-purple-500/5 to-transparent blur-3xl"></div>
                                
                                {/* Grid with your existing components */}
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-10 gap-x-6 relative z-10">
                                    <TechIcon 
                                        name="Spring" 
                                        color={darkMode ? "#6DB33F" : "#6DB33F"} 
                                        className="transform hover:-translate-y-2 hover:scale-110 transition-all duration-300"
                                    />
                                    <div 
                                        className="tech-icon flex flex-col items-center justify-center transform hover:-translate-y-2 hover:scale-110 transition-all duration-300"
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
                                        className="transform hover:-translate-y-2 hover:scale-110 transition-all duration-300"
                                    />
                                    <div 
                                        className="tech-icon flex flex-col items-center justify-center transform hover:-translate-y-2 hover:scale-110 transition-all duration-300"
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
                                        className="transform hover:-translate-y-2 hover:scale-110 transition-all duration-300"
                                    />
                                    <div 
                                        className="tech-icon flex flex-col items-center justify-center transform hover:-translate-y-2 hover:scale-110 transition-all duration-300"
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
                                        className="transform hover:-translate-y-2 hover:scale-110 transition-all duration-300"
                                    />
                                    <TechIcon 
                                        name="Laravel" 
                                        color={darkMode ? "#FF2D20" : "#FF2D20"} 
                                        className="transform hover:-translate-y-2 hover:scale-110 transition-all duration-300"
                                    />
                                </div>
                            </div>
                        </div>
                        
                        {/* Databases - Enhanced styling */}
                        <div className="tech-category w-full mb-16">
                            <div className="category-header mb-8 flex items-center">
                                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#2196F3] to-[#03A9F4] flex items-center justify-center shadow-lg shadow-blue-500/20 mr-4 rotate-2">
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 5C16.4183 5 20 4.32843 20 3.5C20 2.67157 16.4183 2 12 2C7.58172 2 4 2.67157 4 3.5C4 4.32843 7.58172 5 12 5Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M20 3.5V20.5C20 21.3284 16.4183 22 12 22C7.58172 22 4 21.3284 4 20.5V3.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M20 12C20 12.8284 16.4183 13.5 12 13.5C7.58172 13.5 4 12.8284 4 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold" style={{color: darkMode ? "#F9F8F6" : "#000"}}>
                                        Databases
                                    </h3>
                                    <div className="h-[2px] w-28 bg-gradient-to-r from-[#2196F3]/80 to-transparent mt-1"></div>
                                </div>
                            </div>
                            
                            {/* Enhanced wrapper with highlights */}
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
                                    <TechIcon 
                                        name="PostgreSQL" 
                                        color={darkMode ? "#336791" : "#0064a5"} 
                                        className="transform hover:-translate-y-2 hover:scale-110 transition-all duration-300"
                                    />
                                    <TechIcon 
                                        name="MySQL" 
                                        color={darkMode ? "#005571" : "#005571"} 
                                        className="transform hover:-translate-y-2 hover:scale-110 transition-all duration-300"
                                    />
                                    <TechIcon 
                                        name="MongoDB" 
                                        color={darkMode ? "#47A248" : "#13AA52"} 
                                        className="transform hover:-translate-y-2 hover:scale-110 transition-all duration-300"
                                    />
                                    <TechIcon 
                                        name="Firebase" 
                                        color={darkMode ? "#FFCA28" : "#FFA000"} 
                                        className="transform hover:-translate-y-2 hover:scale-110 transition-all duration-300"
                                    />
                                    <TechIcon 
                                        name="Oracle" 
                                        color={darkMode ? "#F80000" : "#F80000"} 
                                        className="transform hover:-translate-y-2 hover:scale-110 transition-all duration-300"
                                    />
                                    <TechIcon 
                                        name="Elasticsearch" 
                                        color={darkMode ? "#005571" : "#005571"} 
                                        className="transform hover:-translate-y-2 hover:scale-110 transition-all duration-300"
                                    />
                                </div>
                        </div>
                        
                        {/* DevOps & Cloud - Enhanced styling */}
                        <div className="tech-category w-full mb-16">
                            <div className="category-header mb-8 flex items-center">
                                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#9C27B0] to-[#673AB7] flex items-center justify-center shadow-lg shadow-purple-500/20 mr-4 -rotate-2">
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 4C10.3431 4 9 5.34315 9 7C9 8.65685 10.3431 10 12 10C13.6569 10 15 8.65685 15 7C15 5.34315 13.6569 4 12 4Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M4 12C4 10.3431 5.34315 9 7 9H17C18.6569 9 20 10.3431 20 12V20C20 21.6569 18.6569 23 17 23H7C5.34315 23 4 21.6569 4 20V12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold" style={{color: darkMode ? "#F9F8F6" : "#000"}}>
                                        DevOps & Cloud Services
                                    </h3>
                                    <div className="h-[2px] w-48 bg-gradient-to-r from-[#9C27B0]/80 to-transparent mt-1"></div>
                                </div>
                            </div>
                            
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-y-8 gap-x-4">
                                <TechIcon 
                                    name="git" 
                                    color={darkMode ? "#F05032" : "#F05032"} 
                                    className="transform hover:scale-110 transition-all duration-300"
                                />
                                <div 
                                    className="tech-icon flex flex-col items-center justify-center transform hover:scale-110 transition-all duration-300"
                                    onMouseEnter={(e) => e.currentTarget.querySelector('img').classList.add('scale-110')}
                                    onMouseLeave={(e) => e.currentTarget.querySelector('img').classList.remove('scale-110')}
                                >
                                    <div className="relative flex items-center justify-center rounded-full overflow-hidden transition-all duration-300 ease-in-out" style={{ width: "50px", height: "50px" }}>
                                        <img 
                                            src="/tech-stack/gitlab.svg" 
                                            alt="GitLab CI" 
                                            className="w-[35px] h-[35px] transition-all duration-300 animate-fadeIn"
                                        />
                                    </div>
                                    <span className="mt-2 text-sm font-medium opacity-70 transition-all duration-300" style={{ color: darkMode ? "#FC6D26" : "#FC6D26" }}>
                                        GitLab CI
                                    </span>
                                </div>
                                <TechIcon 
                                    name="docker" 
                                    color={darkMode ? "#4285F4" : "#4285F4"} 
                                    className="transform hover:scale-110 transition-all duration-300"
                                />
                                <TechIcon 
                                    name="kubernetes" 
                                    color={darkMode ? "#326CE5" : "#326CE5"} 
                                    className="transform hover:scale-110 transition-all duration-300"
                                />
                                <div 
                                    className="tech-icon flex flex-col items-center justify-center transform hover:scale-110 transition-all duration-300"
                                    onMouseEnter={(e) => e.currentTarget.querySelector('img').classList.add('scale-110')}
                                    onMouseLeave={(e) => e.currentTarget.querySelector('img').classList.remove('scale-110')}
                                >
                                    <div className="relative flex items-center justify-center rounded-full overflow-hidden transition-all duration-300 ease-in-out" style={{ width: "50px", height: "50px" }}>
                                        <img 
                                            src="/tech-stack/terraform.svg" 
                                            alt="Terraform" 
                                            className="w-[35px] h-[35px] transition-all duration-300 animate-fadeIn"
                                        />
                                    </div>
                                    <span className="mt-2 text-sm font-medium opacity-70 transition-all duration-300" style={{ color: darkMode ? "#7B42BC" : "#5C4EE5" }}>
                                        Terraform
                                    </span>
                                </div>
                                <div 
                                    className="tech-icon flex flex-col items-center justify-center transform hover:scale-110 transition-all duration-300"
                                    onMouseEnter={(e) => e.currentTarget.querySelector('img').classList.add('scale-110')}
                                    onMouseLeave={(e) => e.currentTarget.querySelector('img').classList.remove('scale-110')}
                                >
                                    <div className="relative flex items-center justify-center rounded-full overflow-hidden transition-all duration-300 ease-in-out" style={{ width: "50px", height: "50px" }}>
                                        <img 
                                            src="/tech-stack/jenkins.svg" 
                                            alt="Jenkins" 
                                            className="w-[35px] h-[35px] transition-all duration-300 animate-fadeIn"
                                        />
                                    </div>
                                    <span className="mt-2 text-sm font-medium opacity-70 transition-all duration-300" style={{ color: darkMode ? "#D24939" : "#D24939" }}>
                                        Jenkins
                                    </span>
                                </div>
                                <TechIcon 
                                    name="AWS" 
                                    color={darkMode ? "#FF9900" : "#FF9900"} 
                                    className="transform hover:scale-110 transition-all duration-300"
                                />
                            </div>
                        </div>
                    </div>
                </section>


            {/* PROJECTS SECTION */}
            <section className="projects w-full m-auto max-w-[1160px] px-[40px]" id="projects">
                <div className="projects-content mt-[6em] flex flex-col items-center w-full">
                    <div className="section-header relative mb-16 flex flex-col items-center">
                        <span className="absolute -top-8 opacity-5 text-[5rem] font-bold tracking-wider blur-sm">
                            PROJECTS
                        </span>
                        <p className="projects-title text-[1.2rem] font-light tracking-[1px] uppercase relative z-10 before:absolute before:w-12 before:h-[3px] before:bg-gradient-to-r before:from-[#6c72cb] before:to-[#cb69c1] before:-bottom-4 before:left-1/2 before:-translate-x-1/2" style={{
                            color: darkMode ? "#F9F8F6" : "#000"
                        }}>Selected Work</p>
                    </div>
                    
                    <div className="project-cards min-h-[400px] w-full flex flex-col space-y-12">
                        {/* MoroccoGuide-AI Project */}
                        <div className="transform-gpu translate-y-0 scale-100 opacity-100">
                            <a target="_blank" href="https://moroccoguideai.vercel.app" className="card w-full h-[250px] border-b relative flex flex-col md:flex-row md:items-center group overflow-hidden" style={{
                                borderColor: darkMode ? "#F9F8F6" : "#000",
                                borderWidth: darkMode ? "2px" : "1px"
                            }}>
                                
                                {/* Animated background gradient */}
                                <div className="absolute inset-0 bg-gradient-to-r from-[#6c72cb]/0 via-[#9c79e0]/0 to-[#cb69c1]/0 group-hover:from-[#6c72cb]/5 group-hover:via-[#9c79e0]/5 group-hover:to-[#cb69c1]/5 transition-all duration-500 ease-out opacity-0 group-hover:opacity-100"></div>
                                
                                {/* Animated line indicator */}
                                <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-gradient-to-r from-[#6c72cb] to-[#cb69c1] group-hover:w-full transition-all duration-700 ease-in-out"></div>
                                
                                <div className="card-text w-full h-full flex flex-col justify-between py-8 px-4 md:px-8 group-hover:translate-x-3 transition-all duration-500 ease-out">
                                    <div className="flex justify-between items-start">
                                        <div className="flex flex-col">
                                            <p className="text-[0.7rem] uppercase tracking-[2px] mb-1 opacity-70 transition-opacity duration-300"
                                            style={{ color: darkMode ? "#F9F8F6" : "#000" }}>Intelligent Travel Assistant</p>
                                            <h2 className="title tracking-tight text-[2.5rem] md:text-[3rem] font-medium mb-3"
                                                style={{ color: darkMode ? "#F9F8F6" : "#000" }}>MoroccoGuide-AI</h2>
                                            
                                            <p className="max-w-[550px] text-sm opacity-70 line-clamp-2 md:line-clamp-3" 
                                            style={{ color: darkMode ? "#F9F8F6" : "#000" }}>
                                                Personalized Morocco travel itineraries with AI-generated day plans, accommodations, cuisine recommendations and cultural insights.
                                            </p>
                                        </div>
                                        
                                        {/* Status badge */}
                                        <div className="hidden md:block">
                                            <span className="text-xs px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 rounded-full font-medium border border-green-200 dark:border-green-800/30">
                                                Completed
                                            </span>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center justify-between mt-4">
                                        <div className="flex flex-wrap gap-2">
                                            <span className="px-2.5 py-1 bg-gradient-to-r from-blue-500/10 to-blue-500/5 text-blue-600 dark:text-blue-400 text-xs font-medium rounded-md border border-blue-500/10">
                                                React
                                            </span>
                                            <span className="px-2.5 py-1 bg-gradient-to-r from-green-500/10 to-green-500/5 text-green-600 dark:text-green-400 text-xs font-medium rounded-md border border-green-500/10">
                                                Node.js
                                            </span>
                                            <span className="px-2.5 py-1 bg-gradient-to-r from-purple-500/10 to-purple-500/5 text-purple-600 dark:text-purple-400 text-xs font-medium rounded-md border border-purple-500/10">
                                                Gemini API
                                            </span>
                                        </div>
                                        
                                        {/* Links with icons */}
                                        <div className="flex items-center gap-4">
                                            <a href="https://github.com/faiz-oussama/MoroccoGuide-AI" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity duration-300">
                                                <svg width="20" height="20" fill={darkMode ? "#F9F8F6" : "#000"} viewBox="0 0 24 24">
                                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                                </svg>
                                            </a>
                                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke={darkMode ? "#F9F8F6" : "#000"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        
                        {/* LogFlow Analytics Project */}
                        <div className="transform-gpu translate-y-0 scale-100 opacity-100">
                            <a target="_blank" href="https://logflow-analytics.dev" className="card w-full h-[250px] border-b relative flex flex-col md:flex-row md:items-center group overflow-hidden" style={{
                                borderColor: darkMode ? "#F9F8F6" : "#000",
                                borderWidth: darkMode ? "2px" : "1px"
                            }}>
                                
                                {/* Animated background gradient */}
                                <div className="absolute inset-0 bg-gradient-to-r from-[#6c72cb]/0 via-[#9c79e0]/0 to-[#cb69c1]/0 group-hover:from-[#6c72cb]/5 group-hover:via-[#9c79e0]/5 group-hover:to-[#cb69c1]/5 transition-all duration-500 ease-out opacity-0 group-hover:opacity-100"></div>
                                
                                {/* Animated line indicator */}
                                <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-gradient-to-r from-[#6c72cb] to-[#cb69c1] group-hover:w-full transition-all duration-700 ease-in-out"></div>
                                
                                <div className="card-text w-full h-full flex flex-col justify-between py-8 px-4 md:px-8 group-hover:translate-x-3 transition-all duration-500 ease-out">
                                    <div className="flex justify-between items-start">
                                        <div className="flex flex-col">
                                            <p className="text-[0.7rem] uppercase tracking-[2px] mb-1 opacity-70 transition-opacity duration-300"
                                            style={{ color: darkMode ? "#F9F8F6" : "#000" }}>Enterprise Log Analysis Platform</p>
                                            <h2 className="title tracking-tight text-[2.5rem] md:text-[3rem] font-medium mb-3"
                                                style={{ color: darkMode ? "#F9F8F6" : "#000" }}>LogFlow Analytics</h2>
                                            
                                            <p className="max-w-[550px] text-sm opacity-70 line-clamp-2 md:line-clamp-3" 
                                            style={{ color: darkMode ? "#F9F8F6" : "#000" }}>
                                                Enterprise-grade log streaming platform with real-time analytics, anomaly detection, and AI-powered insights for system monitoring.
                                            </p>
                                        </div>
                                        
                                        {/* Status badge */}
                                        <div className="hidden md:block">
                                            <span className="text-xs px-3 py-1 bg-yellow-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 rounded-full font-medium border border-yellow-200 dark:border-yellow-800/30">
                                                Completed
                                            </span>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center justify-between mt-4">
                                        <div className="flex flex-wrap gap-2">
                                            <span className="px-2.5 py-1 bg-gradient-to-r from-red-500/10 to-red-500/5 text-red-600 dark:text-red-400 text-xs font-medium rounded-md border border-red-500/10">
                                                Java
                                            </span>
                                            <span className="px-2.5 py-1 bg-gradient-to-r from-green-500/10 to-green-500/5 text-green-600 dark:text-green-400 text-xs font-medium rounded-md border border-green-500/10">
                                                JavaFX
                                            </span>
                                            <span className="px-2.5 py-1 bg-gradient-to-r from-yellow-500/10 to-yellow-500/5 text-yellow-600 dark:text-yellow-400 text-xs font-medium rounded-md border border-yellow-500/10">
                                                ELK Stack
                                            </span>
                                            <span className="px-2.5 py-1 bg-gradient-to-r from-red-900/10 to-red-800/5 text-red-800 dark:text-red-500 text-xs font-medium rounded-md border border-red-800/10">
                                                Kafka
                                            </span>
                                        </div>
                                        
                                        {/* Links with icons */}
                                        <div className="flex items-center gap-4">
                                            <a href="https://github.com/faiz-oussama/LogFlow-Analytics" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity duration-300">
                                                <svg width="20" height="20" fill={darkMode ? "#F9F8F6" : "#000"} viewBox="0 0 24 24">
                                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                                </svg>
                                            </a>
                                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke={darkMode ? "#F9F8F6" : "#000"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        
                        {/* AI Visual Search Project */}
                        <div className="transform-gpu translate-y-0 scale-100 opacity-100">
                            <a target="_blank" href="https://github.com/faiz-oussama/AI-Powered-Visual-and-Voice-Product-Search" className="card w-full h-[250px] border-b relative flex flex-col md:flex-row md:items-center group overflow-hidden" style={{
                                borderColor: darkMode ? "#F9F8F6" : "#000",
                                borderWidth: darkMode ? "2px" : "1px"
                            }}>
                                
                                {/* Animated background gradient */}
                                <div className="absolute inset-0 bg-gradient-to-r from-[#6c72cb]/0 via-[#9c79e0]/0 to-[#cb69c1]/0 group-hover:from-[#6c72cb]/5 group-hover:via-[#9c79e0]/5 group-hover:to-[#cb69c1]/5 transition-all duration-500 ease-out opacity-0 group-hover:opacity-100"></div>
                                
                                {/* Animated line indicator */}
                                <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-gradient-to-r from-[#6c72cb] to-[#cb69c1] group-hover:w-full transition-all duration-700 ease-in-out"></div>
                                
                                <div className="card-text w-full h-full flex flex-col justify-between py-8 px-4 md:px-8 group-hover:translate-x-3 transition-all duration-500 ease-out">
                                    <div className="flex justify-between items-start">
                                        <div className="flex flex-col">
                                            <p className="text-[0.7rem] uppercase tracking-[2px] mb-1 opacity-70 transition-opacity duration-300"
                                            style={{ color: darkMode ? "#F9F8F6" : "#000" }}>E-commerce AI Search</p>
                                            <h2 className="title tracking-tight text-[2.5rem] md:text-[3rem] font-medium mb-3"
                                                style={{ color: darkMode ? "#F9F8F6" : "#000" }}>Visual Search AI</h2>
                                            
                                            <p className="max-w-[550px] text-sm opacity-70 line-clamp-2 md:line-clamp-3" 
                                            style={{ color: darkMode ? "#F9F8F6" : "#000" }}>
                                                Deep learning platform enabling users to find products through image uploads and natural voice commands with multi-modal search capabilities.
                                            </p>
                                        </div>
                                        
                                        {/* Status badge */}
                                        <div className="hidden md:block">
                                            <span className="text-xs px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 rounded-full font-medium border border-green-200 dark:border-green-800/30">
                                                Completed
                                            </span>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center justify-between mt-4">
                                        <div className="flex flex-wrap gap-2">
                                            <span className="px-2.5 py-1 bg-gradient-to-r from-blue-500/10 to-blue-500/5 text-blue-600 dark:text-blue-400 text-xs font-medium rounded-md border border-blue-500/10">
                                                Python
                                            </span>
                                            <span className="px-2.5 py-1 bg-gradient-to-r from-gray-500/10 to-gray-500/5 text-gray-600 dark:text-gray-400 text-xs font-medium rounded-md border border-gray-500/10">
                                                Flask
                                            </span>
                                            <span className="px-2.5 py-1 bg-gradient-to-r from-orange-500/10 to-orange-500/5 text-orange-600 dark:text-orange-400 text-xs font-medium rounded-md border border-orange-500/10">
                                                TensorFlow
                                            </span>
                                        </div>
                                        
                                        {/* Links with icons */}
                                        <div className="flex items-center gap-4">
                                            <a href="https://github.com/faiz-oussama/AI-Powered-Visual-and-Voice-Product-Search" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity duration-300">
                                                <svg width="20" height="20" fill={darkMode ? "#F9F8F6" : "#000"} viewBox="0 0 24 24">
                                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                                </svg>
                                            </a>
                                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke={darkMode ? "#F9F8F6" : "#000"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        
                        {/* GoMaps Explorer Project */}
                        <div className="transform-gpu translate-y-0 scale-100 opacity-100">
                            <a target="_blank" href="https://github.com/faiz-oussama/GoMaps" className="card w-full h-[250px] border-b relative flex flex-col md:flex-row md:items-center group overflow-hidden" style={{
                                borderColor: darkMode ? "#F9F8F6" : "#000",
                                borderWidth: darkMode ? "2px" : "1px"
                            }}>
                                {/* Animated background gradient */}
                                <div className="absolute inset-0 bg-gradient-to-r from-[#6c72cb]/0 via-[#9c79e0]/0 to-[#cb69c1]/0 group-hover:from-[#6c72cb]/5 group-hover:via-[#9c79e0]/5 group-hover:to-[#cb69c1]/5 transition-all duration-500 ease-out opacity-0 group-hover:opacity-100"></div>
                                
                                {/* Animated line indicator */}
                                <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-gradient-to-r from-[#6c72cb] to-[#cb69c1] group-hover:w-full transition-all duration-700 ease-in-out"></div>
                                
                                <div className="card-text w-full h-full flex flex-col justify-between py-8 px-4 md:px-8 group-hover:translate-x-3 transition-all duration-500 ease-out">
                                    <div className="flex justify-between items-start">
                                        <div className="flex flex-col">
                                            <p className="text-[0.7rem] uppercase tracking-[2px] mb-1 opacity-70 transition-opacity duration-300"
                                            style={{ color: darkMode ? "#F9F8F6" : "#000" }}>Location Discovery Platform</p>
                                            <h2 className="title tracking-tight text-[2.5rem] md:text-[3rem] font-medium mb-3"
                                                style={{ color: darkMode ? "#F9F8F6" : "#000" }}>GoMaps Explorer</h2>
                                            
                                            <p className="max-w-[550px] text-sm opacity-70 line-clamp-2 md:line-clamp-3" 
                                            style={{ color: darkMode ? "#F9F8F6" : "#000" }}>
                                                Location discovery platform with intuitive interfaces for finding nearby points of interest with customizable filters, ratings, and route planning.
                                            </p>
                                        </div>
                                        
                                        {/* Status badge */}
                                        <div className="hidden md:block">
                                            <span className="text-xs px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 rounded-full font-medium border border-green-200 dark:border-green-800/30">
                                                Completed
                                            </span>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center justify-between mt-4">
                                        <div className="flex flex-wrap gap-2">
                                            <span className="px-2.5 py-1 bg-gradient-to-r from-yellow-500/10 to-yellow-500/5 text-yellow-600 dark:text-yellow-400 text-xs font-medium rounded-md border border-yellow-500/10">
                                                JavaScript
                                            </span>
                                            <span className="px-2.5 py-1 bg-gradient-to-r from-green-500/10 to-green-500/5 text-green-600 dark:text-green-400 text-xs font-medium rounded-md border border-green-500/10">
                                                Leaflet.js
                                            </span>
                                            <span className="px-2.5 py-1 bg-gradient-to-r from-blue-500/10 to-blue-500/5 text-blue-600 dark:text-blue-400 text-xs font-medium rounded-md border border-blue-500/10">
                                                JavaFX
                                            </span>
                                        </div>
                                        
                                        {/* Links with icons */}
                                        <div className="flex items-center gap-4">
                                            <a href="https://github.com/faiz-oussama/GoMaps" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity duration-300">
                                                <svg width="20" height="20" fill={darkMode ? "#F9F8F6" : "#000"} viewBox="0 0 24 24">
                                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                                </svg>
                                            </a>
                                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke={darkMode ? "#F9F8F6" : "#000"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        
                        {/* EduPortal Project */}
                        <div className="transform-gpu translate-y-0 scale-100 opacity-100">
                            <a target="_blank" href="https://github.com/faiz-oussama/University-Management-System" className="card w-full h-[250px] border-b relative flex flex-col md:flex-row md:items-center group overflow-hidden" style={{
                                borderColor: darkMode ? "#F9F8F6" : "#000",
                                borderWidth: darkMode ? "2px" : "1px"
                            }}>
                                
                                {/* Animated background gradient */}
                                <div className="absolute inset-0 bg-gradient-to-r from-[#6c72cb]/0 via-[#9c79e0]/0 to-[#cb69c1]/0 group-hover:from-[#6c72cb]/5 group-hover:via-[#9c79e0]/5 group-hover:to-[#cb69c1]/5 transition-all duration-500 ease-out opacity-0 group-hover:opacity-100"></div>
                                
                                {/* Animated line indicator */}
                                <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-gradient-to-r from-[#6c72cb] to-[#cb69c1] group-hover:w-full transition-all duration-700 ease-in-out"></div>
                                
                                <div className="card-text w-full h-full flex flex-col justify-between py-8 px-4 md:px-8 group-hover:translate-x-3 transition-all duration-500 ease-out">
                                    <div className="flex justify-between items-start">
                                        <div className="flex flex-col">
                                            <p className="text-[0.7rem] uppercase tracking-[2px] mb-1 opacity-70 transition-opacity duration-300"
                                            style={{ color: darkMode ? "#F9F8F6" : "#000" }}>University Management System</p>
                                            <h2 className="title tracking-tight text-[2.5rem] md:text-[3rem] font-medium mb-3"
                                                style={{ color: darkMode ? "#F9F8F6" : "#000" }}>EduPortal</h2>
                                            
                                            <p className="max-w-[550px] text-sm opacity-70 line-clamp-2 md:line-clamp-3" 
                                            style={{ color: darkMode ? "#F9F8F6" : "#000" }}>
                                                Comprehensive university management system with course registration, faculty management, and administrative dashboards.
                                            </p>
                                        </div>
                                        
                                        {/* Status badge */}
                                        <div className="hidden md:block">
                                            <span className="text-xs px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 rounded-full font-medium border border-green-200 dark:border-green-800/30">
                                                Completed
                                            </span>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center justify-between mt-4">
                                        <div className="flex flex-wrap gap-2">
                                            <span className="px-2.5 py-1 bg-gradient-to-r from-orange-500/10 to-orange-500/5 text-orange-600 dark:text-orange-400 text-xs font-medium rounded-md border border-purple-500/10">
                                                HTML
                                            </span>
                                            <span className="px-2.5 py-1 bg-gradient-to-r from-purple-500/10 to-purple-500/5 text-purple-600 dark:text-purple-400 text-xs font-medium rounded-md border border-purple-500/10">
                                                PHP
                                            </span>
                                            <span className="px-2.5 py-1 bg-gradient-to-r from-blue-500/10 to-blue-500/5 text-blue-600 dark:text-blue-400 text-xs font-medium rounded-md border border-blue-500/10">
                                                MySQL
                                            </span>
                                            <span className="px-2.5 py-1 bg-gradient-to-r from-yellow-500/10 to-yellow-500/5 text-yellow-600 dark:text-yellow-400 text-xs font-medium rounded-md border border-yellow-500/10">
                                                Javascript
                                            </span>
                                        </div>
                                        
                                        {/* Links with icons */}
                                        <div className="flex items-center gap-4">
                                            <a target="_blank" href="https://github.com/faiz-oussama/University-Management-System" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity duration-300">
                                                <svg width="20" height="20" fill={darkMode ? "#F9F8F6" : "#000"} viewBox="0 0 24 24">
                                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                                </svg>
                                            </a>
                                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke={darkMode ? "#F9F8F6" : "#000"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        
                        {/* Real-time Chat App */}
                        <div className="transform-gpu translate-y-0 scale-100 opacity-100">
                            <a target="_blank" href="https://github.com/faiz-oussama/Chat-App-Advanced" className="card w-full h-[250px] border-b relative flex flex-col md:flex-row md:items-center group overflow-hidden" style={{
                                borderColor: darkMode ? "#F9F8F6" : "#000",
                                borderWidth: darkMode ? "2px" : "1px"
                            }}>
                                
                                {/* Animated background gradient */}
                                <div className="absolute inset-0 bg-gradient-to-r from-[#6c72cb]/0 via-[#9c79e0]/0 to-[#cb69c1]/0 group-hover:from-[#6c72cb]/5 group-hover:via-[#9c79e0]/5 group-hover:to-[#cb69c1]/5 transition-all duration-500 ease-out opacity-0 group-hover:opacity-100"></div>
                                
                                {/* Animated line indicator */}
                                <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-gradient-to-r from-[#6c72cb] to-[#cb69c1] group-hover:w-full transition-all duration-700 ease-in-out"></div>
                                
                                <div className="card-text w-full h-full flex flex-col justify-between py-8 px-4 md:px-8 group-hover:translate-x-3 transition-all duration-500 ease-out">
                                    <div className="flex justify-between items-start">
                                        <div className="flex flex-col">
                                            <p className="text-[0.7rem] uppercase tracking-[2px] mb-1 opacity-70 transition-opacity duration-300"
                                            style={{ color: darkMode ? "#F9F8F6" : "#000" }}>Encrypted Messaging Platform</p>
                                            <h2 className="title tracking-tight text-[2.5rem] md:text-[3rem] font-medium mb-3"
                                                style={{ color: darkMode ? "#F9F8F6" : "#000" }}>SecureChat</h2>
                                            
                                            <p className="max-w-[550px] text-sm opacity-70 line-clamp-2 md:line-clamp-3" 
                                            style={{ color: darkMode ? "#F9F8F6" : "#000" }}>
                                                High-performance, encrypted messaging platform with real-time communication, file sharing, and multi-device synchronization built with C++.
                                            </p>
                                        </div>
                                        
                                        {/* Status badge */}
                                        <div className="hidden md:block">
                                            <span className="text-xs px-3 py-1 bg-yellow-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 rounded-full font-medium border border-yellow-200 dark:border-yellow-800/30">
                                                Completed
                                            </span>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center justify-between mt-4">
                                        <div className="flex flex-wrap gap-2">
                                            <span className="px-2.5 py-1 bg-gradient-to-r from-blue-500/10 to-blue-500/5 text-blue-600 dark:text-blue-400 text-xs font-medium rounded-md border border-blue-500/10">
                                                C++
                                            </span>
                                            <span className="px-2.5 py-1 bg-gradient-to-r from-teal-500/10 to-teal-500/5 text-teal-600 dark:text-teal-400 text-xs font-medium rounded-md border border-teal-500/10">
                                                Qt
                                            </span>
                                            <span className="px-2.5 py-1 bg-gradient-to-r from-red-500/10 to-red-500/5 text-red-600 dark:text-red-400 text-xs font-medium rounded-md border border-red-500/10">
                                                Sockets
                                            </span>
                                        </div>
                                        
                                        {/* Links with icons */}
                                        <div className="flex items-center gap-4">
                                            <a target="_blank" href="https://github.com/faiz-oussama/Chat-App-Advanced" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity duration-300">
                                                <svg width="20" height="20" fill={darkMode ? "#F9F8F6" : "#000"} viewBox="0 0 24 24">
                                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                                </svg>
                                            </a>
                                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke={darkMode ? "#F9F8F6" : "#000"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        
                        {/* View All Projects Button */}
                        <div className="w-full flex justify-center mt-12">
                            <a target="_blank" href="https://github.com/faiz-oussama?tab=repositories" className="px-8 py-3 border-2 rounded-full group overflow-hidden relative inline-flex items-center shadow-md hover:shadow-lg transition-shadow duration-300" style={{
                                borderColor: darkMode ? "#F9F8F6" : "#000",
                                color: darkMode ? "#F9F8F6" : "#000",
                            }}>
                                <span className="absolute inset-0 bg-gradient-to-r from-[#6c72cb] to-[#cb69c1] translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>
                                <span className="relative z-10 group-hover:text-white transition-colors duration-500 font-medium">View All Projects</span>
                                <svg className="w-5 h-5 ml-2 relative z-10 transition-all duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            {/* ABOUT SECTION */}
            <section className="about w-full m-[8em_auto] max-w-[1160px] px-[40px]" id="about">
                <div className="section-header relative mb-16 flex flex-col items-center">
                    <p className="section-title text-[1.2rem] font-light tracking-[1px] uppercase relative z-10 before:absolute before:w-12 before:h-[3px] before:bg-gradient-to-r before:from-[#6c72cb] before:to-[#cb69c1] before:-bottom-4 before:left-1/2 before:-translate-x-1/2" style={{
                        color: darkMode ? "#F9F8F6" : "#000"
                    }}>Who am I</p>
                </div>

                {/* Enhanced grid layout with motion effects */}
                <div className="about-content relative overflow-visible py-[2em] grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-[4em]">
                    {/* Floating elements - decorative shapes with improved animations */}
                    <div className="absolute hidden md:block">
                        <motion.div 
                            className="absolute -top-20 -left-10 w-20 h-20 rounded-full border border-[#6c72cb]/20 opacity-50"
                            animate={{ 
                                y: [0, -15, 0],
                                rotate: [0, 5, 0]
                            }}
                            transition={{ 
                                repeat: Infinity,
                                duration: 6,
                                ease: "easeInOut"
                            }}
                        ></motion.div>
                        <motion.div 
                            className="absolute top-40 -right-10 w-16 h-16 rounded-md rotate-12 border border-[#cb69c1]/20 opacity-30"
                            animate={{ 
                                y: [0, 15, 0],
                                rotate: [12, 20, 12]
                            }}
                            transition={{ 
                                repeat: Infinity,
                                duration: 7,
                                ease: "easeInOut"
                            }}
                        ></motion.div>
                        <motion.div 
                            className="absolute -bottom-10 left-1/3 w-12 h-12 rounded-lg rotate-45 bg-gradient-to-br from-[#6c72cb]/5 to-[#cb69c1]/5"
                            animate={{ 
                                y: [0, -10, 0],
                                x: [0, 5, 0],
                                rotate: [45, 35, 45]
                            }}
                            transition={{ 
                                repeat: Infinity,
                                duration: 5,
                                ease: "easeInOut"
                            }}
                        ></motion.div>
                    </div>
                    
                    {/* Enhanced profile container */}
                    <motion.div 
                        className="profile-container relative w-full h-[450px] group justify-self-center md:justify-self-start"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div 
                            className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl shadow-purple-500/10"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.4 }}
                        >
                            {/* Main image with parallax effect */}
                            <motion.img 
                                className="w-full h-full object-cover"
                                src="/main.jpeg" 
                                alt="Profile"
                                whileHover={{ scale: 1.08 }}
                                transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
                            />
                            
                            {/* Overlay gradients */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                            <div className="absolute inset-0 bg-gradient-to-br from-[#6c72cb]/20 via-transparent to-[#cb69c1]/20 mix-blend-overlay"></div>
                            
                            {/* Interactive hover effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#6c72cb]/0 to-[#cb69c1]/0 group-hover:from-[#6c72cb]/20 group-hover:to-[#cb69c1]/20 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                            
                            {/* Modern grid pattern overlay */}
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_49.5%,rgba(255,255,255,0.05)_49.5%,rgba(255,255,255,0.05)_50.5%,transparent_50.5%),linear-gradient(to_bottom,transparent_49.5%,rgba(255,255,255,0.05)_49.5%,rgba(255,255,255,0.05)_50.5%,transparent_50.5%)] bg-[length:30px_30px] mix-blend-overlay opacity-30"></div>
                        </motion.div>
                        
                        {/* Experience badge with enhanced animation */}
                        <motion.div 
                            className="absolute -bottom-6 -right-6 w-[140px] h-[140px] bg-gradient-to-br from-[#6c72cb] to-[#cb69c1] rounded-full flex items-center justify-center shadow-lg"
                            initial={{ rotate: 12, scale: 0.9, opacity: 0 }}
                            animate={{ rotate: 12, scale: 1, opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            whileHover={{ rotate: 0, scale: 1.05 }}
                        >
                            <div className="absolute inset-[3px] rounded-full bg-black flex flex-col items-center justify-center text-white">
                                <span className="text-4xl font-bold">5+</span>
                                <span className="text-xs tracking-wide mt-1">YEARS EXP</span>
                            </div>
                        </motion.div>
                    </motion.div>
                    
                    {/* Text content with enhanced layout and spacing */}
                    <div className="text w-full flex flex-col justify-between" style={{
                        color: darkMode ? "#F9F8F6" : "#000"
                    }}>

                        {/* Enhanced main content paragraph with animated reveal */}
                        <motion.p 
                            className="text-4xl md:text-3xl max-w-[50ch] mb-[1em] font-medium leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                        >
                            I'm a creative problem-solver with a passion for turning complex challenges into 
                            <motion.span 
                                className="relative mx-2 inline-block"
                                whileHover={{ scale: 1.05 }}
                            >
                                <span className="relative z-10 text-white px-2 py-0.5 font-semibold">elegant solutions</span>
                                <span className="absolute inset-0 bg-gradient-to-r from-[#6c72cb] to-[#cb69c1] rounded-md transform -skew-x-6"></span>
                            </motion.span>. 
                            With experience in full-stack development, 
                            I thrive on building
                            <motion.span 
                                className="relative mx-2 inline-block"
                                whileHover={{ scale: 1.05 }}
                            >
                                <span className="relative z-10 text-white px-2 py-0.5 font-semibold">intuitive, scalable</span>
                                <span className="absolute inset-0 bg-gradient-to-r from-[#cb69c1] to-[#6c72cb] rounded-md transform skew-x-6"></span>
                            </motion.span> 
                            high quality web experiences through clean code and thoughtful design. 
                        </motion.p>
                        
                        
                        {/* Call to action */}
                        <motion.div
                            className="" 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.8, duration: 0.5 }}
                        >
                            <motion.a
                                href="#contact"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#6c72cb] to-[#cb69c1] text-white rounded-lg shadow-lg shadow-purple-500/20 font-medium"
                                whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(108, 114, 203, 0.2), 0 8px 10px -6px rgba(203, 105, 193, 0.2)" }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Get in touch
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </motion.a>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Skills */}
            <section className="w-full my-[10em] px-10 flex items-center justify-center flex-col gap-20 overflow-x-hidden" id="skills">
            <p className="text-[1.2rem] font-light tracking-[0.5px] uppercase opacity-50" 
                style={{ color: darkMode ? "#F9F8F6" : "#000" }}>
                Skills & Services
            </p>

            <div className="flex flex-col gap-20 w-full">
                {/* Web development */}
                <div className="flex items-center justify-center">
                <p className="text-[clamp(1.5rem,7vw,7rem)] whitespace-nowrap font-semibold tracking-[-0.05em]"
                    style={{ color: darkMode ? "#F9F8F6" : "#000" }}>
                    Web
                </p>
                <div className="video-wrapper w-0 md:w-12 lg:w-[12rem] mx-4 border-2 border-transparent rounded-[30px] overflow-hidden flex items-center justify-center transition-all duration-500 video-visible">
                    <video preload="auto" autoPlay loop playsInline poster="https://davidhaz.com/images/web_development_placeholder.webp" className="w-full h-full object-cover rounded-[30px] transform scale-100 transition-transform duration-500">
                    <source src="https://davidhaz.com/videos/web_develop.mp4" type="video/mp4" />
                    </video>
                </div>
                <p className="text-[clamp(1.5rem,7vw,7rem)] whitespace-nowrap font-semibold tracking-[-0.05em]"
                    style={{ color: darkMode ? "#F9F8F6" : "#000" }}>
                    development
                </p>
                </div>

                {/* Interface design */}
                <div className="flex items-center justify-center">
                <p className="text-[clamp(1.5rem,7vw,7rem)] whitespace-nowrap font-semibold tracking-[-0.05em]"
                    style={{ color: darkMode ? "#F9F8F6" : "#000" }}>
                    Interface
                </p>
                <div className="video-wrapper w-0 md:w-8 lg:w-[12rem] mx-4 border-2 border-transparent rounded-[30px] overflow-hidden flex items-center justify-center transition-all duration-500 video-visible">
                    <video preload="auto" autoPlay loop playsInline poster="https://davidhaz.com/images/interface_design_placeholder.webp" className="w-full h-full object-cover rounded-[30px] transform scale-100 transition-transform duration-500">
                    <source src="https://davidhaz.com/videos/interface_design.mp4" type="video/mp4" />
                    </video>
                </div>
                <p className="text-[clamp(1.5rem,7vw,7rem)] whitespace-nowrap font-semibold tracking-[-0.05em]"
                    style={{ color: darkMode ? "#F9F8F6" : "#000" }}>
                    design
                </p>
                </div>

                {/* 3D web experiences */}
                <div className="flex items-center justify-center">
                <p className="text-[clamp(1.5rem,7vw,7rem)] whitespace-nowrap font-semibold tracking-[-0.05em]"
                    style={{ color: darkMode ? "#F9F8F6" : "#000" }}>
                    3D web
                </p>
                <div className="video-wrapper w-0 md:w-8 lg:w-[12rem] mx-4 border-2 border-transparent rounded-[30px] overflow-hidden flex items-center justify-center transition-all duration-500 video-visible">
                    <video preload="auto" autoPlay loop playsInline poster="https://davidhaz.com/images/3d_web_experiences_placeholder.webp" className="w-full h-full object-cover rounded-[30px] transform scale-100 transition-transform duration-500">
                    <source src="https://davidhaz.com/videos/3d_web_experiences.mp4" type="video/mp4" />
                    </video>
                </div>
                <p className="text-[clamp(1.5rem,7vw,7rem)] whitespace-nowrap font-semibold tracking-[-0.05em]"
                    style={{ color: darkMode ? "#F9F8F6" : "#000" }}>
                    experiences
                </p>
                </div>

                {/* Creative coding */}
                <div className="flex items-center justify-center">
                <p className="text-[clamp(1.5rem,7vw,7rem)] whitespace-nowrap font-semibold tracking-[-0.05em]"
                    style={{ color: darkMode ? "#F9F8F6" : "#000" }}>
                    Creative
                </p>
                <div className="video-wrapper w-0 md:w-8 lg:w-[12rem] mx-4 border-2 border-transparent rounded-[30px] overflow-hidden flex items-center justify-center transition-all duration-500 video-visible">
                    <video preload="none" autoPlay loop playsInline poster="https://davidhaz.com/images/creative_coding_placeholder.webp" className="w-full h-full object-cover rounded-[30px] transform scale-100 transition-transform duration-500">
                    <source src="https://davidhaz.com/videos/creative_coding.mp4" type="video/mp4" />
                    </video>
                </div>
                <p className="text-[clamp(1.5rem,7vw,7rem)] whitespace-nowrap font-semibold tracking-[-0.05em]"
                    style={{ color: darkMode ? "#F9F8F6" : "#000" }}>
                    coding
                </p>
                </div>

                {/* Solid engineering */}
                <div className="flex items-center justify-center">
                <p className="text-[clamp(1.5rem,7vw,7rem)] whitespace-nowrap font-semibold tracking-[-0.05em]"
                    style={{ color: darkMode ? "#F9F8F6" : "#000" }}>
                    Solid
                </p>
                <div className="video-wrapper w-0 md:w-8 lg:w-[12rem] mx-4 border-2 border-transparent rounded-[30px] overflow-hidden flex items-center justify-center transition-all duration-500 video-visible">
                    <video preload="auto" autoPlay loop playsInline poster="https://davidhaz.com/images/solid_engineering_placeholder.webp" className="w-full h-full object-cover rounded-[30px] transform scale-100 transition-transform duration-500">
                    <source src="https://davidhaz.com/videos/solid_engineering.mp4" type="video/mp4" />
                    </video>
                </div>
                <p className="text-[clamp(1.5rem,7vw,7rem)] whitespace-nowrap font-semibold tracking-[-0.05em]"
                    style={{ color: darkMode ? "#F9F8F6" : "#000" }}>
                    engineering
                </p>
                </div>
            </div>
            </section>

            {/* CONTACT SECTION */}
            <section className="contact-container w-full max-w-[1800px] m-[2em_auto_auto] h-auto px-[40px]" id="contact">
                <div className="contact relative w-full overflow-x-hidden h-[700px] rounded-[30px] py-[5em] px-[6em] mb-[2em]">
                    <img src="/bg.webp" alt="Contact background" className="absolute inset-0 w-full h-full object-cover rounded-[30px]"/>
                    
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
