import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation } from 'react-router-dom';
import { 
  Factory, BrainCircuit, HeartPulse, 
  Cpu, GitBranch, Terminal, Globe, Lock, TrendingUp, MessageSquare, ShoppingCart
} from 'lucide-react'; 
import { PageTransition } from '../PageTransition';
import { IMAGES } from '../images';
import { m, LazyMotion, domAnimation } from 'framer-motion';
import Footer from '../components/Footer';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { CoverFlowCarousel } from '../components/CoverFlowCarousel';

const clientImages = [
  { src: IMAGES.WORK.ALLIED_PREMISES, alt: 'Allied Group Manufacturing Facility', category: 'Facility' },
  { src: IMAGES.WORK.ALLIED_HOMEPAGE, alt: 'Allied Group Digital Homepage', category: 'Website' },
  { src: IMAGES.WORK.ALLIED_CATALOGUE, alt: 'Allied Group E-Commerce Catalogue', category: 'E-Commerce' },
  { src: IMAGES.WORK.ALLIED_SEO, alt: 'Rank #1 SEO Search Result - Google Rankings', category: 'SEO Results' }
];

const Work: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  return (
    <PageTransition>
    <LazyMotion features={domAnimation}>
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#0a0a0a] text-slate-900 dark:text-slate-200 font-sans selection:bg-indigo-500/30 relative overflow-hidden transition-colors duration-300">
      
      {/* === SEO & GEO STRATEGY === */}
      {/* Targeted Keywords: "Industrial Web Design", "Clinic Management System", "Productivity App Developer" */}
      <Helmet>
        <title>Our Work | Industrial & Healthcare Digital Systems - Omino Tech</title>
        <meta name="description" content="Case Studies: Digital Transformation for Manufacturing (Pipe Industry) and Proprietary Healthcare Software (MediMy). View our engineering portfolio." />
        <meta name="keywords" content="Industrial Web Design Malaysia, Clinic Management System, Flutter App Developer, LifeSync App, Manufacturing Digitalization" />
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Omino Tech" />
        <meta property="og:image" content={IMAGES.GLOBAL.OG_IMAGE} />
      </Helmet>

      {/* Background Ambient Glow */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
          <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-500/5 dark:bg-indigo-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/5 dark:bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <m.main initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} className="relative z-10 pt-24 md:pt-32 pb-12 md:pb-20 px-6 max-w-7xl mx-auto flex-grow w-full">

        {/* === HERO SECTION === */}
        <m.section 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="px-6 max-w-7xl mx-auto mb-24 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-indigo-500/30 bg-indigo-50 dark:bg-indigo-900/10 text-indigo-600 dark:text-indigo-400 text-xs font-mono mb-6">
            <GitBranch className="w-3 h-3" />
            DEPLOYMENT LOG: 2024-2025
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-slate-900 dark:text-white mb-6 leading-[1.1]">
            ENGINEERED <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-cyan-500 to-fuchsia-500 dark:from-indigo-400 dark:via-cyan-300 dark:to-purple-400">
              REALITY.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            We don't just design websites; we architect digital ecosystems. 
            From <span className="text-slate-900 dark:text-white">Industrial Manufacturing</span> to <span className="text-slate-900 dark:text-white">Healthcare Operations</span>.
          </p>
        </m.section>

        {/* === SECTION 1: CLIENT CASE STUDY (THE PIPE MANUFACTURER) === */}
        <m.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="px-6 max-w-7xl mx-auto mb-16 md:mb-32"
        >
          <div className="flex items-center gap-4 mb-12 flex-wrap">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">CLIENT OPERATIONS</h2>
            <div className="h-[1px] bg-slate-200 dark:bg-slate-800 flex-grow hidden sm:block"></div>
          </div>

          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mb-12 leading-relaxed">
            We engineer high-performance websites for Malaysian SMEs and Startups. Whether you need a proprietary <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 font-bold hover:underline">Next.js</a> Web App or an easy-to-edit <a href="https://wordpress.org/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 font-bold hover:underline">WordPress</a> (<a href="https://elementor.com/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 font-bold hover:underline">Elementor</a>) site, we guarantee &lt;2s load times.
          </p>

          {/* === ALLIED GROUP - PREMIUM DETAILED SECTION === */}
          <div className="group relative rounded-2xl md:rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 overflow-hidden hover:border-indigo-500/50 transition-all duration-500 shadow-xl dark:shadow-none">
            
            {/* Top: Header + Gallery */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              
              {/* Left: Main Header */}
              <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center">
                {/* Status Tags */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-4 py-1.5 bg-green-500/10 text-green-500 dark:text-green-400 text-xs font-bold rounded-full border border-green-500/20 flex items-center gap-2 shadow-inner">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]"></div>
                    LIVE SYSTEM
                  </span>
                  <span className="px-4 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-semibold tracking-wider rounded-full border border-slate-200 dark:border-slate-700 uppercase">
                    B2B Manufacturing
                  </span>
                </div>
                
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6 leading-tight tracking-tight">
                  Pipe Manufacturing <br className="hidden md:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-400">Digital Transformation</span>
                </h3>

                {/* Quick Stats Row */}
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-500/10 rounded-xl border border-green-200 dark:border-green-500/20">
                    <TrendingUp className="w-4 h-4 text-green-600 dark:text-green-400" />
                    <span className="text-sm font-bold text-green-700 dark:text-green-400">RANK #1 in 17 Days</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-indigo-50 dark:bg-indigo-500/10 rounded-xl border border-indigo-200 dark:border-indigo-500/20">
                    <ShoppingCart className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                    <span className="text-sm font-bold text-indigo-700 dark:text-indigo-400">1,000+ Products</span>
                  </div>
                </div>
              </div>

              {/* Right: Image Gallery */}
              <div className="p-6 md:p-8 bg-slate-50 dark:bg-slate-950/50 border-t lg:border-t-0 lg:border-l border-slate-200 dark:border-slate-800 flex items-center">
                <CoverFlowCarousel
                  images={clientImages}
                  autoplayDelay={4000}
                />
              </div>
            </div>

            {/* Middle: Detailed Descriptions */}
            <div className="border-t border-slate-200 dark:border-slate-800 p-8 md:p-10 lg:p-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800/50 hover:border-indigo-500/30 transition-colors">
                  <strong className="text-slate-900 dark:text-white flex items-center gap-2 mb-4 text-lg">
                    <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-500/20">
                      <Lock className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    THE MISSION
                  </strong> 
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    Transform a manual, paper-based catalog into a high-volume digital sales engine. <a href="https://alliedgroup.com.my" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 font-bold hover:underline">Allied Group</a> needed to manage massive inventory without expanding their workforce.
                  </p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800/50 hover:border-indigo-500/30 transition-colors">
                  <strong className="text-slate-900 dark:text-white flex items-center gap-2 mb-4 text-lg">
                    <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-500/20">
                      <Cpu className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    EXECUTION
                  </strong> 
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    Deployed a robust <span className="text-indigo-600 dark:text-indigo-400 font-semibold">E-Commerce Infrastructure</span>. Replaced manual support with a custom <span className="text-indigo-600 dark:text-indigo-400 font-semibold">WhatsApp Automation Bot</span> handling 95% of daily chats.
                  </p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800/50 hover:border-indigo-500/30 transition-colors">
                  <strong className="text-slate-900 dark:text-white flex items-center gap-2 mb-4 text-lg">
                    <div className="p-2 rounded-lg bg-green-100 dark:bg-green-500/20">
                      <Globe className="w-5 h-5 text-green-600 dark:text-green-400" />
                    </div>
                    SEO DOMINANCE
                  </strong> 
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    Using "Programmatic SEO," we targeted industrial keywords aggressively. The site surged to <span className="text-green-600 dark:text-green-400 font-bold">Rank #1 on Google in just 17 days</span>.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom: Stats Grid + Tech Stack */}
            <div className="border-t border-slate-200 dark:border-slate-800 p-8 md:p-10 lg:p-12 bg-slate-50/50 dark:bg-slate-950/30">
              {/* Achievement Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
                <div className="p-5 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 hover:border-green-500/30 hover:shadow-lg transition-all">
                  <div className="flex items-center gap-3 text-slate-900 dark:text-white font-bold mb-2">
                    <div className="p-2.5 rounded-xl bg-green-100 dark:bg-green-500/10">
                      <TrendingUp className="w-5 h-5 text-green-600 dark:text-green-400" />
                    </div>
                    <span className="text-xl font-black">TOP 3</span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold tracking-wide uppercase">4 Major Keywords</p>
                </div>
                <div className="p-5 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 hover:border-green-500/30 hover:shadow-lg transition-all">
                  <div className="flex items-center gap-3 text-slate-900 dark:text-white font-bold mb-2">
                    <div className="p-2.5 rounded-xl bg-green-100 dark:bg-green-500/10">
                      <TrendingUp className="w-5 h-5 text-green-600 dark:text-green-400" />
                    </div>
                    <span className="text-xl font-black">TOP 10</span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold tracking-wide uppercase">10+ Secondary KW</p>
                </div>
                <div className="p-5 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 hover:border-purple-500/30 hover:shadow-lg transition-all">
                  <div className="flex items-center gap-3 text-slate-900 dark:text-white font-bold mb-2">
                    <div className="p-2.5 rounded-xl bg-purple-100 dark:bg-purple-500/10">
                      <MessageSquare className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <span className="text-xl font-black">95%</span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold tracking-wide uppercase">WhatsApp Automated</p>
                </div>
                <div className="p-5 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 hover:border-yellow-500/30 hover:shadow-lg transition-all">
                  <div className="flex items-center gap-3 text-slate-900 dark:text-white font-bold mb-2">
                    <div className="p-2.5 rounded-xl bg-yellow-100 dark:bg-yellow-500/10">
                      <ShoppingCart className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                    </div>
                    <span className="text-xl font-black">1K+</span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold tracking-wide uppercase">Inventory SKUs</p>
                </div>
              </div>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-3">
                {['WhatsApp API', 'SEO Schema', 'E-Commerce', 'Automation', 'Next.js Architecture'].map((tag) => (
                  <span key={tag} className="text-sm font-mono px-4 py-2 bg-white dark:bg-slate-900/80 rounded-xl text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:border-indigo-400 dark:hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-default shadow-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </m.section>

        {/* === SECTION 2: INTERNAL INNOVATION (R&D) === */}
        <m.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="px-6 max-w-7xl mx-auto mb-16 md:mb-32"
        >
          <div className="flex items-center gap-4 mb-12 flex-wrap">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">OMINO TECH R&D LABS</h2>
            <div className="h-[1px] bg-slate-200 dark:bg-slate-800 flex-grow hidden sm:block"></div>
            <span className="text-xs font-mono text-indigo-400 animate-pulse">2 PROJECTS IN DEVELOPMENT</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* INNOVATION 1: LIFESYNC */}
            <div className="group relative bg-white dark:bg-slate-900/20 border border-slate-200 dark:border-slate-800 p-8 rounded-3xl hover:border-purple-500/50 transition-all duration-300 shadow-sm dark:shadow-none">
              <div className="absolute top-6 right-6">
                <span className="px-3 py-1 bg-yellow-500/10 text-yellow-400 text-xs font-bold rounded border border-yellow-500/20 flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div> IN DEVELOPMENT
                </span>
              </div>
              
              <div className="mb-8 p-4 bg-slate-100 dark:bg-slate-950 rounded-2xl w-fit border border-slate-200 dark:border-slate-800 group-hover:border-purple-500/30">
                <BrainCircuit className="w-10 h-10 text-purple-400" />
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">LifeSync: The Second Brain</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                A revolutionary productivity ecosystem built on the "Second Brain" methodology. LifeSync integrates tasks, notes, and goals into a single "Universal Mind" powered by AI.
              </p>
              
              <div className="space-y-3 mb-8 border-t border-slate-200 dark:border-slate-800/50 pt-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500">Architecture</span>
                  <span className="text-slate-900 dark:text-white font-mono">Flutter (Mobile)</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500">Intelligence</span>
                  <span className="text-slate-900 dark:text-white font-mono">Gemini AI API</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500">Database</span>
                  <span className="text-slate-900 dark:text-white font-mono">Supabase Realtime</span>
                </div>
              </div>

              <div className="w-full bg-slate-200 dark:bg-slate-800 h-1 rounded-full overflow-hidden">
                <div className="bg-purple-500 h-full w-[70%]"></div>
              </div>
              <div className="flex justify-between mt-2 text-xs font-mono text-slate-500">
                <span>PROGRESS</span>
                <span>70% COMPLETE</span>
              </div>
            </div>

            {/* INNOVATION 2: MEDIMY */}
            <div className="group relative bg-white dark:bg-slate-900/20 border border-slate-200 dark:border-slate-800 p-8 rounded-3xl hover:border-emerald-500/50 transition-all duration-300 shadow-sm dark:shadow-none">
              <div className="absolute top-6 right-6">
                <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs font-bold rounded border border-blue-500/20 flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div> BETA TESTING
                </span>
              </div>
              
              <div className="mb-8 p-4 bg-slate-100 dark:bg-slate-950 rounded-2xl w-fit border border-slate-200 dark:border-slate-800 group-hover:border-emerald-500/30">
                <HeartPulse className="w-10 h-10 text-emerald-400" />
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">MediMy: Clinic OS</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                A comprehensive Clinic Management System (CMS) designed for modern healthcare facilities. Handles patient records, appointment scheduling, and inventory in one secure dashboard.
              </p>
              
              <div className="space-y-3 mb-8 border-t border-slate-200 dark:border-slate-800/50 pt-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500">Platform</span>
                  <span className="text-slate-900 dark:text-white font-mono">Web & Tablet</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500">Backend</span>
                  <span className="text-slate-900 dark:text-white font-mono">PHP / Firebase</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500">Security</span>
                  <span className="text-slate-900 dark:text-white font-mono">End-to-End Encrypted</span>
                </div>
              </div>

              <div className="w-full bg-slate-200 dark:bg-slate-800 h-1 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-full w-[85%]"></div>
              </div>
              <div className="flex justify-between mt-2 text-xs font-mono text-slate-500">
                <span>PROGRESS</span>
                <span>85% COMPLETE</span>
              </div>
            </div>

          </div>
        </m.section>

        {/* === SECTION 3: THE "HOW WE BUILD" PROTOCOL === */}
        <m.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="px-6 max-w-7xl mx-auto mb-16 md:mb-32"
        >
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">ENGINEERING PROTOCOL</h2>
            <p className="text-slate-600 dark:text-slate-400">We don't guess. We follow a strict military-grade development cycle.</p>
          </div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 hidden md:block -z-10"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {[
                { step: '01', title: 'Strategy', icon: <Terminal />, desc: 'Deep market analysis and technical roadmap planning.' },
                { step: '02', title: 'Design', icon: <Globe />, desc: 'High-fidelity UI/UX prototyping and system architecture.' },
                { step: '03', title: 'Development', icon: <Cpu />, desc: 'Clean code writing using Next.js, Flutter, and Supabase.' },
                { step: '04', title: 'Deploy', icon: <Lock />, desc: 'Server configuration, security hardening, and launch.' }
              ].map((phase) => (
                <div key={phase.step} className="bg-white dark:bg-[#0a0a0a] border border-slate-200 dark:border-slate-800 p-8 rounded-2xl text-center hover:-translate-y-2 transition-transform duration-300 shadow-lg dark:shadow-none">
                  <div className="text-5xl font-bold text-slate-200 dark:text-slate-800 mb-4">{phase.step}</div>
                  <div className="flex justify-center mb-4 text-indigo-400">{phase.icon}</div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{phase.title}</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">{phase.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </m.section>

        {/* === CTA SECTION === */}
        <section className="px-6 max-w-4xl mx-auto text-center">
          <div className="p-6 md:p-12 rounded-3xl bg-gradient-to-b from-indigo-900/20 to-transparent border border-indigo-500/30 backdrop-blur-sm">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Have a Vision? Let's Engineer It.
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-xl mx-auto">
              Whether it's a corporate portal or a complex SaaS application, we have the experience to build it right.
            </p>
            <WhatsAppButton 
              serviceName="Project Inquiry"
              buttonText="Start Your Project"
              className="inline-block bg-indigo-600 dark:bg-white text-white dark:text-black px-6 md:px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform shadow-[0_0_20px_rgba(99,102,241,0.3)] dark:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
              showIcon={true}
            />
          </div>
        </section>
      </m.main>
      <Footer />
    </div>
    </LazyMotion>
    </PageTransition>
  );
};

export default Work;