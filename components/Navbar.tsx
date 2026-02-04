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
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems: { label: string; path: string }[] = [
    { label: 'System', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Work', path: '/work' },
    { label: 'Architects', path: '/about' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || isOpen ? 'glass-navbar border-b border-white/5 py-4 bg-slate-950/90 backdrop-blur-md' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-4 group z-50 relative">
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

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-slate-100 z-50 relative p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-slate-950/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] lg:hidden ${isOpen ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto visible' : 'opacity-0 -translate-y-4 scale-95 pointer-events-none invisible'}`}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`font-mono text-xl uppercase tracking-[0.3em] font-black transition-all ${
                currentView === item.path ? 'text-interstellar' : 'text-slate-400 hover:text-slate-100'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link to="/contact" className="mt-8 px-10 py-4 rounded-xl bg-interstellar text-slate-100 font-mono text-sm font-black uppercase tracking-widest hover:opacity-90 transition-all shadow-xl active:scale-95">
            Initialize
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;