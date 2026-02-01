import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Database, Globe, Zap } from 'lucide-react';

const WebServicePage = () => {
  const cardVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: { y: 0, opacity: 1, transition: { type: "spring", bounce: 0.4, duration: 1 } }
  };

  return (
    <div className="bg-obsidian text-slate-100 py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top Half: Big text on the left, 3D/Abstract image on the right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-7xl font-black text-slate-50 tracking-tighter uppercase leading-none">
              Web Infrastructure. <br />
              <span className="italic text-indigo-400">Built for Ownership.</span>
            </h1>
            <p className="mt-8 text-slate-300 font-mono text-lg md:text-xl max-w-2xl uppercase tracking-widest leading-relaxed font-bold">
              "We don't just design; we engineer assets. From custom Next.js web apps to high-performance WordPress builds, you get the full source code, the database keys, and a system that loads instantly."
            </p>
            <p className="mt-6 text-emerald-400 font-bold text-lg max-w-2xl">
              "Most agencies lease you a website. We build it and hand you the keys. Because we are founders, we believe you should own your code."
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="h-96 bg-glass rounded-3xl border border-slate-700 flex items-center justify-center p-8">
            <Zap size={128} className="text-indigo-500 opacity-20" />
          </motion.div>
        </div>

        {/* Middle: A 2x2 Grid of the "Key Features" */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          <motion.div variants={cardVariants} initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.3 }} className="bg-glass p-8 rounded-3xl border border-slate-700">
            <div className="flex items-center gap-4 mb-4">
              <CheckCircle2 className="text-indigo-400" />
              <h3 className="text-2xl font-bold text-slate-50">Full Source Code Delivery</h3>
            </div>
            <p className="text-slate-300">You get the GitHub repo. It’s your asset forever.</p>
          </motion.div>
          <motion.div variants={cardVariants} initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.3 }} className="bg-glass p-8 rounded-3xl border border-slate-700">
            <div className="flex items-center gap-4 mb-4">
              <Database className="text-indigo-400" />
              <h3 className="text-2xl font-bold text-slate-50">Database Integration</h3>
            </div>
            <p className="text-slate-300">Seamless connections to Supabase, Firebase, or SQL for dynamic data.</p>
          </motion.div>
          <motion.div variants={cardVariants} initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.3 }} className="bg-glass p-8 rounded-3xl border border-slate-700">
            <div className="flex items-center gap-4 mb-4">
              <Globe className="text-indigo-400" />
              <h3 className="text-2xl font-bold text-slate-50">Managed Hosting</h3>
            </div>
            <p className="text-slate-300">We handle the Vercel/AWS setup, DNS, and SSL.</p>
          </motion.div>
          <motion.div variants={cardVariants} initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.3 }} className="bg-glass p-8 rounded-3xl border border-slate-700">
            <div className="flex items-center gap-4 mb-4">
              <Zap className="text-indigo-400" />
              <h3 className="text-2xl font-bold text-slate-50">Speed Optimization</h3>
            </div>
            <p className="text-slate-300">Sub-second load times using modern frameworks (Next.js 14).</p>
          </motion.div>
        </div>

        {/* Bottom: A dark grey box with the "Proof/Case Study" text */}
        <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.3 }} variants={cardVariants} className="bg-gray-800 rounded-3xl p-12">
          <div className="flex items-center gap-4 text-emerald-400 mb-4">
            <CheckCircle2 size={24} />
            <h3 className="text-xl font-bold uppercase tracking-widest">Case Study: Industrial Manufacturer Redesign</h3>
          </div>
          <p className="text-white text-lg">"Migrated a legacy industrial catalog to a modern architecture, resulting in a 420% increase in lead retention due to instant load times."</p>
        </motion.div>
      </div>
    </div>
  );
};

export default WebServicePage;
