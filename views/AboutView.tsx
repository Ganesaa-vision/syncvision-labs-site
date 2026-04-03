import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation, Link } from 'react-router-dom';
import { 
  Code, BrainCircuit, Terminal, Zap, ShieldCheck,
  Target, Users, Quote, Globe, Cpu
} from 'lucide-react';
import Footer from '../components/Footer';
import { m, LazyMotion, domAnimation } from 'framer-motion';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { IMAGES } from '../images';
import { PageTransition } from '../PageTransition';
import Founders from '../components/Founders';

const AboutView: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Omino Tech",
    "url": "https://www.ominotech.com.my",
    "logo": "https://www.ominotech.com.my/favicon-96x96.png",
    "description": "A team of student innovators specializing in high-performance web architecture, mobile apps, and AI automation in Malaysia.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Selangor",
      "addressCountry": "MY"
    }
  };

  return (
    <PageTransition>
    <LazyMotion features={domAnimation}>
    <div className="bg-white dark:bg-[#050505] min-h-screen flex flex-col text-slate-900 dark:text-slate-100 font-sans selection:bg-green-500/30 overflow-x-hidden transition-colors duration-300">
      <Helmet>
        <title>About Us | The Rebellion - Omino Tech</title>
        <meta name="description" content="We are the glitch in the matrix. A team of student innovators building the future while agencies bill for meeting hours." />
        <link rel="canonical" href="https://www.ominotech.com.my/about" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ominotech.com.my/about" />
        <meta property="og:title" content="About Us | The Rebellion - Omino Tech" />
        <meta property="og:description" content="We are the glitch in the matrix. A team of student innovators building the future while agencies bill for meeting hours." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.ominotech.com.my/about" />
        <meta name="twitter:title" content="About Us | The Rebellion - Omino Tech" />
        <meta name="twitter:description" content="We are the glitch in the matrix. A team of student innovators building the future while agencies bill for meeting hours." />
        <meta name="twitter:image" content={IMAGES.GLOBAL.OG_IMAGE} />
        <meta property="og:image" content={IMAGES.GLOBAL.OG_IMAGE} />
        <meta property="og:image:alt" content="Omino Tech Digital Growth Engine - Custom Web Development and SEO Services Malaysia" />
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Omino Tech" />
        <link rel="manifest" href="/site.webmanifest" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      </Helmet>

      {/* Background Elements */}
      <div className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-indigo-500/5 dark:bg-indigo-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-purple-500/5 dark:bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <m.main initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} className="pt-24 md:pt-32 pb-12 md:pb-20 px-6 max-w-7xl mx-auto relative z-10 flex-grow w-full">

        {/* HERO SECTION */}
        <div className="mb-20 md:mb-40 text-center">
          <m.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/20 bg-indigo-50 dark:bg-indigo-500/5 text-indigo-600 dark:text-indigo-400 text-xs font-mono mb-8"
          >
            <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" />
            SYSTEM_OVERRIDE_INITIATED
          </m.div>

          <m.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-slate-900 dark:text-white leading-[1.1] mb-10"
          >
            We Are The <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-cyan-500 to-fuchsia-500 dark:from-indigo-400 dark:via-cyan-300 dark:to-purple-400">
              Glitch In The Matrix.
            </span>
          </m.h1>

          <m.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl mx-auto"
          >
            While big agencies are still billing you for 'meeting hours,' we are
            building the future.{' '}
            <span className="text-slate-900 dark:text-white font-bold">
              We are Omino Tech.
            </span>
          </m.p>
        </div>

        {/* 1. THE ORIGIN STORY */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20 md:mb-40">
           <m.div 
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="relative"
           >
              <div className="absolute -inset-4 bg-indigo-500/10 rounded-3xl blur-xl"></div>
              <div className="relative bg-white/50 dark:bg-slate-900/50 border border-indigo-500/20 p-10 rounded-3xl backdrop-blur-sm shadow-lg dark:shadow-none">
                 <Code className="w-12 h-12 text-indigo-500 mb-6" />
                 <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-slate-900 dark:text-white mb-6 leading-[1.1]">The Rebellion Against Bloat</h2>
                 <div className="space-y-6 text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                    <p>
                      <strong className="text-slate-900 dark:text-white">Omino Tech wasn't started in a boardroom.</strong> It started in a dorm room at 3 AM, fueled by coffee and code.
                    </p>
                    <p>
                      We looked at the Malaysian digital landscape and saw a problem. Traditional agencies were charging RM 15,000 for websites that looked like they were built in 2015. They had fancy offices, expensive coffee machines, and layers of 'account managers'—and you were paying for all of it.
                    </p>
                    <p>
                      We realized that in the age of AI and modern tech, quality doesn't need to be expensive. It just needs to be smart.
                    </p>
                    <p>
                       We are a team of Computer Science innovators. We don't have overhead. We don't have 'office hours.' We have obsession. We built Omino Tech to prove a point: That a hungry team of innovators with the latest tech can outperform a sluggish corporate giant any day of the week.
                    </p>
                 </div>
              </div>
           </m.div>

           <m.div
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="space-y-8"
           >
              <div className="p-8 border-l-2 border-indigo-500/30 bg-slate-100 dark:bg-white/[0.02]">
                 <p className="text-xl font-medium text-slate-900 dark:text-white leading-relaxed italic mb-6">
                   "You aren't hiring someone to catch up; you're hiring someone who is already ahead."
                 </p>
                 <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-white/10 flex items-center justify-center">
                        <span className="font-bold text-xs text-indigo-600 dark:text-indigo-400">GL</span>
                    </div>
                    <div>
                        <div className="text-slate-900 dark:text-white font-bold text-sm">Ganesaa</div>
                        <div className="text-slate-600 dark:text-slate-400 text-xs uppercase tracking-widest">Founder, Omino Tech</div>
                    </div>
                 </div>
              </div>
           </m.div>
        </div>

        {/* 2. THE STUDENT INNOVATOR ADVANTAGE */}
        <div className="mb-40">
           <div className="text-center mb-20">
             <span className="text-indigo-600 dark:text-indigo-400 font-mono text-xs font-black uppercase tracking-[0.3em] mb-4 block">The Advantage</span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-slate-900 dark:text-white mb-6 leading-[1.1]">The Student Advantage</h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">Most people think hiring a student is a risk. <br/>Here is why hiring an agency is the real risk.</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <m.div 
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-white dark:bg-slate-900/30 border border-slate-200 dark:border-white/10 p-8 rounded-3xl hover:border-indigo-500/50 transition-colors duration-300 group relative overflow-hidden shadow-sm dark:shadow-none transform-gpu will-change-transform"
              >
                 <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity"><Users size={100} /></div>
                 <div className="w-12 h-12 bg-indigo-900/20 rounded-xl flex items-center justify-center mb-6 text-indigo-400 group-hover:scale-110 transition-transform">
                    <Zap size={24} />
                 </div>
                 <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Agencies are Comfortable. <br/> We are Hungry.</h3>
                 <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    An agency employee goes home at 5 PM. They get paid whether your project succeeds or fails. We are building our reputation from zero. We don't just want your project to work; we need it to be a masterpiece. We code with a level of passion that a salary can't buy.
                 </p>
              </m.div>
              
              <m.div 
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-500/20 p-8 rounded-3xl hover:border-indigo-500/50 transition-colors duration-300 group relative overflow-hidden transform-gpu will-change-transform"
              >
                 <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity text-indigo-500"><BrainCircuit size={100} /></div>
                 <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-6 text-indigo-400 group-hover:scale-110 transition-transform">
                    <Terminal size={24} />
                 </div>
                 <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">They Use Yesterday's Tools. <br/> We Build Tomorrow's.</h3>
                 <p className="text-slate-700 dark:text-indigo-100/80 leading-relaxed">
                    While agencies are still struggling to understand AI, we are native to it. We use Gemini, Flutter, and Next.js—the tech stack of 2026—not the dusty PHP templates of 2010.
                 </p>
              </m.div>

              <m.div 
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-white dark:bg-slate-900/30 border border-slate-200 dark:border-white/10 p-8 rounded-3xl hover:border-indigo-500/50 transition-colors duration-300 group relative overflow-hidden shadow-sm dark:shadow-none transform-gpu will-change-transform"
              >
                 <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity"><Code size={100} /></div>
                 <div className="w-12 h-12 bg-indigo-900/20 rounded-xl flex items-center justify-center mb-6 text-indigo-400 group-hover:scale-110 transition-transform">
                    <Target size={24} />
                 </div>
                 <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">You Pay for Code, <br/> Not Rent.</h3>
                 <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    When you pay an agency RM 20,000, half of that goes to their office rent and electricity bill. When you pay us, 100% of your budget goes into the Innovation of your product.
                 </p>
              </m.div>
           </div>
        </div>

        {/* 3. PHILOSOPHY */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-40 items-center">
           <div>
             <span className="text-indigo-600 dark:text-indigo-400 font-mono text-xs font-black uppercase tracking-[0.3em] mb-4 block">Our Philosophy</span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-slate-900 dark:text-white mb-8 leading-[1.1]">Innovation at the <br/> Speed of Thought</h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg mb-8">
                We don't believe in 6-month timelines for a website. That’s absurd. We believe in Agile Innovation.
              </p>
              <div className="space-y-6">
                 {[
                    { title: "Eliminate the Noise", desc: "No unnecessary meetings. We communicate via code and results." },
                    { title: "Automate the Boring", desc: "We use AI to handle the mundane tasks so we can focus on the creative magic." },
                    { title: "Democratize Tech", desc: "A small Malaysian business should have the same tech power as a global corporation." }
                 ].map((item, i) => (
                    <m.div 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ scale: 1.02, x: 10 }}
                      className="flex gap-6 p-6 bg-white dark:bg-slate-900/20 border border-slate-200 dark:border-white/5 rounded-2xl hover:bg-indigo-50/50 dark:hover:bg-indigo-900/10 hover:border-indigo-500/30 transition-all shadow-sm dark:shadow-none group"
                    >
                     <div className="text-indigo-600 dark:text-indigo-400 font-mono font-bold text-xl">0{i+1}</div>
                       <div>
                          <h4 className="text-slate-900 dark:text-white font-bold mb-2">{item.title}</h4>
                          <p className="text-slate-600 dark:text-slate-400 text-sm">{item.desc}</p>
                       </div>
                    </m.div>
                 ))}
              </div>
           </div>
           
           <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-3xl rounded-full opacity-30"></div>
              <div className="relative bg-slate-100 dark:bg-slate-950 border border-indigo-500/20 rounded-3xl p-8 overflow-hidden">
                 <div className="absolute top-0 right-0 p-4 opacity-10"><ShieldCheck size={120} /></div>
                 <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-8 font-mono uppercase tracking-widest border-b border-slate-200 dark:border-white/10 pb-4">Vital Stats</h3>
                 
                 <div className="space-y-8">
                    <div>
                  <div className="text-xs text-indigo-600 dark:text-indigo-400 font-mono uppercase tracking-widest mb-2">Core Stack</div>
                       <div className="flex flex-wrap gap-2">
                          {['Flutter (Mobile)', 'React/Next.js (Web)', 'Python/AI'].map(tag => (
                             <span key={tag} className="px-3 py-1 bg-indigo-900/20 border border-indigo-500/20 rounded text-indigo-400 text-xs font-mono">{tag}</span>
                          ))}
                       </div>
                    </div>
                    <div>
                  <div className="text-xs text-indigo-600 dark:text-indigo-400 font-mono uppercase tracking-widest mb-2">Mission</div>
                       <p className="text-slate-700 dark:text-slate-300 text-sm">To lower the barrier of entry for Malaysian businesses to go digital.</p>
                    </div>
                    <div>
                  <div className="text-xs text-indigo-600 dark:text-indigo-400 font-mono uppercase tracking-widest mb-2">Standard</div>
                       <p className="text-slate-700 dark:text-slate-300 text-sm">We don't ship code we aren't proud of.</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* 4. LEADERSHIP CORE */}
        <div className="mb-40 relative">
           <div className="text-center mb-24 relative z-10">
             <span className="text-indigo-600 dark:text-indigo-400 font-mono text-xs font-black uppercase tracking-[0.3em] mb-4 block">System Architects</span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-slate-900 dark:text-white mb-6 leading-[1.1]">
                THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">CORE.</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg font-medium">
                The minds behind the machine. We engineer digital dominance.
              </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto relative z-10">
              {/* Founder Card */}
              <m.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="group relative h-full flex"
              >
                 <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-[3rem] opacity-0 group-hover:opacity-60 blur-2xl transition-opacity duration-500 transform-gpu will-change-transform" />
                 <div className="relative w-full h-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] p-8 md:p-12 flex flex-col items-center justify-center text-center overflow-hidden group-hover:border-indigo-500/50 transition-colors duration-500 transform-gpu shadow-xl shadow-indigo-500/5 group-hover:shadow-indigo-500/20">
                    
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:16px_16px]" />
                    
                    {/* Ambient Glow Effects instead of image */}
                    <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition-all duration-700" />
                    <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-all duration-700" />

                    <h3 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-4 relative z-10">Ganesaa</h3>
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs font-mono font-bold uppercase tracking-widest mb-8 relative z-10 shadow-sm">
                        <Terminal size={14} /> Lead Architect
                    </div>
                    
                    <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed font-medium relative z-10 max-w-sm">
                        "We don't just write code; we engineer digital dominance. My vision is to provide Malaysian businesses with Silicon Valley caliber technology."
                    </p>
                    
                    {/* Social/Contact Icons */}
                    <div className="mt-8 flex gap-4 relative z-10">
                        <a href="#" className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl text-slate-600 dark:text-slate-400 hover:text-white hover:bg-indigo-600 transition-all duration-300 shadow-sm hover:shadow-indigo-500/25">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                        </a>
                        <a href="mailto:contact@ominotech.com" className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl text-slate-600 dark:text-slate-400 hover:text-white hover:bg-indigo-600 transition-all duration-300 shadow-sm hover:shadow-indigo-500/25">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                        </a>
                    </div>
                 </div>
              </m.div>

              {/* Co-Founder Card */}
              <m.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="group relative h-full flex"
              >
                 <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-[3rem] opacity-0 group-hover:opacity-60 blur-2xl transition-opacity duration-500 transform-gpu will-change-transform" />
                 <div className="relative w-full h-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] p-8 md:p-12 flex flex-col items-center justify-center text-center overflow-hidden group-hover:border-blue-500/50 transition-colors duration-500 transform-gpu shadow-xl shadow-blue-500/5 group-hover:shadow-blue-500/20">
                    
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]" />
                    
                    {/* Ambient Glow Effects instead of image */}
                    <div className="absolute top-0 left-0 -mt-20 -ml-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all duration-700" />
                    <div className="absolute bottom-0 right-0 -mb-20 -mr-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all duration-700" />

                    <h3 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-4 relative z-10">Syed Hakim</h3>
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-mono font-bold uppercase tracking-widest mb-8 relative z-10 shadow-sm">
                        <Target size={14} /> Strategy Lead
                    </div>
                    
                    <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed font-medium relative z-10 max-w-sm">
                        "Innovation is not just about new technology, it's about new value. We ensure every system translates directly into operational efficiency."
                    </p>

                    {/* Social/Contact Icons */}
                    <div className="mt-8 flex gap-4 relative z-10">
                        <a href="#" className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl text-slate-600 dark:text-slate-400 hover:text-white hover:bg-blue-600 transition-all duration-300 shadow-sm hover:shadow-blue-500/25">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                        </a>
                        <a href="mailto:tech@ominotech.com" className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl text-slate-600 dark:text-slate-400 hover:text-white hover:bg-blue-600 transition-all duration-300 shadow-sm hover:shadow-blue-500/25">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                        </a>
                    </div>
                 </div>
              </m.div>
           </div>
        </div>

        {/* 5. PROMISE & CTA */}
        <div className="relative rounded-[3rem] overflow-hidden bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-500/20 p-12 md:p-24 text-center">
           {/* Removed noise texture for performance */}
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-indigo-500/10 to-transparent blur-3xl pointer-events-none" style={{ backgroundImage: `url(${IMAGES.ABOUT.NOISE_TEXTURE})`, opacity: 0.05 }}></div>
           
           <div className="relative z-10">
          <h3 className="text-indigo-600 dark:text-indigo-400 font-mono text-sm font-black uppercase tracking-[0.3em] mb-8">The Omino Tech Promise</h3>
              
              <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 max-w-4xl mx-auto mb-12 leading-relaxed font-medium">
                "We are not the cheapest because we cut corners. We are the most affordable because we cut out the nonsense. If you want a team that wears suits and talks about 'synergy,' hire an agency. <br/><br/>
                <span className="text-slate-900 dark:text-white font-bold">If you want a team that stays up until the job is perfect because we love what we do... Hire Omino Tech.</span>"
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                 <WhatsAppButton
                    serviceName="Rebellion Inquiry"
                    buttonText="Join the Rebellion"
                    className="px-10 py-5 bg-indigo-500 text-white font-bold rounded-full hover:bg-indigo-400 transition-all flex items-center gap-2 shadow-[0_0_30px_rgba(99,102,241,0.3)] hover:scale-105"
                    showIcon={true}
                 />
              </div>
           </div>
        </div>
      </m.main>
      <Footer />
    </div>
    </LazyMotion>
    </PageTransition>
  );
};

export default AboutView;