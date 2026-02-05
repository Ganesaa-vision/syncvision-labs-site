import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const currentView = location.pathname;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const navItems: { label: string; path: string }[] = [
    { label: 'System', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Work', path: '/work' },
    { label: 'Architects', path: '/about' },
    { label: 'R&D Labs', path: '/products' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled || isOpen ? 'py-4' : 'py-8'
      } ${scrolled && !isOpen ? 'glass-navbar border-b border-white/5 bg-slate-950/90 backdrop-blur-md' : 'bg-transparent'}`}
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-4 group z-[120] relative">
          <div className="w-10 h-10 bg-interstellar rounded-xl flex items-center justify-center font-mono font-black text-slate-100 text-lg transform group-hover:scale-110 transition-all shadow-lg">V</div>
          <span className="font-mono font-bold tracking-tighter text-slate-100 uppercase text-xl">
            Sync<span className="text-interstellar">Vision</span>
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`font-mono text-xs uppercase tracking-[0.3em] font-black transition-all relative py-2 ${
                currentView === item.path ? 'text-interstellar' : 'text-slate-400 hover:text-slate-100'
              }`}
            >
              {item.label}
              {currentView === item.path && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-interstellar animate-pulse"></span>
              )}
            </Link>
          ))}
        </div>

        <Link 
          to="/contact"
          className="hidden lg:block px-8 py-3 rounded-xl bg-interstellar text-slate-100 font-mono text-xs font-black uppercase tracking-widest hover:opacity-90 transition-all shadow-xl active:scale-95"
        >
          Initialize
        </Link>

        {/* Mobile Menu Toggle - Redesigned */}
        <button 
          className="lg:hidden z-[120] relative w-12 h-12 flex items-center justify-center rounded-xl border border-white/10 bg-slate-900/50 text-slate-100 hover:bg-interstellar/20 hover:border-interstellar/50 transition-all active:scale-95"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Mobile Menu Overlay - Enhanced */}
        <div className={`fixed inset-0 h-[100dvh] bg-[#0a0a0a] z-[110] flex flex-col items-center justify-start pt-28 pb-8 overflow-y-auto gap-8 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] lg:hidden ${isOpen ? 'opacity-100 translate-y-0 pointer-events-auto visible' : 'opacity-0 -translate-y-4 pointer-events-none invisible'}`}>
          
          {/* Background decoration */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-interstellar/10 to-transparent pointer-events-none"></div>

          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`relative z-10 font-mono text-2xl uppercase tracking-[0.2em] font-black transition-all py-2 ${
                currentView === item.path ? 'text-white' : 'text-slate-500 hover:text-white'
              }`}
            >
              {item.label}
              {currentView === item.path && (
                <span className="absolute -left-6 top-1/2 -translate-y-1/2 w-2 h-2 bg-interstellar rounded-full shadow-[0_0_10px_currentColor] text-interstellar"></span>
              )}
            </Link>
          ))}
          
          <div className="w-12 h-px bg-white/10 my-4"></div>

          <Link 
            to="/contact" 
            onClick={() => setIsOpen(false)}
            className="relative z-10 px-10 py-4 rounded-xl bg-white text-black font-mono text-sm font-black uppercase tracking-widest hover:bg-interstellar hover:text-white transition-all shadow-xl active:scale-95"
          >
            Initialize
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;