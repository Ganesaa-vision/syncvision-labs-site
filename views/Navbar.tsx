import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  // Default to dark mode
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      return localStorage.getItem('theme') || 'dark';
    }
    return 'dark';
  });

  // Theme toggle logic
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
    root.classList.add('transition-colors', 'duration-500');
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Work', path: '/work' },
    { name: 'About', path: '/about' },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-slate-200 dark:border-white/5 py-4 shadow-sm' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group relative z-50">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold font-mono text-xl shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-300">
              S
            </div>
            <span className={`font-bold text-xl tracking-tight transition-colors ${
               isScrolled || isMobileMenuOpen ? 'text-slate-900 dark:text-white' : 'text-slate-900 dark:text-white'
            }`}>
              SyncVision
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-1 bg-slate-100/50 dark:bg-white/5 p-1 rounded-full border border-slate-200/50 dark:border-white/5 backdrop-blur-sm">
                {navLinks.map((link) => (
                <Link 
                    key={link.path} 
                    to={link.path}
                    className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    location.pathname === link.path 
                        ? 'bg-white dark:bg-white/10 text-indigo-600 dark:text-white shadow-sm' 
                        : 'text-slate-600 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white'
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
                <motion.div
                  key={theme}
                  initial={{ rotate: -90, scale: 0 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                >
                  {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                </motion.div>
            </button>

            <Link 
              to="/contact"
              className="px-6 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-black text-sm font-bold rounded-full hover:bg-indigo-600 dark:hover:bg-indigo-400 hover:text-white transition-all shadow-lg hover:shadow-indigo-500/25 active:scale-95"
            >
              Start Project
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden relative z-50">
             <button 
                onClick={toggleTheme}
                className="p-2 rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-200"
            >
                <motion.div
                  key={theme}
                  initial={{ rotate: -90, scale: 0 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                >
                  {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                </motion.div>
            </button>
            <button 
                className="p-2 text-slate-900 dark:text-white"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white/95 dark:bg-[#0a0a0a]/95 backdrop-blur-xl pt-32 px-6 md:hidden flex flex-col"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                >
                    <Link 
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-4xl font-black tracking-tighter flex items-center justify-between py-6 border-b border-slate-100 dark:border-white/5 group ${
                        location.pathname === link.path ? 'text-indigo-600 dark:text-white' : 'text-slate-500 dark:text-slate-200'
                    }`}
                    >
                    {link.name}
                    <ChevronRight className={`w-6 h-6 transition-transform group-hover:translate-x-2 ${
                        location.pathname === link.path ? 'text-indigo-600 dark:text-white' : 'text-slate-500 dark:text-slate-200'
                    }`} />
                    </Link>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-auto mb-12"
            >
                <Link 
                    to="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full py-6 bg-indigo-600 text-white text-center font-bold text-xl rounded-2xl block shadow-xl shadow-indigo-500/20 active:scale-95 transition-transform"
                >
                    Start Project
                </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};