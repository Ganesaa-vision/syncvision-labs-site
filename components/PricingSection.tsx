import React from 'react';
import { CheckCircle2, ArrowRight, MessageSquare, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface Plan {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  buttonText?: string;
}

interface PricingSectionProps {
  title: string;
  description: string;
  plans: Plan[];
}

const PricingSection: React.FC<PricingSectionProps> = ({ title, description, plans }) => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto" id="pricing">
      <div className="text-center mb-20">
        <span className="font-mono text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Investment</span>
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">{title}</h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">{description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {plans.map((plan, idx) => (
          <div 
            key={idx} 
            className={`relative p-6 md:p-8 rounded-[2rem] border flex flex-col ${
              plan.isPopular 
                ? 'bg-white dark:bg-slate-900/80 border-indigo-500/50 shadow-2xl shadow-indigo-500/10 md:scale-105 z-10' 
                : 'bg-white/60 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
            } transition-all duration-300`}
          >
            {plan.isPopular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-[10px] font-bold uppercase tracking-widest rounded-full shadow-lg">
                Recommended
              </div>
            )}
            
            <div className="mb-8">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">{plan.price}</span>
                {plan.period && <span className="text-slate-500 text-sm font-mono">{plan.period}</span>}
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed min-h-[3rem]">{plan.description}</p>
            </div>

            <div className="h-px w-full bg-slate-200 dark:bg-slate-800 mb-8"></div>

            <ul className="space-y-4 mb-8 flex-1">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${plan.isPopular ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-400 dark:text-slate-600'}`} />
                  <span className="leading-tight">{feature}</span>
                </li>
              ))}
            </ul>

            <Link 
              to="/contact" 
              className={`w-full py-4 rounded-xl font-bold text-sm uppercase tracking-wider text-center transition-all flex items-center justify-center gap-2 ${
                plan.isPopular 
                  ? 'bg-indigo-600 dark:bg-white text-white dark:text-black hover:bg-indigo-700 dark:hover:bg-slate-200' 
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {plan.buttonText || 'Select Plan'} <ArrowRight size={16} />
            </Link>
          </div>
        ))}
      </div>

      {/* Custom Enterprise Option */}
      <div className="p-8 md:p-12 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-950 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-20 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity"><ShieldCheck size={300} /></div>
        <div className="flex-1 relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-emerald-100 dark:bg-emerald-500/10 rounded-lg text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20">
              <MessageSquare size={20} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Need a Custom Architecture?</h3>
          </div>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
            For large-scale platforms, multi-vendor marketplaces, or high-security internal systems. 
            We engineer proprietary solutions with custom API integrations and load balancing.
          </p>
        </div>
        <Link 
          to="/contact" 
          className="relative z-10 px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-bold rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-all whitespace-nowrap border border-slate-200 dark:border-slate-700"
        >
          Get Custom Quote
        </Link>
      </div>
    </section>
  );
};

export default PricingSection;