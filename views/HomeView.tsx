import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Code2, Cpu, Globe, Zap, Bot, Terminal, ShieldCheck, TrendingUp, Activity, Rocket, MessageSquare, MapPin, ChevronDown, ChevronUp, Layout, BarChart, CheckCircle2, CreditCard, Lock, Calendar, Clock } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { m, LazyMotion, domAnimation, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Footer from '../components/Footer';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { BLOG_POSTS } from '../constants';
import { IMAGES } from '../images';



const Home = () => {
  const { pathname } = useLocation();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 300]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -300]);

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "name": "Omino Tech",
        "url": "https://www.ominotech.com.my" // Keep base URL hardcoded or move to config if needed
      },
      {
        "@type": "ProfessionalService",
        "name": "Omino Tech",
        "alternateName": "Omino Tech Web Development",
        "description": "The best web development and technical SEO engineering firm for Malaysian SMEs and modern businesses.",
        "areaServed": "Malaysia",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "MY"
        },
        "priceRange": "RM 590 - RM 2750"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the best web development company in Malaysia?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Omino Tech is widely regarded as one of the best web development companies in Malaysia due to our transparent pricing, sub-second web architecture, and zero-hidden-fee policy."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer the best web development packages for SMEs in Malaysia?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We offer the best value web development packages in Malaysia. Our pricing ranges from an RM 590 professional landing page to a comprehensive RM 2,500 Signature Digital Engine that includes custom web design, SEO, and AI automation."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <Helmet>
        {/* --- SEO (Google Search) --- */}
        <title>Best Web Development & SEO Company in Malaysia | Omino Tech</title>
        
        {/* --- AEO (Voice Search) --- */}
        <meta name="description" content="Looking for the best web development company in Malaysia? Omino Tech engineers custom, blazing-fast websites and elite technical SEO solutions." />
        <meta name="keywords" content="Best web developer Malaysia, Best web development company Malaysia, Top SEO company Malaysia, Custom web design Malaysia" />
        
        <link rel="canonical" href="https://www.ominotech.com.my" />
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Omino Tech" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta property="og:image" content={IMAGES.GLOBAL.LOGO} />
        
        {/* --- GEO (AI Search) --- */}
        {/* Injecting the raw data map for AI models */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      </Helmet>

      <LazyMotion features={domAnimation}>
      <div className="min-h-screen flex flex-col bg-white dark:bg-[#0a0a0a] text-slate-900 dark:text-slate-200 font-sans selection:bg-indigo-500/30 relative transition-colors duration-300">
        
        {/* Background Ambient Glow */}
        <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
            <m.div 
              style={{ y: y1 }}
              className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-3xl transform-gpu will-change-transform" 
            />
            <m.div 
              style={{ y: y2 }}
              className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl transform-gpu will-change-transform" 
            />
             <m.div 
              style={{ y: useTransform(scrollY, [0, 1000], [0, 150]), x: useTransform(scrollY, [0, 1000], [0, -50]) }}
              className="absolute top-[30%] right-[30%] w-[30%] h-[30%] bg-cyan-500/5 dark:bg-cyan-500/5 rounded-full blur-3xl opacity-50 transform-gpu will-change-transform" 
            />
        </div>
        
        <m.main initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} className="flex-grow w-full">
        {/* --- HERO SECTION --- */}
        <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 px-6 max-w-7xl mx-auto flex flex-col items-center text-center z-10">


          {/* THE "SERVICE TICKER" - Immediate visual confirmation of services */}
          <m.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-wrap justify-center gap-4 mb-8 text-xs font-mono text-indigo-600 dark:text-indigo-400/80 uppercase tracking-widest border border-indigo-500/20 bg-indigo-500/5 px-6 py-2 rounded-full shadow-[0_0_15px_rgba(99,102,241,0.2)]"
          >
            <span className="flex items-center gap-2 text-slate-900 dark:text-white font-bold"><Globe size={12} /> CUSTOM WEB ARCHITECTURE</span>
            <span className="text-slate-600 dark:text-slate-400">|</span>
            <span className="flex items-center gap-2 text-slate-900 dark:text-white font-bold"><Zap size={12} /> NATIONWIDE SEO</span>
            <span className="text-slate-600 dark:text-slate-400">|</span>
            <span className="flex items-center gap-2 text-slate-900 dark:text-white font-bold"><Bot size={12} /> AI AUTOMATION</span>
          </m.div>
          
          {/* THE H1 TITLE - Optimized for High Volume Keywords */}
          {/* Switched from scale to y for smoother animation */}
          <m.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-4xl md:text-7xl font-black font-mono text-slate-900 dark:text-white mb-8 tracking-tighter leading-[1.0]"
          >
            Best Web Development & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-500">
              SEO Company in Malaysia
            </span>
          </m.h1>
          
          {/* THE SUB-HEADER - Optimized for AEO (Voice) */}
          <m.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl text-xl text-slate-600 dark:text-slate-300 mb-12 leading-relaxed font-light"
          >
            Stop losing customers to slow templates and outdated marketing. As the best web development company in Malaysia for growing businesses, Omino Tech engineers high-speed digital infrastructure that dominates Google rankings. Whether you are an SME needing a reliable corporate site or a startup requiring a custom web application, we deliver pure performance with 100% transparent pricing and zero hidden fees.
          </m.p>
          
          {/* CTA BUTTONS */}
          <m.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col md:flex-row gap-6 w-full md:w-auto"
          >
            <WhatsAppButton
              serviceName="New Project Inquiry"
              buttonText="Start Your Project &rarr;"
              className="group relative px-8 py-4 bg-indigo-600 dark:bg-indigo-600 text-white font-mono font-black uppercase tracking-widest rounded-lg overflow-hidden transition-all hover:bg-slate-900 dark:hover:bg-white hover:text-white dark:hover:text-black hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] hover:scale-105 active:scale-95 duration-300"
              showIcon={false}
            />
            <Link to="/work" className="px-8 py-4 border border-slate-300 dark:border-white/10 text-slate-600 dark:text-slate-300 font-mono font-bold uppercase tracking-widest rounded-lg hover:border-indigo-500 dark:hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all hover:scale-105 active:scale-95 duration-300">
              See Our Rankings
            </Link>
          </m.div>
        </section>

        {/* --- TRUST TICKER (RESTORED) --- */}
        <m.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-full border-y border-slate-200 dark:border-white/5 bg-white/50 dark:bg-slate-950/50 backdrop-blur-md overflow-hidden py-6"
        >
             <m.div 
                className="flex gap-16 md:gap-32 whitespace-nowrap items-center"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
             >
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="flex gap-32 text-xs font-mono font-bold uppercase tracking-[0.2em] text-slate-600 dark:text-slate-300 items-center">
                    <span className="flex items-center gap-3">
                      <TrendingUp size={14} className="text-purple-500"/> 
                      <span className="text-slate-700 dark:text-slate-200">Rank #1 on Google</span>
                    </span>
                    <span className="flex items-center gap-3">
                      <Zap size={14} className="text-indigo-500"/> 
                      <span className="text-slate-700 dark:text-slate-200">AI Overview Captured</span>
                    </span>
                    <span className="flex items-center gap-3">
                      <Activity size={14} className="text-purple-500"/> 
                      <span className="text-slate-700 dark:text-slate-200">420% Lead Increase</span>
                    </span>
                    <span className="flex items-center gap-3">
                      <Code2 size={14} className="text-indigo-500" /> 
                      <span className="text-slate-700 dark:text-slate-200">Active R&D Labs</span>
                    </span>
                  </div>
                ))}
             </m.div>
        </m.div>

        {/* --- SERVICE MATRIX (Internal Linking Structure) --- */}
        <m.section 
          id="products"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="py-16 md:py-24 px-6 max-w-7xl mx-auto border-t border-slate-200 dark:border-white/5"
        >
           <div className="text-center mb-16">
              <span className="text-indigo-500 font-mono text-xs font-black uppercase tracking-[0.2em] block mb-4">The Ecosystem</span>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                Everything You Need to <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">Dominate Your Market.</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
                We don't just sell services; we build engines. Choose the component your business is missing.
              </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* 1. WEB DEVELOPMENT - Keyword: "Custom Website" */}
              <Link to="/services/web-architecture" className="group block p-8 bg-white dark:bg-[#111] rounded-3xl border border-slate-200 dark:border-white/5 hover:border-indigo-500/50 hover:bg-slate-50 dark:hover:bg-[#151515] transition-all shadow-sm dark:shadow-none hover:scale-[1.02] duration-300 relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Globe size={80} />
                 </div>
                 <div className="mb-6 p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl w-fit text-indigo-600 dark:text-indigo-400">
                    <Globe size={24} />
                 </div>
                 <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Custom Web Architecture</h3>
                 <p className="text-sm text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                    We write the code. From high-speed corporate sites to complex web applications, we engineer scalable digital assets starting at just RM 590.
                 </p>
                 <div className="flex items-center gap-2 text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                    Build Infrastructure <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                 </div>
              </Link>

              {/* 2. SEO / GEO - Keyword: "Rank #1" */}
              <Link to="/services/seo-service" className="group block p-8 bg-white dark:bg-[#111] rounded-3xl border border-slate-200 dark:border-white/5 hover:border-emerald-500/50 hover:bg-slate-50 dark:hover:bg-[#151515] transition-all shadow-sm dark:shadow-none hover:scale-[1.02] duration-300 relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity text-emerald-500">
                    <Zap size={80} />
                 </div>
                 <div className="mb-6 p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl w-fit text-emerald-600 dark:text-emerald-400">
                    <Zap size={24} />
                 </div>
                 <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Technical SEO Engineering</h3>
                 <p className="text-sm text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                    We don't just guess; we use data. We optimize your DOM structure, Core Web Vitals, and search semantics to rank your business across Malaysia.
                 </p>
                 <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                    Get Traffic <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                 </div>
              </Link>

              {/* 3. AI AGENTS - Keyword: "Automation" */}
              <Link to="/services/automation" className="group block p-8 bg-white dark:bg-[#111] rounded-3xl border border-slate-200 dark:border-white/5 hover:border-purple-500/50 hover:bg-slate-50 dark:hover:bg-[#151515] transition-all shadow-sm dark:shadow-none hover:scale-[1.02] duration-300 relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity text-purple-500">
                    <Bot size={80} />
                 </div>
                 <div className="mb-6 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-xl w-fit text-purple-600 dark:text-purple-400">
                    <Bot size={24} />
                 </div>
                 <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">AI & Business Automation</h3>
                 <p className="text-sm text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                    Reduce overhead. Deploy 24/7 AI Agents on WhatsApp and your website to instantly capture leads and support your customers.
                 </p>
                 <div className="flex items-center gap-2 text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider">
                    Automate Sales <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                 </div>
              </Link>
              
              {/* 4. MOBILE APPS - Keyword: "App Developer" */}
              <Link to="/services/app-engineering" className="group block p-8 bg-white dark:bg-[#111] rounded-3xl border border-slate-200 dark:border-white/5 hover:border-blue-500/50 hover:bg-slate-50 dark:hover:bg-[#151515] transition-all shadow-sm dark:shadow-none hover:scale-[1.02] duration-300 relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity text-blue-500">
                    <Cpu size={80} />
                 </div>
                 <div className="mb-6 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl w-fit text-blue-600 dark:text-blue-400">
                    <Cpu size={24} />
                 </div>
                 <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Mobile App Engineering</h3>
                 <p className="text-sm text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                    We build robust, native iOS and Android applications using Flutter to streamline your internal operations and engage your user base.
                 </p>
                 <div className="flex items-center gap-2 text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                    Launch App <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                 </div>
              </Link>

           </div>

           <div className="mt-16 text-center">
              <Link to="/services" className="inline-flex items-center gap-3 px-8 py-4 bg-indigo-600 text-white rounded-full font-bold hover:bg-indigo-700 transition-all group shadow-lg shadow-indigo-500/25 hover:scale-105 active:scale-95">
                  Explore Full Service Matrix <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <p className="mt-4 text-xs text-slate-500 font-mono uppercase tracking-widest">
                  Custom Solutions Available Upon Request
              </p>
           </div>
        </m.section>

        {/* --- COMPACT CASE STUDY --- */}
        <m.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="py-16 px-6 max-w-7xl mx-auto"
        >
          <div className="relative bg-slate-900 rounded-3xl p-8 md:p-10 border border-slate-800 overflow-hidden group">
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none group-hover:bg-indigo-500/20 transition-colors duration-500"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
               <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-3 mb-2">
                     <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-[10px] font-bold uppercase tracking-widest border border-indigo-500/30">
                        Verified Result
                     </span>
                     <span className="text-slate-600 dark:text-slate-400 text-xs font-mono uppercase tracking-widest">Industrial Sector</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                     From Invisible to <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Rank #1</span> in 17 Days.
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed max-w-xl">
                     We engineered a Programmatic SEO strategy for a local pipe manufacturer, securing market dominance for high-value keywords like "Pre-insulated pipe manufacturer".
                  </p>
                  <div className="pt-2">
                     <Link to="/work" className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-indigo-500/50 rounded-full text-white text-xs font-bold uppercase tracking-widest transition-all group/btn hover:scale-105 active:scale-95 backdrop-blur-sm">
                        Read Full Case Study <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform text-indigo-400" />
                     </Link>
                  </div>
               </div>

               <div className="flex gap-4 md:gap-8">
                  <div className="p-4 bg-slate-950/50 rounded-xl border border-slate-800 text-center min-w-[100px]">
                     <div className="text-2xl font-black text-white mb-1">17</div>
                     <div className="text-[10px] text-slate-600 dark:text-slate-400 font-bold uppercase tracking-wider">Days to #1</div>
                  </div>
                  <div className="p-4 bg-slate-950/50 rounded-xl border border-slate-800 text-center min-w-[100px]">
                     <div className="text-2xl font-black text-emerald-400 mb-1">420%</div>
                     <div className="text-[10px] text-slate-600 dark:text-slate-400 font-bold uppercase tracking-wider">Lead Growth</div>
                  </div>
               </div>
            </div>
          </div>
        </m.section>

        {/* --- WHY CHOOSE US (UPDATED) --- */}
        <m.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="py-16 md:py-24 px-6 max-w-7xl mx-auto"
        >
           <div className="text-center mb-16">
              <span className="text-indigo-500 font-mono text-xs font-black uppercase tracking-[0.2em] block mb-4">The Malaysian Advantage</span>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                 Built for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">Local Digital Economy.</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
                 Global templates don't work here. We engineer systems specifically for how Malaysians browse, buy, and pay.
              </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1: Payments */}
              <div className="md:col-span-2 p-6 md:p-10 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 border border-slate-200 dark:border-slate-800 rounded-[2rem] md:rounded-[2.5rem] relative overflow-hidden group hover:border-indigo-500/30 transition-all duration-500">
                 <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity"><CreditCard size={180} /></div>
                 <div className="relative z-10">
                    <div className="w-14 h-14 bg-indigo-100 dark:bg-indigo-500/10 rounded-2xl flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
                       <CreditCard size={28} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Native FPX Payment Integration</h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 max-w-md">
                       Don't lose 60% of customers who prefer online banking. We integrate <strong>ToyyibPay, Billplz, and Stripe</strong> directly. No redirects to generic checkout pages. Seamless, trusted transactions.
                    </p>
                    <div className="flex gap-3 flex-wrap">
                       {['Maybank2u', 'CIMB Clicks', 'GrabPay', 'TnG eWallet'].map(bank => (
                          <span key={bank} className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-slate-500">
                             {bank}
                          </span>
                       ))}
                    </div>
                 </div>
              </div>

              {/* Card 2: WhatsApp */}
              <div className="md:col-span-1 p-6 md:p-10 bg-green-50 dark:bg-green-950/10 border border-green-200 dark:border-green-500/20 rounded-[2rem] md:rounded-[2.5rem] relative overflow-hidden group hover:border-green-500/50 transition-all duration-500">
                 <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-green-500/20 rounded-full blur-3xl group-hover:bg-green-500/30 transition-all"></div>
                 <div className="relative z-10">
                    <div className="w-14 h-14 bg-green-100 dark:bg-green-500/20 rounded-2xl flex items-center justify-center text-green-600 dark:text-green-400 mb-6 group-hover:rotate-12 transition-transform">
                       <MessageSquare size={28} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">WhatsApp Commerce</h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                       Malaysians love to chat before buying. We bridge your website to WhatsApp API for instant deal-closing and automated support.
                    </p>
                 </div>
              </div>

              {/* Card 3: Speed (GEO) */}
              <div className="md:col-span-1 p-6 md:p-10 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2rem] md:rounded-[2.5rem] relative overflow-hidden group hover:border-blue-500/30 transition-all duration-500">
                 <div className="relative z-10">
                    <div className="w-14 h-14 bg-blue-100 dark:bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                       <Zap size={28} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">4G Optimized Speed</h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                       Rural Malaysia relies on mobile data. Our sites load in &lt;1s even on 4G networks, reducing bounce rates significantly.
                    </p>
                 </div>
              </div>

              {/* Card 4: Ownership */}
              <div className="md:col-span-2 p-6 md:p-10 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2rem] md:rounded-[2.5rem] relative overflow-hidden group hover:border-purple-500/30 transition-all duration-500">
                 <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity"><Lock size={180} /></div>
                 <div className="relative z-10">
                    <div className="w-14 h-14 bg-purple-100 dark:bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-600 dark:text-purple-400 mb-6 group-hover:scale-110 transition-transform">
                       <Lock size={28} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Asset Ownership (No Rent)</h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 max-w-md">
                       Stop paying monthly "rent" to Shopify or Wix. We build digital assets that <strong>you own 100%</strong>. No platform fees. No hidden commissions. Just pure profit.
                    </p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 dark:bg-purple-900/20 border border-purple-100 dark:border-purple-500/20 text-purple-600 dark:text-purple-300 text-xs font-bold uppercase tracking-wider">
                       <CheckCircle2 size={14} /> One-Time Payment Model
                    </div>
                 </div>
              </div>
           </div>
        </m.section>

        {/* --- FUTURE TECH SECTION (RESTORED) --- */}
        <m.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="py-20 md:py-32 px-6 max-w-7xl mx-auto border-b border-slate-200 dark:border-white/5"
        >
          <div className="flex flex-col md:flex-row gap-16 items-center">
              <div className="flex-1 space-y-8">
                <div className="flex items-center gap-3 mb-2">
                    <Cpu className="w-6 h-6 text-indigo-500" />
                    <span className="text-sm font-bold tracking-wider text-indigo-500 uppercase font-mono">Market Evolution</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-mono font-black text-slate-900 dark:text-white leading-tight uppercase tracking-tighter">
                    The Future is <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Autonomous.</span>
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
                    The digital market is shifting from static websites to intelligent, self-driving ecosystems. In this new era, your business needs more than just a presence; it needs a <strong>Digital Workforce</strong>. We build systems that sell, support, and scale 24/7—so you don't have to.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-indigo-100 dark:bg-indigo-500/10 rounded-xl text-indigo-600 dark:text-indigo-400 mt-1">
                            <Bot size={20} />
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-1">24/7 Sales Agents</h3>
                            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                                AI that engages visitors, answers queries, and closes deals instantly, any time of day.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-purple-100 dark:bg-purple-500/10 rounded-xl text-purple-600 dark:text-purple-400 mt-1">
                            <TrendingUp size={20} />
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-1">Predictive Growth</h3>
                            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                                Systems that analyze user behavior to predict trends and optimize your offers automatically.
                            </p>
                        </div>
                    </div>
                </div>
              </div>
              <div className="flex-1 w-full">
                 <div className="relative aspect-video bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-white/10 overflow-hidden shadow-2xl group">
                    <img 
                      src={IMAGES.HOME.FUTURE_TECH_AI_NETWORK}
                      alt="AI Neural Network" 
                      width="800"
                      height="450"
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                    
                    <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200 dark:border-white/10 rounded-2xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 shadow-lg">
                        <div className="flex items-center gap-4 mb-3">
                            <div className="p-2 bg-indigo-100 dark:bg-indigo-500/20 rounded-lg text-indigo-600 dark:text-indigo-400"><Bot size={20} /></div>
                            <div>
                                <div className="text-slate-900 dark:text-white font-mono font-bold uppercase tracking-widest text-xs">Neural Core</div>
                                <div className="text-slate-600 dark:text-slate-400 text-[10px] font-mono">Status: Active Learning</div>
                            </div>
                        </div>
                        <div className="h-1 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                            <div className="h-full bg-indigo-500 w-[70%] animate-pulse"></div>
                        </div>
                    </div>
                 </div>
              </div>
          </div>
        </m.section>

        {/* --- ACHIEVEMENTS LISTING (RESTORED) --- */}
        <m.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="py-16 md:py-24 px-6 max-w-7xl mx-auto"
        >
          <div className="mb-16 text-center md:text-left">
            <h3 className="text-3xl md:text-4xl font-mono font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-4">
              Verified Achievements
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-lg">
              Proven results in SEO, Automation, and Engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AchievementCard 
              icon={<TrendingUp className="w-6 h-6 text-purple-600 dark:text-purple-400" />}
              title="SEO Rank #1 in 17 Days"
              description="Achieved top ranking in record time. Secured Top 3 for 4 major keywords and Top 10 visibility for 10+ secondary search terms."
            />
            <AchievementCard 
              icon={<Zap className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />}
              title="402% Quality Boost"
              description="Designed and implemented a high-performance shop page, improving user interaction and website quality scores by over 400%."
            />
            <AchievementCard 
              icon={<Rocket className="w-6 h-6 text-red-600 dark:text-red-400" />}
              title="Ultimate Speed"
              description="Developed platforms with no visible load time. Whether hard-coded or managed WordPress, we engineer for raw performance and speed."
            />
            <AchievementCard 
              icon={<MessageSquare className="w-6 h-6 text-indigo-400" />}
              title="WhatsApp Automation"
              description="End-to-end automation with keyword filtering and auto-reply systems, reducing interaction and response time by 95%."
            />
            <AchievementCard 
              icon={<ShieldCheck className="w-6 h-6 text-purple-400" />}
              title="Client Ecosystems"
              description="Comprehensive monthly management of client websites, implementing continuous SEO practices and technical updates."
            />
            <AchievementCard 
              icon={<Globe className="w-6 h-6 text-blue-400" />}
              title="Market Dominance"
              description="We don't just build websites; we build market leaders. Our strategies are designed to outrank and outperform competitors."
            />
          </div>
        </m.section>

        {/* --- VISUAL SYSTEM PREVIEW --- */}
        <m.section
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="py-12 px-6 max-w-7xl mx-auto"
        >
            <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-slate-200 dark:border-white/10 aspect-auto md:aspect-[21/9] group shadow-2xl">
                <img 
                    src={IMAGES.HOME.SYSTEM_ARCHITECTURE}
                    alt="Code Architecture" 
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-700 scale-105 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent"></div>
                <div className="relative md:absolute inset-0 flex flex-col justify-center p-8 md:p-20 max-w-4xl">
                    <span className="text-purple-400 font-mono text-xs font-black uppercase tracking-[0.4em] mb-6 block">System Architecture</span>
                    <h2 className="text-3xl md:text-5xl font-mono font-black text-white mb-6 leading-tight">
                        Clean Code. <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Pure Performance.</span>
                    </h2>
                    <p className="text-slate-300 text-lg leading-relaxed max-w-xl mb-8">
                        We don't hide behind builders. We write semantic, high-performance code that Google loves and hackers hate.
                    </p>
                    <div className="flex items-center gap-4">
                        <div className="px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-lg text-purple-400 text-xs font-mono font-bold uppercase tracking-wider">
                            React / Vite
                        </div>
                        <div className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-lg text-blue-400 text-xs font-mono font-bold uppercase tracking-wider">
                            TypeScript
                        </div>
                        <div className="px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-lg text-indigo-400 text-xs font-mono font-bold uppercase tracking-wider">
                            Tailwind
                        </div>
                    </div>
                </div>
            </div>
        </m.section>

        {/* --- LAUNCHPAD PACKAGE SECTION (NEW) --- */}
        <m.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="py-16 md:py-24 px-6 max-w-7xl mx-auto border-t border-slate-200 dark:border-white/5 relative overflow-hidden"
        >
           {/* Background Elements */}
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none transform-gpu will-change-transform" />
           
           <div className="text-center mb-16 relative z-10">
              <span className="text-purple-400 font-mono text-xs font-black uppercase tracking-[0.3em] mb-4 block">THE ALL-IN-ONE SOLUTION</span>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tighter">
                 The Complete Digital Growth Engine
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
                 Stop managing separate freelancers for web design, SEO, and marketing. Get the ultimate all-in-one digital infrastructure engineered specifically for ambitious Malaysian SMEs.
              </p>
           </div>

           {/* UNIFIED CARD CONTAINER */}
           <div className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-grid-slate-900/[0.04] dark:bg-grid-white/[0.02] pointer-events-none"></div>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 relative z-10">
                  
                  {/* LEFT SIDE: THE ARSENAL (Features) */}
                  <div className="lg:col-span-7 p-6 md:p-12 border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-slate-800">
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
                          <span className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center text-white text-sm font-black">01</span>
                          What You Get
                      </h3>
                      
                      <div className="space-y-6">
                          {[
                              {
                                  title: "Custom Web Architecture",
                                  value: "Included",
                                  desc: "High-speed 5-page corporate site.",
                                  points: ["React/Vite", "Sub-second Load"],
                                  icon: <Layout className="w-5 h-5 text-indigo-400" />
                              },
                              {
                                  title: "Technical SEO Dominance",
                                  value: "Included",
                                  desc: "Advanced nationwide on-page indexing.",
                                  points: ["Schema Markup", "Core Web Vitals"],
                                  icon: <BarChart className="w-5 h-5 text-emerald-400" />
                              },
                              {
                                  title: "AI WhatsApp Integration",
                                  value: "Included",
                                  desc: "Automated 24/7 lead capture.",
                                  points: ["Auto-Reply", "Lead Qualification"],
                                  icon: <MessageSquare className="w-5 h-5 text-purple-400" />
                              },
                              {
                                  title: "Commercial Business Setup",
                                  value: "Included",
                                  desc: "Google Maps & Conversion Tracking.",
                                  points: ["Google Business Profile", "Analytics"],
                                  icon: <MapPin className="w-5 h-5 text-red-400" />
                              },
                              {
                                  title: "100% Digital Sovereignty",
                                  value: "Priceless",
                                  desc: "You own the code; zero hidden retainers.",
                                  points: ["Full Source Code", "No Monthly Fees"],
                                  icon: <Lock className="w-5 h-5 text-slate-400" />
                              }
                          ].map((item, i) => (
                              <div key={i} className="flex gap-5 p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-white/5 transition-colors border border-transparent hover:border-slate-200 dark:hover:border-white/5">
                                  <div className="mt-1 w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center flex-shrink-0 border border-slate-200 dark:border-slate-700">
                                      {item.icon}
                                  </div>
                                  <div className="flex-1">
                                      <div className="flex flex-wrap justify-between items-start gap-2 mb-1">
                                          <h4 className="font-bold text-slate-900 dark:text-white text-lg">{item.title}</h4>
                                          <span className="text-xs font-mono font-bold text-indigo-700 dark:text-indigo-200 bg-indigo-100 dark:bg-indigo-600/30 px-3 py-1 rounded border border-indigo-200 dark:border-indigo-500/50 shadow-sm">{item.value}</span>
                                      </div>
                                      <p className="text-slate-600 dark:text-slate-400 text-sm mb-3 leading-relaxed">{item.desc}</p>
                                      <div className="flex flex-wrap gap-3">
                                          {item.points.map((p, j) => (
                                              <span key={j} className="flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 px-2 py-1 rounded-md">
                                                  <CheckCircle2 className="w-3 h-3 text-green-500" /> {p}
                                              </span>
                                          ))}
                                      </div>
                                  </div>
                              </div>
                          ))}
                      </div>
                  </div>

                  {/* RIGHT SIDE: THE INVESTMENT (Pricing) */}
                  <div className="lg:col-span-5 bg-slate-50 dark:bg-slate-950/50 p-6 md:p-12 flex flex-col relative">
                      <div className="absolute top-0 right-0 bg-purple-500 text-white text-xs font-bold px-4 py-2 rounded-bl-2xl uppercase tracking-widest">
                          Limited Slots
                      </div>

                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
                          <span className="w-8 h-8 rounded-lg bg-purple-500 flex items-center justify-center text-white text-sm font-black">02</span>
                          The Investment
                      </h3>

                      <div className="flex-grow">
                          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 mb-8 shadow-sm">
                              <div className="flex justify-between items-center mb-4 pb-4 border-b border-slate-100 dark:border-slate-800">
                                  <span className="text-slate-500 text-sm font-medium">The Signature Package</span>
                                  <span className="text-slate-400 text-lg font-bold line-through decoration-red-400 decoration-2">RM 7,200</span>
                              </div>
                              <div className="flex justify-between items-end">
                                  <div>
                                      <span className="text-slate-500 text-sm font-medium block mb-1">Your Launch Price</span>
                                      <span className="text-purple-500 text-xs font-bold uppercase tracking-wider bg-purple-50 dark:bg-purple-900/20 px-2 py-1 rounded">One-Time Payment</span>
                                  </div>
                                  <div className="text-right">
                                      <span className="text-5xl font-black text-slate-900 dark:text-white tracking-tighter">RM 2,500</span>
                                  </div>
                              </div>
                          </div>

                          <div className="space-y-4 mb-8">
                              <div className="flex items-start gap-3">
                                  <div className="p-1 bg-green-100 dark:bg-green-900/20 rounded-full mt-0.5">
                                      <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400" />
                                  </div>
                                  <p className="text-sm text-slate-600 dark:text-slate-400"><strong>No Monthly Fees.</strong> You own the domain, hosting account, and code.</p>
                              </div>
                              <div className="flex items-start gap-3">
                                  <div className="p-1 bg-green-100 dark:bg-green-900/20 rounded-full mt-0.5">
                                      <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400" />
                                  </div>
                                  <p className="text-sm text-slate-600 dark:text-slate-400"><strong>7-Day Delivery.</strong> We work fast so you can start selling fast.</p>
                              </div>
                          </div>
                      </div>

                      <div className="mt-auto space-y-4">
                          <WhatsAppButton 
                              message="I'm interested in the 'Zero to Hero' Launchpad package."
                              buttonText="Claim This Package"
                              className="w-full py-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 shadow-lg shadow-indigo-500/30 flex items-center justify-center gap-2 group"
                              serviceName={'Launchpad Package'}
                              showIcon={true}
                          />
                          <WhatsAppButton
                              serviceName="Strategy Call Inquiry"
                              buttonText="Book a Strategy Call"
                              className="w-full py-4 bg-white dark:bg-transparent border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold rounded-xl hover:bg-slate-50 dark:hover:bg-white/5 transition-all flex items-center justify-center gap-2"
                              showIcon={true}
                          />
                          <p className="text-center text-xs text-slate-400 mt-4">
                              Strictly limited to 5 clients per month to ensure quality.
                          </p>
                      </div>
                  </div>
              </div>
           </div>
        </m.section>

        {/* --- MOVING PREVIEW (MARQUEE) (RESTORED) --- */}
        <section className="w-full overflow-hidden py-12 border-y border-slate-200 dark:border-white/5 bg-slate-100 dark:bg-slate-900/30">
          <m.div 
            className="flex gap-12 md:gap-24 whitespace-nowrap items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          >
            <PreviewStat label="SEO Result" value="Rank #1 (Google)" />
            <PreviewStat label="Load Time" value="0.2s Speed" />
            <PreviewStat label="Client" value="Pipe Manufacturer" />
            <PreviewStat label="Automation" value="95% Faster" />
            <PreviewStat label="Quality Score" value="402% Increase" />
            <PreviewStat label="Tech Stack" value="React + Vite + AI" />
            <PreviewStat label="Service" value="Cheap SEO Malaysia" />
            
            {/* Exact Duplicate for seamless loop */}
            <PreviewStat label="SEO Result" value="Rank #1 (Google)" />
            <PreviewStat label="Load Time" value="0.2s Speed" />
            <PreviewStat label="Client" value="Pipe Manufacturer" />
            <PreviewStat label="Automation" value="95% Faster" />
            <PreviewStat label="Quality Score" value="402% Increase" />
            <PreviewStat label="Tech Stack" value="React + Vite + AI" />
            <PreviewStat label="Service" value="Cheap SEO Malaysia" />
          </m.div>
        </section>

        {/* --- IDENTITY PROTOCOL (RESTORED) --- */}
        <m.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="py-20 md:py-32 px-6 max-w-7xl mx-auto border-t border-slate-200 dark:border-white/5"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
               <div>
                  <span className="text-indigo-500 font-mono text-xs font-black uppercase tracking-[0.4em] mb-4 block">Identity Protocol</span>
                  <h2 className="text-4xl md:text-6xl font-mono font-black text-slate-900 dark:text-white uppercase tracking-tighter leading-none">
                    Not An Agency.<br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">A Digital Foundry.</span>
                  </h2>
               </div>
               
               <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                  <p>
                    Agencies sell hours; we sell <strong>outcomes</strong>. Most "web designers" are decorators who use drag-and-drop builders. We are <strong className="text-slate-900 dark:text-white">Systems Architects</strong> who write semantic, high-performance code.
                  </p>
                  <p>
                    In an era where AI answers questions before users click a link, you need more than a pretty website. You need a <strong>Digital Asset</strong> that is structured for AEO (Answer Engine Optimization) and engineered for GEO (Generative Engine Optimization).
                  </p>
                  <ul className="space-y-3 mt-4">
                      <li className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-indigo-500 flex-shrink-0" />
                          <span><strong>Zero Bloat:</strong> No WordPress themes. Just raw speed.</span>
                      </li>
                      <li className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-indigo-500 flex-shrink-0" />
                          <span><strong>Data Sovereignty:</strong> You own your code, your data, and your platform.</span>
                      </li>
                      <li className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-indigo-500 flex-shrink-0" />
                          <span><strong>Future-Proof:</strong> Built on React & Vite, the same stack used by many modern tech companies.</span>
                      </li>
                  </ul>
               </div>

               {/* --- REBELLION BANNER (STRATEGIC PLACEMENT) --- */}
               <Link to="/about" className="block bg-green-50 dark:bg-green-950/10 border border-green-500/20 p-6 rounded-xl relative overflow-hidden group hover:bg-green-100 dark:hover:bg-green-950/20 transition-all">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                        <div className="p-3 bg-green-100 dark:bg-green-500/10 rounded-lg text-green-600 dark:text-green-500 group-hover:scale-110 transition-transform">
                            <Terminal size={20} />
                        </div>
                        <div>
                            <div className="text-green-600 dark:text-green-500 font-mono text-[10px] font-bold uppercase tracking-[0.2em] mb-1 animate-pulse">Transmission Incoming</div>
                            <div className="text-slate-700 dark:text-slate-300 font-mono text-xs font-bold uppercase tracking-widest group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                                We are the glitch in the matrix. Read the Manifesto &rarr;
                            </div>
                        </div>
                    </div>
               </Link>

               <div className="flex flex-col sm:flex-row gap-6 pt-4">
                  <div className="flex items-center gap-4">
                     <div className="w-12 h-12 rounded-2xl bg-indigo-100 dark:bg-indigo-500/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-500/20">
                        <Code2 size={24} />
                     </div>
                     <div>
                        <h4 className="text-slate-900 dark:text-white font-bold font-mono uppercase tracking-wider text-sm">Custom Core</h4>
                        <p className="text-slate-500 dark:text-slate-500 text-xs">No Templates. Pure Code.</p>
                     </div>
                  </div>
                  <div className="flex items-center gap-4">
                     <div className="w-12 h-12 rounded-2xl bg-purple-100 dark:bg-purple-500/10 flex items-center justify-center text-purple-600 dark:text-purple-400 border border-purple-200 dark:border-purple-500/20">
                        <TrendingUp size={24} />
                     </div>
                     <div>
                        <h4 className="text-slate-900 dark:text-white font-bold font-mono uppercase tracking-wider text-sm">Growth Logic</h4>
                        <p className="text-slate-500 dark:text-slate-500 text-xs">Built to Rank & Convert.</p>
                     </div>
                  </div>
               </div>
            </div>

            {/* Right Column: Visual */}
            <div className="relative hidden lg:block">
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 rounded-[2rem] blur-3xl transform rotate-3"></div>
                <div className="relative rounded-[2rem] overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl group aspect-[4/5]">
                    <img 
                        src={IMAGES.HOME.DIGITAL_FOUNDRY}
                        alt="Digital Foundry Architecture" 
                        className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                        loading="lazy"
                        decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 text-white">
                                <Cpu size={24} />
                            </div>
                            <div>
                                <div className="text-white font-bold text-lg">Core Architecture</div>
                                <div className="text-slate-300 text-xs font-mono">System Status: Optimized</div>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                                <div className="h-full bg-indigo-500 w-[92%]"></div>
                            </div>
                            <div className="flex justify-between text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                                <span>Performance</span>
                                <span>98/100</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </m.section>

        {/* --- BLOG PREVIEW SECTION --- */}
        <BlogPreview />

        {/* --- SEO CONTENT BLOCK (Ghost Town Fix) --- */}
        <m.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="py-16 md:py-24 px-6 max-w-7xl mx-auto border-t border-slate-200 dark:border-white/5"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Why Omino Tech is the Best Tech Agency in Malaysia</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                The Malaysian digital landscape is saturated with legacy marketing agencies selling bloated, slow-loading websites at premium prices. Omino Tech has redefined this standard. When businesses search for the best web developer in Malaysia, they are looking for a dedicated technology partner who can deliver sub-second web architecture, scalable mobile applications, and Generative Engine Optimization (GEO) without exorbitant monthly retainers.
              </p>
            </div>
            <div>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                We do not rely on drag-and-drop shortcuts. By engineering custom solutions using modern stacks like React and Vite, we guarantee sub-second load times that easily pass Google's strictest Core Web Vitals speed tests. This uncompromising technical superiority serves as the foundation for our aggressive SEO strategies, ensuring our clients achieve high-visibility search rankings across the entire country while retaining absolute ownership of their digital assets.
              </p>
            </div>
          </div>
        </m.section>

        {/* --- AEO FAQ SECTION (VOICE SEARCH) --- */}
        <m.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="py-16 md:py-24 px-6 max-w-4xl mx-auto"
        >
           <div className="text-center mb-16">
              <span className="text-indigo-500 font-mono text-xs font-black uppercase tracking-[0.2em] mb-4 block">AEO Optimized</span>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                 Frequently Asked Questions
              </h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                 Structured for Voice Search and AI Answer Engines.
              </p>
           </div>

           <div className="space-y-4">
              {[
                 { q: "What is the best web development company in Malaysia?", a: "Omino Tech is widely regarded as one of the best web development companies in Malaysia due to our transparent pricing, sub-second web architecture, and zero-hidden-fee policy. We prioritize clean code and high performance over slow, pre-built templates." },
                 { q: "Do you offer the best web development packages for SMEs in Malaysia?", a: "Yes. We offer the best value web development packages in Malaysia designed specifically for growing businesses. Our pricing ranges from an affordable RM 590 professional landing page to a comprehensive RM 2,500 Signature Digital Engine that includes custom web design, SEO setup, and AI automation." },
                 { q: "Do you charge hidden monthly maintenance fees?", a: "No. We do not trap our clients in expensive monthly marketing retainers. You pay a straightforward, one-time development fee for your website or application and take absolute ownership of your digital assets and code." }
              ].map((item, i) => (
                 <m.div 
                    key={i} 
                    initial={false}
                    className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openFaq === i ? 'border-indigo-500 bg-white dark:bg-slate-900 shadow-lg shadow-indigo-500/10' : 'border-slate-200 dark:border-white/10 bg-white/50 dark:bg-slate-900/30 hover:border-indigo-500/30'}`}
                 >
                    <button 
                       onClick={() => setOpenFaq(openFaq === i ? null : i)}
                       className="w-full flex items-center justify-between p-6 text-left"
                    >
                       <span className={`font-bold text-lg ${openFaq === i ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-900 dark:text-white'}`}>{item.q}</span>
                       <div className={`p-2 rounded-full transition-colors ${openFaq === i ? 'bg-indigo-100 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'}`}>
                          {openFaq === i ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                       </div>
                    </button>
                    <AnimatePresence>
                        {openFaq === i && (
                           <m.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                           >
                              <div className="p-6 pt-0 text-slate-600 dark:text-slate-400 leading-relaxed border-t border-transparent">
                                 <div className="pt-4 border-t border-dashed border-slate-200 dark:border-slate-800">
                                     {item.a}
                                 </div>
                              </div>
                           </m.div>
                        )}
                    </AnimatePresence>
                 </m.div>
              ))}
           </div>
        </m.section>
        </m.main>

        <Footer />

      </div>
      </LazyMotion>
    </>
  );
};

const AchievementCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="p-8 bg-white dark:bg-white/[0.02] backdrop-blur-xl rounded-3xl border border-slate-200 dark:border-white/10 hover:border-indigo-500/30 transition-all duration-500 group hover:-translate-y-1 shadow-lg dark:shadow-none">
    <div className="mb-6 p-4 bg-slate-100 dark:bg-slate-900 rounded-2xl w-fit border border-slate-200 dark:border-white/5 group-hover:border-indigo-500/30 transition-colors">{icon}</div>
    <h4 className="text-xl font-mono font-bold mb-4 text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{title}</h4>
    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">{description}</p>
  </div>
);

const PreviewStat = ({ label, value }: { label: string, value: string }) => (
  <div className="flex flex-col">
    <span className="text-xs font-mono font-black text-slate-600 dark:text-slate-300 uppercase tracking-[0.2em] mb-2">{label}</span>
    <span className="text-xl md:text-2xl font-mono font-black text-slate-900 dark:text-white uppercase tracking-tighter">{value}</span>
  </div>
);

const BlogPreview = () => {
  // Safety check if BLOG_POSTS is undefined
  const posts = typeof BLOG_POSTS !== 'undefined' ? BLOG_POSTS.slice(0, 3) : [];

  if (posts.length === 0) return null;

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto border-t border-slate-200 dark:border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
        <div>
           <span className="text-indigo-500 font-mono text-xs font-black uppercase tracking-[0.2em] mb-2 block">Engineering Logs</span>
           <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Latest Insights</h2>
        </div>
        <Link to="/blog" className="group flex items-center gap-2 text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
           View All Articles <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post, i) => (
           <m.div 
             key={post.id}
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: i * 0.1 }}
           >
              <Link to={`/blog/${post.slug}`} className="group block h-full">
                 <div className="aspect-[16/10] rounded-2xl overflow-hidden mb-5 border border-slate-200 dark:border-white/10 relative">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3">
                        <span className="px-3 py-1 bg-white/90 dark:bg-black/80 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider rounded-lg border border-slate-200 dark:border-white/10 text-indigo-600 dark:text-indigo-400">
                            {post.category}
                        </span>
                    </div>
                 </div>
                 <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mb-3 font-mono">
                    <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                 </div>
                 <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-snug group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {post.title}
                 </h3>
              </Link>
           </m.div>
        ))}
      </div>
    </section>
  );
};

export default Home;