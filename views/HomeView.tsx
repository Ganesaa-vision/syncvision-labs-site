import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation } from 'react-router-dom';
import { m, LazyMotion, domAnimation, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { 
    ArrowRight, Code2, Cpu, Globe, Zap, Bot, Terminal, 
    ShieldCheck, TrendingUp, Activity, Rocket, MessageSquare,
    ChevronDown, ChevronUp, CheckCircle2, CreditCard, Lock, Database, Calendar, Clock,
    LineChart, Network
} from 'lucide-react';
import Footer from '../components/Footer';
import { BLOG_POSTS } from '../constants';
import { IMAGES } from '../images';
import { PageTransition } from '../PageTransition';

// --- Sub-components for Semantic Structure & Clean Code ---

/**
 * Animated Counter Component utilizing react-countup and react-intersection-observer.
 * Triggers numerical counting strictly when scrolled into view.
 */
const MetricCounter = ({ end, suffix = "", title, description, icon: Icon, delay = 0 }: { end: number, suffix?: string, title: string, description: string, icon: React.ElementType, delay?: number }) => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
    
    return (
        <m.article 
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay, ease: "easeOut" }}
            className="flex flex-col items-start p-6 md:p-8 bg-gradient-to-b from-slate-50 to-white dark:from-white/[0.04] dark:to-transparent rounded-[2rem] border border-slate-200 dark:border-white/[0.05] hover:border-indigo-500/30 transition-all duration-500 group relative overflow-hidden shadow-sm dark:shadow-none"
        >
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition-all duration-700 pointer-events-none"></div>
            
            <div className="relative z-10 flex flex-col w-full">
                <div className="flex items-center justify-between mb-6 w-full">
                    <div className="p-3 bg-white dark:bg-white/[0.03] rounded-2xl border border-slate-200 dark:border-white/10 group-hover:border-indigo-500/40 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-500/10 transition-all duration-500 shadow-sm dark:shadow-inner">
                        <Icon className="w-6 h-6 text-indigo-500 dark:text-indigo-400" />
                    </div>
                    <Activity className="w-4 h-4 text-slate-400 dark:text-slate-600 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors" />
                </div>
                <div className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mb-2 tracking-tighter">
                    {inView ? <CountUp end={end} duration={2.5} separator="," /> : "0"}{suffix}
                </div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-1 tracking-tight">{title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">{description}</p>
            </div>
        </m.article>
    );
};

/**
 * Premium Service Card for End-to-End Architecture
 */
const PremiumServiceCard = ({ title, description, icon: Icon, features, delay = 0 }: { title: string, description: string, icon: React.ElementType, features: string[], delay?: number }) => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
    
    return (
        <m.article 
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay, ease: "easeOut" }}
            className="relative p-[1px] rounded-[2.5rem] overflow-hidden group bg-gradient-to-b from-slate-200 to-transparent dark:from-white/10 dark:to-transparent hover:from-indigo-500/50 hover:-translate-y-4 hover:shadow-[0_20px_40px_-15px_rgba(99,102,241,0.3)] transition-all duration-500 transform-gpu"
        >
            <div className="absolute inset-[1px] bg-white dark:bg-[#050505] rounded-[2.5rem] z-0 transition-colors duration-700 group-hover:bg-slate-50 dark:group-hover:bg-[#08080c]"></div>
            <div className="relative z-10 p-6 md:p-10 h-full flex flex-col">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-2xl flex items-center justify-center text-indigo-600 dark:text-white mb-6 md:mb-8 group-hover:scale-110 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-500/20 group-hover:border-indigo-200 dark:group-hover:border-indigo-500/50 group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-all duration-500 shadow-sm dark:shadow-xl">
                    <Icon size={24} className="md:w-[26px] md:h-[26px]" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3 md:mb-4 tracking-tight">{title}</h3>
                <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-6 md:mb-8 flex-grow">{description}</p>
                <ul className="space-y-3 mt-auto pt-6 border-t border-slate-100 dark:border-white/5">
                    {features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-indigo-500 dark:text-indigo-500/70 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 flex-shrink-0 mt-0.5 transition-colors" />
                            <span className="text-sm text-slate-700 dark:text-slate-300 font-medium">{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </m.article>
    );
};

/**
 * Bento Grid Card
 */
const BentoCard = ({ className, title, description, icon: Icon, children }: { className?: string, title: string, description: string, icon: React.ElementType, children?: React.ReactNode }) => (
    <article className={`p-6 md:p-10 bg-gradient-to-br from-slate-50 to-white dark:from-white/[0.03] dark:to-transparent border border-slate-200 dark:border-white/5 rounded-[2rem] md:rounded-[2.5rem] relative overflow-hidden group hover:border-indigo-500/30 hover:bg-slate-100 dark:hover:bg-white/[0.04] transition-all duration-500 shadow-sm dark:shadow-none ${className}`}>
        <div className="absolute top-0 right-0 p-10 opacity-[0.02] group-hover:opacity-10 transition-all duration-700 transform-gpu group-hover:scale-110 pointer-events-none text-slate-900 dark:text-white"><Icon size={180} /></div>
        <div className="relative z-10 flex flex-col h-full">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-indigo-50 dark:bg-indigo-500/10 rounded-2xl flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-500 border border-indigo-200 dark:border-indigo-500/20"><Icon size={24} className="md:w-[26px] md:h-[26px]" /></div>
            <h3 className="text-xl md:text-3xl font-bold text-slate-900 dark:text-white mb-3 md:mb-4 tracking-tight">{title}</h3>
            <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-5 md:mb-6">{description}</p>
            <div className="mt-auto pt-4">
                {children}
            </div>
        </div>
    </article>
);

/**
 * Semantic Blog Preview Section
 */
const BlogPreview = () => {
    const posts = typeof BLOG_POSTS !== 'undefined' ? BLOG_POSTS.slice(0, 3) : [];
    if (posts.length === 0) return null;

    return (
        <section aria-labelledby="insights-title" className="py-24 md:py-32 px-6 max-w-7xl mx-auto border-t border-slate-200 dark:border-white/5 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
                <div>
                    <div className="inline-flex items-center gap-2 mb-6">
                        <span className="text-indigo-600 dark:text-indigo-400 font-mono text-xs font-bold uppercase tracking-[0.2em]">Engineering Logs</span>
                    </div>
                    <h2 id="insights-title" className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-slate-900 dark:text-white leading-[1.1]">
                        Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500 dark:from-indigo-400 dark:to-cyan-300">Insights.</span>
                    </h2>
                </div>
                <Link to="/blog" className="group flex items-center gap-2 text-sm font-bold text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    View All Articles <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {posts.map((post, i) => (
                    <m.article key={post.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                        <Link to={`/blog/${post.slug}`} className="group block h-full bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 rounded-[2rem] overflow-hidden hover:bg-slate-50 dark:hover:bg-white/[0.05] hover:border-indigo-500/30 hover:-translate-y-2 transform-gpu transition-all duration-500 shadow-lg dark:shadow-xl">
                            <div className="aspect-[16/10] overflow-hidden relative">
                                <img src={post.image} alt={post.title} className="w-full h-full object-cover transform-gpu group-hover:scale-105 transition-transform duration-700" loading="lazy" decoding="async" />
                                <div className="absolute top-4 left-4"><span className="px-3 py-1 bg-white/90 dark:bg-black/80 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider rounded-lg border border-slate-200 dark:border-white/10 text-indigo-600 dark:text-indigo-300">{post.category}</span></div>
                            </div>
                            <div className="p-8 flex flex-col justify-between">
                                <div className="flex items-center gap-4 text-xs text-slate-500 mb-4 font-mono"><span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span><span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span></div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 leading-snug group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors tracking-tight">{post.title}</h3>
                            </div>
                        </Link>
                    </m.article>
                ))}
            </div>
        </section>
    );
};

const HomeView: React.FC = () => {
    const { pathname } = useLocation();
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }, [pathname]);

    // --- Interactive Mouse Spotlight ---
    const cursorX = useMotionValue(-1000);
    const cursorY = useMotionValue(-1000);
    const mouseX = useSpring(cursorX, { damping: 40, stiffness: 300, mass: 0.5 });
    const mouseY = useSpring(cursorY, { damping: 40, stiffness: 300, mass: 0.5 });

    useEffect(() => {
        // Create a stunning sweeping entrance effect on load
        cursorX.set(typeof window !== 'undefined' ? window.innerWidth / 2 : 800);
        cursorY.set(typeof window !== 'undefined' ? window.innerHeight / 3 : 400);
    }, [cursorX, cursorY]);

    const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        cursorX.set(e.clientX - rect.left);
        cursorY.set(e.clientY - rect.top);
    };

    // Advanced AEO/GEO Schema
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebSite",
                "name": "Omino Tech",
                "url": "https://www.ominotech.com.my"
            },
            {
                "@type": "ProfessionalService",
                "name": "Omino Tech",
                "description": "Specialized custom web development and technical SEO engineering firm for Malaysian SMEs and modern businesses.",
                "areaServed": "Malaysia",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Jalan KPB 12, Balakong",
                    "addressLocality": "Seri Kembangan",
                    "addressRegion": "Selangor",
                    "addressCountry": "MY"
                },
                "priceRange": "RM 590 - RM 2750"
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "What makes Omino Tech different from traditional web agencies in Malaysia?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Unlike traditional agencies that rely on slow, pre-built templates, Omino Tech specializes in high-performance, custom web architecture. We write clean code using Next.js and React to ensure sub-second load times and elite Google Core Web Vitals scores."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Do you offer web development packages for SMEs in Malaysia?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. We offer highly transparent pricing designed for growing businesses. Our packages range from an RM 590 professional landing page to a comprehensive RM 2,500 Signature Digital Engine that includes custom web design, SEO, and AI automation."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Do you charge hidden monthly maintenance fees?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No. We do not trap our clients in expensive monthly retainers. You pay a one-time development fee and take absolute ownership of your digital assets and code."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How long does it take to design and launch my website?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "A standard corporate SME website or professional landing page can be engineered, optimized for SEO, and launched within 7 to 14 days."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Do I fully own my website, domain, and source code?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "100%. Unlike renting on Shopify or Wix, Omino Tech builds digital assets that you fully own. We hand over all administrative rights and source code upon completion."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Do you integrate Malaysian payment gateways like FPX and Billplz?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. We seamlessly integrate local FPX payment gateways like ToyyibPay and Billplz, as well as Stripe, for secure online banking transactions."
                        }
                    }
                ]
            }
        ]
    };

    const faqData = [
        { 
            q: "What makes Omino Tech different from traditional web agencies in Malaysia?", 
            a: "Unlike traditional agencies that rely on slow, pre-built templates, Omino Tech specializes in high-performance, custom web architecture. We write clean code using Next.js and React to ensure sub-second load times, providing a superior user experience and elite Google search rankings." 
        },
        { 
            q: "Do you offer web development packages for SMEs in Malaysia?", 
            a: "Yes. We offer highly transparent pricing designed specifically for growing businesses. Our packages range from an affordable RM 590 professional landing page to a comprehensive RM 2,500 Signature Digital Engine that includes custom web design, SEO setup, and AI automation." 
        },
        { 
            q: "Do you charge hidden monthly maintenance fees?", 
            a: "No. We do not trap our clients in expensive monthly marketing retainers. You pay a straightforward, one-time development fee for your website or application and take absolute ownership of your digital assets and code." 
        },
        {
            q: "How long does it take to design and launch my website?",
            a: "We prioritize rapid deployment without sacrificing code quality. A standard corporate SME website or professional landing page can be engineered, optimized for SEO, and launched within 7 to 14 days, depending on how quickly you provide your business content."
        },
        {
            q: "Do I fully own my website, domain, and source code?",
            a: "100%. Unlike platforms such as Shopify or Wix where you essentially \"rent\" your store, Omino Tech builds digital assets that you fully own. Upon completion, we hand over all administrative rights, source code, and hosting credentials directly to you."
        },
        {
            q: "Do you integrate Malaysian payment gateways like FPX and Billplz?",
            a: "Yes. We are expert e-commerce developers. We seamlessly integrate local FPX payment gateways (including ToyyibPay and Billplz) as well as Stripe, allowing your Malaysian customers to pay securely via direct online banking with zero friction."
        }
    ];

    return (
        <PageTransition>
        <Helmet>
            <title>High-Performance Web Development & SEO in Malaysia | Omino Tech</title>
            <meta name="description" content="Omino Tech engineers custom, high-speed Next.js websites and technical SEO solutions for Malaysian SMEs. Transparent web design packages starting from RM 590." />
            <meta name="keywords" content="Custom web development Malaysia, High-performance web design Malaysia, Technical SEO Malaysia, Next.js developer Malaysia, SME website packages" />
            <link rel="canonical" href="https://www.ominotech.com.my" />
            <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
            <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
            <link rel="manifest" href="/site.webmanifest" />
            <meta property="og:image" content={IMAGES.GLOBAL.LOGO} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
        </Helmet>

            <div className="min-h-screen flex flex-col bg-white dark:bg-[#030303] text-slate-900 dark:text-slate-200 font-sans selection:bg-indigo-500/30 relative overflow-hidden transition-colors duration-300">
                
                <main className="flex-grow w-full relative z-10">
                    
                    {/* --- AWWWARDS PREMIUM HERO SECTION --- */}
                    <header 
                        id="hero-header"
                        onMouseMove={handleMouseMove}
                        className="relative min-h-[100svh] flex flex-col justify-center pt-32 pb-20 overflow-hidden"
                    >
                        {/* --- Hero Isolated Background Effects --- */}
                        <div className="absolute inset-0 z-0 pointer-events-none bg-slate-50 dark:bg-[#030303] transition-colors duration-300">
                            {/* Liquid Aurora Orbs */}
                            <m.div 
                                animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
                                transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-indigo-200/40 dark:bg-indigo-600/30 rounded-full blur-3xl transform-gpu will-change-transform"
                            />
                            <m.div 
                                animate={{ scale: [1, 1.05, 1], opacity: [0.2, 0.4, 0.2] }}
                                transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                                className="absolute top-[10%] right-[-20%] w-[50vw] h-[50vw] bg-cyan-200/30 dark:bg-cyan-600/20 rounded-full blur-3xl transform-gpu will-change-transform"
                            />
                            <m.div 
                                animate={{ scale: [1, 1.05, 1], opacity: [0.2, 0.4, 0.2] }}
                                transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 5 }}
                                className="absolute bottom-[-20%] left-[20%] w-[60vw] h-[60vw] bg-fuchsia-200/30 dark:bg-fuchsia-600/20 rounded-full blur-3xl transform-gpu will-change-transform"
                            />

                        {/* Base Dim Dots - Slightly more spread out for an elegant look */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.04)_1.5px,transparent_1.5px)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1.5px,transparent_1.5px)] bg-[size:24px_24px]"></div>

                        {/* Soft Ambient Cursor Glow */}
                            <m.div 
                            className="absolute top-0 left-0 w-[800px] h-[800px] bg-indigo-500/10 dark:bg-indigo-400/10 rounded-full blur-3xl pointer-events-none transform-gpu will-change-transform"
                                style={{ x: mouseX, y: mouseY, translateX: '-50%', translateY: '-50%' }}
                            />

                        {/* Interactive Glowing Dots - Only visible where the mouse hovers */}
                        <div 
                            className="absolute inset-0 z-0 pointer-events-none"
                            style={{
                                maskImage: 'radial-gradient(circle at center, black 1.5px, transparent 1.5px)',
                                maskSize: '24px 24px',
                                WebkitMaskImage: 'radial-gradient(circle at center, black 1.5px, transparent 1.5px)',
                                WebkitMaskSize: '24px 24px',
                            }}
                        >
                            <m.div 
                                className="absolute top-0 left-0 w-[1000px] h-[1000px] rounded-full transform-gpu will-change-transform opacity-70 dark:opacity-100"
                                style={{ 
                                    x: mouseX, 
                                    y: mouseY, 
                                    translateX: '-50%', 
                                    translateY: '-50%',
                                    background: 'radial-gradient(circle, rgba(79,70,229,1) 0%, rgba(168,85,247,0.8) 15%, rgba(6,182,212,0.5) 30%, transparent 50%)'
                                }}
                            />
                        </div>

                            {/* Abstract Architectural Rings */}
                            <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center">
                                <m.div 
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                                    className="absolute w-[800px] h-[800px] border border-slate-900/[0.06] dark:border-white/[0.03] rounded-full"
                                />
                                <m.div 
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
                                    className="absolute w-[1200px] h-[1200px] border border-indigo-600/[0.1] dark:border-indigo-500/[0.04] rounded-full"
                                />
                            </div>

                            {/* Bottom Fade out to seamlessly blend into standard page below */}
                            <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-white dark:from-[#030303] via-white/80 dark:via-[#030303]/80 to-transparent"></div>
                        </div>

                        {/* --- Hero Foreground Content --- */}
                    <div className="relative z-10 px-6 max-w-5xl mx-auto w-full flex flex-col items-center text-center pt-12 md:pt-20">
                        {/* Pill */}
                        <m.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-slate-900/5 dark:border-white/5 bg-slate-900/[0.02] dark:bg-white/[0.02] text-slate-600 dark:text-slate-300 text-[10px] sm:text-xs font-bold font-mono uppercase tracking-widest mb-8 backdrop-blur-md shadow-sm"
                        >
                            <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(99,102,241,0.8)]"></div>
                            <span>CUSTOM WEB ARCHITECTURE | TECHNICAL SEO | AI AUTOMATION</span>
                        </m.div>

                        {/* H1 */}
                        <m.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 tracking-tighter leading-[1.1] text-slate-900 dark:text-white max-w-5xl mx-auto"
                        >
                            High-Performance Web Development
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-cyan-500 to-fuchsia-500 dark:from-indigo-400 dark:via-cyan-300 dark:to-purple-400 block mt-1 md:mt-2">
                                & SEO in Malaysia
                            </span>
                        </m.h1>

                        {/* CTAs */}
                        <m.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto mb-16 md:mb-20"
                        >
                            <Link to="/services" className="w-full sm:w-auto group relative inline-flex items-center justify-center px-8 py-4 font-bold text-sm uppercase tracking-[0.2em] text-white dark:text-slate-900 overflow-hidden rounded-full bg-slate-900 dark:bg-white hover:scale-105 active:scale-95 transition-all duration-500 shadow-[0_0_30px_rgba(0,0,0,0.15)] dark:shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_50px_rgba(99,102,241,0.5)]">
                                <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"></span>
                                <span className="relative flex items-center gap-3 group-hover:text-white transition-colors duration-500">
                                    View Packages & Pricing <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                </span>
                            </Link>
                            <Link to="/services/seo-service" className="w-full sm:w-auto group relative inline-flex items-center justify-center px-8 py-4 font-bold text-sm uppercase tracking-[0.2em] text-slate-700 dark:text-white overflow-hidden rounded-full border border-slate-300 dark:border-white/20 bg-transparent hover:scale-105 active:scale-95 transition-all duration-500 backdrop-blur-sm hover:shadow-[0_0_20px_rgba(0,0,0,0.05)] dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:border-slate-400 dark:hover:border-white/40">
                                <span className="absolute inset-0 bg-slate-100 dark:bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"></span>
                                <span className="relative flex items-center gap-3 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-500">
                                    See Our SEO Results <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                </span>
                            </Link>
                        </m.div>

                        {/* The Text Block / Manifesto Panel */}
                        <m.div
                            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="relative w-full max-w-4xl mx-auto"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-cyan-500/20 blur-3xl rounded-[2rem] opacity-50 pointer-events-none"></div>
                            <div className="relative p-[1px] rounded-[2.5rem] bg-gradient-to-b from-slate-200 to-transparent dark:from-white/10 dark:to-white/0 overflow-hidden shadow-2xl">
                                <div className="relative bg-white/60 dark:bg-[#030303]/80 backdrop-blur-2xl p-8 md:p-12 rounded-[2.5rem]">
                                    {/* Mac window dots for aesthetic */}
                                    <div className="relative flex items-center justify-between mb-8 pb-5 border-b border-slate-200 dark:border-white/5">
                                        <div className="flex gap-2 relative z-10">
                                            {/* Authentic macOS Window Controls */}
                                            <div className="w-3.5 h-3.5 rounded-full bg-[#FF5F56] border border-[#E0443E] shadow-sm hover:brightness-110 transition-all cursor-pointer"></div>
                                            <div className="w-3.5 h-3.5 rounded-full bg-[#FFBD2E] border border-[#DEA123] shadow-sm hover:brightness-110 transition-all cursor-pointer"></div>
                                            <div className="w-3.5 h-3.5 rounded-full bg-[#27C93F] border border-[#1AAB29] shadow-sm hover:brightness-110 transition-all cursor-pointer"></div>
                                        </div>
                                        
                                        {/* Absolute centered title bar like Safari/Terminal */}
                                        <div className="absolute left-0 right-0 flex justify-center pointer-events-none">
                                            <div className="flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-widest text-slate-600 dark:text-slate-400 bg-slate-100/50 dark:bg-white/[0.03] px-4 py-1.5 rounded-lg border border-slate-200/50 dark:border-white/5 shadow-sm backdrop-blur-md">
                                                <Terminal size={14} className="text-indigo-500 dark:text-indigo-400" />
                                                <span>Omino_Tech_Manifesto.sh</span>
                                            </div>
                                        </div>
                                        
                                        {/* Spacer to perfectly balance the flex-between layout */}
                                        <div className="w-[54px]"></div>
                                    </div>

                                    <m.div 
                                        initial="hidden"
                                        animate="visible"
                                        variants={{
                                            hidden: { opacity: 1 },
                                            visible: {
                                                opacity: 1,
                                                transition: {
                                                    delayChildren: 1.2, // Waits for the window to animate in
                                                    staggerChildren: 0.6 // Echoes each line sequentially
                                                }
                                            }
                                        }}
                                        className="text-base md:text-lg lg:text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium space-y-6 text-left"
                                    >
                                        <m.p variants={{ hidden: { opacity: 0, y: 5 }, visible: { opacity: 1, y: 0, transition: { duration: 0.3 } } }}>
                                            <strong className="text-slate-900 dark:text-white font-bold">Traditional digital agencies overcharge for slow, outdated website templates.</strong> Omino Tech is a modern engineering firm built to disrupt that model.
                                        </m.p>
                                        <m.p variants={{ hidden: { opacity: 0, y: 5 }, visible: { opacity: 1, y: 0, transition: { duration: 0.3 } } }}>
                                            We specialize in custom web development and technical SEO across Malaysia, engineering blazing-fast digital infrastructure that actually drives revenue.
                                        </m.p>
                                        <m.p variants={{ hidden: { opacity: 0, y: 5 }, visible: { opacity: 1, y: 0, transition: { duration: 0.3 } } }}>
                                            Whether you are an SME needing a reliable corporate site or a startup requiring a custom Next.js application, we deliver pure performance with <span className="text-indigo-600 dark:text-indigo-400 font-bold">100% transparent pricing</span> and <span className="text-indigo-600 dark:text-indigo-400 font-bold">zero hidden fees</span>.
                                            <m.span 
                                                animate={{ opacity: [1, 1, 0, 0] }} 
                                                transition={{ repeat: Infinity, duration: 1, times: [0, 0.5, 0.5, 1] }}
                                                className="inline-block w-2.5 h-[1em] bg-indigo-500 dark:bg-indigo-400 ml-1.5 align-middle shadow-[0_0_8px_rgba(99,102,241,0.8)]"
                                            />
                                        </m.p>
                                    </m.div>
                                </div>
                            </div>
                        </m.div>
                        </div>
                    </header>
                    
                    {/* --- MARQUEE / TICKER --- */}
                    <section aria-label="Performance Metrics" className="w-full border-y border-slate-200 dark:border-white/5 bg-white/80 dark:bg-[#030303]/80 backdrop-blur-md overflow-hidden py-5 md:py-6 relative z-10">
                        <m.div 
                            className="flex gap-16 md:gap-32 whitespace-nowrap items-center transform-gpu will-change-transform"
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
                        >
                            {[...Array(8)].map((_, i) => (
                                <div key={i} className="flex gap-16 md:gap-32 text-[10px] md:text-xs font-mono font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 items-center">
                                    <span className="flex items-center gap-3"><TrendingUp size={14} className="text-purple-600 dark:text-purple-500"/> <span className="text-slate-900 dark:text-slate-200">Rank #1 on Google</span></span>
                                    <span className="flex items-center gap-3"><Zap size={14} className="text-indigo-600 dark:text-indigo-500"/> <span className="text-slate-900 dark:text-slate-200">AI Overview Captured</span></span>
                                    <span className="flex items-center gap-3"><Activity size={14} className="text-cyan-600 dark:text-cyan-500"/> <span className="text-slate-900 dark:text-slate-200">420% Lead Increase</span></span>
                                    <span className="flex items-center gap-3"><Code2 size={14} className="text-indigo-600 dark:text-indigo-500" /> <span className="text-slate-900 dark:text-slate-200">Active R&D Labs</span></span>
                                </div>
                            ))}
                        </m.div>
                    </section>

                    {/* --- BENTO GRID: THE MALAYSIAN ADVANTAGE --- */}
                    <section aria-labelledby="advantage-title" className="py-24 md:py-32 lg:py-40 px-6 max-w-7xl mx-auto relative z-10">
                        <div className="text-center mb-16 md:mb-24 max-w-3xl mx-auto">
                            <div className="inline-flex items-center gap-2 mb-6">
                                <span className="text-indigo-600 dark:text-indigo-400 font-mono text-xs font-bold uppercase tracking-[0.2em]">Local Ecosystem</span>
                            </div>
                            <h2 id="advantage-title" className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter text-slate-900 dark:text-white mb-8 leading-[1.1]">Engineered for <br/> <span className="text-slate-400 dark:text-slate-500">Malaysia.</span></h2>
                            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium">Global templates fail in local markets. We build digital infrastructure specifically for how Malaysians browse, buy, and interact.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <BentoCard 
                                className="lg:col-span-2" 
                                title="Native FPX Payment Integration" 
                                description="Don't lose 60% of customers who prefer online banking. We integrate ToyyibPay, Billplz, and Stripe directly. No redirects to generic checkout pages. Seamless, trusted transactions." 
                                icon={CreditCard}
                            >
                                <div className="flex gap-2 flex-wrap">
                                    {['Maybank2u', 'CIMB Clicks', 'GrabPay', 'TnG eWallet'].map(bank => (
                                        <span key={bank} className="text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1.5 bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-lg text-slate-600 dark:text-slate-300 shadow-sm dark:shadow-none">{bank}</span>
                                    ))}
                                </div>
                            </BentoCard>

                            <BentoCard 
                                title="WhatsApp Commerce" 
                                description="Malaysians love to chat before buying. We bridge your website directly to the WhatsApp API for instant deal-closing." 
                                icon={MessageSquare}
                            />

                            <BentoCard 
                                title="4G Optimized Speeds" 
                                description="Rural Malaysia relies heavily on mobile data. Our semantic HTML architectures load in <1s even on 4G networks." 
                                icon={Zap}
                            />

                            <BentoCard 
                                className="lg:col-span-2" 
                                title="Asset Ownership (No Rent)" 
                                description="Stop paying monthly 'rent' to Shopify or Wix. We build custom digital assets that you own 100%. No platform fees. No hidden commissions. Just pure scalable profit." 
                                icon={Lock}
                            >
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-50 dark:bg-white/[0.03] border border-indigo-100 dark:border-white/10 text-indigo-600 dark:text-indigo-300 text-xs font-bold font-mono uppercase tracking-wider">
                                        <CheckCircle2 size={14} /> One-Time Payment Model
                                </div>
                            </BentoCard>
                        </div>
                    </section>

                    {/* --- PERFORMANCE DASHBOARD (Integrated Counters & Achievements) --- */}
                    <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto relative z-10">
                        <div className="p-8 md:p-16 bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 rounded-[3rem] shadow-xl dark:shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-300/30 dark:bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
                            
                            <div className="text-center md:text-left mb-16 relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
                                <div>
                                    <div className="inline-flex items-center gap-2 mb-6">
                                        <span className="text-indigo-600 dark:text-indigo-400 font-mono text-xs font-bold uppercase tracking-[0.2em]">Performance Dashboard</span>
                                    </div>
                                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-slate-900 dark:text-white leading-[1.1]">
                                        Data-Driven <br className="hidden md:block"/>
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500 dark:from-indigo-400 dark:to-cyan-300">Outcomes.</span>
                                    </h2>
                                </div>
                                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-md font-medium">We don't sell hours; we sell verifiable mathematical performance increases across engineering and SEO.</p>
                            </div>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                                <MetricCounter delay={0.1} end={95} suffix="%" title="Faster Load Times" description="Sub-second speed via modern JS payloads." icon={Zap} />
                                <MetricCounter delay={0.2} end={420} suffix="%" title="Lead Increase" description="Conversion-optimized UX." icon={TrendingUp} />
                                <MetricCounter delay={0.3} end={400} suffix="+" title="Projects Deployed" description="Verifiable engineering scale." icon={ShieldCheck} />
                                <MetricCounter delay={0.4} end={17} suffix="" title="Days to Rank #1" description="Aggressive Programmatic SEO." icon={Rocket} />
                            </div>
                        </div>
                    </section>

                    {/* --- THE FUTURE IS AUTONOMOUS --- */}
                    <section aria-labelledby="autonomous-title" className="py-24 md:py-32 lg:py-40 px-6 max-w-7xl mx-auto relative z-10">
                        <div className="flex flex-col md:flex-row gap-16 items-center">
                            <div className="flex-1 space-y-8">
                                <div className="inline-flex items-center gap-2 mb-6">
                                    <Cpu className="w-4 h-4 text-indigo-500" />
                                    <span className="text-indigo-600 dark:text-indigo-400 font-mono text-xs font-bold uppercase tracking-[0.2em]">Market Evolution</span>
                                </div>
                                <h2 id="autonomous-title" className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-slate-900 dark:text-white mb-6 leading-[1.1]">
                                    The Future is <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Autonomous.</span>
                                </h2>
                                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium max-w-xl">
                                    The digital market is shifting from static websites to intelligent ecosystems. Your business needs a <strong className="text-slate-900 dark:text-white">Digital Workforce</strong>. We build systems that sell, support, and scale 24/7.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-xl text-indigo-600 dark:text-indigo-400 mt-1 shadow-sm dark:shadow-inner"><Bot size={20} /></div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-1 tracking-tight">24/7 Sales Agents</h3>
                                            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">AI that engages visitors and closes deals instantly, any time of day.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-xl text-cyan-600 dark:text-cyan-400 mt-1 shadow-sm dark:shadow-inner"><LineChart size={20} /></div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-1 tracking-tight">Predictive Growth</h3>
                                            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Systems that analyze user behavior to optimize your offers automatically.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 w-full">
                                <div className="relative aspect-square md:aspect-video bg-slate-100 dark:bg-[#050505] rounded-[2.5rem] border border-slate-200 dark:border-white/5 overflow-hidden shadow-xl dark:shadow-2xl group">
                                    <img src={IMAGES.HOME.FUTURE_TECH_AI_NETWORK} alt="AI Neural Network" loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover opacity-60 dark:opacity-40 group-hover:opacity-80 dark:group-hover:opacity-60 group-hover:scale-105 transition-all duration-1000" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-100 dark:from-[#030303] via-transparent to-transparent"></div>
                                    <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/80 dark:bg-white/[0.02] backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-2xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 shadow-xl dark:shadow-2xl">
                                        <div className="flex items-center gap-4 mb-3">
                                            <div className="p-2 bg-indigo-100 dark:bg-indigo-500/20 rounded-lg text-indigo-600 dark:text-indigo-400"><Network size={20} /></div>
                                            <div>
                                                <div className="text-slate-900 dark:text-white font-mono font-bold uppercase tracking-widest text-xs">Neural Core</div>
                                                <div className="text-slate-500 dark:text-slate-400 text-[10px] font-mono">Status: Active Learning</div>
                                            </div>
                                        </div>
                                        <div className="h-1 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                                            <div className="h-full bg-indigo-600 dark:bg-indigo-500 w-[70%] animate-pulse"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* --- STRATEGIC SERVICES SECTION (Center-Aligned Title) --- */}
                    <section className="py-24 md:py-32 lg:py-40 px-6 max-w-7xl mx-auto relative z-10">
                        <div className="text-center mb-20 md:mb-32">
                            <div className="inline-flex items-center gap-2 mb-6">
                                <span className="text-indigo-600 dark:text-indigo-400 font-mono text-xs font-bold uppercase tracking-[0.2em]">Our Expertise</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-slate-900 dark:text-white mb-6 leading-[1.1]">
                                Strategic <br className="md:hidden" /> 
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500 dark:from-indigo-400 dark:to-cyan-300">Services.</span>
                            </h2>
                            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium">We deliver enterprise-grade digital infrastructure designed to scale your business and dominate local markets.</p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                            <PremiumServiceCard 
                                title="Custom Web Architecture"
                                description="We write the code. From high-speed corporate sites to complex web applications, we engineer scalable digital assets starting at just RM 590."
                                icon={Code2}
                                features={["High-Speed Corporate Sites", "Starting at RM 590"]}
                                delay={0.1}
                            />
                            <PremiumServiceCard 
                                title="Technical SEO Engineering"
                                description="We don't just guess; we use data. We optimize your DOM structure, Core Web Vitals, and search semantics to rank your business across Malaysia."
                                icon={TrendingUp}
                                features={["Core Web Vitals Optimization", "Search Semantics"]}
                                delay={0.2}
                            />
                            <PremiumServiceCard 
                                title="AI & Business Automation"
                                description="Reduce overhead. Deploy 24/7 AI Agents on WhatsApp and your website to instantly capture leads and support your customers."
                                icon={Bot}
                                features={["WhatsApp AI Agents", "Instant Lead Capture"]}
                                delay={0.3}
                            />
                            <PremiumServiceCard 
                                title="Mobile App Engineering"
                                description="We build robust, native iOS and Android applications using Flutter to streamline your internal operations and engage your user base."
                                icon={Cpu}
                                features={["Native iOS & Android", "Flutter Engineering"]}
                                delay={0.4}
                            />
                        </div>
                    </section>

                    {/* --- THE BUNDLE PITCH (VALUE ANCHOR) --- */}
                    <section aria-labelledby="bundle-title" className="py-24 md:py-32 px-6 max-w-7xl mx-auto relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                            <div className="space-y-10">
                                <div>
                                    <div className="inline-flex items-center gap-2 mb-6">
                                        <span className="text-indigo-600 dark:text-indigo-400 font-mono text-xs font-bold uppercase tracking-[0.2em]">THE ALL-IN-ONE SOLUTION</span>
                                    </div>
                                    <h2 id="bundle-title" className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-slate-900 dark:text-white leading-[1.1] mb-8">
                                        The Complete Digital <br/>
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-cyan-500 to-purple-600 dark:from-indigo-400 dark:via-cyan-300 dark:to-purple-400">Growth Engine.</span>
                                    </h2>
                                    <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                                        Stop managing separate freelancers for web design, SEO, and marketing. Get the ultimate all-in-one digital infrastructure engineered specifically for ambitious Malaysian SMEs.
                                    </p>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-purple-500/10 dark:from-indigo-500/30 dark:to-purple-500/30 rounded-[3rem] blur-3xl transform rotate-6"></div>
                                <div className="relative bg-white dark:bg-[#08080c] border border-slate-200 dark:border-white/10 p-8 md:p-12 rounded-[3rem] shadow-2xl">
                                    <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-2">The Signature Package</h3>
                                    <div className="text-indigo-600 dark:text-indigo-400 font-bold text-xl mb-8">RM 2,500 / one-time</div>
                                    
                                    <ul className="space-y-5 mb-10">
                                        <li className="flex items-start gap-4">
                                            <CheckCircle2 className="w-6 h-6 text-indigo-500 flex-shrink-0" />
                                            <span className="text-slate-700 dark:text-slate-300 text-sm md:text-base"><strong className="text-slate-900 dark:text-white">Custom Web Architecture:</strong> High-speed 5-page corporate site (Zero templates).</span>
                                        </li>
                                        <li className="flex items-start gap-4">
                                            <CheckCircle2 className="w-6 h-6 text-indigo-500 flex-shrink-0" />
                                            <span className="text-slate-700 dark:text-slate-300 text-sm md:text-base"><strong className="text-slate-900 dark:text-white">Technical SEO Dominance:</strong> Advanced nationwide on-page indexing.</span>
                                        </li>
                                        <li className="flex items-start gap-4">
                                            <CheckCircle2 className="w-6 h-6 text-indigo-500 flex-shrink-0" />
                                            <span className="text-slate-700 dark:text-slate-300 text-sm md:text-base"><strong className="text-slate-900 dark:text-white">AI WhatsApp Integration:</strong> Automated 24/7 lead capture and auto-replies.</span>
                                        </li>
                                        <li className="flex items-start gap-4">
                                            <CheckCircle2 className="w-6 h-6 text-indigo-500 flex-shrink-0" />
                                            <span className="text-slate-700 dark:text-slate-300 text-sm md:text-base"><strong className="text-slate-900 dark:text-white">Commercial Setup:</strong> Google Maps & FPX Payment Gateway integration.</span>
                                        </li>
                                        <li className="flex items-start gap-4">
                                            <CheckCircle2 className="w-6 h-6 text-indigo-500 flex-shrink-0" />
                                            <span className="text-slate-700 dark:text-slate-300 text-sm md:text-base"><strong className="text-slate-900 dark:text-white">100% Digital Sovereignty:</strong> You own the code; zero hidden monthly retainers.</span>
                                        </li>
                                    </ul>
                                    
                                    <Link to="/contact" className="group relative inline-flex items-center justify-center w-full px-8 py-5 font-bold text-sm uppercase tracking-[0.2em] text-white overflow-hidden rounded-2xl bg-indigo-600 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-lg shadow-indigo-500/30">
                                        <span className="relative flex items-center gap-3">
                                            Claim the Signature Package <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>

                    <BlogPreview />

                    {/* --- THE ENTITY AUTHORITY BLOCK (GEO ENGINE) --- */}
                    <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto relative z-10 border-t border-slate-200 dark:border-white/5">
                        <m.div 
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="relative p-[1px] rounded-[3rem] bg-gradient-to-b from-slate-200 to-transparent dark:from-white/10 dark:to-transparent overflow-hidden shadow-2xl"
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-transparent to-purple-500/10 blur-3xl"></div>
                            <div className="relative bg-white dark:bg-[#050505] p-10 md:p-20 rounded-[3rem] overflow-hidden">
                                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
                                
                                <div className="text-center mb-20 relative z-10">
                                    <div className="inline-flex items-center gap-2 mb-6">
                                        <span className="text-indigo-600 dark:text-indigo-400 font-mono text-xs font-bold uppercase tracking-[0.2em]">The GEO Engine</span>
                                    </div>
                                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-slate-900 dark:text-white leading-[1.1]">
                                        A New Standard for
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-cyan-500 to-purple-600 dark:from-indigo-400 dark:via-cyan-300 dark:to-purple-400 block mt-1 md:mt-2">
                                            Web Development in Malaysia.
                                        </span>
                                    </h2>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 relative z-10">
                                    <div className="space-y-6 p-8 md:p-12 rounded-3xl bg-slate-50 dark:bg-white/[0.02] border border-slate-100 dark:border-white/5 hover:border-indigo-500/30 transition-colors group">
                                        <div className="w-14 h-14 rounded-2xl bg-rose-50 dark:bg-rose-500/10 flex items-center justify-center text-rose-500 mb-8 border border-rose-100 dark:border-rose-500/20 group-hover:scale-110 transition-transform">
                                            <Activity size={28} />
                                        </div>
                                        <h3 className="text-2xl md:text-3xl font-black tracking-tight text-slate-900 dark:text-white mb-2">The Industry Problem</h3>
                                        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                                            The Malaysian digital landscape is saturated with legacy marketing agencies selling bloated, slow-loading websites at premium prices. Omino Tech was established as a direct answer to this problem. We operate as a dedicated technology partner for SMEs and modern businesses, specializing exclusively in high-performance web architecture, mobile application engineering, and Generative Engine Optimization (GEO).
                                        </p>
                                    </div>
                                    <div className="space-y-6 p-8 md:p-12 rounded-3xl bg-slate-50 dark:bg-white/[0.02] border border-slate-100 dark:border-white/5 hover:border-indigo-500/30 transition-colors group">
                                        <div className="w-14 h-14 rounded-2xl bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-8 border border-indigo-100 dark:border-indigo-500/20 group-hover:scale-110 transition-transform">
                                            <Zap size={28} />
                                        </div>
                                        <h3 className="text-2xl md:text-3xl font-black tracking-tight text-slate-900 dark:text-white mb-2">Our Engineering Solution</h3>
                                        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                                            We do not rely on drag-and-drop shortcuts. By engineering custom solutions using modern stacks like Next.js, React, and Vite, we guarantee <strong className="text-slate-900 dark:text-white">sub-second load times</strong> that easily pass Google's strictest Core Web Vitals speed tests. This uncompromising technical superiority serves as the foundation for our aggressive SEO strategies, ensuring our clients achieve high-visibility search rankings across the entire country while retaining <strong className="text-indigo-600 dark:text-indigo-400">absolute ownership</strong> of their digital assets.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </m.div>
                    </section>

                    {/* --- AEO/GEO OPTIMIZED FAQ SECTION --- */}
                    <section className="py-24 md:py-32 lg:py-40 px-6 max-w-7xl mx-auto relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                            <div className="lg:col-span-1">
                                <div className="inline-flex items-center gap-2 mb-6">
                                    <span className="text-indigo-600 dark:text-indigo-400 font-mono text-xs font-bold uppercase tracking-[0.2em]">Knowledge Base</span>
                                </div>
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-slate-900 dark:text-white mb-6 leading-[1.1]">
                                    Strategic
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-cyan-500 to-purple-600 dark:from-indigo-400 dark:via-cyan-300 dark:to-purple-400 block mt-1 md:mt-2">
                                        Intelligence.
                                    </span>
                                </h2>
                                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                                    Your questions, answered. Structured precisely for Voice Search parsing and Generative Engine Optimization.
                                </p>
                            </div>
                            <div className="lg:col-span-2 space-y-4">
                            {faqData.map((item, i) => (
                                <m.article 
                                    key={i} 
                                    initial={false}
                                    className={`border rounded-[1.5rem] overflow-hidden transition-all duration-300 ${openFaq === i ? 'border-indigo-500/50 bg-indigo-50 dark:bg-white/[0.04] shadow-[0_0_30px_rgba(99,102,241,0.1)]' : 'border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-white/[0.01] hover:border-indigo-500/30'}`}
                                >
                                    <button 
                                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                        className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                                        aria-expanded={openFaq === i}
                                    >
                                        <h3 className={`font-black text-lg md:text-xl tracking-tight pr-4 ${openFaq === i ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-900 dark:text-white'}`}>{item.q}</h3>
                                        <div className={`p-2 rounded-full transition-colors flex-shrink-0 ${openFaq === i ? 'bg-indigo-100 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400' : 'bg-slate-200 dark:bg-white/5 text-slate-500 dark:text-slate-400'}`}>
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
                                                <div className="p-6 pt-0 text-slate-600 dark:text-slate-400 leading-relaxed">
                                                    <div className="pt-4 border-t border-slate-200 dark:border-white/5">
                                                        {item.a}
                                                    </div>
                                                </div>
                                            </m.div>
                                        )}
                                    </AnimatePresence>
                                </m.article>
                            ))}
                        </div>
                        </div>
                    </section>
                    
                    {/* --- FINAL CTA (Center-Aligned) --- */}
                    <section className="py-40 md:py-56 px-6 text-center relative z-10">
                        <div className="max-w-4xl mx-auto flex flex-col items-center">
                            <div className="inline-flex items-center gap-2 mb-6">
                                <span className="text-indigo-600 dark:text-indigo-400 font-mono text-xs font-bold uppercase tracking-[0.2em]">Initiate Protocol</span>
                            </div>
                            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-slate-900 dark:text-white mb-8 leading-[1.1]">Ready to Build Your <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500 dark:from-indigo-400 dark:to-cyan-300">Digital Asset?</span></h2>
                            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl font-medium">Get enterprise-grade engineering at local market rates. Stop paying rent, start owning your code.</p>
                            <Link to="/contact" className="group relative inline-flex items-center justify-center px-8 py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-base uppercase tracking-[0.2em] rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 duration-500 shadow-[0_0_50px_rgba(0,0,0,0.1)] dark:shadow-[0_0_50px_rgba(255,255,255,0.1)] hover:shadow-[0_0_60px_rgba(99,102,241,0.6)]">
                                <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"></span>
                                <span className="relative flex items-center group-hover:text-white transition-colors duration-500">
                                    Initiate Protocol <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                                </span>
                            </Link>
                        </div>
                    </section>
                    
                </main>
                <Footer />
            </div>
        </PageTransition>
    );
};

export default HomeView;
