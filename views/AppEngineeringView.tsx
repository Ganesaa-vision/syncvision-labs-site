import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation } from 'react-router-dom';
import { Smartphone, Cpu, WifiOff, Layers, ArrowRight } from 'lucide-react';
import PricingSection from '../components/PricingSection';

const AppEngineeringView: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-slate-200 font-sans">
      <Helmet>
        <title>Mobile App Development | iOS & Android Flutter Developer Malaysia</title>
        <meta name="description" content="We build offline-first mobile apps for iOS and Android using Flutter. Perfect for internal company systems, loyalty apps, and customer portals." />
        <meta name="keywords" content="Mobile App Developer Malaysia, Flutter Developer KL, iOS Android App, Internal System App, Offline First App" />
      </Helmet>

      <div className="pt-24 md:pt-32 pb-12 md:pb-20 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
          <div className="lg:w-1/2">
            <span className="font-mono text-blue-400 text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Mobile Engineering</span>
            <h1 className="text-4xl md:text-7xl font-bold tracking-tighter text-white mb-8">
              NATIVE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">PERFORMANCE.</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed mb-8">
              We build "Offline-First" mobile applications that work even when your internet doesn't. Using <strong>Flutter</strong>, we deploy to both the Apple App Store and Google Play Store from a single codebase, saving you 40% in development costs.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-slate-200 transition-all">
              Build My App <ArrowRight size={18} />
            </Link>
          </div>
          <div className="lg:w-1/2">
             <div className="relative aspect-square bg-gradient-to-br from-blue-900/20 to-slate-900 rounded-[3rem] border border-blue-500/20 flex items-center justify-center">
                <Smartphone size={200} className="text-blue-500/50" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          <div className="p-8 bg-slate-900/50 border border-slate-800 rounded-2xl hover:bg-slate-900 transition-colors">
            <Layers className="w-10 h-10 text-blue-400 mb-6" />
            <h3 className="text-xl font-bold text-white mb-3">Cross-Platform (Flutter)</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              One code base runs natively on both iOS and Android. This means faster updates, consistent UI, and half the maintenance cost of traditional native development.
            </p>
          </div>
          <div className="p-8 bg-slate-900/50 border border-slate-800 rounded-2xl hover:bg-slate-900 transition-colors">
            <WifiOff className="w-10 h-10 text-cyan-400 mb-6" />
            <h3 className="text-xl font-bold text-white mb-3">Offline-First Architecture</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Your staff can continue working in warehouses or remote areas without internet. Data syncs automatically to the cloud once connection is restored.
            </p>
          </div>
          <div className="p-8 bg-slate-900/50 border border-slate-800 rounded-2xl hover:bg-slate-900 transition-colors">
            <Cpu className="w-10 h-10 text-purple-400 mb-6" />
            <h3 className="text-xl font-bold text-white mb-3">Hardware Integration</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              We integrate deeply with device hardware: Camera (QR Scanning), GPS (Location Tracking), Bluetooth (IoT), and Biometrics (FaceID).
            </p>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Perfect For Internal Operations</h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-8">
            While we build consumer apps, our specialty is high-logic internal tools. Inventory management, staff tracking, and field sales portals that streamline your business operations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['Inventory Systems', 'Field Sales Apps', 'Customer Loyalty', 'Booking Portals'].map(tag => (
               <span key={tag} className="px-4 py-2 bg-black border border-slate-700 rounded-full text-slate-300 text-xs font-mono uppercase tracking-wider">{tag}</span>
            ))}
          </div>
        </div>

        {/* PRICING */}
        <PricingSection 
          title="App Development Investment"
          description="Native performance at hybrid cost. iOS & Android included."
          plans={[
            {
              name: "MVP Prototype",
              price: "RM 12,000",
              description: "Validate your idea fast. Core features only.",
              features: ["iOS & Android (Flutter)", "Core Functionality", "Basic UI/UX", "Firebase Backend", "4 Weeks Delivery"],
              buttonText: "Start MVP"
            },
            {
              name: "Business App",
              price: "RM 25,000",
              description: "Full-featured app for scaling businesses.",
              features: ["Custom UI Design", "Push Notifications", "Admin Panel", "API Integrations", "App Store Submission"],
              isPopular: true,
              buttonText: "Build App"
            },
            {
              name: "Enterprise System",
              price: "RM 45,000+",
              description: "Mission-critical internal tools or large scale platforms.",
              features: ["Offline-First Sync", "Legacy System Integration", "Advanced Security", "SLA Support", "Dedicated Team"],
              buttonText: "Scale Enterprise"
            }
          ]}
        />

      </div>
    </div>
  );
};

export default AppEngineeringView;