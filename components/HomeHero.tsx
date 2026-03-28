import React, { useRef, useState, useEffect } from 'react';
import { m, useReducedMotion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from 'framer-motion';
import { Globe, Zap, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { WhatsAppButton } from './WhatsAppButton';

// The Kinetic Cursor: Replaces the default cursor with a dynamically scaling spotlight
const KineticCursor = () => {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);
    const scale = useMotionValue(1);
    const opacity = useMotionValue(0);
    
    // Smooth the cursor movement heavily for that premium "dragging" feel
    const smoothX = useSpring(cursorX, { damping: 50, stiffness: 400, mass: 0.5 });
    const smoothY = useSpring(cursorY, { damping: 50, stiffness: 400, mass: 0.5 });
    const smoothScale = useSpring(scale, { damping: 30, stiffness: 200, mass: 0.5 });

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);
            if (opacity.get() === 0) opacity.set(0.15); // Show cursor once mouse moves
        };
        
        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isClickable = window.getComputedStyle(target).cursor === 'pointer' || 
                              target.tagName.toLowerCase() === 'a' || 
                              target.tagName.toLowerCase() === 'button' ||
                              target.closest('a') !== null ||
                              target.closest('button') !== null;
                              
            if (isClickable) {
                scale.set(3); // Expand circle
                opacity.set(0.3); // Brighten
            } else {
                scale.set(1);
                opacity.set(0.15);
            }
        };

        window.addEventListener('mousemove', moveCursor, { passive: true });
        window.addEventListener('mouseover', handleMouseOver, { passive: true });

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [cursorX, cursorY, opacity, scale]);

    return (
        <m.div 
            className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999]"
            style={{
                x: smoothX,
                y: smoothY,
                scale: smoothScale,
                opacity: opacity,
                background: "radial-gradient(circle, rgba(184, 195, 255, 1) 0%, rgba(184, 195, 255, 0) 80%)",
            }}
        />
    );
};

// Magnetic Button handles the micro-interaction pull on hover without layout thrashing
export const MagneticButton = ({ children, onClick, className = "", strength = 0.3 }: { children: React.ReactNode, onClick?: () => void, className?: string, strength?: number }) => {
    const ref = useRef<HTMLDivElement>(null);
    const bounds = useRef({ width: 0, height: 0, left: 0, top: 0 });
    
    // Bypassing React State: Use raw motion values to stop re-renders during mouse tracking
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const smoothX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
    const smoothY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

    const handleMouseEnter = () => {
        if (ref.current) {
            bounds.current = ref.current.getBoundingClientRect();
        }
    };

    const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const { clientX, clientY } = e;
        // Using cached bounds completely removes layout thrashing lag
        const { height, width, left, top } = bounds.current;
        x.set((clientX - (left + width / 2)) * strength);
        y.set((clientY - (top + height / 2)) * strength);
    };

    const reset = () => { x.set(0); y.set(0); };

    return (
        <m.div
            ref={ref}
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            style={{ x: smoothX, y: smoothY }}
            onClick={onClick}
            className={`relative group ${className}`}
        >
            {children}
        </m.div>
    );
};

export const HomeHero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const shouldReduceMotion = useReducedMotion();
    
    // Using raw scrollY for Hero sections is natively smoother with custom scrollers (Lenis) 
    // because it completely bypasses IntersectionObserver bounding recalculation.
    const { scrollY } = useScroll();
    
    // Direct scroll mapping
    const contentY = useTransform(scrollY, [0, 1000], [0, shouldReduceMotion ? 0 : 400]);
    const contentOpacity = useTransform(scrollY, [0, 700], [1, 0]);
    const contentScale = useTransform(scrollY, [0, 1000], [1, 0.85]);

    // Dramatically increased background parallax for visibility
    const orb1Y = useTransform(scrollY, [0, 1000], [0, shouldReduceMotion ? 0 : -500]);
    const orb1Scale = useTransform(scrollY, [0, 1000], [1, shouldReduceMotion ? 1 : 1.8]);
    const orb2Y = useTransform(scrollY, [0, 1000], [0, shouldReduceMotion ? 0 : 500]);
    const orb2X = useTransform(scrollY, [0, 1000], [0, shouldReduceMotion ? 0 : -200]);
    const gridRotateX = useTransform(scrollY, [0, 1000], [70, 30]);

    // Mouse movement transforms (Normalized 0 to 1 for perfect responsiveness)
    const mouseX = useMotionValue(0.5);
    const mouseY = useMotionValue(0.5);
    
    const smoothMouseX = useSpring(mouseX, { damping: 25, stiffness: 200, mass: 0.1 });
    const smoothMouseY = useSpring(mouseY, { damping: 25, stiffness: 200, mass: 0.1 });

    const rotateX = useTransform(smoothMouseY, [0, 1], [10, -10]);
    const rotateY = useTransform(smoothMouseX, [0, 1], [-10, 10]);

    // GPU-Accelerated Spotlight: Animating transform X and Y is completely free vs animating backgrounds
    const spotlightX = useTransform(smoothMouseX, [0, 1], ["calc(0vw - 400px)", "calc(100vw - 400px)"]);
    const spotlightY = useTransform(smoothMouseY, [0, 1], ["calc(0vh - 400px)", "calc(100vh - 400px)"]);

    useEffect(() => {
        const handleGlobalMouseMove = (e: MouseEvent) => {
            // Avoid React Synthetic Events to completely eliminate scroll layout thrashing
            mouseX.set(e.clientX / window.innerWidth);
            mouseY.set(e.clientY / window.innerHeight);
        };
        
        const handleGlobalMouseLeave = () => {
            mouseX.set(0.5);
            mouseY.set(0.5);
        };

        window.addEventListener("mousemove", handleGlobalMouseMove, { passive: true });
        document.body.addEventListener("mouseleave", handleGlobalMouseLeave, { passive: true });
        return () => {
            window.removeEventListener("mousemove", handleGlobalMouseMove);
            document.body.removeEventListener("mouseleave", handleGlobalMouseLeave);
        };
    }, [mouseX, mouseY]);

    const titleWords = ["Engineering", "Digital", "Dominance."];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.1 }
        }
    };

    const wordVariants = {
        hidden: { opacity: 0, y: 120, rotateX: -60 },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: { type: "spring", stiffness: 150, damping: 20, mass: 1 }
        }
    };

    const fadeUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } 
        }
    };

    return (
        <section 
                ref={containerRef}
            // Added cursor-none to hide default cursor and use KineticCursor
            className="relative w-full min-h-[100svh] flex items-center justify-center overflow-hidden bg-[#0E0E0E] pt-24 pb-12 selection:bg-[#B8C3FF]/30 [perspective:1200px] cursor-none"
        >
            <KineticCursor />
            
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
                {/* Mouse Spotlight - GPU Accelerated */}
                <m.div 
                    className="absolute z-0 pointer-events-none will-change-transform"
                    style={{ 
                        x: spotlightX,
                        y: spotlightY,
                        width: "800px",
                        height: "800px",
                        background: "radial-gradient(circle, rgba(184, 195, 255, 0.08) 0%, transparent 80%)",
                    }}
                />

                {/* Parallax Orbs - Removed heavy mix-blend-screen to guarantee 60fps */}
                <m.div style={{ y: orb1Y, scale: orb1Scale }} className="absolute top-[-20%] left-[5%] w-[60vw] h-[60vw] rounded-full bg-[radial-gradient(circle,rgba(46,91,255,0.2)_0%,transparent_60%)]" />
                <m.div style={{ y: orb2Y, x: orb2X }} className="absolute bottom-[-20%] right-[5%] w-[50vw] h-[50vw] rounded-full bg-[radial-gradient(circle,rgba(184,195,255,0.15)_0%,transparent_60%)]" />
                
                {/* 3D Perspective Grid with Hardware Accelerated Infinite Forward Motion */}
                <div className="absolute inset-0 [perspective:1000px]">
                    <m.div 
                        style={{ rotateX: gridRotateX }} 
                        className="absolute bottom-[-50%] left-[-50%] w-[200%] h-[150%] origin-top pointer-events-none [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_80%,transparent_100%)]"
                    >
                        <m.div 
                            animate={shouldReduceMotion ? {} : { y: [0, 64] }}
                            transition={{ repeat: Infinity, ease: "linear", duration: 1.5 }}
                            className="absolute inset-0 bg-[linear-gradient(to_right,rgba(184,195,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(184,195,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] will-change-transform"
                        />
                    </m.div>
                </div>
                
                {/* Subtle Grain Overlay - Removed mix-blend-overlay for massive performance boost */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none [transform:translateZ(0)]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>
            </div>

            <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center">
                {/* Scroll-responsive & Mouse-Tilt wrapper */}
                <m.div 
                    style={{ 
                        y: contentY, 
                        opacity: contentOpacity, 
                        scale: contentScale,
                        rotateX: shouldReduceMotion ? 0 : rotateX,
                        rotateY: shouldReduceMotion ? 0 : rotateY,
                        transformStyle: "preserve-3d"
                    }}
                    variants={containerVariants} 
                    initial="hidden" 
                    animate="visible" 
                    className="flex flex-col items-center max-w-6xl z-20"
                >
                        
                    {/* Editorial Badge - Adheres to "No-Line" Rule */}
                    <m.div variants={fadeUpVariants} style={{ z: 40 }} className="mb-12 relative rounded-full group shadow-[0_40px_40px_-20px_rgba(184,195,255,0.06)]">
                        <div className="relative flex items-center justify-center gap-4 text-[10px] sm:text-xs font-['Manrope',sans-serif] text-[#B8C3FF] uppercase tracking-[0.15em] bg-[#131313] px-6 py-3 rounded-full z-10 transition-transform duration-300 group-hover:scale-105 group-hover:bg-[#1A1A1A]">
                            <span className="flex items-center gap-2 font-semibold"><Sparkles size={14} className="text-[#2E5BFF]" /> CUSTOM WEB ARCHITECTURE</span>
                            <span className="text-[#E5E2E1]/20">|</span>
                            <span className="flex items-center gap-2 font-semibold"><Zap size={14} className="text-[#B8C3FF]" /> NATIONWIDE SEO</span>
                        </div>
                    </m.div>

                    {/* Staggered Word Reveal Headline - Removed mix-blend-screen for perf */}
                    <m.h1 className="text-6xl md:text-[7rem] lg:text-[9rem] font-['Space_Grotesk',sans-serif] font-bold tracking-[-0.04em] text-[#E5E2E1] mb-10 leading-[0.9] relative z-20">
                        {titleWords.map((word, idx) => (
                            <span key={idx} className="inline-block overflow-hidden pb-4 mx-2">
                                {idx === 2 ? (
                                    <m.span 
                                        variants={wordVariants} 
                                        className="inline-block text-transparent bg-clip-text bg-gradient-to-br from-[#B8C3FF] to-[#2E5BFF]"
                                    >
                                        {word}
                                    </m.span>
                                ) : (
                                    <m.span variants={wordVariants} className="inline-block">
                                        {word}
                                    </m.span>
                                )}
                            </span>
                        ))}
                    </m.h1>

                    <m.div variants={fadeUpVariants} style={{ z: 60 }} className="max-w-3xl flex flex-col items-center mt-2">
                        <p className="text-lg md:text-2xl text-neutral-400 leading-relaxed mb-14 font-['Manrope',sans-serif] font-light max-w-2xl">
                            Stop losing customers to slow templates and outdated marketing. We engineer high-speed digital infrastructure that <strong className="text-[#DDE1FF] font-medium drop-shadow-[0_0_15px_rgba(184,195,255,0.3)]">dominates Google rankings</strong> and captures leads.
                        </p>

                        <div className="flex flex-col md:flex-row gap-6 w-full md:w-auto items-center justify-center">
                            <MagneticButton strength={0.4}>
                                <WhatsAppButton serviceName="New Project Inquiry" buttonText="Start Your Project" className="relative px-10 py-5 w-full md:w-auto bg-[#2E5BFF] text-[#E5E2E1] rounded-full font-bold overflow-hidden focus:outline-none transition-all duration-300 group shadow-[0_20px_40px_-10px_rgba(46,91,255,0.3)] hover:shadow-[0_30px_60px_-15px_rgba(184,195,255,0.4)] hover:-translate-y-1" showIcon={false}>
                                    <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#B8C3FF] to-[#2E5BFF] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                                    <span className="relative z-10 flex items-center justify-center gap-3 font-['Manrope',sans-serif] tracking-wide text-sm md:text-base font-semibold">
                                        Start Your Project <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </WhatsAppButton>
                            </MagneticButton>

                            <MagneticButton strength={0.2}>
                                <Link to="/work" className="relative px-8 py-5 w-full md:w-auto flex items-center justify-center bg-transparent text-[#B8C3FF] font-['Manrope',sans-serif] text-sm md:text-base font-semibold tracking-wide rounded-full transition-all duration-300 group">
                                    <span className="relative z-10 overflow-hidden pb-1">
                                        See Our Rankings
                                        <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-[#B8C3FF] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                                    </span>
                                </Link>
                            </MagneticButton>
                        </div>
                    </m.div>

                </m.div>

                {/* Scroll Indicator */}
                <m.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 pointer-events-none"
                >
                    <span className="text-[10px] font-['Manrope',sans-serif] text-neutral-500 uppercase tracking-[0.2em] font-medium">Scroll to Explore</span>
                    <div className="w-[1px] h-12 bg-white/10 relative overflow-hidden">
                        <m.div 
                            animate={{ y: ['-100%', '100%'] }} 
                            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }} 
                            className="absolute inset-0 w-full h-full bg-gradient-to-b from-transparent via-[#B8C3FF] to-transparent" 
                        />
                    </div>
                </m.div>
            </div>
        </section>
    );
};