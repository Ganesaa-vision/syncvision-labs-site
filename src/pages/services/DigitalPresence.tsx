import React from 'react';
import ServiceLayout from '../../layouts/ServiceLayout';
import { Server, ShieldCheck, RefreshCw, Activity, CheckCircle2, Clock } from 'lucide-react';

const DigitalPresence = () => {
  const pageData = {
    seoTitle: "Web Management & DevOps | SyncVision Labs",
    seoDescription: "Your dedicated DevOps team. We handle 24/7 uptime monitoring, security patches, and content updates so you can focus on business.",
    
    title: "WEB MANAGEMENT",
    subtitle: "We don't just build and leave. We act as your internal DevOps team—handling security, updates, and infrastructure scaling 24/7.",
    
    features: [
      "24/7 Uptime Monitoring: We know if your site is down before you do.",
      "Security Patching: Immediate protection against new vulnerabilities.",
      "Content Updates: Send us the text/images, we handle the code.",
      "Server Scaling: Infrastructure that grows with your traffic."
    ],
    
    caseStudy: {
      client: "SME Partner",
      result: "24/7 Infrastructure Management & Security"
    },
    
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "WebHosting",
      "provider": { "@type": "Organization", "name": "SyncVision Labs" },
      "description": "Enterprise web management and DevOps services."
    },
    
    canonicalUrl: "https://syncvisionlabs.com/services/digital-presence",
    ogTitle: "Web Management | SyncVision Labs",
    ogDescription: "Secure. Scalable. Managed.",
    ogImage: "https://syncvisionlabs.com/assets/presence-preview.jpg"
  };

  return (
    <ServiceLayout {...pageData} heroIcon={Server}>
      <div className="space-y-32">
        
        {/* SECTION 1: THE LOGIC */}
        <div className="border-t border-white/10 pt-24">
           <span className="font-mono text-indigo-400 text-xs font-black uppercase tracking-[0.4em] mb-6 block">Operational Logic</span>
           <h2 className="text-4xl md:text-6xl font-mono font-black text-white mb-16 leading-tight">Infrastructure <br/><span className="text-indigo-500">Assurance.</span></h2>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="bg-white/[0.02] backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-lg">
               <ShieldCheck className="text-indigo-400 mb-6" size={32} />
               <h3 className="text-xl font-bold text-white mb-4">1. Security Core</h3>
               <p className="text-gray-400 text-sm leading-relaxed">
                 Websites get attacked. We implement active firewalls, DDOS protection, and automated dependency patching to keep your data safe.
               </p>
             </div>
             <div className="bg-white/[0.02] backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-lg">
               <RefreshCw className="text-indigo-400 mb-6" size={32} />
               <h3 className="text-xl font-bold text-white mb-4">2. Continuous CI/CD</h3>
               <p className="text-gray-400 text-sm leading-relaxed">
                 Need a change? We deploy updates instantly using automated pipelines. No broken pages. No downtime. Just seamless evolution.
               </p>
             </div>
             <div className="bg-white/[0.02] backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-lg">
               <Activity className="text-indigo-400 mb-6" size={32} />
               <h3 className="text-xl font-bold text-white mb-4">3. Performance Watch</h3>
               <p className="text-gray-400 text-sm leading-relaxed">
                 Speed drops kill conversion. We monitor Core Web Vitals in real-time and optimize assets automatically to maintain elite scores.
               </p>
             </div>
           </div>
        </div>

        {/* VISUAL COMPARISON */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="font-mono text-indigo-400 text-xs font-black uppercase tracking-[0.4em] mb-6 block">The Guarantee</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Sleep Soundly.</h2>
            <p className="text-gray-400 mb-8">
              A crashed website costs you money every minute. We prevent that.
            </p>
            <ul className="space-y-4">
               <li className="flex items-center gap-3 text-slate-300 font-medium"><CheckCircle2 className="text-indigo-500" size={20} /> 99.9% Uptime SLA</li>
               <li className="flex items-center gap-3 text-slate-300 font-medium"><CheckCircle2 className="text-indigo-500" size={20} /> Daily Encrypted Backups</li>
               <li className="flex items-center gap-3 text-slate-300 font-medium"><CheckCircle2 className="text-indigo-500" size={20} /> Priority Emergency Support</li>
            </ul>
          </div>
          <div className="bg-slate-900 border border-white/10 rounded-3xl p-10 relative overflow-hidden flex items-center justify-center shadow-2xl">
             <Clock size={120} className="text-indigo-500 animate-pulse" />
          </div>
        </div>

        {/* PRICING */}
        <div className="border-t border-white/10 pt-24">
          <div className="text-center mb-20">
            <span className="font-mono text-indigo-400 text-xs font-black uppercase tracking-[0.4em] mb-4 block">Management Tiers</span>
            <h2 className="text-4xl font-bold text-white">Secure Your Asset</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-10 hover:border-indigo-500/30 transition-all duration-500 group flex flex-col shadow-xl">
                <h3 className="text-xl font-mono font-black text-white mb-4 tracking-widest">MAINTENANCE</h3>
                <div className="text-4xl font-mono font-black text-indigo-400 mb-2">RM 0 <span className="text-sm text-slate-500 font-bold tracking-normal">/ mo</span></div>
                <p className="text-xs text-slate-500 uppercase tracking-widest mb-10 border-b border-white/10 pb-10">Essential Security</p>
                <ul className="space-y-6 mb-12 flex-1">
                  {["24/7 Uptime Monitoring", "Monthly Security Patches", "Daily Backups", "Email Support"].map(f => (
                    <li key={f} className="text-sm text-slate-300 flex gap-4 font-medium">
                      <CheckCircle2 size={18} className="text-indigo-500 flex-shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-4 border border-white/10 rounded-xl text-xs font-black text-white uppercase tracking-widest hover:bg-white hover:text-black transition-all">Start Maintenance</button>
              </div>

              <div className="bg-slate-900 border border-indigo-500 rounded-[2.5rem] p-10 relative transform md:-translate-y-8 shadow-[0_0_50px_rgba(99,102,241,0.25)] flex flex-col">
                <div className="absolute top-0 right-0 bg-indigo-500 text-white text-[10px] font-black px-6 py-2 uppercase tracking-widest rounded-bl-2xl rounded-tr-[2rem]">Recommended</div>
                <h3 className="text-xl font-mono font-black text-white mb-4 tracking-widest">GROWTH OPS</h3>
                <div className="text-4xl font-mono font-black text-indigo-400 mb-2">RM 0 <span className="text-sm text-slate-500 font-bold tracking-normal">/ mo</span></div>
                <p className="text-xs text-slate-500 uppercase tracking-widest mb-10 border-b border-white/10 pb-10">Active Management</p>
                <ul className="space-y-6 mb-12 flex-1">
                  {["Everything in Maintenance", "Unlimited Content Edits", "Performance Optimization", "Priority Phone Support", "Monthly Analytics Report"].map((f, i) => (
                    <li key={f} className="text-sm flex gap-4 font-medium text-slate-300">
                      <CheckCircle2 size={18} className="text-indigo-500 flex-shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-4 bg-indigo-600 rounded-xl text-xs font-black text-white uppercase tracking-widest hover:bg-indigo-500 transition-all shadow-lg">Start Growth</button>
              </div>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default DigitalPresence;