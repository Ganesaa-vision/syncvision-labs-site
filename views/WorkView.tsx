import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation } from 'react-router-dom';
import { 
  ArrowUpRight, Factory, BrainCircuit, HeartPulse, 
  Cpu, GitBranch, Terminal, Globe, Lock, TrendingUp, MessageSquare, ShoppingCart
} from 'lucide-react'; 

const Work: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-slate-200 font-sans selection:bg-indigo-500/30 animate-fade-in-up">
      
      {/* === SEO & GEO STRATEGY === */}
      {/* Targeted Keywords: "Industrial Web Design", "Clinic Management System", "Productivity App Developer" */}
      <Helmet>
        <title>Our Work | Industrial & Healthcare Digital Systems - SyncVision Labs</title>
        <meta name="description" content="Case Studies: Digital Transformation for Manufacturing (Pipe Industry) and Proprietary Healthcare Software (MediMy). View our engineering portfolio." />
        <meta name="keywords" content="Industrial Web Design Malaysia, Clinic Management System, Flutter App Developer, LifeSync App, Manufacturing Digitalization" />
      </Helmet>

      <div className="pt-24 md:pt-32 pb-12 md:pb-20">
        
        {/* === HERO SECTION === */}
        <section className="px-6 max-w-7xl mx-auto mb-24 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-indigo-500/30 bg-indigo-900/10 text-indigo-400 text-xs font-mono mb-6">
            <GitBranch className="w-3 h-3" />
            DEPLOYMENT LOG: 2024-2025
          </div>
          <h1 className="text-4xl md:text-7xl font-bold tracking-tighter text-white mb-6 leading-tight">
            ENGINEERED <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-400">
              REALITY.
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            We don't just design websites; we architect digital ecosystems. 
            From <span className="text-white">Industrial Manufacturing</span> to <span className="text-white">Healthcare Operations</span>.
          </p>
        </section>

        {/* === SECTION 1: CLIENT CASE STUDY (THE PIPE MANUFACTURER) === */}
        <section className="px-6 max-w-7xl mx-auto mb-32">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold text-white">CLIENT OPERATIONS</h2>
            <div className="h-[1px] bg-slate-800 flex-grow"></div>
          </div>

          <p className="text-xl text-slate-400 max-w-3xl mb-16 leading-relaxed">
            We engineer high-performance websites for Malaysian SMEs and Startups. Whether you need a proprietary Next.js Web App or an easy-to-edit WordPress (Elementor) site, we guarantee &lt;2s load times.
          </p>

          {/* === CLIENT PROJECT: PIPE MANUFACTURING GIANT === */}
          <div className="group relative rounded-3xl border border-slate-800 bg-slate-900/40 overflow-hidden hover:border-indigo-500/50 transition-all duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              
              {/* LEFT SIDE: VISUAL & BADGES */}
              <div className="min-h-[400px] bg-slate-800 relative overflow-hidden flex flex-col justify-end">
                {/* Background Gradient (Replace with actual screenshot later) */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900/40 group-hover:scale-105 transition-transform duration-700"></div>
                
                {/* Central Icon */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 pointer-events-none">
                  <Factory className="w-24 h-24 text-slate-700 mb-6 group-hover:text-indigo-500 transition-colors duration-500" />
                  <span className="font-mono text-slate-500 text-sm tracking-[0.2em] uppercase border border-slate-700 px-4 py-2 rounded">
                    Industrial Sector
                  </span>
                </div>

                {/* Floating Stats Overlay */}
                <div className="relative z-10 p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-slate-900/80 backdrop-blur border border-green-500/30 p-3 rounded-lg">
                      <div className="text-green-400 font-bold text-lg">RANK #1</div>
                      <div className="text-[10px] text-slate-400 font-mono">IN 20 DAYS</div>
                    </div>
                    <div className="bg-slate-900/80 backdrop-blur border border-indigo-500/30 p-3 rounded-lg">
                      <div className="text-indigo-400 font-bold text-lg">1,000+</div>
                      <div className="text-[10px] text-slate-400 font-mono">PRODUCTS LIVE</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE: THE "AFTER ACTION REPORT" CONTENT */}
              <div className="p-8 md:p-12 flex flex-col justify-center border-l border-slate-800">
                
                {/* Header Tags */}
                <div className="flex items-center gap-2 mb-6">
                  <span className="px-3 py-1 bg-green-500/10 text-green-400 text-xs font-bold rounded border border-green-500/20 flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    LIVE SYSTEM
                  </span>
                  <span className="px-3 py-1 bg-slate-800 text-slate-400 text-xs rounded border border-slate-700">B2B MANUFACTURING</span>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                  Pipe Manufacturing <br/>
                  <span className="text-indigo-400">Digital Transformation</span>
                </h3>

                {/* Detailed Description */}
                <div className="space-y-6 mb-8 text-slate-300 text-sm leading-relaxed border-b border-slate-800 pb-8">
                  <p>
                    <strong className="text-white block mb-1">THE MISSION:</strong> 
                    Transform a manual, paper-based catalog into a high-volume digital sales engine. The client needed to manage massive inventory and handle customer inquiries without hiring new staff.
                  </p>
                  <p>
                    <strong className="text-white block mb-1">ENGINEERING EXECUTION:</strong> 
                    We deployed a robust <span className="text-indigo-300">E-Commerce Infrastructure</span> hosting over <strong>1,000+ industrial products</strong>. We replaced manual support with a custom <span className="text-indigo-300">WhatsApp Automation Bot</span> that handles 95% of daily chats—auto-replying to clients instantly.
                  </p>
                  <p>
                    <strong className="text-white block mb-1">SEO DOMINANCE:</strong> 
                    Using "Programmatic SEO," we targeted industrial keywords aggressively. The site went from zero visibility to <span className="text-green-400 font-bold">Rank #1 on Google in just 20 days</span>.
                  </p>
                </div>

                {/* The Achievement Grid (Specific Stats) */}
                <div className="grid grid-cols-2 gap-x-4 gap-y-6 mb-8">
                  <div>
                    <div className="flex items-center gap-2 text-white font-bold mb-1">
                      <TrendingUp className="w-4 h-4 text-green-400" /> TOP 3 RANK
                    </div>
                    <p className="text-xs text-slate-500">FOR 5 MAJOR KEYWORDS</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-white font-bold mb-1">
                      <TrendingUp className="w-4 h-4 text-green-400" /> TOP 10 RANK
                    </div>
                    <p className="text-xs text-slate-500">FOR 5 SECONDARY KEYWORDS</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-white font-bold mb-1">
                      <MessageSquare className="w-4 h-4 text-purple-400" /> 95% AUTOMATED
                    </div>
                    <p className="text-xs text-slate-500">WHATSAPP EFFICIENCY</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-white font-bold mb-1">
                      <ShoppingCart className="w-4 h-4 text-yellow-400" /> INVENTORY OS
                    </div>
                    <p className="text-xs text-slate-500">1K+ SKU MANAGEMENT</p>
                  </div>
                </div>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2">
                  {['WhatsApp API', 'SEO Schema', 'E-Commerce', 'Automation'].map((tag) => (
                    <span key={tag} className="text-[10px] font-mono px-2 py-1 bg-slate-950 rounded text-slate-400 border border-slate-800">
                      #{tag}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* === SECTION 2: INTERNAL INNOVATION (R&D) === */}
        <section className="px-6 max-w-7xl mx-auto mb-32">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold text-white">SYNCVISION R&D LABS</h2>
            <div className="h-[1px] bg-slate-800 flex-grow"></div>
            <span className="text-xs font-mono text-indigo-400 animate-pulse">2 PROJECTS IN DEVELOPMENT</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* INNOVATION 1: LIFESYNC */}
            <div className="group relative bg-slate-900/20 border border-slate-800 p-8 rounded-3xl hover:border-purple-500/50 transition-all duration-300">
              <div className="absolute top-6 right-6">
                <span className="px-3 py-1 bg-yellow-500/10 text-yellow-400 text-xs font-bold rounded border border-yellow-500/20 flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div> IN DEVELOPMENT
                </span>
              </div>
              
              <div className="mb-8 p-4 bg-slate-950 rounded-2xl w-fit border border-slate-800 group-hover:border-purple-500/30">
                <BrainCircuit className="w-10 h-10 text-purple-400" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2">LifeSync: The Second Brain</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                A revolutionary productivity ecosystem built on the "Second Brain" methodology. LifeSync integrates tasks, notes, and goals into a single "Universal Mind" powered by AI.
              </p>
              
              <div className="space-y-3 mb-8 border-t border-slate-800/50 pt-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500">Architecture</span>
                  <span className="text-white font-mono">Flutter (Mobile)</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500">Intelligence</span>
                  <span className="text-white font-mono">Gemini AI API</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500">Database</span>
                  <span className="text-white font-mono">Supabase Realtime</span>
                </div>
              </div>

              <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
                <div className="bg-purple-500 h-full w-[70%]"></div>
              </div>
              <div className="flex justify-between mt-2 text-xs font-mono text-slate-500">
                <span>PROGRESS</span>
                <span>70% COMPLETE</span>
              </div>
            </div>

            {/* INNOVATION 2: MEDIMY */}
            <div className="group relative bg-slate-900/20 border border-slate-800 p-8 rounded-3xl hover:border-emerald-500/50 transition-all duration-300">
              <div className="absolute top-6 right-6">
                <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs font-bold rounded border border-blue-500/20 flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div> BETA TESTING
                </span>
              </div>
              
              <div className="mb-8 p-4 bg-slate-950 rounded-2xl w-fit border border-slate-800 group-hover:border-emerald-500/30">
                <HeartPulse className="w-10 h-10 text-emerald-400" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2">MediMy: Clinic OS</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                A comprehensive Clinic Management System (CMS) designed for modern healthcare facilities. Handles patient records, appointment scheduling, and inventory in one secure dashboard.
              </p>
              
              <div className="space-y-3 mb-8 border-t border-slate-800/50 pt-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500">Platform</span>
                  <span className="text-white font-mono">Web & Tablet</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500">Backend</span>
                  <span className="text-white font-mono">PHP / Firebase</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500">Security</span>
                  <span className="text-white font-mono">End-to-End Encrypted</span>
                </div>
              </div>

              <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-full w-[85%]"></div>
              </div>
              <div className="flex justify-between mt-2 text-xs font-mono text-slate-500">
                <span>PROGRESS</span>
                <span>85% COMPLETE</span>
              </div>
            </div>

          </div>
        </section>

        {/* === SECTION 3: THE "HOW WE BUILD" PROTOCOL === */}
        <section className="px-6 max-w-7xl mx-auto mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">ENGINEERING PROTOCOL</h2>
            <p className="text-slate-400">We don't guess. We follow a strict military-grade development cycle.</p>
          </div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 hidden md:block -z-10"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Strategy', icon: <Terminal />, desc: 'Deep market analysis and technical roadmap planning.' },
                { step: '02', title: 'Design', icon: <Globe />, desc: 'High-fidelity UI/UX prototyping and system architecture.' },
                { step: '03', title: 'Development', icon: <Cpu />, desc: 'Clean code writing using Next.js, Flutter, and Supabase.' },
                { step: '04', title: 'Deploy', icon: <Lock />, desc: 'Server configuration, security hardening, and launch.' }
              ].map((phase) => (
                <div key={phase.step} className="bg-[#0a0a0a] border border-slate-800 p-8 rounded-2xl text-center hover:-translate-y-2 transition-transform duration-300">
                  <div className="text-5xl font-bold text-slate-800 mb-4">{phase.step}</div>
                  <div className="flex justify-center mb-4 text-indigo-400">{phase.icon}</div>
                  <h4 className="text-xl font-bold text-white mb-2">{phase.title}</h4>
                  <p className="text-slate-400 text-sm">{phase.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === CTA SECTION === */}
        <section className="px-6 max-w-4xl mx-auto text-center">
          <div className="p-12 rounded-3xl bg-gradient-to-b from-indigo-900/20 to-transparent border border-indigo-500/30 backdrop-blur-sm">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Have a Vision? Let's Engineer It.
            </h2>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto">
              Whether it's a corporate portal or a complex SaaS application, we have the experience to build it right.
            </p>
            <Link to="/contact" className="inline-block bg-white text-black px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              Start Your Project
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Work;