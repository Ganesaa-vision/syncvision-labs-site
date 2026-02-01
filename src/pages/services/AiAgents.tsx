import React from 'react';
import ServiceLayout from '../../layouts/ServiceLayout';
import { BrainCircuit, Database, Bot, CheckCircle2, Network } from 'lucide-react';

const AiAgents = () => {
  const pageData = {
    seoTitle: "Custom AI Agents & RAG Systems | SyncVision Labs",
    seoDescription: "Deploy autonomous AI agents that understand your business data. Custom RAG implementations and LLM workflows.",
    
    title: "CUSTOM AI AGENTS",
    subtitle: "Go beyond chatbots. We engineer autonomous AI agents that understand your proprietary data, reason through complex problems, and execute workflows.",
    
    features: [
      "RAG Systems: Chat directly with your PDFs, SQL databases, and internal docs.",
      "Niche LLM Tuning: Models fine-tuned specifically for your industry.",
      "Vector Memory: Long-term memory for AI using Pinecone/Supabase.",
      "Multi-Agent Swarms: Orchestrated workflows where agents collaborate."
    ],
    
    caseStudy: {
      client: "LifeSync (Internal R&D)",
      result: "Behavioral AI Agent Integration (Active Dev)"
    },
    
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "AI Development",
      "provider": { "@type": "Organization", "name": "SyncVision Labs" },
      "description": "Custom AI agent development and RAG systems."
    },
    
    canonicalUrl: "https://syncvisionlabs.com/services/ai-agents",
    ogTitle: "Custom AI Agents | SyncVision Labs",
    ogDescription: "Autonomous intelligence for enterprise workflows.",
    ogImage: "https://syncvisionlabs.com/assets/ai-preview.jpg"
  };

  return (
    <ServiceLayout {...pageData} heroIcon={BrainCircuit}>
      <div className="space-y-32">
        
        {/* SECTION 1: THE LOGIC */}
        <div className="border-t border-white/10 pt-24">
           <span className="font-mono text-indigo text-xs font-black uppercase tracking-[0.4em] mb-6 block">Intelligence Architecture</span>
           <h2 className="text-4xl md:text-6xl font-mono font-black text-white mb-16 leading-tight">Your Data. <br/><span className="text-indigo">Activated.</span></h2>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="bg-white/[0.02] backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-lg">
               <Database className="text-indigo-400 mb-6" size={32} />
               <h3 className="text-xl font-bold text-white mb-4">1. Vector Memory</h3>
               <p className="text-gray-400 text-sm leading-relaxed">
                 We convert your PDFs, SQL databases, and Notion docs into "Vector Embeddings" (Pinecone). This gives the AI long-term memory of your business.
               </p>
             </div>
             <div className="bg-white/[0.02] backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-lg">
               <BrainCircuit className="text-indigo-400 mb-6" size={32} />
               <h3 className="text-xl font-bold text-white mb-4">2. RAG Systems</h3>
               <p className="text-gray-400 text-sm leading-relaxed">
                 Retrieval-Augmented Generation. The AI doesn't hallucinate; it retrieves exact facts from your uploaded documents before answering.
               </p>
             </div>
             <div className="bg-white/[0.02] backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-lg">
               <Network className="text-indigo-400 mb-6" size={32} />
               <h3 className="text-xl font-bold text-white mb-4">3. Agent Swarms</h3>
               <p className="text-gray-400 text-sm leading-relaxed">
                 One bot is good. A team is better. We build "Researcher" agents that pass data to "Writer" agents, automating complex workflows.
               </p>
             </div>
           </div>
        </div>

        {/* VISUAL COMPARISON */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="font-mono text-indigo text-xs font-black uppercase tracking-[0.4em] mb-6 block">Capability Check</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Beyond ChatGPT.</h2>
            <p className="text-gray-400 mb-8">
              Standard AI is generic. We build specialized agents that know your business secrets without sharing them with the world.
            </p>
            <ul className="space-y-4">
               <li className="flex items-center gap-3 text-slate-300 font-medium"><CheckCircle2 className="text-indigo-500" size={20} /> Trained on YOUR specific data</li>
               <li className="flex items-center gap-3 text-slate-300 font-medium"><CheckCircle2 className="text-indigo-500" size={20} /> Secure (Private API Keys)</li>
               <li className="flex items-center gap-3 text-slate-300 font-medium"><CheckCircle2 className="text-indigo-500" size={20} /> Multi-Step Reasoning</li>
            </ul>
          </div>
          <div className="bg-slate-900 border border-white/10 rounded-3xl p-10 relative overflow-hidden flex items-center justify-center shadow-2xl">
             <Bot size={120} className="text-indigo-500 animate-pulse" />
          </div>
        </div>

        {/* PRICING */}
        <div className="border-t border-white/10 pt-24">
          <div className="text-center mb-20">
            <span className="font-mono text-indigo-400 text-xs font-black uppercase tracking-[0.4em] mb-4 block">Deployment Tiers</span>
            <h2 className="text-4xl font-bold text-white">Initialize Intelligence</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-10 hover:border-indigo-500/30 transition-all duration-500 group flex flex-col shadow-xl">
                <h3 className="text-xl font-mono font-black text-white mb-4 tracking-widest">INTERNAL TOOL</h3>
                <div className="text-4xl font-mono font-black text-indigo-400 mb-2">RM 0 <span className="text-sm text-slate-500 font-bold tracking-normal">/ est</span></div>
                <p className="text-xs text-slate-500 uppercase tracking-widest mb-10 border-b border-white/10 pb-10">For Staff Use</p>
                <ul className="space-y-6 mb-12 flex-1">
                  {["Chat with PDF/Docs", "Internal Knowledge Base", "Secure Employee Login", "Basic RAG Implementation"].map(f => (
                    <li key={f} className="text-sm text-slate-300 flex gap-4 font-medium">
                      <CheckCircle2 size={18} className="text-indigo-500 flex-shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-4 border border-white/10 rounded-xl text-xs font-black text-white uppercase tracking-widest hover:bg-white hover:text-black transition-all">Build Tool</button>
              </div>

              <div className="bg-slate-900 border border-indigo-500 rounded-[2.5rem] p-10 relative transform md:-translate-y-8 shadow-[0_0_50px_rgba(99,102,241,0.25)] flex flex-col">
                <div className="absolute top-0 right-0 bg-indigo-500 text-white text-[10px] font-black px-6 py-2 uppercase tracking-widest rounded-bl-2xl rounded-tr-[2rem]">Recommended</div>
                <h3 className="text-xl font-mono font-black text-white mb-4 tracking-widest">CUSTOMER AGENT</h3>
                <div className="text-4xl font-mono font-black text-indigo-400 mb-2">RM 0 <span className="text-sm text-slate-500 font-bold tracking-normal">/ est</span></div>
                <p className="text-xs text-slate-500 uppercase tracking-widest mb-10 border-b border-white/10 pb-10">Public Facing</p>
                <ul className="space-y-6 mb-12 flex-1">
                  {["Website Embed Widget", "Advanced Guardrails (Safety)", "Lead Capture Integration", "Custom Personality Tuning", "Analytics Dashboard"].map((f, i) => (
                    <li key={f} className="text-sm flex gap-4 font-medium text-slate-300">
                      <CheckCircle2 size={18} className="text-indigo-500 flex-shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-4 bg-indigo-600 rounded-xl text-xs font-black text-white uppercase tracking-widest hover:bg-indigo-500 transition-all shadow-lg">Deploy Agent</button>
              </div>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default AiAgents;