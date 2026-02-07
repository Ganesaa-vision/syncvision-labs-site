import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation } from 'react-router-dom';
import { TrendingUp, MapPin, Search, BarChart, ArrowRight, FileText, Trophy, Target, Bot, Cpu, CheckCircle2 } from 'lucide-react';
import PricingSection from '../components/PricingSection';
import { motion } from 'framer-motion';

const SeoServiceView: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-slate-200 font-sans selection:bg-emerald-500/30 relative overflow-hidden">
      <Helmet>
        <title>SEO Services | Rank #1 in Malaysia - SyncVision Labs</title>
        <meta name="description" content="Affordable SEO Packages in Malaysia. From Local SEO (RM 399) to National Dominance. We optimize Google Maps, fix technical errors, and write content that ranks." />
        <meta name="keywords" content="SEO Malaysia Price, Local SEO Package, Google Maps Ranking, SEO Audit Malaysia, Backlink Service" />
      </Helmet>

      {/* Background Ambient Glow */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 pt-24 md:pt-32 pb-12 md:pb-20 px-6 max-w-7xl mx-auto">
        
        {/* HERO SECTION */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <span className="font-mono text-emerald-400 text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Search Dominance</span>
          <h1 className="text-4xl md:text-7xl font-bold tracking-tighter text-white mb-6">
            RANK <span className="text-emerald-500">#1.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            We don't just target keywords; we target <strong>Intent</strong>. We optimize your digital presence for the three engines that matter: Google Search, Google Maps, and AI Answer Engines (ChatGPT/Gemini).
          </p>
        </motion.div>

        {/* === NEW: ACHIEVEMENTS SECTION === */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-32 relative"
        >
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none"></div>
            
            <div className="relative bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-[3rem] p-8 md:p-16 overflow-hidden shadow-2xl">
                {/* Decorative Grid Background */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                <div className="absolute inset-0 bg-grid-white/[0.02]"></div>

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-black uppercase tracking-widest mb-8">
                            <Trophy size={14} /> Verified Case Study
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-[0.9] tracking-tighter">
                            DOMINANCE <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">PROTOCOL.</span>
                        </h2>
                        <p className="text-slate-400 text-lg leading-relaxed mb-10 border-l-4 border-emerald-500/50 pl-6">
                            Target: <strong>Pre-Insulated Pipe Manufacturer</strong>.<br/>
                            Objective: Total Search Monopoly.<br/>
                            Result: <span className="text-white font-bold">Rank #1 in 17 Days.</span>
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-6 bg-black/40 rounded-2xl border border-white/5">
                                <div className="text-3xl font-black text-white mb-1">#1</div>
                                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Google Rank</div>
                            </div>
                            <div className="p-6 bg-black/40 rounded-2xl border border-white/5">
                                <div className="text-3xl font-black text-emerald-400 mb-1">17</div>
                                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Days to Rank</div>
                            </div>
                            <div className="p-6 bg-black/40 rounded-2xl border border-white/5">
                                <div className="text-3xl font-black text-purple-400 mb-1">AI</div>
                                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Gemini Preferred</div>
                            </div>
                            <div className="p-6 bg-black/40 rounded-2xl border border-white/5">
                                <div className="text-3xl font-black text-blue-400 mb-1">10+</div>
                                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Keywords Ranked</div>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        {/* Abstract Visual Representation of Ranking */}
                        <div className="relative z-10 bg-slate-950 border border-slate-800 rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                            <div className="flex items-center gap-4 mb-8 border-b border-slate-800 pb-6">
                                <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                                    <Target size={24} />
                                </div>
                                <div>
                                    <div className="text-xs font-bold uppercase tracking-widest text-slate-500">Keyword Target</div>
                                    <div className="text-white font-mono font-bold">"Pre Insulated Pipe"</div>
                                </div>
                            </div>
                            
                            <div className="space-y-4">
                                {/* Rank 1 */}
                                <div className="flex items-center gap-4 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
                                    <div className="text-emerald-400 font-black text-xl">01</div>
                                    <div className="flex-1">
                                        <div className="h-2 w-24 bg-emerald-500/40 rounded-full mb-2"></div>
                                        <div className="h-2 w-16 bg-emerald-500/20 rounded-full"></div>
                                    </div>
                                    <CheckCircle2 size={16} className="text-emerald-500" />
                                </div>
                                {/* Rank 2 */}
                                <div className="flex items-center gap-4 p-4 bg-slate-900 border border-slate-800 rounded-xl opacity-50">
                                    <div className="text-slate-600 font-black text-xl">02</div>
                                    <div className="flex-1">
                                        <div className="h-2 w-20 bg-slate-700 rounded-full mb-2"></div>
                                        <div className="h-2 w-12 bg-slate-800 rounded-full"></div>
                                    </div>
                                </div>
                                {/* Rank 3 */}
                                <div className="flex items-center gap-4 p-4 bg-slate-900 border border-slate-800 rounded-xl opacity-50">
                                    <div className="text-slate-600 font-black text-xl">03</div>
                                    <div className="flex-1">
                                        <div className="h-2 w-20 bg-slate-700 rounded-full mb-2"></div>
                                        <div className="h-2 w-12 bg-slate-800 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Floating Badge */}
                        <div className="absolute -top-6 -right-6 bg-white text-black px-6 py-3 rounded-xl font-black text-xs uppercase tracking-widest shadow-xl transform -rotate-6 z-20">
                            Verified Result
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>

        {/* === NEW: TRI-ENGINE EXPLANATION === */}
        <div className="mb-40">
            <div className="text-center mb-16">
                <span className="font-mono text-indigo-400 text-xs font-black uppercase tracking-[0.4em] mb-4 block">The Strategy</span>
                <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter">
                    TRI-ENGINE <span className="text-slate-600">OPTIMIZATION.</span>
                </h2>
                <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                    We don't just optimize for keywords. We optimize for the entire digital ecosystem.
                </p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            >
                {/* SEO Card */}
                <div className="group relative bg-slate-900 border border-white/5 rounded-[2.5rem] p-10 hover:bg-blue-950/10 hover:border-blue-500/30 transition-all duration-500">
                    <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500">
                        <Search className="w-8 h-8 text-blue-400" />
                    </div>
                    <h3 className="text-3xl font-black text-white mb-2">SEO</h3>
                    <div className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-6">Search Engine Optimization</div>
                    <p className="text-slate-400 leading-relaxed mb-10 min-h-[80px]">
                        Dominate the "10 Blue Links". We fix technical debt and build authority so Google trusts your site above all others.
                    </p>
                    <div className="space-y-4 border-t border-white/5 pt-8">
                        <div className="flex items-center gap-3 text-sm text-slate-300">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> Technical Audits
                        </div>
                        <div className="flex items-center gap-3 text-sm text-slate-300">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> Backlink Strategy
                        </div>
                    </div>
                </div>

                {/* AEO Card */}
                <div className="group relative bg-slate-900 border border-white/5 rounded-[2.5rem] p-10 hover:bg-purple-950/10 hover:border-purple-500/30 transition-all duration-500 lg:-translate-y-8 shadow-2xl shadow-purple-900/10">
                    <div className="absolute top-0 right-0 bg-purple-500/20 text-purple-300 text-[10px] font-bold px-4 py-2 rounded-bl-2xl rounded-tr-[2.5rem] uppercase tracking-widest">Voice Ready</div>
                    <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500">
                        <Bot className="w-8 h-8 text-purple-400" />
                    </div>
                    <h3 className="text-3xl font-black text-white mb-2">AEO</h3>
                    <div className="text-xs font-bold text-purple-400 uppercase tracking-widest mb-6">Answer Engine Optimization</div>
                    <p className="text-slate-400 leading-relaxed mb-10 min-h-[80px]">
                        Capture the "Zero-Click" result. We structure your content so Siri, Alexa, and Google Assistant read <em>your</em> answer aloud.
                    </p>
                    <div className="space-y-4 border-t border-white/5 pt-8">
                        <div className="flex items-center gap-3 text-sm text-slate-300">
                            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div> Schema Markup
                        </div>
                        <div className="flex items-center gap-3 text-sm text-slate-300">
                            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div> NLP Optimization
                        </div>
                    </div>
                </div>

                {/* GEO Card */}
                <div className="group relative bg-slate-900 border border-white/5 rounded-[2.5rem] p-10 hover:bg-emerald-950/10 hover:border-emerald-500/30 transition-all duration-500">
                    <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500">
                        <Cpu className="w-8 h-8 text-emerald-400" />
                    </div>
                    <h3 className="text-3xl font-black text-white mb-2">GEO</h3>
                    <div className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">Generative Engine Optimization</div>
                    <p className="text-slate-400 leading-relaxed mb-10 min-h-[80px]">
                        The future of search. We train AI models (Gemini, ChatGPT) to recognize your brand as the industry authority.
                    </p>
                    <div className="space-y-4 border-t border-white/5 pt-8">
                        <div className="flex items-center gap-3 text-sm text-slate-300">
                            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div> Entity Graphing
                        </div>
                        <div className="flex items-center gap-3 text-sm text-slate-300">
                            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div> Brand Citations
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>

        {/* PRICING */}
        <PricingSection 
          title="SEO Packages"
          description="Transparent pricing. No hidden fees. Results driven."
          plans={[
            {
              name: "Local Hero",
              price: "RM 399",
              period: "/mo",
              description: "\"Get Found by Neighbors.\" Stop losing customers to the shop next door.",
              features: ["Google Maps Optimization", "5 Local Keywords Tracked", "Review Management Advice", "Min Contract: 3 Months"],
              buttonText: "Rank Local"
            },
            {
              name: "Traffic Builder",
              price: "RM 899",
              period: "/mo",
              description: "\"Get Found on Google Page 1.\" Perfect for businesses that need steady leads.",
              features: ["15 Buyer-Intent Keywords", "2 SEO Articles/Month", "Technical SEO Audit", "Google Analytics Setup"],
              isPopular: true,
              buttonText: "Grow Traffic"
            },
            {
              name: "Market Dominator",
              price: "RM 1,999",
              period: "/mo",
              description: "\"Crush Your Competitors.\" For brands that want to own the market.",
              features: ["National Keyword Strategy", "High-Quality Backlinks", "4 Authority Blog Posts/mo", "Dedicated SEO Manager"],
              buttonText: "Dominate"
            }
          ]}
        />

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
                <Link to="/contact" className="text-emerald-400 font-bold hover:text-emerald-300 inline-flex items-center gap-2">
                   Get Rescued <ArrowRight size={16} />
                </Link>
              </div>
           </div>
           <div className="md:w-1/3 flex justify-center">
              <BarChart size={120} className="text-slate-800" />
           </div>
        </div>

      </div>
    </div>
  );
};

export default SeoServiceView;