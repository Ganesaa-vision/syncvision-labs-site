import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { CheckCircle2, MessageSquare, ArrowRight, ShieldCheck } from 'lucide-react';
import { PageTransition } from '../PageTransition';
import Footer from '../components/Footer';
import { m, LazyMotion, domAnimation, AnimatePresence } from 'framer-motion';
import { IMAGES } from '../images';

const ContactView: React.FC = () => {
  const [sent, setSent] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  // Performant framer-motion variants for staggered entrance
  const formContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
  };

  const formItem = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120, damping: 20 } }
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Omino Tech",
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "contact@ominotech.com.my",
        "contactType": "customer service",
        "areaServed": "MY",
        "availableLanguage": ["English", "Malay"]
      }
    }
  };

  return (
    <PageTransition>
    <LazyMotion features={domAnimation}>
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/5 blur-3xl rounded-full pointer-events-none transform-gpu"></div>
      <Helmet>
        <title>Initiate Protocol | Omino Tech</title>
        <meta name="description" content="Select your mission objective. Validated requests receive engineering protocols within 12 hours. Secure channel active." />
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Omino Tech" />
        <meta property="og:image" content={IMAGES.GLOBAL.OG_IMAGE} />
        <meta name="twitter:image" content={IMAGES.GLOBAL.OG_IMAGE} />
        <link rel="manifest" href="/site.webmanifest" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      </Helmet>

      <m.main initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} className="py-24 md:py-40 px-6 max-w-7xl mx-auto flex-grow w-full">
        <div className="mb-24">
          <span className="font-mono text-indigo-600 dark:text-indigo-400 text-sm font-black uppercase tracking-[1em] mb-8 block">Communication Protocol</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-slate-900 dark:text-white mb-8 leading-[1.1]">LET'S <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-cyan-500 to-fuchsia-500 dark:from-indigo-400 dark:via-cyan-300 dark:to-purple-400">BUILD.</span></h2>
          <p className="mt-12 text-slate-700 dark:text-slate-200 font-mono text-lg md:text-xl max-w-4xl uppercase tracking-[0.2em] font-black leading-relaxed border-l-4 border-indigo-500 pl-8">
            Select your mission objective. Validated requests receive engineering protocols within 12 hours.
          </p>
          <p className="mt-8 text-emerald-500 font-bold text-lg max-w-4xl">
            Get the 'Student Founder' Advantage before we graduate to Agency Rates.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5 p-6 md:p-12 bg-white dark:bg-white/[0.02] backdrop-blur-xl rounded-[3rem] border border-slate-200 dark:border-white/10 shadow-2xl flex flex-col justify-between">
             <div className="space-y-12">
               <div className="flex flex-col md:flex-row items-center gap-6 text-indigo-600 dark:text-indigo-400"><MessageSquare size={32} /><h3 className="font-mono font-black uppercase tracking-widest text-slate-900 dark:text-slate-100">Technical Intake</h3></div>
               <p className="text-slate-600 dark:text-slate-200 font-bold uppercase tracking-widest text-sm leading-loose">Transmissions are encrypted. Direct engineering lead access provided upon objective validation.</p>
             </div>
             <div className="mt-20 pt-6 md:pt-12 border-t border-slate-200 dark:border-slate-100/5 space-y-8">
               <div className="flex items-center gap-4 text-indigo-600 dark:text-indigo-400 font-mono text-xs font-black uppercase tracking-[0.5em]"><div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_#10b981]"></div> Secure Channel Active</div>
             <div className="flex items-center gap-4 text-slate-600 dark:text-slate-400 font-mono text-xs font-black uppercase tracking-[0.5em]"><ShieldCheck size={14}/> Encrypted Handshake Ready</div>
             </div>
          </div>

          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
            {sent ? (
              <m.div 
                key="success-message"
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="p-10 md:p-20 bg-white dark:bg-white/[0.02] backdrop-blur-xl border border-emerald-500/40 rounded-[3rem] text-center shadow-3xl flex flex-col items-center"
              >
                 <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mb-10 ring-4 ring-emerald-500/20">
                   <CheckCircle2 size={40} className="text-emerald-500" />
                 </div>
                 <h3 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 dark:text-slate-100 mb-4 leading-[1.1]">SIGNAL RECEIVED</h3>
             <p className="text-slate-700 dark:text-slate-200 text-xs uppercase tracking-widest mb-12 font-bold">Decoding objectives. Expect a protocol update shortly.</p>
                 <button onClick={() => setSent(false)} className="text-indigo-600 dark:text-indigo-400 font-mono text-xs font-black uppercase tracking-widest border-b-2 border-indigo-500/20 hover:border-indigo-500 transition-all pb-1">New Transmission</button>
              </m.div>
            ) : (
              <m.form 
                key="contact-form"
                variants={formContainer}
                initial="hidden"
                animate="show"
                exit="exit"
                onSubmit={(e) => { e.preventDefault(); setSent(true); }} 
                className="p-12 md:p-16 bg-white dark:bg-white/[0.02] backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-[3rem] space-y-10 shadow-2xl relative overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                   <m.div variants={formItem} className="space-y-4">
                 <label className="font-mono text-xs uppercase text-slate-600 dark:text-slate-400 tracking-widest font-black block">Identity / Organization</label>
                 <input required type="text" placeholder="Name or Company" className="w-full bg-slate-100 dark:bg-slate-950 border border-slate-300 dark:border-white/10 rounded-2xl p-4 md:p-6 text-slate-900 dark:text-slate-200 font-mono text-sm font-black focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 outline-none transition-all duration-300 placeholder-slate-500 dark:placeholder-slate-400 shadow-inner transform-gpu focus:-translate-y-1 hover:bg-slate-50 dark:hover:bg-slate-900/50" />
                   </m.div>
                   <m.div variants={formItem} className="space-y-4">
                 <label className="font-mono text-xs uppercase text-slate-600 dark:text-slate-400 tracking-widest font-black block">Signal Channel (Email)</label>
                 <input required type="email" placeholder="contact@ominotech.com.my" className="w-full bg-slate-100 dark:bg-slate-950 border border-slate-300 dark:border-white/10 rounded-2xl p-4 md:p-6 text-slate-900 dark:text-slate-200 font-mono text-sm font-black focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 outline-none transition-all duration-300 placeholder-slate-500 dark:placeholder-slate-400 shadow-inner transform-gpu focus:-translate-y-1 hover:bg-slate-50 dark:hover:bg-slate-900/50" />
                   </m.div>
                </div>
                <m.div variants={formItem} className="space-y-4">
              <label className="font-mono text-xs uppercase text-slate-600 dark:text-slate-400 tracking-widest font-black block">Mission Objective</label>
              <textarea rows={5} required placeholder="Detailed technical requirements, ROI goals, or architectural objectives..." className="w-full bg-slate-100 dark:bg-slate-950 border border-slate-300 dark:border-white/10 rounded-2xl p-4 md:p-6 text-slate-900 dark:text-slate-200 font-mono text-sm font-black focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 outline-none transition-all duration-300 resize-none placeholder-slate-500 dark:placeholder-slate-400 shadow-inner transform-gpu focus:-translate-y-1 hover:bg-slate-50 dark:hover:bg-slate-900/50"></textarea>
                </m.div>
                <m.div variants={formItem}>
                  <button type="submit" className="w-full py-6 md:py-8 bg-indigo-600 text-white font-mono text-sm font-black uppercase tracking-widest rounded-2xl hover:bg-indigo-500 transition-all duration-300 flex flex-col md:flex-row items-center justify-center gap-6 shadow-xl shadow-indigo-500/20 active:scale-95 hover:shadow-indigo-500/40 hover:-translate-y-1 transform-gpu">
                  DEPLOY TRANSMISSION <ArrowRight size={20} />
                </button>
                </m.div>
              </m.form>
            )}
            </AnimatePresence>
          </div>
        </div>
      </m.main>
      <Footer />
    </div>
    </LazyMotion>
    </PageTransition>
  );
};

export default ContactView;