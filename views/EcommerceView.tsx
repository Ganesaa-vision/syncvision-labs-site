import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, CreditCard, CheckCircle2, Check, Zap, ShieldCheck, Target, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { PageTransition } from '../PageTransition';
import Footer from '../components/Footer';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { IMAGES } from '../images';
import { m, LazyMotion, domAnimation, AnimatePresence } from 'framer-motion';

const EcommerceView: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  const [monthlySales, setMonthlySales] = useState(10000);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const shopifyMonthly = 150; 
  const shopifyTransFee = 0.025; 
  const estimatedLoss = Math.round(shopifyMonthly + (monthlySales * shopifyTransFee));
  const yearlySavings = estimatedLoss * 12;
  const monthsToROI = estimatedLoss > 0 ? (3299 / estimatedLoss).toFixed(1) : "0";

  const faqs = [
    {
      q: "What payment gateways do you integrate for Malaysian e-commerce?",
      a: "We integrate local FPX payment gateways like ToyyibPay, Billplz, and SenangPay, alongside <a href=\"https://stripe.com/en-my\" target=\"_blank\" rel=\"noopener noreferrer\" className=\"text-yellow-600 dark:text-yellow-500 font-bold hover:underline\">Stripe</a> for secure credit card processing. This ensures low transaction fees and direct deposits to your Malaysian bank account."
    },
    {
      q: "Why is a custom store better than Shopify for my SME?",
      a: "<a href=\"https://www.shopify.com/\" target=\"_blank\" rel=\"noopener noreferrer\" className=\"text-yellow-600 dark:text-yellow-500 font-bold hover:underline\">Shopify</a> charges monthly rent (often in USD) and takes a percentage of every sale as transaction fees. Our custom <a href=\"https://woocommerce.com/\" target=\"_blank\" rel=\"noopener noreferrer\" className=\"text-yellow-600 dark:text-yellow-500 font-bold hover:underline\">WooCommerce</a> stores give you 100% ownership, zero monthly platform fees, and complete control over your data without vendor lock-in."
    },
    {
      q: "Are your e-commerce websites optimized for Google SEO and AI (AEO)?",
      a: "Yes. We implement strict Product Schema markup, optimize Core Web Vitals for sub-second load times, and structure your product data so AI engines (like ChatGPT) and Google Shopping can easily read, categorize, and recommend your products."
    },
    {
      q: "How long does it take to build an e-commerce store?",
      a: "Our Starter Store add-on can be launched in 48 hours. A fully custom Zero-Fee E-Commerce platform typically takes 2 to 3 weeks, including payment gateway approval, shipping logic setup, and inventory configuration."
    }
  ];

  const schemaData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "E-Commerce Development & Payment Gateway Integration",
      "url": "https://www.ominotech.com.my/services/ecommerce",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Omino Tech - Web Development Company",
        "url": "https://www.ominotech.com.my",
        "address": "Malaysia"
      },
      "description": "Build a high-converting online store. We integrate FPX Payment Gateways (Billplz, ToyyibPay, Stripe) and build on WooCommerce or Shopify."
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a
        }
      }))
    }
  ];

  return (
    <PageTransition>
    <LazyMotion features={domAnimation}>
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] text-slate-900 dark:text-slate-200 font-sans selection:bg-yellow-500/30 transition-colors duration-300">
      <Helmet>
        <title>E-Commerce Development & Payment Gateway Integration | Malaysia - Omino Tech</title>
        <meta name="description" content="Build a high-converting online store. We integrate FPX Payment Gateways (Billplz, ToyyibPay, Stripe) and build on WooCommerce or Shopify. Sell to Malaysian customers instantly." />
        <meta name="keywords" content="E-commerce Malaysia, Payment Gateway Integration, WooCommerce Developer, Shopify Expert, FPX Payment, Billplz, Stripe Malaysia" />
        <meta property="og:image" content={IMAGES.GLOBAL.OG_IMAGE} />
        <meta name="twitter:image" content={IMAGES.GLOBAL.OG_IMAGE} />
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Omino Tech" />
        <link rel="manifest" href="/site.webmanifest" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      </Helmet>

      <m.main initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} className="pt-24 md:pt-32 pb-12 md:pb-20 px-6 max-w-7xl mx-auto flex-grow w-full">
        {/* HERO */}
        <div className="mb-24 relative pt-6 md:pt-12">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#80808015_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                {/* LEFT COLUMN: Title & CTAs */}
                <m.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="lg:col-span-7 flex flex-col items-start text-left"
                >
                    <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/80 dark:bg-[#0a0a0a]/80 border border-slate-200/50 dark:border-white/10 mb-6 md:mb-8 backdrop-blur-xl shadow-lg shadow-yellow-500/5 transform-gpu transition-all hover:scale-105 hover:border-yellow-500/30">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(234,179,8,0.8)]"></div>
                      <span className="font-mono text-slate-800 dark:text-slate-300 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em]">DIGITAL COMMERCE EXPERTS</span>
                    </div>

                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black tracking-tighter text-slate-900 dark:text-white leading-[1.05] mb-8">
                      Turn Your Website <br/> Into a <span className="text-transparent bg-clip-text bg-gradient-to-br from-yellow-500 via-orange-500 to-red-500 dark:from-yellow-400 dark:via-orange-400 dark:to-red-400">Cash Register.</span>
                    </h1>

                    <div className="flex flex-col sm:flex-row items-center justify-start gap-4 sm:gap-6 w-full sm:w-auto mb-10">
                        <WhatsAppButton 
                            serviceName="E-Commerce Architecture"
                            buttonText="Build Your Store"
                            className="w-full sm:w-auto group relative inline-flex items-center justify-center px-6 md:px-10 py-5 font-bold text-sm uppercase tracking-[0.2em] text-white dark:text-slate-900 overflow-hidden rounded-full bg-slate-900 dark:bg-white hover:scale-105 active:scale-95 transition-all duration-500 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] dark:shadow-[0_20px_40px_-10px_rgba(255,255,255,0.2)] hover:shadow-[0_20px_50px_-10px_rgba(234,179,8,0.4)]"
                            showIcon={false}
                        >
                            <span className="absolute inset-0 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"></span>
                            <span className="relative flex items-center gap-3 group-hover:text-white transition-colors duration-500">
                                Build Your Store <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                            </span>
                        </WhatsAppButton>
                        
                        <a href="#pricing" onClick={(e) => { e.preventDefault(); document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' }); }} className="w-full sm:w-auto group relative inline-flex items-center justify-center px-6 md:px-10 py-5 font-bold text-sm uppercase tracking-[0.2em] text-slate-800 dark:text-white overflow-hidden rounded-full border border-slate-300 dark:border-white/20 bg-white/50 dark:bg-white/5 hover:scale-105 active:scale-95 transition-all duration-500 backdrop-blur-md hover:shadow-[0_0_30px_rgba(0,0,0,0.05)] dark:hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:border-slate-400 dark:hover:border-white/40">
                            <span className="absolute inset-0 bg-slate-100 dark:bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"></span>
                            <span className="relative flex items-center gap-3 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-500">
                                View Packages
                            </span>
                        </a>
                    </div>

                    <div className="inline-flex flex-wrap justify-start items-center gap-x-6 gap-y-3 px-8 py-4 rounded-full bg-white/40 dark:bg-white/[0.02] border border-slate-200/50 dark:border-white/5 backdrop-blur-xl shadow-sm">
                        <div className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300"><CheckCircle2 className="w-4 h-4 text-yellow-500" /> Local Payment Gateways</div>
                        <div className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700 hidden sm:block"></div>
                        <div className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300"><CheckCircle2 className="w-4 h-4 text-yellow-500" /> 0% Transaction Fees</div>
                    </div>
                </m.div>

                {/* RIGHT COLUMN: Promise Card */}
                <m.div 
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="lg:col-span-5 relative w-full group mt-10 lg:mt-0"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 via-orange-500/20 to-red-500/20 blur-2xl rounded-[2rem] opacity-40 pointer-events-none transform-gpu transition-opacity duration-500 group-hover:opacity-60"></div>
                    
                    <div className="relative p-[1px] rounded-[2.5rem] bg-gradient-to-br from-yellow-500/40 via-slate-300/50 to-orange-500/40 dark:from-yellow-500/40 dark:via-slate-700/50 dark:to-orange-500/40 overflow-hidden shadow-2xl transform-gpu hover:-translate-y-2 transition-all duration-500">
                        <div className="relative bg-white/80 dark:bg-[#050505]/90 backdrop-blur-2xl p-8 md:p-10 rounded-[2.5rem] text-left flex flex-col h-full">
                            
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-200/60 dark:border-white/5">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-500/10 dark:to-orange-500/10 flex items-center justify-center border border-yellow-100 dark:border-white/5 shadow-sm flex-shrink-0">
                                        <Target className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-base md:text-lg font-black uppercase tracking-[0.1em] text-slate-900 dark:text-white mb-0.5">Our Promise</h3>
                                        <div className="text-[10px] font-mono text-yellow-600 dark:text-yellow-400 uppercase tracking-widest font-bold">Omino Tech Standards</div>
                                    </div>
                                </div>
                                
                                <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-slate-100/50 dark:bg-white/[0.03] rounded-lg border border-slate-200/50 dark:border-white/5">
                                    <div className="flex items-end gap-[2px] h-2.5">
                                        <span className="w-1 h-full bg-emerald-500 rounded-sm animate-[pulse_1s_ease-in-out_Infinity]"></span>
                                        <span className="w-1 h-1.5 bg-emerald-500 rounded-sm animate-[pulse_1.5s_ease-in-out_Infinity]"></span>
                                        <span className="w-1 h-2 bg-emerald-500 rounded-sm animate-[pulse_2s_ease-in-out_Infinity]"></span>
                                    </div>
                                    <span className="text-[9px] font-bold uppercase tracking-widest text-slate-600 dark:text-slate-400">100% Owned</span>
                                </div>
                            </div>
                            
                            <div className="space-y-4 text-base text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                                <p>
                                    We build stores that you actually own. No monthly platform fees. No hidden commissions. Just pure profit.
                                </p>
                                <p>
                                    Stop paying rent to Shopify. Start processing direct FPX and credit card transactions straight to your Malaysian bank account securely.
                                </p>
                            </div>
                        </div>
                    </div>
                </m.div>
            </div>
        </div>

        {/* PAYMENT GATEWAYS */}
        <m.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-16 md:mb-32"
        >
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">Supported Payment Infrastructures</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {['Billplz (FPX)', 'ToyyibPay', 'Stripe (Cards)', 'GrabPay / TnG'].map((gateway, i) => (
                    <div key={i} className="p-6 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl flex flex-col items-center justify-center gap-4 hover:border-yellow-500/30 transition-all shadow-sm dark:shadow-none">
                        <CreditCard className="w-8 h-8 text-yellow-400" />
                        <span className="font-mono font-bold text-slate-700 dark:text-slate-300">{gateway}</span>
                    </div>
                ))}
            </div>
        </m.div>

        {/* CUSTOM 2-COLUMN PRICING SECTION */}
        <m.div 
            id="pricing"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-16 md:mb-32 pt-6 md:pt-12"
        >
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">Store Packages</h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Transparent pricing for your digital storefront. No hidden fees. Perfectly optimized for Malaysian businesses.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* Starter Store */}
                <div className="relative p-8 md:p-10 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 flex flex-col hover:border-yellow-500/30 transition-colors shadow-lg dark:shadow-none">
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-2">Starter Store: The Instant Checkout</h3>
                    <div className="mb-6">
                        <span className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">RM 1,500</span>
                        <span className="text-sm font-medium text-slate-500 dark:text-slate-400"> / one-time</span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium mb-8 flex-grow">
                        "Turn Your Brochure Website into a Cash Register." We add a shopping cart to your existing site in 48 hours.
                    </p>
                    <ul className="space-y-4 mb-10">
                        {["WooCommerce Integration", "Payment Gateway Setup (ToyyibPay/Stripe)", "10 Product Upload", "Auto-Invoice Generation"].map((feature, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm font-medium text-slate-700 dark:text-slate-300">
                                <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-yellow-500" />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                    <WhatsAppButton 
                        serviceName="E-Commerce"
                        packageLabel="Starter Store"
                        buttonText="Add Cart to Existing Site"
                        className="w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700 shadow-sm"
                    />
                </div>

                {/* The Zero-Fee Store */}
                <div className="relative p-8 md:p-10 rounded-[2.5rem] border border-yellow-500 bg-slate-900 text-white flex flex-col shadow-2xl scale-105 z-10">
                    <div className="absolute top-0 right-0 bg-yellow-500 text-black text-xs font-bold px-4 py-1.5 rounded-bl-xl rounded-tr-[2.5rem] uppercase tracking-widest shadow-lg">
                        Most Popular
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">The Zero-Fee Store</h3>
                    <div className="mb-6">
                        <span className="text-4xl md:text-5xl font-black text-white">RM 3,299</span>
                        <span className="text-sm font-medium text-slate-400"> / one-time</span>
                    </div>
                    <p className="text-slate-300 leading-relaxed font-medium mb-8 flex-grow">
                        "Stop Paying Rent to Shopify." A powerful online store with RM 0 monthly fees. Perfect for ambitious SMEs looking to scale.
                    </p>
                    <ul className="space-y-4 mb-10">
                        {["Full 5-Page E-Commerce Design", "FPX Banking (ToyyibPay/Billplz)", "Inventory System", "Shipping Logic (Sabah/Sarawak)", "WhatsApp Order Notifications"].map((feature, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm font-medium text-slate-200">
                                <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-yellow-400" />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                    <WhatsAppButton 
                        serviceName="E-Commerce"
                        packageLabel="The Zero-Fee Store"
                        buttonText="Build Zero-Fee Store"
                        className="w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all bg-yellow-500 hover:bg-yellow-400 text-black shadow-lg shadow-yellow-500/25"
                    />
                </div>
            </div>
        </m.div>

        {/* GATEWAY RESCUE & CALCULATOR */}
        <m.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 md:mb-32"
        >
            {/* Gateway Rescue */}
            <div className="p-6 md:p-10 bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] hover:border-red-500/30 transition-all relative overflow-hidden group shadow-lg dark:shadow-none">
                <div className="absolute top-0 right-0 p-6 md:p-10 opacity-5 group-hover:opacity-10 transition-opacity"><ShieldCheck size={150} /></div>
                <div className="relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-red-500/30 bg-red-100 dark:bg-red-900/10 text-red-600 dark:text-red-400 text-xs font-mono mb-6">
                        <Zap className="w-3 h-3" /> TECHNICAL FIX
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Gateway Rescue</h3>
                <div className="text-2xl font-bold text-slate-900 dark:text-white mb-4">RM 499 <span className="text-sm text-slate-600 dark:text-slate-400 font-normal">/flat fee</span></div>
                    <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                        Struggling with API keys? "Signature Invalid"? We fix it. We connect ToyyibPay, Stripe, or Billplz and prove it works with a test transaction.
                    </p>
                    <WhatsAppButton
                        serviceName="Gateway Rescue"
                        buttonText="Fix My Payment"
                        className="inline-flex items-center gap-2 text-red-400 font-bold hover:text-red-300 transition-colors"
                        showIcon={true}
                    />
                </div>
            </div>

            {/* Calculator / Value Prop */}
            <div className="p-6 md:p-10 bg-gradient-to-br from-yellow-50 to-slate-100 dark:from-yellow-900/20 dark:to-slate-900 border border-yellow-500/20 rounded-[2.5rem] flex flex-col justify-center shadow-lg dark:shadow-none">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Calculate Your Savings</h3>
                
                <div className="mb-10">
                    <div className="flex justify-between items-end mb-4">
                        <label className="text-slate-600 dark:text-slate-400 text-sm font-mono uppercase tracking-widest">
                            Monthly Sales Volume
                        </label>
                        <span className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white">RM {monthlySales.toLocaleString()}</span>
                    </div>
                    <input 
                        type="range" 
                        min="0" 
                        max="100000" 
                        step="1000" 
                        value={monthlySales} 
                        onChange={(e) => setMonthlySales(parseInt(e.target.value))}
                        className="w-full h-3 bg-slate-300 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-500/20"
                    />
                </div>

                <div className="space-y-4 mb-8">
                    <div className="flex justify-between items-center p-5 bg-red-100 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 rounded-xl shadow-sm">
                        <span className="text-red-600 dark:text-red-400 font-bold text-sm">Shopify Fees</span>
                        <span className="text-red-600 dark:text-red-400 font-mono font-bold text-lg">RM {estimatedLoss.toLocaleString()}<span className="text-xs opacity-70">/mo</span></span>
                    </div>
                    <div className="flex justify-between items-center p-5 bg-green-100 dark:bg-green-500/10 border border-green-200 dark:border-green-500/20 rounded-xl shadow-sm">
                        <span className="text-green-600 dark:text-green-400 font-bold text-sm">Omino Tech Fees</span>
                        <span className="text-green-600 dark:text-green-400 font-mono font-bold text-lg">RM 0<span className="text-xs opacity-70">/mo</span></span>
                    </div>
                </div>

                <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
                    You save <span className="text-slate-900 dark:text-white font-bold">RM {yearlySavings.toLocaleString()}</span> per year.
                    <span className="text-yellow-600 dark:text-yellow-400 font-bold italic text-sm mt-2 block">That pays for your entire website in {monthsToROI} months.</span>
                </p>
            </div>
        </m.div>

        {/* COMPARISON TABLE */}
        <m.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 md:mb-32 relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-orange-500/10 to-red-500/10 blur-3xl rounded-[3rem] opacity-50 transition-opacity duration-500 group-hover:opacity-80"></div>
          <div className="relative p-[1px] rounded-[2rem] md:rounded-[3rem] bg-gradient-to-b from-yellow-500/30 to-transparent dark:from-yellow-500/30 overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-1">
              <div className="relative bg-white/80 dark:bg-[#050505]/90 backdrop-blur-2xl p-8 md:p-16 rounded-[2rem] md:rounded-[3rem]">
                  <div className="text-center mb-12">
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-500/30 bg-yellow-50 dark:bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 text-xs font-mono font-bold uppercase tracking-widest mb-6">
                          <CheckCircle2 className="w-4 h-4" /> Market Comparison
                      </div>
                      <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter">The "No-Rent" Advantage</h2>
                  </div>
                  <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 shadow-sm">
                    <table className="w-full text-left border-collapse min-w-0 md:min-w-[800px]">
                      <thead>
                        <tr>
                      <th className="p-6 border-b border-slate-200 dark:border-slate-800 text-slate-500 font-mono text-xs uppercase tracking-widest w-1/3">Feature</th>
                          <th className="p-6 border-b border-slate-200 dark:border-slate-800 text-slate-500 font-bold text-lg w-1/3">Shopify (Them)</th>
                          <th className="p-6 border-b border-yellow-500/30 text-yellow-700 dark:text-yellow-400 font-bold text-lg bg-yellow-50 dark:bg-yellow-500/10 border-x border-t border-yellow-500/20 rounded-t-2xl w-1/3 relative shadow-inner">
                            Omino Tech Store (Us)
                            <div className="absolute -top-3 right-4 bg-yellow-500 text-black text-[10px] font-bold px-3 py-1 rounded-full shadow-lg">WINNER</div>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="text-sm text-slate-700 dark:text-slate-300">
                        {[
                          { feature: "Monthly Platform Fee", them: "RM 150 - RM 1,500 / mo", us: "RM 0 (Forever)" },
                          { feature: "Transaction Fee", them: "2.0% + Gateway Fee", us: "0% (You keep it all)" },
                          { feature: "Ownership", them: "They own your data", us: "You own your data" },
                          { feature: "Design", them: "Fixed Templates", us: "100% Custom" },
                          { feature: "Payment Options", them: "Limited", us: "Any Malaysian Gateway" },
                        ].map((row, i) => (
                          <tr key={i} className="group border-b border-slate-200 dark:border-slate-800 last:border-0 hover:bg-slate-50 dark:hover:bg-white/[0.02] transition-colors">
                            <td className="p-6 font-medium text-slate-700 dark:text-slate-300">{row.feature}</td>
                            <td className="p-6 font-mono text-red-500 dark:text-red-400">
                                {row.them}
                            </td>
                            <td className="p-6 font-mono font-bold bg-yellow-50 dark:bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 border-x border-yellow-500/20">
                              <span className="flex items-center gap-2"><Check size={16} className="text-yellow-500" /> {row.us}</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
              </div>
          </div>
        </m.div>

        {/* === E-COMMERCE FAQ SECTION (SEO / AEO) === */}
        <m.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-16 md:mb-32 max-w-4xl mx-auto"
        >
           <div className="text-center mb-12">
               <span className="font-mono text-yellow-600 dark:text-yellow-400 text-xs font-bold uppercase tracking-[0.2em] mb-4 block">Knowledge Base</span>
               <h2 className="text-2xl md:text-4xl font-bold text-slate-900 dark:text-white">E-Commerce FAQ</h2>
           </div>
           <div className="space-y-4">
              {faqs.map((item, i) => (
                 <div 
                    key={i} 
                    className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openFaq === i ?'border-yellow-500 bg-white dark:bg-slate-900 shadow-lg shadow-yellow-500/10' : 'border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/30 hover:border-yellow-500/30'}`}
                 >
                    <button 
                       onClick={() => setOpenFaq(openFaq === i ? null : i)}
                       className="w-full flex items-center justify-between p-6 text-left"
                    >
                       <h3 className={`font-bold text-lg md:text-xl ${openFaq === i ?'text-yellow-600 dark:text-yellow-500' : 'text-slate-900 dark:text-white'}`}>{item.q}</h3>
                       <div className={`p-2 rounded-full transition-colors flex-shrink-0 ${openFaq === i ?'bg-yellow-100 dark:bg-yellow-500/20 text-yellow-600 dark:text-yellow-500' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'}`}>
                          {openFaq === i ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                       </div>
                    </button>
                    <AnimatePresence>
                        {openFaq === i && (
                           <m.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                           >
                              <div className="p-6 pt-0 text-slate-600 dark:text-slate-400 leading-relaxed border-t border-transparent">
                                 <div className="pt-4 border-t border-dashed border-slate-200 dark:border-slate-800">
                                     {item.a}
                                 </div>
                              </div>
                           </m.div>
                        )}
                    </AnimatePresence>
                 </div>
              ))}
           </div>
        </m.div>

        {/* CTA */}
        <m.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center p-6 md:p-12 bg-gradient-to-b from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-950 rounded-[3rem] border border-slate-200 dark:border-slate-800"
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Ready to take payments?</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8">
            Stop asking customers to "bank in manually". Automate your sales today.
          </p>
          <WhatsAppButton
            serviceName="E-Commerce Inquiry"
            buttonText="Start Selling"
            className="inline-flex items-center gap-3 bg-yellow-500 text-black px-8 py-4 rounded-full font-bold hover:bg-yellow-400 transition-all"
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

export default EcommerceView;