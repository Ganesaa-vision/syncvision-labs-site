import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from 'framer-motion';

const ServiceCard = ({ title, desc }: { title: string, desc: string }) => {
    const ref = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0.5);
    const mouseY = useMotionValue(0.5);

    const springConfig = { stiffness: 150, damping: 15, mass: 0.5 };
    const smoothX = useSpring(mouseX, springConfig);
    const smoothY = useSpring(mouseY, springConfig);

    const rotateX = useTransform(smoothY, [0, 1], [15, -15]);
    const rotateY = useTransform(smoothX, [0, 1], [-15, 15]);

    const spotlightX = useTransform(mouseX, [0, 1], ["0%", "100%"]);
    const spotlightY = useTransform(mouseY, [0, 1], ["0%", "100%"]);
    const background = useMotionTemplate`radial-gradient(circle at ${spotlightX} ${spotlightY}, theme(colors.accent/0.1) 0%, transparent 80%)`;

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        mouseX.set((e.clientX - left) / width);
        mouseY.set((e.clientY - top) / height);
    };

    const handleMouseLeave = () => {
        mouseX.set(0.5);
        mouseY.set(0.5);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className="relative w-full h-[400px] p-8 rounded-3xl bg-dark-surface border border-white/5 cursor-none will-change-transform flex flex-col justify-end shadow-2xl"
        >
            <motion.div className="absolute inset-0 rounded-3xl pointer-events-none" style={{ background }} />
            <div style={{ transform: "translateZ(40px)" }} className="relative z-10 pointer-events-none">
                <h3 className="text-3xl font-mono font-bold text-white mb-3">{title}</h3>
                <p className="text-gray-400 font-sans text-base leading-relaxed">{desc}</p>
            </div>
        </motion.div>
    );
};

const Services = () => {
    return (
        <section className="relative w-full min-h-screen py-32 bg-dark-background flex flex-col justify-center items-center px-6 [perspective:1200px]">
            <h2 className="text-4xl md:text-5xl font-mono font-bold text-white mb-20 text-center">Our Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl w-full">
                <ServiceCard title="Platform Engineering" desc="Monolithic software architectures designed for massive scale and zero latency." />
                <ServiceCard title="Nationwide SEO" desc="Data-driven programmatic SEO that dominates Google algorithms and captures market share." />
                <ServiceCard title="High-Octane UI" desc="Award-winning micro-interactions and WebGL environments that convert visitors into revenue." />
            </div>
        </section>
    );
}

export default Services;