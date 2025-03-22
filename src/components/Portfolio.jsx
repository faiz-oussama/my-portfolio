import React, { useContext, useEffect, useRef } from "react";
import ToggleButton from "./ToggleButton";
import { DarkModeContext } from "./DarkModeProvider";
import Iridescence from '../assets/iridescence';

export default function Portfolio() {
    const { darkMode } = useContext(DarkModeContext);
    const grainCanvasRef = useRef(null);
    const contactGrainCanvasRef = useRef(null);
    
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
    
    return (
        <div className={`min-h-screen ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`} style={{ 
            fontFamily: "Matter, sans-serif",
            letterSpacing: "-0.05em"
        }}>
            {/* HEADER SECTION */}
            <header className="header-main w-full fixed z-[99]">
                {/* top line */}
                <div className="top-line w-full h-[10px] fixed top-0 left-0" style={{
                    backgroundColor: darkMode ? "#000" : "#F9F8F6"
                }}></div>
                
                {/* header container */}
                <div className="header-container flex items-start w-full m-auto max-w-[1800px] px-[40px]">
                    {/* logo box */}
                    <div className="header-logo-box flex items-center justify-between w-auto pr-[1em] h-[80px] rounded-b-[30px] mr-[11px] relative z-[20]" style={{
                        backgroundColor: darkMode ? "#000" : "#F9F8F6"
                    }}>
                        <a href="#">
                            <img 
                                src="/Oussama.svg" 
                                alt="Oussama Logo" 
                                className={`w-[100px] relative ${darkMode ? 'filter invert' : ''}`}
                            />
                        </a>
                        
                        {/* SVG Corner Elements */}
                        <svg className="svg-corner corner-logo-box-one absolute bottom-[-30px] left-0" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_310_2)">
                                <path d="M30 0H0V30C0 13.431 13.431 0 30 0Z" fill={darkMode ? "#000" : "#F9F8F6"}></path>
                            </g>
                            <defs>
                                <clipPath id="clip0_310_2">
                                    <rect width="30" height="30" fill="white"></rect>
                                </clipPath>
                            </defs>
                        </svg>
                        
                        <svg className="svg-corner corner-logo-box-two absolute right-[-30px] top-0" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_310_2)">
                                <path d="M30 0H0V30C0 13.431 13.431 0 30 0Z" fill={darkMode ? "#000" : "#F9F8F6"}></path>
                            </g>
                            <defs>
                                <clipPath id="clip0_310_2">
                                    <rect width="30" height="30" fill="white"></rect>
                                </clipPath>
                            </defs>
                        </svg>
                        
                        {/* Mobile Menu (hidden on desktop) */}
                        <div className="mobile-menu hidden sm:flex cursor-pointer font-medium w-[80px] mr-[0.6em] h-[40px] justify-center items-center rounded-[20px] relative z-[2]" style={{
                            color: darkMode ? "#F9F8F6" : "#000",
                            border: darkMode ? "1.5px solid #F9F8F6" : "1.5px solid #000"
                        }}>
                            Menu
                            <svg className="svg-corner corner-menu-one hidden absolute left-[-41px] bottom-[-22px] rotate-[180deg]" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                        
                        {/* Mobile Menu Container (hidden) */}
                        <div className="menu-container hidden flex-col p-[2em_1em] bg-[#5C54F9] h-[80dvh] max-h-[540px] w-full absolute top-[80px] rounded-[30px_0_30px_30px] shadow-[0_10px_20px_#00000040] text-[#F9F8F6]">
                            <a href="#projects" className="mobile-link text-[2rem] w-full border-b border-[#F9F8F6] pb-[0.3em] mb-[0.3em] cursor-pointer transition-opacity duration-300 hover:opacity-80">Projects</a>
                            <a href="#about" className="mobile-link text-[2rem] w-full border-b border-[#F9F8F6] pb-[0.3em] mb-[0.3em] cursor-pointer transition-opacity duration-300 hover:opacity-80">About</a>
                            <a href="#blog" className="mobile-link text-[2rem] w-full border-b border-[#F9F8F6] pb-[0.3em] mb-[0.3em] cursor-pointer transition-opacity duration-300 hover:opacity-80">Blog</a>
                            <a href="#contact" className="mobile-link text-[2rem] w-full border-b border-[#F9F8F6] pb-[0.3em] mb-[0.3em] cursor-pointer transition-opacity duration-300 hover:opacity-80">Contact</a>
                            
                            <div className="mobile-theme-switch absolute bottom-[1em] w-fit rounded-[50px] h-[60px] border-[1.5px] border-[#F9F8F6] flex p-[0.6em] items-center justify-center" style={{
                                backgroundColor: darkMode ? "#F9F8F6" : "#5C54F9"
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
                    
                    {/* Navigation */}
                    <div style={{ transform: "translateX(0px)" }}>
                        <nav className="navigation relative top-[10px] h-[58px] rounded-[50px] py-0 px-[0.5em] flex items-center justify-evenly backdrop-blur-[10px] saturate-[200%] bg-[#ffffff80] border border-[rgba(209,213,219,.5)] shadow-[0_3px_20px_-5px_#00000026]">
                            <a href="#projects" className="text-base font-normal mx-[0.85em] leading-[1.15] transition-opacity duration-200 select-none hover:opacity-70">Projects</a>
                            <a href="#about" className="text-base font-normal mx-[0.85em] leading-[1.15] transition-opacity duration-200 select-none hover:opacity-70">About</a>
                            <a href="#blog" className="text-base font-normal mx-[0.85em] leading-[1.15] transition-opacity duration-200 select-none hover:opacity-70">Blog</a>
                            <a href="#contact" className="text-base font-normal mx-[0.85em] mr-[2em] leading-[1.15] transition-opacity duration-200 select-none hover:opacity-70">Contact</a>
                            
                            <label className="container IsLight">
                                <input type="checkbox" />
                                <div></div>
                            </label>
                        </nav>
                    </div>
                </div>
            </header>

            {/* HERO SECTION */}
            <div className="hero flex mt-[10px] overflow-hidden">
                <div className="main-container w-full m-auto max-w-[1800px] px-[40px]">
                    <div className="hero-container flex justify-between gap-[0.6em] min-h-[630px] h-[95vh]">
                        {/* Hero Left */}
                        <div className="hero-left relative w-full h-full rounded-[30px] flex items-end">
                            <div className="gradient-container overflow-hidden rounded-[30px] absolute h-full w-full">
                                <canvas ref={grainCanvasRef} className="grain absolute w-full h-full rounded-[30px] z-[1]" width="904" height="895"></canvas>
                                <div className="hero-gradient w-full h-full rounded-[30px]">
                                    <Iridescence
                                        color={[0.3, 0.9, 1]}
                                        mouseReact={true}
                                        amplitude={0.1}
                                        speed={1.0}
                                    />
                                </div>
                            </div>
                            
                            <div className="content-box rounded-tr-[30px] w-full max-w-[50%] h-[250px] relative z-[2] flex flex-col items-start justify-between p-[20px_20px_0_0]" style={{
                                backgroundColor: darkMode ? "#000" : "#F9F8F6",
                                color: darkMode ? "#F9F8F6" : "#000"
                            }}>
                                <svg className="svg-corner corner-content-box-one absolute right-[-30px] bottom-0 rotate-[-90deg]" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_310_2)">
                                        <path d="M30 0H0V30C0 13.431 13.431 0 30 0Z" fill={darkMode ? "#000" : "#F9F8F6"}></path>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_310_2">
                                            <rect width="30" height="30" fill="white"></rect>
                                        </clipPath>
                                    </defs>
                                </svg>
                                
                                <svg className="svg-corner corner-content-box-two absolute left-0 top-[-30px] rotate-[-90deg]" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_310_2)">
                                        <path d="M30 0H0V30C0 13.431 13.431 0 30 0Z" fill={darkMode ? "#000" : "#F9F8F6"}></path>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_310_2">
                                            <rect width="30" height="30" fill="white"></rect>
                                        </clipPath>
                                    </defs>
                                </svg>
                                
                                <h1 className="title text-[clamp(2.35rem,2.114rem+1vw,3.75rem)] max-w-[20ch] font-normal leading-[1.1]">
                                    <p>
                                        <span className="word">Equal&nbsp;</span>
                                        <span className="word">parts&nbsp;</span>
                                        <span className="word">creative&nbsp;</span>
                                        <span className="word">developer&nbsp;</span>
                                        <span className="word">&amp;&nbsp;</span>
                                        <span className="word">designer&nbsp;</span>
                                    </p>
                                </h1>
                                
                                <a className="scroll-indicator w-[50px] min-h-[50px] border-2 rounded-[50px] mb-[4px] flex items-center justify-center" style={{
                                    borderColor: darkMode ? "#F9F8F6" : "#000",
                                    backgroundColor: darkMode ? "transparent" : "#000"
                                }} href="#about">
                                    <img className="rotate-90" src="data:image/svg+xml,%3csvg%20width='19'%20height='19'%20viewBox='0%200%2019%2019'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M16.5%209.5H2.5M16.5%209.5L10.5%2015.5M16.5%209.5L10.5%203.5'%20stroke='white'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e" />
                                </a>
                            </div>
                        </div>
                        
                        {/* Hero Right */}
                        <div className="hero-right flex flex-col justify-between gap-[0.6em] items-center h-full">
                            {/* Circle Stats */}
                            <div className="circle-stats w-[280px] aspect-square rounded-full" style={{
                                backgroundColor: darkMode ? "#000" : "#000",
                                border: darkMode ? "2px solid #F9F8F6" : "2px solid #000"
                            }}>
                                <div className="circle-overflow overflow-hidden rounded-full">
                                    <div id="circle-slider" className="aspect-square rounded-full">
                                        <div className="text-[#F9F8F6] rounded-full flex flex-col items-center justify-center text-center pb-[1em]">
                                            <h2 className="text-[4rem]">10+</h2>
                                            <p className="text-[1rem] opacity-70 max-w-[15ch]">Major projects delivered successfully</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Blog Posts */}
                            <div className="blog-posts relative w-[280px] h-full rounded-[30px]">
                                <div className="blog-slider-button w-[60px] aspect-square rounded-[35px_0_0] z-[4] absolute bottom-0 right-0 flex items-end justify-end" style={{
                                    backgroundColor: darkMode ? "#000" : "#F9F8F6"
                                }}>
                                    <span className="w-[50px] aspect-square text-[#F9F8F6] rounded-full flex items-center justify-center" style={{
                                        backgroundColor: darkMode ? "#000" : "#000",
                                        border: darkMode ? "2px solid #F9F8F6" : "2px solid #000"
                                    }}>
                                        <img src="data:image/svg+xml,%3csvg%20width='19'%20height='19'%20viewBox='0%200%2019%2019'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M16.5%209.5H2.5M16.5%209.5L10.5%2015.5M16.5%209.5L10.5%203.5'%20stroke='white'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e" alt="arrow pointing right" />
                                    </span>
                                    
                                    <svg className="svg-corner corner-slider-button-one absolute left-[-30px] bottom-0 rotate-[180deg]" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_310_2)">
                                            <path d="M30 0H0V30C0 13.431 13.431 0 30 0Z" fill={darkMode ? "#000" : "#F9F8F6"}></path>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_310_2">
                                                <rect width="30" height="30" fill="white"></rect>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    
                                    <svg className="svg-corner corner-slider-button-two absolute top-[-30px] right-0 rotate-[180deg]" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_310_2)">
                                            <path d="M30 0H0V30C0 13.431 13.431 0 30 0Z" fill={darkMode ? "#000" : "#F9F8F6"}></path>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_310_2">
                                                <rect width="30" height="30" fill="white"></rect>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                
                                <div id="blog-slider" className="relative rounded-[30px] bg-[#5C54F9] h-full">
                                    <div className="text-[#F9F8F6] flex flex-col items-start justify-start p-[1em] pb-[4em]">
                                        <img className="object-cover rounded-[20px] mb-[1em] w-full h-[150px]" src="/assets/tailwind-blogpost-ylV1NaYL.svg" />
                                        <p className="w-[20ch] text-[1.4rem] font-normal">Building a responsive design system with Tailwind CSS.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* PROJECTS SECTION */}
            <section className="projects w-full m-auto max-w-[1160px] px-[40px]" id="projects">
                <div className="projects-content mt-[6em] flex flex-col items-center w-full">
                    <p className="projects-title text-[1.2rem] font-light tracking-[0.5px] uppercase opacity-50 mb-[4em]" style={{
                        color: darkMode ? "#F9F8F6" : "#000"
                    }}>Selected Work</p>
                    
                    <div className="project-cards min-h-[400px] w-full flex flex-col">
                        <div className="transform-gpu translate-y-0 scale-100 opacity-100">
                            <a target="_blank" href="#" className="card w-full mb-[1.5em] border-b relative flex items-end" style={{
                                borderColor: darkMode ? "#F9F8F6" : "#000",
                                borderWidth: darkMode ? "2px" : "1px"
                            }}>
                                <div className="card-text w-full text-black flex flex-col justify-end items-start pb-[1em] transition-[padding-left] duration-300">
                                    <p className="description text-[0.8rem] relative left-[8px] top-[15px] font-light tracking-[1px] uppercase mb-[0.4em]">React Utility Library</p>
                                    <h2 className="title tracking-[-3px] text-[6rem] font-normal">Haiku</h2>
                                </div>
                            </a>
                        </div>
                        
                        <div className="transform-gpu translate-y-0 scale-100 opacity-100">
                            <a target="_blank" href="#" className="card w-full mb-[1.5em] border-b relative flex items-end" style={{
                                borderColor: darkMode ? "#F9F8F6" : "#000",
                                borderWidth: darkMode ? "2px" : "1px"
                            }}>
                                <div className="card-text w-full text-black flex flex-col justify-end items-start pb-[1em] transition-[padding-left] duration-300">
                                    <p className="description text-[0.8rem] relative left-[8px] top-[15px] font-light tracking-[1px] uppercase mb-[0.4em]">Animated UI Components</p>
                                    <h2 className="title tracking-[-3px] text-[6rem] font-normal">React Bits</h2>
                                </div>
                            </a>
                        </div>
                        
                        <div className="transform-gpu translate-y-0 scale-100 opacity-100">
                            <a target="_blank" href="#" className="card w-full mb-[1.5em] border-b relative flex items-end" style={{
                                borderColor: darkMode ? "#F9F8F6" : "#000",
                                borderWidth: darkMode ? "2px" : "1px"
                            }}>
                                <div className="card-text w-full text-black flex flex-col justify-end items-start pb-[1em] transition-[padding-left] duration-300">
                                    <p className="description text-[0.8rem] relative left-[8px] top-[15px] font-light tracking-[1px] uppercase mb-[0.4em]">Straightforward IP Tracker</p>
                                    <h2 className="title tracking-[-3px] text-[6rem] font-normal">IP Wire</h2>
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
                        
                        <a href="#contact" className="star-button blur blur-visible w-fit mb-0 py-[0.5em] px-[1em] rounded-[50px] font-normal text-[1.8rem] flex gap-[0.3em] items-center transition-[filter,background-color,color] duration-300" style={{
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

            {/* SKILLS SECTION */}
            <section className="skills overflow-x-hidden my-[10em] px-[40px] flex items-center justify-center flex-col gap-[5em]">
                <p className="skills-title text-[1.2rem] font-light tracking-[0.5px] uppercase opacity-50" style={{
                    color: darkMode ? "#F9F8F6" : "#000"
                }}>Skills & Services</p>
                
                <div className="skill-section flex items-center">
                    <p className="text-[7rem] text-nowrap tracking-[-0.05em] font-semibold" style={{
                        color: darkMode ? "#F9F8F6" : "#000"
                    }}>Web</p>
                    
                    <span className="video-wrapper video-visible w-[12rem] rounded-[30px] border-2 border-transparent mx-[1em] overflow-hidden flex items-center justify-center" style={{
                        borderColor: darkMode ? "#F9F8F6" : "#000"
                    }}>
                        <video className="rounded-[30px] object-cover transform scale-100 transition-transform duration-500" preload="none" autoPlay loop playsInline poster="https://davidhaz.com/images/web_development_placeholder.webp">
                            <source src="https://davidhaz.com/videos/web_develop.mp4" type="video/mp4" />
                        </video>
                    </span>
                    
                    <p className="text-[7rem] text-nowrap tracking-[-0.05em] font-semibold" style={{
                        color: darkMode ? "#F9F8F6" : "#000"
                    }}>development</p>
                </div>
                
                <div className="skill-section flex items-center">
                    <p className="text-[7rem] text-nowrap tracking-[-0.05em] font-semibold" style={{
                        color: darkMode ? "#F9F8F6" : "#000"
                    }}>Interface</p>
                    
                    <span className="video-wrapper video-visible w-[12rem] rounded-[30px] border-2 border-transparent mx-[1em] overflow-hidden flex items-center justify-center" style={{
                        borderColor: darkMode ? "#F9F8F6" : "#000"
                    }}>
                        <video className="rounded-[30px] object-cover transform scale-100 transition-transform duration-500" preload="none" autoPlay loop playsInline poster="https://davidhaz.com/images/interface_design_placeholder.webp">
                            <source src="https://davidhaz.com/videos/interface_design.mp4" type="video/mp4" />
                        </video>
                    </span>
                    
                    <p className="text-[7rem] text-nowrap tracking-[-0.05em] font-semibold" style={{
                        color: darkMode ? "#F9F8F6" : "#000"
                    }}>design</p>
                </div>
            </section>

            {/* CONTACT SECTION */}
            <section className="contact-container w-full max-w-[1800px] m-[2em_auto_auto] h-auto px-[40px]" id="contact">
                <div className="contact relative w-full overflow-x-hidden h-[700px] rounded-[30px] py-[5em] px-[6em] mb-[2em]">
                    <div className="contact-gradient rounded-[30px] overflow-hidden h-full w-full left-0 top-0 absolute">
                        <video className="contact-video absolute h-full object-cover w-full blur-[10px] scale-[1.2]" preload="none" autoPlay loop playsInline poster="https://davidhaz.com/images/gradient_placeholder.webp">
                            <source src="https://davidhaz.com/videos/gradient.mp4" type="video/mp4" />
                        </video>
                        
                        <canvas ref={contactGrainCanvasRef} className="grain absolute rounded-[30px] top-0" width="904" height="895"></canvas>
                    </div>
                    
                    <div className="contact-content h-full relative flex flex-col justify-between z-[2]">
                        <h2 className="text-[6rem] font-normal text-[#F9F8F6] leading-[1.1em]">
                            Wanna create <br/> something <span className="font-bold">awesome</span> <br/> together?
                        </h2>
                        
                        <div className="contact-details self-end flex flex-col items-end">
                            <a href="mailto:contact@example.com" className="star-button text-[#F9F8F6] border-2 border-[#F9F8F6] hover:bg-[#F9F8F6] hover:text-black">
                                <span>✦</span>Let's talk<span>✦</span>
                            </a>
                            
                            <p className="mail-link font-light text-[1.4rem] text-[#F9F8F6]">
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
