import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation } from 'react-router-dom';
import { ShieldCheck, RefreshCw, Server, Activity, ArrowRight } from 'lucide-react';
import PricingSection from '../components/PricingSection';

const WebManagementView: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-slate-200 font-sans selection:bg-cyan-500/30">
      <Helmet>
        <title>Website Maintenance & DevOps | Security & Updates Malaysia</title>
        <meta name="description" content="We manage your website so you don't have to. 24/7 Uptime Monitoring, Daily Backups, Security Patching, and Content Updates for Malaysian businesses." />
        <meta name="keywords" content="Website Maintenance Malaysia, WordPress Security, DevOps Services, Website Management Package, Server Monitoring" />
      </Helmet>

      <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className="mb-24">
          <span className="font-mono text-cyan-400 text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Operational Security</span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-8">
            PEACE OF <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">MIND.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
            A website is not a "set and forget" asset. It needs security patches, server updates, and monitoring. We act as your internal technical team, ensuring your digital presence never goes dark.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          <div className="p-8 bg-slate-900/50 border border-slate-800 rounded-2xl hover:bg-slate-900 transition-colors">
            <Activity className="w-10 h-10 text-cyan-400 mb-6" />
            <h3 className="text-xl font-bold text-white mb-3">24/7 Uptime Monitor</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              We monitor your site every minute. If it goes down, we know instantly and fix it before your customers even notice.
            </p>
          </div>
          <div className="p-8 bg-slate-900/50 border border-slate-800 rounded-2xl hover:bg-slate-900 transition-colors">
            <ShieldCheck className="w-10 h-10 text-green-400 mb-6" />
            <h3 className="text-xl font-bold text-white mb-3">Security & Firewall</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              We implement enterprise-grade firewalls (WAF) to block malware, brute-force attacks, and SQL injection attempts.
            </p>
          </div>
          <div className="p-8 bg-slate-900/50 border border-slate-800 rounded-2xl hover:bg-slate-900 transition-colors">
            <RefreshCw className="w-10 h-10 text-blue-400 mb-6" />
            <h3 className="text-xl font-bold text-white mb-3">Daily Backups</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              We take daily snapshots of your database and files. If anything breaks, we can restore your site to a working state in minutes.
            </p>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-12 flex flex-col md:flex-row items-center gap-12">
           <div className="md:w-2/3">
              <h2 className="text-2xl font-bold text-white mb-4">Content Updates Included</h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                 Need to change a banner? Update a price? Post a blog? Just WhatsApp us. Our management packages include monthly man-hours for content updates so you don't need to hire a developer for small tasks.
              </p>
              <Link to="/contact" className="text-cyan-400 font-bold hover:text-cyan-300 inline-flex items-center gap-2">
                 View Maintenance Plans <ArrowRight size={16} />
              </Link>
           </div>
           <div className="md:w-1/3 flex justify-center">
              <Server size={120} className="text-slate-800" />
           </div>
        </div>

        {/* PRICING */}
        <PricingSection 
          title="Maintenance Plans"
          description="Protect your investment. Cheaper than hiring a junior IT staff."
          plans={[
            {
              name: "Basic Care",
              price: "RM 250",
              period: "/mo",
              description: "Essential security and uptime monitoring for small sites.",
              features: ["Cloud Hosting Included", "Daily Off-site Backups", "SSL Certificate", "Plugin Updates", "Uptime Monitoring"],
              buttonText: "Secure Site"
            },
            {
              name: "Business Pro",
              price: "RM 650",
              period: "/mo",
              description: "We become your active technical partner.",
              features: ["Everything in Basic", "2 Hours Content Edits", "Priority WhatsApp Support", "Monthly Performance Report", "Speed Optimization"],
              isPopular: true,
              buttonText: "Partner Up"
            },
            {
              name: "Growth Ops",
              price: "RM 1,500",
              period: "/mo",
              description: "For high-traffic sites needing constant attention.",
              features: ["Everything in Pro", "Weekly SEO Articles (2)", "Database Optimization", "Staging Environment", "24/7 Emergency Line"],
              buttonText: "Scale Ops"
            }
          ]}
        />

      </div>
    </div>
  );
};

export default WebManagementView;