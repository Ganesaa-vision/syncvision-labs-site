import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation } from 'react-router-dom';
import { Globe, Code2, ShoppingBag, ShieldCheck, Server, ArrowRight, CheckCircle2, Zap, Layout, Smartphone, Lock, Database, PenTool, Gauge, ChevronDown, ChevronUp, Rocket, Layers, Cpu, Sparkles } from 'lucide-react';
import PricingSection from '../components/PricingSection';
import Footer from '../components/Footer';
import { m, LazyMotion, domAnimation, AnimatePresence } from 'framer-motion';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { IMAGES } from '../images';

const WebArchitectureView: React.FC = () => {
  const { pathname } = useLocation();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedTier, setSelectedTier] = useState<'startup' | 'business' | 'innovator'>('business');

  const tiers = {
    startup: {
      id: 'startup',
      name: 'The Startup Landing Page',
      price: 'RM 590',
      tag: 'Entry Level',
      description: 'The best affordable web design in Malaysia. Perfect for freelancers, service providers, and new startups who need a professional digital business card today.',
      forWho: 'Freelancers, new startups, or local service providers who need a professional digital business card today.',
      goal: 'To establish credibility and collect leads via WhatsApp. You don\'t need complex pages, just a high-converting single page.',
      image: IMAGES.WEB_ARCHITECTURE.TIER_STARTUP,
      features: ['Single Page Application', 'Mobile Optimized', 'WhatsApp Integration'],
      icon: <Layout className="w-6 h-6" />,
      color: 'blue',
      accent: 'bg-blue-500',
      panelClass: "bg-gradient-to-br from-blue-50/80 to-white/50 dark:from-blue-900/20 dark:to-slate-900/50",
      borderClass: "border-blue-200/60 dark:border-blue-500/20",
      shadowClass: "shadow-blue-500/10",
      glowColor: "bg-blue-500/20"
    },
    business: {
      id: 'business',
      name: 'The Corporate SME Standard',
      price: 'RM 1,190',
      tag: 'Most Popular',
      description: 'The ultimate SME website package. Best for factories, clinics, and established agencies needing a complete corporate website to rank on Google.',
      forWho: 'Factories, clinics, and established agencies needing a complete corporate website to rank on Google.',
      goal: 'To build Domain Authority. A multi-page structure allows you to target different keywords for different services.',
      image: IMAGES.WEB_ARCHITECTURE.TIER_BUSINESS,
      features: ['5-6 Custom Pages', 'Google Maps Integration', 'Contact Form'],
      icon: <Layers className="w-6 h-6" />,
      color: 'indigo',
      accent: 'bg-indigo-500',
      panelClass: "bg-gradient-to-br from-indigo-50/80 to-white/50 dark:from-indigo-900/20 dark:to-slate-900/50",
      borderClass: "border-indigo-200/60 dark:border-indigo-500/20",
      shadowClass: "shadow-indigo-500/10",
      glowColor: "bg-indigo-500/20"
    },
    innovator: {
      id: 'innovator',
      name: 'The Innovator Stack',
      price: 'RM 2,750',
      tag: 'High Performance',
      description: 'For funded tech startups and enterprises. We act as your expert Next.js and React developers in Malaysia to build a lightning-fast custom web app.',
      forWho: 'Funded tech startups and enterprises needing 100% performance and custom functionality.',
      goal: 'Total SEO Dominance. We code this from scratch using React & Next.js (no WordPress). It loads instantly.',
      image: IMAGES.WEB_ARCHITECTURE.TIER_INNOVATOR,
      features: ['Custom Next.js / React', 'Sub-second Load Times', 'Advanced SEO & GEO'],
      icon: <Cpu className="w-6 h-6" />,
      color: 'purple',
      accent: 'bg-purple-500',
      panelClass: "bg-gradient-to-br from-purple-50/80 to-white/50 dark:from-purple-900/20 dark:to-slate-900/50",
      borderClass: "border-purple-200/60 dark:border-purple-500/20",
      shadowClass: "shadow-purple-500/10",
      glowColor: "bg-purple-500/20"
    }
  };

  const activeTier = tiers[selectedTier];

  // Animation Variants for the Content Section
  const containerVariants = {
    hidden: { 
      opacity: 0, 
      x: -50, 
      scale: 0.98,
    },
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
    exit: { 
      opacity: 0, 
      x: 50, 
      scale: 0.98,
      transition: { duration: 0.2, ease: "easeIn" } 
    }
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

  const faqs = [
    { 
      q: "How much does website design cost in Malaysia?", 
      a: "At Omino Tech, website design costs start at RM 590 for a professional business landing page. A complete 5-to-6 page corporate SME website costs RM 1,190. For high-performance, custom-coded Next.js web applications, the cost is RM 2,750. We display our prices upfront with zero hidden fees." 
    },
    { 
      q: "Where can I find an affordable web developer in Malaysia?", 
      a: "Omino Tech is recognized as one of the most affordable and reliable web developers in Malaysia. Based in Selangor, we provide high-quality, mobile-friendly landing pages starting at just RM 590, making it easy for local startups to get online quickly." 
    },
    { 
      q: "Do you charge monthly maintenance fees?", 
      a: "No, we do not force you into expensive monthly retainers. You pay a one-time fee for the website development. The only necessary recurring cost is your standard yearly domain and hosting renewal, which you fully own." 
    },
    { 
      q: "Should I choose the RM 1,190 SME Website or the RM 2,750 Custom Web App?", 
      a: "If you are a standard local business needing a website to show your services, location, and a WhatsApp button, the RM 1,190 Corporate site is perfect. If your business requires complex databases, user logins, blazing-fast Next.js speeds, or custom software features, you need the RM 2,750 Custom Web App." 
    }
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "serviceType": "Web Development",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Omino Tech",
          "address": "Selangor, Malaysia"
        },
        "areaServed": "Malaysia",
        "description": "Providing the most affordable and highest performance web development in Malaysia.",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Web Development Packages",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": { "@type": "Service", "name": "The Startup Landing Page" },
              "price": "590.00",
              "priceCurrency": "MYR",
              "description": "The lowest priced professional landing page in Malaysia."
            },
            {
              "@type": "Offer",
              "itemOffered": { "@type": "Service", "name": "The Corporate SME Standard" },
              "price": "1190.00",
              "priceCurrency": "MYR",
              "description": "5 to 6 page corporate website using Elementor or Hardcoded PHP."
            },
            {
              "@type": "Offer",
              "itemOffered": { "@type": "Service", "name": "High-Performance Next.js Web App" },
              "price": "2750.00",
              "priceCurrency": "MYR",
              "description": "100% performance score. Custom coded using React, Next.js, and Vite."
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does website design cost in Malaysia?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "At Omino Tech, website design costs start at RM 590 for a professional business landing page. A complete 5-to-6 page corporate SME website costs RM 1,190. For high-performance, custom-coded Next.js web applications, the cost is RM 2,750. We display our prices upfront with zero hidden fees."
            }
          },
          {
            "@type": "Question",
            "name": "Where can I find an affordable web developer in Malaysia?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Omino Tech is recognized as one of the most affordable and reliable web developers in Malaysia. Based in Selangor, we provide high-quality, mobile-friendly landing pages starting at just RM 590, making it easy for local startups to get online quickly."
            }
          },
          {
            "@type": "Question",
            "name": "Do you charge monthly maintenance fees?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No, we do not force you into expensive monthly retainers. You pay a one-time fee for the website development. The only necessary recurring cost is your standard yearly domain and hosting renewal, which you fully own."
            }
          }
        ]
      }
    ]
  };

  return (
    <LazyMotion features={domAnimation}>
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#0a0a0a] text-slate-900 dark:text-slate-200 font-sans selection:bg-indigo-500/30 transition-colors duration-300">
      <Helmet>
        <title>Affordable & High-Performance Web Developers in Malaysia | Omino Tech</title>
        <meta name="description" content="Looking for a reliable web development company in Malaysia? We build high-speed websites starting at RM 590. No hidden fees. 100% ownership." />
        <meta name="keywords" content="Web development company Malaysia, Cheap web design Malaysia, Next js developer Malaysia, React website developer Selangor, SME website package KL, Corporate website design Malaysia" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ominotech.com.my/services/web-architecture" />
        <meta property="og:title" content="Affordable & High-Performance Web Developers in Malaysia | Omino Tech" />
        <meta property="og:description" content="Looking for a reliable web development company in Malaysia? We build high-speed websites starting at RM 590. No hidden fees. 100% ownership." />
        <meta property="og:image" content={IMAGES.GLOBAL.OG_IMAGE} />
        <meta property="og:image:alt" content="Omino Tech Digital Growth Engine - Custom Web Development and SEO Services Malaysia" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.ominotech.com.my/services/web-architecture" />
        <meta name="twitter:title" content="Affordable & High-Performance Web Developers in Malaysia | Omino Tech" />
        <meta name="twitter:description" content="Looking for a reliable web development company in Malaysia? We build high-speed websites starting at RM 590. No hidden fees. 100% ownership." />
        <meta name="twitter:image" content={IMAGES.GLOBAL.OG_IMAGE} />
        <link rel="canonical" href="https://www.ominotech.com.my/services/web-architecture" />
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Omino Tech" />
        <link rel="manifest" href="/site.webmanifest" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      </Helmet>

      <m.main initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} className="pt-24 md:pt-32 pb-12 md:pb-20 px-6 max-w-7xl mx-auto flex-grow w-full">
        {/* HERO */}
        <div className="mb-24 relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <span className="font-mono text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-[0.4em] mb-6 block">TOP-RATED WEB DEVELOPMENT COMPANY IN MALAYSIA</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-slate-900 dark:text-white mb-8 leading-[1.1]">
            Affordable & High-Performance <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-cyan-500 to-fuchsia-500 dark:from-indigo-400 dark:via-cyan-300 dark:to-purple-400">Web Developers in Malaysia</span>
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7">
                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                    Are you looking for a reliable web development company in Malaysia that won't overcharge you? Most agencies hide their prices and trap you in expensive monthly contracts. At Omino Tech, we build high-speed, professional websites for Malaysian SMEs with 100% transparent pricing. Whether you need a quick RM 590 landing page or a custom Next.js web application, you get exactly what you pay for—with zero hidden fees and full ownership of your site.
                </p>
                <div className="flex flex-wrap gap-4">
                    <div className="px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full text-sm font-medium flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> One-Time Payment (No Hidden Monthly Traps)</div>
                    <div className="px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full text-sm font-medium flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> 100% Code & Domain Ownership</div>
                    <div className="px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full text-sm font-medium flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Built-in WhatsApp & SEO Setup</div>
                </div>
            </div>
            <div className="lg:col-span-5">
                <div className="p-8 bg-slate-100 dark:bg-slate-900/50 rounded-3xl border border-slate-200 dark:border-slate-800">
                    <h3 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2"><Rocket className="w-5 h-5 text-indigo-500" /> Quick Launch</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
                        We are the only tech agency in Selangor offering a fully optimized business landing page for just <span className="text-slate-900 dark:text-white font-bold">RM 590</span>—the most affordable rate in the country.
                    </p>
                    <WhatsAppButton 
                        serviceName="RM590 Landing Page"
                        buttonText="Start Web Development for RM 590"
                        className="w-full py-3 bg-indigo-600 text-white rounded-xl font-bold text-sm hover:bg-indigo-700 transition-colors"
                        showIcon={false}
                    />
                </div>
            </div>
          </div>
        </div>

        {/* === THE PROOF SECTION === */}
        <div className="mb-32 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-[2.5rem] opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-1000"></div>
            <div className="relative bg-white dark:bg-[#0f0f0f] border border-slate-200 dark:border-white/10 rounded-[2rem] p-8 md:p-20 overflow-hidden shadow-xl dark:shadow-none">
                <div className="absolute top-0 right-0 p-20 opacity-[0.03] text-indigo-500 pointer-events-none">
                    <Gauge size={400} />
                </div>
                
                <div className="relative z-10">
                    <span className="text-emerald-400 font-mono text-xs font-black uppercase tracking-[0.3em] mb-6 block">LIVE DEMONSTRATION</span>
                    
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-slate-900 dark:text-white mb-10 leading-[1.1]">
                        THIS WEBSITE IS <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">THE PROOF.</span>
                    </h2>

                    <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl leading-relaxed max-w-4xl font-medium">
                        A slow website kills your sales. If your site takes more than 3 seconds to load on a Malaysian 4G network, customers will leave. You are experiencing the speed of our custom-engineered Next.js architecture right now. Zero lag. Instant clicks. This is the standard our web developers in Malaysia build for your business.
                    </p>

                    <div className="mt-12 flex flex-wrap gap-6">
                        <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-mono text-sm">
                            <Zap className="text-yellow-400" size={18} /> 0.1s Load Time
                        </div>
                        <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-mono text-sm">
                            <CheckCircle2 className="text-emerald-400" size={18} /> 100/100 Google Speed Score
                        </div>
                        <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-mono text-sm">
                            <Lock className="text-indigo-400" size={18} /> Enterprise-Grade Security
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* === PORTFOLIO PREVIEW === */}
        <m.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-32"
        >
            <div className="flex items-center justify-between mb-12">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Recent Deployments</h2>
                <Link to="/work" className="text-indigo-600 dark:text-indigo-400 hover:text-slate-900 dark:hover:text-white transition-colors text-sm font-mono uppercase tracking-widest flex items-center gap-2">
                    View Our Custom Web Design Portfolio <ArrowRight size={16} />
                </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                    { 
                        title: "Allied Group", 
                        desc: "WooCommerce Catalog with Multi-SKU Variants", 
                        image: IMAGES.WEB_ARCHITECTURE.PORTFOLIO_ECOMMERCE,
                        tag: "E-Commerce"
                    },
                    { 
                        title: "MediMy Clinic", 
                        desc: "Clinic Management Dashboard", 
                        image: IMAGES.WEB_ARCHITECTURE.PORTFOLIO_HEALTHCARE,
                        tag: "Healthcare SaaS"
                    }
                ].map((item, i) => (
                    <div key={i} className="group relative h-[400px] rounded-[2rem] overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl cursor-pointer bg-slate-100 dark:bg-slate-900">
                        {/* Background Image */}
                        <img 
                            src={item.image} 
                            alt={item.title}
                            className="absolute inset-0 w-full h-full object-contain transform-gpu transition-transform duration-700 group-hover:scale-110"
                            loading="lazy"
                            decoding="async"
                        />
                        
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent opacity-90 transition-opacity duration-500"></div>
                        
                        {/* Content */}
                        <div className="absolute inset-0 p-8 flex flex-col justify-end">
                            <div className="transform translate-y-0 transition-transform duration-500">
                                <span className="inline-block px-3 py-1 mb-4 text-[10px] font-bold uppercase tracking-widest text-white bg-white/20 backdrop-blur-md rounded-full border border-white/10">
                                    {item.tag}
                                </span>
                                <h3 className="text-3xl font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-slate-300 text-sm opacity-90 group-hover:opacity-100 transition-opacity duration-500">
                                    {item.desc}
                                </p>
                            </div>
                        </div>

                        {/* Hover Arrow */}
                        <div className="absolute top-8 right-8 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 opacity-0 group-hover:opacity-100 -translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                            <ArrowRight className="text-white w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                        </div>
                    </div>
                ))}
            </div>
        </m.div>

        {/* === SEMANTIC DEPTH: ARCHITECTURAL PHILOSOPHY === */}
        <div className="mb-32">
            <m.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center mb-24"
            >
                <span className="font-mono text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-[0.4em] mb-6 block">Architectural Philosophy</span>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-slate-900 dark:text-white mb-6 leading-[1.1]">
                    Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500">Speed & Sales</span> in Malaysia.
                </h2>
                <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
                    We move beyond basic drag-and-drop templates. Here is how we engineer performance that makes us the top e-commerce website developer in Malaysia.
                </p>
            </m.div>

            <div className="space-y-32">
                {/* Block 1: Image Left, Text Right */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <m.div 
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 group aspect-[3/2] w-full"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
                        <img src={IMAGES.WEB_ARCHITECTURE.PHILOSOPHY_LOGIC} alt="Custom Business Logic" className="absolute inset-0 w-full h-full object-cover transform-gpu group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                    </m.div>
                    <m.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    >
                        <div className="w-14 h-14 rounded-2xl bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-8 border border-indigo-100 dark:border-indigo-500/20 shadow-sm">
                            <Database size={24} />
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">E-Commerce & Custom Business Logic</h3>
                        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                            We don't just build digital brochures; we build business tools. If you need complex features, we write the custom code to make it happen accurately and securely.
                        </p>
                        <ul className="space-y-4">
                            {['Dynamic Shipping Calculators (Sabah/Sarawak)', 'FPX Payment Integrations (ToyyibPay/Billplz)', 'Real-Time Inventory Syncing'].map((feat, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-bold text-sm bg-slate-50 dark:bg-slate-900/50 w-fit px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-800">
                                    <CheckCircle2 className="w-4 h-4 text-indigo-500" /> {feat}
                                </li>
                            ))}
                        </ul>
                    </m.div>
                </div>

                {/* Block 2: Text Left, Image Right */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <m.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="order-2 lg:order-1"
                    >
                        <div className="w-14 h-14 rounded-2xl bg-yellow-50 dark:bg-yellow-500/10 flex items-center justify-center text-yellow-600 dark:text-yellow-400 mb-8 border border-yellow-100 dark:border-yellow-500/20 shadow-sm">
                            <Zap size={24} />
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">Google Speed Optimization (Core Web Vitals)</h3>
                        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                            A slow website destroys your Google ranking and kills your sales. While other agencies rely on heavy WordPress themes, we strip out the bloated code to engineer sub-second load times.
                        </p>
                        <ul className="space-y-4">
                            {['Sub-second Load Times (< 0.8s)', 'Core Web Vitals Pass Guarantee', 'Zero-Bloat Architecture'].map((feat, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-bold text-sm bg-slate-50 dark:bg-slate-900/50 w-fit px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-800">
                                    <CheckCircle2 className="w-4 h-4 text-yellow-500" /> {feat}
                                </li>
                            ))}
                        </ul>
                    </m.div>
                    <m.div 
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 group aspect-[3/2] w-full order-1 lg:order-2"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tl from-yellow-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
                        <img src={IMAGES.WEB_ARCHITECTURE.PHILOSOPHY_SPEED} alt="Core Web Vitals Optimization" className="absolute inset-0 w-full h-full object-cover transform-gpu group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                    </m.div>
                </div>
            </div>
        </div>

        {/* === GEO CONTENT BLOCK: THE AUTHORITY STATEMENT === */}
        <div className="mb-32">
            <m.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center mb-16"
            >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-500 font-mono text-xs font-bold uppercase tracking-widest mb-6">
                    <Sparkles size={12} /> System Architecture
                </div>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-slate-900 dark:text-white mb-6 leading-[1.1]">
                    Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">Engine.</span>
                </h2>
                <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
                    We don't just build websites; we engineer high-speed assets that dominate Google rankings.
                </p>
            </m.div>

            {/* --- INTERACTIVE SELECTOR --- */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 p-2 bg-slate-100 dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200 dark:border-slate-800 rounded-[2rem] mb-16">
                {Object.values(tiers).map((tier) => (
                    <button
                        key={tier.id}
                        onClick={() => setSelectedTier(tier.id as any)}
                        className="relative p-6 rounded-[1.5rem] text-left transition-all duration-300 group outline-none focus:outline-none"
                    >
                        {/* Active Indicator */}
                        {selectedTier === tier.id && (
                            <m.div 
                                layoutId="activeTab" 
                                className="absolute inset-0 bg-white dark:bg-slate-800 rounded-[1.5rem] shadow-xl dark:shadow-2xl dark:shadow-indigo-500/10 border border-slate-200 dark:border-slate-700"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                        
                        <div className="relative z-10 flex flex-col h-full">
                            <div className="flex justify-between items-center mb-4">
                                <div className={`p-3 rounded-2xl transition-colors duration-300 ${selectedTier === tier.id ? 'bg-indigo-500 text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400'}`}>
                                    {tier.icon}
                                </div>
                                {selectedTier === tier.id && (
                                    <m.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/20 text-[10px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-300">
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

            {/* --- DYNAMIC CONTENT DISPLAY --- */}
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
                        {/* Background Glow */}
                        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-1/2 ${activeTier.glowColor} blur-3xl rounded-full pointer-events-none opacity-50`} />

                        <div className={`flex flex-col lg:flex-row gap-12 items-center relative z-10 ${selectedTier === 'business' ? 'lg:flex-row-reverse' : ''}`}>
                        {/* TEXT CONTENT */}
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
                                    <h4 className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-3">Who is this for?</h4>
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
                                        <CheckCircle2 size={14} className={`text-${activeTier.color}-500`} /> {feature}
                                    </span>
                                ))}
                            </m.div>
                        </div>

                        {/* IMAGE PREVIEW */}
                        <div className="flex-1 w-full perspective-1000">
                            <m.div 
                                variants={imageVariants}
                                className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 group bg-slate-100 dark:bg-slate-900"
                            >
                                <img 
                                    src={activeTier.image} 
                                    alt={activeTier.name}
                                    className="object-contain w-full h-full transform-gpu group-hover:scale-105 transition-transform duration-1000" 
                                    loading="lazy"
                                    decoding="async"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60"></div>
                                
                                {/* Floating UI Element */}
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
                                            <div className="text-white font-bold text-sm">System Status</div>
                                            <div className="text-emerald-400 text-xs font-mono uppercase tracking-wider flex items-center gap-2">
                                                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span> Online
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

        {/* PRICING */}
        <PricingSection 
          serviceName="Web Architecture"
          title="Website Design Packages in Malaysia"
          description="Honest pricing for every business size. Choose the package that fits your goals."
          plans={[
            {
              name: "The Startup Landing Page",
              price: "RM 590",
              period: "/ one-time",
              description: "The best affordable web design in Malaysia. Perfect for freelancers, service providers, and new startups who need a professional digital business card today.",
              features: [
                  "1 Professional Landing Page",
                  "Mobile-Friendly Design",
                  "WhatsApp Click-to-Chat Button",
                  "Basic Google SEO Setup",
                  "Fast 3-Day Delivery"
              ],
              buttonText: "Start Web Development for RM 590",
              customButton: (
                <WhatsAppButton 
                  serviceName="Web Development"
                  packageLabel="The Startup Landing Page"
                  buttonText="Start Web Development for RM 590"
                  className="w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700"
                />
              )
            },
            {
              name: "The Corporate SME Standard",
              price: "RM 1,190",
              period: "/ one-time",
              description: "The ultimate SME website package. Best for factories, clinics, and established agencies needing a complete corporate website to rank on Google.",
              features: [
                  "5-to-6 Custom Pages",
                  "Built on WordPress/Elementor or Hardcoded",
                  "Google Maps Business Integration",
                  "Lead Generation Contact Forms",
                  "Standard On-Page SEO Included"
              ],
              isPopular: true,
              buttonText: "Get the SME Web Design Package",
              customButton: (
                <WhatsAppButton 
                  serviceName="Web Development"
                  packageLabel="The Corporate SME Standard"
                  buttonText="Get the SME Web Design Package"
                  className="w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-500/30"
                />
              )
            },
            {
              name: "The Innovator Stack",
              price: "RM 2,750",
              period: "/ one-time",
              description: "For funded tech startups and enterprises. We act as your expert Next.js and React developers in Malaysia to build a lightning-fast custom web app.",
              features: [
                  "100% Custom React / Next.js / Vite Code",
                  "Sub-second Load Times (< 0.8s)",
                  "Advanced SEO & GEO Architecture",
                  "Interactive UI/UX Animations",
                  "Scalable Enterprise Database"
              ],
              buttonText: "Build a Custom Next.js Web App",
              customButton: (
                <WhatsAppButton 
                  serviceName="Web Development"
                  packageLabel="The Innovator Stack"
                  buttonText="Build a Custom Next.js Web App"
                  className="w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all bg-purple-600 text-white hover:bg-purple-700 shadow-lg shadow-purple-500/30"
                />
              )
            }
          ]}
        />

        {/* === E-COMMERCE UPGRADE === */}
        <m.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-32"
        >
            <div className="p-10 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border border-yellow-500/20 rounded-[2.5rem] relative overflow-hidden">
                <div className="absolute top-0 right-0 p-12 opacity-10 text-yellow-500"><ShoppingBag size={200} /></div>
                <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-yellow-500/30 bg-yellow-100 dark:bg-yellow-900/10 text-yellow-600 dark:text-yellow-400 text-xs font-mono mb-6">
                            <Zap className="w-3 h-3" /> UPGRADE OPTION
                        </div>
                        <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">UPGRADE OPTION: E-Commerce Store Add-on</h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                            Turn your website into a 24/7 online shop. As a leading e-commerce website developer in Malaysia, we integrate local payment gateways so your customers can checkout easily.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {['FPX (ToyyibPay, Billplz) & Stripe Gateway', '20 Initial Product Uploads', 'Automated Inventory System', 'WhatsApp Order Notifications', 'Secure SSL Checkout'].map((feat, i) => (
                                <div key={i} className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                                    <CheckCircle2 className="w-4 h-4 text-yellow-600 dark:text-yellow-500" /> {feat}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="text-center md:text-right">
                        <div className="text-4xl font-black text-slate-900 dark:text-white mb-2">+ RM 1,500</div>
                        <div className="text-sm text-slate-500 dark:text-slate-500 uppercase tracking-widest font-bold mb-6">One-Time Add-on</div>
                        <WhatsAppButton 
                            serviceName="E-Commerce Upgrade"
                            packageLabel="Digital Store Add-on"
                            buttonText="Add to Package"
                            className="inline-flex bg-yellow-500 text-black px-8 py-3 rounded-xl font-bold hover:bg-yellow-400 transition-colors shadow-lg hover:shadow-yellow-500/30"
                        />
                    </div>
                </div>
            </div>
        </m.div>

        {/* === MAINTENANCE PLANS === */}
        <m.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-32"
        >
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">Domain & Hosting Maintenance</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Plan 1 */}
                <div className="p-6 md:p-8 bg-white dark:bg-slate-900/30 border border-slate-200 dark:border-slate-800 rounded-3xl hover:border-slate-400 dark:hover:border-slate-600 transition-all shadow-sm dark:shadow-none">
                    <div className="flex justify-between items-start mb-6">
                        <Globe className="w-10 h-10 text-slate-400" />
                        <div className="text-right">
                            <div className="text-2xl font-bold text-slate-900 dark:text-white">RM 80<span className="text-sm text-slate-500 font-normal">/mo</span></div>
                        </div>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Just Hosting</h3>
                    <p className="text-slate-500 text-sm mb-6">Perfect for our RM 1,190 WordPress package.</p>
                    <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                        <li className="flex gap-3"><CheckCircle2 className="w-4 h-4 text-slate-500" /> High-speed Malaysian Cloud Hosting</li>
                        <li className="flex gap-3"><CheckCircle2 className="w-4 h-4 text-slate-500" /> SSL Included</li>
                        <li className="flex gap-3"><CheckCircle2 className="w-4 h-4 text-slate-500" /> Daily Backups</li>
                    </ul>
                </div>

                {/* Plan 2 */}
                <div className="p-6 md:p-8 bg-slate-50 dark:bg-slate-900/60 border border-indigo-500/30 rounded-3xl relative overflow-hidden shadow-sm dark:shadow-none">
                    <div className="absolute top-0 right-0 bg-indigo-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl">RECOMMENDED</div>
                    <div className="flex justify-between items-start mb-6">
                        <Server className="w-10 h-10 text-indigo-400" />
                        <div className="text-right">
                            <div className="text-2xl font-bold text-slate-900 dark:text-white">RM 250<span className="text-sm text-slate-500 font-normal">/mo</span></div>
                        </div>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">The Tech Partner</h3>
                    <p className="text-slate-500 text-sm mb-6">Required for our RM 2,750 Next.js apps.</p>
                    <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                        <li className="flex gap-3"><CheckCircle2 className="w-4 h-4 text-indigo-500" /> Premium AWS/Vercel Server Management</li>
                        <li className="flex gap-3"><CheckCircle2 className="w-4 h-4 text-indigo-500" /> Monthly Code Updates</li>
                        <li className="flex gap-3"><CheckCircle2 className="w-4 h-4 text-indigo-500" /> Priority WhatsApp Technical Support</li>
                    </ul>
                </div>
            </div>
        </m.div>

        {/* === AEO FAQ SECTION === */}
        <m.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-32 max-w-4xl mx-auto"
        >
           <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">Technical FAQ</h2>
           <div className="space-y-4">
              {faqs.map((item, i) => (
                 <div 
                    key={i} 
                    className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openFaq === i ? 'border-indigo-500 bg-white dark:bg-slate-900 shadow-lg' : 'border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/30'}`}
                 >
                    <button 
                       onClick={() => setOpenFaq(openFaq === i ? null : i)}
                       className="w-full flex items-center justify-between p-6 text-left"
                    >
                       <h3 className={`font-bold text-lg ${openFaq === i ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-900 dark:text-white'}`}>{item.q}</h3>
                       {openFaq === i ? <ChevronUp /> : <ChevronDown />}
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
        </m.div>

        {/* CTA */}
        <div className="text-center">
          <WhatsAppButton 
            serviceName="Custom Web Architecture"
            buttonText="View Our Web Design Packages in Malaysia"
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

export default WebArchitectureView;