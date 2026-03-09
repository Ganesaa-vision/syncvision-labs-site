import React, { useLayoutEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation } from 'react-router-dom';
import { TrendingUp, MapPin, Search, BarChart, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import PricingSection from '../components/PricingSection';
import Footer from '../components/Footer';
import { m, LazyMotion, domAnimation, AnimatePresence } from 'framer-motion';
import { WhatsAppButton } from '../components/WhatsAppButton';

const SeoDominanceView: React.FC = () => {
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
        "name": "How long does it take to rank #1 on Google in Malaysia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most local SEO campaigns show significant movement within 3 to 6 months through rigorous on-page optimization and technical audits."
        }
      }
    ]
  };

  return (
    <LazyMotion features={domAnimation}>
    <div className="min-h-screen bg-[#0a0a0a] text-slate-200 font-sans">
      <Helmet>
        <title>Best SEO Service in Malaysia | Local Ranking & AI SEO Expert - Omino Tech</title>
        <meta name="description" content="Dominate Google search results. We provide the best SEO services in Malaysia, combining local search optimization with advanced AI chatbot integration." />
        <meta name="keywords" content="SEO Malaysia, Google Maps Ranking, Local SEO Expert, AEO Optimization, Voice Search Ranking, SEO Audit, Best SEO agency Malaysia, Local SEO services near me, SEO expert Kuala Lumpur" />
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Omino Tech" />
        <link rel="manifest" href="/site.webmanifest" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </Helmet>

      <div className="pt-24 md:pt-32 pb-12 md:pb-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="font-mono text-emerald-400 text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Search Dominance</span>
          <h1 className="text-4xl md:text-7xl font-bold tracking-tighter text-white mb-6 leading-tight">
            Expert SEO Services & <br/><span className="text-emerald-500">Digital Visibility in Malaysia</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            We don't just target keywords; we target <strong>Intent</strong>. As the <strong>best SEO agency Malaysia</strong> has produced and a recognized <strong>SEO expert Kuala Lumpur</strong> trusts, we optimize your digital presence for the three engines that matter: Google Search, Google Maps, and AI Answer Engines (ChatGPT/Gemini).
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-32">
          <div className="p-10 bg-slate-900/40 border border-slate-800 rounded-3xl hover:border-emerald-500/30 transition-all group">
            <div className="flex items-center justify-between mb-8">
               <Search className="w-12 h-12 text-emerald-400" />
               <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">Traditional SEO</span>
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">Google Search Ranking</h3>
            <p className="text-slate-400 mb-6 leading-relaxed">
              We target high-intent transactional keywords (e.g., "Plumber KL" vs "How to fix pipe"). We use programmatic SEO to capture long-tail traffic that your competitors ignore. We execute a specific, analytical process for diagnosing indexing errors (crawl budget waste) and restructuring site architecture (siloing) to achieve sustainable ranking improvements.
            </p>
            <div className="h-px w-full bg-slate-800 mb-6"></div>
            <ul className="space-y-2 text-sm text-slate-300 font-mono">
               <li>+ Technical SEO Audit</li>
               <li>+ Keyword Gap Analysis</li>
               <li>+ Backlink Strategy</li>
            </ul>
          </div>

          <div className="p-10 bg-slate-900/40 border border-slate-800 rounded-3xl hover:border-blue-500/30 transition-all group">
            <div className="flex items-center justify-between mb-8">
               <MapPin className="w-12 h-12 text-blue-400" />
               <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">Local SEO</span>
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">Google Map Pack</h3>
            <p className="text-slate-400 mb-6 leading-relaxed">
              For local businesses, the "Map Pack" (Top 3 Map Results) is more valuable than the website link. We provide <strong>Local SEO services near me</strong> and optimize your Google Business Profile (GBP) to ensure you dominate your local radius.
            </p>
            <div className="h-px w-full bg-slate-800 mb-6"></div>
            <ul className="space-y-2 text-sm text-slate-300 font-mono">
               <li>+ GBP Optimization</li>
               <li>+ Review Management Strategy</li>
               <li>+ Local Citation Building</li>
            </ul>
          </div>
        </div>

        {/* PRICING */}
        <PricingSection 
          serviceName="SEO Dominance"
          title="SEO Retainers"
          description="Long-term growth strategies. No lock-in contracts."
          plans={[
            {
              name: "Local Starter",
              price: "RM 1,500",
              period: "/mo",
              description: "Dominate your local area and Google Maps.",
              features: ["Google Map Pack Ranking", "Google Business Profile Opt", "5 Target Keywords", "Monthly Reporting", "Basic On-Page SEO"],
              buttonText: "Rank Local",
              customButton: (
                <WhatsAppButton 
                  serviceName="SEO Services"
                  packageLabel="Local Starter"
                  buttonText="Rank Local"
                  className="w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700"
                />
              )
            },
            {
              name: "National Brand",
              price: "RM 3,000",
              period: "/mo",
              description: "Compete for high-volume keywords across Malaysia.",
              features: ["Technical SEO Audit", "Content Strategy (4 Articles)", "Backlink Building", "Competitor Analysis", "Conversion Optimization"],
              isPopular: true,
              buttonText: "Grow Traffic",
              customButton: (
                <WhatsAppButton 
                  serviceName="SEO Services"
                  packageLabel="National Brand"
                  buttonText="Grow Traffic"
                  className="w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all bg-indigo-500 hover:bg-indigo-400 text-white shadow-lg shadow-indigo-500/25"
                />
              )
            },
            {
              name: "Authority",
              price: "RM 5,000",
              period: "/mo",
              description: "Become the industry leader. Aggressive expansion.",
              features: ["Programmatic SEO", "AEO (AI Search) Optimization", "PR Outreach", "Video SEO", "Daily Rank Tracking"],
              buttonText: "Dominate",
              customButton: (
                <WhatsAppButton 
                  serviceName="SEO Services"
                  packageLabel="Authority"
                  buttonText="Dominate"
                  className="w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700"
                />
              )
            }
          ]}
        />

        <div className="bg-gradient-to-r from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-12 flex flex-col md:flex-row items-center gap-12">
           <div className="md:w-2/3">
              <h2 className="text-2xl font-bold text-white mb-4">The Future: AEO (Answer Engine Optimization)</h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                 People are starting to ask ChatGPT and Gemini for recommendations instead of Googling. We use advanced <strong>Schema Markup</strong> and structured data to ensure AI models understand your business and recommend you as the answer.
              </p>
              <WhatsAppButton
                serviceName="SEO Audit Inquiry"
                buttonText="Audit My Site"
                className="text-emerald-400 font-bold hover:text-emerald-300 inline-flex items-center gap-2"
                showIcon={true}
              />
           </div>
           <div className="md:w-1/3 flex justify-center">
              <BarChart size={120} className="text-slate-800" />
           </div>
        </div>

        {/* === FAQ SECTION === */}
        <div className="mt-32 max-w-4xl mx-auto">
           <h2 className="text-3xl font-bold text-white mb-12 text-center">SEO Frequently Asked Questions</h2>
           <div className="space-y-4">
              {faqSchema.mainEntity.map((item, i) => (
                 <div 
                    key={i} 
                    className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openFaq === i ? 'border-emerald-500 bg-slate-900 shadow-lg' : 'border-slate-800 bg-slate-900/30'}`}
                 >
                    <button 
                       onClick={() => setOpenFaq(openFaq === i ? null : i)}
                       className="w-full flex items-center justify-between p-6 text-left"
                    >
                       <h3 className={`font-bold text-lg ${openFaq === i ? 'text-emerald-400' : 'text-white'}`}>{item.name}</h3>
                       {openFaq === i ? <ChevronUp className="text-slate-400" /> : <ChevronDown className="text-slate-400" />}
                    </button>
                    <AnimatePresence>
                        {openFaq === i && (
                           <m.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }}>
                              <div className="p-6 pt-0 text-slate-400 leading-relaxed border-t border-dashed border-slate-800 pt-4">
                                 {item.acceptedAnswer.text}
                              </div>
                           </m.div>
                        )}
                    </AnimatePresence>
                 </div>
              ))}
           </div>
        </div>
      </div>
      <Footer />
    </div>
    </LazyMotion>
  );
};

export default SeoDominanceView;