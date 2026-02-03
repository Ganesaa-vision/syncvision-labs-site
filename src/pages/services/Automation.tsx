import React from 'react';
import ServiceLayout from '../../layouts/ServiceLayout';
import { Bot, MessageSquare, Clock, Workflow, CheckCircle } from 'lucide-react';

const Automation = () => {
  const pageData = {
    seoTitle: "Business Automation | AI Agents & WhatsApp API | SyncVision Labs",
    seoDescription: "Replace manual data entry with autonomous code. We deploy WhatsApp API agents, CRM syncs, and AI workflows that work 24/7 without a salary.",
    
    title: "BUSINESS AUTOMATION",
    subtitle: "Stop paying humans to do robotic work. We deploy autonomous AI Agents and WhatsApp API flows that handle sales, support, and data entry 24/7.",
    
    features: [
      "WhatsApp Business API: Automate catalogs, replies, and closing.",
      "AI Agent Deployment: Intelligent bots that understand intent.",
      "CRM Sync: Auto-update customer data from chat to database.",
      "Legacy Integration: We connect modern AI to your old software."
    ],
    
    caseStudy: {
      client: "Corporate Client",
      result: "Automated WhatsApp Business Workflow"
    },
    
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Process Automation",
      "provider": { "@type": "Organization", "name": "SyncVision Labs" },
      "offers": {
        "@type": "Offer",
        "description": "Deployment of autonomous business logic and AI agents."
      }
    },
    
    canonicalUrl: "https://syncvisionlabs.com/services/automation",
    ogTitle: "Business Automation | SyncVision Labs",
    ogDescription: "Hire the employee that never sleeps. Custom automation scripts.",
    ogImage: "https://syncvisionlabs.com/assets/automation-preview.jpg"
  };

  return (
    <ServiceLayout {...pageData} heroIcon={Bot}>
      
      {/* SECTION 1: THE PHYSICAL GUIDE (THE WORKFLOW) */}
      <div className="space-y-24">
        
        {/* Intro */}
        <div className="border-t border-white/10 pt-20">
          <span className="font-mono text-indigo text-xs font-black uppercase tracking-[0.4em] mb-6 block">The Logic Loop</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">The "Zero-Touch" Workflow.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/[0.02] backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-lg">
              <MessageSquare className="text-indigo-400 mb-6" size={32} />
              <h3 className="text-xl font-bold text-white mb-4">1. Trigger (Input)</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                A customer sends a WhatsApp message, fills a form, or sends an email. Our "Listener" script catches this event in 0.5 seconds.
              </p>
            </div>
            <div className="bg-white/[0.02] backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-lg">
              <Bot className="text-indigo-400 mb-6" size={32} />
              <h3 className="text-xl font-bold text-white mb-4">2. Decision (AI)</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Instead of a basic auto-reply, our AI Agent analyzes the intent. Is it a sale? A complaint? It drafts the perfect, human-like response.
              </p>
            </div>
            <div className="bg-white/[0.02] backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-lg">
              <Workflow className="text-indigo-400 mb-6" size={32} />
              <h3 className="text-xl font-bold text-white mb-4">3. Action (Execution)</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                The system updates your Google Sheet, adds the lead to your CRM, and schedules a calendar invite. You didn't lift a finger.
              </p>
            </div>
          </div>
        </div>

        {/* Visual Graph */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="font-mono text-indigo-400 text-xs font-black uppercase tracking-[0.4em] mb-6 block">ROI Calculation</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Efficiency is Revenue.</h2>
            <p className="text-gray-400 mb-8">
              Every minute you spend copying data from WhatsApp to Excel is lost profit. We build "Invisible Infrastructure" that handles the boring work so you can focus on strategy.
            </p>
            <ul className="space-y-4">
               <li className="flex items-center gap-3 text-gray-300 font-mono text-sm">
                  <span className="text-indigo-400">→</span> Instant Lead Response (Sub-5s)
               </li>
               <li className="flex items-center gap-3 text-gray-300 font-mono text-sm">
                  <span className="text-indigo-400">→</span> Zero Data Entry Errors
               </li>
               <li className="flex items-center gap-3 text-gray-300 font-mono text-sm">
                  <span className="text-indigo-400">→</span> 24/7 Availability (No Holidays)
               </li>
            </ul>
          </div>
          
          <div className="bg-slate-900 border border-white/10 rounded-3xl p-8 flex items-center justify-center shadow-2xl">
             <div className="text-center">
                <div className="inline-block p-4 rounded-full bg-indigo-500/10 text-indigo-400 mb-4"><Clock size={48} /></div>
                <h3 className="text-5xl font-mono font-black text-white mb-2">40+ Hrs</h3>
                <p className="text-gray-500 uppercase tracking-widest text-xs">Saved Per Month (Avg)</p>
             </div>
          </div>
        </div>

        {/* SECTION 2: PRICING PACKAGES */}
        <div className="border-t border-white/10 pt-20">
          <div className="text-center mb-16">
            <span className="font-mono text-indigo-400 text-xs font-black uppercase tracking-[0.4em] mb-4 block">Automation Protocols</span>
            <h2 className="text-4xl font-bold text-white">Select Your Agent</h2>
            <p className="text-gray-400 mt-4">One-time setup fees. Minimal server costs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* TIER 1 */}
            <div className="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-indigo-500/50 transition-colors relative group shadow-xl">
              <h3 className="text-lg font-bold text-white mb-2">RESPONDER BOT</h3>
              <div className="text-3xl font-mono font-black text-indigo-400 mb-6">RM 0 <span className="text-sm text-gray-500 font-normal">/ setup</span></div>
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-8 border-b border-white/10 pb-8">Basic Logic</p>
              <ul className="space-y-4 mb-8">
                <li className="text-sm text-gray-300 flex gap-3"><CheckCircle size={16} className="text-indigo-500" /> WhatsApp Auto-Reply</li>
                <li className="text-sm text-gray-300 flex gap-3"><CheckCircle size={16} className="text-indigo-500" /> FAQ Menu Structure</li>
                <li className="text-sm text-gray-300 flex gap-3"><CheckCircle size={16} className="text-indigo-500" /> Link to Website</li>
                <li className="text-sm text-gray-300 flex gap-3"><CheckCircle size={16} className="text-indigo-500" /> Google Sheet Logging</li>
              </ul>
              <button className="w-full py-3 border border-white/20 rounded-lg text-sm font-bold text-white hover:bg-white hover:text-black transition-all">Deploy Bot</button>
            </div>

            {/* TIER 2 (Highlighted) */}
            <div className="bg-slate-900 border border-indigo-500 rounded-2xl p-8 relative transform md:-translate-y-4 shadow-2xl shadow-indigo-500/20">
              <div className="absolute top-0 right-0 bg-indigo-500 text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest rounded-bl-lg">Recommended</div>
              <h3 className="text-lg font-bold text-white mb-2">INTELLIGENT AGENT</h3>
              <div className="text-3xl font-mono font-black text-indigo-400 mb-6">RM 0 <span className="text-sm text-gray-500 font-normal">/ setup</span></div>
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-8 border-b border-white/10 pb-8">For Sales Teams</p>
              <ul className="space-y-4 mb-8">
                <li className="text-sm text-gray-300 flex gap-3"><CheckCircle size={16} className="text-indigo-500" /> Everything in Responder</li>
                <li className="text-sm text-white font-bold flex gap-3"><CheckCircle size={16} className="text-indigo-500" /> AI (LLM) Conversation</li>
                <li className="text-sm text-gray-300 flex gap-3"><CheckCircle size={16} className="text-indigo-500" /> CRM Synchronization</li>
                <li className="text-sm text-gray-300 flex gap-3"><CheckCircle size={16} className="text-indigo-500" /> Lead Qualification Logic</li>
                <li className="text-sm text-gray-300 flex gap-3"><CheckCircle size={16} className="text-indigo-500" /> Email Notifications</li>
              </ul>
              <button className="w-full py-3 bg-indigo-600 rounded-lg text-sm font-bold text-white hover:bg-indigo-500 transition-all">Deploy Agent</button>
            </div>

            {/* TIER 3 */}
            <div className="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-indigo-500/50 transition-colors relative group shadow-xl">
              <h3 className="text-lg font-bold text-white mb-2">FULL SYSTEM OPS</h3>
              <div className="text-3xl font-mono font-black text-indigo-400 mb-6">RM 0 <span className="text-sm text-gray-500 font-normal">/ setup</span></div>
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-8 border-b border-white/10 pb-8">Enterprise</p>
              <ul className="space-y-4 mb-8">
                <li className="text-sm text-gray-300 flex gap-3"><CheckCircle size={16} className="text-indigo-500" /> Custom API Development</li>
                <li className="text-sm text-gray-300 flex gap-3"><CheckCircle size={16} className="text-indigo-500" /> Legacy System Integration</li>
                <li className="text-sm text-gray-300 flex gap-3"><CheckCircle size={16} className="text-indigo-500" /> Multi-Channel (Insta/FB/WA)</li>
                <li className="text-sm text-gray-300 flex gap-3"><CheckCircle size={16} className="text-indigo-500" /> Dashboard for Analytics</li>
              </ul>
              <button className="w-full py-3 border border-white/20 rounded-lg text-sm font-bold text-white hover:bg-white hover:text-black transition-all">Contact Us</button>
            </div>
          </div>
        </div>

      </div>
    </ServiceLayout>
  );
};

export default Automation;