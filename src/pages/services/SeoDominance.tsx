import React from 'react';
import ServiceLayout from '../../layouts/ServiceLayout';
import { Search, Bot, Cpu, Layers, CheckCircle2 } from 'lucide-react';

const SeoDominance = () => {
  const pageData = {
    title: "TRI-ENGINE DOMINANCE",
    subtitle: "The era of 10 blue links is over. We optimize for the entire search ecosystem: Traditional Search (SEO), Voice Answers (AEO), and AI Generation (GEO).",
    seoTitle: "SEO, AEO & GEO Services | Rank #1 in Google & AI | SyncVision Labs",
    seoDescription: "Malaysia's first Tri-Engine Optimization agency. We dominate Google Search (SEO), Answer Snippets (AEO), and AI Overviews (GEO). See our #1 ranking case study.",
    features: [
      "SEO (Search Engine Optimization): Dominate the 10 Blue Links.",
      "AEO (Answer Engine Optimization): Capture 'People Also Ask' & Voice.",
      "GEO (Generative Engine Optimization): Influence ChatGPT & Gemini outputs.",
      "Entity Knowledge Graph: Force Google to understand your Brand Authority."
    ],
    caseStudy: {
      client: "Industrial Pipe Manufacturer",
      result: "Rank #1 (Google) & Top Recommendation (Gemini AI) in 20 Days"
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "SEO and AEO Optimization",
      "provider": { "@type": "Organization", "name": "SyncVision Labs" },
      "areaServed": "Global",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Tri-Engine Optimization Packages",
        "itemListElement": [
          { "@type": "Offer", "name": "Protocol: VISIBILITY", "price": "0", "priceCurrency": "MYR" },
          { "@type": "Offer", "name": "Protocol: AUTHORITY", "price": "0", "priceCurrency": "MYR" },
          { "@type": "Offer", "name": "Protocol: DOMINANCE", "price": "0", "priceCurrency": "MYR" }
        ]
      }
    },
    canonicalUrl: "https://syncvisionlabs.com/services/seo-dominance",
    ogTitle: "SEO + AEO + GEO | SyncVision Labs",
    ogDescription: "We don't just rank websites. We train AI to recommend your brand.",
    ogImage: "https://syncvisionlabs.com/assets/seo-graph-preview.jpg"
  };

  return (
    <ServiceLayout {...pageData} heroIcon={Search}>
      
      {/* SECTION 1: THE PHYSICAL GUIDE (HOW WE WIN) */}
      <div className="space-y-32">
        
        {/* Intro to Tri-Engine */}
        <div className="border-t border-white/10 pt-24">
          <span className="font-mono text-indigo text-xs font-black uppercase tracking-[0.4em] mb-6 block">The New Architecture</span>
          <h2 className="text-4xl md:text-6xl font-mono font-black text-white mb-16 leading-tight">Search is no longer <br/>just "Google".</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white/[0.02] backdrop-blur-xl p-10 rounded-[2rem] border border-white/10 hover:border-indigo-500/50 transition-all duration-500 group hover:-translate-y-2 shadow-xl">
              <div className="w-16 h-16 bg-indigo-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-indigo-500 transition-colors duration-500">
                <Search className="text-indigo-400 group-hover:text-white transition-colors duration-500" size={32} />
              </div>
              <h3 className="text-xl font-mono font-bold text-white mb-4">1. SEO (Traditional)</h3>
              <p className="text-slate-400 text-sm leading-relaxed font-medium">
                The battle for the "Blue Links." We use <b>Programmatic Schema</b> and <b>Core Web Vitals</b> (Speed) to force your site to the top of the traditional index.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white/[0.02] backdrop-blur-xl p-10 rounded-[2rem] border border-white/10 hover:border-indigo-500/50 transition-all duration-500 group hover:-translate-y-2 shadow-xl">
              <div className="w-16 h-16 bg-indigo-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-indigo-500 transition-colors duration-500">
                <Bot className="text-indigo-400 group-hover:text-white transition-colors duration-500" size={32} />
              </div>
              <h3 className="text-xl font-mono font-bold text-white mb-4">2. AEO (Answer Engine)</h3>
              <p className="text-slate-400 text-sm leading-relaxed font-medium">
                Optimizing for "Zero-Click" searches. We structure data so Google Assistant, Siri, and "People Also Ask" boxes read your content aloud as the absolute truth.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white/[0.02] backdrop-blur-xl p-10 rounded-[2rem] border border-white/10 hover:border-indigo-500/50 transition-all duration-500 group hover:-translate-y-2 shadow-xl">
              <div className="w-16 h-16 bg-indigo-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-indigo-500 transition-colors duration-500">
                <Cpu className="text-indigo-400 group-hover:text-white transition-colors duration-500" size={32} />
              </div>
              <h3 className="text-xl font-mono font-bold text-white mb-4">3. GEO (Generative)</h3>
              <p className="text-slate-400 text-sm leading-relaxed font-medium">
                The Future. We train Large Language Models (LLMs) like <b>Gemini</b> and <b>ChatGPT</b> to cite your brand as the primary source for industry facts.
              </p>
            </div>
          </div>
        </div>

        {/* The Physical Guide (Step-by-Step) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div>
            <span className="font-mono text-indigo-400 text-xs font-black uppercase tracking-[0.4em] mb-6 block">Execution Logic</span>
            <h2 className="text-3xl md:text-5xl font-mono font-black text-white mb-12 leading-tight">How we execute a <br/><span className="text-indigo-500">#1 Ranking</span> Campaign.</h2>
            <p className="text-slate-400 mb-12 text-lg leading-relaxed">
              We don't guess. We follow a strict engineering protocol that treats your website like software, not a brochure.
            </p>
            
            <div className="space-y-12 border-l-2 border-white/10 pl-8 ml-3">
              <div className="relative">
                <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-indigo-500 border-4 border-slate-950"></div>
                <h4 className="text-white font-mono font-bold text-xl mb-3">01. Technical Audit & Core Reconstruction</h4>
                <p className="text-slate-400 leading-relaxed">We strip your code. If your site loads slower than 200ms, Google ignores you. We rebuild the foundation using React/Next.js for perfect scores.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-indigo-500 border-4 border-slate-950"></div>
                <h4 className="text-white font-mono font-bold text-xl mb-3">02. Semantic Entity Mapping</h4>
                <p className="text-slate-400 leading-relaxed">We don't just use keywords. We define your brand as an "Entity" in Google's Knowledge Graph, linking you to industry authority topics permanently.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-indigo-500 border-4 border-slate-950"></div>
                <h4 className="text-white font-mono font-bold text-xl mb-3">03. Content Velocity & Interlinking</h4>
                <p className="text-slate-400 leading-relaxed">We deploy high-volume, high-quality technical content that "surrounds" the topic, forcing Google to see you as the only option.</p>
              </div>
            </div>
          </div>
          
          {/* Visual Representation of the Stack */}
          <div className="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-[3rem] p-10 space-y-8 sticky top-32 shadow-2xl">
             <div className="flex items-center justify-between border-b border-white/10 pb-6">
                <div className="flex items-center gap-4">
                   <Layers className="text-slate-400" />
                   <span className="text-white font-mono font-bold tracking-widest uppercase">The Dominance Stack</span>
                </div>
                <div className="text-emerald text-xs font-black uppercase tracking-widest flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald rounded-full animate-pulse"></span>
                  Live Status
                </div>
             </div>
             
             {/* Stack Items */}
             <div className="space-y-4">
               {[
                 { label: "Application Layer (React)", status: "100/100 Speed" },
                 { label: "Semantic Layer (JSON-LD)", status: "Entity Graph" },
                 { label: "Authority Layer (Backlinks)", status: "High Trust" },
                 { label: "AI Layer (LLM Training)", status: "Generative Opt." }
               ].map((item, i) => (
                 <div key={i} className="bg-slate-900/50 p-6 rounded-2xl flex justify-between items-center border border-white/5 hover:border-indigo/30 transition-colors">
                    <span className="text-sm font-mono font-bold text-slate-300">{item.label}</span>
                    <span className="text-xs font-black text-indigo-400 border border-indigo-500/20 px-3 py-1 rounded bg-indigo-500/10 uppercase tracking-wider">{item.status}</span>
                 </div>
               ))}
             </div>
          </div>
        </div>

        {/* SECTION 2: PRICING (The Offer) */}
        <div className="border-t border-white/10 pt-24">
          <div className="text-center mb-20">
            <span className="font-mono text-indigo-400 text-xs font-black uppercase tracking-[0.4em] mb-4 block">Investment Logic</span>
            <h2 className="text-4xl md:text-6xl font-mono font-black text-white uppercase tracking-tighter">Deploy Your Protocol</h2>
            <p className="text-slate-400 mt-6 text-lg">Current pricing set to promotional rates for Beta Partners.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* TIER 1 */}
            <div className="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-10 hover:border-indigo-500/30 transition-all duration-500 group flex flex-col shadow-xl">
              <h3 className="text-xl font-mono font-black text-white mb-4 tracking-widest">VISIBILITY</h3>
              <div className="text-4xl font-mono font-black text-indigo-400 mb-2">RM 0 <span className="text-sm text-slate-500 font-bold tracking-normal">/ mo</span></div>
              <p className="text-xs text-slate-500 uppercase tracking-widest mb-10 border-b border-white/10 pb-10">For Local Businesses</p>
              <ul className="space-y-6 mb-12 flex-1">
                {["Local Map Pack Dominance", "Google My Business Opt.", "Basic Schema Implementation", "5 Core Keyword Targets"].map(f => (
                  <li key={f} className="text-sm text-slate-300 flex gap-4 font-medium">
                    <CheckCircle2 size={18} className="text-indigo-500 flex-shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 border border-white/10 rounded-xl text-xs font-black text-white uppercase tracking-widest hover:bg-white hover:text-black transition-all">Select Protocol</button>
            </div>

            {/* TIER 2 (Highlighted) */}
            <div className="bg-slate-900 border border-indigo-500 rounded-[2.5rem] p-10 relative transform md:-translate-y-8 shadow-[0_0_50px_rgba(99,102,241,0.25)] flex flex-col">
              <div className="absolute top-0 right-0 bg-indigo-500 text-white text-[10px] font-black px-6 py-2 uppercase tracking-widest rounded-bl-2xl rounded-tr-[2rem]">Recommended</div>
              <h3 className="text-xl font-mono font-black text-white mb-4 tracking-widest">AUTHORITY</h3>
              <div className="text-4xl font-mono font-black text-indigo-400 mb-2">RM 0 <span className="text-sm text-slate-500 font-bold tracking-normal">/ mo</span></div>
              <p className="text-xs text-slate-500 uppercase tracking-widest mb-10 border-b border-white/10 pb-10">For National Brands</p>
              <ul className="space-y-6 mb-12 flex-1">
                {["Everything in Visibility", "AEO (Voice Search) Opt.", "Technical Code Audit", "20 Core Keyword Targets", "Monthly Content Velocity"].map((f, i) => (
                  <li key={f} className={`text-sm flex gap-4 font-medium ${i === 1 ? "text-white font-bold" : "text-slate-300"}`}>
                    <CheckCircle2 size={18} className="text-indigo-500 flex-shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 bg-indigo-600 rounded-xl text-xs font-black text-white uppercase tracking-widest hover:bg-indigo-500 transition-all shadow-lg">Select Protocol</button>
            </div>

            {/* TIER 3 */}
            <div className="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-10 hover:border-indigo-500/30 transition-all duration-500 group flex flex-col shadow-xl">
              <h3 className="text-xl font-mono font-black text-white mb-4 tracking-widest">DOMINANCE</h3>
              <div className="text-4xl font-mono font-black text-indigo-400 mb-2">RM 0 <span className="text-sm text-slate-500 font-bold tracking-normal">/ mo</span></div>
              <p className="text-xs text-slate-500 uppercase tracking-widest mb-10 border-b border-white/10 pb-10">For Market Leaders</p>
              <ul className="space-y-6 mb-12 flex-1">
                {["Everything in Authority", "GEO (AI Generative) Opt.", "Knowledge Graph Engineering", "Unlimited Keywords", "Competitor De-ranking"].map((f, i) => (
                  <li key={f} className={`text-sm flex gap-4 font-medium ${i === 1 ? "text-white font-bold" : "text-slate-300"}`}>
                    <CheckCircle2 size={18} className="text-indigo-500 flex-shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 border border-white/10 rounded-xl text-xs font-black text-white uppercase tracking-widest hover:bg-white hover:text-black transition-all">Select Protocol</button>
            </div>
          </div>
        </div>

      </div>
    </ServiceLayout>
  );
};

export default SeoDominance;