import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  Search, 
  Code, 
  Smartphone, 
  Bot, 
  ArrowRight, 
  History, 
  Trophy, 
  ShoppingCart,
  BrainCircuit,
  Zap,
  Globe,
  Server
} from 'lucide-react';
import { SERVICES } from '../constants';
import { DetailedService } from '../types';

const IconMap: { [key: string]: any } = {
  Search: Search,
  Code: Code,
  Smartphone: Smartphone,
  Bot: Bot,
  History: History,
  Trophy: Trophy,
  ShoppingCart: ShoppingCart,
  BrainCircuit: BrainCircuit,
  Zap: Zap,
  Globe: Globe,
  Server: Server
};

const serviceUrlMapping: { [key: string]: string } = {
  'full-stack-dev': '/services/web-architecture',
  'strategic-redesign': '/services/strategic-redesign',
  'seo-dominance': '/services/seo-dominance',
  'custom-app-dev': '/services/app-engineering',
  'whatsapp-business': '/services/automation',
  'ecommerce-engineering': '/services/ecommerce',
  'custom-ai-agents': '/services/ai-agents',
  'digital-presence': '/services/digital-presence',
};

const ACHIEVEMENTS = [
  {
    label: "SEO Dominance",
    value: "RANK #1",
    desc: "In < 20 Days"
  },
  {
    label: "Client Retention",
    value: "420%",
    desc: "Post-Optimization"
  },
  {
    label: "System Latency",
    value: "< 100ms",
    desc: "Global Average"
  }
];

const ServicesView: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <section className="animate-fade-in bg-slate-950 pt-48 pb-32 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.1),transparent_70%)] pointer-events-none"></div>
      <Helmet>
        <title>Engineering Services | SyncVision Systems</title>
        <meta name="description" content="Strategic segments designed for absolute market clarity. From Web Architecture and Industrial SEO to App Engineering and Automation." />
      </Helmet>

      <div className="max-w-7xl mx-auto">
        {/* Achievements Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32 border-y border-white/5 py-12 bg-white/[0.02] backdrop-blur-sm">
          {ACHIEVEMENTS.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-indigo font-mono text-sm font-black uppercase tracking-[0.2em] mb-2">{stat.label}</div>
              <div className="text-4xl md:text-5xl font-black text-slate-100 tracking-tighter mb-1">{stat.value}</div>
              <div className="text-slate-500 font-mono text-sm uppercase tracking-widest">{stat.desc}</div>
            </div>
          ))}
        </div>

        <div className="mb-24">
          <span className="font-mono text-indigo text-xs font-black uppercase tracking-[1em] mb-10 block">Engineering Portfolio</span>
          <h2 className="text-5xl md:text-7xl font-mono font-black text-slate-100 tracking-tighter uppercase leading-[0.85] mb-12">
            STRATEGIC <br/><span className="text-indigo italic underline decoration-indigo/20 underline-offset-8">SEGMENTS.</span>
          </h2>
          <p className="text-slate-200 font-medium text-lg max-w-3xl leading-relaxed text-balance border-l-2 border-indigo pl-8">
            We don't just build websites; we engineer systems. Each segment is designed for absolute market clarity and high-logic performance.
          </p>
        </div>

        {/* Compact Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.filter(s => serviceUrlMapping[s.id] && !['strategic-redesign', 'digital-presence'].includes(s.id)).map((s) => {
            const Icon = IconMap[s.icon] || Code;
            const url = serviceUrlMapping[s.id] || '/services';
            return (
              <Link
                key={s.id} 
                to={url}
                className="p-8 bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl transition-all duration-500 hover:bg-white/[0.05] group flex flex-col justify-between hover:border-indigo-500/50 cursor-pointer hover:-translate-y-2 hover:shadow-[0_20px_50px_-12px_rgba(99,102,241,0.2)]"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-4 bg-slate-900 rounded-xl text-indigo-400 border border-white/5 group-hover:text-white group-hover:border-indigo-500/50 group-hover:bg-indigo-600/20 transition-all duration-500">
                      <Icon size={20} strokeWidth={2} />
                    </div>
                    <ArrowRight size={16} className="text-slate-600 group-hover:text-indigo -rotate-45 group-hover:rotate-0 transition-all duration-300" />
                  </div>
                  
                  <h4 className="text-lg font-mono font-bold text-slate-100 uppercase mb-3 tracking-tight leading-none group-hover:text-indigo transition-colors">{s.title}</h4>
                  <p className="text-slate-400 text-sm font-medium leading-relaxed mb-6 line-clamp-2">
                    {s.fullDesc}
                  </p>
                </div>
                
                <div className="pt-6 border-t border-white/5">
                   <div className="flex flex-wrap gap-2">
                      {s.features.slice(0, 2).map(f => (
                        <span key={f} className="px-2 py-1 bg-white/5 rounded text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">{f}</span>
                      ))}
                   </div>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ServicesView;