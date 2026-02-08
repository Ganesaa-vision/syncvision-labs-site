import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation } from 'react-router-dom';
import { Bot, MessageSquare, Zap, ArrowRight, Clock, TrendingUp, CheckCircle2 } from 'lucide-react';
import PricingSection from '../components/PricingSection';

const AutomationView: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0a0a0a] text-slate-900 dark:text-slate-200 font-sans selection:bg-purple-500/30 transition-colors duration-300">
      <Helmet>
        <title>AI Automation & WhatsApp Chatbots | Business Automation Malaysia</title>
        <meta name="description" content="Automate your sales and support with AI Agents. We build WhatsApp Chatbots and AI workflows that qualify leads and answer inquiries 24/7." />
        <meta name="keywords" content="WhatsApp Chatbot Malaysia, AI Automation, Business Process Automation, AI Agents, Customer Service Bot" />
      </Helmet>

      <div className="pt-24 md:pt-32 pb-12 md:pb-20 px-6 max-w-7xl mx-auto">
        <div className="mb-24">
          <span className="font-mono text-purple-600 dark:text-purple-400 text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Autonomous Systems</span>
          <h1 className="text-4xl md:text-7xl font-bold tracking-tighter text-slate-900 dark:text-white mb-8">
            WORK ON <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">AUTOPILOT.</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
            Stop losing leads to slow response times. We deploy intelligent AI Agents that live inside your WhatsApp and Website to answer inquiries, qualify leads, and schedule appointments 24/7.
          </p>
        </div>

        {/* === NEW: AUTOMATION IMPACT CASE STUDY === */}
        <div className="mb-32 relative">
            <div className="absolute inset-0 bg-purple-500/5 blur-[100px] rounded-full pointer-events-none"></div>
            <div className="relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-[3rem] p-8 md:p-16 overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-100 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 text-xs font-black uppercase tracking-widest mb-8">
                            <Zap size={14} /> Verified Efficiency
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 leading-[0.9] tracking-tighter">
                            HUMAN ERROR: <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">ELIMINATED.</span>
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-10 border-l-4 border-purple-500/50 pl-6">
                            We deployed a custom WhatsApp Auto-Reply Engine for a high-volume client. 
                            The result? They stopped answering the same question 50 times a day.
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-6 bg-slate-100 dark:bg-black/40 rounded-2xl border border-slate-200 dark:border-white/5">
                                <div className="text-3xl font-black text-green-400 mb-1">80%</div>
                                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Productivity Boost</div>
                            </div>
                            <div className="p-6 bg-slate-100 dark:bg-black/40 rounded-2xl border border-slate-200 dark:border-white/5">
                                <div className="text-3xl font-black text-slate-900 dark:text-white mb-1">0s</div>
                                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Response Time</div>
                            </div>
                            <div className="p-6 bg-slate-100 dark:bg-black/40 rounded-2xl border border-slate-200 dark:border-white/5">
                                <div className="text-3xl font-black text-purple-400 mb-1">24/7</div>
                                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Uptime</div>
                            </div>
                            <div className="p-6 bg-slate-100 dark:bg-black/40 rounded-2xl border border-slate-200 dark:border-white/5">
                                <div className="text-3xl font-black text-blue-400 mb-1">100%</div>
                                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Lead Capture</div>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                         {/* Visual representation of the chat flow */}
                         <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-2xl relative z-10">
                            <div className="flex items-center justify-between mb-8 border-b border-slate-200 dark:border-slate-800 pb-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-widest">Live System Log</span>
                                </div>
                                <Bot className="text-purple-500" size={20} />
                            </div>
                            <div className="space-y-4 font-mono text-xs">
                                <div className="flex gap-4 opacity-50">
                                    <span className="text-slate-500 w-12">10:00</span>
                                    <span className="text-slate-700 dark:text-slate-300">Incoming Inquiry: "Price list?"</span>
                                </div>
                                <div className="flex gap-4 text-purple-300">
                                    <span className="text-purple-600 dark:text-purple-500 w-12">10:00</span>
                                    <span className="font-bold">Auto-Reply Triggered [Instant]</span>
                                </div>
                                <div className="flex gap-4 opacity-50">
                                    <span className="text-slate-500 w-12">10:01</span>
                                    <span className="text-slate-700 dark:text-slate-300">Client: "Okay, I want Package B"</span>
                                </div>
                                <div className="flex gap-4 text-green-400">
                                    <span className="text-green-600 w-12">10:01</span>
                                    <span className="font-bold">Lead Qualified & Tagged "Hot"</span>
                                </div>
                                 <div className="flex gap-4 text-blue-400">
                                    <span className="text-blue-600 w-12">10:01</span>
                                    <span className="font-bold">Notification Sent to Sales Team</span>
                                </div>
                            </div>
                         </div>
                         {/* Decorative elements */}
                         <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl"></div>
                         <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl"></div>
                    </div>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
           <div className="order-2 lg:order-1">
              <div className="space-y-8">
                 <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-500/10 flex items-center justify-center flex-shrink-0 text-green-600 dark:text-green-500">
                       <MessageSquare size={24} />
                    </div>
                    <div>
                       <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">WhatsApp Business API</h3>
                       <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                          We hook directly into the official WhatsApp API. Send broadcast messages, set up auto-reply flows, and let AI handle the initial conversation before handing off to a human.
                       </p>
                    </div>
                 </div>
                 
                 <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-500/10 flex items-center justify-center flex-shrink-0 text-purple-600 dark:text-purple-500">
                       <Bot size={24} />
                    </div>
                    <div>
                       <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">AI Knowledge Base</h3>
                       <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                          We train the AI on your specific company data (PDFs, Website, FAQs). It answers questions accurately without hallucinating, acting as a perfect Tier 1 support agent.
                       </p>
                    </div>
                 </div>

                 <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-xl bg-yellow-100 dark:bg-yellow-500/10 flex items-center justify-center flex-shrink-0 text-yellow-600 dark:text-yellow-500">
                       <Zap size={24} />
                    </div>
                    <div>
                       <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Lead Qualification</h3>
                       <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                          The AI asks the right questions to qualify the lead (Budget, Timeline, Needs) and only notifies your sales team when a prospect is hot and ready to buy.
                       </p>
                    </div>
                 </div>
              </div>
           </div>
           
           <div className="order-1 lg:order-2">
              <div className="bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] p-8 shadow-2xl relative">
                 <div className="absolute -top-4 -right-4 bg-green-500 text-black font-bold px-4 py-2 rounded-lg text-xs uppercase tracking-widest transform rotate-3">Live Demo</div>
                 <div className="space-y-4 font-mono text-xs">
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-tr-xl rounded-br-xl rounded-bl-xl w-3/4 text-slate-700 dark:text-slate-300 shadow-sm">
                       Hello! I'm interested in your services. What is the pricing?
                    </div>
                    <div className="bg-indigo-100 dark:bg-indigo-900/50 p-4 rounded-tl-xl rounded-br-xl rounded-bl-xl w-3/4 ml-auto text-indigo-800 dark:text-indigo-200 border border-indigo-200 dark:border-indigo-500/20 shadow-sm">
                       Hi there! Our pricing depends on the project scope. Are you looking for Web Development or Mobile App services?
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-tr-xl rounded-br-xl rounded-bl-xl w-3/4 text-slate-700 dark:text-slate-300 shadow-sm">
                       Web Development for my restaurant.
                    </div>
                    <div className="bg-indigo-100 dark:bg-indigo-900/50 p-4 rounded-tl-xl rounded-br-xl rounded-bl-xl w-3/4 ml-auto text-indigo-800 dark:text-indigo-200 border border-indigo-200 dark:border-indigo-500/20 shadow-sm">
                       Great! For restaurants, we have a specialized package that includes QR Menus and Reservation systems. Would you like to see a demo?
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* === NEW: WHY AUTOMATION SECTION === */}
        <div className="mb-32">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Why Robots Win.</h2>
                <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                    It's not about replacing humans. It's about removing the bottleneck.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-8 bg-white dark:bg-slate-900/30 border border-slate-200 dark:border-slate-800 rounded-3xl hover:border-purple-500/30 transition-all shadow-sm dark:shadow-none">
                    <Clock className="w-10 h-10 text-purple-400 mb-6" />
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Speed Kills Competitors</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                        If you take 15 minutes to reply, the lead is gone. Our bots reply in 0.2 seconds, locking the customer in before they message the next shop.
                    </p>
                </div>
                <div className="p-8 bg-white dark:bg-slate-900/30 border border-slate-200 dark:border-slate-800 rounded-3xl hover:border-pink-500/30 transition-all shadow-sm dark:shadow-none">
                    <CheckCircle2 className="w-10 h-10 text-pink-400 mb-6" />
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Zero Bad Days</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                        Humans get tired, sick, and grumpy. AI Agents are polite, professional, and accurate 24 hours a day, 365 days a year.
                    </p>
                </div>
                <div className="p-8 bg-white dark:bg-slate-900/30 border border-slate-200 dark:border-slate-800 rounded-3xl hover:border-blue-500/30 transition-all shadow-sm dark:shadow-none">
                    <TrendingUp className="w-10 h-10 text-blue-400 mb-6" />
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Data-Driven Sales</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                        We track every interaction. You get a report showing exactly what customers are asking for, so you can optimize your offers.
                    </p>
                </div>
            </div>
        </div>

        {/* PRICING */}
        <PricingSection 
          title="Automation Packages"
          description="From simple WhatsApp setups to advanced AI employees. Choose your level of automation."
          plans={[
            {
              name: "The 24/7 Receptionist",
              price: "RM 499",
              period: "/one-time",
              description: "\"Never Miss a Customer Again.\" We transform your WhatsApp into a fully automated sales machine.",
              features: ["Professional Profile Setup", "Smart Catalog (10 Items)", "Logic-Based Auto-Replies", "Speed Shortcuts Library", "CRM Labeling System"],
              buttonText: "Setup WhatsApp"
            },
            {
              name: "The Digital Employee",
              price: "RM 1,999",
              period: "+ RM 350/mo",
              description: "\"Hire an Expert.\" A custom AI trained on your PDFs and website to handle support and capture leads.",
              features: ["Custom 'Brain' Training", "Website Chat Widget", "Human Handover Logic", "Monthly Intelligence Report", "Zero Hallucinations"],
              isPopular: true,
              buttonText: "Hire AI Agent"
            },
            {
              name: "The Content Factory",
              price: "RM 899",
              period: "/one-time",
              description: "\"One Click. One Month of Content.\" A private AI engine that writes blogs and social posts in your voice.",
              features: ["Custom Automation Workflow", "Brand Voice Calibration", "Blog + Social Output", "SEO Optimized Writing", "30-Min Training Session"],
              buttonText: "Start Creating"
            }
          ]}
        />

        <div className="text-center">
           <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Ready to Automate?</h2>
           <Link to="/contact" className="inline-flex items-center gap-3 bg-purple-600 text-white px-8 py-4 rounded-full font-bold hover:bg-purple-500 transition-all">
             Deploy AI Agent <ArrowRight size={18} />
           </Link>
        </div>

      </div>
    </div>
  );
};

export default AutomationView;