import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation } from 'react-router-dom';
import { TrendingUp, MapPin, Search, BarChart, ArrowRight } from 'lucide-react';
import PricingSection from '../components/PricingSection';

const SeoDominanceView: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-slate-200 font-sans animate-fade-in-up">
      <Helmet>
        <title>SEO & Google Maps Ranking | Rank #1 in Malaysia</title>
        <meta name="description" content="Dominate Google Malaysia search results. We specialize in Local SEO, Google Map Pack ranking, and AEO (Answer Engine Optimization) for AI search." />
        <meta name="keywords" content="SEO Malaysia, Google Maps Ranking, Local SEO Expert, AEO Optimization, Voice Search Ranking, SEO Audit" />
      </Helmet>

      <div className="pt-24 md:pt-32 pb-12 md:pb-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="font-mono text-emerald-400 text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Search Dominance</span>
          <h1 className="text-4xl md:text-7xl font-bold tracking-tighter text-white mb-6">
            RANK <span className="text-emerald-500">#1.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            We don't just target keywords; we target <strong>Intent</strong>. We optimize your digital presence for the three engines that matter: Google Search, Google Maps, and AI Answer Engines (ChatGPT/Gemini).
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
              We target high-intent transactional keywords (e.g., "Plumber KL" vs "How to fix pipe"). We use programmatic SEO to capture long-tail traffic that your competitors ignore.
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
              For local businesses, the "Map Pack" (Top 3 Map Results) is more valuable than the website link. We optimize your Google Business Profile (GBP) to ensure you dominate your local radius.
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
          title="SEO Retainers"
          description="Long-term growth strategies. No lock-in contracts."
          plans={[
            {
              name: "Local Starter",
              price: "RM 1,500",
              period: "/mo",
              description: "Dominate your local area and Google Maps.",
              features: ["Google Map Pack Ranking", "Google Business Profile Opt", "5 Target Keywords", "Monthly Reporting", "Basic On-Page SEO"],
              buttonText: "Rank Local"
            },
            {
              name: "National Brand",
              price: "RM 3,000",
              period: "/mo",
              description: "Compete for high-volume keywords across Malaysia.",
              features: ["Technical SEO Audit", "Content Strategy (4 Articles)", "Backlink Building", "Competitor Analysis", "Conversion Optimization"],
              isPopular: true,
              buttonText: "Grow Traffic"
            },
            {
              name: "Authority",
              price: "RM 5,000",
              period: "/mo",
              description: "Become the industry leader. Aggressive expansion.",
              features: ["Programmatic SEO", "AEO (AI Search) Optimization", "PR Outreach", "Video SEO", "Daily Rank Tracking"],
              buttonText: "Dominate"
            }
          ]}
        />

        <div className="bg-gradient-to-r from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-12 flex flex-col md:flex-row items-center gap-12">
           <div className="md:w-2/3">
              <h2 className="text-2xl font-bold text-white mb-4">The Future: AEO (Answer Engine Optimization)</h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                 People are starting to ask ChatGPT and Gemini for recommendations instead of Googling. We use advanced <strong>Schema Markup</strong> and structured data to ensure AI models understand your business and recommend you as the answer.
              </p>
              <Link to="/contact" className="text-emerald-400 font-bold hover:text-emerald-300 inline-flex items-center gap-2">
                 Audit My Site <ArrowRight size={16} />
              </Link>
           </div>
           <div className="md:w-1/3 flex justify-center">
              <BarChart size={120} className="text-slate-800" />
           </div>
        </div>

      </div>
    </div>
  );
};

export default SeoDominanceView;