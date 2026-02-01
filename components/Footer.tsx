import React from 'react';
import { BRAND_NAME, TAGLINE, BRAND_DOMAIN } from '../constants';
import { PageType } from '../types';

interface FooterProps {
  onNavigate: (page: PageType) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-titanium pt-32 pb-12 px-6 border-t border-white/5 font-mono">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">
        
        <div className="md:col-span-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 bg-interstellar rounded flex items-center justify-center font-black text-slate-100 text-xs">V</div>
            <span className="text-slate-100 font-bold uppercase tracking-widest text-sm">{BRAND_NAME}</span>
          </div>
          <p className="max-w-sm text-slate-200 text-xs font-black uppercase tracking-widest leading-loose mb-6">
            {TAGLINE} Engineering the foundations of modern business logic with industrial precision.
          </p>
          <p className="text-interstellar font-bold text-[10px] tracking-widest uppercase">{BRAND_DOMAIN}</p>
        </div>

        <div className="md:col-span-3">
          <h4 className="text-slate-100 text-[10px] uppercase font-bold tracking-[0.3em] mb-8">Digital Infrastructure</h4>
          <ul className="space-y-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">
            <li><button onClick={() => onNavigate('home')} className="hover:text-interstellar transition-colors">System Overview</button></li>
            <li><button onClick={() => onNavigate('services')} className="hover:text-interstellar transition-colors">Service Matrix</button></li>
            <li><button onClick={() => onNavigate('work')} className="hover:text-interstellar transition-colors">Verified Work</button></li>
            <li><button onClick={() => onNavigate('about')} className="hover:text-interstellar transition-colors">Architect Team</button></li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <h4 className="text-slate-100 text-[10px] uppercase font-bold tracking-[0.3em] mb-8">System Status</h4>
          <div className="p-6 bg-armor/40 border border-white/5 rounded-[2rem] space-y-4 shadow-inner">
            <div className="flex justify-between items-center text-[10px] text-slate-400 font-black tracking-widest">
              <span>Systems</span>
              <span className="text-growth uppercase font-bold">Operational</span>
            </div>
            <div className="flex justify-between items-center text-[10px] text-slate-400 font-black tracking-widest">
              <span>Availability</span>
              <span className="text-interstellar uppercase font-bold">Open Q1 2026</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.4em] font-black text-slate-500">
        <p>&copy; 2025 SYNCVISION SYSTEMS GLOBAL. ALL SYSTEMS NOMINAL.</p>
        <div className="flex gap-8 mt-6 md:mt-0">
          <span className="hover:text-slate-100 cursor-pointer">Security_Protocol</span>
          <span className="hover:text-slate-100 cursor-pointer">Logic_Privacy</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;