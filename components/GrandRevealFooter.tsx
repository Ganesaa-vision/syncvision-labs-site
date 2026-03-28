import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const GrandRevealFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full h-[750px] md:h-[500px]">
        <div className="fixed bottom-0 left-0 w-full h-[750px] md:h-[500px] flex flex-col justify-between pt-24 pb-8 px-6 md:px-12 bg-[#020202] text-white z-0">
            
            <div className="max-w-7xl mx-auto w-full flex-grow flex flex-col justify-center mb-12 text-center md:text-left">
                <h2 className="text-6xl md:text-8xl lg:text-[11rem] font-black tracking-tighter uppercase mb-8 leading-[0.8] text-white">
                    Ready to <br className="hidden md:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Build?</span>
                </h2>
                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
                    <a href="https://wa.me/60126019733" target="_blank" rel="noopener noreferrer" className="group px-8 py-5 bg-white text-black rounded-full font-bold uppercase tracking-widest text-sm hover:bg-blue-50 transition-colors flex items-center gap-3 w-full md:w-auto justify-center">
                        Start Project <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a href="mailto:hello@ominotech.com" className="text-neutral-400 font-mono text-sm uppercase tracking-widest hover:text-white transition-colors border-b border-transparent hover:border-white pb-1">
                        hello@ominotech.com
                    </a>
                </div>
            </div>

            <div className="max-w-7xl mx-auto w-full border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-8 text-xs font-mono uppercase tracking-widest text-neutral-500">
                <nav aria-label="Footer Navigation" className="flex items-center gap-6 flex-wrap justify-center">
                    <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
                    <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
                    <Link to="/about" className="hover:text-white transition-colors">Manifesto</Link>
                    <Link to="/services" className="hover:text-white transition-colors">Ecosystem</Link>
                </nav>
                <p className="text-center md:text-right">&copy; {currentYear} Omino Tech. All rights reserved.</p>
            </div>
        </div>
    </footer>
  );
};