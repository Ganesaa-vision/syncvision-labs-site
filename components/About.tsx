import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Code, Cpu, Globe, Zap, Quote, 
  Terminal, BrainCircuit, Target 
} from 'lucide-react';
import Founders from './Founders';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-[#0A0A0A] py-32 border-t border-white/5 relative overflow-hidden">
      <Helmet>
        <title>About Us | The Architects - SyncVision Labs</title>
        <meta name="description" content="We are not an agency. We are a digital foundry. Meet the architects building the future of Malaysian digital infrastructure." />
      </Helmet>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none"></div>

        {/* Header */}
        <div className="relative z-10 text-center max-w-4xl mx-auto mb-32">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-indigo-500/30 bg-indigo-900/10 text-indigo-400 text-xs font-mono mb-8">
              <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></span>
              SYSTEM STATUS: ONLINE
            </div>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white mb-8 leading-[0.9]">
              WE ARE THE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400">
                ARCHITECTS.
              </span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
              SyncVision Labs is not a marketing agency. We are a 
              <span className="text-white font-bold"> Strategic Digital Foundry </span> 
              dedicated to building the high-performance infrastructure that powers the next generation of Malaysian businesses.
            </p>
        </div>
        
        {/* Manifesto */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
             <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl opacity-20 blur-lg"></div>
                <div className="relative bg-slate-900 border border-white/10 p-10 rounded-2xl">
                   <Terminal className="w-12 h-12 text-indigo-500 mb-6" />
                   <h3 className="text-2xl font-bold text-white mb-4 font-mono">CODE IS LAW.</h3>
                   <p className="text-slate-400 leading-relaxed mb-6">
                     In a world of drag-and-drop templates, we choose to write the code. Why? Because templates are slow, insecure, and rented. Code is fast, secure, and owned.
                   </p>
                   <p className="text-slate-400 leading-relaxed">
                     We believe that your digital presence is an asset, not an expense. It should work for you while you sleep, calculating, selling, and organizing without error.
                   </p>
                </div>
             </div>
             <div>
                <span className="text-indigo-500 font-mono text-xs font-black uppercase tracking-[0.3em] mb-6 block">Our Philosophy</span>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
                  We don't just build websites. <br/>
                  <span className="text-slate-500">We build machines.</span>
                </h2>
                <ul className="space-y-6">
                   {[
                     { title: "Speed is a Feature", desc: "If it loads in over 1 second, it's broken." },
                     { title: "Data over Opinion", desc: "We don't guess what works. We use data." },
                     { title: "Ownership is Key", desc: "You pay for it, you own the source code." }
                   ].map((item, i) => (
                     <li key={i} className="flex gap-4">
                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 border border-white/10">
                           <span className="font-mono text-indigo-400 font-bold">0{i+1}</span>
                        </div>
                        <div>
                           <h4 className="text-white font-bold text-lg">{item.title}</h4>
                           <p className="text-slate-500 text-sm">{item.desc}</p>
                        </div>
                     </li>
                   ))}
                </ul>
             </div>
        </div>

        {/* === NEW SECTION: THE COLLECTIVE === */}
        <div className="mb-32 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-[2.5rem] opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-1000"></div>
            <div className="relative bg-[#0f0f0f] border border-white/10 rounded-[2rem] p-12 md:p-20 overflow-hidden">
                <div className="absolute top-0 right-0 p-20 opacity-[0.03] text-indigo-500 pointer-events-none">
                    <BrainCircuit size={400} />
                </div>
                
                <div className="relative z-10">
                    <span className="text-indigo-500 font-mono text-xs font-black uppercase tracking-[0.3em] mb-6 block">The Collective</span>
                    
                    <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-10 uppercase leading-none">
                        Enterprise Engineering. <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Student Rates.</span>
                    </h2>

                    <blockquote className="text-2xl md:text-3xl text-slate-200 font-medium leading-relaxed italic mb-12 border-l-4 border-indigo-500 pl-8">
                        "We treat your project with the obsession of a Founder, not the indifference of a freelancer."
                    </blockquote>

                    <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-4xl font-mono uppercase tracking-wide">
                        WE ARE A COLLECTIVE OF COMPUTER SCIENCE STUDENTS AND GRADUATES BUILDING OUR OWN STARTUPS. BECAUSE WE ARE IN THE 'BUILD PHASE' OF OUR CAREERS, OUR PRIORITY IS <span className="text-white font-bold">PORTFOLIO DOMINANCE</span>, NOT AGENCY MARGINS.
                    </p>

                    <div className="mt-12 flex flex-wrap gap-4">
                        <div className="px-6 py-3 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-xs font-bold uppercase tracking-widest">
                            CS Graduates
                        </div>
                        <div className="px-6 py-3 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-xs font-bold uppercase tracking-widest">
                            Startup Founders
                        </div>
                        <div className="px-6 py-3 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-xs font-bold uppercase tracking-widest">
                            Portfolio Focused
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Founders Section */}
        <Founders />

        {/* Quotes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
            {[
              { q: "The best way to predict the future is to invent it.", a: "Alan Kay" },
              { q: "Simplicity is the ultimate sophistication.", a: "Leonardo da Vinci" },
              { q: "Any sufficiently advanced technology is indistinguishable from magic.", a: "Arthur C. Clarke" }
            ].map((quote, i) => (
              <div key={i} className="bg-slate-900/30 border border-white/5 p-8 rounded-2xl hover:border-indigo-500/30 transition-colors group relative overflow-hidden">
                 <Quote className="absolute top-4 right-4 text-white/5 w-16 h-16 group-hover:text-indigo-500/10 transition-colors" />
                 <p className="text-lg text-slate-300 font-medium mb-6 relative z-10">"{quote.q}"</p>
                 <div className="text-xs font-mono text-indigo-400 uppercase tracking-widest relative z-10">// {quote.a}</div>
              </div>
            ))}
        </div>

        {/* Capabilities */}
        <div className="border-t border-white/10 pt-20 mb-32">
           <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div>
                 <span className="text-indigo-500 font-mono text-xs font-black uppercase tracking-[0.3em] mb-4 block">Capabilities</span>
                 <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">WHAT WE DO.</h2>
              </div>
              <p className="text-slate-400 max-w-md text-right">
                 We operate at the intersection of Design, Engineering, and Artificial Intelligence.
              </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: <Globe />, title: "Web Architecture", desc: "High-performance React & Next.js platforms." },
                { icon: <BrainCircuit />, title: "AI Integration", desc: "Autonomous agents & LLM workflows." },
                { icon: <Target />, title: "SEO Dominance", desc: "Ranking #1 on Google & AI Search." },
                { icon: <Cpu />, title: "App Engineering", desc: "Offline-first mobile applications." }
              ].map((item, i) => (
                <div key={i} className="p-8 bg-[#0f0f0f] rounded-xl border border-white/5 hover:border-indigo-500/50 transition-all group">
                   <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center text-slate-400 mb-6 group-hover:text-indigo-400 group-hover:bg-indigo-500/10 transition-colors">
                      {item.icon}
                   </div>
                   <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                   <p className="text-slate-500 text-sm">{item.desc}</p>
                </div>
              ))}
           </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="p-12 rounded-[3rem] bg-gradient-to-b from-indigo-900/20 to-transparent border border-indigo-500/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                Ready to Build the Future?
              </h2>
              <p className="text-slate-400 mb-8 max-w-lg mx-auto">
                Join the few who understand that technology is the ultimate leverage.
              </p>
              <Link to="/contact" className="inline-block bg-white text-black px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                Initialize Project
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;