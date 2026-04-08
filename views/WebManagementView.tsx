import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation } from 'react-router-dom';
import { ShieldCheck, RefreshCw, Server, Activity, Check, X, ChevronDown, ChevronUp, ArrowRight, Target, Lock, Wrench, Code2 } from 'lucide-react';
import PricingSection from '../components/PricingSection';
import { m, LazyMotion, domAnimation, AnimatePresence } from 'framer-motion';
import { PageTransition } from '../PageTransition';
import { IMAGES } from '../images';
import Footer from '../components/Footer';
import { WhatsAppButton } from '../components/WhatsAppButton';

const WebManagementView: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    { q: "Why do I need a website maintenance plan?", a: "Websites are not 'set it and forget it.' Software updates, new browser versions, and constant hacker attempts mean a website can easily break or get infected if left ignored. Our maintenance plans act like an insurance policy to keep your business running smoothly 24/7." },
    { q: "Can I just update my WordPress plugins myself?", a: "You can, but it is risky. Often, updating one plugin can cause a conflict that crashes your entire website (the dreaded 'White Screen of Death'). Our expert web developers safely test updates before applying them to your live site." },
    { q: "What happens if my website gets hacked while on your plan?", a: "If you are on our maintenance plan, we take full responsibility. Our system takes daily cloud backups, so if anything malicious happens, we will instantly wipe the virus and restore your website to a clean, working version at no extra cost." },
    { q: "Do you handle small content updates for me?", a: "Yes! Depending on your plan, you get dedicated 'hands-on' hours. If you need to change a price, swap a banner image, or post a new blog, just WhatsApp us and our developers will handle it for you." }
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
    "name": "Omino Tech Website Maintenance",
    "url": "https://www.ominotech.com.my/services/web-management",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Omino Tech - Web Development Company",
      "url": "https://www.ominotech.com.my"
    },
    "description": "Professional website maintenance, security, and hosting services for SMEs in Malaysia. Managed by expert web developers.",
    "areaServed": ["Malaysia", "Selangor", "Kuala Lumpur"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Website Maintenance Packages",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "The Digital Keeper" }, "price": "99.00", "priceCurrency": "MYR" },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "The Growth Partner" }, "price": "299.00", "priceCurrency": "MYR" },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "The CTO Experience" }, "price": "599.00", "priceCurrency": "MYR" }
      ]
    }
  };

  const combinedSchema = [faqSchema, serviceSchema];

  return (
    <PageTransition>
    <LazyMotion features={domAnimation}>
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] text-slate-900 dark:text-slate-200 font-sans selection:bg-cyan-500/30 transition-colors duration-300">
      <Helmet>
        <title>Website Maintenance & DevOps | Security & Updates Malaysia - Omino Tech</title>
        <meta name="description" content="We manage your website so you don't have to. 24/7 Uptime Monitoring, Daily Backups, Security Patching, and Content Updates for Malaysian businesses." />
        <meta name="keywords" content="Website Maintenance Malaysia, WordPress Security, DevOps Services, Website Management Package, Server Monitoring" />
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
        {/* === HERO SECTION === */}
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
                    <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/80 dark:bg-[#0a0a0a]/80 border border-slate-200/50 dark:border-white/10 mb-6 md:mb-8 backdrop-blur-xl shadow-lg shadow-cyan-500/5 transform-gpu transition-all hover:scale-105 hover:border-cyan-500/30">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(6,182,212,0.8)]"></div>
                      <span className="font-mono text-slate-800 dark:text-slate-300 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em]">PROACTIVE WEBSITE MANAGEMENT</span>
                    </div>

                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black tracking-tighter text-slate-900 dark:text-white leading-[1.05] mb-8">
                      You run the business. <br/> <span className="text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-500 dark:from-cyan-400 dark:via-blue-400 dark:to-indigo-400">We run the tech.</span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium mb-10 max-w-xl">
                        Websites are like cars—they break if you don't service them. Stop worrying about hackers, viruses, and broken updates. Let our <strong className="text-slate-900 dark:text-white">expert web developers</strong> secure your digital asset.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-start gap-4 sm:gap-6 w-full sm:w-auto mb-10">
                        <WhatsAppButton 
                            serviceName="Maintenance Inquiry"
                            buttonText="Protect Your Website"
                            className="w-full sm:w-auto group relative inline-flex items-center justify-center px-6 md:px-10 py-5 font-bold text-sm uppercase tracking-[0.2em] text-white dark:text-slate-900 overflow-hidden rounded-full bg-slate-900 dark:bg-white hover:scale-105 active:scale-95 transition-all duration-500 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] dark:shadow-[0_20px_40px_-10px_rgba(255,255,255,0.2)] hover:shadow-[0_20px_50px_-10px_rgba(6,182,212,0.4)]"
                            showIcon={false}
                        >
                            <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"></span>
                            <span className="relative flex items-center gap-3 group-hover:text-white transition-colors duration-500">
                                Protect Your Website <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                            </span>
                        </WhatsAppButton>
                        
                        <a href="#pricing" onClick={(e) => { e.preventDefault(); document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' }); }} className="w-full sm:w-auto group relative inline-flex items-center justify-center px-6 md:px-10 py-5 font-bold text-sm uppercase tracking-[0.2em] text-slate-800 dark:text-white overflow-hidden rounded-full border border-slate-300 dark:border-white/20 bg-white/50 dark:bg-white/5 hover:scale-105 active:scale-95 transition-all duration-500 backdrop-blur-md hover:shadow-[0_0_30px_rgba(0,0,0,0.05)] dark:hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:border-slate-400 dark:hover:border-white/40">
                            <span className="absolute inset-0 bg-slate-100 dark:bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"></span>
                            <span className="relative flex items-center gap-3 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-500">
                                View Packages
                            </span>
                        </a>
                    </div>
                </m.div>

                {/* RIGHT COLUMN: Promise Card */}
                <m.div 
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="lg:col-span-5 relative w-full group mt-10 lg:mt-0"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-indigo-500/20 blur-2xl rounded-[2rem] opacity-40 pointer-events-none transform-gpu transition-opacity duration-500 group-hover:opacity-60"></div>
                    
                    <div className="relative p-[1px] rounded-[2.5rem] bg-gradient-to-br from-cyan-500/40 via-slate-300/50 to-indigo-500/40 dark:from-cyan-500/40 dark:via-slate-700/50 dark:to-indigo-500/40 overflow-hidden shadow-2xl transform-gpu hover:-translate-y-2 transition-all duration-500">
                        <div className="relative bg-white/80 dark:bg-[#050505]/90 backdrop-blur-2xl p-8 md:p-10 rounded-[2.5rem] text-left flex flex-col h-full">
                            
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-200/60 dark:border-white/5">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-500/10 dark:to-blue-500/10 flex items-center justify-center border border-cyan-100 dark:border-white/5 shadow-sm flex-shrink-0">
                                        <ShieldCheck className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-base md:text-lg font-black uppercase tracking-[0.1em] text-slate-900 dark:text-white mb-0.5">Our Promise</h3>
                                        <div className="text-[10px] font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-widest font-bold">Omino Tech Standards</div>
                                    </div>
                                </div>
                                
                                <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-slate-100/50 dark:bg-white/[0.03] rounded-lg border border-slate-200/50 dark:border-white/5">
                                    <div className="flex items-end gap-[2px] h-2.5">
                                        <span className="w-1 h-full bg-emerald-500 rounded-sm animate-[pulse_1s_ease-in-out_Infinity]"></span>
                                        <span className="w-1 h-1.5 bg-emerald-500 rounded-sm animate-[pulse_1.5s_ease-in-out_Infinity]"></span>
                                        <span className="w-1 h-2 bg-emerald-500 rounded-sm animate-[pulse_2s_ease-in-out_Infinity]"></span>
                                    </div>
                                    <span className="text-[9px] font-bold uppercase tracking-widest text-slate-600 dark:text-slate-400">99.9% Uptime</span>
                                </div>
                            </div>
                            
                            <div className="space-y-4 text-base text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                                <p>
                                    As a premier <strong className="text-slate-900 dark:text-white font-black">web development company</strong>, we know what it takes to keep a website healthy. 
                                </p>
                                <p>
                                    We handle the technical heavy lifting—from daily backups to fixing hacked sites—so you can focus entirely on growing your business without any technical headaches.
                                </p>
                            </div>
                        </div>
                    </div>
                </m.div>
            </div>
        </div>

        <m.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 md:mb-32 relative z-10"
        >
          <div className="p-8 bg-white/80 dark:bg-white/[0.03] backdrop-blur-xl border border-slate-200 dark:border-white/5 rounded-3xl hover:border-cyan-500/40 transition-all duration-300 shadow-xl dark:shadow-none transform-gpu hover:-translate-y-2 group">
            <Activity className="w-10 h-10 text-cyan-400 mb-6" />
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Always Online (24/7 Monitoring)</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-medium">
              Every minute your site is down, you lose customers. Our system monitors your website every 60 seconds. If it crashes, our engineering team is alerted instantly and fixes it before your customers even notice.
            </p>
          </div>
          <div className="p-8 bg-white/80 dark:bg-white/[0.03] backdrop-blur-xl border border-slate-200 dark:border-white/5 rounded-3xl hover:border-green-500/40 transition-all duration-300 shadow-xl dark:shadow-none transform-gpu hover:-translate-y-2 group">
            <ShieldCheck className="w-10 h-10 text-green-400 mb-6" />
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Hacker & Virus Protection</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-medium">
              <a href="https://wordpress.org/" target="_blank" rel="noopener noreferrer" className="text-green-600 dark:text-green-500 font-bold hover:underline">WordPress</a> sites are the #1 target for hackers. We lock the doors. We install enterprise-grade firewalls that block malicious bots, spam, and viruses from ruining your digital reputation.
            </p>
          </div>
          <div className="p-8 bg-white/80 dark:bg-white/[0.03] backdrop-blur-xl border border-slate-200 dark:border-white/5 rounded-3xl hover:border-blue-500/40 transition-all duration-300 shadow-xl dark:shadow-none transform-gpu hover:-translate-y-2 group">
            <RefreshCw className="w-10 h-10 text-blue-400 mb-6" />
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Daily "Rewind" Backups</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-medium">
              Accidentally deleted a page? Update broke the site? Don't panic. We take daily, secure cloud snapshots of your entire website. We can "rewind" your site back to a perfectly working state in minutes.
            </p>
          </div>
        </m.div>

        {/* === ENTITY SIGNALING (Pillar SEO) === */}
        <m.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-50px" }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="relative mb-16 md:mb-32 group"
        >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-indigo-500/10 blur-3xl rounded-[3rem] opacity-50 transition-opacity duration-500 group-hover:opacity-80"></div>
            <div className="relative p-[1px] rounded-[2rem] md:rounded-[3rem] bg-gradient-to-b from-cyan-500/30 to-transparent dark:from-cyan-500/30 overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-1">
                <div className="relative bg-white/80 dark:bg-[#050505]/90 backdrop-blur-2xl p-8 md:p-16 rounded-[2rem] md:rounded-[3rem] flex flex-col md:flex-row items-center gap-8 md:gap-12">
                   <div className="w-full md:w-2/3">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-50 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-mono font-bold uppercase tracking-widest mb-6">
                        <Code2 className="w-4 h-4" /> The Omino Tech Advantage
                      </div>
                      <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-6">Backed by Expert Web Developers</h2>
                      <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-6 font-medium">
                         We are a specialized <Link to="/" className="text-cyan-600 dark:text-cyan-400 font-bold hover:underline">Web Development Company in Malaysia</Link>. This means your maintenance isn't handled by outsourced customer service reps reading a script. 
                      </p>
                      <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-8 font-medium">
                         If you need to change a banner, update pricing, or fix a broken page layout, our actual engineers will handle the code changes for you. Just drop a message in WhatsApp, and consider it done.
                      </p>
                      <WhatsAppButton 
                        serviceName="Maintenance Inquiry"
                        buttonText="Protect Your Website Today"
                        className="text-slate-900 bg-cyan-400 font-bold hover:bg-cyan-300 px-8 py-4 rounded-full inline-flex items-center justify-center gap-2 transition-all shadow-lg shadow-cyan-500/20"
                        showIcon={false}
                      />
                   </div>
                   <div className="md:w-1/3 flex justify-center opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                      <Wrench size={200} className="text-cyan-500" />
                   </div>
                </div>
            </div>
        </m.div>

        {/* PRICING */}
        <div id="pricing">
        <PricingSection 
          serviceName="Web Management"
          title="Management Packages"
          description="Secure your digital asset. Cheaper than a single hour of downtime."
          plans={[
            {
              name: "The Digital Keeper",
              price: "RM 99",
              period: "/mo",
              description: "\"Sleep Soundly. Your Site is Safe.\" We act as your digital security guard.",
              features: ["High-Speed Cloud Hosting", "Daily Cloud Backups", "Bank-Grade Security (SSL)", "Uptime Monitoring (5 min)", "No Content Edits"], 
              buttonText: "Secure Site",
              customButton: (
                <WhatsAppButton 
                  serviceName="Web Management"
                  packageLabel="The Digital Keeper"
                  buttonText="Secure Site"
                  className="w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700"
                />
              )
            },
            {
              name: "The Growth Partner",
              price: "RM 299",
              period: "/mo",
              description: "\"Your Own Tech Team. On Demand.\" Stop wasting hours fixing buttons.",
              features: ["Everything in Digital Keeper", "2 Hours 'Hands-On' Work", "Priority WhatsApp Support", "Monthly Speed Optimization", "Safe Plugin Updates"],
              isPopular: true,
              buttonText: "Hire Tech Team",
              customButton: (
                <WhatsAppButton 
                  serviceName="Web Management"
                  packageLabel="The Growth Partner"
                  buttonText="Hire Tech Team"
                  className="w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all bg-cyan-500 hover:bg-cyan-400 text-white shadow-lg shadow-cyan-500/25"
                />
              )
            },
            {
              name: "The CTO Experience",
              price: "RM 599",
              period: "/mo",
              description: "\"Maximum Performance. Zero Compromises.\" For businesses that can't afford downtime.",
              features: ["Everything in Growth Partner", "Unlimited Minor Edits", "1-Hour Emergency Response", "Monthly SEO Health Report", "Auto Server Scaling"],
              buttonText: "Get CTO",
              customButton: (
                <WhatsAppButton 
                  serviceName="Web Management"
                  packageLabel="The CTO Experience"
                  buttonText="Get CTO"
                  className="w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700"
                />
              )
            }
          ]}
        />
        </div>

        {/* COMPARISON TABLE */}
        <m.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-32 relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-indigo-500/10 blur-3xl rounded-[3rem] opacity-50 transition-opacity duration-500 group-hover:opacity-80"></div>
          <div className="relative p-[1px] rounded-[3rem] bg-gradient-to-b from-cyan-500/30 to-transparent dark:from-cyan-500/30 overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-1">
              <div className="relative bg-white/80 dark:bg-[#050505]/90 backdrop-blur-2xl p-8 md:p-16 rounded-[3rem]">
                  <div className="text-center mb-12">
                      <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter">Compare Features</h2>
                  </div>
                  <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 shadow-sm">
                    <table className="w-full text-left border-collapse min-w-0 md:min-w-[800px]">
                      <thead>
                        <tr>
                      <th className="p-6 border-b border-slate-200 dark:border-slate-800 text-slate-500 font-mono text-xs uppercase tracking-widest w-1/4">Feature</th>
                          <th className="p-6 border-b border-slate-200 dark:border-slate-800 text-slate-500 font-bold text-lg w-1/4">The Digital Keeper</th>
                          <th className="p-6 border-b border-cyan-500/30 text-cyan-700 dark:text-cyan-400 font-bold text-lg bg-cyan-50 dark:bg-cyan-500/10 border-x border-t border-cyan-500/20 rounded-t-2xl w-1/4 relative shadow-inner">
                            The Growth Partner
                            <div className="absolute -top-3 right-4 bg-cyan-500 text-black text-[10px] font-bold px-3 py-1 rounded-full shadow-lg">BEST SELLER</div>
                          </th>
                          <th className="p-6 border-b border-slate-200 dark:border-slate-800 text-slate-500 font-bold text-lg w-1/4">The CTO Experience</th>
                        </tr>
                      </thead>
                      <tbody className="text-sm text-slate-700 dark:text-slate-300">
                        {[
                          { feature: "Price", k: "RM 99 / mo", g: "RM 299 / mo", c: "RM 599 / mo" },
                          { feature: "Hosting & SSL", k: "Included", g: "Included", c: "Included" },
                          { feature: "Backups", k: "Daily", g: "Daily", c: "Hourly" },
                          { feature: "Content Updates", k: "❌ (You do it)", g: "2 Hours / Month", c: "Unlimited" },
                          { feature: "Support Speed", k: "Email (24h)", g: "WhatsApp (4h)", c: "Priority (1h)" },
                          { feature: "Tech Updates", k: "Auto-Only", g: "Manual & Safe", c: "Manual & Safe" },
                          { feature: "Monthly Report", k: "❌", g: "Basic", c: "Full SEO & Health" },
                        ].map((row, i) => (
                          <tr key={i} className="group border-b border-slate-200 dark:border-slate-800 last:border-0 hover:bg-slate-50 dark:hover:bg-white/[0.02] transition-colors">
                            <td className="p-6 font-medium text-slate-700 dark:text-slate-300">{row.feature}</td>
                            <td className="p-6 font-mono">
                          {row.k.includes('❌') ? <span className="text-slate-500 flex items-center gap-2"><X size={14}/> {row.k.replace('❌ ', '')}</span> : 
                               row.k === 'Included' ? <span className="text-emerald-500 flex items-center gap-2"><Check size={14}/> Included</span> : row.k}
                            </td>
                            <td className="p-6 font-mono font-bold bg-cyan-50 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border-x border-cyan-500/20">
                              {row.g === 'Included' ? <span className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400"><Check size={16} /> Included</span> : row.g}
                            </td>
                            <td className="p-6 font-mono">
                              {row.c === 'Included' ? <span className="text-emerald-500 flex items-center gap-2"><Check size={14}/> Included</span> : row.c}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
              </div>
          </div>
        </m.div>

        {/* FAQ SECTION */}
        <m.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-32 mb-20"
        >
          <div className="text-center mb-12">
              <span className="font-mono text-cyan-600 dark:text-cyan-400 text-xs font-bold uppercase tracking-[0.2em] mb-4 block">Knowledge Base</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Maintenance FAQ</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((item, i) => (
               <m.div 
                  key={i} 
                  className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openFaq === i ?'border-cyan-500 bg-white dark:bg-slate-900 shadow-lg shadow-cyan-500/10' : 'border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/30 hover:border-cyan-500/30'}`}
               >
                  <button 
                     onClick={() => setOpenFaq(openFaq === i ? null : i)}
                     className="w-full flex items-center justify-between p-6 text-left"
                  >
                     <span className={`font-bold text-lg ${openFaq === i ?'text-cyan-600 dark:text-cyan-400' : 'text-slate-900 dark:text-white'}`}>{item.q}</span>
                     <div className={`p-2 rounded-full transition-colors ${openFaq === i ?'bg-cyan-100 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'}`}>
                        {openFaq === i ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                     </div>
                  </button>
                  <AnimatePresence>
                      {openFaq === i && (
                         <m.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                         >
                            <div className="p-6 pt-0 text-slate-600 dark:text-slate-400 leading-relaxed border-t border-transparent">
                               <div className="pt-4 border-t border-dashed border-slate-200 dark:border-slate-800">
                                   {item.a}
                               </div>
                            </div>
                         </m.div>
                      )}
                  </AnimatePresence>
               </m.div>
            ))}
          </div>
        </m.div>
      </m.main>
      <Footer />
    </div>
    </LazyMotion>
    </PageTransition>
  );
};

export default WebManagementView;