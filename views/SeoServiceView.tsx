import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation } from 'react-router-dom';
import { Search, BarChart, FileText, Trophy, Bot, Cpu, CheckCircle2, ChevronDown, ChevronUp, ShieldCheck, Activity, Gauge } from 'lucide-react';
import PricingSection from '../components/PricingSection';
import { m, LazyMotion, domAnimation, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Footer from '../components/Footer';
import { PageTransition } from '../PageTransition';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { IMAGES } from '../images';

const ImageSlider = ({ images, duration = 3000 }: { images: string[], duration?: number }) => {
  const [index, setIndex] = useState(0);

  // Reset index when the image set changes (i.e., when switching engines)
  useEffect(() => {
    setIndex(0);
  }, [images]);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, duration);
    return () => clearInterval(timer);
  }, [images, duration]);

  return (
    <div className="relative w-full h-full">
      <AnimatePresence>
        <m.img
          key={`${images[index]}-${index}`} // Unique key to force re-render animation
          src={images[index]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-contain"
          alt="Advanced technical SEO strategies implemented by Omino Tech to secure top Google search rankings."
          loading="lazy"
        />
      </AnimatePresence>
      {/* Gradient Overlay for text readability if needed, though mostly for style here */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
    </div>
  );
};

const BeforeAfterSlider = ({ beforeImage, afterImage }: { beforeImage: string, afterImage: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updateSlider = (clientX: number) => {
    if (!containerRef.current || !imageRef.current || !sliderRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    let position = ((clientX - rect.left) / rect.width) * 100;
    position = Math.min(100, Math.max(0, position));

    sliderRef.current.style.left = `${position}%`;
    imageRef.current.style.clipPath = `inset(0 ${100 - position}% 0 0)`;
  };

  const handleStart = (event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    isDragging.current = true;
    const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX;
    updateSlider(clientX);
  };

  const handleEnd = () => {
    isDragging.current = false;
  };

  const handleMove = (event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging.current && event.type !== 'click') return;
    const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX;
    updateSlider(clientX);
  };

  useEffect(() => {
    window.addEventListener('mouseup', handleEnd);
    window.addEventListener('touchend', handleEnd);
    return () => {
      window.removeEventListener('mouseup', handleEnd);
      window.removeEventListener('touchend', handleEnd);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden cursor-ew-resize select-none shadow-2xl border border-slate-200 dark:border-slate-800 group bg-slate-100 dark:bg-slate-900"
      onMouseMove={handleMove}
      onTouchMove={handleMove}
      onMouseDown={handleStart}
      onTouchStart={handleStart}
      onMouseUp={handleEnd}
      onTouchEnd={handleEnd}
      onMouseLeave={handleEnd}
      onClick={handleMove}
    >
      <img 
        src={afterImage} 
        alt="Verified organic traffic growth and first-page Google rankings achieved for our clients in Malaysia." 
        loading="lazy"
        className="absolute inset-0 w-full h-full object-contain pointer-events-none" 
        draggable={false}
      />
      
      <div 
        ref={imageRef}
        className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none will-change-transform"
        style={{ clipPath: `inset(0 50% 0 0)` }}
      >
        <img 
          src={beforeImage} 
          alt="Before technical SEO optimization - poor search visibility and low local ranking." 
          loading="lazy"
          className="absolute inset-0 w-full h-full object-contain" 
          draggable={false}
        />
        <div className="absolute inset-0 bg-slate-900/50 mix-blend-multiply pointer-events-none" />
      </div>

      <div 
        ref={sliderRef}
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-10 shadow-[0_0_20px_rgba(0,0,0,0.5)] will-change-transform"
        style={{ left: `50%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center text-slate-400 transform transition-transform group-hover:scale-110">
            <div className="flex gap-1">
                <div className="w-0.5 h-4 bg-slate-300"></div>
                <div className="w-0.5 h-4 bg-slate-300"></div>
            </div>
        </div>
      </div>
      
      <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-md text-white px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest pointer-events-none border border-white/10">
        Before: Page 5
      </div>
      <div className="absolute top-6 right-6 bg-emerald-500/90 backdrop-blur-md text-white px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest pointer-events-none border border-white/10 shadow-lg shadow-emerald-500/20">
        After: Rank #1
      </div>
    </div>
  );
};

const SeoServiceView: React.FC = () => {
  const { pathname } = useLocation();
  const [activeEngine, setActiveEngine] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What makes Omino Tech the best SEO service provider in Malaysia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Unlike marketing agencies that only write content, Omino Tech consists of expert software engineers. We combine technical web development (Next.js/React) with aggressive SEO and AEO (Answer Engine Optimization) to ensure your website achieves 100% performance scores and ranks #1 on Google."
        }
      },
      {
        "@type": "Question",
        "name": "How fast can you rank my business in Balakong?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For local keywords like 'Factory in Balakong', we have achieved Rank #1 in as little as 17 days using our Programmatic SEO strategy. We engineer search dominance for SMEs across Balakong, Seri Kembangan, Puchong, and the wider Selangor tech ecosystem."
        }
      },
      {
        "@type": "Question",
        "name": "What is AEO and why does it matter?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AEO (Answer Engine Optimization) ensures your business is cited by AI like ChatGPT and Gemini. We structure your data so these engines recommend you as the primary answer."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer monthly SEO reports?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We provide transparent monthly reports detailing keyword movement, traffic growth, and lead conversions, not just vanity metrics."
        }
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Omino Tech SEO Services",
    "url": "https://www.ominotech.com.my/services/seo-service",
    "provider": {
        "@type": "LocalBusiness",
        "name": "Omino Tech - Web Development Company",
        "url": "https://www.ominotech.com.my"
    },
    "description": "Expert SEO and AEO services in Malaysia, specializing in technical Next.js/React optimization, local SEO, and Generative Engine Optimization.",
    "areaServed": ["Balakong", "Seri Kembangan", "Puchong", "Selangor", "Kuala Lumpur", "Malaysia"],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Balakong",
      "addressLocality": "Selangor",
      "addressRegion": "Selangor",
      "addressCountry": "MY"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "SEO Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "Local Hero SEO" },
          "price": "399.00",
          "priceCurrency": "MYR"
        },
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "Traffic Builder SEO" },
          "price": "899.00",
          "priceCurrency": "MYR"
        },
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "Market Dominator SEO" },
          "price": "1999.00",
          "priceCurrency": "MYR"
        }
      ]
    }
  };

  const combinedSchema = [faqSchema, serviceSchema];

  const engines = [
    {
        id: 'seo',
        title: 'Traditional SEO',
        tag: 'The Foundation',
        desc: 'We optimize your technical infrastructure, build high-authority backlinks, and target high-intent keywords to ensure you dominate the standard Google Search Results Page (SERP).',
        points: ['Technical Audits & Fixes', 'Keyword Gap Analysis', 'High-DA Backlinks'],
        color: 'from-blue-500 to-cyan-500',
        icon: <Search className="w-6 h-6 text-white" />,
        images: [
            IMAGES.SEO.TRADITIONAL_SEO_1,
            IMAGES.SEO.TRADITIONAL_SEO_2
        ]
    },
    {
        id: 'aeo',
        title: 'AEO (Answer Engine)',
        tag: 'Voice & Snippets',
        desc: 'Capture the "Zero-Click" result. We structure your content so Siri, Alexa, and Google Assistant read your answer aloud. Be the direct answer, not just a link.',
        points: ['Voice Search Optimization', 'Featured Snippet Targeting', 'FAQ Schema Structure'],
        color: 'from-purple-500 to-pink-500',
        icon: <Bot className="w-6 h-6 text-white" />,
        images: [
            IMAGES.SEO.AEO_1,
            IMAGES.SEO.AEO_2
        ]
    },
    {
        id: 'geo',
        title: 'GEO (Generative Engine)',
        tag: 'The AI Era',
        desc: 'The future of search. We structure your digital footprint so that when AI engines like Gemini or ChatGPT scan the web for real-time answers, your brand is the verified, authoritative source they retrieve and cite.',
        points: ['Brand Entity Graphing', 'Sentiment Optimization', 'AI Citation Building'],
        color: 'from-emerald-500 to-teal-500',
        icon: <Cpu className="w-6 h-6 text-white" />,
        images: [
            IMAGES.SEO.GEO_1,
            IMAGES.SEO.GEO_2
        ]
    }
  ];

  return (
    <PageTransition>
    <LazyMotion features={domAnimation}>
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] text-slate-900 dark:text-slate-200 font-sans selection:bg-emerald-500/30 relative transition-colors duration-300">

      <Helmet>
        <title>Best SEO Service in Malaysia | #1 Google Ranking & AEO Expert</title>
        <meta name="description" content="Partner with the top SEO company in Malaysia. We combine technical Next.js web development with aggressive SEO and AEO strategies to guarantee top rankings in Selangor and KL." />
        <meta name="keywords" content="SEO Malaysia, SEO Service Selangor, SEO KL, Google Maps Ranking Malaysia, AEO Optimization, Local SEO Expert" />
        <link rel="canonical" href="https://www.ominotech.com.my/services/seo-service" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ominotech.com.my/services/seo-service" />
        <meta property="og:title" content="Best SEO Service in Malaysia | #1 Google Ranking & AEO Expert" />
        <meta property="og:description" content="Partner with the top SEO company in Malaysia. We combine technical Next.js web development with aggressive SEO and AEO strategies to guarantee top rankings in Selangor and KL." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.ominotech.com.my/services/seo-service" />
        <meta name="twitter:title" content="Best SEO Service in Malaysia | #1 Google Ranking & AEO Expert" />
        <meta name="twitter:description" content="Partner with the top SEO company in Malaysia. We combine technical Next.js web development with aggressive SEO and AEO strategies to guarantee top rankings in Selangor and KL." />
        <meta name="twitter:image" content={IMAGES.GLOBAL.OG_IMAGE} />
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Omino Tech" />
        <meta property="og:image" content={IMAGES.GLOBAL.OG_IMAGE} />
        <meta property="og:image:alt" content="Omino Tech Digital Growth Engine - Custom Web Development and SEO Services Malaysia" />
        <link rel="manifest" href="/site.webmanifest" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }} />
      </Helmet>

      <m.main initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} className="relative z-10 pt-24 md:pt-32 pb-12 md:pb-20 px-6 max-w-7xl mx-auto flex-grow w-full">
        
        {/* HERO SECTION */}
        <div className="mb-24 relative pt-6 md:pt-12">
            {/* Grid Background Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#80808015_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10"></div>

            <m.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center w-full mb-8 text-center"
            >
                <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/80 dark:bg-[#0a0a0a]/80 border border-slate-200/50 dark:border-white/10 mb-6 md:mb-8 backdrop-blur-xl shadow-lg shadow-emerald-500/5 transform-gpu transition-all hover:scale-105 hover:border-emerald-500/30">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.8)]"></div>
                    <span className="font-mono text-slate-800 dark:text-slate-300 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em]">Search Dominance</span>
                </div>

                <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-black tracking-tighter text-slate-900 dark:text-white leading-[1.05] mb-8">
                    The Best SEO Service in Malaysia: <br/> <span className="text-transparent bg-clip-text bg-gradient-to-br from-emerald-500 via-cyan-500 to-blue-500 dark:from-emerald-400 dark:via-cyan-400 dark:to-blue-400">Total Search Dominance</span>
                </h1>
            </m.div>

            <m.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full max-w-4xl mx-auto mb-10 group"
            >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-blue-500/20 blur-3xl rounded-[2rem] opacity-50 pointer-events-none transform-gpu transition-opacity duration-500 group-hover:opacity-80"></div>
                <div className="relative p-[1px] rounded-[2.5rem] bg-gradient-to-b from-emerald-500/30 to-transparent dark:from-emerald-500/30 overflow-hidden shadow-[0_20px_60px_-15px_rgba(16,185,129,0.2)] transform-gpu hover:-translate-y-2 transition-all duration-500">
                    <div className="relative bg-white/70 dark:bg-[#030303]/80 backdrop-blur-2xl p-8 md:p-12 rounded-[2.5rem] text-center flex flex-col items-center">
                        <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                            We don't just target keywords; we target <strong className="text-slate-900 dark:text-white font-black">Intent</strong>. We optimize your digital presence for the three engines that matter: <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 dark:text-emerald-500 font-bold hover:underline">Google Search</a>, <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" className="text-emerald-600 dark:text-emerald-500 font-bold hover:underline">Google Maps</a>, and AI Answer Engines (<a href="https://chat.openai.com/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 dark:text-emerald-500 font-bold hover:underline">ChatGPT</a>/<a href="https://gemini.google.com/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 dark:text-emerald-500 font-bold hover:underline">Gemini</a>).
                        </p>
                    </div>
                </div>
            </m.div>
            
            <m.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-2xl mx-auto"
            >
                <WhatsAppButton
                    serviceName="SEO Service"
                    buttonText="Start Ranking #1"
                    className="w-full sm:w-auto group relative inline-flex items-center justify-center px-6 md:px-10 py-5 font-bold text-sm uppercase tracking-[0.2em] text-white dark:text-slate-900 overflow-hidden rounded-full bg-slate-900 dark:bg-white hover:scale-105 active:scale-95 transition-all duration-500 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] dark:shadow-[0_20px_40px_-10px_rgba(255,255,255,0.2)] hover:shadow-[0_20px_50px_-10px_rgba(16,185,129,0.4)]"
                    showIcon={false}
                />
                <a href="#pricing" onClick={(e) => { e.preventDefault(); document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' }); }} className="w-full sm:w-auto group relative inline-flex items-center justify-center px-6 md:px-10 py-5 font-bold text-sm uppercase tracking-[0.2em] text-slate-800 dark:text-white overflow-hidden rounded-full border border-slate-300 dark:border-white/20 bg-white/50 dark:bg-white/5 hover:scale-105 active:scale-95 transition-all duration-500 backdrop-blur-md hover:shadow-[0_0_30px_rgba(0,0,0,0.05)] dark:hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:border-slate-400 dark:hover:border-white/40">
                    <span className="absolute inset-0 bg-slate-100 dark:bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"></span>
                    <span className="relative flex items-center gap-3 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-500">
                        View Packages
                    </span>
                </a>
            </m.div>
        </div>

        {/* === NEW: ACHIEVEMENTS SECTION === */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-32 relative"
        >

            <div className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-[2rem] md:rounded-[3rem] p-6 md:p-16 overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-grid-slate-900/[0.05] dark:bg-grid-white/[0.02]"></div>

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-black uppercase tracking-widest mb-8">
                            <Trophy size={14} /> Verified Case Study
                        </div>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-slate-900 dark:text-white mb-6 leading-[1.1]">
                            DOMINANCE <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">PROTOCOL.</span>
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-10 border-l-4 border-emerald-500/50 pl-6">
                            Target: <strong>Pre-Insulated Pipe Manufacturer</strong>.<br/>
                            Objective: Total Search Monopoly.<br/>
                            Result: <span className="text-slate-900 dark:text-white font-bold">Rank #1 in 17 Days.</span>
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-6 bg-slate-100 dark:bg-black/40 rounded-2xl border border-slate-200 dark:border-white/5">
                                <div className="text-3xl font-black text-slate-900 dark:text-white mb-1">#1</div>
                                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Google Rank</div>
                            </div>
                            <div className="p-6 bg-slate-100 dark:bg-black/40 rounded-2xl border border-slate-200 dark:border-white/5">
                                <div className="text-3xl font-black text-emerald-400 mb-1">17</div>
                                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Days to Rank</div>
                            </div>
                            <div className="p-6 bg-slate-100 dark:bg-black/40 rounded-2xl border border-slate-200 dark:border-white/5">
                                <div className="text-3xl font-black text-purple-400 mb-1">AI</div>
                                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Gemini Preferred</div>
                            </div>
                            <div className="p-6 bg-slate-100 dark:bg-black/40 rounded-2xl border border-slate-200 dark:border-white/5">
                                <div className="text-3xl font-black text-blue-400 mb-1">10+</div>
                                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Keywords Ranked</div>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <BeforeAfterSlider 
                            beforeImage={IMAGES.SEO.CASE_STUDY_BEFORE}
                            afterImage={IMAGES.SEO.CASE_STUDY_AFTER}
                        />
                        
                        {/* Floating Badge */}
                        <div className="absolute -top-6 -right-6 bg-white text-black px-6 py-3 rounded-xl font-black text-xs uppercase tracking-widest shadow-xl transform -rotate-6 z-20">
                            Verified Result
                        </div>
                    </div>
                </div>
            </div>
        </m.div>

        {/* === NEW: TRI-ENGINE EXPLANATION (STICKY SCROLL) === */}
        <div className="mb-20 md:mb-40">
            {/* Header */}
            <div className="text-center mb-12 md:mb-20">
                <span className="font-mono text-indigo-600 dark:text-indigo-400 text-xs font-black uppercase tracking-[0.4em] mb-4 block">The Strategy</span>
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-slate-900 dark:text-white mb-8 leading-[1.1]">
                    TRI-ENGINE <span className="text-slate-400 dark:text-slate-600">OPTIMIZATION.</span>
                </h2>
                <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
                    The digital landscape has evolved. We optimize for the three pillars of modern search: Traditional, Voice, and AI.
                </p>
            </div>

            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24" ref={containerRef}>
                {/* Left Side: Scrolling Content */}
                <div className="space-y-16 lg:space-y-[30vh] pb-16 lg:pb-[20vh]">
                    {engines.map((engine, index) => (
                        <m.div 
                            key={engine.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ amount: 0.5, once: false }}
                            onViewportEnter={() => setActiveEngine(index)}
                            className="relative lg:pl-8 lg:border-l-2 border-slate-200 dark:border-slate-800 transition-all duration-500"
                            style={{
                                borderColor: activeEngine === index ? 'var(--active-color)' : '',
                            }}
                        >
                            {/* Active Indicator Line */}
                            <div className={`hidden lg:block absolute left-[-2px] top-0 h-full w-[2px] bg-gradient-to-b ${engine.color} transition-opacity duration-500 ${activeEngine === index ?'opacity-100' : 'opacity-0'}`}></div>

                            {/* Mobile Image Preview */}
                            <div className="lg:hidden mb-8 w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 relative group">
                                <div className={`absolute inset-0 bg-gradient-to-br ${engine.color} opacity-20 z-10`}></div>
                                <ImageSlider images={engine.images} />
                                <div className="absolute bottom-4 right-4 z-20 bg-black/50 backdrop-blur-md text-white px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest border border-white/10">
                                    {engine.tag}
                                </div>
                            </div>

                            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-6 transition-colors duration-300 ${activeEngine === index ?'bg-slate-100 dark:bg-white/10 border-transparent text-slate-900 dark:text-white' : 'border-slate-200 dark:border-slate-800 text-slate-500'}`}>
                                <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${engine.color}`}></span>
                                <span className="text-xs font-mono font-bold uppercase tracking-widest">{engine.tag}</span>
                            </div>

                            <h3 className={`text-4xl md:text-5xl font-black mb-6 transition-colors duration-300 ${activeEngine === index ?'text-slate-900 dark:text-white' : 'text-slate-400 dark:text-slate-600'}`}>
                                {engine.title}
                            </h3>
                            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                                {engine.desc}
                            </p>
                            <ul className="space-y-4">
                                {engine.points.map((item) => (
                                    <li key={item} className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-medium">
                                        <div className={`w-6 h-6 rounded-full flex items-center justify-center bg-gradient-to-br ${engine.color} shadow-lg shadow-indigo-500/20`}>
                                            <CheckCircle2 size={14} className="text-white" />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </m.div>
                    ))}
                </div>

                {/* Right Side: Sticky Visual */}
                <div className="hidden lg:block relative h-full">
                    <div className="sticky top-32 h-[600px] max-h-[80vh] w-full">
                        <m.div 
                            className="relative w-full h-full rounded-[3rem] overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 shadow-2xl transition-all duration-700"
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        >
                            {/* Background Glow based on active engine */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${engines[activeEngine].color} opacity-20 transition-opacity duration-700`}></div>
                            
                            {/* The Image Slider */}
                            <div className="absolute inset-0 rounded-[3rem] overflow-hidden">
                                <m.div className="w-full h-full" style={{ y: parallaxY, scale: 1.15 }}>
                                    <ImageSlider images={engines[activeEngine].images} />
                                </m.div>
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent pointer-events-none" />
                            </div>

                            {/* Floating Glass Card */}
                            <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 dark:bg-black/40 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-3xl shadow-2xl flex items-center justify-between transform transition-all duration-500 hover:scale-[1.02]">
                                <div className="flex items-center gap-5">
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br ${engines[activeEngine].color} text-white shadow-lg shadow-indigo-500/20`}>
                                        {engines[activeEngine].icon}
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-300 mb-1">Active Protocol</div>
                                        <div className="text-white font-bold text-lg leading-none">{engines[activeEngine].title}</div>
                                    </div>
                                </div>
                                <div className="h-10 w-[1px] bg-white/10"></div>
                                <div className="text-right">
                                    <div className="text-3xl font-black text-white">0{activeEngine + 1}</div>
                                    <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400">Step</div>
                                </div>
                            </div>
                        </m.div>
                    </div>
                </div>
            </div>
        </div>

        {/* === GEO CONTENT BLOCK === */}
        <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-16 md:mb-32 relative group"
        >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-blue-500/10 blur-3xl rounded-[3rem] opacity-50 transition-opacity duration-500 group-hover:opacity-80"></div>
            <div className="relative p-[1px] rounded-[2rem] md:rounded-[3rem] bg-gradient-to-b from-emerald-500/30 to-transparent dark:from-emerald-500/30 overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-1">
                <div className="relative bg-white/80 dark:bg-[#050505]/90 backdrop-blur-2xl p-8 md:p-16 rounded-[2rem] md:rounded-[3rem] flex flex-col xl:flex-row gap-8 lg:gap-16 items-center">
                    
                    <div className="flex-1">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-bold uppercase tracking-widest mb-8">
                            <Cpu className="w-4 h-4" /> Core Architecture
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6 leading-tight tracking-tight">
                            Why We Are the Top SEO Company in Malaysia
                        </h2>
                        
                        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-medium mb-6">
                            Traditional SEO is no longer enough. To rank #1 on Google today, your website needs a flawless technical foundation. Because we operate as an elite <Link to="/" className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline">web development company in Malaysia</Link> alongside our SEO division, we fix the root of the problem: <strong className="text-slate-900 dark:text-white">the code itself.</strong>
                        </p>
                        
                        <ul className="space-y-4 text-base md:text-lg text-slate-700 dark:text-slate-300 font-medium mb-8">
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                                <span><strong className="text-slate-900 dark:text-white">Beyond Keywords:</strong> We don't just write blogs; we optimize your server speed and clean up messy code so Google loves your site.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                                <span><strong className="text-slate-900 dark:text-white">Technical Perfection:</strong> We eliminate lag (TBT) and prevent layout jumps (CLS). Google rewards this smooth experience with maximum authority, passing the <a href="https://web.dev/vitals/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 dark:text-emerald-500 font-bold hover:underline">Core Web Vitals</a> assessment.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                                <span><strong className="text-slate-900 dark:text-white">AI-Ready (GEO):</strong> We structure your data so AI engines like ChatGPT and Gemini actually recommend your business to users.</span>
                            </li>
                        </ul>
                        
                        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                            From dominating Google Maps to capturing ready-to-buy traffic, our strategies are mathematically engineered to grow your revenue.
                        </p>
                    </div>

                    <div className="w-full xl:w-[400px] flex flex-col gap-4 flex-shrink-0">
                        <div className="p-6 rounded-2xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 shadow-sm flex items-center justify-between group/metric hover:border-emerald-500/30 transition-colors">
                            <div>
                                <div className="text-[10px] font-mono uppercase tracking-widest text-slate-500 mb-1">Performance Metric</div>
                                <div className="text-slate-900 dark:text-white font-bold text-sm">Total Blocking Time (TBT)</div>
                            </div>
                            <div className="text-2xl font-black text-emerald-500 font-mono">0<span className="text-sm">ms</span></div>
                        </div>
                        <div className="p-6 rounded-2xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 shadow-sm flex items-center justify-between group/metric hover:border-cyan-500/30 transition-colors">
                            <div>
                                <div className="text-[10px] font-mono uppercase tracking-widest text-slate-500 mb-1">Google Assessment</div>
                                <div className="text-slate-900 dark:text-white font-bold text-sm">Core Web Vitals</div>
                            </div>
                            <div className="text-2xl font-black text-cyan-500 font-mono">100<span className="text-sm text-slate-400">/100</span></div>
                        </div>
                        <div className="p-6 rounded-2xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 shadow-sm flex items-center justify-between group/metric hover:border-blue-500/30 transition-colors">
                            <div>
                                <div className="text-[10px] font-mono uppercase tracking-widest text-slate-500 mb-1">Visual Stability</div>
                                <div className="text-slate-900 dark:text-white font-bold text-sm">Layout Shift (CLS)</div>
                            </div>
                            <div className="text-2xl font-black text-blue-500 font-mono">0.00</div>
                        </div>
                    </div>

                </div>
            </div>
        </m.div>

        {/* === THE PRICING BRIDGE === */}
        <m.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-24 relative max-w-5xl mx-auto px-6"
        >
            <div className="relative p-[1px] rounded-[2.5rem] bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 dark:from-white/5 dark:via-white/10 dark:to-white/5 overflow-hidden shadow-xl">
                <div className="relative bg-white dark:bg-[#0a0a0a] p-10 md:p-16 rounded-[2.5rem] text-center">
                    <div className="w-16 h-16 mx-auto bg-rose-50 dark:bg-rose-500/10 text-rose-500 rounded-2xl flex items-center justify-center mb-8 border border-rose-100 dark:border-rose-500/20">
                        <ShieldCheck size={32} />
                    </div>
                    <h3 className="text-2xl md:text-4xl font-black tracking-tight text-slate-900 dark:text-white mb-6">Web Development is an Asset. <br className="hidden sm:block"/> <span className="text-rose-500">SEO is Ongoing Warfare.</span></h3>
                    <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-medium">
                        You might be wondering: <em>"Why do you charge one-time fees for websites, but monthly retainers for SEO?"</em> <br/><br/>
                        A website is digital real estate—you buy it once, and you own it forever. But SEO is an ongoing battle against your competitors and Google's ever-changing algorithm. A retainer isn't "rent"; it's your monthly ammunition to secure and defend your rank at the top of the search results.
                    </p>
                </div>
            </div>
        </m.div>

        {/* PRICING */}
        <div id="pricing">
        <PricingSection 
          serviceName="SEO Services"
          title="SEO Packages"
          description="Transparent pricing. No hidden fees. Results driven."
          plans={[
            {
              name: "Local Hero",
              price: "RM 399",
              period: "/mo",
              description: "\"Get Found by Neighbors.\" Stop losing customers to the shop next door.",
              features: ["Google Maps Optimization", "5 Local Keywords Tracked", "Review Management Advice", "Min Contract: 3 Months"],
              buttonText: "Start Local SEO Optimization",
              customButton: (
                <WhatsAppButton 
                  serviceName="SEO"
                  packageLabel="Local Hero"
                  buttonText="Start Local SEO Optimization"
                  className="w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700"
                />
              )
            },
            {
              name: "Traffic Builder",
              price: "RM 899",
              period: "/mo",
              description: "\"Get Found on Google Page 1.\" Perfect for businesses that need steady leads.",
              features: ["15 Buyer-Intent Keywords", "2 SEO Articles/Month", "Technical SEO Audit", "Google Analytics Setup"],
              isPopular: true,
              buttonText: "Grow Traffic with SEO",
              customButton: (
                <WhatsAppButton 
                  serviceName="SEO"
                  packageLabel="Traffic Builder"
                  buttonText="Grow Traffic with SEO"
                  className="w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all bg-indigo-500 hover:bg-indigo-400 text-white shadow-lg shadow-indigo-500/25"
                />
              )
            },
            {
              name: "Market Dominator",
              price: "RM 1,999",
              period: "/mo",
              description: "\"Crush Your Competitors.\" For brands that want to own the market.",
              features: ["National Keyword Strategy", "High-Quality Backlinks", "4 Authority Blog Posts/mo", "Dedicated SEO Manager"],
              buttonText: "Dominate Google Rankings",
              customButton: (
                <WhatsAppButton 
                  serviceName="SEO"
                  packageLabel="Market Dominator"
                  buttonText="Dominate Google Rankings"
                  className="w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700"
                />
              )
            }
          ]}
        />
        </div>

        {/* === AEO FAQ SECTION === */}
        <div className="mb-16 md:mb-32 max-w-4xl mx-auto">
           <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">SEO Strategy FAQ</h2>
           <div className="space-y-4">
              {faqSchema.mainEntity.map((item, i) => (
                 <div 
                    key={i} 
                    className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openFaq === i ?'border-emerald-500 bg-white dark:bg-slate-900 shadow-lg' : 'border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/30'}`}
                 >
                    <button 
                       onClick={() => setOpenFaq(openFaq === i ? null : i)}
                       className="w-full flex items-center justify-between p-6 text-left"
                    >
                       <h3 className={`font-bold text-lg ${openFaq === i ?'text-emerald-600 dark:text-emerald-400' : 'text-slate-900 dark:text-white'}`}>{item.name}</h3>
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

        {/* ONE TIME FIX UPSELL */}
        <m.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-50px" }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="relative mb-16 md:mb-32 group"
        >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 blur-2xl rounded-[3rem] opacity-50 transition-opacity duration-500 group-hover:opacity-70"></div>
            <div className="relative p-[1px] rounded-[2rem] md:rounded-[3rem] bg-gradient-to-br from-emerald-500/40 via-slate-800 to-cyan-500/40 overflow-hidden shadow-2xl">
                <div className="bg-slate-950 border border-white/5 rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row items-center gap-8 md:gap-12">
                   <div className="w-full md:w-2/3">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-emerald-500/30 bg-emerald-900/20 text-emerald-400 text-xs font-mono font-bold uppercase tracking-widest mb-6">
                        <FileText className="w-4 h-4" />
                        ONE-TIME FIX
                      </div>
                      <h2 className="text-3xl md:text-4xl font-black text-white mb-6">The SEO Rescue Audit</h2>
                      <p className="text-slate-400 text-lg leading-relaxed mb-8">
                         Hate monthly fees? Get a one-time comprehensive fix. We run a deep report, fix your Meta Titles & Descriptions, submit your sitemap to <a href="https://search.google.com/search-console/about" target="_blank" rel="noopener noreferrer" className="text-emerald-400 font-bold hover:underline">Google Search Console</a>, and give you a "Fixed" PDF report.
                      </p>
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                        <span className="text-3xl font-black text-white">RM 450 <span className="text-xs text-slate-500 font-bold uppercase tracking-widest block sm:inline sm:ml-2">/ one-time</span></span>
                        <WhatsAppButton 
                          serviceName="SEO Rescue Audit"
                          buttonText="Get Your SEO Rescue Audit"
                          className="text-slate-900 bg-emerald-400 font-bold hover:bg-emerald-300 px-8 py-4 rounded-full inline-flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-500/20"
                          showIcon={false}
                        />
                      </div>
                   </div>
                   <div className="md:w-1/3 flex justify-center opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                      <BarChart size={200} className="text-emerald-500" />
                   </div>
                </div>
            </div>
        </m.div>
      </m.main>
      <Footer />
    </div>
    </LazyMotion>
    </PageTransition>
  );
};

export default SeoServiceView;