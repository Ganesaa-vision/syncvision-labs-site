import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation } from 'react-router-dom';
import { Smartphone, Cpu, Database, Cloud, ChevronDown, ChevronUp, Zap, CheckCircle2, Lock, Rocket, ShieldCheck } from 'lucide-react';
import { PageTransition } from '../PageTransition';
import PricingSection from '../components/PricingSection';
import Footer from '../components/Footer';
import { m, LazyMotion, domAnimation, AnimatePresence } from 'framer-motion';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { IMAGES } from '../images';

const AppEngineeringView: React.FC = () => {
  const { pathname } = useLocation();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
    <PageTransition>
    <LazyMotion features={domAnimation}>
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] text-slate-900 dark:text-slate-200 font-sans transition-colors duration-300 flex flex-col">
      <Helmet>
        <title>Affordable App Development & MVP Agency in Malaysia | Omino Tech</title>
        <meta name="description" content="Stop overpaying for mobile apps. Omino Tech builds high-performance map apps, AI utilities, and startup MVPs in Malaysia starting at just RM 500. iOS & Android included." />
        <meta name="keywords" content="Mobile App Developer Malaysia, MVP Development Malaysia, Flutter App Agency, App Developer for Startups, iOS Android Development Selangor" />
        <link rel="canonical" href="https://www.ominotech.com.my/services/app-engineering" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ominotech.com.my/services/app-engineering" />
        <meta property="og:title" content="Affordable App Development & MVP Agency in Malaysia | Omino Tech" />
        <meta property="og:description" content="Stop overpaying for mobile apps. Omino Tech builds high-performance map apps, AI utilities, and startup MVPs in Malaysia starting at just RM 500. iOS & Android included." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.ominotech.com.my/services/app-engineering" />
        <meta name="twitter:title" content="Affordable App Development & MVP Agency in Malaysia | Omino Tech" />
        <meta name="twitter:description" content="Stop overpaying for mobile apps. Omino Tech builds high-performance map apps, AI utilities, and startup MVPs in Malaysia starting at just RM 500. iOS & Android included." />
        <meta name="twitter:image" content={IMAGES.GLOBAL.OG_IMAGE} />
        <meta property="og:image" content={IMAGES.GLOBAL.OG_IMAGE} />
        <meta property="og:image:alt" content="Omino Tech Digital Growth Engine - Custom Web Development and SEO Services Malaysia" />
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
        <m.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: "easeOut" }} 
          className="mb-24 relative"
        >
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
        </m.div>

        {/* === THE PROOF SECTION === */}
        <m.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-32 relative group"
        >
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
        </m.div>

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
                    <div key={i} className="group relative min-h-[600px] rounded-[2.5rem] overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl cursor-default bg-slate-100 dark:bg-slate-900">
                        <img 
                            src={item.image} 
                            alt={`${item.title} - Custom Flutter App Development Malaysia`}
                            className="absolute inset-0 w-full h-full object-contain transform-gpu transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                            loading="lazy"
                            decoding="async"
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

        {/* === STRATEGIC LIFECYCLE (ALTERNATING LAYOUT) === */}
        <div className="mb-32">
            <div className="text-center mb-24">
                <span className="font-mono text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-[0.4em] mb-6 block">Beyond the Code</span>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-slate-900 dark:text-white mb-6 leading-[1.1]">
                    End-to-End <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">App Lifecycle.</span>
                </h2>
                <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
                    We don't just hand over a zipped file and disappear. We are your long-term technical partners, handling everything from architecture to app store deployment.
                </p>
            </div>

            <div className="space-y-32">
                {/* Block 1: Image Left, Text Right */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <m.div 
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 group aspect-[4/3] md:aspect-[3/2] lg:aspect-auto lg:h-[500px]"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
                        <img src={IMAGES.WEB_ARCHITECTURE.PORTFOLIO_HEALTHCARE} alt="Scalable cloud architecture and mobile app engineering for local Malaysian startups." className="absolute inset-0 w-full h-full object-cover transform-gpu group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                    </m.div>
                    <m.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    >
                        <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-8 border border-blue-100 dark:border-blue-500/20 shadow-sm">
                            <Cloud size={24} />
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">Scalable Cloud Architecture</h3>
                        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                            An app is only as good as its backend. We architect robust, serverless infrastructures using Supabase and Firebase. This ensures your application syncs in real-time, authenticates users securely, and scales effortlessly from 10 to 10,000 users without breaking a sweat.
                        </p>
                        <ul className="space-y-4">
                            {['Real-Time Database Sync', 'Secure User Authentication', 'Automated Daily Backups'].map((feat, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-bold text-sm bg-slate-50 dark:bg-slate-900/50 w-fit px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-800">
                                    <CheckCircle2 className="w-4 h-4 text-blue-500" /> {feat}
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
                        <div className="w-14 h-14 rounded-2xl bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-8 border border-indigo-100 dark:border-indigo-500/20 shadow-sm">
                            <ShieldCheck size={24} />
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">Proactive DevOps & Maintenance</h3>
                        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                            Launching the app is just day one. iOS and Android updates happen constantly, often breaking older apps. Our dedicated maintenance team monitors crash analytics, pushes security patches, and handles App Store and Google Play compliance so your app remains live and fast.
                        </p>
                        <ul className="space-y-4">
                            {['OS Compatibility Updates', 'Crash Analytics & Monitoring', 'App Store Policy Compliance'].map((feat, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-bold text-sm bg-slate-50 dark:bg-slate-900/50 w-fit px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-800">
                                    <CheckCircle2 className="w-4 h-4 text-indigo-500" /> {feat}
                                </li>
                            ))}
                        </ul>
                    </m.div>
                    <m.div 
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 group aspect-[4/3] md:aspect-[3/2] lg:aspect-auto lg:h-[500px] order-1 lg:order-2"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tl from-indigo-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
                        <img src={IMAGES.WEB_ARCHITECTURE.PORTFOLIO_ECOMMERCE} alt="Proactive mobile app maintenance, DevOps, and deployment for iOS and Android." className="absolute inset-0 w-full h-full object-cover transform-gpu group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                    </m.div>
                </div>
            </div>
        </div>

        <PricingSection 
          serviceName="App Engineering"
          title="Quick-Start Validation Packages"
          description="Launch fast. Validate quickly. Scale efficiently."
          plans={[
            {
              name: "The Concept MVP",
              price: "RM 599",
              period: "/ one-time",
              description: "The perfect rapid-deployment package for pre-seed startups to demonstrate their concept without breaking the bank.",
              features: ["1 to 3 Core Screens", "Basic API Integration", "Local Data Storage", "iOS & Android Support", "~1 Week Delivery"],
              buttonText: "Start Your Custom App MVP",
              customButton: (
                <WhatsAppButton 
                  serviceName="App Development"
                  packageLabel="The Concept MVP"
                  buttonText="Start Your Custom App MVP"
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
              buttonText: "Build Your AI Utility App",
              customButton: (
                <WhatsAppButton 
                  serviceName="App Development"
                  packageLabel="The AI & Utility App"
                  buttonText="Build Your AI Utility App"
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
              buttonText: "Map Out Your Custom App Logic",
              customButton: (
                <WhatsAppButton 
                  serviceName="App Development"
                  packageLabel="Advanced Custom Application"
                  buttonText="Map Out Your Custom App Logic"
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
        <m.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Ready to Build? Let’s Talk Logic.</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">Stop waiting on massive agency proposals. Tell us what you need to build, and let's get started on the codebase this week.</p>
          <WhatsAppButton 
            serviceName="App Engineering Inquiry"
            buttonText="Get Your App Engineering Quote Today"
            className="inline-flex items-center gap-3 bg-indigo-600 text-white px-8 py-4 rounded-full font-bold hover:bg-indigo-500 transition-all shadow-xl shadow-indigo-500/30"
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

export default AppEngineeringView;