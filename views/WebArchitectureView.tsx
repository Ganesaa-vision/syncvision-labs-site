import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation } from 'react-router-dom';
import { Globe, Code2, ShoppingBag, ShieldCheck, Server, ArrowRight, CheckCircle2, Zap, Layout, Smartphone, Lock, Database, PenTool, Gauge } from 'lucide-react';
import PricingSection from '../components/PricingSection';

const WebArchitectureView: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0a0a0a] text-slate-900 dark:text-slate-200 font-sans selection:bg-indigo-500/30 transition-colors duration-300">
      <Helmet>
        <title>Web Development | Custom Code & WordPress - SyncVision Labs</title>
        <meta name="description" content="Choose between rapid WordPress deployment or high-performance Custom Next.js Engineering. We build digital assets that you own 100%." />
        <meta name="keywords" content="Web Design Malaysia, Custom Website Development, Next.js Developer, WordPress Elementor, E-commerce Malaysia, FPX Payment Integration, Server Management" />
      </Helmet>

      <div className="pt-24 md:pt-32 pb-12 md:pb-20 px-6 max-w-7xl mx-auto">
        {/* HERO */}
        <div className="mb-24">
          <span className="font-mono text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Digital Assets</span>
          <h1 className="text-4xl md:text-7xl font-bold tracking-tighter text-slate-900 dark:text-white mb-8">
            WEB <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">DEVELOPMENT.</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
            We don't just "design" websites. We engineer digital platforms. From proprietary 
            <span className="text-slate-900 dark:text-white font-bold"> React/Next.js</span> web apps to rapid 
            <span className="text-slate-900 dark:text-white font-bold"> WordPress</span> deployments, we build systems that scale with your business.
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { title: "Industrial Manufacturing", desc: "B2B Catalog & Inquiry System", color: "bg-blue-50 dark:bg-blue-500/10 border-blue-200 dark:border-blue-500/20" },
                    { title: "Medical Tech", desc: "Clinic Management Dashboard", color: "bg-emerald-50 dark:bg-emerald-500/10 border-emerald-200 dark:border-emerald-500/20" },
                    { title: "Luxury Retail", desc: "High-Performance E-Commerce", color: "bg-purple-50 dark:bg-purple-500/10 border-purple-200 dark:border-purple-500/20" }
                ].map((item, i) => (
                    <div key={i} className={`aspect-video rounded-2xl border ${item.color} p-8 flex flex-col justify-end hover:scale-[1.02] transition-transform cursor-default shadow-sm dark:shadow-none`}>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{item.title}</h3>
                        <p className="text-slate-600 dark:text-slate-400 text-sm">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* PRICING */}
        <PricingSection 
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
              buttonText: "Start WordPress"
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
              buttonText: "Go Full Code"
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
                        <Link to="/contact" className="inline-block bg-yellow-500 text-black px-8 py-3 rounded-xl font-bold hover:bg-yellow-400 transition-colors">
                            Add to Package
                        </Link>
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

        {/* CTA */}
        <div className="text-center">
          <Link to="/contact" className="inline-flex items-center gap-3 bg-indigo-600 text-white px-8 py-4 rounded-full font-bold hover:bg-indigo-500 transition-all">
            Start Your Build <ArrowRight size={18} />
          </Link>
        </div>

      </div>
    </div>
  );
};

export default WebArchitectureView;