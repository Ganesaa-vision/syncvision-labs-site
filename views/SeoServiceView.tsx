import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation } from 'react-router-dom';
import { Search, BarChart, ArrowRight, FileText, Trophy, Bot, Cpu, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import PricingSection from '../components/PricingSection';
import { m, LazyMotion, domAnimation, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Footer from '../components/Footer';
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
          alt="Omino Tech SEO and Web Development Portfolio Preview"
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
        alt="After SEO - Rank #1 on Google Malaysia" 
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
          alt="Before SEO - Poor Google Ranking" 
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
          "text": "For local keywords like 'Factory in Balakong', we have achieved Rank #1 in as little as 17 days using our Programmatic SEO strategy."
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
        desc: 'The future of search. We train AI models (Gemini, ChatGPT) to recognize your brand as the industry authority through entity graphing and sentiment optimization.',
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </Helmet>

      <m.main initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} className="relative z-10 pt-24 md:pt-32 pb-12 md:pb-20 px-6 max-w-7xl mx-auto flex-grow w-full">
        
        {/* HERO SECTION */}
        <m.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >

          <span className="font-mono text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Search Dominance</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-slate-900 dark:text-white mb-6 leading-[1.1]">
            The Best SEO Service in Malaysia: <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-cyan-500 to-fuchsia-500 dark:from-indigo-400 dark:via-cyan-300 dark:to-purple-400">Total Search Dominance</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            We don't just target keywords; we target <strong>Intent</strong>. We optimize your digital presence for the three engines that matter: Google Search, Google Maps, and AI Answer Engines (ChatGPT/Gemini).
          </p>
        </m.div>

        {/* === NEW: ACHIEVEMENTS SECTION === */}
        <m.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-32 relative"
        >
            
            <div className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-[3rem] p-6 md:p-16 overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-grid-slate-900/[0.05] dark:bg-grid-white/[0.02]"></div>

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
        <div className="mb-40">
            {/* Header */}
            <div className="text-center mb-20">
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
                <div className="space-y-24 lg:space-y-[30vh] pb-24 lg:pb-[20vh]">
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
                            <div className={`hidden lg:block absolute left-[-2px] top-0 h-full w-[2px] bg-gradient-to-b ${engine.color} transition-opacity duration-500 ${activeEngine === index ? 'opacity-100' : 'opacity-0'}`}></div>

                            {/* Mobile Image Preview */}
                            <div className="lg:hidden mb-8 w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 relative group">
                                <div className={`absolute inset-0 bg-gradient-to-br ${engine.color} opacity-20 z-10`}></div>
                                <ImageSlider images={engine.images} />
                                <div className="absolute bottom-4 right-4 z-20 bg-black/50 backdrop-blur-md text-white px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest border border-white/10">
                                    {engine.tag}
                                </div>
                            </div>

                            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-6 transition-colors duration-300 ${activeEngine === index ? 'bg-slate-100 dark:bg-white/10 border-transparent text-slate-900 dark:text-white' : 'border-slate-200 dark:border-slate-800 text-slate-500'}`}>
                                <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${engine.color}`}></span>
                                <span className="text-xs font-mono font-bold uppercase tracking-widest">{engine.tag}</span>
                            </div>

                            <h3 className={`text-4xl md:text-5xl font-black mb-6 transition-colors duration-300 ${activeEngine === index ? 'text-slate-900 dark:text-white' : 'text-slate-400 dark:text-slate-600'}`}>
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
        <div className="mb-32 p-10 md:p-16 bg-gradient-to-br from-emerald-50 to-white dark:from-slate-900 dark:to-[#0a0a0a] border border-emerald-100 dark:border-slate-800 rounded-[3rem] shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                Why We Are the Top SEO Company in Malaysia
            </h2>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                The era of traditional SEO is dead. To rank #1 on Google today, you need a flawless technical foundation. Because Omino Tech operates as both elite web developers and the best SEO service in Malaysia, we control the entire pipeline. We don't just optimize your keywords; we optimize your server response time, rewrite your DOM structure, and implement Generative Engine Optimization (GEO). Whether you are running a simple RM 590 landing page or a complex React-based application, our SEO strategies are mathematically engineered to capture high-intent traffic, dominate Google Maps, and ensure AI engines like ChatGPT cite your business first.
            </p>
        </div>

        {/* PRICING */}
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

        {/* === AEO FAQ SECTION === */}
        <div className="mb-32 max-w-4xl mx-auto">
           <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">SEO Strategy FAQ</h2>
           <div className="space-y-4">
              {faqSchema.mainEntity.map((item, i) => (
                 <div 
                    key={i} 
                    className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openFaq === i ? 'border-emerald-500 bg-white dark:bg-slate-900 shadow-lg' : 'border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/30'}`}
                 >
                    <button 
                       onClick={() => setOpenFaq(openFaq === i ? null : i)}
                       className="w-full flex items-center justify-between p-6 text-left"
                    >
                       <h3 className={`font-bold text-lg ${openFaq === i ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-900 dark:text-white'}`}>{item.name}</h3>
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
        <div className="bg-gradient-to-r from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-12 flex flex-col md:flex-row items-center gap-12 mb-32">
           <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-yellow-500/30 bg-yellow-900/10 text-yellow-400 text-xs font-mono mb-6">
                <FileText className="w-3 h-3" />
                ONE-TIME FIX
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">The SEO Rescue Audit</h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                 Hate monthly fees? Get a one-time comprehensive fix. We run a deep report, fix your Meta Titles & Descriptions, submit your sitemap to Google Console, and give you a "Fixed" PDF report.
              </p>
              <div className="flex items-center gap-6">
                <span className="text-2xl font-bold text-white">RM 450 <span className="text-sm text-slate-500 font-normal">/one-time</span></span>
                <WhatsAppButton 
                  serviceName="SEO Rescue Audit"
                  buttonText="Get Your SEO Rescue Audit"
                  className="text-emerald-400 font-bold hover:text-emerald-300 inline-flex items-center gap-2"
                  showIcon={true}
                />
              </div>
           </div>
           <div className="md:w-1/3 flex justify-center">
              <BarChart size={120} className="text-slate-800" />
           </div>
        </div>
      </m.main>
      <Footer />
    </div>
    </LazyMotion>
  );
};

export default SeoServiceView;