import React, { useLayoutEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation } from 'react-router-dom';
import { Smartphone, Cpu, WifiOff, Layers, ArrowRight, Database, Cloud, ChevronDown, ChevronUp } from 'lucide-react';
import PricingSection from '../components/PricingSection';
import Footer from '../components/Footer';
import { m, LazyMotion, domAnimation, AnimatePresence } from 'framer-motion';
import { WhatsAppButton } from '../components/WhatsAppButton';

const AppEngineeringView: React.FC = () => {
  const { pathname } = useLocation();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do you build apps for both iOS and Android?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We use Flutter to engineer a single, high-performance codebase that compiles natively to both iOS and Android, reducing development time and cost by 40%."
        }
      },
      {
        "@type": "Question",
        "name": "How do you handle offline data synchronization?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We implement local SQLite databases on the device. When connectivity is restored, our custom sync logic resolves conflicts and pushes data to the cloud (Firebase/Supabase) automatically."
        }
      },
      {
        "@type": "Question",
        "name": "Is the backend secure?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We use Row Level Security (RLS) policies in Supabase and Firebase to ensure users can only access their own data, compliant with enterprise security standards."
        }
      }
    ]
  };

  return (
    <LazyMotion features={domAnimation}>
    <div className="min-h-screen bg-slate-50 dark:bg-[#0a0a0a] text-slate-900 dark:text-slate-200 font-sans transition-colors duration-300">
      <Helmet>
        <title>Mobile App Engineering | Flutter & Supabase Experts Malaysia - Omino Tech</title>
        <meta name="description" content="Enterprise Mobile App Development in Malaysia. We build offline-first iOS & Android apps using Flutter, Firebase, and Supabase for scalable performance." />
        <meta name="keywords" content="Flutter Developer Malaysia, Mobile App Development Selangor, Supabase Backend, Offline First App, Enterprise Mobile Solutions" />
        <meta property="og:image" content="https://www.ominotech.com.my/logo.png" />
        <link rel="icon" href="https://www.ominotech.com.my/favicon.ico" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </Helmet>

      <div className="pt-24 md:pt-32 pb-12 md:pb-20 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
          <div className="lg:w-1/2">
            <span className="font-mono text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Enterprise Mobile Engineering</span>
            <h1 className="text-4xl md:text-7xl font-bold tracking-tighter text-slate-900 dark:text-white mb-8">
              NATIVE SYSTEMS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">BUILT IN MALAYSIA.</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
              We build "Offline-First" mobile applications that work even when your internet doesn't. Using <strong>Flutter</strong>, we deploy to both the Apple App Store and Google Play Store from a single codebase, saving you 40% in development costs.
            </p>
            <WhatsAppButton 
              serviceName="App Engineering"
              buttonText="Build My App"
              className="inline-flex items-center gap-3 bg-indigo-600 dark:bg-white text-white dark:text-black px-8 py-4 rounded-full font-bold hover:bg-indigo-500 dark:hover:bg-slate-200 transition-all"
              showIcon={true}
            />
          </div>
          <div className="lg:w-1/2">
             <div className="relative aspect-square bg-gradient-to-br from-blue-50 to-slate-100 dark:from-blue-900/20 dark:to-slate-900 rounded-[3rem] border border-blue-500/20 flex items-center justify-center">
                <Smartphone size={200} className="text-blue-500/50" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          <div className="p-8 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl hover:border-blue-500/30 transition-colors shadow-sm dark:shadow-none">
            <Layers className="w-10 h-10 text-blue-400 mb-6" />
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Cross-Platform (Flutter)</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              One code base runs natively on both iOS and Android. This means faster updates, consistent UI, and half the maintenance cost of traditional native development.
            </p>
          </div>
          <div className="p-8 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl hover:border-cyan-500/30 transition-colors shadow-sm dark:shadow-none">
            <WifiOff className="w-10 h-10 text-cyan-400 mb-6" />
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Offline-First Architecture</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Your staff can continue working in warehouses or remote areas without internet. Data syncs automatically to the cloud once connection is restored.
            </p>
          </div>
          <div className="p-8 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl hover:border-purple-500/30 transition-colors shadow-sm dark:shadow-none">
            <Cpu className="w-10 h-10 text-purple-400 mb-6" />
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Hardware Integration</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              We integrate deeply with device hardware: Camera (QR Scanning), GPS (Location Tracking), Bluetooth (IoT), and Biometrics (FaceID).
            </p>
          </div>
        </div>

        {/* === SEMANTIC DEPTH: BACKEND ARCHITECTURE === */}
        <div className="mb-32">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Backend Architecture</h2>
                <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                    A pretty UI is useless without a robust backend. Here is our stack.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="p-8 bg-slate-100 dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                        <Database className="text-blue-500" /> Real-Time Sync (Firebase/Supabase)
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                        We utilize WebSocket connections via Supabase or Firebase to ensure data is synchronized across all devices in milliseconds. If a field agent updates an order in Selangor, the HQ in KL sees it instantly.
                    </p>
                </div>
                <div className="p-8 bg-slate-100 dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                        <Cloud className="text-cyan-500" /> Scalable Cloud Functions
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                        We offload heavy logic to serverless Edge Functions. This keeps the mobile app lightweight and battery-efficient while allowing us to process complex data (like image resizing or report generation) in the cloud.
                    </p>
                </div>
            </div>
        </div>

        <div className="bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Perfect For Internal Operations</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8">
            While we build consumer apps, our specialty is high-logic internal tools. Inventory management, staff tracking, and field sales portals that streamline your business operations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['Inventory Systems', 'Field Sales Apps', 'Customer Loyalty', 'Booking Portals'].map(tag => (
               <span key={tag} className="px-4 py-2 bg-white dark:bg-black border border-slate-300 dark:border-slate-700 rounded-full text-slate-600 dark:text-slate-300 text-xs font-mono uppercase tracking-wider">{tag}</span>
            ))}
          </div>
        </div>

        {/* PRICING */}
        <PricingSection 
          serviceName="App Engineering"
          title="App Development Investment"
          description="Native performance at hybrid cost. iOS & Android included."
          plans={[
            {
              name: "MVP Prototype",
              price: "RM 12,000",
              description: "Validate your idea fast. Core features only.",
              features: ["iOS & Android (Flutter)", "Core Functionality", "Basic UI/UX", "Firebase Backend", "4 Weeks Delivery"],
              buttonText: "Start MVP",
              customButton: (
                <WhatsAppButton 
                  serviceName="App Development"
                  packageLabel="MVP Prototype"
                  buttonText="Start MVP"
                  className="w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700"
                />
              )
            },
            {
              name: "Business App",
              price: "RM 25,000",
              description: "Full-featured app for scaling businesses.",
              features: ["Custom UI Design", "Push Notifications", "Admin Panel", "API Integrations", "App Store Submission"],
              isPopular: true,
              buttonText: "Build App",
              customButton: (
                <WhatsAppButton 
                  serviceName="App Development"
                  packageLabel="Business App"
                  buttonText="Build App"
                  className="w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-500/30"
                />
              )
            },
            {
              name: "Enterprise System",
              price: "RM 45,000+",
              description: "Mission-critical internal tools or large scale platforms.",
              features: ["Offline-First Sync", "Legacy System Integration", "Advanced Security", "SLA Support", "Dedicated Team"],
              buttonText: "Scale Enterprise",
              customButton: (
                <WhatsAppButton 
                  serviceName="App Development"
                  packageLabel="Enterprise System"
                  buttonText="Scale Enterprise"
                  className="w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700"
                />
              )
            }
          ]}
        />

        {/* === AEO FAQ SECTION === */}
        <div className="mt-32 mb-20 max-w-4xl mx-auto">
           <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">Engineering FAQ</h2>
           <div className="space-y-4">
              {faqSchema.mainEntity.map((item, i) => (
                 <div 
                    key={i} 
                    className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openFaq === i ? 'border-blue-500 bg-white dark:bg-slate-900 shadow-lg' : 'border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/30'}`}
                 >
                    <button 
                       onClick={() => setOpenFaq(openFaq === i ? null : i)}
                       className="w-full flex items-center justify-between p-6 text-left"
                    >
                       <h3 className={`font-bold text-lg ${openFaq === i ? 'text-blue-600 dark:text-blue-400' : 'text-slate-900 dark:text-white'}`}>{item.name}</h3>
                       {openFaq === i ? <ChevronUp /> : <ChevronDown />}
                    </button>
                    <AnimatePresence>
                        {openFaq === i && (
                           <m.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }}>
                              <div className="p-6 pt-0 text-slate-600 dark:text-slate-400 leading-relaxed border-t border-dashed border-slate-200 dark:border-slate-800 pt-4">
                                 {item.acceptedAnswer.text}
                              </div>
                           </m.div>
                        )}
                    </AnimatePresence>
                 </div>
              ))}
           </div>
        </div>
      </div>
      <Footer />
    </div>
    </LazyMotion>
  );
};

export default AppEngineeringView;