import React, { Suspense, lazy, useState, useEffect, useLayoutEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence, LazyMotion, domAnimation } from 'framer-motion';
import { Navbar } from './components/Navbar'; // Keep Navbar static so it renders immediately
import ScrollToTopButton from './views/ScrollToTopButton'; // Keep static
// import CustomCursor from './components/CustomCursor';

// Lazily load all the view components
const Home = lazy(() => import('./views/HomeView'));
const ServicesView = lazy(() => import('./views/ServicesView'));
const Work = lazy(() => import('./views/WorkView'));
const AboutView = lazy(() => import('./views/AboutView'));
const ContactView = lazy(() => import('./views/ContactView'));
const BlogView = lazy(() => import('./views/BlogView'));
const BlogPost = lazy(() => import('./views/BlogPostView'));
const WebArchitectureView = lazy(() => import('./views/WebArchitectureView'));
const AppEngineeringView = lazy(() => import('./views/AppEngineeringView'));
const SeoServiceView = lazy(() => import('./views/SeoServiceView'));
const AutomationView = lazy(() => import('./views/AutomationView'));
const EcommerceView = lazy(() => import('./views/EcommerceView'));
const WebManagementView = lazy(() => import('./views/WebManagementView'));
const ServerSetupView = lazy(() => import('./views/ServerSetupView'));
const PrivacyView = lazy(() => import('./views/PrivacyView'));
const TermsView = lazy(() => import('./views/TermsView'));

const PageLoader = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-[#030303] relative overflow-hidden transition-colors duration-300">
    <style>{`
      @keyframes slide-right {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(200%); }
      }
    `}</style>
    <div className="relative z-10 flex flex-col items-center gap-8">
      <div className="relative w-16 h-16 flex items-center justify-center">
        <div className="absolute inset-0 border-t-[3px] border-indigo-600/80 dark:border-indigo-500/80 rounded-full animate-spin duration-1000"></div>
        <div className="absolute inset-2 border-r-[3px] border-cyan-500/80 dark:border-cyan-400/80 rounded-full animate-spin duration-700" style={{ animationDirection: 'reverse' }}></div>
        <div className="w-2 h-2 bg-indigo-600 dark:bg-white rounded-full animate-pulse shadow-[0_0_15px_rgba(79,70,229,0.5)] dark:shadow-[0_0_15px_rgba(255,255,255,1)]"></div>
      </div>
      <div className="flex flex-col items-center gap-4">
        <span className="font-mono text-indigo-600 dark:text-indigo-400 text-[10px] font-bold uppercase tracking-[0.3em] animate-pulse">
          Compiling Digital Assets
        </span>
        <div className="h-[1px] w-48 bg-slate-200 dark:bg-white/10 overflow-hidden relative rounded-full">
          <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-indigo-600 dark:via-indigo-500 to-transparent" style={{ animation: 'slide-right 1.5s infinite ease-in-out' }}></div>
        </div>
      </div>
    </div>
  </div>
);

export default function App() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const location = useLocation();

  // 1. Lift theme state to the very top of the app
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      return localStorage.getItem('theme') || 'dark';
    }
    return 'dark';
  });

  // 2. useLayoutEffect runs synchronously before the browser paints,
  // stopping the PageLoader from flashing the wrong theme on initial load.
  useLayoutEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));

  useEffect(() => {
    const checkTouchDevice = () => 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(checkTouchDevice());
  }, []);

  return (
    <HelmetProvider>
      <LazyMotion features={domAnimation}>
      {/* Navbar sits outside Suspense so it never disappears during navigation */}
      <Navbar theme={theme} toggleTheme={toggleTheme} /> 
      {/* Custom cursor disabled temporarily to prevent extreme mouse lag */}
      {/* {!isTouchDevice && <CustomCursor />} */}
      
      {/* Main Content Wrapper with Background */}
      <div className="min-h-screen bg-slate-50 dark:bg-[#030303] transition-colors duration-300">
        <Suspense fallback={<PageLoader />}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<ServicesView />} />
              <Route path="/services/web-architecture" element={<WebArchitectureView />} />
              <Route path="/services/app-engineering" element={<AppEngineeringView />} />
              <Route path="/services/seo-service" element={<SeoServiceView />} />
              <Route path="/services/automation" element={<AutomationView />} />
              <Route path="/services/ecommerce" element={<EcommerceView />} />
              <Route path="/services/web-management" element={<WebManagementView />} />
              <Route path="/services/server-setup" element={<ServerSetupView />} />
              <Route path="/work" element={<Work />} />
              <Route path="/about" element={<AboutView />} />
              <Route path="/contact" element={<ContactView />} />
              <Route path="/blog" element={<BlogView />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/privacy" element={<PrivacyView />} />
              <Route path="/terms" element={<TermsView />} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </div>
      
      <ScrollToTopButton />
      </LazyMotion>
    </HelmetProvider>
  );
}