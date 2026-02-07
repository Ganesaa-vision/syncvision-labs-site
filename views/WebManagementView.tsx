import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation } from 'react-router-dom';
import { ShieldCheck, RefreshCw, Server, Activity, ArrowRight, Check, X, HelpCircle, Unlock } from 'lucide-react';
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

      <div className="pt-24 md:pt-32 pb-12 md:pb-20 px-6 max-w-7xl mx-auto">
        <div className="mb-24">
          <span className="font-mono text-cyan-400 text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Proactive Management</span>
          <h1 className="text-4xl md:text-7xl font-bold tracking-tighter text-white mb-8">
            YOU RUN THE BUSINESS. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">WE RUN THE TECH.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
            Websites are like cars—they break if you don't service them. Secure your digital asset with our proactive management plans. Don't wake up to a hacked site or a 404 error.
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
          title="Management Packages"
          description="Secure your digital asset. Cheaper than a single hour of downtime."
          plans={[
            {
              name: "The Digital Keeper",
              price: "RM 99",
              period: "/mo",
              description: "\"Sleep Soundly. Your Site is Safe.\" We act as your digital security guard.",
              features: ["High-Speed Cloud Hosting", "Daily Cloud Backups", "Bank-Grade Security (SSL)", "Uptime Monitoring (5 min)", "No Content Edits"],
              buttonText: "Secure Site"
            },
            {
              name: "The Growth Partner",
              price: "RM 299",
              period: "/mo",
              description: "\"Your Own Tech Team. On Demand.\" Stop wasting hours fixing buttons.",
              features: ["Everything in Digital Keeper", "2 Hours 'Hands-On' Work", "Priority WhatsApp Support", "Monthly Speed Optimization", "Safe Plugin Updates"],
              isPopular: true,
              buttonText: "Hire Tech Team"
            },
            {
              name: "The CTO Experience",
              price: "RM 599",
              period: "/mo",
              description: "\"Maximum Performance. Zero Compromises.\" For businesses that can't afford downtime.",
              features: ["Everything in Growth Partner", "Unlimited Minor Edits", "1-Hour Emergency Response", "Monthly SEO Health Report", "Auto Server Scaling"],
              buttonText: "Get CTO"
            }
          ]}
        />

        {/* COMPARISON TABLE */}
        <div className="mt-32">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">At a Glance</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr>
                  <th className="p-6 border-b border-slate-800 text-slate-500 font-mono text-xs uppercase tracking-widest w-1/4">Feature</th>
                  <th className="p-6 border-b border-slate-800 text-white font-bold text-lg w-1/4">The Digital Keeper</th>
                  <th className="p-6 border-b border-cyan-500/30 text-cyan-400 font-bold text-lg bg-cyan-900/10 rounded-t-2xl w-1/4 relative">
                    The Growth Partner
                    <div className="absolute top-0 right-0 -mt-3 -mr-3 bg-cyan-500 text-black text-[10px] font-bold px-2 py-1 rounded-full">BEST SELLER</div>
                  </th>
                  <th className="p-6 border-b border-slate-800 text-white font-bold text-lg w-1/4">The CTO Experience</th>
                </tr>
              </thead>
              <tbody className="text-sm text-slate-300">
                {[
                  { feature: "Price", k: "RM 99 / mo", g: "RM 299 / mo", c: "RM 599 / mo" },
                  { feature: "Hosting & SSL", k: "Included", g: "Included", c: "Included" },
                  { feature: "Backups", k: "Daily", g: "Daily", c: "Hourly" },
                  { feature: "Content Updates", k: "❌ (You do it)", g: "2 Hours / Month", c: "Unlimited" },
                  { feature: "Support Speed", k: "Email (24h)", g: "WhatsApp (4h)", c: "Priority (1h)" },
                  { feature: "Tech Updates", k: "Auto-Only", g: "Manual & Safe", c: "Manual & Safe" },
                  { feature: "Monthly Report", k: "❌", g: "Basic", c: "Full SEO & Health" },
                ].map((row, i) => (
                  <tr key={i} className="group hover:bg-slate-900/30 transition-colors">
                    <td className="p-6 border-b border-slate-800/50 font-medium text-slate-400">{row.feature}</td>
                    <td className="p-6 border-b border-slate-800/50 font-mono">
                      {row.k.includes('❌') ? <span className="text-slate-600 flex items-center gap-2"><X size={14}/> {row.k.replace('❌ ', '')}</span> : 
                       row.k === 'Included' ? <span className="text-green-400 flex items-center gap-2"><Check size={14}/> Included</span> : row.k}
                    </td>
                    <td className="p-6 border-b border-slate-800/50 font-mono bg-cyan-900/5 text-cyan-100 font-bold">
                      {row.g === 'Included' ? <span className="text-cyan-400 flex items-center gap-2"><Check size={14}/> Included</span> : row.g}
                    </td>
                    <td className="p-6 border-b border-slate-800/50 font-mono">
                      {row.c === 'Included' ? <span className="text-green-400 flex items-center gap-2"><Check size={14}/> Included</span> : row.c}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ SECTION */}
        <div className="mt-32 mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-slate-900/30 border border-slate-800 rounded-3xl hover:border-cyan-500/30 transition-all group">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6 text-cyan-400 group-hover:scale-110 transition-transform">
                <HelpCircle size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Can I manage the website myself?</h3>
              <p className="text-slate-400 leading-relaxed">
                Of course! If you choose our WordPress package, you have full control. However, without a maintenance plan, you are responsible for security, backups, and fixing the site if an update breaks it. Our plans are simply peace of mind.
              </p>
            </div>
            <div className="p-8 bg-slate-900/30 border border-slate-800 rounded-3xl hover:border-cyan-500/30 transition-all group">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6 text-cyan-400 group-hover:scale-110 transition-transform">
                <Unlock size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">What happens if I cancel?</h3>
              <p className="text-slate-400 leading-relaxed">
                You can cancel anytime. We will package your website files and database and send them to you to host elsewhere. You own your data, always.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default WebManagementView;