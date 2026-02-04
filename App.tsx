import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Component Imports
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// View Imports
const HomeView = lazy(() => import('./views/HomeView'));
const ServicesView = lazy(() => import('./views/ServicesView'));
const WorkView = lazy(() => import('./views/WorkView'));
const AboutView = lazy(() => import('./views/AboutView'));
const ContactView = lazy(() => import('./views/ContactView'));
const ProductsView = lazy(() => import('./views/ProductsView'));

// Service Page Imports
const WebArchitecture = lazy(() => import('./views/WebArchitectureView'));
const SeoDominance = lazy(() => import('./views/SeoDominanceView'));
const AppEngineering = lazy(() => import('./views/AppEngineeringView'));
const Automation = lazy(() => import('./views/AutomationView'));
const Ecommerce = lazy(() => import('./views/EcommerceView'));
const WebManagement = lazy(() => import('./views/WebManagementView'));
const ServerSetup = lazy(() => import('./views/ServerSetupView'));

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans">
          <Navbar />
          
          <main>
            <Suspense fallback={<div className="min-h-screen bg-slate-950 flex items-center justify-center text-indigo-500 font-mono animate-pulse">INITIALIZING...</div>}>
              <Routes>
                {/* Main View Routes */}
                <Route path="/" element={<HomeView />} />
                <Route path="/services" element={<ServicesView />} />
                <Route path="/work" element={<WorkView />} />
                <Route path="/about" element={<AboutView />} />
                <Route path="/contact" element={<ContactView />} />
                <Route path="/products" element={<ProductsView />} />

                {/* Service Detail Page Routes */}
                <Route path="/services/web-architecture" element={<WebArchitecture />} />
                <Route path="/services/seo-dominance" element={<SeoDominance />} />
                <Route path="/services/app-engineering" element={<AppEngineering />} />
                <Route path="/services/automation" element={<Automation />} />
                <Route path="/services/ecommerce" element={<Ecommerce />} />
                <Route path="/services/web-management" element={<WebManagement />} />
                <Route path="/services/server-setup" element={<ServerSetup />} />
              </Routes>
            </Suspense>
          </main>

          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
