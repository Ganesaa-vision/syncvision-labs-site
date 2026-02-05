import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { CheckCircle2, MessageSquare, ArrowRight, ShieldCheck } from 'lucide-react';

const ContactView: React.FC = () => {
  const [sent, setSent] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <section className="py-24 md:py-40 px-6 animate-fade-in min-h-screen bg-slate-950 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none"></div>
      <Helmet>
        <title>Initiate Protocol | SyncVision Labs</title>
        <meta name="description" content="Select your mission objective. Validated requests receive engineering protocols within 12 hours. Secure channel active." />
      </Helmet>

      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <span className="font-mono text-indigo text-sm font-black uppercase tracking-[1em] mb-8 block">Communication Protocol</span>
          <h2 className="text-4xl md:text-8xl font-mono font-black text-slate-100 tracking-tighter uppercase leading-none">LET'S <span className="text-indigo italic">BUILD.</span></h2>
          <p className="mt-12 text-slate-200 font-mono text-lg md:text-xl max-w-4xl uppercase tracking-[0.2em] font-black leading-relaxed border-l-4 border-indigo pl-8">
            Select your mission objective. Validated requests receive engineering protocols within 12 hours.
          </p>
          <p className="mt-8 text-emerald font-bold text-lg max-w-4xl">
            Get the 'Student Founder' Advantage before we graduate to Agency Rates.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5 p-12 bg-white/[0.02] backdrop-blur-xl rounded-[3rem] border border-white/10 shadow-2xl flex flex-col justify-between">
             <div className="space-y-12">
               <div className="flex items-center gap-6 text-indigo"><MessageSquare size={32} /><h3 className="font-mono font-black uppercase tracking-widest text-slate-100">Technical Intake</h3></div>
               <p className="text-slate-200 font-bold uppercase tracking-widest text-sm leading-loose">Transmissions are encrypted. Direct engineering lead access provided upon objective validation.</p>
             </div>
             <div className="mt-20 pt-12 border-t border-slate-100/5 space-y-8">
               <div className="flex items-center gap-4 text-indigo font-mono text-xs font-black uppercase tracking-[0.5em]"><div className="w-3 h-3 bg-emerald rounded-full animate-pulse shadow-[0_0_10px_#10b981]"></div> Secure Channel Active</div>
               <div className="flex items-center gap-4 text-slate-400/40 font-mono text-xs font-black uppercase tracking-[0.5em]"><ShieldCheck size={14}/> Encrypted Handshake Ready</div>
             </div>
          </div>

          <div className="lg:col-span-7">
            {sent ? (
              <div className="p-20 bg-white/[0.02] backdrop-blur-xl border border-emerald-500/40 rounded-[3rem] text-center shadow-3xl flex flex-col items-center animate-fade-in">
                 <div className="w-20 h-20 bg-emerald/10 rounded-full flex items-center justify-center mb-10 ring-4 ring-emerald/20">
                   <CheckCircle2 size={40} className="text-emerald" />
                 </div>
                 <h3 className="text-4xl font-mono font-black text-slate-100 uppercase tracking-tighter mb-4 leading-none">SIGNAL RECEIVED</h3>
                 <p className="text-slate-200 text-xs uppercase tracking-widest mb-12 font-bold">Decoding objectives. Expect a protocol update shortly.</p>
                 <button onClick={() => setSent(false)} className="text-indigo font-mono text-xs font-black uppercase tracking-widest border-b-2 border-indigo/20 hover:border-indigo transition-all pb-1">New Transmission</button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="p-12 md:p-16 bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-[3rem] space-y-10 shadow-2xl relative overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                   <div className="space-y-4">
                     <label className="font-mono text-xs uppercase text-slate-400 tracking-widest font-black block">Identity / Organization</label>
                     <input required type="text" placeholder="Name or Company" className="w-full bg-slate-950 border border-white/10 rounded-2xl p-6 text-slate-200 font-mono text-sm font-black focus:border-indigo-500 outline-none transition-all placeholder-slate-500 shadow-inner" />
                   </div>
                   <div className="space-y-4">
                     <label className="font-mono text-xs uppercase text-slate-400 tracking-widest font-black block">Signal Channel (Email)</label>
                     <input required type="email" placeholder="contact@domain.com" className="w-full bg-slate-950 border border-white/10 rounded-2xl p-6 text-slate-200 font-mono text-sm font-black focus:border-indigo-500 outline-none transition-all placeholder-slate-500 shadow-inner" />
                   </div>
                </div>
                <div className="space-y-4">
                  <label className="font-mono text-xs uppercase text-slate-400 tracking-widest font-black block">Mission Objective</label>
                  <textarea rows={5} required placeholder="Detailed technical requirements, ROI goals, or architectural objectives..." className="w-full bg-slate-950 border border-white/10 rounded-2xl p-6 text-slate-200 font-mono text-sm font-black focus:border-indigo-500 outline-none transition-all resize-none placeholder-slate-500 shadow-inner"></textarea>
                </div>
                <button type="submit" className="w-full py-8 bg-indigo-600 text-white font-mono text-sm font-black uppercase tracking-widest rounded-2xl hover:bg-indigo-500 transition-all flex items-center justify-center gap-6 shadow-xl shadow-indigo-500/20 active:scale-95">
                  DEPLOY TRANSMISSION <ArrowRight size={20} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactView;