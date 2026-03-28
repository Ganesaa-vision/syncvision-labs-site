import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation } from 'react-router-dom';
import { Smartphone, Cpu, Layers, ArrowRight, Database, Cloud, ChevronDown, ChevronUp, Zap, CheckCircle2, Lock, Rocket, Map } from 'lucide-react';
import PricingSection from '../components/PricingSection';
import Footer from '../components/Footer';
import { m, LazyMotion, domAnimation, AnimatePresence } from 'framer-motion';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { IMAGES } from '../images';

const AppEngineeringView: React.FC = () => {
  const { pathname } = useLocation();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedTier, setSelectedTier] = useState<'mvp' | 'utility' | 'advanced'>('utility');

  const tiers = {
    mvp: {
      id: 'mvp',
      name: 'The Concept MVP',
      price: 'RM 500',
      tag: 'Rapid Deployment',
      description: 'The perfect rapid-deployment package for pre-seed startups, solo founders, and pitch validations. Get a working application to demonstrate your core concept without breaking the bank.',
      forWho: 'Pre-seed startups, solo founders, and pitch validations.',
      goal: 'Map and geolocation apps, basic directory apps, and UI/UX concept validation.',
      image: IMAGES.WEB_ARCHITECTURE.TIER_STARTUP,
      features: ['1 to 3 Core Screens', 'Basic API Integration', 'Local Data Storage'],
      icon: <Map className="w-6 h-6" />,
      color: 'blue',
      accent: 'bg-blue-500',
      panelClass: "bg-gradient-to-br from-blue-50/80 to-white/50 dark:from-blue-900/20 dark:to-slate-900/50",
      borderClass: "border-blue-200/60 dark:border-blue-500/20",
      shadowClass: "shadow-blue-500/10",
      glowColor: "bg-blue-500/20",
      activeIconBg: "bg-blue-500 text-white",
      activeBadge: "bg-blue-50 dark:bg-blue-500/20 text-blue-600 dark:text-blue-300",
      checkClass: "text-blue-500"
    },
    utility: {
      id: 'utility',
      name: 'The AI & Utility App',
      price: 'RM 999',
      tag: 'Most Popular',
      description: 'Sleek, targeted problem-solving applications. Need an AI wrapper, a custom booking portal, or a clean interface to digitize a manual process? We build polished, single-purpose utilities.',
      forWho: 'Local businesses, creators, and operational managers.',
      goal: 'AI-powered calculators, productivity tools, and lightweight business utilities.',
      image: IMAGES.WEB_ARCHITECTURE.TIER_BUSINESS,
      features: ['Up to 5 Screens', 'Premium UI/UX Design', 'Core API (OpenAI/Claude)'],
      icon: <Smartphone className="w-6 h-6" />,
      color: 'indigo',
      accent: 'bg-indigo-500',
      panelClass: "bg-gradient-to-br from-indigo-50/80 to-white/50 dark:from-indigo-900/20 dark:to-slate-900/50",
      borderClass: "border-indigo-200/60 dark:border-indigo-500/20",
      shadowClass: "shadow-indigo-500/10",
      glowColor: "bg-indigo-500/20",
      activeIconBg: "bg-indigo-500 text-white",
      activeBadge: "bg-indigo-50 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-300",
      checkClass: "text-indigo-500"
    },
    advanced: {
      id: 'advanced',
      name: 'Advanced Custom Application',
      price: 'RM 1,200+',
      tag: 'Data-Driven',
      description: 'Fully integrated, data-driven applications. When your logic goes beyond a simple MVP, we build robust tools tailored exactly to your operational needs with secure backend infrastructure.',
      forWho: 'Growing operations, SMEs, and full SaaS startups.',
      goal: 'Real-time chat apps, complex inventory systems, field sales trackers.',
      image: IMAGES.WEB_ARCHITECTURE.TIER_INNOVATOR,
      features: ['Custom User Flows', 'Real-Time DB Sync', 'Hardware Integration (GPS)'],
      icon: <Cpu className="w-6 h-6" />,
      color: 'purple',
      accent: 'bg-purple-500',
      panelClass: "bg-gradient-to-br from-purple-50/80 to-white/50 dark:from-purple-900/20 dark:to-slate-900/50",
      borderClass: "border-purple-200/60 dark:border-purple-500/20",
      shadowClass: "shadow-purple-500/10",
      glowColor: "bg-purple-500/20",
      activeIconBg: "bg-purple-500 text-white",
      activeBadge: "bg-purple-50 dark:bg-purple-500/20 text-purple-600 dark:text-purple-300",
      checkClass: "text-purple-500"
    }
  };

  const activeTier = tiers[selectedTier];

  // Animation Variants for the Content Section
  const containerVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.98 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 120,
        mass: 0.6,
        staggerChildren: 0.05,
        delayChildren: 0.05
      }
    },
    exit: { opacity: 0, x: 50, scale: 0.98, transition: { duration: 0.2, ease: "easeIn" } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 50 } }
  };

  const imageVariants = {
    hidden: { scale: 0.95, opacity: 0, rotateY: 15 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      rotateY: 0,
      transition: { type: "spring", stiffness: 40, damping: 15, delay: 0.2 }
    },
    exit: { scale: 0.95, opacity: 0, rotateY: -15, transition: { duration: 0.3 } }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Are you an app development agency in Malaysia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Omino Tech is based in Malaysia. We provide highly affordable, custom mobile app development services specifically tailored for local startups, bootstrapped founders, and small businesses looking to digitize."
        }
      },
      {
        "@type": "Question",
        "name": "What is an MVP service, and why does my startup need one?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A Minimum Viable Product (MVP) is the first version of your app, built with only the core features needed to solve your user's primary problem. Instead of spending RM 50,000 guessing what the market wants, our MVP service allows you to launch your app for a fraction of the cost, gather real user feedback, and scale intelligently."
        }
      },
      {
        "@type": "Question",
        "name": "Can you build an app to automate my small business processes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Our RM 999 Utility package is designed exactly for this. Whether you need a simple tool for your staff to log inventory, or a clean interface to calculate specialized quotes, we build custom utility apps that replace messy spreadsheets."
        }
      },
      {
        "@type": "Question",
        "name": "Do these prices include putting the app on the Apple App Store and Google Play?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our engineering fees cover the design, coding, and backend setup of your application. Apple charges a $99/year developer fee, and Google charges a one-time $25 fee. To keep our development costs radically low, clients set up and pay for their own developer accounts, though we will happily guide you through the store submission process!"
        }
      }
    ]
  };

  return (
    <LazyMotion features={domAnimation}>
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] text-slate-900 dark:text-slate-200 font-sans transition-colors duration-300 flex flex-col">
      <Helmet>
        <title>Affordable App Development & MVP Agency in Malaysia | Omino Tech</title>
        <meta name="description" content="Stop overpaying for mobile apps. Omino Tech builds high-performance map apps, AI utilities, and startup MVPs in Malaysia starting at just RM 500. iOS & Android included." />
        <meta name="keywords" content="Mobile App Developer Malaysia, MVP Development Malaysia, Flutter App Agency, App Developer for Startups, iOS Android Development Selangor" />
        <meta property="og:image" content={IMAGES.GLOBAL.LOGO} />
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Omino Tech" />
        <link rel="manifest" href="/site.webmanifest" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </Helmet>

      <m.main initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} className="pt-24 md:pt-32 pb-12 md:pb-20 px-6 max-w-7xl mx-auto flex-grow w-full">
        {/* === HERO SECTION === */}
        <div className="mb-24 relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <span className="font-mono text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-[0.4em] mb-6 block">STARTUP & SME APP ENGINEERING</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-slate-900 dark:text-white mb-8 leading-[1.1]">
            Rapid Mobile App Development. <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-cyan-500 to-fuchsia-500 dark:from-indigo-400 dark:via-cyan-300 dark:to-purple-400">Built for Startups in Malaysia.</span>
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7">
                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                    Why pay bloated agency fees to validate your business idea? We engineer lightning-fast, cross-platform mobile applications, AI utilities, and custom MVPs. Get native performance for iOS and Android from a single codebase—starting at just RM 500.
                </p>
                <div className="flex flex-wrap gap-4">
                    <div className="px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full text-sm font-medium flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Transparent Upfront Pricing</div>
                    <div className="px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full text-sm font-medium flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> One Codebase, Two Platforms</div>
                    <div className="px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full text-sm font-medium flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> High-Speed Real-Time Sync</div>
                </div>
            </div>
            <div className="lg:col-span-5">
                <div className="p-8 bg-slate-100 dark:bg-slate-900/50 rounded-3xl border border-slate-200 dark:border-slate-800">
                    <h3 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2"><Rocket className="w-5 h-5 text-blue-500" /> Quick Launch Validation</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
                        We are the only tech agency in Malaysia offering a fully functional application MVP designed specifically to validate your concept for just <span className="text-slate-900 dark:text-white font-bold">RM 500</span>.
                    </p>
                    <WhatsAppButton 
                        serviceName="RM500 MVP App"
                        buttonText="Discuss Your App Idea"
                        className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold text-sm hover:bg-blue-700 transition-colors"
                        showIcon={false}
                    />
                    <div className="mt-4 text-center">
                        <a href="#pricing" className="text-xs font-bold text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors uppercase tracking-widest underline underline-offset-4">See Full Pricing</a>
                    </div>
                </div>
            </div>
          </div>
        </div>

        {/* === THE PROOF SECTION === */}
        <div className="mb-32 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-500 rounded-[2.5rem] opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-1000"></div>
            <div className="relative bg-white dark:bg-[#0f0f0f] border border-slate-200 dark:border-white/10 rounded-[2rem] p-8 md:p-20 overflow-hidden shadow-xl dark:shadow-none">
                <div className="absolute top-0 right-0 p-20 opacity-[0.03] text-blue-500 pointer-events-none">
                    <Cpu size={400} />
                </div>
                
                <div className="relative z-10">
                    <span className="text-cyan-500 font-mono text-xs font-black uppercase tracking-[0.3em] mb-6 block">STARTUP ACCELERATION</span>
                    
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-slate-900 dark:text-white mb-10 leading-[1.1]">
                        HIGH-PERFORMANCE ENGINEERING, <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">WITHOUT THE ENTERPRISE PRICE TAG.</span>
                    </h2>

                    <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl leading-relaxed max-w-4xl font-medium">
                        Traditional app development agencies in Malaysia will quote you RM 30,000 before even writing a line of code. We do things differently. By leveraging modern frameworks like Flutter and serverless backends like Supabase and Firebase, we strip away the fluff and focus purely on functional, beautiful code. Whether you are a solo founder validating a new tech startup, or a local business looking to streamline your daily operations with a custom utility tool, we deliver exactly what you need. Fast, affordable, and fully functional.
                    </p>

                    <div className="mt-12 flex flex-wrap gap-6">
                        <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-mono text-sm">
                            <Zap className="text-yellow-400" size={18} /> Fast Validation Deployment
                        </div>
                        <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-mono text-sm">
                            <CheckCircle2 className="text-emerald-400" size={18} /> Flutter iOS & Android
                        </div>
                        <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-mono text-sm">
                            <Lock className="text-blue-400" size={18} /> Secure Cloud Database
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* === SEMANTIC DEPTH: ENGINEERING STACK === */}
        <m.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-32"
        >
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Built on Modern, Scalable Infrastructure</h2>
                <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                    We don't use clunky drag-and-drop app builders. We write real code that scales with your business using the same stacks powering modern tech unicorns.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                    {
                        title: "Cross-Platform (Flutter)",
                        desc: "We write one pristine codebase that compiles natively to both iOS and Android. You get two apps for the price of one, with zero compromise on speed and beautiful, consistent UI animations.",
                        image: IMAGES.WEB_ARCHITECTURE.PHILOSOPHY_SPEED,
                        icon: <Smartphone className="w-6 h-6 text-blue-400" />,
                        tag: "Native Output"
                    },
                    {
                        title: "Real-Time Backends & Hardware Integration",
                        desc: "We utilize modern cloud infrastructure (Supabase/Firebase) to ensure your data syncs across devices in milliseconds. We also connect your app deeply with the physical world—utilizing device GPS, cameras for QR scanning, and local storage.",
                        image: IMAGES.WEB_ARCHITECTURE.PHILOSOPHY_LOGIC,
                        icon: <Database className="w-6 h-6 text-indigo-400" />,
                        tag: "Instant Sync"
                    }
                ].map((item, i) => (
                    <div key={i} className="group relative min-h-[600px] rounded-[2.5rem] overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl cursor-default">
                        <img 
                            src={item.image} 
                            alt={item.title}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/80 to-slate-950 opacity-95 transition-opacity duration-500"></div>
                        
                        <div className="absolute inset-0 p-10 flex flex-col justify-end">
                            <div className="transform translate-y-0 transition-transform duration-500">
                                <div className="flex items-center justify-between mb-6">
                                    <div className="p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 text-white shadow-lg">
                                        {item.icon}
                                    </div>
                                    <span className="inline-block px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-white bg-white/10 backdrop-blur-md rounded-full border border-white/10 shadow-lg">
                                        {item.tag}
                                    </span>
                                </div>
                                
                                <h3 className="text-3xl font-bold text-white mb-4 leading-tight">{item.title}</h3>
                                <p className="text-slate-300 text-sm leading-relaxed opacity-100 transition-opacity duration-500">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </m.div>

        {/* === INTERACTIVE TIER SELECTOR === */}
        <div className="mb-32" id="pricing">
            <div className="text-center mb-16">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-slate-900 dark:text-white mb-6 leading-[1.1]">
                    Transparent App <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">Pricing.</span>
                </h2>
                <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
                    No hidden fees. No lengthy discovery phases. Choose the engineering package that fits your exact scope.
                </p>
            </div>

            {/* Tabs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 p-2 bg-slate-100 dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200 dark:border-slate-800 rounded-[2rem] mb-16">
                {Object.values(tiers).map((tier) => (
                    <button
                        key={tier.id}
                        onClick={() => setSelectedTier(tier.id as any)}
                        className="relative p-6 rounded-[1.5rem] text-left transition-all duration-300 group outline-none focus:outline-none"
                    >
                        {selectedTier === tier.id && (
                            <m.div 
                                layoutId="activeTier" 
                                className="absolute inset-0 bg-white dark:bg-slate-800 rounded-[1.5rem] shadow-xl dark:shadow-2xl dark:shadow-blue-500/10 border border-slate-200 dark:border-slate-700"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                        
                        <div className="relative z-10 flex flex-col h-full">
                            <div className="flex justify-between items-center mb-4">
                                <div className={`p-3 rounded-2xl transition-colors duration-300 ${selectedTier === tier.id ? tier.activeIconBg : 'bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400'}`}>
                                    {tier.icon}
                                </div>
                                {selectedTier === tier.id && (
                                    <m.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className={`px-3 py-1 rounded-full ${tier.activeBadge} text-[10px] font-bold uppercase tracking-wider`}>
                                        Selected
                                    </m.div>
                                )}
                            </div>
                            <h3 className={`text-lg font-bold mb-1 transition-colors duration-300 ${selectedTier === tier.id ? 'text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-400'}`}>
                                {tier.name}
                            </h3>
                        </div>
                    </button>
                ))}
            </div>

            {/* Content Display */}
            <div className="relative min-h-[600px]">
                <AnimatePresence mode="wait">
                    <m.div
                        key={selectedTier}
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className={`relative p-8 md:p-12 rounded-[2.5rem] border ${activeTier.borderClass} ${activeTier.panelClass} ${activeTier.shadowClass} backdrop-blur-xl shadow-2xl overflow-hidden`}
                    >
                        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-1/2 ${activeTier.glowColor} blur-[120px] rounded-full pointer-events-none opacity-50`} />

                        <div className={`flex flex-col lg:flex-row gap-12 items-center relative z-10 ${selectedTier === 'utility' ? 'lg:flex-row-reverse' : ''}`}>
                            <div className="flex-1 space-y-8">
                                <m.div variants={itemVariants}>
                                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white mb-6 ${activeTier.accent}`}>
                                        {activeTier.tag}
                                    </div>
                                    <h3 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
                                        {activeTier.name}
                                    </h3>
                                    <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                                        {activeTier.description}
                                    </p>
                                </m.div>

                                <m.div variants={itemVariants} className="space-y-6 p-8 bg-white/50 dark:bg-slate-900/50 border border-slate-200/50 dark:border-slate-800/50 rounded-3xl shadow-sm backdrop-blur-md">
                                    <div>
                                        <h4 className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-3">Best For</h4>
                                        <p className="text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
                                            {activeTier.forWho}
                                        </p>
                                    </div>
                                    <div className="h-px bg-slate-100 dark:bg-slate-800 w-full"></div>
                                    <div>
                                        <h4 className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-3">The Goal</h4>
                                        <p className="text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
                                            {activeTier.goal}
                                        </p>
                                    </div>
                                </m.div>

                                <m.div variants={itemVariants} className="flex flex-wrap gap-3">
                                    {activeTier.features.map((feature, i) => (
                                        <span key={i} className="px-4 py-2 bg-white/80 dark:bg-slate-800/80 rounded-lg text-sm font-bold text-slate-600 dark:text-slate-300 flex items-center gap-2 shadow-sm">
                                            <CheckCircle2 size={14} className={activeTier.checkClass} /> {feature}
                                        </span>
                                    ))}
                                </m.div>
                            </div>

                            <div className="flex-1 w-full perspective-1000">
                                <m.div 
                                    variants={imageVariants}
                                    className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 group bg-slate-100 dark:bg-slate-900"
                                >
                                    <img 
                                        src={activeTier.image} 
                                        alt={activeTier.name}
                                        className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0" 
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60"></div>
                                    
                                    <m.div 
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.4 }}
                                        className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <div className={`p-3 rounded-xl bg-white/10 text-white`}>
                                                {activeTier.icon}
                                            </div>
                                            <div>
                                                <div className="text-white font-bold text-sm">Deployment Ready</div>
                                                <div className="text-emerald-400 text-xs font-mono uppercase tracking-wider flex items-center gap-2">
                                                    <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span> Flutter Base
                                                </div>
                                            </div>
                                        </div>
                                    </m.div>
                                </m.div>
                            </div>
                        </div>
                    </m.div>
                </AnimatePresence>
            </div>
        </div>

        <PricingSection 
          serviceName="App Engineering"
          title="Quick-Start Validation Packages"
          description="Launch fast. Validate quickly. Scale efficiently."
          plans={[
            {
              name: "The Concept MVP",
              price: "RM 500",
              period: "/ one-time",
              description: "The perfect rapid-deployment package for pre-seed startups to demonstrate their concept without breaking the bank.",
              features: ["1 to 3 Core Screens", "Basic API Integration", "Local Data Storage", "iOS & Android Support", "~1 Week Delivery"],
              buttonText: "Start MVP",
              customButton: (
                <WhatsAppButton 
                  serviceName="App Development"
                  packageLabel="The Concept MVP"
                  buttonText="Start MVP"
                  className="w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700"
                />
              )
            },
            {
              name: "The AI & Utility App",
              price: "RM 999",
              period: "/ one-time",
              description: "Sleek, targeted problem-solving applications for local businesses looking to automate a manual process.",
              features: ["Up to 5 Screens", "Premium UI/UX Design", "Core API Integrations (AI/Map)", "Standard Database Setup", "~2 Weeks Delivery"],
              isPopular: true,
              buttonText: "Build Utility App",
              customButton: (
                <WhatsAppButton 
                  serviceName="App Development"
                  packageLabel="The AI & Utility App"
                  buttonText="Build Utility App"
                  className="w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/30"
                />
              )
            },
            {
              name: "Advanced Custom",
              price: "RM 1,200+",
              period: "/ starting at",
              description: "Fully integrated, data-driven applications for growing operations when your logic goes beyond a simple MVP.",
              features: ["Custom User Flows", "Real-Time DB (Supabase/Firebase)", "Hardware Integration (GPS)", "User Authentication", "3 - 4 Weeks Delivery"],
              buttonText: "Map Out Logic",
              customButton: (
                <WhatsAppButton 
                  serviceName="App Development"
                  packageLabel="Advanced Custom Application"
                  buttonText="Map Out Logic"
                  className="w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700"
                />
              )
            }
          ]}
        />

        {/* === AEO FAQ SECTION === */}
        <div className="mb-32 max-w-4xl mx-auto">
           <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">Technical FAQ</h2>
           <div className="space-y-4">
              {faqSchema.mainEntity.map((item, i) => (
                 <div 
                    key={i} 
                    className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openFaq === i ? 'border-indigo-500 bg-white dark:bg-slate-900 shadow-lg' : 'border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/30'}`}
                 >
                    <button 
                       onClick={() => setOpenFaq(openFaq === i ? null : i)}
                       className="w-full flex items-center justify-between p-6 text-left"
                    >
                       <h3 className={`font-bold text-lg ${openFaq === i ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-900 dark:text-white'}`}>{item.name}</h3>
                       {openFaq === i ? <ChevronUp /> : <ChevronDown />}
                    </button>
                    <AnimatePresence>
                        {openFaq === i && (
                           <m.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }}>
                              <div className="p-6 pt-0 text-slate-600 dark:text-slate-400 leading-relaxed border-t border-dashed border-slate-200 dark:border-slate-800 pt-4">
                                 {item.acceptedAnswer.text}
                              </div>
                           </m.div>
                        )}
                    </AnimatePresence>
                 </div>
              ))}
           </div>
        </div>
        
        {/* === FINAL CTA === */}
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Ready to Build? Let’s Talk Logic.</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">Stop waiting on massive agency proposals. Tell us what you need to build, and let's get started on the codebase this week.</p>
          <WhatsAppButton 
            serviceName="App Engineering Inquiry"
            buttonText="Get Your Exact Quote Today"
            className="inline-flex items-center gap-3 bg-indigo-600 text-white px-8 py-4 rounded-full font-bold hover:bg-indigo-500 transition-all shadow-xl shadow-indigo-500/30"
            showIcon={true}
          />
        </div>
      </m.main>
      <Footer />
    </div>
    </LazyMotion>
  );
};

export default AppEngineeringView;