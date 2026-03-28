import React, { useRef } from 'react';
import { m, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Globe, Server, Zap } from 'lucide-react';

const ServiceCard = ({ title, description, icon }: { title: string, description: string, icon: React.ReactNode }) => {
    const ref = useRef<HTMLDivElement>(null);
    
    const x = useMotionValue(0.5);
    const y = useMotionValue(0.5);
    
    const smoothX = useSpring(x, { damping: 20, stiffness: 150, mass: 0.5 });
    const smoothY = useSpring(y, { damping: 20, stiffness: 150, mass: 0.5 });

    const rotateX = useTransform(smoothY, [0, 1], [10, -10]);
    const rotateY = useTransform(smoothX, [0, 1], [-10, 10]);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!ref.current) return;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        x.set((e.clientX - left) / width);
        y.set((e.clientY - top) / height);
    };

    const handleMouseLeave = () => {
        x.set(0.5);
        y.set(0.5);
    };

    return (
        <m.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative w-full p-8 md:p-10 rounded-3xl bg-[#131313] transition-colors duration-500 group cursor-pointer shadow-[0_40px_40px_-20px_rgba(184,195,255,0.02)] hover:shadow-[0_40px_40px_-20px_rgba(46,91,255,0.06)]"
        >
            {/* 3D Content Layer */}
            <div style={{ transform: "translateZ(60px)" }} className="flex flex-col gap-6 relative z-10 pointer-events-none">
                <div className="w-14 h-14 rounded-full bg-[#0E0E0E] flex items-center justify-center text-[#2E5BFF] border border-[#B8C3FF]/10 group-hover:scale-110 transition-transform duration-500">
                    {icon}
                </div>
                <div>
                    <h3 className="text-2xl font-['Space_Grotesk'] font-bold text-[#E5E2E1] mb-4 tracking-tight">{title}</h3>
                    <p className="text-[#A3A3A3] font-['Manrope'] font-light leading-relaxed">{description}</p>
                </div>
            </div>
            
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#2E5BFF]/0 to-[#B8C3FF]/0 group-hover:from-[#2E5BFF]/5 group-hover:to-[#B8C3FF]/5 rounded-3xl transition-all duration-500 pointer-events-none" />
            
            {/* Ghost Border Fallback */}
            <div className="absolute inset-0 border border-[#B8C3FF]/10 group-hover:border-[#2E5BFF]/30 rounded-3xl pointer-events-none transition-colors duration-500" />
        </m.div>
    );
};

export const ServicesSection = () => {
    return (
        <section className="relative w-full min-h-[80svh] bg-[#0E0E0E] py-32 px-6 flex items-center justify-center [perspective:1200px] z-20">
            <div className="max-w-6xl mx-auto w-full">
                <m.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-20 text-center md:text-left"
                >
                    <h2 className="text-4xl md:text-6xl font-['Space_Grotesk'] font-bold text-[#E5E2E1] tracking-[-0.04em] mb-6">
                        Architectural Precision.<br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8C3FF] to-[#2E5BFF]">Unmatched Speed.</span>
                    </h2>
                </m.div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    <ServiceCard title="Platform Engineering" description="We build monolithic software architectures designed to process massive traffic with zero latency." icon={<Server size={24} />} />
                    <ServiceCard title="Nationwide SEO" description="Data-driven programmatic SEO that dominates Google algorithms and captures nationwide market share." icon={<Globe size={24} />} />
                    <ServiceCard title="High-Octane UI" description="Award-winning micro-interactions and WebGL environments that convert visitors into revenue." icon={<Zap size={24} />} />
                </div>
            </div>
        </section>
    );
};