import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Component Imports
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Assistant from './components/Assistant';

// View Imports
const HomeView = lazy(() => import('./views/HomeView'));
const ServicesView = lazy(() => import('./views/ServicesView'));
const WorkView = lazy(() => import('./views/WorkView'));
const AboutView = lazy(() => import('./views/AboutView'));
const ContactView = lazy(() => import('./views/ContactView'));
const ProductsView = lazy(() => import('./views/ProductsView'));

// Service Page Imports
const WebArchitecture = lazy(() => import('./src/pages/services/WebArchitecture'));
const SeoDominance = lazy(() => import('./src/pages/services/SeoDominance'));
const AppEngineering = lazy(() => import('./src/pages/services/AppEngineering'));
const Automation = lazy(() => import('./src/pages/services/Automation'));
const Ecommerce = lazy(() => import('./src/pages/services/Ecommerce'));
const StrategicRedesign = lazy(() => import('./src/pages/services/StrategicRedesign'));
const AiAgents = lazy(() => import('./src/pages/services/AiAgents'));
const DigitalPresence = lazy(() => import('./src/pages/services/DigitalPresence'));

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
                <Route path="/services/strategic-redesign" element={<StrategicRedesign />} />
                <Route path="/services/ai-agents" element={<AiAgents />} />
                <Route path="/services/digital-presence" element={<DigitalPresence />} />
              </Routes>
            </Suspense>
          </main>

          <Footer />
          <Assistant />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
