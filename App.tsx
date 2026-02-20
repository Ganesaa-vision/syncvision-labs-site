import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Navbar } from './views/Navbar'; // Keep Navbar static so it renders immediately
import ScrollToTopButton from './views/ScrollToTopButton'; // Keep static

// Lazily load all the view components
const Home = lazy(() => import('./views/HomeView'));
const ServicesView = lazy(() => import('./views/ServicesView'));
const Work = lazy(() => import('./views/WorkView'));
const AboutView = lazy(() => import('./views/AboutView'));
const ContactView = lazy(() => import('./views/ContactView'));
const BlogView = lazy(() => import('./views/BlogView'));
const BlogPost = lazy(() => import('./src/pages/BlogPost'));
const WebArchitectureView = lazy(() => import('./views/WebArchitectureView'));
const AppEngineeringView = lazy(() => import('./views/AppEngineeringView'));
const SeoServiceView = lazy(() => import('./views/SeoServiceView'));
const AutomationView = lazy(() => import('./views/AutomationView'));
const EcommerceView = lazy(() => import('./views/EcommerceView'));
const WebManagementView = lazy(() => import('./views/WebManagementView'));
const ServerSetupView = lazy(() => import('./views/ServerSetupView'));
const PrivacyView = lazy(() => import('./views/PrivacyView'));
const TermsView = lazy(() => import('./views/TermsView'));

export default function App() {
  return (
    <HelmetProvider>
      {/* Navbar sits outside Suspense so it never disappears during navigation */}
      <Navbar /> 
      
      {/* Suspense catches the loading state while the next chunk is downloaded */}
      <Suspense fallback={
        <div className="text-white text-center p-8 min-h-screen flex items-center justify-center">
          Loading...
        </div>
      }>
        <Routes>
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
      </Suspense>
      
      <ScrollToTopButton />
    </HelmetProvider>
  );
}