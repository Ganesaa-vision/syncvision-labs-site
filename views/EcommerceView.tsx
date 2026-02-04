import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, CreditCard, Truck, ArrowRight, CheckCircle2 } from 'lucide-react';
import PricingSection from '../components/PricingSection';

const EcommerceView: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-slate-200 font-sans selection:bg-yellow-500/30">
      <Helmet>
        <title>E-Commerce Development & Payment Gateway Integration | Malaysia</title>
        <meta name="description" content="Build a high-converting online store. We integrate FPX Payment Gateways (Billplz, ToyyibPay, Stripe) and build on WooCommerce or Shopify. Sell to Malaysian customers instantly." />
        <meta name="keywords" content="E-commerce Malaysia, Payment Gateway Integration, WooCommerce Developer, Shopify Expert, FPX Payment, Billplz, Stripe Malaysia" />
      </Helmet>

      <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        {/* HERO */}
        <div className="mb-24 text-center md:text-left">
          <span className="font-mono text-yellow-400 text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Digital Commerce</span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-8">
            SELL <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">ONLINE.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
            We build secure, high-speed online stores designed for the Malaysian market. From 
            <span className="text-white font-bold"> FPX Banking</span> integration to automated shipping calculation, we handle the technical complexity so you can focus on selling.
          </p>
        </div>

        {/* PAYMENT GATEWAYS */}
        <div className="mb-32">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Supported Payment Infrastructures</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {['Billplz (FPX)', 'ToyyibPay', 'Stripe (Cards)', 'GrabPay / TnG'].map((gateway, i) => (
                    <div key={i} className="p-6 bg-slate-900/50 border border-slate-800 rounded-xl flex flex-col items-center justify-center gap-4 hover:border-yellow-500/30 transition-all">
                        <CreditCard className="w-8 h-8 text-yellow-400" />
                        <span className="font-mono font-bold text-slate-300">{gateway}</span>
                    </div>
                ))}
            </div>
        </div>

        {/* PLATFORMS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
          <div className="p-10 bg-slate-900/40 border border-slate-800 rounded-3xl hover:border-purple-500/30 transition-all">
            <ShoppingBag className="w-12 h-12 text-purple-400 mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">WooCommerce (WordPress)</h3>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Best for SMEs who want full ownership. No monthly platform fees. Highly customizable with thousands of plugins for shipping and marketing.
            </p>
            <ul className="space-y-3">
              {['Zero Monthly Fees', 'Full Data Ownership', 'EasyParcel Integration', 'SEO Friendly'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-purple-500" /> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-10 bg-slate-900/40 border border-slate-800 rounded-3xl hover:border-green-500/30 transition-all">
            <Truck className="w-12 h-12 text-green-400 mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Shopify Setup</h3>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Best for rapid scaling. We set up your professional Shopify store, configure the theme, and link your domain and payments in record time.
            </p>
            <ul className="space-y-3">
              {['Fastest Launch Time', 'Reliable Hosting Included', 'App Store Ecosystem', '24/7 Shopify Support'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-green-500" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* PRICING */}
        <PricingSection 
          title="Store Packages"
          description="Transparent pricing for your digital storefront. No hidden fees."
          plans={[
            {
              name: "Starter Store",
              price: "RM 2,800",
              description: "Perfect for new brands. Get online fast with a professional WooCommerce setup.",
              features: ["WooCommerce Setup", "Standard Premium Theme", "FPX Payment (Billplz)", "Up to 20 Products", "Basic SEO Setup"],
              buttonText: "Launch Starter"
            },
            {
              name: "Growth Brand",
              price: "RM 4,800",
              description: "For serious sellers. Custom design touches and marketing automation.",
              features: ["Custom UI/UX Design", "Abandoned Cart Recovery", "Advanced Product Filters", "Speed Optimization (A)", "Google Analytics 4"],
              isPopular: true,
              buttonText: "Start Growing"
            },
            {
              name: "Shopify Scale",
              price: "RM 6,500",
              description: "Rapid scaling on Shopify's robust infrastructure.",
              features: ["Shopify Store Setup", "Theme Customization", "App Integrations", "Pixel & Meta API", "1 Month Support"],
              buttonText: "Go Shopify"
            }
          ]}
        />

        {/* CTA */}
        <div className="text-center p-12 bg-gradient-to-b from-slate-900 to-slate-950 rounded-[3rem] border border-slate-800">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to take payments?</h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-8">
            Stop asking customers to "bank in manually". Automate your sales today.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-3 bg-yellow-500 text-black px-8 py-4 rounded-full font-bold hover:bg-yellow-400 transition-all">
            Start Selling <ArrowRight size={18} />
          </Link>
        </div>

      </div>
    </div>
  );
};

export default EcommerceView;