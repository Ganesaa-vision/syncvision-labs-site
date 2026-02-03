import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { Code, DollarSign, BrainCircuit, ArrowUpRight, Github, Linkedin } from 'lucide-react';
import { FOUNDER, CO_FOUNDER } from '../constants';

const AboutView: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const cardVariants = {
    offscreen: {
      y: 100,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1.2
      }
    }
  };

  const ArchitectProfile = ({ name, title, bio, isGanesaa }: { name: string, title: string, bio: string, isGanesaa?: boolean }) => (
    <motion.div 
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.3 }}
      variants={cardVariants}
      className="group relative"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo to-emerald rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
      <div className="relative bg-slate-950 border border-white/10 rounded-3xl p-8 h-full">
        <div className="flex flex-col lg:flex-row lg:items-start gap-8">
          <div className="w-full lg:w-1/3 flex-shrink-0">
            <div className="aspect-square rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
              {isGanesaa ? (
                <Code size={64} className="text-indigo/50" />
              ) : (
                <DollarSign size={64} className="text-emerald/50" />
              )}
            </div>
          </div>
          <div className="flex-grow">
            <span className={`text-base font-black uppercase font-mono tracking-[0.3em] ${isGanesaa ? 'text-indigo' : 'text-emerald'}`}>{title}</span>
            <h3 className="text-4xl font-bold font-mono text-slate-100 tracking-tighter mt-2 mb-4">{name}</h3>
            <p className="text-slate-200 leading-relaxed mb-6">{bio}</p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-slate-400 hover:text-indigo transition-colors"><Github size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-indigo transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="bg-slate-950 min-h-screen text-slate-100 py-32 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.05),transparent_60%)] pointer-events-none"></div>
      <Helmet>
        <title>The Architects | SyncVision Labs</title>
        <meta name="description" content="Meet the builders who bridge the gap between deep engineering and strategic market impact. Enterprise engineering at student rates." />
      </Helmet>

      <div className="max-w-7xl mx-auto">
        
        <motion.div 
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 0.8}}
          className="text-center mb-32"
        >
          <span className="font-mono text-indigo text-xs font-black uppercase tracking-[1em] mb-8 block">THE ARCHITECTS</span>
          <h1 className="text-6xl md:text-8xl font-black text-slate-100 tracking-tighter uppercase leading-none">
            SYSTEMS <br/>
            <span className="italic text-slate-600">ENGINEERED.</span>
          </h1>
          <p className="mt-12 text-slate-200 font-mono text-xl md:text-2xl max-w-4xl mx-auto uppercase tracking-[0.2em] font-black leading-relaxed border-l-4 border-indigo pl-8 text-balance">
            Builders who bridge the gap between deep engineering and strategic market impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-16 md:gap-24 mb-32">
          <ArchitectProfile
            name={FOUNDER.name}
            title={FOUNDER.title}
            bio={FOUNDER.bio}
            isGanesaa={true}
          />
          <ArchitectProfile
            name={CO_FOUNDER.name}
            title={CO_FOUNDER.title}
            bio={CO_FOUNDER.bio}
          />
        </div>

        <motion.div 
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariants}
          className="bg-white/[0.02] backdrop-blur-xl rounded-3xl border border-white/10 p-12 md:p-20 relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 p-20 opacity-[0.03] text-indigo"><BrainCircuit size={400} /></div>
          <h3 className="text-2xl font-mono font-black text-slate-100 uppercase mb-10 tracking-tighter relative z-10">Enterprise Engineering. Student Rates.</h3>
          <p className="text-slate-100 text-2xl md:text-4xl font-medium leading-relaxed italic mb-12 relative z-10 text-balance">"We treat your project with the obsession of a Founder, not the indifference of a freelancer."</p>
          <p className="text-slate-200 font-bold uppercase text-sm tracking-[0.2em] leading-loose relative z-10 max-w-3xl">
            We are a collective of Computer Science students and graduates building our own startups. Because we are in the 'Build Phase' of our careers, our priority is Portfolio Dominance, not agency margins.
          </p>
          <div className="mt-8 relative z-10">
            <p className="text-slate-200 mb-2"><strong className="text-indigo">You get:</strong> The same cutting-edge tech (Next.js, AI, Flutter) we use for our own innovations.</p>
            <p className="text-slate-200"><strong className="text-emerald">You pay:</strong> A lean, startup-friendly rate that traditional agencies cannot match.</p>
          </div>
        </motion.div>
        
      </div>
    </div>
  );
};

export default AboutView;