import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { 
  Code, Cpu, ShieldCheck, Zap, 
  Layers, Database, ArrowRight, Check, 
  Globe, RefreshCw, LayoutTemplate,
  Activity, Lock
} from 'lucide-react'; 

const WebArchitecture: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-slate-200 font-sans selection:bg-indigo-500/30">
      
      {/* SEO META DATA: Targeted for Custom Code AND WordPress */}
      <Helmet>
        <title>Web Development Services | Custom Next.js & WordPress Malaysia</title>
        <meta name="description" content="We offer 3 tiers of web development: Custom High-Performance Web Apps, Enterprise WordPress sites, and Legacy Website Redesigns. Choose your architecture." />
        <meta name="keywords" content="Custom Web Design, WordPress Developer Malaysia, Website Redesign, Fix Slow Website, NextJS Developer" />
      </Helmet>

      <Navbar />

      <main className="pt-32 pb-20">
        
        {/* === HERO SECTION === */}
        <section className="px-6 max-w-7xl mx-auto mb-24 relative">
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none"></div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto relative z-10"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-indigo-500/30 bg-indigo-900/10 text-indigo-400 text-xs font-mono mb-6">
              <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></span>
              FULL-SPECTRUM ENGINEERING
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6 leading-tight">
              WEB ARCHITECTURE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-400">
                FOR EVERY SCALE.
              </span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed mb-8">
              We don't force one tool on you. Whether you need a <span className="text-indigo-400 font-bold">Custom SaaS Platform</span>, 
              a fast <span className="text-pink-400 font-bold">WordPress Site</span>, or a 
              <span className="text-emerald-400 font-bold">Redesign</span> of your old page, we engineer it for speed and dominance.
            </p>
          </motion.div>
        </section>

        {/* === THE 3 SERVICE TIERS (CRITICAL UPDATE) === */}
        <section className="px-6 max-w-7xl mx-auto mb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* TIER 1: CUSTOM ENGINEERING */}
            <div className="group relative bg-slate-900/40 border border-slate-800 p-8 rounded-2xl hover:border-indigo-500/50 transition-all duration-300">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Code className="w-24 h-24 text-indigo-500" />
              </div>
              <div className="text-indigo-500 font-mono text-xs mb-4">TIER 01</div>
              <h3 className="text-2xl font-bold text-white mb-4">Custom Engineering</h3>
              <p className="text-slate-400 text-sm mb-6 min-h-[60px]">
                Proprietary digital assets built from scratch using Next.js and React. For clients who need absolute speed, unique features, and 100% source code ownership.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-sm text-slate-300"><Check className="w-4 h-4 text-indigo-500"/> Next.js / React Architecture</li>
                <li className="flex items-center gap-2 text-sm text-slate-300"><Check className="w-4 h-4 text-indigo-500"/> Supabase Database</li>
                <li className="flex items-center gap-2 text-sm text-slate-300"><Check className="w-4 h-4 text-indigo-500"/> SaaS & Web Applications</li>
              </ul>
              <Link to="/contact" className="w-full block text-center py-3 rounded-lg border border-indigo-500/30 text-indigo-400 hover:bg-indigo-500 hover:text-white transition-all font-bold text-sm">
                Select Custom Build
              </Link>
            </div>

            {/* TIER 2: WORDPRESS / CMS */}
            <div className="group relative bg-slate-900/40 border border-slate-800 p-8 rounded-2xl hover:border-pink-500/50 transition-all duration-300">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <LayoutTemplate className="w-24 h-24 text-pink-500" />
              </div>
              <div className="text-pink-500 font-mono text-xs mb-4">TIER 02</div>
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise WordPress</h3>
              <p className="text-slate-400 text-sm mb-6 min-h-[60px]">
                Rapid deployment using the world's most popular CMS. We engineer custom Elementor layouts that are secure, fast, and easy for you to edit yourself.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-sm text-slate-300"><Check className="w-4 h-4 text-pink-500"/> Custom Elementor Design</li>
                <li className="flex items-center gap-2 text-sm text-slate-300"><Check className="w-4 h-4 text-pink-500"/> Easy Client Editing</li>
                <li className="flex items-center gap-2 text-sm text-slate-300"><Check className="w-4 h-4 text-pink-500"/> 1-Week Launch Time</li>
              </ul>
              <Link to="/contact" className="w-full block text-center py-3 rounded-lg border border-pink-500/30 text-pink-400 hover:bg-pink-500 hover:text-white transition-all font-bold text-sm">
                Select WordPress
              </Link>
            </div>

            {/* TIER 3: REDESIGN / RECOVERY */}
            <div className="group relative bg-slate-900/40 border border-slate-800 p-8 rounded-2xl hover:border-emerald-500/50 transition-all duration-300">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <RefreshCw className="w-24 h-24 text-emerald-500" />
              </div>
              <div className="text-emerald-500 font-mono text-xs mb-4">TIER 03</div>
              <h3 className="text-2xl font-bold text-white mb-4">Legacy Redesign</h3>
              <p className="text-slate-400 text-sm mb-6 min-h-[60px]">
                Have an old website that is ugly or slow? We perform a complete "Rescue Operation." We migrate your content to a modern design and fix speed issues.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-sm text-slate-300"><Check className="w-4 h-4 text-emerald-500"/> Modern UI/UX Overhaul</li>
                <li className="flex items-center gap-2 text-sm text-slate-300"><Check className="w-4 h-4 text-emerald-500"/> Speed Optimization (100%)</li>
                <li className="flex items-center gap-2 text-sm text-slate-300"><Check className="w-4 h-4 text-emerald-500"/> Mobile Responsiveness Fix</li>
              </ul>
              <Link to="/contact" className="w-full block text-center py-3 rounded-lg border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all font-bold text-sm">
                Select Redesign
              </Link>
            </div>

          </div>
        </section>

        {/* === NEW: THE OWNERSHIP PROTOCOL (COMPARISON) === */}
        <section className="px-6 max-w-7xl mx-auto mb-32 pt-20 border-t border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="font-mono text-indigo-400 text-xs font-black uppercase tracking-[0.4em] mb-6 block">The Asset Logic</span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Stop Renting.<br/>Start Owning.</h2>
              <p className="text-slate-400 mb-8 text-lg leading-relaxed">
                When you build on Wix or Squarespace, you are renting. If you stop paying, your business disappears. 
                We build <strong>Proprietary Digital Assets</strong> that you own 100%.
              </p>
              
              <div className="space-y-6">
                 <div className="flex gap-4">
                   <div className="p-3 bg-red-500/10 rounded-xl text-red-400 h-fit"><Lock size={24} /></div>
                   <div>
                     <h4 className="text-white font-bold text-lg">The Trap (Wix/Shopify)</h4>
                     <p className="text-slate-500 text-sm">Monthly fees forever. You can't move the site. Shared slow servers.</p>
                   </div>
                 </div>
                 <div className="flex gap-4">
                   <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400 h-fit"><ShieldCheck size={24} /></div>
                   <div>
                     <h4 className="text-white font-bold text-lg">The Asset (SyncVision)</h4>
                     <p className="text-slate-500 text-sm">One-time engineering fee. You own the Source Code. Deploys anywhere.</p>
                   </div>
                 </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
               <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-[100px] rounded-full"></div>
               <div className="relative bg-slate-900 border border-white/10 rounded-3xl p-8 shadow-2xl">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                    </div>
                    <span className="text-xs font-mono text-slate-500">ownership_contract.json</span>
                  </div>
                  <div className="space-y-4 font-mono text-sm">
                    <div className="flex justify-between p-3 bg-white/5 rounded-lg">
                      <span className="text-purple-400">"source_code"</span> <span className="text-emerald-400">"TRANSFERRED"</span>
                    </div>
                    <div className="flex justify-between p-3 bg-white/5 rounded-lg">
                      <span className="text-purple-400">"monthly_fees"</span> <span className="text-emerald-400">0</span>
                    </div>
                    <div className="flex justify-between p-3 bg-white/5 rounded-lg">
                      <span className="text-purple-400">"database"</span> <span className="text-yellow-200">"PostgreSQL (Owned)"</span>
                    </div>
                    <div className="flex justify-between p-3 bg-white/5 rounded-lg">
                      <span className="text-purple-400">"hosting"</span> <span className="text-yellow-200">"Vercel / AWS"</span>
                    </div>
                  </div>
               </div>
            </motion.div>
          </div>
        </section>

        {/* === NEW: PERFORMANCE METRICS === */}
        <section className="px-6 max-w-7xl mx-auto mb-32">
           <motion.div 
             initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="bg-slate-900/50 border border-white/5 rounded-[3rem] p-12 relative overflow-hidden"
           >
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-indigo-500/10 blur-[100px] rounded-full"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                 <div className="text-center group">
                    <Activity className="w-12 h-12 text-indigo-500 mx-auto mb-6 group-hover:scale-110 transition-transform" />
                    <div className="text-4xl font-black text-white mb-2 font-mono">99/100</div>
                    <p className="text-slate-500 text-xs uppercase tracking-widest">Google Performance Score</p>
                 </div>
                 <div className="text-center border-x border-white/5 group">
                    <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-6 group-hover:scale-110 transition-transform" />
                    <div className="text-4xl font-black text-white mb-2 font-mono">&lt; 100ms</div>
                    <p className="text-slate-500 text-xs uppercase tracking-widest">Time to Interactive</p>
                 </div>
                 <div className="text-center group">
                    <ShieldCheck className="w-12 h-12 text-emerald-400 mx-auto mb-6 group-hover:scale-110 transition-transform" />
                    <div className="text-4xl font-black text-white mb-2 font-mono">AES-256</div>
                    <p className="text-slate-500 text-xs uppercase tracking-widest">Bank-Grade Encryption</p>
                 </div>
              </div>
           </motion.div>
        </section>

        {/* === SECTION 3: THE TECH STACK === */}
        <section className="border-y border-slate-900 bg-slate-900/20 py-20 mb-32">
          <div className="px-6 max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-2">ENGINEERING ARSENAL</h2>
              <p className="text-slate-500">We use the best tools for the specific job.</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: 'Next.js 14', icon: <Code />, desc: 'For Custom Apps' },
                { name: 'WordPress', icon: <LayoutTemplate />, desc: 'For Marketing Sites' },
                { name: 'Supabase', icon: <Database />, desc: 'Secure Databases' },
                { name: 'Vercel', icon: <Cpu />, desc: 'Global Hosting' },
              ].map((tech) => (
                <div key={tech.name} className="p-6 border border-slate-800 rounded-xl bg-[#0a0a0a] hover:border-indigo-500/50 transition-colors group">
                  <div className="mb-4 text-slate-400 group-hover:text-indigo-400 transition-colors">
                    {tech.icon}
                  </div>
                  <h4 className="text-lg font-bold text-white">{tech.name}</h4>
                  <p className="text-xs text-slate-500 font-mono mt-1">{tech.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === CTA SECTION === */}
        <section className="px-6 max-w-4xl mx-auto text-center">
          <div className="p-12 rounded-3xl bg-gradient-to-b from-indigo-900/20 to-transparent border border-indigo-500/30">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Which Architecture Fits You?
            </h2>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto">
              Not sure if you need Custom Code or WordPress? We will audit your business needs and recommend the most cost-effective path.
            </p>
            <Link to="/contact" className="inline-block bg-white text-black px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform">
              Get a Free Consultation
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default WebArchitecture;