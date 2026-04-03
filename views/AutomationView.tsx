import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation } from 'react-router-dom';
import { Bot, MessageSquare, Zap, Clock, TrendingUp, CheckCircle2, ChevronDown, ChevronUp, ArrowRight, Terminal } from 'lucide-react';
import PricingSection from '../components/PricingSection';
import Footer from '../components/Footer';
import { PageTransition } from '../PageTransition';
import { IMAGES } from '../images';
import { m, LazyMotion, domAnimation, AnimatePresence } from 'framer-motion';
import { WhatsAppButton } from '../components/WhatsAppButton';

const AutomationView: React.FC = () => {
  const { pathname } = useLocation();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  const faqs = [
    {
      q: "Can an AI chatbot qualify leads for my business?",
      a: "Yes, our custom AI agents engage customers 24/7, answering questions and capturing lead data before transferring them to your sales team."
    },
    {
      q: "Does the AI chatbot integrate with WhatsApp in Malaysia?",
      a: "Absolutely. We specialize in WhatsApp Business API integration, allowing the AI to automatically reply to Malaysian customers, qualify leads, and provide instant support."
    },
    {
      q: "Can the AI learn from my own business data?",
      a: "Yes, we train the AI on your specific company data (PDFs, Website, FAQs). It acts as a perfect Tier 1 support agent without hallucinating or making up answers."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Omino Tech AI Automation",
    "url": "https://www.ominotech.com.my/services/automation",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Omino Tech - Web Development Company",
      "url": "https://www.ominotech.com.my"
    },
    "description": "Enterprise-grade AI agents, LLM integrations, and WhatsApp API automation for Malaysian SMEs.",
    "areaServed": ["Malaysia", "Selangor", "Kuala Lumpur"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Automation Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "The 24/7 Receptionist" }, "price": "499.00", "priceCurrency": "MYR" },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "The Digital Employee" }, "price": "1999.00", "priceCurrency": "MYR" },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "The Content Factory" }, "price": "899.00", "priceCurrency": "MYR" }
      ]
    }
  };

  const combinedSchema = [faqSchema, serviceSchema];

  return (
    <PageTransition>
    <LazyMotion features={domAnimation}>
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] text-slate-900 dark:text-slate-200 font-sans selection:bg-purple-500/30 transition-colors duration-300">
      <Helmet>
        <title>AI Chatbot Development Company Malaysia | Business Automation - Omino Tech</title>
        <meta name="description" content="Automate your customer service. We build custom RAG-powered AI agents and WhatsApp auto-reply systems for businesses across Malaysia and Selangor." />
        <meta name="keywords" content="WhatsApp Chatbot Malaysia, AI Automation, Business Process Automation, AI Agents, Customer Service Bot, Zapier API integration, RAG LLM integration, WhatsApp auto reply setup Malaysia, Customer automation, AI agent builders for local business" />
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Omino Tech" />
        <meta property="og:image" content={IMAGES.GLOBAL.OG_IMAGE} />
        <meta name="twitter:image" content={IMAGES.GLOBAL.OG_IMAGE} />
        <link rel="manifest" href="/site.webmanifest" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }} />
      </Helmet>

      <m.main initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} className="pt-24 md:pt-32 pb-12 md:pb-20 px-6 max-w-7xl mx-auto flex-grow w-full">
        {/* HERO SECTION */}
        <div className="mb-24 relative pt-6 md:pt-12">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#80808015_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                
                {/* LEFT COLUMN: Title & CTAs */}
                <m.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="lg:col-span-7 flex flex-col items-start text-left"
                >
                    <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/80 dark:bg-[#0a0a0a]/80 border border-slate-200/50 dark:border-white/10 mb-6 md:mb-8 backdrop-blur-xl shadow-lg shadow-purple-500/5 transform-gpu transition-all hover:scale-105 hover:border-purple-500/30">
                      <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(168,85,247,0.8)]"></div>
                      <span className="font-mono text-slate-800 dark:text-slate-300 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em]">INTELLIGENT SYSTEMS</span>
                    </div>

                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black tracking-tighter text-slate-900 dark:text-white leading-[1.05] mb-8">
                      AI Agents & <br/> <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-500 via-fuchsia-500 to-pink-500 dark:from-purple-400 dark:via-fuchsia-400 dark:to-pink-400">Business Automation.</span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium mb-10 max-w-xl">
                        Stop losing leads to slow response times. We deploy intelligent <strong className="text-slate-900 dark:text-white">AI agents and RAG-powered LLMs</strong> that live inside your WhatsApp and Website to answer inquiries, qualify leads, and schedule appointments 24/7. Built and integrated by a top-rated <Link to="/" className="text-purple-600 dark:text-purple-400 font-bold hover:underline">Web Development Company in Malaysia</Link>.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-start gap-4 sm:gap-6 w-full sm:w-auto mb-10">
                        <WhatsAppButton 
                            serviceName="AI Automation"
                            buttonText="Deploy AI Agent"
                            className="w-full sm:w-auto group relative inline-flex items-center justify-center px-10 py-5 font-bold text-sm uppercase tracking-[0.2em] text-white dark:text-slate-900 overflow-hidden rounded-full bg-slate-900 dark:bg-white hover:scale-105 active:scale-95 transition-all duration-500 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] dark:shadow-[0_20px_40px_-10px_rgba(255,255,255,0.2)] hover:shadow-[0_20px_50px_-10px_rgba(168,85,247,0.4)]"
                            showIcon={false}
                        >
                            <span className="absolute inset-0 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"></span>
                            <span className="relative flex items-center gap-3 group-hover:text-white transition-colors duration-500">
                                Deploy AI Agent <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                            </span>
                        </WhatsAppButton>
                        
                        <a href="#pricing" onClick={(e) => { e.preventDefault(); document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' }); }} className="w-full sm:w-auto group relative inline-flex items-center justify-center px-10 py-5 font-bold text-sm uppercase tracking-[0.2em] text-slate-800 dark:text-white overflow-hidden rounded-full border border-slate-300 dark:border-white/20 bg-white/50 dark:bg-white/5 hover:scale-105 active:scale-95 transition-all duration-500 backdrop-blur-md hover:shadow-[0_0_30px_rgba(0,0,0,0.05)] dark:hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:border-slate-400 dark:hover:border-white/40">
                            <span className="absolute inset-0 bg-slate-100 dark:bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"></span>
                            <span className="relative flex items-center gap-3 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-500">
                                View Packages
                            </span>
                        </a>
                    </div>

                    <div className="inline-flex flex-wrap justify-start items-center gap-x-6 gap-y-3 px-8 py-4 rounded-full bg-white/40 dark:bg-white/[0.02] border border-slate-200/50 dark:border-white/5 backdrop-blur-xl shadow-sm">
                        <div className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300"><CheckCircle2 className="w-4 h-4 text-purple-500" /> WhatsApp API Integration</div>
                        <div className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700 hidden sm:block"></div>
                        <div className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300"><CheckCircle2 className="w-4 h-4 text-purple-500" /> Custom RAG Training</div>
                    </div>
                </m.div>

                {/* RIGHT COLUMN: AI Terminal */}
                <m.div 
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="lg:col-span-5 relative w-full group mt-10 lg:mt-0"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-fuchsia-500/20 to-pink-500/20 blur-2xl rounded-[2rem] opacity-40 pointer-events-none transform-gpu transition-opacity duration-500 group-hover:opacity-60"></div>
                    
                    <div className="relative p-[1px] rounded-[2.5rem] bg-gradient-to-br from-purple-500/40 via-slate-300/50 to-pink-500/40 dark:from-purple-500/40 dark:via-slate-700/50 dark:to-pink-500/40 overflow-hidden shadow-2xl transform-gpu hover:-translate-y-2 transition-all duration-500">
                        <div className="relative bg-white/80 dark:bg-[#050505]/90 backdrop-blur-2xl p-8 md:p-10 rounded-[2.5rem] text-left flex flex-col h-full font-mono">
                            
                            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200/60 dark:border-white/5">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-sm"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-sm"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-sm"></div>
                                </div>
                                <div className="text-[10px] text-slate-500 dark:text-slate-400 flex items-center gap-2 font-bold tracking-widest">
                                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_5px_#10b981]"></span>
                                    agent_core.py
                                </div>
                            </div>
                            
                            <div className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
                                <div className="flex gap-4"><span className="text-purple-600 dark:text-purple-400 font-bold">import</span> <span>LangChain</span></div>
                                <div className="flex gap-4"><span className="text-purple-600 dark:text-purple-400 font-bold">import</span> <span>WhatsApp_API</span></div>
                                <div className="h-4"></div>
                                <div className="flex gap-4">
                                    <span className="text-blue-600 dark:text-blue-400 font-bold">def</span> <span className="text-yellow-600 dark:text-yellow-400 font-bold">init_agent</span>(knowledge_base):
                                </div>
                                <div className="flex gap-4 pl-4">
                                    <span>model = LLM(</span><span className="text-green-600 dark:text-green-400">"gpt-4-turbo"</span><span>)</span>
                                </div>
                                <div className="flex gap-4 pl-4">
                                    <span>context = RAG.load(knowledge_base)</span>
                                </div>
                                <div className="flex gap-4 pl-4">
                                    <span className="text-purple-600 dark:text-purple-400 font-bold">return</span> <span>SalesAgent(model, context)</span>
                                </div>
                                <div className="h-4"></div>
                                <div className="flex gap-4 opacity-60 dark:opacity-40">
                                    <span># Ready to process 10,000+ leads/day</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </m.div>
            </div>
        </div>

        {/* === NEW: AUTOMATION IMPACT CASE STUDY === */}
        <m.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-32 relative group"
        >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-fuchsia-500/10 to-pink-500/10 blur-3xl rounded-[3rem] opacity-50 transition-opacity duration-500 group-hover:opacity-80 pointer-events-none"></div>
            <div className="relative p-[1px] rounded-[3rem] bg-gradient-to-b from-purple-500/30 to-transparent dark:from-purple-500/30 overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-1">
                <div className="relative bg-white/80 dark:bg-[#050505]/90 backdrop-blur-2xl p-10 md:p-16 rounded-[3rem] grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-100 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 text-xs font-black uppercase tracking-widest mb-8">
                            <Zap size={14} /> Verified Efficiency
                        </div>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-slate-900 dark:text-white mb-6 leading-[1.1]">
                            HUMAN ERROR: <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">ELIMINATED.</span>
                        </h2>
                        <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-10 border-l-4 border-purple-500/50 pl-6 font-medium">
                            We deployed a custom WhatsApp Auto-Reply Engine for a high-volume client. 
                            The result? They stopped answering the same question 50 times a day.
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-6 bg-white dark:bg-white/[0.03] rounded-2xl border border-slate-200 dark:border-white/10 shadow-sm transition-colors hover:border-green-500/30">
                                <div className="text-3xl font-black text-green-400 mb-1">80%</div>
                                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-600 dark:text-slate-400">Productivity Boost</div>
                            </div>
                            <div className="p-6 bg-white dark:bg-white/[0.03] rounded-2xl border border-slate-200 dark:border-white/10 shadow-sm transition-colors hover:border-slate-500/30">
                                <div className="text-3xl font-black text-slate-900 dark:text-white mb-1">0s</div>
                                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-600 dark:text-slate-400">Response Time</div>
                            </div>
                            <div className="p-6 bg-white dark:bg-white/[0.03] rounded-2xl border border-slate-200 dark:border-white/10 shadow-sm transition-colors hover:border-purple-500/30">
                                <div className="text-3xl font-black text-purple-400 mb-1">24/7</div>
                                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-600 dark:text-slate-400">Uptime</div>
                            </div>
                            <div className="p-6 bg-white dark:bg-white/[0.03] rounded-2xl border border-slate-200 dark:border-white/10 shadow-sm transition-colors hover:border-blue-500/30">
                                <div className="text-3xl font-black text-blue-400 mb-1">100%</div>
                                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-600 dark:text-slate-400">Lead Capture</div>
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
        </m.div>

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
                          We hook directly into the <a href="https://business.whatsapp.com/products/api" target="_blank" rel="noopener noreferrer" className="text-green-600 dark:text-green-500 font-bold hover:underline">official WhatsApp API</a> via verified BSPs. Trigger broadcast marketing, handle <strong>WhatsApp auto reply setup Malaysia</strong>, and utilize LangChain to map complex conversational flows directly into your CRM.
                       </p>
                    </div>
                 </div>
                 
                 <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-500/10 flex items-center justify-center flex-shrink-0 text-purple-600 dark:text-purple-500">
                       <Bot size={24} />
                    </div>
                    <div>
                       <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Custom RAG Architecture</h3>
                       <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                          We deploy Retrieval-Augmented Generation (RAG) pipelines on your proprietary data (PDFs, Databases, Spreadsheets). The AI uses semantic search to provide accurate, context-aware answers without hallucinating—fully trained on local Malaysian phrasing.
                       </p>
                    </div>
                 </div>

                 <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-xl bg-yellow-100 dark:bg-yellow-500/10 flex items-center justify-center flex-shrink-0 text-yellow-600 dark:text-yellow-500">
                       <Zap size={24} />
                    </div>
                    <div>
                       <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Zapier & Make Automation</h3>
                       <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                          The AI acts as an autonomous worker, executing tasks via APIs. We integrate <a href="https://zapier.com/" target="_blank" rel="noopener noreferrer" className="text-yellow-600 dark:text-yellow-500 font-bold hover:underline">Zapier</a>, n8n, and Make.com endpoints so the bot can automatically book calendar slots, insert rows into Google Sheets, and trigger email sequences.
                       </p>
                    </div>
                 </div>
              </div>
           </div>
           
           <div className="order-1 lg:order-2">
              <div className="bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 rounded-[2.5rem] p-8 shadow-2xl relative transform-gpu hover:-translate-y-2 transition-transform duration-500">
                 <div className="absolute -top-4 -right-4 bg-green-500 text-black font-bold px-4 py-2 rounded-lg text-xs uppercase tracking-widest transform rotate-3">Live Demo</div>
                 <div className="space-y-4 font-mono text-xs">
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-tr-2xl rounded-br-2xl rounded-bl-2xl w-[85%] text-slate-700 dark:text-slate-300 shadow-sm border border-slate-200 dark:border-white/5">
                       Hello! I'm interested in your services. What is the pricing?
                    </div>
                    <div className="bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-900/40 dark:to-indigo-900/40 p-4 rounded-tl-2xl rounded-br-2xl rounded-bl-2xl w-[85%] ml-auto text-indigo-900 dark:text-indigo-200 border border-purple-200 dark:border-purple-500/20 shadow-sm">
                       Hi there! Our pricing depends on the project scope. Are you looking for Web Development or Mobile App services?
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-tr-2xl rounded-br-2xl rounded-bl-2xl w-[85%] text-slate-700 dark:text-slate-300 shadow-sm border border-slate-200 dark:border-white/5">
                       Web Development for my restaurant.
                    </div>
                    <div className="bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-900/40 dark:to-indigo-900/40 p-4 rounded-tl-2xl rounded-br-2xl rounded-bl-2xl w-[85%] ml-auto text-indigo-900 dark:text-indigo-200 border border-purple-200 dark:border-purple-500/20 shadow-sm">
                       Great! I've checked our database. We have a specialized RM 1,190 package for restaurants that includes QR Menus and automated reservations. Should I book a call with our technical lead for you tomorrow at 2 PM?
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* === NEW: WHY AUTOMATION SECTION === */}
        <m.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-32 relative group"
        >
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-indigo-500/10 blur-3xl rounded-[3rem] opacity-50 transition-opacity duration-500 group-hover:opacity-80 pointer-events-none"></div>
            <div className="relative p-[1px] rounded-[3rem] bg-gradient-to-b from-purple-500/30 to-transparent dark:from-purple-500/30 overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-1">
                <div className="relative bg-white/80 dark:bg-[#050505]/90 backdrop-blur-2xl p-10 md:p-16 rounded-[3rem]">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-slate-900 dark:text-white mb-6 leading-[1.1]">Why Robots Win.</h2>
                        <p className="text-slate-700 dark:text-slate-300 max-w-2xl mx-auto font-medium text-lg">
                            It's not about replacing humans. It's about removing the bottleneck. Let automation handle the repetitive noise so your team can focus on closing deals.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-8 bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 rounded-3xl hover:border-purple-500/30 transition-all shadow-sm dark:shadow-none transform-gpu hover:-translate-y-2">
                            <Clock className="w-10 h-10 text-purple-500 mb-6" />
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Speed Kills Competitors</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                If you take 15 minutes to reply, the lead is gone. Our bots reply via API in 0.2 seconds, locking the customer in before they message the next shop.
                            </p>
                        </div>
                        <div className="p-8 bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 rounded-3xl hover:border-pink-500/30 transition-all shadow-sm dark:shadow-none transform-gpu hover:-translate-y-2">
                            <CheckCircle2 className="w-10 h-10 text-pink-500 mb-6" />
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Zero Bad Days</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                Humans get tired, sick, and grumpy. Custom LLM Agents are polite, professional, and factually accurate 24 hours a day, 365 days a year.
                            </p>
                        </div>
                        <div className="p-8 bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 rounded-3xl hover:border-blue-500/30 transition-all shadow-sm dark:shadow-none transform-gpu hover:-translate-y-2">
                            <TrendingUp className="w-10 h-10 text-blue-500 mb-6" />
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Data-Driven Sales</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                We track every interaction. You get an organized dataset injected directly into your CRM, showing exactly what customers are asking for.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </m.div>

        {/* PRICING */}
        <div id="pricing">
        <PricingSection 
          serviceName="Automation"
          title="Automation Packages"
          description="From simple WhatsApp setups to advanced AI employees. Choose your level of automation."
          plans={[
            {
              name: "The 24/7 Receptionist",
              price: "RM 499",
              period: "/one-time",
              description: "\"Never Miss a Customer Again.\" We transform your WhatsApp into a fully automated sales machine.",
              features: ["Professional Profile Setup", "Smart Catalog (10 Items)", "Logic-Based Auto-Replies", "Speed Shortcuts Library", "CRM Labeling System"],
              buttonText: "Setup WhatsApp",
              customButton: (
                <WhatsAppButton 
                  serviceName="Automation"
                  packageLabel="The 24/7 Receptionist"
                  buttonText="Setup WhatsApp"
                  className="w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700"
                />
              )
            },
            {
              name: "The Digital Employee",
              price: "RM 1,999",
              period: "+ RM 350/mo",
              description: "\"Hire an Expert.\" A custom AI trained on your PDFs and website to handle support and capture leads.",
              features: ["Custom 'Brain' Training", "Website Chat Widget", "Human Handover Logic", "Monthly Intelligence Report", "Zero Hallucinations"],
              isPopular: true,
              buttonText: "Deploy Smart Agent",
              customButton: (
                <WhatsAppButton 
                  serviceName="Automation"
                  packageLabel="The Digital Employee"
                  buttonText="Deploy Smart Agent"
                  className="w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all bg-purple-600 hover:bg-purple-500 text-white shadow-lg shadow-purple-500/25"
                />
              )
            },
            {
              name: "The Content Factory",
              price: "RM 899",
              period: "/one-time",
              description: "\"One Click. One Month of Content.\" A private AI engine that writes blogs and social posts in your voice.",
              features: ["Custom Automation Workflow", "Brand Voice Calibration", "Blog + Social Output", "SEO Optimized Writing", "30-Min Training Session"],
              buttonText: "Start Creating",
              customButton: (
                <WhatsAppButton 
                  serviceName="Automation"
                  packageLabel="The Content Factory"
                  buttonText="Start Creating"
                  className="w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700"
                />
              )
            }
          ]}
        />
        </div>

        {/* === FAQ SECTION === */}
        <div className="mb-24 max-w-4xl mx-auto">
           <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">Automation FAQ</h2>
           <div className="space-y-4">
              {faqs.map((item, i) => (
                 <div 
                    key={i} 
                    className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openFaq === i ? 'border-purple-500 bg-white dark:bg-slate-900 shadow-lg' : 'border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/30'}`}
                 >
                    <button 
                       onClick={() => setOpenFaq(openFaq === i ? null : i)}
                       className="w-full flex items-center justify-between p-6 text-left"
                    >
                       <h3 className={`font-bold text-lg ${openFaq === i ? 'text-purple-600 dark:text-purple-400' : 'text-slate-900 dark:text-white'}`}>{item.q}</h3>
                       {openFaq === i ? <ChevronUp className="text-slate-500" /> : <ChevronDown className="text-slate-500" />}
                    </button>
                    <AnimatePresence>
                        {openFaq === i && (
                           <m.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }}>
                              <div className="p-6 pt-0 text-slate-600 dark:text-slate-400 leading-relaxed border-t border-dashed border-slate-200 dark:border-slate-800 pt-4">
                                 {item.a}
                              </div>
                           </m.div>
                        )}
                    </AnimatePresence>
                 </div>
              ))}
           </div>
        </div>

        <m.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-50px" }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="text-center"
        >
           <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Ready to Automate?</h2>
           <WhatsAppButton 
             serviceName="Automation"
             buttonText="Deploy AI Agent"
             className="inline-flex items-center gap-3 bg-purple-600 text-white px-8 py-4 rounded-full font-bold hover:bg-purple-500 transition-all"
             showIcon={true}
           />
        </m.div>
      </m.main>
      <Footer />
    </div>
    </LazyMotion>
    </PageTransition>
  );
};

export default AutomationView;