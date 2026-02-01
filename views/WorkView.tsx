import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { PORTFOLIO } from '../constants';
import { TrendingUp, CheckCircle2, FlaskConical } from 'lucide-react';

const WorkView: React.FC = () => {
  const clients = PORTFOLIO.filter(p => p.type === 'CLIENT');
  const internal = PORTFOLIO.filter(p => p.type === 'INTERNAL');
  
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return (
    <section className="py-40 px-6 animate-fade-in bg-slate-950 min-h-screen relative">
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-emerald-500/5 blur-[150px] pointer-events-none"></div>
      <Helmet>
        <title>Verified Results | SyncVision Systems</title>
        <meta name="description" content="Proven success connecting industrial client dominance with proprietary R&D innovations. View our case studies and internal labs." />
      </Helmet>

      <div className="max-w-7xl mx-auto">
        <div className="mb-32">
          <span className="font-mono text-interstellar text-xs font-black uppercase tracking-[0.8em] mb-8 block">Execution Output</span>
          <h2 className="text-5xl md:text-8xl font-mono font-black text-slate-100 tracking-tighter uppercase leading-none text-balance">PROVEN <span className="text-interstellar italic">SUCCESS.</span></h2>
          <p className="mt-12 text-slate-200 font-mono text-lg md:text-xl max-w-4xl uppercase tracking-[0.2em] font-black leading-relaxed text-balance">
            Connecting industrial client dominance with proprietary R&D innovations. We have range.
          </p>
        </div>

        <div className="space-y-48">
          {clients.map(p => (
            <div key={p.id} className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start border-b border-white/5 pb-32">
              <div className="lg:col-span-6 rounded-[3rem] overflow-hidden border border-white/5 aspect-video relative group shadow-2xl">
                <img src={p.image} loading="lazy" className="w-full h-full object-cover grayscale brightness-[0.4] group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000" alt={p.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent opacity-60"></div>
                <div className="absolute bottom-10 left-10">
                  <div className="px-6 py-3 bg-interstellar text-slate-100 font-mono text-xs font-black rounded-xl uppercase tracking-widest shadow-2xl flex items-center gap-3">
                    <TrendingUp size={16} className="text-growth"/> CLIENT WIN
                  </div>
                </div>
              </div>
              <div className="lg:col-span-6 space-y-12">
                 <div>
                    <span className="text-interstellar font-mono text-sm font-black uppercase tracking-[0.4em] mb-4 block uppercase tracking-widest">{p.role}</span>
                    <h4 className="text-4xl font-mono font-black text-slate-100 uppercase tracking-tighter mb-4 leading-tight">{p.title}</h4>
                    <p className="text-slate-200 font-medium text-lg italic opacity-70">"{p.mission}"</p>
                 </div>
                 <div className="p-12 bg-slate-900/50 backdrop-blur-md border border-indigo/20 rounded-[3rem] space-y-10 shadow-2xl">
                    <span className="font-mono text-interstellar text-xs uppercase font-black tracking-[0.4em] block border-b border-white/5 pb-6">Verified Stats</span>
                    <div className="space-y-6">
                      {p.results?.map((res, i) => (
                        <div key={i} className="flex items-center gap-6 group">
                          <CheckCircle2 size={24} className="text-growth flex-shrink-0 brightness-125" />
                          <span className="text-lg md:text-2xl font-mono font-black text-growth uppercase tracking-widest brightness-125">{res}</span>
                        </div>
                      ))}
                    </div>
                 </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-48">
           <div className="flex items-center gap-6 mb-20">
              <FlaskConical className="text-interstellar" size={32} />
              <h3 className="font-mono text-slate-100 text-2xl uppercase tracking-[0.3em] font-black">INTERNAL LABS (R&D)</h3>
              <div className="h-px flex-1 bg-white/5"></div>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {internal.map(venture => (
                <div key={venture.id} className="p-12 bg-slate-900/50 backdrop-blur-md border border-white/5 rounded-[3.5rem] group hover:border-indigo/40 transition-all shadow-2xl">
                   <div className="relative rounded-3xl overflow-hidden aspect-video mb-12 grayscale brightness-[0.4] group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000">
                      <img src={venture.image} loading="lazy" className="w-full h-full object-cover" alt={venture.title} />
                      <div className="absolute top-6 right-6 px-6 py-3 bg-interstellar/80 backdrop-blur-md text-[10px] font-mono font-black text-slate-100 uppercase tracking-widest rounded-xl">INTERNAL R&D</div>
                   </div>
                   <h4 className="text-3xl font-mono font-black text-slate-100 mb-4 uppercase tracking-tighter group-hover:text-interstellar transition-colors leading-none">{venture.title}</h4>
                   <span className="text-interstellar font-mono text-[10px] font-black uppercase tracking-[0.4em] block mb-8">{venture.role}</span>
                   <p className="text-slate-200 text-lg font-bold leading-relaxed mb-10 opacity-80 font-light">{venture.concept}</p>
                   <div className="p-6 bg-slate-950/50 border border-white/5 rounded-2xl font-mono text-[11px] font-black uppercase tracking-widest text-slate-400">
                     Status: {venture.status}
                   </div>
                </div>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
};

export default WorkView;