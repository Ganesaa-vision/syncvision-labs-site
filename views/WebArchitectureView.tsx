import React, { useLayoutEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation } from 'react-router-dom';
import { Globe, Code2, ShoppingBag, ShieldCheck, Server, ArrowRight, CheckCircle2, Zap, Layout, Smartphone, Lock, Database, PenTool, Gauge, ChevronDown, ChevronUp } from 'lucide-react';
import PricingSection from '../components/PricingSection';
import Footer from '../components/Footer';
import { m, LazyMotion, domAnimation, AnimatePresence } from 'framer-motion';
import { WhatsAppButton } from '../components/WhatsAppButton';

const WebArchitectureView: React.FC = () => {
  const { pathname } = useLocation();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why is website loading speed important for SEO?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Search engines prioritize sites that load in under 2 seconds. We use custom React/Next.js architectures to eliminate code bloat."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to build a custom React app?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For a standard enterprise application, our timeline is typically 4-6 weeks. This includes architectural planning, development, and rigorous testing phases."
        }
      },
      {
        "@type": "Question",
        "name": "Do you optimize WordPress sites for speed?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We strip bloatware, implement server-side caching (Redis/Varnish), and optimize database queries to ensure sub-2-second load times even for Elementor sites."
        }
      },
      {
        "@type": "Question",
        "name": "Can you integrate custom payment gateways?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. We write custom PHP logic to integrate local gateways like ToyyibPay, Billplz, and FPX directly into your checkout flow without relying on heavy plugins."
        }
      }
    ]
  };

  return (
    <LazyMotion features={domAnimation}>
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-[#0a0a0a] text-slate-900 dark:text-slate-200 font-sans selection:bg-indigo-500/30 transition-colors duration-300">
      <Helmet>
        <title>Custom Web Development Agency Malaysia | High-Speed Design - Omino Tech</title>
        <meta name="description" content="Need a fast-loading website? Omino Tech is a top web development company in Malaysia specializing in custom Next.js and Enterprise WordPress design." />
        <meta name="keywords" content="Web Design Malaysia, Custom Web Development Selangor, Next.js Developer Malaysia, WordPress Speed Optimization, Enterprise Web Architecture, E-commerce website developer Malaysia, WordPress website redesign services" />
        <meta property="og:image" content="https://www.ominotech.com.my/logo.png" />
        <link rel="icon" href="https://www.ominotech.com.my/favicon.ico" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </Helmet>

      <div className="pt-24 md:pt-32 pb-12 md:pb-20 px-6 max-w-7xl mx-auto flex-grow w-full">
        {/* HERO */}
        <div className="mb-24">
          <span className="font-mono text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Selangor Digital Infrastructure</span>
          <h1 className="text-4xl md:text-7xl font-bold tracking-tighter text-slate-900 dark:text-white mb-8 leading-tight">
            Custom Website Development & <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">High-Speed Design in Malaysia</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
            We don't just "design" websites; we engineer digital foundations. As one of the <strong>best web developers in Selangor</strong>, we specialize in proprietary 
            <span className="text-slate-900 dark:text-white font-bold"> React/Next.js</span> web apps and rapid 
            <span className="text-slate-900 dark:text-white font-bold"> WordPress website redesign services</span> that scale with your business.
          </p>
        </div>

        {/* === THE PROOF SECTION === */}
        <div className="mb-32 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-[2.5rem] opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-1000"></div>
            <div className="relative bg-white dark:bg-[#0f0f0f] border border-slate-200 dark:border-white/10 rounded-[2rem] p-8 md:p-20 overflow-hidden shadow-xl dark:shadow-none">
                <div className="absolute top-0 right-0 p-20 opacity-[0.03] text-indigo-500 pointer-events-none">
                    <Gauge size={400} />
                </div>
                
                <div className="relative z-10">
                    <span className="text-emerald-400 font-mono text-xs font-black uppercase tracking-[0.3em] mb-6 block">Live Demonstration</span>
                    
                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tighter mb-10 uppercase leading-none">
                        This Website Is <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">The Proof.</span>
                    </h2>

                    <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl leading-relaxed max-w-4xl font-medium">
                        You are experiencing the speed of a custom-engineered Next.js application right now. 
                        Zero load times. Fluid transitions. Top-notch design. 
                        This is the standard we build for you.
                    </p>

                    <div className="mt-12 flex flex-wrap gap-6">
                        <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-mono text-sm">
                            <Zap className="text-yellow-400" size={18} /> 0.1s Latency
                        </div>
                        <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-mono text-sm">
                            <CheckCircle2 className="text-emerald-400" size={18} /> 100/100 Performance
                        </div>
                        <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-mono text-sm">
                            <Lock className="text-indigo-400" size={18} /> Enterprise Security
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* === PORTFOLIO PREVIEW === */}
        <div className="mb-32">
            <div className="flex items-center justify-between mb-12">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Recent Deployments</h2>
                <Link to="/work" className="text-indigo-600 dark:text-indigo-400 hover:text-slate-900 dark:hover:text-white transition-colors text-sm font-mono uppercase tracking-widest flex items-center gap-2">
                    View Full Portfolio <ArrowRight size={16} />
                </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                    { title: "Allied Group", desc: "WooCommerce Catalog with Multi-SKU Variants", color: "bg-blue-50 dark:bg-blue-500/10 border-blue-200 dark:border-blue-500/20" },
                    { title: "MediMy Clinic", desc: "Clinic Management Dashboard", color: "bg-emerald-50 dark:bg-emerald-500/10 border-emerald-200 dark:border-emerald-500/20" }
                ].map((item, i) => (
                    <div key={i} className={`aspect-video rounded-2xl border ${item.color} p-8 flex flex-col justify-end hover:scale-[1.02] transition-transform cursor-default shadow-sm dark:shadow-none`}>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{item.title}</h3>
                        <p className="text-slate-600 dark:text-slate-400 text-sm">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* === SEMANTIC DEPTH: ARCHITECTURAL PHILOSOPHY === */}
        <div className="mb-32">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Our Architectural Philosophy</h2>
                <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                    We move beyond basic templates. Here is how we engineer performance that sets the standard for every <strong>E-commerce website developer Malaysia</strong> has to offer.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="p-8 bg-slate-100 dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                        <Database className="text-indigo-500" /> Custom Backend Logic
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                        For complex requirements, we write custom PHP or Node.js middleware. Whether it's calculating dynamic shipping rates for East Malaysia or syncing inventory with your local POS system in Selangor, we build the logic from scratch to ensure accuracy and security. This ensures sub-2-second load times on Enterprise WordPress or custom PHP builds.
                    </p>
                </div>
                <div className="p-8 bg-slate-100 dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                        <Zap className="text-yellow-500" /> Elementor Optimization
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                        We love Elementor, but it can be heavy. We mitigate this by stripping unused CSS/JS assets, implementing critical CSS extraction, and using server-level caching (Redis) to achieve sub-2-second load times, satisfying Google's Core Web Vitals.
                    </p>
                </div>
            </div>
        </div>

        {/* PRICING */}
        <PricingSection 
          serviceName="Web Architecture"
          title="Development Packages"
          description="Choose your engine. Rapid deployment or custom engineering."
          plans={[
            {
              name: "The Smart Editor",
              price: "RM 1,299",
              period: "/ one-time",
              description: "The \"Do-It-Yourself\" Friendly Option. We build a custom-branded foundation, then hand you the keys.",
              features: [
                  "5 Custom Pages (Home, About, etc.)",
                  "Elementor Pro Included (Worth RM 250)",
                  "Mobile Perfect Design",
                  "Google SEO Ready",
                  "WhatsApp Click-to-Chat",
                  "Zero-Lock In (You own it)",
                  "15-Min Video Training Guide"
              ],
              buttonText: "Start WordPress",
              customButton: (
                <WhatsAppButton 
                  serviceName="Web Development"
                  packageLabel="The Smart Editor"
                  buttonText="Start WordPress"
                  className="w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700"
                />
              )
            },
            {
              name: "The Innovator Stack",
              price: "RM 4,500",
              period: "/ one-time",
              description: "The \"Tesla\" of Websites. Pure Speed & Power. Coded from scratch using Next.js.",
              features: [
                  "100% Custom Code (No Themes)",
                  "Instant Load Time (< 0.8s)",
                  "Hacker-Proof Security",
                  "Interactive UI & Animations",
                  "PWA Ready (Installable)",
                  "Scalable to 1M+ Visitors",
                  "Requires 'Tech Partner' Plan"
              ],
              isPopular: true,
              buttonText: "Go Full Code",
              customButton: (
                <WhatsAppButton 
                  serviceName="Web Development"
                  packageLabel="The Innovator Stack"
                  buttonText="Go Full Code"
                  className="w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-500/30"
                />
              )
            }
          ]}
        />

        {/* === E-COMMERCE UPGRADE === */}
        <div className="mb-32">
            <div className="p-10 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border border-yellow-500/20 rounded-[2.5rem] relative overflow-hidden">
                <div className="absolute top-0 right-0 p-12 opacity-10 text-yellow-500"><ShoppingBag size={200} /></div>
                <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-yellow-500/30 bg-yellow-100 dark:bg-yellow-900/10 text-yellow-600 dark:text-yellow-400 text-xs font-mono mb-6">
                            <Zap className="w-3 h-3" /> UPGRADE OPTION
                        </div>
                        <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">"The Digital Store" Add-on</h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                            Turn your website into a 24/7 sales machine. Don't just display products, sell them.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {['FPX / Stripe Gateway', '20 Product Upload', 'Inventory System', 'Order Dashboard', 'SSL & Firewall'].map((feat, i) => (
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
        </div>

        {/* === MAINTENANCE PLANS === */}
        <div className="mb-32">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">Maintenance & Insurance</h2>
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
                    <p className="text-slate-500 text-sm mb-6">Essential for WordPress sites.</p>
                    <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                        <li className="flex gap-3"><CheckCircle2 className="w-4 h-4 text-slate-500" /> High-speed Cloud Hosting</li>
                        <li className="flex gap-3"><CheckCircle2 className="w-4 h-4 text-slate-500" /> SSL Certificate</li>
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
                    <p className="text-slate-500 text-sm mb-6">Required for Full Stack Apps.</p>
                    <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                        <li className="flex gap-3"><CheckCircle2 className="w-4 h-4 text-indigo-500" /> Server Management (AWS/Vercel)</li>
                        <li className="flex gap-3"><CheckCircle2 className="w-4 h-4 text-indigo-500" /> Code Updates & Bug Fixes</li>
                        <li className="flex gap-3"><CheckCircle2 className="w-4 h-4 text-indigo-500" /> 2 Hours Content Updates</li>
                        <li className="flex gap-3"><CheckCircle2 className="w-4 h-4 text-indigo-500" /> Priority WhatsApp Support</li>
                    </ul>
                </div>
            </div>
        </div>

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

        {/* CTA */}
        <div className="text-center">
          <WhatsAppButton 
            serviceName="Custom Web Architecture"
            buttonText="Start Your Build"
            className="inline-flex items-center gap-3 bg-indigo-600 text-white px-8 py-4 rounded-full font-bold hover:bg-indigo-500 transition-all shadow-xl shadow-indigo-500/30"
            showIcon={true}
          />
        </div>
      </div>
      <Footer />
    </div>
    </LazyMotion>
  );
};

export default WebArchitectureView;