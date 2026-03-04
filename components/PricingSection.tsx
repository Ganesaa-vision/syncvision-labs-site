import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { WhatsAppButton } from './WhatsAppButton';

interface Plan {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  buttonText: string;
  isPopular?: boolean;
  customButton?: React.ReactNode;
}

interface PricingSectionProps {
  title: string;
  description: string;
  plans: Plan[];
  serviceName?: string;
}

const PricingSection: React.FC<PricingSectionProps> = ({ title, description, plans, serviceName = "Pricing Inquiry" }) => {
  if (!plans || !Array.isArray(plans)) return null;

  return (
    <section className="py-12">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">{title}</h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">{description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div 
            key={index}
            className={`relative p-8 rounded-3xl border flex flex-col ${
              plan.isPopular 
                ? 'bg-slate-900 dark:bg-slate-800 border-indigo-500 text-white shadow-2xl scale-105 z-10' 
                : 'bg-white dark:bg-slate-900/40 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-200 hover:border-indigo-500/30 transition-colors'
            }`}
          >
            {plan.isPopular && (
              <div className="absolute top-0 right-0 bg-indigo-500 text-white text-xs font-bold px-4 py-1 rounded-bl-xl rounded-tr-2xl uppercase tracking-widest">
                Most Popular
              </div>
            )}
            
            <h3 className={`text-xl font-bold mb-2 ${plan.isPopular ? 'text-white' : 'text-slate-900 dark:text-white'}`}>{plan.name}</h3>
            <div className="mb-4">
              <span className="text-4xl font-black">{plan.price}</span>
              {plan.period && <span className={`text-sm font-medium ${plan.isPopular ? 'text-slate-400' : 'text-slate-500'}`}>{plan.period}</span>}
            </div>
            <p className={`text-sm mb-8 leading-relaxed ${plan.isPopular ? 'text-slate-300' : 'text-slate-500 dark:text-slate-400'}`}>{plan.description}</p>
            
            <ul className="space-y-4 mb-8 flex-grow">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${plan.isPopular ? 'text-indigo-400' : 'text-indigo-500'}`} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            {plan.customButton ? (
              plan.customButton
            ) : (
              <WhatsAppButton 
                serviceName={serviceName}
                packageLabel={plan.name}
                buttonText={plan.buttonText}
                className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
                  plan.isPopular 
                    ? 'bg-indigo-500 hover:bg-indigo-400 text-white shadow-lg shadow-indigo-500/25' 
                    : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white'
                }`}
              >
                {plan.buttonText} <ArrowRight size={16} />
              </WhatsAppButton>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;