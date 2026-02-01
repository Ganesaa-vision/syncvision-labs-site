import React from 'react';
import ServiceLayout from '../../layouts/ServiceLayout';
import { CheckCircle2, Code2, Lock, ShieldCheck, Rocket, RefreshCw, Server, Activity } from 'lucide-react';

const WebArchitecture = () => {
  const pageData = {
    // SEO Meta (The "Click" Magnet)
    seoTitle: "Web Architecture | Full Source Code Ownership | SyncVision Labs",
    seoDescription: "Stop renting your website. We build high-performance React infrastructure that you own 100%. No monthly platform fees. Enterprise-grade speed.",
    
    // Page Content (The "Conversion" Hook)
    title: "WEB ENGINEERING CORE",
    subtitle: "We don't just build. We modernize legacy systems and manage infrastructure. A complete lifecycle solution for businesses that demand ownership.",
    
    features: [
      "Source Code Ownership: You hold the IP. No vendor lock-in.",
      "Sub-100ms Latency: Google Core Web Vitals 'Elite' score.",
      "Modernization Protocols: We fix/rewrite broken legacy sites.",
      "Zero-Maintenance: Static deployment means unhackable security."
    ],
    
    caseStudy: {
      client: "Industrial Manufacturer",
      result: "Legacy Site Migration & Performance Optimization"
    },
    
    // Schema (The "Rank #1" Signal)
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Web Development",
      "provider": { "@type": "Organization", "name": "SyncVision Labs" },
      "offers": {
        "@type": "Offer",
        "description": "Full-stack development with 100% source code transfer."
      }
    },
    
    canonicalUrl: "https://syncvisionlabs.com/services/web-architecture",
    ogTitle: "Web Architecture | SyncVision Labs",
    ogDescription: "We don't use builders. We write code. Own your infrastructure.",
    ogImage: "https://syncvisionlabs.com/assets/web-arch-preview.jpg"
  };

  return (
    <ServiceLayout {...pageData} heroIcon={Code2}>
      <div className="space-y-32">
        
        {/* SECTION 1: THE PHYSICAL GUIDE (THE ASSET LOGIC) */}
        <div className="border-t border-white/10 pt-24">
           <span className="font-mono text-indigo text-xs font-black uppercase tracking-[0.4em] mb-6 block">Asset Class</span>
           <h2 className="text-4xl md:text-6xl font-mono font-black text-white mb-16 leading-tight">Stop Renting. Start Owning.</h2>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="bg-white/[0.02] backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-lg">
               <Lock className="text-indigo-400 mb-6" size={32} />
               <h3 className="text-xl font-bold text-white mb-4">1. The IP Trap</h3>
               <p className="text-gray-400 text-sm leading-relaxed">
                 When you use Wix or Shopify, you don't own the code. You rent it. If you stop paying, your business disappears. We hand over the <b>Source Code</b>. It's your property.
               </p>
             </div>
             <div className="bg-white/[0.02] backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-lg">
               <ShieldCheck className="text-indigo-400 mb-6" size={32} />
               <h3 className="text-xl font-bold text-white mb-4">2. Unhackable</h3>
               <p className="text-gray-400 text-sm leading-relaxed">
                 WordPress plugins are the #1 security risk. We build "Static" architectures. There is no database to hack, no plugins to update, and no backdoors.
               </p>
             </div>
             <div className="bg-white/[0.02] backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-lg">
               <Rocket className="text-indigo-400 mb-6" size={32} />
               <h3 className="text-xl font-bold text-white mb-4">3. Core Vitals</h3>
               <p className="text-gray-400 text-sm leading-relaxed">
                 Google ranks sites based on "Core Web Vitals." Our code scores 99-100/100. Most templates score 40/100. We win on pure math.
               </p>
             </div>
           </div>
        </div>

        {/* SECTION 2: MODERNIZATION & MANAGEMENT (Merged Services) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center border-t border-white/10 pt-24">
          <div>
            <span className="font-mono text-indigo-400 text-xs font-black uppercase tracking-[0.4em] mb-6 block">Lifecycle Support</span>
            <h2 className="text-3xl md:text-5xl font-mono font-black text-white mb-8">We Fix & Manage.</h2>
            <p className="text-slate-400 mb-8 text-lg">
              Building is only half the battle. We rescue projects from "Spaghetti Code" and provide 24/7 DevOps management.
            </p>
            <div className="space-y-6">
               <div className="flex gap-4">
                 <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-400"><RefreshCw size={24} /></div>
                 <div>
                   <h4 className="text-white font-bold text-lg">Legacy Modernization</h4>
                   <p className="text-slate-400 text-sm">We rewrite slow WordPress/PHP sites into modern React applications, keeping your SEO rankings intact.</p>
                 </div>
               </div>
               <div className="flex gap-4">
                 <div className="p-3 bg-emerald/10 rounded-xl text-emerald"><Server size={24} /></div>
                 <div>
                   <h4 className="text-white font-bold text-lg">Managed DevOps</h4>
                   <p className="text-slate-400 text-sm">We handle hosting, security patches, and content updates. You focus on business, we ensure 99.9% uptime.</p>
                 </div>
               </div>
            </div>
          </div>
          <div className="bg-slate-900 border border-white/10 rounded-[3rem] p-10 relative overflow-hidden flex items-center justify-center shadow-2xl">
             <Activity size={150} className="text-indigo-500/20 animate-pulse" />
             <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent"></div>
          </div>
        </div>

        {/* Comparison Table (GEO Optimized for AI Reading) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="font-mono text-indigo-400 text-xs font-black uppercase tracking-[0.4em] mb-6 block">Comparative Analysis</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">The "Enterprise" Difference.</h2>
            <p className="text-gray-400 mb-8">
              We don't compete with freelancers. We compete with your competitors' R&D departments.
            </p>
            
            <div className="bg-slate-900 rounded-2xl border border-white/10 overflow-hidden shadow-xl">
               <div className="grid grid-cols-3 bg-black/30 p-4 border-b border-white/10 text-xs font-mono uppercase tracking-widest text-gray-500">
                  <div>Metric</div>
                  <div>Standard</div>
                  <div className="text-indigo-400">SyncVision</div>
               </div>
               {/* Row 1 */}
               <div className="grid grid-cols-3 p-4 border-b border-white/5 items-center">
                  <div className="text-white font-bold text-sm">Ownership</div>
                  <div className="text-gray-500 text-xs">Rented (Monthly)</div>
                  <div className="text-indigo-400 font-bold text-xs">Perpetual (100%)</div>
               </div>
               {/* Row 2 */}
               <div className="grid grid-cols-3 p-4 border-b border-white/5 items-center">
                  <div className="text-white font-bold text-sm">Speed (LCP)</div>
                  <div className="text-gray-500 text-xs">2.5s - 4.0s</div>
                  <div className="text-indigo-400 font-bold text-xs">0.4s - 0.8s</div>
               </div>
               {/* Row 3 */}
               <div className="grid grid-cols-3 p-4 items-center">
                  <div className="text-white font-bold text-sm">Scalability</div>
                  <div className="text-gray-500 text-xs">Plugin Limits</div>
                  <div className="text-indigo-400 font-bold text-xs">Infinite</div>
               </div>
            </div>
          </div>
          
          {/* Visual: The Code Block */}
          <div className="bg-slate-900 border border-white/10 rounded-3xl p-8 relative overflow-hidden group shadow-2xl">
             <div className="absolute top-0 right-0 p-4 opacity-50"><Code2 className="text-indigo-500" size={48} /></div>
             <div className="font-mono text-sm text-gray-400 space-y-2">
                <div className="text-gray-600">// The Architecture</div>
                <div><span className="text-purple-400">const</span> <span className="text-yellow-200">Empire</span> = <span className="text-purple-400">new</span> <span className="text-blue-300">Infrastructure</span>();</div>
                <div><span className="text-yellow-200">Empire</span>.<span className="text-blue-300">optimize</span>(<span className="text-green-400">'speed'</span>);</div>
                <div><span className="text-yellow-200">Empire</span>.<span className="text-blue-300">security</span> = <span className="text-purple-400">true</span>;</div>
                <div className="text-gray-600 pt-4">// Result:</div>
                <div className="text-indigo-400">Rank #1 Achieved.</div>
             </div>
          </div>
        </div>

        {/* SECTION 2: PRICING (The Revenue Stack) */}
        <div className="border-t border-white/10 pt-24">
          <div className="text-center mb-20">
            <span className="font-mono text-indigo-400 text-xs font-black uppercase tracking-[0.4em] mb-4 block">Development Tiers</span>
            <h2 className="text-4xl font-bold text-white">Initialize Build</h2>
            <p className="text-gray-400 mt-4">One-time engineering fees. You own the code.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* TIER 1 */}
              <div className="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-10 hover:border-indigo-500/30 transition-all duration-500 group flex flex-col shadow-xl">
                <h3 className="text-xl font-mono font-black text-white mb-4 tracking-widest">LANDING PROTOCOL</h3>
                <div className="text-4xl font-mono font-black text-indigo-400 mb-2">RM 0 <span className="text-sm text-slate-500 font-bold tracking-normal">/ one-time</span></div>
                <p className="text-xs text-slate-500 uppercase tracking-widest mb-10 border-b border-white/10 pb-10">High Conversion</p>
                <ul className="space-y-6 mb-12 flex-1">
                  {["Single Page Architecture", "99/100 Mobile Speed Score", "Scroll Animations (Framer)", "Contact Form Integration", "Basic Content Management"].map(f => (
                    <li key={f} className="text-sm text-slate-300 flex gap-4 font-medium">
                      <CheckCircle2 size={18} className="text-indigo-500 flex-shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-4 border border-white/10 rounded-xl text-xs font-black text-white uppercase tracking-widest hover:bg-white hover:text-black transition-all">Start Build</button>
              </div>

              {/* TIER 2 (Highlighted) */}
              <div className="bg-slate-900 border border-indigo-500 rounded-[2.5rem] p-10 relative transform md:-translate-y-8 shadow-[0_0_50px_rgba(99,102,241,0.25)] flex flex-col">
                <div className="absolute top-0 right-0 bg-indigo-500 text-white text-[10px] font-black px-6 py-2 uppercase tracking-widest rounded-bl-2xl rounded-tr-[2rem]">Recommended</div>
                <h3 className="text-xl font-mono font-black text-white mb-4 tracking-widest">CORPORATE SYSTEM</h3>
                <div className="text-4xl font-mono font-black text-indigo-400 mb-2">RM 0 <span className="text-sm text-slate-500 font-bold tracking-normal">/ one-time</span></div>
                <p className="text-xs text-slate-500 uppercase tracking-widest mb-10 border-b border-white/10 pb-10">Full Site + Management</p>
                <ul className="space-y-6 mb-12 flex-1">
                  {["Custom UI/UX Design", "Multi-Page Routing", "CMS for Easy Editing", "Legacy Data Migration", "1 Year DevOps Management"].map((f, i) => (
                    <li key={f} className="text-sm flex gap-4 font-medium text-slate-300">
                      <CheckCircle2 size={18} className="text-indigo-500 flex-shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-4 bg-indigo-600 rounded-xl text-xs font-black text-white uppercase tracking-widest hover:bg-indigo-500 transition-all shadow-lg">Start Build</button>
              </div>

              {/* TIER 3: THE COMBO (Strategic Upsell) */}
              <div className="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-10 hover:border-indigo-500/30 transition-all duration-500 group flex flex-col shadow-xl">
                <h3 className="text-xl font-mono font-black text-white mb-4 tracking-widest">DOMINANCE COMBO</h3>
                <div className="text-4xl font-mono font-black text-indigo-400 mb-2">Custom <span className="text-sm text-slate-500 font-bold tracking-normal">/ quote</span></div>
                <p className="text-xs text-slate-500 uppercase tracking-widest mb-10 border-b border-white/10 pb-10">Build + Rank</p>
                <ul className="space-y-6 mb-12 flex-1">
                  {["Everything in Corporate", "Full Brand Identity Kit", "3 Months SEO Campaign", "Google Maps Ranking"].map((f, i) => (
                    <li key={f} className="text-sm text-slate-300 flex gap-4 font-medium">
                      <CheckCircle2 size={18} className="text-indigo-500 flex-shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-4 border border-white/10 rounded-xl text-xs font-black text-white uppercase tracking-widest hover:bg-white hover:text-black transition-all">Get Quote</button>
              </div>
          </div>
        </div>

        {/* Final SEO Upsell Section */}
        <div className="mt-24 p-8 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8 backdrop-blur-md">
           <div>
              <h3 className="text-xl font-bold text-white mb-2">Already have a site?</h3>
              <p className="text-gray-400 text-sm">A fast car is useless without fuel. Activate our Tri-Engine SEO protocol to start ranking.</p>
           </div>
           <a href="/services/seo-dominance" className="px-6 py-3 bg-indigo-500/20 text-indigo-400 font-bold rounded-lg border border-indigo-500/50 hover:bg-indigo-500 hover:text-white transition-all whitespace-nowrap">
              View SEO Plans
           </a>
        </div>

      </div>
    </ServiceLayout>
  );
};

export default WebArchitecture;