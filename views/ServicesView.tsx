import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Code, Smartphone, ShoppingBag, 
  Bot, BarChart, HardDrive, ArrowRight, CheckCircle2, ShieldCheck 
} from 'lucide-react'; 

// === MASTER STRATEGY: MALAYSIA SEO & GEO ===
// Keywords Targeted: "SME Web Design", "FPX Payment", "WhatsApp Bot", "Google Maps Ranking"
// Why: These are high-intent keywords. People searching these are ready to spend money.

const services = [
  {
    id: 'web-development',
    // TITLE UPDATE: Hits both "Custom" and "WordPress" searchers
    title: 'Custom Web Development & WordPress', 
    // DESCRIPTION UPDATE: Mentions "SME" and speed metrics for GEO trust
    description: 'We engineer high-performance websites for Malaysian SMEs and Startups. Whether you need a proprietary Next.js Web App or an easy-to-edit WordPress (Elementor) site, we guarantee <2s load times.',
    features: ['Custom React/Next.js Coding', 'Enterprise WordPress Design', '100% Source Code Ownership'],
    icon: <Code className="w-8 h-8 text-indigo-400" />,
    link: '/services/web-architecture',
    tags: ['NextJS', 'Elementor', 'React']
  },
  {
    id: 'mobile-app',
    title: 'iOS & Android App Development',
    // DESCRIPTION UPDATE: Focuses on "Play Store" and "Internal System"
    description: 'Launch your own mobile app on the Apple App Store and Google Play Store. We build "Offline-First" Flutter apps perfect for internal company operations, loyalty programs, or customer portals.',
    features: ['Cross-Platform (Flutter)', 'Offline Database Sync', 'Push Notifications'],
    icon: <Smartphone className="w-8 h-8 text-blue-400" />,
    link: '/services/app-engineering',
    tags: ['Flutter', 'iOS', 'Android']
  },
  {
    id: 'seo-ranking',
    title: 'SEO & Google Map Ranking', 
    // DESCRIPTION UPDATE: Adds "Google Maps" (Critical for local businesses)
    description: 'Dominate the search results. We optimize your site for "Google Malaysia" and "Google Maps" (Local Pack). We use advanced Schema Markup so AI engines like Gemini recommend you first.',
    features: ['Rank #1 on Google Malaysia', 'Google Map Pack Optimization', 'Programmatic SEO'],
    icon: <BarChart className="w-8 h-8 text-green-400" />,
    link: '/services/seo-dominance',
    tags: ['Local SEO', 'Schema', 'Traffic']
  },
  {
    id: 'ai-chatbots',
    title: 'WhatsApp Automation & AI Agents',
    // DESCRIPTION UPDATE: Hits the "WhatsApp" keyword hard
    description: 'Automate your customer service. We deploy intelligent AI Bots (Gemini/OpenAI) that plug directly into WhatsApp to answer inquiries, qualify leads, and close sales 24/7 without human fatigue.',
    features: ['WhatsApp Business API', 'Auto-Reply Workflows', 'Lead Qualification'],
    icon: <Bot className="w-8 h-8 text-purple-400" />,
    link: '/services/automation',
    tags: ['WhatsApp', 'Chatbots', 'Gemini']
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce & Payment Gateways',
    // DESCRIPTION UPDATE: Specifically names Malaysian banks/gateways
    description: 'Sell to customers using local banking. We integrate secure Payment Gateways (Stripe, ToyyibPay, Billplz) so you can accept FPX, Credit Cards, and E-Wallets immediately.',
    features: ['WooCommerce / Shopify', 'FPX & ToyyibPay Integration', 'Secure Checkout Flow'],
    icon: <ShoppingBag className="w-8 h-8 text-yellow-400" />,
    link: '/services/ecommerce',
    tags: ['Billplz', 'Stripe', 'FPX']
  },
  {
    id: 'web-management',
    title: 'Website Management & DevOps',
    // DESCRIPTION UPDATE: Focus on "Internal Team" and "Security" for long-term value
    description: 'Your dedicated technical team. We handle 24/7 uptime monitoring, security patches, and content updates so you never have to worry about your site going down.',
    features: ['24/7 Uptime Monitoring', 'Daily Security Backups', 'Plugin & Core Updates', 'Priority Support'],
    icon: <ShieldCheck className="w-8 h-8 text-cyan-400" />,
    link: '/services/web-management',
    tags: ['DevOps', 'Security', 'Updates']
  },
  {
    id: 'server-setup',
    title: 'Domain, Email & Server Setup',
    // DESCRIPTION UPDATE: Solves the "Boss" problem (Email)
    description: 'Stop fighting with technology. We handle the technical "plumbing" for you. We register your .com/.my domain, configure fast Cloud Hosting, and set up professional "boss@company.com" emails.',
    features: ['Domain Reg (.com / .my)', 'Corporate Email Setup', 'Free SSL Security'],
    icon: <HardDrive className="w-8 h-8 text-slate-400" />,
    link: '/services/server-setup',
    tags: ['Titan Email', 'DNS', 'Hosting']
  }
];

const ServicesView: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-slate-200 font-sans selection:bg-indigo-500/30">
      
      {/* === ULTIMATE SEO HEAD === */}
      {/* Targeted specifically for Malaysian Business Owners */}
      <Helmet>
        <title>Services | Web Design, App Dev & SEO Malaysia - SyncVision Labs</title>
        <meta name="description" content="Top-rated Digital Agency in Malaysia. We provide Custom Web Development, Mobile Apps (Flutter), WhatsApp Chatbots, and SEO Ranking for SMEs. View our pricelist." />
        <meta name="keywords" content="Web Design Malaysia, Mobile App Developer KL, SEO Expert Malaysia, WhatsApp Bot, Company Email Setup, FPX Payment Integration, React Developer" />
        
        {/* GEO: Open Graph for Social Sharing (WhatsApp/LinkedIn) */}
        <meta property="og:title" content="SyncVision Labs - Digital Engineering" />
        <meta property="og:description" content="We build high-performance websites and AI systems for Malaysian businesses." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        
        {/* HERO SECTION */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-900/30 border border-indigo-500/30 mb-6">
            <ShieldCheck className="w-4 h-4 text-indigo-400" />
            <span className="text-indigo-300 text-xs font-bold tracking-wider uppercase">Engineered in Malaysia</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-white">
            TECHNICAL <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
              INFRASTRUCTURE.
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            From deep-tech <span className="text-indigo-400">Custom Engineering</span> to rapid <span className="text-pink-400">WordPress Deployment</span>. We provide the exact technical solution your business needs to scale.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link 
              to={service.link} 
              key={service.id}
              className="group relative bg-slate-900/40 border border-slate-800 rounded-2xl p-8 hover:bg-slate-900/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(99,102,241,0.1)] overflow-hidden"
            >
              {/* Laser Hover Effect */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

              {/* Icon & Title */}
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 group-hover:border-indigo-500/40 transition-colors">
                  {service.icon}
                </div>
                <ArrowRight className="w-5 h-5 text-slate-600 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors">
                {service.title}
              </h3>

              <p className="text-slate-400 mb-8 leading-relaxed text-sm">
                {service.description}
              </p>

              {/* GEO Optimized Bullet Points */}
              <ul className="space-y-3 mb-8 border-t border-slate-800/50 pt-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-indigo-500" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Tech Tags for AI Recognition */}
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 text-xs font-mono rounded-full bg-slate-950 border border-slate-800 text-slate-400 group-hover:border-indigo-500/30 transition-colors">
                    #{tag}
                  </span>
                ))}
              </div>

            </Link>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <div className="mt-24 text-center">
          <p className="text-slate-500 mb-6 uppercase tracking-widest text-xs font-bold">
            Project Availability: Open for Q1 2026
          </p>
          <div className="inline-block p-[1px] rounded-full bg-gradient-to-r from-indigo-500 to-purple-500">
            <Link to="/contact" className="block bg-[#0a0a0a] rounded-full px-10 py-4 text-white font-bold hover:bg-slate-900 transition-all">
              Initialize Consultation &rarr;
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ServicesView;