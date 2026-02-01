import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Zap, Code, ArrowRight, Activity, TrendingUp, FlaskConical, Globe, FileText } from 'lucide-react';
import SchemaMarkup from '../components/SchemaMarkup';

const TypewriterHeadline = () => {
  const [text, setText] = useState('');
  const fullText = "We Build Your Business Like It’s Our Own Startup.";
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="text-4xl md:text-7xl lg:text-8xl font-mono font-black text-slate-100 leading-[0.9] tracking-tighter mb-12 uppercase min-h-[1.8em] md:min-h-[2.7em]">
      {text}<span className="text-indigo animate-pulse">|</span>
    </h1>
  );
};

const HomeView: React.FC = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SyncVision Systems",
    "description": "Dual-engine technology firm operating as an Innovation Lab and Strategic Foundry.",
    "url": window.location.origin,
    "sameAs": []
  };

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="animate-fade-in bg-slate-950 text-slate-200">
      <Helmet>
        <title>SyncVision Systems | Strategic Digital Foundry</title>
        <meta name="description" content="We Build Your Business Like It’s Our Own Startup. SyncVision Systems is a dual-engine technology firm operating as an Innovation Lab and Strategic Foundry." />
      </Helmet>
      <SchemaMarkup schema={organizationSchema} />

      <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/10 blur-[160px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 font-mono text-sm font-black uppercase tracking-[0.5em] mb-12 shadow-lg shadow-indigo-500/10 backdrop-blur-md">
            <span className="w-2.5 h-2.5 bg-indigo rounded-full animate-pulse"></span>
            System Mainnet Active
          </div>

          <TypewriterHeadline />

          <p className="max-w-4xl mx-auto text-slate-200 text-lg md:text-2xl font-medium leading-relaxed mb-16 text-balance">
            SyncVision Systems is a <span className="text-white font-bold">dual-engine technology firm</span>. We operate as an <span className="text-indigo-400 font-bold">Innovation Lab</span> building proprietary behavioral tech, and a <span className="text-white font-bold">Strategic Foundry</span> deploying that same engineering power for ambitious businesses.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-24">
            <Link 
              to="/services"
              className="w-full sm:w-auto px-16 py-6 bg-indigo-600 text-white font-mono text-base font-black uppercase tracking-widest rounded-2xl hover:bg-indigo-500 hover:shadow-[0_0_40px_rgba(99,102,241,0.4)] transition-all active:scale-95 flex items-center justify-center gap-4 group"
            >
              Access Dossiers <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link 
              to="/work"
              className="w-full sm:w-auto px-16 py-6 bg-white/5 border border-white/10 text-white font-mono text-base font-black uppercase tracking-widest rounded-2xl hover:bg-white/10 backdrop-blur-md transition-all active:scale-95 shadow-xl"
            >
              Verified Results
            </Link>
          </div>

          {/* Trust Ticker - Bright Green (#10b981) Highlights */}
          <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-10 border-y border-white/5 bg-slate-900/50 backdrop-blur-md overflow-hidden">
             <div className="animate-marquee whitespace-nowrap flex gap-24 items-center">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex gap-24 text-sm font-mono font-black uppercase tracking-[0.6em] text-slate-400 items-center">
                    <span className="flex items-center gap-4">
                      <TrendingUp size={18} className="text-emerald"/> 
                      <span className="text-emerald font-bold brightness-125">Rank #1 on Google Search</span>
                    </span>
                    <span className="flex items-center gap-4">
                      <Zap size={18} className="text-indigo"/> 
                      <span className="text-emerald font-bold brightness-125">AI Overview Captured</span>
                    </span>
                    <span className="flex items-center gap-4">
                      <Activity size={18} className="text-emerald"/> 
                      <span className="text-emerald font-bold brightness-125">420% Lead Increase</span>
                    </span>
                    <span className="flex items-center gap-4">
                      <Code size={18} /> 
                      <span className="text-emerald font-bold brightness-125">Active R&D Labs</span>
                    </span>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* SEO Dominance Preview Section */}
      <section className="py-32 px-6 bg-slate-950 relative overflow-hidden">
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald/5 blur-[120px] rounded-full pointer-events-none"></div>
         <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
               <div>
                  <span className="font-mono text-emerald text-xs font-black uppercase tracking-[0.8em] block mb-6">Verified Output</span>
                  <h2 className="text-4xl md:text-6xl font-mono font-black text-slate-100 uppercase tracking-tighter leading-none mb-8">
                    We Don't Guess.<br/> We <span className="text-emerald">Rank.</span>
                  </h2>
                  <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-md">
                    Most agencies sell "optimization". We sell dominance. See how we took a legacy industrial manufacturer to #1 on Google in 20 days.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-6">
                    <Link to="/services/seo-dominance" className="inline-flex items-center gap-3 text-emerald font-mono text-sm font-black uppercase tracking-widest hover:gap-6 transition-all">
                      View Case Study <ArrowRight size={16} />
                    </Link>
                    <Link to="/work" className="inline-flex items-center gap-3 text-slate-500 font-mono text-sm font-black uppercase tracking-widest hover:text-slate-300 transition-all group">
                      Full Archive <FileText size={16} className="group-hover:text-emerald transition-colors" />
                    </Link>
                  </div>
               </div>
               <div className="relative bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
                  <div className="absolute -top-6 -right-6 bg-emerald text-obsidian font-mono font-black text-sm px-4 py-2 rounded-lg uppercase tracking-widest shadow-lg transform rotate-3">Live Data</div>
                  <div className="space-y-6 font-mono">
                     <div className="flex justify-between items-end border-b border-white/10 pb-4">
                        <div>
                           <div className="text-sm text-slate-500 uppercase tracking-widest mb-1">Target Keyword</div>
                           <div className="text-slate-200 font-bold">"Pre-insulated Pipe Manufacturer"</div>
                        </div>
                        <div className="text-emerald font-black text-xl">RANK #1</div>
                     </div>
                     <div className="flex justify-between items-end border-b border-white/10 pb-4">
                        <div>
                           <div className="text-sm text-slate-500 uppercase tracking-widest mb-1">Time to Rank</div>
                           <div className="text-slate-200 font-bold">Legacy Site Migration</div>
                        </div>
                        <div className="text-emerald font-black text-xl">20 DAYS</div>
                     </div>
                     <div className="flex justify-between items-end">
                        <div>
                           <div className="text-sm text-slate-500 uppercase tracking-widest mb-1">AI Overview</div>
                           <div className="text-slate-200 font-bold">Google Gemini / SGE</div>
                        </div>
                        <div className="text-emerald font-black text-xl">CAPTURED</div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Founder's Edge Section */}
      <section className="py-48 px-6 bg-slate-900/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <div className="space-y-12">
            <span className="font-mono text-indigo text-xs font-black uppercase tracking-[0.8em] block">The Architects</span>
            <h2 className="text-5xl md:text-7xl font-mono font-black text-slate-100 uppercase tracking-tighter leading-none">THE FOUNDER'S <br/><span className="text-emerald italic">EDGE.</span></h2>
            <div className="space-y-10 text-slate-200 text-xl md:text-2xl leading-relaxed font-medium">
              <p>We are Computer Science students and Founders first. This isn't just a job to us—it's an obsession.</p>
              <ul className="space-y-8">
                <li className="flex gap-6">
                  <div className="w-2 h-2 bg-indigo rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <span className="text-slate-100 font-bold">Fresh Tech Only:</span>
                    <p className="text-lg mt-2 font-light">We don't use legacy code. We use the modern stack (Next.js, Flutter) that powers our own innovations like LifeSync.</p>
                  </div>
                </li>
                <li className="flex gap-6">
                  <div className="w-2 h-2 bg-indigo rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <span className="text-slate-100 font-bold">Results Driven:</span>
                    <p className="text-lg mt-2 font-light">We treat your project like our own startup. We don't stop until we hit Rank #1.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="relative aspect-square rounded-[4rem] overflow-hidden border border-slate-100/10 shadow-2xl group">
             <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200" loading="lazy" className="w-full h-full object-cover grayscale opacity-40 group-hover:scale-105 transition-transform duration-[3s]" alt="Founder Core" />
             <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
             <div className="absolute bottom-12 left-12 right-12 p-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-[2rem]">
                <p className="text-slate-100 font-bold text-lg uppercase tracking-widest italic">
                  "We don't just finish the job; we obsess over hitting Rank #1."
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-mono font-black text-slate-100 uppercase tracking-tighter leading-none">
            You Own What We Build.
          </h2>
          <p className="mt-8 text-slate-200 text-xl leading-relaxed">
            We provide the source code because we believe in ownership. No hidden locks. You own what we build.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomeView;