import React from 'react';
import ServiceLayout from '../../layouts/ServiceLayout';
import { ShoppingBag, Zap, CreditCard, Server, CheckCircle } from 'lucide-react';

const ECommerce = () => {
  const pageData = {
    title: "HEADLESS COMMERCE",
    subtitle: "Milliseconds cost millions. We strip away the bloat to build lean, high-velocity transaction engines designed purely for conversion speed.",
    seoTitle: "Custom E-Commerce Development | Headless Architecture | SyncVision Labs",
    seoDescription: "High-performance E-Commerce sites. We use Headless architecture for sub-second load times, custom payment logic (ToyyibPay/Stripe), and maximum conversion.",
    
    features: [
      "Headless Architecture: Decoupled frontend for instant loading.",
      "Custom Payment Logic: Deep integration with local/global gateways.",
      "Inventory Algorithms: Automated stock management logic.",
      "Conversion UI: UX engineered to minimize friction and cart abandonment."
    ],
    
    caseStudy: {
      client: "Retail Client",
      result: "Managed Product Catalog & Plugin System"
    },
    
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "E-Commerce Development",
      "provider": { "@type": "Organization", "name": "SyncVision Labs" },
      "offers": {
        "@type": "Offer",
        "description": "Headless e-commerce architecture development."
      }
    },
    
    canonicalUrl: "https://syncvisionlabs.com/services/ecommerce",
    ogTitle: "Headless Commerce | SyncVision Labs",
    ogDescription: "Speed equals revenue. High-performance transaction engines.",
    ogImage: "https://syncvisionlabs.com/assets/ecommerce-preview.jpg"
  };

  return (
    <ServiceLayout {...pageData} heroIcon={ShoppingBag}>
      
      {/* SECTION 1: THE PHYSICAL GUIDE (THE SPEED LOGIC) */}
      <div className="space-y-24">
        
        {/* Intro */}
        <div className="border-t border-white/10 pt-20">
          <span className="font-mono text-indigo text-xs font-black uppercase tracking-[0.4em] mb-6 block">The Velocity Principle</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">Speed is the only feature that matters.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/[0.02] backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-lg">
              <Zap className="text-indigo-400 mb-6" size={32} />
              <h3 className="text-xl font-bold text-white mb-4">1. Instant Load</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Amazon found that 100ms latency costs 1% in sales. We build "Headless" sites that load instantly, keeping customers in the "Buying Trance."
              </p>
            </div>
            <div className="bg-white/[0.02] backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-lg">
              <CreditCard className="text-indigo-400 mb-6" size={32} />
              <h3 className="text-xl font-bold text-white mb-4">2. Custom Checkout</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Standard checkouts are clunky. We engineer a frictionless flow that integrates ToyyibPay, Stripe, or FPX directly without redirecting users away.
              </p>
            </div>
            <div className="bg-white/[0.02] backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-lg">
              <Server className="text-indigo-400 mb-6" size={32} />
              <h3 className="text-xl font-bold text-white mb-4">3. Inventory Logic</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We don't just display products. We write logic that auto-hides out-of-stock items, triggers low-stock alerts, and syncs with your warehouse.
              </p>
            </div>
          </div>
        </div>

        {/* Visual Graph */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="font-mono text-indigo-400 text-xs font-black uppercase tracking-[0.4em] mb-6 block">Architecture</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Headless vs. Monolith</h2>
            <p className="text-gray-400 mb-8">
              Traditional platforms (WordPress/WooCommerce) mix the database and design, creating a slow mess. We separate them.
            </p>
            <div className="bg-black/30 p-6 rounded-xl border border-white/10">
               <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-2">
                  <span className="text-white font-bold">Standard Store</span>
                  <span className="text-red-500 font-mono">3.5s Load</span>
               </div>
               <div className="flex justify-between items-center">
                  <span className="text-white font-bold">SyncVision Headless</span>
                  <span className="text-indigo-400 font-mono font-bold">0.4s Load</span>
               </div>
            </div>
          </div>
          
          <div className="bg-slate-900 border border-white/10 rounded-3xl p-8 flex flex-col justify-center shadow-2xl">
             <div className="flex items-center gap-4 mb-6">
                <ShoppingBag className="text-indigo-400" size={32} />
                <h3 className="text-2xl font-bold text-white">The Stack</h3>
             </div>
             <div className="space-y-3">
                <div className="p-4 bg-gray-900 rounded border border-gray-800 text-gray-400 text-sm">Frontend: <span className="text-white">React / Vite (Vercel)</span></div>
                <div className="p-4 bg-gray-900 rounded border border-gray-800 text-gray-400 text-sm">Database: <span className="text-white">Supabase / PostgreSQL</span></div>
                <div className="p-4 bg-gray-900 rounded border border-gray-800 text-gray-400 text-sm">Payment: <span className="text-white">Stripe / ToyyibPay API</span></div>
             </div>
          </div>
        </div>

        {/* SECTION 2: PRICING PACKAGES */}
        <div className="border-t border-white/10 pt-20">
          <div className="text-center mb-16">
            <span className="font-mono text-indigo-400 text-xs font-black uppercase tracking-[0.4em] mb-4 block">Store Infrastructure</span>
            <h2 className="text-4xl font-bold text-white">Select Architecture</h2>
            <p className="text-gray-400 mt-4">Built for scale. No monthly platform fees (unlike Shopify).</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* TIER 1 */}
            <div className="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-indigo-500/50 transition-colors relative group shadow-xl">
              <h3 className="text-lg font-bold text-white mb-2">DIRECT STORE</h3>
              <div className="text-3xl font-mono font-black text-indigo-400 mb-6">RM 0 <span className="text-sm text-gray-500 font-normal">/ est</span></div>
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-8 border-b border-white/10 pb-8">Single Product</p>
              <ul className="space-y-4 mb-8">
                <li className="text-sm text-gray-300 flex gap-3"><CheckCircle size={16} className="text-indigo-500" /> High-Conversion Landing Page</li>
                <li className="text-sm text-gray-300 flex gap-3"><CheckCircle size={16} className="text-indigo-500" /> Payment Gateway Integration</li>
                <li className="text-sm text-gray-300 flex gap-3"><CheckCircle size={16} className="text-indigo-500" /> Admin Notification System</li>
                <li className="text-sm text-gray-300 flex gap-3"><CheckCircle size={16} className="text-indigo-500" /> Basic SEO Setup</li>
              </ul>
              <button className="w-full py-3 border border-white/20 rounded-lg text-sm font-bold text-white hover:bg-white hover:text-black transition-all">Launch Direct</button>
            </div>

            {/* TIER 2 (Highlighted) */}
            <div className="bg-slate-900 border border-indigo-500 rounded-2xl p-8 relative transform md:-translate-y-4 shadow-2xl shadow-indigo-500/20">
              <div className="absolute top-0 right-0 bg-indigo-500 text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest rounded-bl-lg">Recommended</div>
              <h3 className="text-lg font-bold text-white mb-2">HEADLESS RETAIL</h3>
              <div className="text-3xl font-mono font-black text-indigo-400 mb-6">RM 0 <span className="text-sm text-gray-500 font-normal">/ est</span></div>
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-8 border-b border-white/10 pb-8">Full Catalog</p>
              <ul className="space-y-4 mb-8">
                <li className="text-sm text-gray-300 flex gap-3"><CheckCircle size={16} className="text-indigo-500" /> Custom React Frontend</li>
                <li className="text-sm text-white font-bold flex gap-3"><CheckCircle size={16} className="text-indigo-500" /> Full Inventory Management</li>
                <li className="text-sm text-gray-300 flex gap-3"><CheckCircle size={16} className="text-indigo-500" /> User Accounts & History</li>
                <li className="text-sm text-gray-300 flex gap-3"><CheckCircle size={16} className="text-indigo-500" /> Analytics Dashboard</li>
                <li className="text-sm text-gray-300 flex gap-3"><CheckCircle size={16} className="text-indigo-500" /> Discount Code Logic</li>
              </ul>
              <button className="w-full py-3 bg-indigo-600 rounded-lg text-sm font-bold text-white hover:bg-indigo-500 transition-all">Launch Store</button>
            </div>

            {/* TIER 3 */}
            <div className="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-indigo-500/50 transition-colors relative group shadow-xl">
              <h3 className="text-lg font-bold text-white mb-2">MARKETPLACE</h3>
              <div className="text-3xl font-mono font-black text-indigo-400 mb-6">RM 0 <span className="text-sm text-gray-500 font-normal">/ est</span></div>
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-8 border-b border-white/10 pb-8">Multi-Vendor</p>
              <ul className="space-y-4 mb-8">
                <li className="text-sm text-gray-300 flex gap-3"><CheckCircle size={16} className="text-indigo-500" /> Multi-Vendor Capabilities</li>
                <li className="text-sm text-gray-300 flex gap-3"><CheckCircle size={16} className="text-indigo-500" /> Advanced Commission Logic</li>
                <li className="text-sm text-gray-300 flex gap-3"><CheckCircle size={16} className="text-indigo-500" /> Realtime Logistics Tracking</li>
                <li className="text-sm text-gray-300 flex gap-3"><CheckCircle size={16} className="text-indigo-500" /> Dedicated Server Setup</li>
              </ul>
              <button className="w-full py-3 border border-white/20 rounded-lg text-sm font-bold text-white hover:bg-white hover:text-black transition-all">Contact Us</button>
            </div>
          </div>
        </div>

      </div>
    </ServiceLayout>
  );
};

export default ECommerce;