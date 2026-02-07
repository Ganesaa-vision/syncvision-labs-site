import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation } from 'react-router-dom';
import { Mail, Globe, Lock, Cloud } from 'lucide-react';
import PricingSection from '../components/PricingSection';

const ServerSetupView: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-slate-200 font-sans selection:bg-slate-500/30">
      <Helmet>
        <title>Domain, Hosting & Corporate Email Setup | Malaysia</title>
        <meta name="description" content="Professional IT setup for businesses. We register .com.my domains, configure high-speed Cloud Hosting (VPS), and set up Corporate Emails (Google Workspace/Titan)." />
        <meta name="keywords" content="Domain Registration Malaysia, Cloud Hosting, VPS Setup, Corporate Email, Google Workspace Reseller, SSL Certificate" />
      </Helmet>

      <div className="pt-24 md:pt-32 pb-12 md:pb-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <span className="font-mono text-slate-400 text-xs font-bold uppercase tracking-[0.4em] mb-4 block">IT Infrastructure</span>
          <h1 className="text-4xl md:text-7xl font-bold tracking-tighter text-white mb-8">
            FOUNDATION <span className="text-slate-500">SETUP.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Stop struggling with DNS records and CPanel. We handle the boring but critical "plumbing" of your digital business. Professional, secure, and done right the first time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-32">
            {/* Domain */}
            <div className="p-8 bg-slate-900/40 border border-slate-800 rounded-3xl hover:border-slate-600 transition-all">
                <Globe className="w-12 h-12 text-blue-400 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Domain Registration</h3>
                <p className="text-slate-400 mb-6 text-sm">
                    We register and manage your identity. Whether it's a global <strong>.com</strong> or a local <strong>.com.my</strong> (requires SSM), we handle the paperwork and DNS pointing.
                </p>
            </div>

            {/* Hosting */}
            <div className="p-8 bg-slate-900/40 border border-slate-800 rounded-3xl hover:border-slate-600 transition-all">
                <Cloud className="w-12 h-12 text-indigo-400 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Cloud Hosting</h3>
                <p className="text-slate-400 mb-6 text-sm">
                    Forget slow shared hosting. We deploy your site on high-performance Cloud VPS (DigitalOcean / AWS) optimized for speed and traffic spikes.
                </p>
            </div>

            {/* Email */}
            <div className="p-8 bg-slate-900/40 border border-slate-800 rounded-3xl hover:border-slate-600 transition-all">
                <Mail className="w-12 h-12 text-yellow-400 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Corporate Email</h3>
                <p className="text-slate-400 mb-6 text-sm">
                    Look professional with <strong>name@yourcompany.com</strong>. We set up Google Workspace or Titan Email, ensuring high deliverability and spam protection.
                </p>
            </div>
        </div>

        {/* PRICING */}
        <PricingSection 
          title="Setup Packages"
          description="One-time setup fees. You own the accounts and assets 100%."
          plans={[
            {
              name: "Identity Setup",
              price: "RM 450",
              description: "Secure your brand name online.",
              features: ["Domain Registration (.com)", "DNS Configuration", "1 Professional Email", "Email Forwarding", "SSL Setup"],
              buttonText: "Get Identity"
            },
            {
              name: "Business Suite",
              price: "RM 1,200",
              description: "Complete corporate infrastructure setup.",
              features: ["Domain (.com.my / .com)", "High-Speed Cloud VPS", "Google Workspace (5 Users)", "DKIM/SPF Email Security", "Cloudflare CDN"],
              isPopular: true,
              buttonText: "Setup Business"
            },
            {
              name: "Migration Ops",
              price: "RM 2,500",
              description: "Move from slow shared hosting to Cloud VPS.",
              features: ["Full Site Migration", "Database Transfer", "Zero Downtime Switch", "Server Optimization", "Security Hardening"],
              buttonText: "Migrate Now"
            }
          ]}
        />

        <div className="p-12 bg-slate-900 border border-slate-800 rounded-[3rem] flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
                <div className="p-4 bg-green-500/10 rounded-2xl text-green-500">
                    <Lock size={32} />
                </div>
                <div>
                    <h4 className="text-xl font-bold text-white">Free SSL Security</h4>
                    <p className="text-slate-400 text-sm">Included with every setup. The green padlock that Google loves.</p>
                </div>
            </div>
            <Link to="/contact" className="px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-slate-200 transition-all">
                Get Setup Quote
            </Link>
        </div>

      </div>
    </div>
  );
};

export default ServerSetupView;