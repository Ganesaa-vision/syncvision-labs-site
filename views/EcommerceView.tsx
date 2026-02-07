import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, CreditCard, Truck, ArrowRight, CheckCircle2, X, Check, Zap, Globe, ShieldCheck } from 'lucide-react';
import PricingSection from '../components/PricingSection';

const EcommerceView: React.FC = () => {
  const { pathname } = useLocation();
  const [monthlySales, setMonthlySales] = useState(10000);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const shopifyMonthly = 150; 
  const shopifyTransFee = 0.025; 
  const estimatedLoss = Math.round(shopifyMonthly + (monthlySales * shopifyTransFee));
  const yearlySavings = estimatedLoss * 12;
  const monthsToROI = estimatedLoss > 0 ? (3299 / estimatedLoss).toFixed(1) : "0";

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-slate-200 font-sans selection:bg-yellow-500/30">
      <Helmet>
        <title>E-Commerce Development & Payment Gateway Integration | Malaysia</title>
        <meta name="description" content="Build a high-converting online store. We integrate FPX Payment Gateways (Billplz, ToyyibPay, Stripe) and build on WooCommerce or Shopify. Sell to Malaysian customers instantly." />
        <meta name="keywords" content="E-commerce Malaysia, Payment Gateway Integration, WooCommerce Developer, Shopify Expert, FPX Payment, Billplz, Stripe Malaysia" />
      </Helmet>

      <div className="pt-24 md:pt-32 pb-12 md:pb-20 px-6 max-w-7xl mx-auto">
        {/* HERO */}
        <div className="mb-24 text-center md:text-left">
          <span className="font-mono text-yellow-400 text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Digital Commerce</span>
          <h1 className="text-4xl md:text-7xl font-bold tracking-tighter text-white mb-8 leading-tight">
            TURN YOUR WEBSITE INTO A <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">CASH REGISTER.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
            We build stores that you actually own. No monthly platform fees. No hidden commissions. Just pure profit. Stop paying rent to Shopify.
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

        {/* PRICING */}
        <PricingSection 
          title="Store Packages"
          description="Transparent pricing for your digital storefront. No hidden fees."
          plans={[
            {
              name: "Starter Store: The Instant Checkout",
              price: "RM 1,500",
              period: "/one-time",
              description: "\"Turn Your Brochure Website into a Cash Register.\" We add a shopping cart to your existing site in 48 hours.",
              features: ["WooCommerce Integration", "Payment Gateway Setup (ToyyibPay/Stripe)", "10 Product Upload", "Auto-Invoice Generation"],
              buttonText: "Add Cart"
            },
            {
              name: "The Zero-Fee Store",
              price: "RM 3,299",
              period: "/one-time",
              description: "\"Stop Paying Rent to Shopify.\" A powerful online store with RM 0 monthly fees. Perfect for Malaysian SMEs.",
              features: ["Full 5-Page E-Commerce Design", "FPX Banking (ToyyibPay/Billplz)", "Inventory System", "Shipping Logic (Sabah/Sarawak)", "WhatsApp Order Notifications"],
              isPopular: true,
              buttonText: "Build Store"
            },
            {
              name: "The Empire Builder",
              price: "RM 6,500",
              period: "/one-time",
              description: "\"The Store That Sells While You Sleep.\" For brands ready to dominate globally.",
              features: ["Global Payments (USD/SGD)", "Abandoned Cart Recovery", "Dynamic Coupons", "Customer Accounts", "Sales Analytics Dashboard"],
              buttonText: "Scale Empire"
            }
          ]}
        />

        {/* GATEWAY RESCUE & CALCULATOR */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-32">
            {/* Gateway Rescue */}
            <div className="p-10 bg-slate-900/40 border border-slate-800 rounded-[2.5rem] hover:border-red-500/30 transition-all relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity"><ShieldCheck size={150} /></div>
                <div className="relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-red-500/30 bg-red-900/10 text-red-400 text-xs font-mono mb-6">
                        <Zap className="w-3 h-3" /> TECHNICAL FIX
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">Gateway Rescue</h3>
                    <div className="text-2xl font-bold text-white mb-4">RM 499 <span className="text-sm text-slate-500 font-normal">/flat fee</span></div>
                    <p className="text-slate-400 mb-8 leading-relaxed">
                        Struggling with API keys? "Signature Invalid"? We fix it. We connect ToyyibPay, Stripe, or Billplz and prove it works with a test transaction.
                    </p>
                    <Link to="/contact" className="inline-flex items-center gap-2 text-red-400 font-bold hover:text-red-300 transition-colors">
                        Fix My Payment <ArrowRight size={16} />
                    </Link>
                </div>
            </div>

            {/* Calculator / Value Prop */}
            <div className="p-10 bg-gradient-to-br from-yellow-900/20 to-slate-900 border border-yellow-500/20 rounded-[2.5rem] flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-white mb-6">Calculate Your Savings</h3>
                
                <div className="mb-8">
                    <label className="text-slate-400 text-sm font-mono uppercase tracking-widest mb-4 block">
                        Monthly Sales Volume: <span className="text-white font-bold">RM {monthlySales.toLocaleString()}</span>
                    </label>
                    <input 
                        type="range" 
                        min="0" 
                        max="100000" 
                        step="1000" 
                        value={monthlySales} 
                        onChange={(e) => setMonthlySales(parseInt(e.target.value))}
                        className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-yellow-500"
                    />
                </div>

                <div className="space-y-4 mb-8">
                    <div className="flex justify-between items-center p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                        <span className="text-red-400 font-bold text-sm">Shopify Fees</span>
                        <span className="text-red-400 font-mono font-bold">RM {estimatedLoss.toLocaleString()}<span className="text-xs opacity-70">/mo</span></span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
                        <span className="text-green-400 font-bold text-sm">SyncVision Fees</span>
                        <span className="text-green-400 font-mono font-bold">RM 0<span className="text-xs opacity-70">/mo</span></span>
                    </div>
                </div>

                <p className="text-slate-300 text-lg leading-relaxed">
                    You save <span className="text-white font-bold">RM {yearlySavings.toLocaleString()}</span> per year.
                    <span className="text-yellow-400 font-bold italic text-sm mt-2 block">That pays for your entire website in {monthsToROI} months.</span>
                </p>
            </div>
        </div>

        {/* COMPARISON TABLE */}
        <div className="mb-32">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">The "No-Rent" Advantage</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr>
                  <th className="p-6 border-b border-slate-800 text-slate-500 font-mono text-xs uppercase tracking-widest w-1/3">Feature</th>
                  <th className="p-6 border-b border-slate-800 text-slate-400 font-bold text-lg w-1/3">Shopify (Them)</th>
                  <th className="p-6 border-b border-yellow-500/30 text-yellow-400 font-bold text-lg bg-yellow-900/10 rounded-t-2xl w-1/3 relative">
                    SyncVision Store (Us)
                    <div className="absolute top-0 right-0 -mt-3 -mr-3 bg-yellow-500 text-black text-[10px] font-bold px-2 py-1 rounded-full">WINNER</div>
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm text-slate-300">
                {[
                  { feature: "Monthly Platform Fee", them: "RM 150 - RM 1,500 / mo", us: "RM 0 (Forever)" },
                  { feature: "Transaction Fee", them: "2.0% + Gateway Fee", us: "0% (You keep it all)" },
                  { feature: "Ownership", them: "They own your data", us: "You own your data" },
                  { feature: "Design", them: "Fixed Templates", us: "100% Custom" },
                  { feature: "Payment Options", them: "Limited", us: "Any Malaysian Gateway" },
                ].map((row, i) => (
                  <tr key={i} className="group hover:bg-slate-900/30 transition-colors">
                    <td className="p-6 border-b border-slate-800/50 font-medium text-slate-400">{row.feature}</td>
                    <td className="p-6 border-b border-slate-800/50 font-mono text-red-400">
                        {row.them}
                    </td>
                    <td className="p-6 border-b border-slate-800/50 font-mono bg-yellow-900/5 text-yellow-100 font-bold">
                      {row.us === 'RM 0 (Forever)' || row.us === '0% (You keep it all)' ? (
                          <span className="flex items-center gap-2 text-green-400"><Check size={16} /> {row.us}</span>
                      ) : (
                          <span className="flex items-center gap-2"><Check size={16} /> {row.us}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

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