import React from 'react';
import ServiceLayout from '../../layouts/ServiceLayout';
import { RefreshCw, Server, Database, Activity, CheckCircle2 } from 'lucide-react';

const StrategicRedesign = () => {
  const pageData = {
    seoTitle: "Legacy System Modernization | React Migration | SyncVision Labs",
    seoDescription: "Don't let technical debt kill your growth. We re-architect legacy systems into high-performance React/Next.js assets.",
    
    title: "STRATEGIC MODERNIZATION",
    subtitle: "Don't let legacy code slow you down. We re-architect aging systems into high-velocity assets, turning technical debt into your competitive advantage.",
    
    features: [
      "Modern Stack Migration: Upgrade from legacy PHP/jQuery to React/Next.js.",
      "Deep Performance Audit: Identify and eliminate system bottlenecks.",
      "Database Tuning: SQL restructuring for lightning-fast queries.",
      "Enterprise Security: Modern authentication and encryption standards."
    ],
    
    caseStudy: {
      client: "Industrial Client",
      result: "Legacy System Modernization"
    },
    
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Software Modernization",
      "provider": { "@type": "Organization", "name": "SyncVision Labs" },
      "description": "Enterprise legacy system migration and modernization."
    },
    
    canonicalUrl: "https://syncvisionlabs.com/services/strategic-redesign",
    ogTitle: "Strategic Redesign | SyncVision Labs",
    ogDescription: "Transform legacy code into high-velocity assets.",
    ogImage: "https://syncvisionlabs.com/assets/redesign-preview.jpg"
  };

  return (
    <ServiceLayout {...pageData} heroIcon={RefreshCw}>
      <div className="space-y-32">
        
        {/* SECTION 1: THE LOGIC */}
        <div className="border-t border-white/10 pt-24">
           <span className="font-mono text-indigo-400 text-xs font-black uppercase tracking-[0.4em] mb-6 block">The Modernization Protocol</span>
           <h2 className="text-4xl md:text-6xl font-mono font-black text-white mb-16 leading-tight">Technical Debt is <br/><span className="text-indigo-500">Interest You Pay.</span></h2>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="bg-white/[0.02] backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-lg">
               <RefreshCw className="text-indigo-400 mb-6" size={32} />
               <h3 className="text-xl font-bold text-white mb-4">1. The Rewrite</h3>
               <p className="text-gray-400 text-sm leading-relaxed">
                 We don't patch spaghetti code. We extract the business logic and rewrite the core in modern React/Next.js, eliminating years of bugs instantly.
               </p>
             </div>
             <div className="bg-white/[0.02] backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-lg">
               <Database className="text-indigo-400 mb-6" size={32} />
               <h3 className="text-xl font-bold text-white mb-4">2. Data Migration</h3>
               <p className="text-gray-400 text-sm leading-relaxed">
                 Moving from SQL to NoSQL? Or Legacy MySQL to Supabase? We write custom migration scripts that ensure zero data loss during the transition.
               </p>
             </div>
             <div className="bg-white/[0.02] backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-lg">
               <Server className="text-indigo-400 mb-6" size={32} />
               <h3 className="text-xl font-bold text-white mb-4">3. Cloud Native</h3>
               <p className="text-gray-400 text-sm leading-relaxed">
                 We move you off expensive dedicated servers to serverless architectures (Vercel/AWS), often reducing hosting costs by 60-80%.
               </p>
             </div>
           </div>
        </div>

        {/* VISUAL COMPARISON */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="font-mono text-indigo-400 text-xs font-black uppercase tracking-[0.4em] mb-6 block">Performance Audit</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Speed is a Feature.</h2>
            <p className="text-gray-400 mb-8">
              Legacy systems are slow by default. Modern systems are fast by design.
            </p>
            <div className="space-y-4">
               <div className="bg-black/30 p-4 rounded-xl border border-white/10 flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Legacy PHP/WordPress</span>
                  <span className="text-red-500 font-mono font-bold">3.2s Load</span>
               </div>
               <div className="bg-indigo-500/10 p-4 rounded-xl border border-indigo-500/30 flex justify-between items-center">
                  <span className="text-white text-sm font-bold">SyncVision Next.js</span>
                  <span className="text-emerald-400 font-mono font-bold">0.2s Load</span>
               </div>
            </div>
          </div>
          <div className="bg-slate-900 border border-white/10 rounded-3xl p-10 relative overflow-hidden shadow-2xl">
             <Activity size={120} className="text-indigo-500/10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
             <div className="relative z-10 text-center">
                <div className="text-5xl font-mono font-black text-white mb-2">60%</div>
                <div className="text-indigo-400 font-mono text-xs uppercase tracking-widest">Reduction in Server Costs</div>
             </div>
          </div>
        </div>

        {/* PRICING */}
        <div className="border-t border-white/10 pt-24">
          <div className="text-center mb-20">
            <span className="font-mono text-indigo-400 text-xs font-black uppercase tracking-[0.4em] mb-4 block">Modernization Tiers</span>
            <h2 className="text-4xl font-bold text-white">Upgrade Infrastructure</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-10 hover:border-indigo-500/30 transition-all duration-500 group flex flex-col shadow-xl">
                <h3 className="text-xl font-mono font-black text-white mb-4 tracking-widest">MIGRATION</h3>
                <div className="text-4xl font-mono font-black text-indigo-400 mb-2">Custom <span className="text-sm text-slate-500 font-bold tracking-normal">/ project</span></div>
                <p className="text-xs text-slate-500 uppercase tracking-widest mb-10 border-b border-white/10 pb-10">Move to Modern Stack</p>
                <ul className="space-y-6 mb-12 flex-1">
                  {["Database Migration", "Frontend Rewrite (React)", "SEO Preservation", "Serverless Setup"].map(f => (
                    <li key={f} className="text-sm text-slate-300 flex gap-4 font-medium">
                      <CheckCircle2 size={18} className="text-indigo-500 flex-shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-4 border border-white/10 rounded-xl text-xs font-black text-white uppercase tracking-widest hover:bg-white hover:text-black transition-all">Start Migration</button>
              </div>

              <div className="bg-slate-900 border border-indigo-500 rounded-[2.5rem] p-10 relative transform md:-translate-y-8 shadow-[0_0_50px_rgba(99,102,241,0.25)] flex flex-col">
                <div className="absolute top-0 right-0 bg-indigo-500 text-white text-[10px] font-black px-6 py-2 uppercase tracking-widest rounded-bl-2xl rounded-tr-[2rem]">Recommended</div>
                <h3 className="text-xl font-mono font-black text-white mb-4 tracking-widest">FULL RE-ARCHITECT</h3>
                <div className="text-4xl font-mono font-black text-indigo-400 mb-2">Custom <span className="text-sm text-slate-500 font-bold tracking-normal">/ project</span></div>
                <p className="text-xs text-slate-500 uppercase tracking-widest mb-10 border-b border-white/10 pb-10">Complete Overhaul</p>
                <ul className="space-y-6 mb-12 flex-1">
                  {["Everything in Migration", "UI/UX Redesign", "New Feature Implementation", "Admin Dashboard Build", "3 Months Support"].map((f, i) => (
                    <li key={f} className="text-sm flex gap-4 font-medium text-slate-300">
                      <CheckCircle2 size={18} className="text-indigo-500 flex-shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-4 bg-indigo-600 rounded-xl text-xs font-black text-white uppercase tracking-widest hover:bg-indigo-500 transition-all shadow-lg">Start Re-Architect</button>
              </div>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default StrategicRedesign;