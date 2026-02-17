import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Navbar } from './views/Navbar';
import Home from './views/HomeView';
import ServicesView from './views/ServicesView';
import Work from './views/WorkView';
import AboutView from './views/AboutView';
import ContactView from './views/ContactView';
import BlogView from './views/BlogView';
import BlogPostView from './views/BlogPostView';
import WebArchitectureView from './views/WebArchitectureView';
import AppEngineeringView from './views/AppEngineeringView';
import SeoServiceView from './views/SeoServiceView';
import AutomationView from './views/AutomationView';
import EcommerceView from './views/EcommerceView';
import WebManagementView from './views/WebManagementView';
import ServerSetupView from './views/ServerSetupView';
import PrivacyView from './views/PrivacyView';
import TermsView from './views/TermsView';
import ScrollToTopButton from './views/ScrollToTopButton';

function App() {
  return (
    <HelmetProvider>
      <Navbar />
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
        <Route path="/blog/:slug" element={<BlogPostView />} />
        <Route path="/privacy" element={<PrivacyView />} />
        <Route path="/terms" element={<TermsView />} />
      </Routes>
      <ScrollToTopButton />
    </HelmetProvider>
  );
}

export default App;