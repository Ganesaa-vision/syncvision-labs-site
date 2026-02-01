import React from 'react';
import ServiceLayout from '../../layouts/ServiceLayout';
import { Smartphone, Database, WifiOff, Globe, Cpu, CheckCircle } from 'lucide-react';

const AppEngineering = () => {
  const pageData = {
    seoTitle: "App Engineering | Complex Logic & Offline-First | SyncVision Labs",
    seoDescription: "We build what no-code tools can't. Custom algorithms, offline database sync, and complex logic using Flutter & Supabase. iOS and Android native.",
    
    title: "APP SYSTEM ENGINEERING",
    subtitle: "We don't build 'web wrappers.' We engineer high-performance, offline-first mobile systems using Flutter and Supabase that work perfectly even without internet.",
    
    features: [
      "Offline-First Architecture: Data persists when connection is lost.",
      "Universal Codebase: 1 Code = iOS, Android, Web & Desktop.",
      "Realtime Synchronization: Instant data updates across all devices.",
      "Hardware Access: Deep integration with Camera, GPS, and Bluetooth."
    ],
    
    caseStudy: {
      client: "LifeSync (Internal R&D)",
      result: "Flutter & Supabase System (Active Dev)"
    },
    
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Mobile Application Development",
      "provider": { "@type": "Organization", "name": "SyncVision Labs" },
      "offers": {
        "@type": "Offer",
        "description": "Cross-platform mobile application development using Flutter."
      }
    },
    
    canonicalUrl: "https://syncvisionlabs.com/services/app-engineering",
    ogTitle: "App Engineering | SyncVision Labs",
    ogDescription: "Native Performance. Offline Logic. One Codebase.",
    ogImage: "https://syncvisionlabs.com/assets/app-eng-preview.jpg"
  };

  return (
    <ServiceLayout {...pageData} heroIcon={Smartphone}>
      
      {/* SECTION 1: THE PHYSICAL GUIDE (THE ARCHITECTURE) */}
      <div className="space-y-24">
        
        {/* The "Why Us" Logic */}
        <div className="border-t border-white/10 pt-20">
          <span className="font-mono text-indigo-400 text-xs font-black uppercase tracking-[0.4em] mb-6 block">System Logic</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">The "Offline-First" Standard.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/[0.02] backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-lg">
              <WifiOff className="text-indigo-400 mb-6" size={32} />
              <h3 className="text-xl font-bold text-white mb-4">1. Zero-Latency Local DB</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We embed a local database (SQLite/Isar) directly into the app. Users interact with local data instantly, removing all loading spinners.
              </p>
            </div>
            <div className="bg-white/[0.02] backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-lg">
              <Globe className="text-indigo-400 mb-6" size={32} />
              <h3 className="text-xl font-bold text-white mb-4">2. Background Sync</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                When the internet returns, our logic engine quietly synchronizes the local data with the cloud (Supabase) in the background. No data loss.
              </p>
            </div>
            <div className="bg-white/[0.02] backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-lg">
              <Cpu className="text-indigo-400 mb-6" size={32} />
              <h3 className="text-xl font-bold text-white mb-4">3. Native Compiler</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We use Flutter to compile directly to ARM machine code. Your app runs at 60-120 FPS, matching the smoothness of native iOS/Android apps.
              </p>
            </div>
          </div>
        </div>

        {/* The Comparison (Visual) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="font-mono text-indigo-400 text-xs font-black uppercase tracking-[0.4em] mb-6 block">Tech Stack</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">One Codebase. All Platforms.</h2>
            <p className="text-gray-400 mb-8">
              Legacy agencies charge you twice: once for an iOS team, once for an Android team. We build a single, powerful "Universal System" that deploys everywhere.
            </p>
            
            <div className="space-y-6">
               <div className="flex items-center gap-4">
                 <div className="w-10 h-10 rounded bg-blue-500/20 flex items-center justify-center text-blue-400"><Smartphone size={20} /></div>
                 <div>
                   <h4 className="text-white font-bold">iOS & Android</h4>
                   <p className="text-gray-500 text-xs">Full Store compliance.</p>
                 </div>
               </div>
               <div className="flex items-center gap-4">
                 <div className="w-10 h-10 rounded bg-green-500/20 flex items-center justify-center text-green-400"><Globe size={20} /></div>
                 <div>
                   <h4 className="text-white font-bold">Web PWA</h4>
                   <p className="text-gray-500 text-xs">Installable via Browser.</p>
                 </div>
               </div>
               <div className="flex items-center gap-4">
                 <div className="w-10 h-10 rounded bg-purple-500/20 flex items-center justify-center text-purple-400"><Database size={20} /></div>
                 <div>
                   <h4 className="text-white font-bold">Backend (Supabase)</h4>
                   <p className="text-gray-500 text-xs">PostgreSQL + Auth + Storage.</p>
                 </div>
               </div>
            </div>
          </div>
          
          {/* Visual Graph */}
          <div className="bg-slate-900 border border-white/10 rounded-3xl p-8 relative overflow-hidden shadow-2xl">
             <div className="absolute inset-0 bg-gradient-to-br from-indigo/5 to-transparent"></div>
             <div className="relative z-10">
                <h3 className="text-white font-mono mb-6 border-b border-white/10 pb-4">Performance Metrics</h3>
                <div className="space-y-4">
                   <div>
                      <div className="flex justify-between text-xs text-gray-400 mb-1">
                         <span>React Native / Hybrid</span>
                         <span>45 FPS</span>
                      </div>
                      <div className="w-full bg-gray-800 h-2 rounded-full"><div className="w-[60%] bg-gray-600 h-full rounded-full"></div></div>
                   </div>
                   <div>
                      <div className="flex justify-between text-xs text-indigo-400 mb-1">
                         <span>SyncVision (Flutter)</span>
                         <span>120 FPS</span>
                      </div>
                      <div className="w-full bg-gray-800 h-2 rounded-full"><div className="w-[95%] bg-indigo-500 h-full rounded-full shadow-[0_0_10px_#6366f1]"></div></div>
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* SECTION 2: PRICING PACKAGES */}
        <div className="border-t border-white/10 pt-20">
          <div className="text-center mb-16">
            <span className="font-mono text-indigo-400 text-xs font-black uppercase tracking-[0.4em] mb-4 block">Deployment Tiers</span>
            <h2 className="text-4xl font-bold text-white">Initialize Development</h2>
            <p className="text-gray-400 mt-4">Full source code ownership included in all tiers.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* TIER 1 */}
            <div className="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-indigo-500/50 transition-colors relative group shadow-xl">
              <h3 className="text-lg font-bold text-white mb-2">MVP PROTOTYPE</h3>
              <div className="text-3xl font-mono font-black text-indigo-400 mb-6">RM 0 <span className="text-sm text-gray-500 font-normal">/ est</span></div>
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-8 border-b border-white/10 pb-8">For Startups</p>
              <ul className="space-y-4 mb-8">
                <li className="text-sm text-gray-300 flex gap-3"><CheckCircle size={16} className="text-indigo-500" /> Functional UI/UX (Figma)</li>
                <li className="text-sm text-gray-300 flex gap-3"><CheckCircle size={16} className="text-indigo-500" /> Core Logic Implementation</li>
                <li className="text-sm text-gray-300 flex gap-3"><CheckCircle size={16} className="text-indigo-500" /> Basic Database Connection</li>
                <li className="text-sm text-gray-300 flex gap-3"><CheckCircle size={16} className="text-indigo-500" /> Android APK Delivery</li>
              </ul>
              <button className="w-full py-3 border border-white/20 rounded-lg text-sm font-bold text-white hover:bg-white hover:text-black transition-all">Build MVP</button>
            </div>

            {/* TIER 2 (Highlighted) */}
            <div className="bg-slate-900 border border-indigo-500 rounded-2xl p-8 relative transform md:-translate-y-4 shadow-2xl shadow-indigo-500/20">
              <div className="absolute top-0 right-0 bg-indigo-500 text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest rounded-bl-lg">Recommended</div>
              <h3 className="text-lg font-bold text-white mb-2">PRODUCTION SYSTEM</h3>
              <div className="text-3xl font-mono font-black text-indigo-400 mb-6">RM 0 <span className="text-sm text-gray-500 font-normal">/ est</span></div>
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-8 border-b border-white/10 pb-8">For Business Ops</p>
              <ul className="space-y-4 mb-8">
                <li className="text-sm text-gray-300 flex gap-3"><CheckCircle size={16} className="text-indigo-500" /> iOS & Android Store Launch</li>
                <li className="text-sm text-white font-bold flex gap-3"><CheckCircle size={16} className="text-indigo-500" /> Offline-First Architecture</li>
                <li className="text-sm text-gray-300 flex gap-3"><CheckCircle size={16} className="text-indigo-500" /> Realtime Chat / Notifications</li>
                <li className="text-sm text-gray-300 flex gap-3"><CheckCircle size={16} className="text-indigo-500" /> Admin Dashboard (Web)</li>
                <li className="text-sm text-gray-300 flex gap-3"><CheckCircle size={16} className="text-indigo-500" /> 3 Months Support</li>
              </ul>
              <button className="w-full py-3 bg-indigo-600 rounded-lg text-sm font-bold text-white hover:bg-indigo-500 transition-all">Build System</button>
            </div>

            {/* TIER 3 */}
            <div className="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-indigo-500/50 transition-colors relative group shadow-xl">
              <h3 className="text-lg font-bold text-white mb-2">ECOSYSTEM</h3>
              <div className="text-3xl font-mono font-black text-indigo-400 mb-6">RM 0 <span className="text-sm text-gray-500 font-normal">/ est</span></div>
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-8 border-b border-white/10 pb-8">For Enterprise</p>
              <ul className="space-y-4 mb-8">
                <li className="text-sm text-gray-300 flex gap-3"><CheckCircle size={16} className="text-indigo-500" /> Everything in Production</li>
                <li className="text-sm text-white font-bold flex gap-3"><CheckCircle size={16} className="text-indigo-500" /> Custom AI Integration</li>
                <li className="text-sm text-gray-300 flex gap-3"><CheckCircle size={16} className="text-indigo-500" /> Payment Gateway (Stripe/FPX)</li>
                <li className="text-sm text-gray-300 flex gap-3"><CheckCircle size={16} className="text-indigo-500" /> Hardware Integration (Bluetooth)</li>
                <li className="text-sm text-gray-300 flex gap-3"><CheckCircle size={16} className="text-indigo-500" /> Scalable Cloud Functions</li>
              </ul>
              <button className="w-full py-3 border border-white/20 rounded-lg text-sm font-bold text-white hover:bg-white hover:text-black transition-all">Contact Us</button>
            </div>
          </div>
        </div>

      </div>
    </ServiceLayout>
  );
};

export default AppEngineering;