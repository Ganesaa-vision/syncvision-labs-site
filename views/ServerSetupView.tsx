import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation } from 'react-router-dom';
import { Mail, Globe, Lock, Cloud } from 'lucide-react';
import { PageTransition } from '../PageTransition';
import PricingSection from '../components/PricingSection';
import Footer from '../components/Footer';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { IMAGES } from '../images';
import { m, LazyMotion, domAnimation } from 'framer-motion';

const ServerSetupView: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Domain, Hosting & Corporate Email Setup",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Omino Tech",
      "address": "Malaysia"
    },
    "description": "Professional IT setup for businesses. We register .com.my domains, configure high-speed Cloud Hosting (VPS), and set up Corporate Emails (Google Workspace/Titan)."
  };

  return (
    <PageTransition>
    <LazyMotion features={domAnimation}>
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] text-slate-900 dark:text-slate-200 font-sans selection:bg-slate-500/30 transition-colors duration-300">
      <Helmet>
        <title>Domain, Hosting & Corporate Email Setup | Malaysia - Omino Tech</title>
        <meta name="description" content="Professional IT setup for businesses. We register .com.my domains, configure high-speed Cloud Hosting (VPS), and set up Corporate Emails (Google Workspace/Titan)." />
        <meta name="keywords" content="Domain Registration Malaysia, Cloud Hosting, VPS Setup, Corporate Email, Google Workspace Reseller, SSL Certificate" />
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Omino Tech" />
        <meta property="og:image" content={IMAGES.GLOBAL.OG_IMAGE} />
        <meta name="twitter:image" content={IMAGES.GLOBAL.OG_IMAGE} />
        <link rel="manifest" href="/site.webmanifest" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      </Helmet>

      <m.main initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} className="pt-24 md:pt-32 pb-12 md:pb-20 px-6 max-w-7xl mx-auto flex-grow w-full">
        <m.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: "easeOut" }} 
          className="text-center mb-24"
        >
        <span className="font-mono text-slate-600 dark:text-slate-400 text-xs font-bold uppercase tracking-[0.4em] mb-4 block">IT Infrastructure</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-slate-900 dark:text-white mb-8 leading-[1.1]">
            FOUNDATION <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-cyan-500 to-fuchsia-500 dark:from-indigo-400 dark:via-cyan-300 dark:to-purple-400">SETUP.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Stop struggling with DNS records and CPanel. We handle the boring but critical "plumbing" of your digital business. Professional, secure, and done right the first time.
          </p>
        </m.div>

        <m.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-32"
        >
            {/* Domain */}
            <div className="p-6 md:p-8 bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-[2rem] hover:border-slate-400 dark:hover:border-slate-600 transition-all shadow-sm dark:shadow-none">
                <Globe className="w-12 h-12 text-blue-400 mb-6" />
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Domain Registration</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm">
                    We register and manage your identity. Whether it's a global <strong>.com</strong> or a local <strong>.com.my</strong> (requires SSM), we handle the paperwork and DNS pointing.
                </p>
            </div>

            {/* Hosting */}
            <div className="p-6 md:p-8 bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-[2rem] hover:border-slate-400 dark:hover:border-slate-600 transition-all shadow-sm dark:shadow-none">
                <Cloud className="w-12 h-12 text-indigo-400 mb-6" />
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Cloud Hosting</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm">
                    Forget slow shared hosting. We deploy your site on high-performance Cloud VPS (DigitalOcean / AWS) optimized for speed and traffic spikes.
                </p>
            </div>

            {/* Email */}
            <div className="p-6 md:p-8 bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-[2rem] hover:border-slate-400 dark:hover:border-slate-600 transition-all shadow-sm dark:shadow-none">
                <Mail className="w-12 h-12 text-yellow-400 mb-6" />
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Corporate Email</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm">
                    Look professional with <strong>name@yourcompany.com</strong>. We set up Google Workspace or Titan Email, ensuring high deliverability and spam protection.
                </p>
            </div>
        </m.div>

        {/* PRICING */}
        <PricingSection 
          serviceName="Server Setup"
          title="Setup Packages"
          description="One-time setup fees. You own the accounts and assets 100%."
          plans={[
            {
              name: "Identity Setup",
              price: "RM 450",
              description: "Secure your brand name online.",
              features: ["Domain Registration (.com)", "DNS Configuration", "1 Professional Email", "Email Forwarding", "SSL Setup"],
              buttonText: "Get Identity",
              customButton: (
                <WhatsAppButton 
                  serviceName="Server Setup"
                  packageLabel="Identity Setup"
                  buttonText="Get Identity"
                  className="w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700"
                />
              )
            },
            {
              name: "Business Suite",
              price: "RM 1,200",
              description: "Complete corporate infrastructure setup.",
              features: ["Domain (.com.my / .com)", "High-Speed Cloud VPS", "Google Workspace (5 Users)", "DKIM/SPF Email Security", "Cloudflare CDN"],
              isPopular: true,
              buttonText: "Setup Business",
              customButton: (
                <WhatsAppButton 
                  serviceName="Server Setup"
                  packageLabel="Business Suite"
                  buttonText="Setup Business"
                  className="w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-500/30"
                />
              )
            },
            {
              name: "Migration Ops",
              price: "RM 2,500",
              description: "Move from slow shared hosting to Cloud VPS.",
              features: ["Full Site Migration", "Database Transfer", "Zero Downtime Switch", "Server Optimization", "Security Hardening"],
              buttonText: "Migrate Now",
              customButton: (
                <WhatsAppButton 
                  serviceName="Server Setup"
                  packageLabel="Migration Ops"
                  buttonText="Migrate Now"
                  className="w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700"
                />
              )
            }
          ]}
        />

        <m.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="p-6 md:p-12 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[3rem] flex flex-col md:flex-row items-center justify-between gap-8"
        >
            <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="p-4 bg-green-100 dark:bg-green-500/10 rounded-2xl text-green-600 dark:text-green-500">
                    <Lock size={32} />
                </div>
                <div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white">Free SSL Security</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">Included with every setup. The green padlock that Google loves.</p>
                </div>
            </div>
            <WhatsAppButton 
              serviceName="Server Setup Inquiry"
              buttonText="Get Setup Quote"
              className="px-8 py-4 bg-indigo-600 dark:bg-white text-white dark:text-black font-bold rounded-xl hover:bg-indigo-500 dark:hover:bg-slate-200 transition-all"
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

export default ServerSetupView;