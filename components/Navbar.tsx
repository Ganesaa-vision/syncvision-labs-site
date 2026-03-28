import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, Sun, Moon, ChevronDown, Globe, Smartphone, Zap, Bot, ShoppingBag, ShieldCheck, Server } from 'lucide-react';
import { m, AnimatePresence, LazyMotion, domAnimation, useScroll, useSpring } from 'framer-motion';
import { WhatsAppButton } from './WhatsAppButton';
import { IMAGES } from '../images';

export const Navbar = ({ theme, toggleTheme }: { theme: string, toggleTheme: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  

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

  const serviceLinks = [
    { name: 'Web Architecture', path: '/services/web-architecture', desc: 'High-performance Next.js websites', icon: Globe },
    { name: 'App Engineering', path: '/services/app-engineering', desc: 'Native iOS & Android apps', icon: Smartphone },
    { name: 'SEO Dominance', path: '/services/seo-service', desc: 'Rank #1 on Google', icon: Zap },
    { name: 'AI Automation', path: '/services/automation', desc: 'Chatbots & Business Logic', icon: Bot },
    { name: 'E-Commerce', path: '/services/ecommerce', desc: 'Online Stores & Payments', icon: ShoppingBag },
    { name: 'Maintenance', path: '/services/web-management', desc: 'Security & Updates', icon: ShieldCheck },
    { name: 'Server Setup', path: '/services/server-setup', desc: 'Hosting & Domains', icon: Server },
  ];

  return (
    <>
      <LazyMotion features={domAnimation}>
      <m.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 origin-left z-[100]"
        style={{ scaleX }}
      />
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md border-b border-slate-200 dark:border-white/5 py-4 shadow-sm' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group relative z-50">
            <img
              src={theme === 'dark' ? IMAGES.GLOBAL.LOGO : IMAGES.GLOBAL.LOGO_LIGHT}
              alt="Omino Tech"
              className="h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-1 bg-slate-100/50 dark:bg-white/5 p-1 rounded-full border border-slate-200/50 dark:border-white/5 backdrop-blur-sm relative" onMouseLeave={() => setHoveredNav(null)}>
                {navLinks.map((link) => (
                <div 
                    key={link.path} 
                    className="relative"
                    onMouseEnter={() => setHoveredNav(link.name)}
                >
                    <Link 
                        to={link.path}
                        className={`relative z-10 px-5 py-2 rounded-full text-sm font-bold transition-colors duration-300 flex items-center gap-1 ${
                        location.pathname === link.path 
                            ? 'text-indigo-600 dark:text-white' 
                            : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                        }`}
                    >
                        {link.name}
                        {link.name === 'Services' && (
                            <ChevronDown size={14} className={`transition-transform duration-300 ${hoveredNav === 'Services' ? 'rotate-180' : ''}`} />
                        )}
                        
                        {/* Active Indicator */}
                        {location.pathname === link.path && (
                            <m.div 
                                layoutId="navbar-active"
                                className="absolute inset-0 bg-white dark:bg-white/10 rounded-full shadow-sm -z-10"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}

                        {/* Hover Indicator */}
                        {hoveredNav === link.name && location.pathname !== link.path && (
                            <m.div 
                                layoutId="navbar-hover"
                                className="absolute inset-0 bg-slate-200/50 dark:bg-white/5 rounded-full -z-10"
                                transition={{ type: "spring", bounce: 0, duration: 0.3 }}
                            />
                        )}
                    </Link>

                    {/* Services Dropdown */}
                    {link.name === 'Services' && (
                        <AnimatePresence>
                            {hoveredNav === 'Services' && (
                                <m.div
                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                    transition={{ duration: 0.2, ease: "easeOut" }}
                                    className="absolute top-full left-1/2 -translate-x-1/2 pt-6 w-[600px] transform-gpu will-change-transform"
                                >
                                    <div className="bg-white dark:bg-[#0a0a0a] border border-slate-200 dark:border-white/10 rounded-3xl p-6 shadow-2xl shadow-indigo-500/10 grid grid-cols-2 gap-4 relative overflow-hidden">
                                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500"></div>
                                        
                                        {serviceLinks.map((service) => (
                                            <Link 
                                                key={service.path} 
                                                to={service.path}
                                                className="group p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-white/5 transition-all flex items-start gap-4"
                                            >
                                                <div className="mt-1 w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-900/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:scale-110 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-500/30 transition-all">
                                                    <service.icon size={18} />
                                                </div>
                                                <div>
                                                    <div className="font-bold text-slate-900 dark:text-white text-sm group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                                        {service.name}
                                                    </div>
                                                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 font-medium">
                                                        {service.desc}
                                                    </div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </m.div>
                            )}
                        </AnimatePresence>
                    )}
                </div>
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
                className="p-2 text-slate-900 dark:text-white"
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
            className="fixed inset-0 z-40 bg-white/95 dark:bg-[#0a0a0a]/95 pt-32 px-6 md:hidden flex flex-col transform-gpu will-change-transform"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <m.div
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
                </m.div>
              ))}
            </div>
            
            <m.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-auto mb-12"
            >
                <WhatsAppButton 
                    serviceName="General Inquiry"
                    buttonText="Start Project"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full py-6 bg-indigo-600 text-white text-center font-bold text-xl rounded-2xl block shadow-xl shadow-indigo-500/20 active:scale-95 transition-transform"
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