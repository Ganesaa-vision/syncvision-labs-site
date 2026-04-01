import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { m } from 'framer-motion';
import { ArrowLeft, Terminal } from 'lucide-react';
import { PageTransition } from '../PageTransition';
import { IMAGES } from '../images';
import Footer from '../components/Footer';

const NotFoundView: React.FC = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>404 - System Offline | Omino Tech</title>
        <meta name="robots" content="noindex, follow" />
        <meta property="og:image" content={IMAGES.GLOBAL.OG_IMAGE} />
        <meta name="twitter:image" content={IMAGES.GLOBAL.OG_IMAGE} />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-[#030303] text-slate-900 dark:text-slate-200 transition-colors duration-300">
        <main className="flex-grow flex flex-col items-center justify-center relative px-6 overflow-hidden pt-32 pb-20">
          {/* Ambient Error Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] bg-red-500/10 dark:bg-red-600/15 rounded-full blur-3xl pointer-events-none"></div>

          {/* Pure CSS Glitch Effect */}
          <style>{`
            .glitch-wrapper {
              position: relative;
            }
            .glitch-text {
              position: relative;
              z-index: 2;
            }
            .glitch-text::before,
            .glitch-text::after {
              content: attr(data-text);
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: transparent;
            }
            .glitch-text::before {
              left: 3px;
              text-shadow: -2px 0 #4f46e5; /* Indigo */
              animation: glitch-anim-1 2.5s infinite linear alternate-reverse;
            }
            .glitch-text::after {
              left: -3px;
              text-shadow: -2px 0 #06b6d4, 2px 2px #4f46e5; /* Cyan & Indigo */
              animation: glitch-anim-2 3s infinite linear alternate-reverse;
            }
            @keyframes glitch-anim-1 {
              0% { clip-path: inset(20% 0 80% 0); }
              20% { clip-path: inset(60% 0 10% 0); }
              40% { clip-path: inset(40% 0 50% 0); }
              60% { clip-path: inset(80% 0 5% 0); }
              80% { clip-path: inset(10% 0 70% 0); }
              100% { clip-path: inset(30% 0 20% 0); }
            }
            @keyframes glitch-anim-2 {
              0% { clip-path: inset(10% 0 60% 0); }
              20% { clip-path: inset(30% 0 20% 0); }
              40% { clip-path: inset(70% 0 10% 0); }
              60% { clip-path: inset(20% 0 50% 0); }
              80% { clip-path: inset(90% 0 5% 0); }
              100% { clip-path: inset(40% 0 30% 0); }
            }
            @keyframes flicker {
              0%, 18%, 22%, 25%, 53%, 57%, 100% {
                text-shadow: 0 0 4px #ef4444, 0 0 11px #ef4444, 0 0 19px #ef4444, 0 0 40px #ef4444, 0 0 80px #ef4444;
                opacity: 1;
              }
              20%, 24%, 55% { opacity: 0.6; text-shadow: none; }
            }
          `}</style>

          <div className="relative z-10 flex flex-col items-center text-center">
            <m.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mb-8 p-4 bg-red-100 dark:bg-red-500/10 rounded-2xl border border-red-200 dark:border-red-500/20 shadow-sm dark:shadow-none"
            >
              <Terminal className="w-8 h-8 text-red-600 dark:text-red-500 animate-pulse" />
            </m.div>

            <div className="glitch-wrapper mb-6">
              <h1 className="glitch-text text-8xl md:text-[12rem] font-black text-slate-900 dark:text-white tracking-tighter leading-[1.1]" data-text="404">
                404
              </h1>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-slate-800 dark:text-slate-200 mb-6 uppercase leading-[1.1]" style={{ animation: 'flicker 1.5s infinite alternate' }}>
              System <span className="text-red-600 dark:text-red-500 ">Offline</span>
            </h2>

            <p className="text-slate-600 dark:text-slate-400 max-w-lg mb-12 text-lg font-medium leading-relaxed">
              The digital asset you are trying to access does not exist in our neural matrix. It may have been relocated or deleted.
            </p>

            <Link to="/" className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-sm md:text-base uppercase tracking-[0.2em] text-white overflow-hidden rounded-full bg-slate-900 dark:bg-white/[0.05] border-2 border-slate-900 dark:border-white/10 hover:border-indigo-500/50 dark:hover:border-white/50 transition-all duration-500 shadow-xl hover:shadow-[0_0_40px_rgba(99,102,241,0.3)] hover:scale-105 active:scale-95 backdrop-blur-md">
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <span className="relative flex items-center gap-3 text-white">
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> Reboot System
              </span>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default NotFoundView;