import React, { useLayoutEffect, useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation } from 'react-router-dom';
import { Search, BarChart, ArrowRight, FileText, Trophy, Bot, Cpu, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import PricingSection from '../components/PricingSection';
import { m, LazyMotion, domAnimation, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Footer from '../components/Footer';
import { WhatsAppButton } from '../components/WhatsAppButton';

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
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover will-change-[opacity,transform]"
          alt="Preview"
          loading="lazy"
        />
      </AnimatePresence>
      {/* Gradient Overlay for text readability if needed, though mostly for style here */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
    </div>
  );
};

const BeforeAfterSlider = ({ beforeImage, afterImage }: { beforeImage: string, afterImage: string }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const rectRef = useRef<DOMRect | null>(null);

  const handleStart = () => {
    setIsDragging(true);
    if (containerRef.current) {
      rectRef.current = containerRef.current.getBoundingClientRect();
    }
  };

  const handleEnd = () => {
    setIsDragging(false);
  };

  const handleMove = (event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging && event.type !== 'click') return;
    
    // If it's a click (not a drag), we need to get the rect immediately
    if (!rectRef.current && containerRef.current) {
        rectRef.current = containerRef.current.getBoundingClientRect();
    }

    const rect = rectRef.current;
    if (!rect) return;

    let x;
    if ('touches' in event) {
      x = (event as React.TouchEvent<HTMLDivElement>).touches[0].clientX;
    } else {
      x = (event as React.MouseEvent<HTMLDivElement>).clientX;
    }
    const position = ((x - rect.left) / rect.width) * 100;
    setSliderPosition(Math.min(100, Math.max(0, position)));
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden cursor-ew-resize select-none shadow-2xl border border-slate-200 dark:border-slate-800 group"
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
        alt="After SEO" 
        className="absolute inset-0 w-full h-full object-cover pointer-events-none" 
        draggable={false}
      />
      
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img 
          src={beforeImage} 
          alt="Before SEO" 
          className="absolute inset-0 w-full h-full object-cover" 
          draggable={false}
        />
        <div className="absolute inset-0 bg-slate-900/50 mix-blend-multiply pointer-events-none" />
      </div>

      <div 
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-10 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
        style={{ left: `${sliderPosition}%` }}
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

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
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
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop"
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
            "https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=2670&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2670&auto=format&fit=crop"
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
            "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2832&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2574&auto=format&fit=crop"
        ]
    }
  ];

  return (
    <LazyMotion features={domAnimation}>
    <div className="min-h-screen bg-slate-50 dark:bg-[#0a0a0a] text-slate-900 dark:text-slate-200 font-sans selection:bg-emerald-500/30 relative transition-colors duration-300">

      <Helmet>
        <title>Strategic SEO & AEO Dominance | Malaysia, Selangor & KL - Omino Tech</title>
        <meta name="description" content="Dominate Local Search in Malaysia, Selangor & KL. We specialize in SEO, Google Maps Ranking, and AEO (AI Search) for Malaysian manufacturers and SMEs." />
        <meta name="keywords" content="SEO Malaysia, SEO Service Selangor, SEO KL, Google Maps Ranking Malaysia, AEO Optimization, Local SEO Expert" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </Helmet>

      <div className="relative z-10 pt-24 md:pt-32 pb-12 md:pb-20 px-6 max-w-7xl mx-auto">
        
        {/* HERO SECTION */}
        <m.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >

          <span className="font-mono text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Search Dominance</span>
          <h1 className="text-4xl md:text-7xl font-bold tracking-tighter text-slate-900 dark:text-white mb-6 leading-tight">
            STRATEGIC SEO <br/> <span className="text-emerald-500">IN MALAYSIA.</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            We don't just target keywords; we target <strong>Intent</strong>. We optimize your digital presence for the three engines that matter: Google Search, Google Maps, and AI Answer Engines (ChatGPT/Gemini).
          </p>
        </m.div>

        {/* === NEW: ACHIEVEMENTS SECTION === */}
        <m.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-32 relative will-change-transform"
        >
            
            <div className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-[3rem] p-6 md:p-16 overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-grid-slate-900/[0.05] dark:bg-grid-white/[0.02]"></div>

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-black uppercase tracking-widest mb-8">
                            <Trophy size={14} /> Verified Case Study
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 leading-[0.9] tracking-tighter">
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
                            beforeImage="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1000&auto=format&fit=crop" 
                            afterImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop" 
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
                <h2 className="text-4xl md:text-7xl font-black text-slate-900 dark:text-white mb-8 tracking-tighter">
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
                            className="relative w-full h-full rounded-[3rem] overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 shadow-2xl transition-all duration-700 will-change-transform"
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
                            <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 dark:bg-black/40 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-3xl shadow-2xl flex items-center justify-between transform transition-all duration-500 hover:scale-[1.02]">
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
              buttonText: "Rank Local",
              customButton: (
                <WhatsAppButton 
                  serviceName="SEO"
                  packageLabel="Local Hero"
                  buttonText="Rank Local"
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
              buttonText: "Grow Traffic",
              customButton: (
                <WhatsAppButton 
                  serviceName="SEO"
                  packageLabel="Traffic Builder"
                  buttonText="Grow Traffic"
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
              buttonText: "Dominate",
              customButton: (
                <WhatsAppButton 
                  serviceName="SEO"
                  packageLabel="Market Dominator"
                  buttonText="Dominate"
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
                  buttonText="Get Rescued"
                  className="text-emerald-400 font-bold hover:text-emerald-300 inline-flex items-center gap-2"
                  showIcon={true}
                />
              </div>
           </div>
           <div className="md:w-1/3 flex justify-center">
              <BarChart size={120} className="text-slate-800" />
           </div>
        </div>
      </div>
      <Footer />
    </div>
    </LazyMotion>
  );
};

export default SeoServiceView;