/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-[#0A0A0A] py-32 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32">
          <div>
            <span className="text-indigo-500 text-xs font-black uppercase tracking-[0.3em] mb-6 block">The Syncore Philosophy</span>
            <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-[0.9]">
              BUILT FOR THE <br/>
              <span className="text-zinc-500">NEXT DECADE.</span>
            </h2>
            <p className="text-xl text-slate-200 font-normal leading-relaxed max-w-lg">
              We specialize in creating infrastructure that is not only robust but strategically aligned with long-term growth. Syncore is where architectural excellence meets digital vision.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 flex flex-col justify-end min-h-[200px] group hover:bg-indigo-600/10 transition-colors">
              <span className="text-3xl font-bold text-white mb-2">99.99%</span>
              <span className="text-xs uppercase tracking-widest text-slate-400">Uptime Reliability</span>
            </div>
            <div className="bg-indigo-600 p-8 rounded-2xl flex flex-col justify-end min-h-[200px]">
              <span className="text-3xl font-bold text-white mb-2">250ms</span>
              <span className="text-xs uppercase tracking-widest text-indigo-100">Average Global Latency</span>
            </div>
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 flex flex-col justify-end min-h-[200px] group hover:bg-indigo-600/10 transition-colors">
              <span className="text-3xl font-bold text-white mb-2">5.2B+</span>
              <span className="text-xs uppercase tracking-widest text-slate-400">Daily API Calls</span>
            </div>
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 flex flex-col justify-end min-h-[200px] group hover:bg-indigo-600/10 transition-colors">
              <span className="text-3xl font-bold text-white mb-2">0</span>
              <span className="text-xs uppercase tracking-widest text-slate-400">Critical Failures</span>
            </div>
          </div>
        </div>

        <div className="relative rounded-3xl overflow-hidden h-[500px] border border-white/10">
          <img 
            src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=2000" 
            alt="Advanced Robotics and Tech" 
            className="w-full h-full object-cover grayscale opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
          <div className="absolute bottom-12 left-12 max-w-xl">
             <h3 className="text-3xl font-bold text-white mb-4">A legacy of precision.</h3>
             <p className="text-slate-200 font-normal">From our lab in Palo Alto to server clusters across 40 countries, Syncore represents the absolute cutting edge of digital infrastructure.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;