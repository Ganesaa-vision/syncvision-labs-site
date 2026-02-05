import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation } from 'react-router-dom';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { 
  Code, Cpu, ShieldCheck, Zap, 
  Layers, Database, ArrowRight, Check, 
  Globe, RefreshCw, LayoutTemplate,
  Flame, TrendingUp, Smartphone, Lock,
  Search, Rocket, Terminal
} from 'lucide-react'; 

const WebArchitecture: React.FC = () => {
  const { hash } = useLocation();

  // Handle scroll to anchor on load
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        setTimeout(() => element.scrollIntoView({ behavior: 'smooth', block: 'center' }), 100);
      }
    }
  }, [hash]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-slate-200 font-sans selection:bg-indigo-500/30">
      
      {/* === GEO & SEO MASTER CONFIGURATION === */}
      <Helmet>
        <title>Web Development Malaysia | Custom Next.js & High-Performance WordPress</title>
        <meta name="description" content="Top-rated Web Development Agency in Malaysia. We build <100ms load time websites using Next.js and Enterprise WordPress. 100% Source Code Ownership for SMEs." />
        <meta name="keywords" content="Web Design Malaysia, Custom Web App KL, NextJS Developer, Fix Slow Website, SME Digital Grant Standard, React Agency Malaysia" />
      </Helmet>

      <Navbar />

      <main className="pt-32 pb-20">
        
        {/* === HERO SECTION: "THE ARCHITECT" === */}
        <section className="px-6 max-w-7xl mx-auto mb-32 relative">
           {/* Background Elements */}
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none"></div>
           <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-500/10 blur-[100px] rounded-full pointer-events-none"></div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-indigo-500/30 bg-indigo-900/10 text-indigo-400 text-xs font-mono mb-8">
                <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></span>
                MALAYSIAN ENGINEERING STANDARD
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-8 leading-[1.1]">
                WEB INFRASTRUCTURE <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400">
                  BUILT FOR SPEED.
                </span>
              </h1>
              <p className="text-xl text-slate-400 max-w-xl leading-relaxed mb-10 border-l-2 border-indigo-500/30 pl-6">
                Most agencies in KL sell you slow "templates." We engineer 
                <span className="text-white font-bold"> Proprietary Digital Assets </span> 
                that load in under 100ms, rank #1 on Google, and belong 100% to you.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-indigo-50 transition-colors flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]">
                  Initialize Build <ArrowRight className="w-4 h-4" />
                </Link>
                <div className="px-8 py-4 border border-slate-700 rounded-full text-slate-300 font-mono text-sm flex items-center gap-2 bg-slate-900/50 backdrop-blur-sm">
                  <Flame className="w-4 h-4 text-orange-500" />
                  Performance: 100/100
                </div>
              </div>
            </div>
            
            {/* Visual: Code Terminal */}
            <div className="lg:w-1/2 relative hidden lg:block">
              <div className="relative bg-[#0F1117] border border-slate-800 p-1 rounded-xl shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
                 <div className="bg-[#0a0a0a] rounded-lg p-6 overflow-hidden">
                    <div className="flex items-center justify-between mb-6 border-b border-slate-800 pb-4">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <span className="text-xs font-mono text-slate-500">deploy_production.sh</span>
                    </div>
                    <div className="font-mono text-xs space-y-3">
                      <div className="flex gap-2"><span className="text-green-400">➜</span> <span className="text-white">Initializing build sequence...</span></div>
                      <div className="flex gap-2"><span className="text-green-400">➜</span> <span className="text-slate-400">Optimizing assets (Next.js 14)</span></div>
                      <div className="flex gap-2"><span className="text-green-400">➜</span> <span className="text-slate-400">Injecting SEO Schema (JSON-LD)</span></div>
                      <div className="flex gap-2"><span className="text-green-400">➜</span> <span className="text-indigo-400">Performance Audit: 100/100</span></div>
                      <div className="flex gap-2"><span className="text-green-400">➜</span> <span className="text-indigo-400">Security Check: PASSED</span></div>
                      <div className="mt-4 p-3 bg-indigo-500/10 border border-indigo-500/20 rounded text-indigo-300">
                         System Ready. Waiting for deployment command...
                      </div>
                    </div>
                 </div>
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-slate-900 border border-white/10 p-4 rounded-xl shadow-xl flex items-center gap-3 animate-bounce delay-700">
                 <div className="bg-green-500/20 p-2 rounded-lg text-green-400"><TrendingUp size={20} /></div>
                 <div>
                    <div className="text-[10px] text-slate-500 uppercase font-bold">Conversion Rate</div>
                    <div className="text-white font-bold">+420%</div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* === SECTION 2: "FIREBALL" PERFORMANCE METRICS === */}
        {/* The user requested an "Achievement" section. This shows WHY you are different. */}
        <section className="px-6 max-w-7xl mx-auto mb-32">
          <div className="p-1 rounded-[2.5rem] bg-gradient-to-r from-orange-500/20 via-red-500/20 to-purple-500/20">
            <div className="bg-[#0a0a0a] rounded-[2.4rem] p-8 md:p-16 border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-32 bg-orange-500/10 blur-[100px] rounded-full"></div>
              
              <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16 relative z-10">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white flex items-center gap-3 mb-4">
                    <Flame className="w-8 h-8 text-orange-500" />
                    PROJECT FIREBALL
                  </h2>
                  <p className="text-slate-400 max-w-lg text-lg">Our average performance benchmarks across all Malaysian client deployments. We don't accept slow.</p>
                </div>
                <div className="text-right">
                  <div className="text-5xl md:text-6xl font-black text-white tracking-tighter">99.9%</div>
                  <div className="text-sm text-slate-500 font-mono uppercase tracking-widest mt-2">GLOBAL UPTIME</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
                <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 hover:border-yellow-500/50 transition-colors group">
                  <Zap className="w-10 h-10 text-yellow-400 mb-6 group-hover:scale-110 transition-transform" />
                  <div className="text-3xl font-bold text-white mb-2">&lt; 100ms</div>
                  <div className="text-xs text-slate-500 font-mono uppercase tracking-widest">LATENCY (MY)</div>
                </div>
                <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 hover:border-emerald-500/50 transition-colors group">
                  <ShieldCheck className="w-10 h-10 text-emerald-400 mb-6 group-hover:scale-110 transition-transform" />
                  <div className="text-3xl font-bold text-white mb-2">ZERO</div>
                  <div className="text-xs text-slate-500 font-mono uppercase tracking-widest">BREACHES</div>
                </div>
                <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 hover:border-indigo-500/50 transition-colors group">
                  <TrendingUp className="w-10 h-10 text-indigo-400 mb-6 group-hover:scale-110 transition-transform" />
                  <div className="text-3xl font-bold text-white mb-2">100/100</div>
                  <div className="text-xs text-slate-500 font-mono uppercase tracking-widest">LIGHTHOUSE</div>
                </div>
                <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 hover:border-purple-500/50 transition-colors group">
                  <Database className="w-10 h-10 text-purple-400 mb-6 group-hover:scale-110 transition-transform" />
                  <div className="text-3xl font-bold text-white mb-2">OWNED</div>
                  <div className="text-xs text-slate-500 font-mono uppercase tracking-widest">SOURCE CODE</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* === NEW SECTION: THE ENGINEERING PROTOCOL === */}
        <section className="px-6 max-w-7xl mx-auto mb-32">
           <div className="text-center mb-20">
              <span className="text-indigo-500 font-mono text-xs font-black uppercase tracking-[0.3em] mb-4 block">The Process</span>
              <h2 className="text-3xl md:text-5xl font-bold text-white">ENGINEERING PROTOCOL</h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              {/* Connecting Line (Desktop) */}
              <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500/0 via-indigo-500/50 to-indigo-500/0 z-0"></div>

              {[
                { step: "01", title: "Discovery", desc: "We audit your current infrastructure and define the technical requirements.", icon: <Search className="w-6 h-6" /> },
                { step: "02", title: "Architecture", desc: "We design the database schema, API routes, and frontend logic.", icon: <Layers className="w-6 h-6" /> },
                { step: "03", title: "Development", desc: "We code the system using React, Next.js, or WordPress Elementor.", icon: <Code className="w-6 h-6" /> },
                { step: "04", title: "Deployment", desc: "We launch on Vercel/AWS and hand over 100% of the source code.", icon: <Rocket className="w-6 h-6" /> }
              ].map((item, i) => (
                <div key={i} className="relative z-10 bg-[#0a0a0a] p-6 rounded-xl border border-slate-800 hover:border-indigo-500/50 transition-all group">
                   <div className="w-12 h-12 bg-slate-900 rounded-full border border-slate-700 flex items-center justify-center text-white mb-6 group-hover:bg-indigo-600 group-hover:border-indigo-500 transition-colors">
                      <span className="font-mono font-bold">{item.step}</span>
                   </div>
                   <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                   <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
           </div>
        </section>

        {/* === NEW SECTION: THE ARSENAL (TECH STACK) === */}
        <section className="px-6 max-w-7xl mx-auto mb-32 border-y border-white/5 py-20 bg-slate-900/20">
           <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="md:w-1/3">
                 <h2 className="text-3xl font-bold text-white mb-6">THE ARSENAL.</h2>
                 <p className="text-slate-400 leading-relaxed">
                    We don't use outdated tools. We use the same tech stack as Netflix, TikTok, and Uber to build your Malaysian business infrastructure.
                 </p>
              </div>
              <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-4">
                 {[
                   { name: "Next.js 14", type: "Framework" },
                   { name: "React", type: "Library" },
                   { name: "TypeScript", type: "Language" },
                   { name: "Tailwind", type: "Styling" },
                   { name: "Supabase", type: "Database" },
                   { name: "Vercel", type: "Cloud" },
                   { name: "Stripe", type: "Payments" },
                   { name: "OpenAI", type: "Intelligence" }
                 ].map((tech, i) => (
                   <div key={i} className="p-4 bg-slate-950 border border-slate-800 rounded-lg text-center hover:border-indigo-500/30 transition-colors">
                      <div className="text-white font-bold text-sm mb-1">{tech.name}</div>
                      <div className="text-xs text-slate-500 font-mono uppercase">{tech.type}</div>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* === SECTION 3: RECENT DEPLOYMENTS (PREVIEW) === */}
        <section className="px-6 max-w-7xl mx-auto mb-32">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-white">RECENT DEPLOYMENTS</h2>
            <Link to="/work" className="text-indigo-400 hover:text-white transition-colors text-sm font-mono flex items-center gap-2">VIEW ALL <ArrowRight size={14}/></Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="group relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500">
              <div className="h-72 bg-slate-800 relative overflow-hidden">
                {/* Placeholder for Project Image - Use a gradient for now */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-slate-900 to-black group-hover:scale-105 transition-transform duration-700"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-mono text-indigo-300/50 text-5xl font-black tracking-tighter">FINTECH</span>
                </div>
                {/* Overlay Content */}
                <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-slate-950 to-transparent">
                   <div className="flex gap-2 mb-2">
                      <span className="px-2 py-1 bg-indigo-500 text-white text-[10px] font-bold uppercase tracking-wider rounded">Next.js</span>
                      <span className="px-2 py-1 bg-white text-black text-[10px] font-bold uppercase tracking-wider rounded">Dashboard</span>
                   </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-white mb-2">Corporate Finance Dashboard</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  Migrated a legacy Excel-based workflow into a secure, real-time Web App for a KL financial firm. Features role-based access and real-time data visualization.
                </p>
                <div className="flex items-center gap-4 text-xs font-mono text-slate-500">
                   <span className="flex items-center gap-2"><Database size={12}/> Supabase</span>
                   <span className="flex items-center gap-2"><Lock size={12}/> AES-256</span>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500">
              <div className="h-72 bg-slate-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-slate-900 to-black group-hover:scale-105 transition-transform duration-700"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-mono text-emerald-300/50 text-5xl font-black tracking-tighter">RETAIL</span>
                </div>
                <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-slate-950 to-transparent">
                   <div className="flex gap-2 mb-2">
                      <span className="px-2 py-1 bg-emerald-500 text-white text-[10px] font-bold uppercase tracking-wider rounded">Shopify</span>
                      <span className="px-2 py-1 bg-white text-black text-[10px] font-bold uppercase tracking-wider rounded">Headless</span>
                   </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-white mb-2">High-Volume Retail Store</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  A custom headless storefront that handles 10,000+ visitors during sale events with zero downtime. Integrated with local FPX payment gateways.
                </p>
                <div className="flex items-center gap-4 text-xs font-mono text-slate-500">
                   <span className="flex items-center gap-2"><Globe size={12}/> Global CDN</span>
                   <span className="flex items-center gap-2"><Zap size={12}/> 0.4s Load</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* === SECTION 4: SERVICE PACKAGES (MARKET OPTIMIZED) === */}
        <section className="px-6 max-w-7xl mx-auto mb-32" id="packages">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">ENGINEERING TIERS</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Transparent pricing. No hidden "maintenance" fees. You own the asset.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* TIER 1: RAPID LAUNCH (WORDPRESS) */}
            <div id="wordpress" className="p-10 rounded-[2rem] border border-slate-800 bg-slate-900/20 hover:border-pink-500/50 transition-all duration-300 relative group flex flex-col">
              <div className="text-pink-500 font-mono text-xs mb-6 flex items-center gap-2 uppercase tracking-widest font-bold">
                <Zap className="w-4 h-4" /> Rapid Deployment
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">CMS / WordPress</h3>
              <p className="text-slate-400 text-sm mb-8 leading-relaxed">Perfect for Startups & Personal Brands needing a professional launch in &lt;7 days.</p>
              
              <div className="mb-8 pb-8 border-b border-slate-800">
                <div className="text-4xl font-bold text-white mb-1">RM 0</div>
                <div className="text-xs text-slate-500 font-mono uppercase">STARTING PRICE (PROMO)</div>
              </div>
              
              <ul className="space-y-4 mb-10 flex-1">
                <li className="flex gap-3 text-sm text-slate-300">
                  <Check className="w-5 h-5 text-pink-500 flex-shrink-0" /> 
                  Custom Elementor Pro Design
                </li>
                <li className="flex gap-3 text-sm text-slate-300">
                  <Check className="w-5 h-5 text-pink-500 flex-shrink-0" /> 
                  Mobile Responsive (iOS/Android)
                </li>
                <li className="flex gap-3 text-sm text-slate-300">
                  <Check className="w-5 h-5 text-pink-500 flex-shrink-0" /> 
                  WhatsApp Chat Integration
                </li>
                <li className="flex gap-3 text-sm text-slate-300">
                  <Check className="w-5 h-5 text-pink-500 flex-shrink-0" /> 
                  Basic SEO Setup
                </li>
              </ul>
              <Link to="/contact" className="block w-full py-4 text-center rounded-xl border border-slate-700 hover:bg-pink-500 hover:text-white hover:border-pink-500 transition-all font-bold text-sm uppercase tracking-wider">
                Select Starter
              </Link>
            </div>

            {/* TIER 2: CUSTOM ENGINEERING (BEST SELLER) */}
            <div id="custom" className="p-10 rounded-[2rem] border border-indigo-500 bg-indigo-900/10 relative transform md:-translate-y-4 flex flex-col shadow-[0_0_50px_rgba(79,70,229,0.15)]">
              <div className="absolute top-0 right-0 bg-indigo-500 text-white text-[10px] font-bold px-4 py-2 rounded-bl-xl rounded-tr-[1.8rem] uppercase tracking-widest">
                Most Popular
              </div>
              <div className="text-indigo-400 font-mono text-xs mb-6 flex items-center gap-2 uppercase tracking-widest font-bold">
                <Code className="w-4 h-4" /> Proprietary Asset
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">Custom Next.js</h3>
              <p className="text-indigo-200/70 text-sm mb-8 leading-relaxed">For SMEs who need to dominate Google Rankings and demand 100% security.</p>
              
              <div className="mb-8 pb-8 border-b border-indigo-500/30">
                <div className="text-4xl font-bold text-white mb-1">RM 0</div>
                <div className="text-xs text-indigo-300/50 font-mono uppercase">CUSTOM QUOTATION</div>
              </div>
              
              <ul className="space-y-4 mb-10 flex-1">
                <li className="flex gap-3 text-sm text-white font-medium">
                  <Check className="w-5 h-5 text-indigo-500 flex-shrink-0" /> 
                  <span className="text-indigo-100">Next.js 14 Architecture</span>
                </li>
                <li className="flex gap-3 text-sm text-white font-medium">
                  <Check className="w-5 h-5 text-indigo-500 flex-shrink-0" /> 
                  <span className="text-indigo-100">&lt; 1s Load Time Guarantee</span>
                </li>
                <li className="flex gap-3 text-sm text-white font-medium">
                  <Check className="w-5 h-5 text-indigo-500 flex-shrink-0" /> 
                  <span className="text-indigo-100">Advanced SEO Schema (GEO)</span>
                </li>
                <li className="flex gap-3 text-sm text-white font-medium">
                  <Check className="w-5 h-5 text-indigo-500 flex-shrink-0" /> 
                  <span className="text-indigo-100">100% Source Code Ownership</span>
                </li>
                <li className="flex gap-3 text-sm text-white font-medium">
                  <Check className="w-5 h-5 text-indigo-500 flex-shrink-0" /> 
                  <span className="text-indigo-100">Multi-Language Support</span>
                </li>
              </ul>
              <Link to="/contact" className="block w-full py-4 text-center rounded-xl bg-indigo-600 text-white hover:bg-indigo-500 transition-all font-bold text-sm uppercase tracking-wider shadow-lg shadow-indigo-500/25">
                Initialize Build
              </Link>
            </div>

            {/* TIER 3: ENTERPRISE SYSTEM */}
            <div className="p-10 rounded-[2rem] border border-slate-800 bg-slate-900/20 hover:border-emerald-500/50 transition-all duration-300 relative group flex flex-col">
              <div className="text-emerald-500 font-mono text-xs mb-6 flex items-center gap-2 uppercase tracking-widest font-bold">
                <Database className="w-4 h-4" /> Scalable System
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">Web Application</h3>
              <p className="text-slate-400 text-sm mb-8 leading-relaxed">Complex logic, user logins, dashboards, and payment flows (SaaS / E-com).</p>
              
              <div className="mb-8 pb-8 border-b border-slate-800">
                <div className="text-4xl font-bold text-white mb-1">RM 0</div>
                <div className="text-xs text-slate-500 font-mono uppercase">ENTERPRISE QUOTE</div>
              </div>
              
              <ul className="space-y-4 mb-10 flex-1">
                <li className="flex gap-3 text-sm text-slate-300">
                  <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" /> 
                  Supabase / SQL Database
                </li>
                <li className="flex gap-3 text-sm text-slate-300">
                  <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" /> 
                  User Auth & Dashboards
                </li>
                <li className="flex gap-3 text-sm text-slate-300">
                  <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" /> 
                  Payment Gateway (FPX/Stripe)
                </li>
                <li className="flex gap-3 text-sm text-slate-300">
                  <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" /> 
                  AI Agent Integration
                </li>
              </ul>
              <Link to="/contact" className="block w-full py-4 text-center rounded-xl border border-slate-700 hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-all font-bold text-sm uppercase tracking-wider">
                Discuss Architecture
              </Link>
            </div>

          </div>
        </section>

        {/* === SECTION 5: FAQ (AEO OPTIMIZED) === */}
        <section className="px-6 max-w-4xl mx-auto mb-20">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">SYSTEM PROTOCOLS (FAQ)</h2>
          <div className="space-y-4">
            <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-indigo-500/30 transition-colors">
              <h4 className="text-white font-bold mb-3 flex items-center gap-3"><Terminal className="w-4 h-4 text-indigo-500"/> Do I own the code after payment?</h4>
              <p className="text-slate-400 text-sm leading-relaxed">Yes. Unlike other agencies, we transfer the full GitHub repository and Intellectual Property (IP) rights to you upon completion. No monthly rental fees.</p>
            </div>
            <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-indigo-500/30 transition-colors">
              <h4 className="text-white font-bold mb-3 flex items-center gap-3"><Terminal className="w-4 h-4 text-indigo-500"/> Can you fix a slow WordPress site?</h4>
              <p className="text-slate-400 text-sm leading-relaxed">Affirmative. We perform a "Rescue Operation" where we optimize images, caching, and server scripts to bring load times under 2 seconds.</p>
            </div>
            <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-indigo-500/30 transition-colors">
              <h4 className="text-white font-bold mb-3 flex items-center gap-3"><Terminal className="w-4 h-4 text-indigo-500"/> Do you include SEO?</h4>
              <p className="text-slate-400 text-sm leading-relaxed">All packages include "Technical SEO" (Sitemaps, Schema Markup, Meta Tags). For advanced ranking campaigns, we offer a dedicated SEO module.</p>
            </div>
          </div>
        </section>

        {/* === CTA SECTION === */}
        <section className="px-6 max-w-4xl mx-auto text-center">
          <div className="p-12 rounded-[3rem] bg-gradient-to-b from-indigo-900/20 to-transparent border border-indigo-500/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                Ready to Upgrade Your Infrastructure?
              </h2>
              <p className="text-slate-400 mb-8 max-w-lg mx-auto">
                Stop losing customers to slow websites. Initialize your new digital asset today.
              </p>
              <Link to="/contact" className="inline-block bg-white text-black px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                Get a Technical Proposal
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default WebArchitecture;