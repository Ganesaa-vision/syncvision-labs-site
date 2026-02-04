import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation } from 'react-router-dom';
import { Bot, MessageSquare, Zap, ArrowRight } from 'lucide-react';
import PricingSection from '../components/PricingSection';

const AutomationView: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-slate-200 font-sans">
      <Helmet>
        <title>AI Automation & WhatsApp Chatbots | Business Automation Malaysia</title>
        <meta name="description" content="Automate your sales and support with AI Agents. We build WhatsApp Chatbots and AI workflows that qualify leads and answer inquiries 24/7." />
        <meta name="keywords" content="WhatsApp Chatbot Malaysia, AI Automation, Business Process Automation, AI Agents, Customer Service Bot" />
      </Helmet>

      <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className="mb-24">
          <span className="font-mono text-purple-400 text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Autonomous Systems</span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-8">
            WORK ON <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">AUTOPILOT.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
            Stop losing leads to slow response times. We deploy intelligent AI Agents that live inside your WhatsApp and Website to answer inquiries, qualify leads, and schedule appointments 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
           <div className="order-2 lg:order-1">
              <div className="space-y-8">
                 <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0 text-green-500">
                       <MessageSquare size={24} />
                    </div>
                    <div>
                       <h3 className="text-xl font-bold text-white mb-2">WhatsApp Business API</h3>
                       <p className="text-slate-400 text-sm leading-relaxed">
                          We hook directly into the official WhatsApp API. Send broadcast messages, set up auto-reply flows, and let AI handle the initial conversation before handing off to a human.
                       </p>
                    </div>
                 </div>
                 
                 <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center flex-shrink-0 text-purple-500">
                       <Bot size={24} />
                    </div>
                    <div>
                       <h3 className="text-xl font-bold text-white mb-2">AI Knowledge Base</h3>
                       <p className="text-slate-400 text-sm leading-relaxed">
                          We train the AI on your specific company data (PDFs, Website, FAQs). It answers questions accurately without hallucinating, acting as a perfect Tier 1 support agent.
                       </p>
                    </div>
                 </div>

                 <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center flex-shrink-0 text-yellow-500">
                       <Zap size={24} />
                    </div>
                    <div>
                       <h3 className="text-xl font-bold text-white mb-2">Lead Qualification</h3>
                       <p className="text-slate-400 text-sm leading-relaxed">
                          The AI asks the right questions to qualify the lead (Budget, Timeline, Needs) and only notifies your sales team when a prospect is hot and ready to buy.
                       </p>
                    </div>
                 </div>
              </div>
           </div>
           
           <div className="order-1 lg:order-2">
              <div className="bg-slate-900 border border-slate-800 rounded-[2.5rem] p-8 shadow-2xl relative">
                 <div className="absolute -top-4 -right-4 bg-green-500 text-black font-bold px-4 py-2 rounded-lg text-xs uppercase tracking-widest transform rotate-3">Live Demo</div>
                 <div className="space-y-4 font-mono text-xs">
                    <div className="bg-slate-800 p-4 rounded-tr-xl rounded-br-xl rounded-bl-xl w-3/4 text-slate-300">
                       Hello! I'm interested in your services. What is the pricing?
                    </div>
                    <div className="bg-indigo-900/50 p-4 rounded-tl-xl rounded-br-xl rounded-bl-xl w-3/4 ml-auto text-indigo-200 border border-indigo-500/20">
                       Hi there! Our pricing depends on the project scope. Are you looking for Web Development or Mobile App services?
                    </div>
                    <div className="bg-slate-800 p-4 rounded-tr-xl rounded-br-xl rounded-bl-xl w-3/4 text-slate-300">
                       Web Development for my restaurant.
                    </div>
                    <div className="bg-indigo-900/50 p-4 rounded-tl-xl rounded-br-xl rounded-bl-xl w-3/4 ml-auto text-indigo-200 border border-indigo-500/20">
                       Great! For restaurants, we have a specialized package that includes QR Menus and Reservation systems. Would you like to see a demo?
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* PRICING */}
        <PricingSection 
          title="Automation Setup"
          description="One-time setup fees for perpetual efficiency."
          plans={[
            {
              name: "Chatbot Starter",
              price: "RM 2,500",
              description: "Handle FAQs and basic inquiries automatically.",
              features: ["WhatsApp Business API", "Keyword Auto-Reply", "Menu Flow Logic", "Basic Handover", "1 Month Support"],
              buttonText: "Automate Chat"
            },
            {
              name: "AI Sales Agent",
              price: "RM 5,500",
              description: "Intelligent lead qualification and CRM syncing.",
              features: ["OpenAI/Gemini Integration", "Knowledge Base Training", "Lead Scoring", "CRM Integration (HubSpot)", "Sentiment Analysis"],
              isPopular: true,
              buttonText: "Deploy Agent"
            },
            {
              name: "Full Workflow",
              price: "RM 10,000+",
              description: "End-to-end business process automation.",
              features: ["Multi-Channel (Web/WA/IG)", "Payment Integration", "Inventory Sync", "Custom API Development", "Dashboard Reporting"],
              buttonText: "Full Auto"
            }
          ]}
        />

        <div className="text-center">
           <h2 className="text-2xl font-bold text-white mb-8">Ready to Automate?</h2>
           <Link to="/contact" className="inline-flex items-center gap-3 bg-purple-600 text-white px-8 py-4 rounded-full font-bold hover:bg-purple-500 transition-all">
             Deploy AI Agent <ArrowRight size={18} />
           </Link>
        </div>

      </div>
    </div>
  );
};

export default AutomationView;