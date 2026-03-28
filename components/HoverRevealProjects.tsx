import React, { useState, useEffect } from 'react';
import { m, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { IMAGES } from '../images';

const projects = [
    {
        title: "Allied Group",
        category: "B2B Manufacturing",
        result: "Rank #1 on Google in 17 Days",
        image: IMAGES?.SEO?.CASE_STUDY_AFTER || '/project1.jpg',
        link: "/work"
    },
    {
        title: "MediMy OS",
        category: "Healthcare SaaS",
        result: "Custom Next.js Dashboard",
        image: IMAGES?.WEB_ARCHITECTURE?.PORTFOLIO_HEALTHCARE || '/project2.jpg',
        link: "/work"
    },
    {
        title: "LifeSync",
        category: "AI Productivity",
        result: "Flutter Mobile Ecosystem",
        image: IMAGES?.WEB_ARCHITECTURE?.PORTFOLIO_ECOMMERCE || '/project3.jpg',
        link: "/work"
    }
];

export const HoverRevealProjects = () => {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);
    const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);
    
    const imageX = useTransform(cursorXSpring, (val) => (val as number) - 175);
    const imageY = useTransform(cursorYSpring, (val) => (val as number) - 125);

    const [activeProject, setActiveProject] = useState<number | null>(null);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };
        window.addEventListener('mousemove', moveCursor, { passive: true });
        return () => window.removeEventListener('mousemove', moveCursor);
    }, [cursorX, cursorY]);

    const projectVariants = {
        hidden: { opacity: 0, x: 150, filter: "blur(10px)" },
        visible: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
    };

    return (
        <section className="py-32 border-y border-white/5 bg-neutral-950 relative z-10">
            <div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
                <div>
                    <span className="text-blue-500 font-mono text-xs font-black uppercase tracking-[0.2em] mb-4 block">Case Studies</span>
                    <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter">Verified Results.</h2>
                </div>
                <Link to="/work" className="hidden md:flex items-center gap-2 text-xs font-bold text-neutral-400 border-b border-transparent hover:border-white hover:text-white transition-colors uppercase tracking-widest pb-1">
                    View Full Portfolio <ArrowRight size={16} />
                </Link>
            </div>

            <m.div 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true, margin: "-100px" }}
                variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
                className="w-full border-t border-white/5 relative" 
                onMouseLeave={() => setActiveProject(null)}
            >
                {projects.map((project, i) => (
                    <m.div key={i} variants={projectVariants}>
                        <Link to={project.link} className="group block w-full border-b border-white/[0.05] hover:bg-white/[0.02] transition-colors duration-500 relative z-10 overflow-hidden" onMouseEnter={() => setActiveProject(i)}>
                        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                            <div>
                                <span className="text-xs font-mono text-neutral-500 mb-4 block transition-colors duration-300 group-hover:text-blue-400">{project.category}</span>
                                <h3 className="text-5xl md:text-7xl font-black text-neutral-400 tracking-tighter transition-all duration-500 group-hover:text-white group-hover:translate-x-4">{project.title}</h3>
                            </div>
                            <div className="text-left md:text-right mt-4 md:mt-0 transition-transform duration-500 group-hover:-translate-x-4">
                                <span className="text-sm font-bold text-neutral-500 group-hover:text-neutral-300 transition-colors block mb-2">{project.result}</span>
                                <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-600 group-hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 md:justify-end">Read Case Study <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" /></span>
                            </div>
                        </div>
                        {/* Sweeping Hover Line */}
                        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-blue-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                        </Link>
                    </m.div>
                ))}
            </m.div>

            {/* Floating Image Reveal (Hidden on Mobile) */}
            <m.div className="fixed top-0 left-0 w-[350px] h-[250px] rounded-2xl overflow-hidden pointer-events-none z-50 shadow-2xl hidden md:block" style={{ x: imageX, y: imageY, opacity: activeProject !== null ? 1 : 0, scale: activeProject !== null ? 1 : 0.8 }} transition={{ opacity: { duration: 0.2 }, scale: { duration: 0.2 } }}>
                {projects.map((project, i) => (
                    <img key={i} src={project.image} alt={project.title} loading="lazy" decoding="async" className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${activeProject === i ? 'opacity-100' : 'opacity-0'}`} />
                ))}
            </m.div>
        </section>
    );
};