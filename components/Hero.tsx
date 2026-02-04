/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

const Hero: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      try { window.history.pushState(null, '', `#${targetId}`); } catch (err) {}
    }
  };

  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-black pt-20">
      
      {/* Background with Grid and Glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-white"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/20 blur-[150px] rounded-full"></div>
        <div className="absolute top-1/4 left-1/3 w-[300px] h-[300px] bg-blue-600/10 blur-[100px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center animate-fade-in-up">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/5 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-8">
          <span className="w-1 h-1 bg-indigo-400 rounded-full animate-pulse"></span>
          Now Available: Syncore Enterprise 2025
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-8xl lg:text-9xl font-black text-white leading-[0.9] tracking-tighter mb-8">
          STRATEGIC <br/>
          <span className="text-indigo-500">DIGITAL</span> <br/>
          INFRASTRUCTURE.
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-200 font-normal leading-relaxed mb-12">
          Syncore builds high-performance, scalable systems that power the next generation of digital giants. We don't just write code—we engineer foundations.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#products" 
            onClick={(e) => handleNavClick(e, 'products')}
            className="w-full sm:w-auto px-10 py-4 bg-indigo-600 text-white rounded-lg text-sm font-bold uppercase tracking-widest hover:bg-indigo-500 transition-all shadow-[0_0_20px_rgba(79,70,229,0.4)]"
          >
            Explore Services
          </a>
          <a 
            href="#about" 
            onClick={(e) => handleNavClick(e, 'about')}
            className="w-full sm:w-auto px-10 py-4 bg-white/5 border border-white/10 text-white rounded-lg text-sm font-bold uppercase tracking-widest hover:bg-white/10 transition-all"
          >
            Learn Philosophy
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400 animate-bounce">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;