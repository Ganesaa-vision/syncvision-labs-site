import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation } from 'react-router-dom';
import { 
  Code, Smartphone, ShoppingBag, 
  Bot, BarChart, HardDrive, ArrowRight, CheckCircle2, ShieldCheck,
  MapPin, Phone, Mail, Building2, ChevronDown, ChevronUp
} from 'lucide-react'; 
import { motion } from 'framer-motion';

// === MASTER STRATEGY: MALAYSIA SEO & GEO ===
// Keywords Targeted: "SME Web Design", "FPX Payment", "WhatsApp Bot", "Google Maps Ranking"
// Why: These are high-intent keywords. People searching these are ready to spend money.

const services = [
  {
    id: 'web-development',
    title: 'High-Performance Web Engineering',
    description: 'Stop losing customers to slow websites. We engineer digital assets for Malaysian SMEs and Startups that load in under 2 seconds. Whether you need a proprietary Next.js Web App for total control or an easy-to-edit WordPress (Elementor) site for marketing speed, we build for conversion first.',
    features: [
      'Custom React/Next.js Coding: "Server-Side Rendering (SSR) for instant Google indexing and app-like speed."',
      'Enterprise WordPress Design: "Lightweight, bloat-free Elementor builds that score 90+ on Core Web Vitals."',
      '100% Source Code Ownership: "You own the IP. No vendor lock-in."'
    ],
    technicalStandard: [
      { label: 'Speed', value: 'Guaranteed <2s First Contentful Paint (FCP) on local 4G networks.' },
      { label: 'Compliance', value: 'Structure optimized for PDPA Malaysia data requirements.' }
    ],
    icon: <Code className="w-8 h-8 text-indigo-400" />,
    link: '/services/web-architecture',
    tags: ['NextJS', 'Elementor', 'React']
  },
  {
    id: 'mobile-app',
    title: 'Cross-Platform Mobile Ecosystems',
    description: 'Launch your own mobile app on the Apple App Store and Google Play Store. We specialize in "Offline-First" Flutter apps—perfect for Malaysian field operations where internet coverage can be spotty. Ideal for internal company tools, loyalty programs, and customer portals.',
    features: [
      'Cross-Platform (Flutter): "One codebase, two native apps. Save 40% on development costs."',
      'Offline Database Sync: "Your team can work without internet; data syncs automatically when online."',
      'Push Notifications: "Direct marketing channel to your customers\' pockets."'
    ],
    technicalStandard: [
      { label: 'Architecture', value: 'Scalable MVVM architecture for easy future updates.' },
      { label: 'Security', value: 'Biometric login (FaceID/Fingerprint) integration standard.' }
    ],
    icon: <Smartphone className="w-8 h-8 text-blue-400" />,
    link: '/services/app-engineering',
    tags: ['Flutter', 'iOS', 'Android']
  },
  {
    id: 'seo-ranking',
    title: 'Dominate "Google Malaysia" Search Results',
    description: 'We don\'t guess; we engineer rankings. We optimize your site specifically for "Google.com.my" and the "Local Map Pack". Using advanced Schema Markup, we ensure AI engines like Gemini and ChatGPT recommend you as the top authority.',
    features: [
      'Rank #1 on Google Malaysia: "Proven strategies that achieved Rank #1 in 17 Days for industrial keywords."',
      'Google Map Pack Optimization: "Capture the \'Near Me\' traffic in Balakong, Cheras, and KL."',
      'Programmatic SEO: "Generate thousands of landing pages to capture long-tail search traffic."'
    ],
    technicalStandard: [
      { label: 'Strategy', value: '"White-Hat" link building from Malaysian directories.' },
      { label: 'AEO', value: 'Voice-search optimized FAQ schema implementation.' }
    ],
    icon: <BarChart className="w-8 h-8 text-green-400" />,
    link: '/services/seo-service',
    tags: ['Local SEO', 'Schema', 'Traffic']
  },
  {
    id: 'ai-chatbots',
    title: '24/7 Automated Sales & Support',
    description: 'Your customers are on WhatsApp. Be there instantly. We deploy intelligent AI Bots (Gemini/OpenAI) that plug directly into WhatsApp to answer inquiries, qualify leads, and close sales 24/7—eliminating human fatigue and missed messages.',
    features: [
      'WhatsApp Business API: "Official \'Green Tick\' ready verification setup."',
      'Auto-Reply Workflows: "Instant pricing, brochures, and location sharing."',
      'Lead Qualification: "Filter serious buyers from window shoppers automatically."'
    ],
    technicalStandard: [
      { label: 'Logic', value: 'Custom Python scripts handling 500+ daily conversations.' },
      { label: 'Language', value: 'Tuned to understand "Manglish" (Malaysian English) nuances.' }
    ],
    icon: <Bot className="w-8 h-8 text-purple-400" />,
    link: '/services/automation',
    tags: ['WhatsApp', 'Chatbots', 'Gemini']
  },
  {
    id: 'ecommerce',
    title: 'Seamless Digital Transactions',
    description: 'Sell to customers using their preferred local banking methods. We integrate secure Malaysian Payment Gateways (Stripe, ToyyibPay, Billplz) so you can accept FPX Online Banking, Credit Cards, and E-Wallets (GrabPay/TnG) immediately.',
    features: [
      'WooCommerce / Shopify: "Custom stores built to convert visitors into buyers."',
      'FPX & ToyyibPay Integration: "Lowest transaction fees for high-volume local sellers."',
      'Secure Checkout Flow: "SSL-encrypted payment processing."'
    ],
    technicalStandard: [
      { label: 'Speed', value: '"One-Click" checkout optimization to reduce cart abandonment.' },
      { label: 'Logistics', value: 'API integration with EasyParcel/Lalamove available.' }
    ],
    icon: <ShoppingBag className="w-8 h-8 text-yellow-400" />,
    link: '/services/ecommerce',
    tags: ['Billplz', 'Stripe', 'FPX']
  },
  {
    id: 'web-management',
    title: 'Your Dedicated Technical Team',
    description: 'Stop worrying about hacks and downtime. We handle the 24/7 uptime monitoring, security patches, and content updates. We act as your external CTO, ensuring your digital assets are always live and secure.',
    features: [
      '24/7 Uptime Monitoring: "We know if your site is down before you do."',
      'Daily Security Backups: "Disaster recovery plans that restore your site in minutes."',
      'Plugin & Core Updates: "Prevent breaking changes with managed updates."'
    ],
    technicalStandard: [
      { label: 'Protection', value: 'Enterprise-grade WAF (Web Application Firewall) setup.' },
      { label: 'Performance', value: 'Monthly database optimization and cache clearing.' }
    ],
    icon: <ShieldCheck className="w-8 h-8 text-cyan-400" />,
    link: '/services/web-management',
    tags: ['DevOps', 'Security', 'Updates']
  },
  {
    id: 'server-setup',
    title: 'Professional Digital Identity',
    description: 'Stop fighting with technology. We handle the technical "plumbing." We register your .com / .com.my domain, configure fast Cloud Hosting (NVMe), and set up professional "boss@company.com" emails that land in the Inbox, not Spam.',
    features: [
      'Domain Registration: "Secure your brand identity with .com.my (SSM required) or .com."',
      'Corporate Email Setup: "Titan Email or Google Workspace configuration."',
      'Free SSL Security: "The \'Padlock\' icon that builds customer trust."'
    ],
    technicalStandard: [
      { label: 'Deliverability', value: 'Full SPF, DKIM, & DMARC authentication records.' },
      { label: 'Infrastructure', value: 'Hosted on Singapore Nodes for lowest latency in Malaysia.' }
    ],
    icon: <HardDrive className="w-8 h-8 text-slate-400" />,
    link: '/services/server-setup',
    tags: ['Titan Email', 'DNS', 'Hosting']
  }
];

const faqs = [
  { q: "How much does a website cost in Malaysia?", a: "Custom corporate websites at Ominos Tech start from RM 1,500. Advanced E-commerce or Next.js Web Apps typically range from RM 3,500 to RM 15,000 depending on features." },
  { q: "Can you integrate ToyyibPay or Billplz?", a: "Yes. We specialize in integrating local Malaysian payment gateways like ToyyibPay, Billplz, and Stripe for seamless FPX and credit card transactions." },
  { q: "Do you offer website maintenance?", a: "Yes. Our DevOps team provides 24/7 uptime monitoring and security updates to keep your business safe from cyber threats." }
];

const ServicesView: React.FC = () => {
  const { pathname } = useLocation();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-slate-200 font-sans selection:bg-indigo-500/30">
      
      {/* === ULTIMATE SEO HEAD === */}
      {/* Targeted specifically for Malaysian Business Owners */}
      <Helmet>
        <title>Ominos Tech | Web Design & App Development Agency Malaysia (Selangor)</title>
        <meta name="description" content="Top-rated Digital Agency in Malaysia (Selangor & KL). We provide Custom Web Development, Mobile Apps, and SME Digital Grant solutions. SSM Registered." />
        <meta name="keywords" content="Web Design Malaysia, Mobile App Developer KL, SEO Expert Malaysia, SME Digital Grant, SSM Registered, Balakong, Selangor, Payment Gateway Integration" />
        
        {/* GEO: Open Graph for Social Sharing (WhatsApp/LinkedIn) */}
        <meta property="og:title" content="Ominos Tech - Web Design & App Development Agency Malaysia" />
        <meta property="og:description" content="We build high-performance websites and AI systems for Malaysian businesses." />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Background Ambient Glow */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 pt-24 md:pt-32 pb-12 md:pb-20 px-6 max-w-7xl mx-auto">
        
        {/* HERO SECTION */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-900/30 border border-indigo-500/30 mb-6">
            <ShieldCheck className="w-4 h-4 text-indigo-400" />
            <span className="text-indigo-300 text-xs font-bold tracking-wider uppercase">Engineered in Malaysia</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 text-white leading-tight">
            Complete Digital Infrastructure <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
              for Malaysian Businesses
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            From custom Next.js engineering to rapid WordPress deployment. We provide the exact technical solutions your business needs to scale in the digital economy.
          </p>
        </motion.div>

        {/* TRUST SIGNALS / CASE STUDY */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20 p-8 bg-slate-900/30 border border-slate-800 rounded-2xl backdrop-blur-sm"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4">
                <Building2 className="w-5 h-5 text-indigo-400" />
                <span className="text-indigo-400 font-bold tracking-wider text-sm uppercase">Trusted By Market Leaders</span>
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">CASE STUDY: The "17-Day" SEO Takeover</h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                <strong>Project:</strong> SEO & Digital Transformation for Pipe Manufacturing.<br/><br/>
                We implemented a Programmatic SEO (pSEO) strategy for a local manufacturer. The result? We took them from zero visibility to <strong>Rank #1 on Google</strong> for "Pre-insulated pipe manufacturer" in just 17 days.
              </p>
              <div className="flex gap-4">
                <div className="px-4 py-2 bg-slate-950 rounded-lg border border-slate-800 text-xs text-slate-400">
                  <span className="block text-white font-bold text-lg">#1 Rank</span> Google (17 Days)
                </div>
                <div className="px-4 py-2 bg-slate-950 rounded-lg border border-slate-800 text-xs text-slate-400">
                  <span className="block text-white font-bold text-lg">Top 3</span> 4 Major Keywords
                </div>
              </div>
            </div>
            <div className="flex-1 flex justify-center items-center p-8 bg-slate-950 rounded-xl border border-slate-800 w-full">
               {/* Placeholder for Logo */}
               <div className="text-2xl font-bold text-slate-600 tracking-widest uppercase">Allied Group</div>
            </div>
          </div>
        </motion.div>

        {/* SERVICES GRID */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={itemVariants} className="h-full">
            <Link 
              to={service.link} 
              className="group relative bg-slate-900/40 border border-slate-800 rounded-2xl p-8 hover:bg-slate-900/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(99,102,241,0.1)] overflow-hidden block h-full flex flex-col"
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

              <p className="text-slate-400 mb-8 leading-relaxed text-sm flex-grow">
                {service.description}
              </p>

              {/* GEO Optimized Bullet Points */}
              <ul className="space-y-3 mb-6 border-t border-slate-800/50 pt-6">
                {service.features.map((feature, i) => {
                  const [label, ...rest] = feature.split(':');
                  const text = rest.join(':');
                  return (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-indigo-500 mt-1 shrink-0" />
                      <span>
                        <strong className="text-white">{label}:</strong>{text}
                      </span>
                    </li>
                  );
                })}
              </ul>

              {/* Technical Standard (Fat) */}
              <div className="mb-8 p-5 bg-slate-950/50 rounded-xl border border-slate-800/50">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-3 h-3" /> The Technical Standard
                </div>
                <div className="space-y-2">
                  {service.technicalStandard.map((std, idx) => (
                    <div key={idx} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-xs text-slate-400">
                      <span className="text-indigo-400 font-bold whitespace-nowrap">{std.label}:</span>
                      <span>{std.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Tags for AI Recognition */}
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 text-xs font-mono rounded-full bg-slate-950 border border-slate-800 text-slate-400 group-hover:border-indigo-500/30 transition-colors">
                    #{tag}
                  </span>
                ))}
              </div>

            </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* BOTTOM CTA */}
        <div className="mt-24 text-center">
          <p className="text-slate-500 mb-6 uppercase tracking-widest text-xs font-bold">
            Project Availability: Open for Q1 2026
          </p>
          <div className="inline-block p-[1px] rounded-full bg-gradient-to-r from-indigo-500 to-purple-500">
            <Link to="/contact" className="block bg-[#0a0a0a] rounded-full px-10 py-4 text-white font-bold hover:bg-slate-900 transition-all">
              Get a Free Consultation &rarr;
            </Link>
          </div>
        </div>

        {/* AEO FAQ SECTION */}
        <div className="mt-24 max-w-4xl mx-auto">
           <h2 className="text-3xl font-bold text-white mb-12 text-center">Frequently Asked Questions</h2>
           <div className="space-y-4">
              {faqs.map((item, i) => (
                 <div key={i} className="border border-white/10 rounded-2xl bg-slate-900/30 overflow-hidden">
                    <button 
                       onClick={() => setOpenFaq(openFaq === i ? null : i)}
                       className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                    >
                       <span className="font-bold text-white">{item.q}</span>
                       {openFaq === i ? <ChevronUp className="text-indigo-400" /> : <ChevronDown className="text-slate-500" />}
                    </button>
                    {openFaq === i && (
                       <div className="p-6 pt-0 text-slate-400 leading-relaxed border-t border-white/5">
                          {item.a}
                       </div>
                    )}
                 </div>
              ))}
           </div>
        </div>

        {/* SEO CONTENT BLOCK (Ghost Town Fix) */}
        <div className="mt-24 pt-12 border-t border-slate-800">
          <h2 className="text-2xl font-bold text-white mb-6">Why Choose Ominos Tech for Your Digital Transformation?</h2>
          <div className="prose prose-invert max-w-none text-slate-400">
            <p className="mb-4">
              As a premier <strong>Web Design Agency in Malaysia</strong>, Ominos Tech is dedicated to helping local SMEs and startups in <strong>Kuala Lumpur, Selangor, and Balakong</strong> thrive in the digital economy. We don't just build websites; we engineer digital assets that drive sales and improve operational efficiency.
            </p>
            <p className="mb-4">
              Whether you are looking to apply for the <strong>SME Digital Grant</strong> or need a robust <strong>E-commerce</strong> platform with <strong>Payment Gateway Integration</strong> (ToyyibPay, iPay88, Stripe), our team has the technical expertise to deliver. We are <strong>SSM Registered</strong> and committed to long-term partnerships with our clients.
            </p>
            <p>
              From <strong>Corporate Website Design</strong> to <strong>Custom Mobile App Development</strong>, we ensure your business stands out. Our solutions are hosted on high-speed NVMe servers in Singapore/Malaysia to ensure your customers experience zero lag.
            </p>
          </div>
        </div>

        {/* TECHNICAL FOOTER */}
        <footer className="mt-20 pt-12 border-t border-slate-800 text-sm text-slate-500">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-white font-bold mb-4">Ominos Tech Location: Balakong, Selangor, Malaysia</h4>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <p>Capabilities: Web Development, Mobile Apps, SEO, Digital Transformation.</p>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-indigo-500" />
                  <p>Contact: +60 1x-xxxxxxx</p>
                </div>
              </div>
            </div>
            <div className="md:text-right">
              <p className="mb-2">Serving Clients in:</p>
              <p className="text-slate-400">Balakong, Cheras, Kajang, Puchong, Cyberjaya.</p>
              <p className="mt-4 text-xs">&copy; {new Date().getFullYear()} Ominos Tech. All rights reserved.</p>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
};

export default ServicesView;