import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, Sun, Moon } from 'lucide-react';
import { m, AnimatePresence, LazyMotion, domAnimation, useScroll, useSpring } from 'framer-motion';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { IMAGES } from '../images';

export const Navbar = ({ theme, toggleTheme }: { theme: string, toggleTheme: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(prev => {
        const next = window.scrollY > 20;
        return prev !== next ? next : prev;
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Work', path: '/work' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <>
      <LazyMotion features={domAnimation}>
      <m.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 dark:from-blue-500 dark:via-cyan-400 dark:to-teal-300 origin-left z-[100]"
        style={{ scaleX }}
      />
      <nav 
        className={`fixed top-0 left-0 right-0 z-[9999] transition-colors duration-300 py-4 ${
          isScrolled
            ? 'bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-lg border-b border-slate-200/80 dark:border-white/5'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group relative z-50">
            <img 
              src={theme === 'dark' ? IMAGES.GLOBAL.LOGO : IMAGES.GLOBAL.LOGO_LIGHT} 
              alt="Omino Tech - High-Performance Web Development and SEO Company in Malaysia" 
              className="h-12 md:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
              fetchPriority="high"
              decoding="sync"
            />
            <span className={`font-bold text-xl tracking-tight transition-colors ${
               isScrolled || isMobileMenuOpen ? 'text-slate-900 dark:text-white' : 'text-white'
            }`}>
              Omino Tech
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-1">
                {navLinks.map((link) => (
                <Link 
                    key={link.path} 
                    to={link.path}
                    className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    location.pathname === link.path
                        ? 'bg-white dark:bg-zinc-800 text-indigo-600 dark:text-white shadow-sm' 
                        : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                    }`}
                >
                    {link.name}
                </Link>
                ))}
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button 
                onClick={toggleTheme}
                className="p-2.5 rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-white/10 transition-colors"
                aria-label="Toggle Theme"
            >
                <m.div
                  key={theme}
                  initial={{ rotate: -90, scale: 0 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                >
                  {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                </m.div>
            </button>

            <WhatsAppButton 
              serviceName="General Inquiry"
              buttonText="Start Project"
              className="px-6 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-black text-sm font-bold rounded-full hover:bg-indigo-600 dark:hover:bg-indigo-400 hover:text-white transition-all shadow-lg hover:shadow-indigo-500/25 active:scale-95"
              showIcon={false}
            />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden relative z-50">
             <button 
                onClick={toggleTheme} 
                className="p-2 rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-200"
            >
                <m.div
                  key={theme}
                  initial={{ rotate: -90, scale: 0 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                >
                  {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                </m.div>
            </button>
            <button 
                className={`p-2 transition-colors ${
                  isScrolled || isMobileMenuOpen ? 'text-slate-900 dark:text-white' : 'text-white'
                }`}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
            >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <m.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white/95 dark:bg-[#0a0a0a]/95 backdrop-blur-xl pt-24 pb-8 px-6 md:hidden flex flex-col overflow-y-auto h-[100dvh]"
          >
            <div className="flex flex-col gap-0">
              {navLinks.map((link, i) => (
                <m.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                >
                    <Link 
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-2xl sm:text-3xl font-black tracking-tight flex items-center justify-between py-4 border-b border-slate-100 dark:border-white/5 group ${
                        location.pathname === link.path ? 'text-indigo-600 dark:text-white' : 'text-slate-600 dark:text-slate-300'
                    }`}
                    >
                    {link.name}
                    <ChevronRight className={`w-5 h-5 transition-transform group-hover:translate-x-2 ${
                        location.pathname === link.path ? 'text-indigo-600 dark:text-white' : 'text-slate-400 dark:text-slate-500'
                    }`} />
                    </Link>
                </m.div>
              ))}
            </div>
            
            <m.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-auto pt-8"
            >
                <WhatsAppButton 
                    serviceName="General Inquiry"
                    buttonText="Start Project"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full py-4 bg-indigo-600 text-white text-center font-bold text-lg rounded-xl block shadow-xl shadow-indigo-500/20 active:scale-95 transition-transform"
                    showIcon={false}
                />
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
      </LazyMotion>
    </>
  );
};