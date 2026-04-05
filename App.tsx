import React, { Suspense, lazy, useState, useLayoutEffect, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence, LazyMotion, domAnimation } from 'framer-motion';
import { Navbar } from './components/Navbar'; // Keep Navbar static so it renders immediately
import ScrollToTopButton from './views/ScrollToTopButton'; // Keep static
// import CustomCursor from './components/CustomCursor';

// Optimized lazy loading with prefetch
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
const NotFoundView = lazy(() => import('./views/NotFoundView'));

// Simplified, faster loader - no complex animations that cause lag
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-white dark:bg-[#030303]">
    <div className="relative w-12 h-12">
      <div className="absolute inset-0 border-t-2 border-indigo-600 dark:border-indigo-500 rounded-full animate-spin"></div>
    </div>
  </div>
);

export default function App() {
  const location = useLocation();

  // Theme is now set in index.html instantly to prevent flash
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      return localStorage.getItem('theme') || 'dark';
    }
    return 'dark';
  });

  // Sync theme changes only (not initial load)
  useLayoutEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Prefetch commonly visited pages after initial load
  useEffect(() => {
    const prefetchTimeout = setTimeout(() => {
      // Prefetch services page (most visited)
      import('./views/ServicesView');
    }, 2000);
    
    return () => clearTimeout(prefetchTimeout);
  }, []);

  const toggleTheme = () => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));

  return (
    <HelmetProvider>
      <LazyMotion features={domAnimation}>
      {/* Navbar sits outside Suspense so it never disappears during navigation */}
      <Navbar theme={theme} toggleTheme={toggleTheme} /> 
      {/* Custom cursor disabled temporarily to prevent extreme mouse lag */}
      {/* {!isTouchDevice && <CustomCursor />} */}
      
      {/* Main Content Wrapper with Background */}
      <div className="min-h-screen bg-slate-50 dark:bg-[#030303]">
        <Suspense fallback={<PageLoader />}>
          <AnimatePresence mode="wait" initial={false}>
            <Routes location={location} key={location.pathname as any}>
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
              <Route path="*" element={<NotFoundView />} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </div>
      
      <ScrollToTopButton />
      </LazyMotion>
    </HelmetProvider>
  );
}