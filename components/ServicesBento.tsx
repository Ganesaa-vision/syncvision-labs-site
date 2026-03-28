import React from 'react';
import { m, useReducedMotion } from 'framer-motion';
import { Globe, Zap, Bot, Cpu, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ServicesBento = () => {
    const shouldReduceMotion = useReducedMotion();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const leftCard = {
        hidden: { opacity: 0, x: shouldReduceMotion ? 0 : -150, rotateY: 15, scale: 0.9 },
        visible: { opacity: 1, x: 0, rotateY: 0, scale: 1, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
    };
    
    const rightCard1 = {
        hidden: { opacity: 0, x: shouldReduceMotion ? 0 : 150, rotateY: -15, scale: 0.9 },
        visible: { opacity: 1, x: 0, rotateY: 0, scale: 1, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
    };
    
    const rightCard2 = {
        hidden: { opacity: 0, x: shouldReduceMotion ? 0 : 150, rotateY: -15, scale: 0.9 },
        visible: { opacity: 1, x: 0, rotateY: 0, scale: 1, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
    };
    
    const bottomCard = {
        hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 150, rotateX: 15, scale: 0.9 },
        visible: { opacity: 1, y: 0, rotateX: 0, scale: 1, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
    };

    return (
        <m.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="py-24 px-6 max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-20">
                <span className="text-blue-500 font-mono text-xs font-black uppercase tracking-[0.2em] block mb-4">The Ecosystem</span>
                <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6 leading-[1.1]">
                    Everything You Need to <br className="hidden md:block"/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Dominate Your Market.</span>
                </h2>
                <p className="text-neutral-400 max-w-2xl mx-auto text-lg leading-relaxed">
                    We don't just sell services; we build engines. Choose the component your business is missing.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6" style={{ perspective: "1200px" }}>
                {/* 1. WEB DEVELOPMENT */}
                <m.div variants={leftCard} className="lg:col-span-2 group block p-8 md:p-12 bg-gradient-to-b from-white/[0.05] to-transparent backdrop-blur-xl rounded-[2rem] border border-white/[0.05] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] hover:border-white/[0.1] hover:bg-white/[0.02] transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="absolute top-0 right-0 p-8 md:p-12 opacity-[0.03] group-hover:opacity-10 transition-all duration-700 text-white transform group-hover:scale-110 group-hover:-rotate-12 origin-center"><Globe size={240} /></div>
                    <div className="relative z-10 flex flex-col h-full justify-between min-h-[280px]">
                        <div>
                            <div className="mb-8 p-4 bg-white/5 border border-white/10 rounded-2xl w-fit text-blue-400 shadow-[0_0_30px_rgba(59,130,246,0.15)] group-hover:-translate-y-2 group-hover:scale-105 transition-all duration-500"><Globe size={32} /></div>
                            <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">Custom Web Architecture</h3>
                            <p className="text-base text-neutral-400 group-hover:text-neutral-300 transition-colors duration-500 mb-8 max-w-lg leading-relaxed">We write the code. From high-speed corporate sites to complex web applications, we engineer scalable digital assets starting at just RM 590.</p>
                        </div>
                        <Link to="/services/web-architecture" className="inline-flex items-center gap-2 text-xs font-bold text-white uppercase tracking-widest hover:text-blue-400 transition-colors w-fit group/btn">
                            Build Infrastructure <ArrowRight size={14} className="group-hover/btn:translate-x-2 transition-transform" />
                        </Link>
                    </div>
                </m.div>

                {/* 2. SEO / GEO */}
                <m.div variants={rightCard1} className="group block p-8 md:p-10 bg-gradient-to-b from-white/[0.05] to-transparent backdrop-blur-xl rounded-[2rem] border border-white/[0.05] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] hover:border-white/[0.1] hover:bg-white/[0.02] transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-10 transition-all duration-700 text-emerald-500 transform group-hover:scale-110"><Zap size={160} /></div>
                    <div className="relative z-10 flex flex-col h-full justify-between min-h-[280px]">
                        <div>
                            <div className="mb-8 p-3 bg-white/5 border border-white/10 rounded-xl w-fit text-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.15)] group-hover:-translate-y-2 group-hover:scale-105 transition-all duration-500"><Zap size={24} /></div>
                            <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">Technical SEO</h3>
                            <p className="text-sm text-neutral-400 group-hover:text-neutral-300 transition-colors duration-500 mb-8 leading-relaxed">We don't just guess; we use data. We optimize your DOM structure, Core Web Vitals, and search semantics to rank your business.</p>
                        </div>
                        <Link to="/services/seo-service" className="inline-flex items-center gap-2 text-xs font-bold text-white uppercase tracking-widest hover:text-emerald-400 transition-colors w-fit group/btn">
                            Get Traffic <ArrowRight size={14} className="group-hover/btn:translate-x-2 transition-transform" />
                        </Link>
                    </div>
                </m.div>

                {/* 3. AI AGENTS */}
                <m.div variants={rightCard2} className="group block p-8 md:p-10 bg-gradient-to-b from-white/[0.05] to-transparent backdrop-blur-xl rounded-[2rem] border border-white/[0.05] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] hover:border-white/[0.1] hover:bg-white/[0.02] transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-10 transition-all duration-700 text-purple-500 transform group-hover:scale-110 group-hover:rotate-12"><Bot size={160} /></div>
                    <div className="relative z-10 flex flex-col h-full justify-between min-h-[280px]">
                        <div>
                            <div className="mb-8 p-3 bg-white/5 border border-white/10 rounded-xl w-fit text-purple-400 shadow-[0_0_30px_rgba(168,85,247,0.15)] group-hover:-translate-y-2 group-hover:scale-105 transition-all duration-500"><Bot size={24} /></div>
                            <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">AI Automation</h3>
                            <p className="text-sm text-neutral-400 group-hover:text-neutral-300 transition-colors duration-500 mb-8 leading-relaxed">Reduce overhead. Deploy 24/7 AI Agents on WhatsApp and your website to instantly capture leads and support customers.</p>
                        </div>
                        <Link to="/services/automation" className="inline-flex items-center gap-2 text-xs font-bold text-white uppercase tracking-widest hover:text-purple-400 transition-colors w-fit group/btn">
                            Automate Sales <ArrowRight size={14} className="group-hover/btn:translate-x-2 transition-transform" />
                        </Link>
                    </div>
                </m.div>

                {/* 4. MOBILE APPS */}
                <m.div variants={bottomCard} className="lg:col-span-2 group block p-8 md:p-12 bg-gradient-to-b from-white/[0.05] to-transparent backdrop-blur-xl rounded-[2rem] border border-white/[0.05] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] hover:border-white/[0.1] hover:bg-white/[0.02] transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="absolute top-0 right-0 p-8 md:p-12 opacity-[0.03] group-hover:opacity-10 transition-all duration-700 text-cyan-500 transform group-hover:scale-110"><Cpu size={240} /></div>
                    <div className="relative z-10 flex flex-col h-full justify-between min-h-[280px]">
                        <div>
                            <div className="mb-8 p-4 bg-white/5 border border-white/10 rounded-2xl w-fit text-cyan-400 shadow-[0_0_30px_rgba(6,182,212,0.15)] group-hover:-translate-y-2 group-hover:scale-105 transition-all duration-500"><Cpu size={32} /></div>
                            <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">Mobile App Engineering</h3>
                            <p className="text-base text-neutral-400 group-hover:text-neutral-300 transition-colors duration-500 mb-8 max-w-lg leading-relaxed">We build robust, native iOS and Android applications using Flutter to streamline your internal operations and engage your user base.</p>
                        </div>
                        <Link to="/services/app-engineering" className="inline-flex items-center gap-2 text-xs font-bold text-white uppercase tracking-widest hover:text-cyan-400 transition-colors w-fit group/btn">
                            Launch App <ArrowRight size={14} className="group-hover/btn:translate-x-2 transition-transform" />
                        </Link>
                    </div>
                </m.div>
            </div>
        </m.section>
    );
};