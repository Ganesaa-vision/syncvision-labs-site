import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation } from 'react-router-dom';
import { Globe, Code2, ShoppingBag, ShieldCheck, Server, ArrowRight, CheckCircle2 } from 'lucide-react';
import PricingSection from '../components/PricingSection';

const WebArchitectureView: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-slate-200 font-sans selection:bg-indigo-500/30">
      <Helmet>
        <title>Web Architecture & Development | React, Next.js & WordPress Malaysia</title>
        <meta name="description" content="We build high-performance websites using React, Next.js, and Enterprise WordPress. Includes FPX Payment Gateway integration, Cloud Hosting, and 24/7 DevOps support." />
        <meta name="keywords" content="Web Design Malaysia, Custom Website Development, Next.js Developer, WordPress Elementor, E-commerce Malaysia, FPX Payment Integration, Server Management" />
      </Helmet>

      <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        {/* HERO */}
        <div className="mb-24">
          <span className="font-mono text-indigo-400 text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Core Infrastructure</span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-8">
            WEB <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">ARCHITECTURE.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
            We don't just "design" websites. We engineer digital platforms. From proprietary 
            <span className="text-white font-bold"> React/Next.js</span> web apps to rapid 
            <span className="text-white font-bold"> WordPress</span> deployments, we build systems that scale with your business.
          </p>
        </div>

        {/* MAIN SERVICES */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
          {/* Custom Dev */}
          <div className="p-10 bg-slate-900/40 border border-slate-800 rounded-3xl hover:border-indigo-500/30 transition-all">
            <Code2 className="w-12 h-12 text-indigo-400 mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Custom Engineering (Next.js)</h3>
            <p className="text-slate-400 mb-8 leading-relaxed">
              For businesses that need more than a template. We build proprietary web applications using the same tech stack as Netflix and TikTok.
            </p>
            <ul className="space-y-3 mb-8">
              {['< 1 Second Load Times', '100% Source Code Ownership', 'Complex Data Visualization', 'Progressive Web App (PWA) Capable'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-indigo-500" /> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* WordPress */}
          <div className="p-10 bg-slate-900/40 border border-slate-800 rounded-3xl hover:border-pink-500/30 transition-all">
            <Globe className="w-12 h-12 text-pink-400 mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Enterprise WordPress</h3>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Rapid deployment using Elementor Pro. Perfect for marketing sites, blogs, and SMEs who need full content control without coding.
            </p>
            <ul className="space-y-3 mb-8">
              {['Easy-to-Edit Admin Panel', 'Yoast SEO Optimized', 'Mobile Responsive Design', 'Fast Deployment (2-3 Weeks)'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-pink-500" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* E-COMMERCE SECTION */}
        <div className="mb-32 p-12 bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-[3rem] relative overflow-hidden">
          <div className="absolute top-0 right-0 p-20 opacity-5"><ShoppingBag size={300} /></div>
          <div className="relative z-10">
            <span className="text-yellow-400 font-mono text-xs font-bold uppercase tracking-widest mb-4 block">Transactional Systems</span>
            <h2 className="text-4xl font-bold text-white mb-6">E-Commerce & Payments</h2>
            <p className="text-slate-400 max-w-2xl mb-10 text-lg">
              We integrate Malaysian payment gateways directly into your site. Accept payments via FPX (Maybank2u, CIMB Clicks), Credit Cards, and E-Wallets (GrabPay, TnG) instantly.
            </p>
            <div className="flex flex-wrap gap-4">
              {['Stripe', 'ToyyibPay', 'Billplz', 'WooCommerce', 'Shopify Sync'].map(tag => (
                <span key={tag} className="px-4 py-2 bg-slate-950 border border-slate-700 rounded-lg text-slate-300 text-sm font-mono">{tag}</span>
              ))}
            </div>
          </div>
        </div>

        {/* INFRASTRUCTURE */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="p-8 bg-slate-950 border border-slate-800 rounded-2xl">
            <Server className="w-8 h-8 text-slate-400 mb-4" />
            <h4 className="text-lg font-bold text-white mb-2">Cloud Hosting</h4>
            <p className="text-sm text-slate-500">High-speed VPS setup (DigitalOcean/AWS) or managed Cloud hosting. We handle the DNS and SSL.</p>
          </div>
          <div className="p-8 bg-slate-950 border border-slate-800 rounded-2xl">
            <ShieldCheck className="w-8 h-8 text-emerald-400 mb-4" />
            <h4 className="text-lg font-bold text-white mb-2">DevOps & Security</h4>
            <p className="text-sm text-slate-500">Daily backups, firewall configuration, and 24/7 uptime monitoring. We fix it before you know it's broken.</p>
          </div>
          <div className="p-8 bg-slate-950 border border-slate-800 rounded-2xl">
            <Globe className="w-8 h-8 text-blue-400 mb-4" />
            <h4 className="text-lg font-bold text-white mb-2">Corporate Email</h4>
            <p className="text-sm text-slate-500">Professional "boss@company.com" email setup using Titan or Google Workspace. Look professional.</p>
          </div>
        </div>

        {/* PRICING */}
        <PricingSection 
          title="Development Packages"
          description="Transparent pricing for high-performance engineering."
          plans={[
            {
              name: "Landing Page",
              price: "RM 1,800",
              description: "High-conversion single page site. Perfect for ads.",
              features: ["Custom Design", "Next.js / React", "Mobile Responsive", "Speed Optimization (90+)", "Contact Form"],
              buttonText: "Build Landing"
            },
            {
              name: "Corporate Site",
              price: "RM 3,500",
              description: "Professional multi-page presence for established companies.",
              features: ["5-10 Unique Pages", "CMS Integration (Sanity/WP)", "SEO Structure", "Blog Setup", "Analytics Setup"],
              isPopular: true,
              buttonText: "Go Corporate"
            },
            {
              name: "Web Application",
              price: "RM 8,000+",
              description: "Full-stack software with database and user login.",
              features: ["User Authentication", "Database Design", "Admin Dashboard", "API Integration", "Complex Logic"],
              buttonText: "Engineer App"
            }
          ]}
        />

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