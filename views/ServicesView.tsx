import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation } from 'react-router-dom';
import { 
  Code, Smartphone, ShoppingBag, 
  Bot, BarChart, HardDrive, ArrowRight, ShieldCheck,
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
    description: 'Stop losing customers to slow websites. We engineer digital assets for Malaysian SMEs and Startups that load in under 2 seconds. Built for conversion.',
    icon: <Code className="w-8 h-8 text-indigo-400" />,
    link: '/services/web-architecture',
    tags: ['NextJS', 'Elementor', 'React']
  },
  {
    id: 'mobile-app',
    title: 'Cross-Platform Mobile Ecosystems',
    description: 'Launch your own mobile app on Apple & Google Play. Offline-first Flutter apps perfect for Malaysian field operations and customer loyalty.',
    icon: <Smartphone className="w-8 h-8 text-blue-400" />,
    link: '/services/app-engineering',
    tags: ['Flutter', 'iOS', 'Android']
  },
  {
    id: 'seo-ranking',
    title: 'Dominate "Google Malaysia" Search Results',
    description: 'We don\'t guess; we engineer rankings. Optimize for "Google.com.my" and the "Local Map Pack" to capture high-intent traffic.',
    icon: <BarChart className="w-8 h-8 text-green-400" />,
    link: '/services/seo-service',
    tags: ['Local SEO', 'Schema', 'Traffic']
  },
  {
    id: 'ai-chatbots',
    title: '24/7 Automated Sales & Support',
    description: 'Your customers are on WhatsApp. Be there instantly. Intelligent AI Bots that answer inquiries and close sales 24/7.',
    icon: <Bot className="w-8 h-8 text-purple-400" />,
    link: '/services/automation',
    tags: ['WhatsApp', 'Chatbots', 'Gemini']
  },
  {
    id: 'ecommerce',
    title: 'Seamless Digital Transactions',
    description: 'Sell to customers using their preferred local banking. Secure FPX (ToyyibPay, Billplz) and Credit Card integration.',
    icon: <ShoppingBag className="w-8 h-8 text-yellow-400" />,
    link: '/services/ecommerce',
    tags: ['Billplz', 'Stripe', 'FPX']
  },
  {
    id: 'web-management',
    title: 'Your Dedicated Technical Team',
    description: 'Stop worrying about hacks. We handle 24/7 uptime monitoring, security patches, and content updates.',
    icon: <ShieldCheck className="w-8 h-8 text-cyan-400" />,
    link: '/services/web-management',
    tags: ['DevOps', 'Security', 'Updates']
  },
  {
    id: 'server-setup',
    title: 'Professional Digital Identity',
    description: 'Professional IT plumbing. Domain registration, Cloud Hosting, and Corporate Email setup for a trusted digital identity.',
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

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": services.map((service, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Service",
        "name": service.title,
        "description": service.description,
        "url": `https://ominostech.com${service.link}`
      }
    }))
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0a0a0a] text-slate-900 dark:text-slate-200 font-sans selection:bg-indigo-500/30 transition-colors duration-300">
      
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
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      {/* Background Ambient Glow */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/5 dark:bg-indigo-500/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/5 dark:bg-purple-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 pt-24 md:pt-32 pb-12 md:pb-20 px-6 max-w-7xl mx-auto">

        {/* HERO SECTION */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-500/30 mb-6">
            <ShieldCheck className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            <span className="text-indigo-600 dark:text-indigo-300 text-xs font-bold tracking-wider uppercase">Engineered in Malaysia</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 text-slate-900 dark:text-white leading-tight">
            Complete Digital Infrastructure <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500">
              for Malaysian Businesses
            </span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            From custom Next.js engineering to rapid WordPress deployment. We provide the exact technical solutions your business needs to scale in the digital economy.
          </p>
        </motion.div>

        {/* TRUST SIGNALS / CASE STUDY */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20 p-8 bg-white/50 dark:bg-slate-900/30 border border-slate-200 dark:border-slate-800 rounded-2xl backdrop-blur-sm shadow-sm dark:shadow-none"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4">
                <Building2 className="w-5 h-5 text-indigo-400" />
                <span className="text-indigo-400 font-bold tracking-wider text-sm uppercase">Trusted By Market Leaders</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">CASE STUDY: The "17-Day" SEO Takeover</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                <strong>Project:</strong> SEO & Digital Transformation for Pipe Manufacturing.<br/><br/>
                We implemented a Programmatic SEO (pSEO) strategy for a local manufacturer. The result? We took them from zero visibility to <strong>Rank #1 on Google</strong> for "Pre-insulated pipe manufacturer" in just 17 days.
              </p>
              <div className="flex gap-4">
                <div className="px-4 py-2 bg-white dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400">
                  <span className="block text-slate-900 dark:text-white font-bold text-lg">#1 Rank</span> Google (17 Days)
                </div>
                <div className="px-4 py-2 bg-white dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400">
                  <span className="block text-slate-900 dark:text-white font-bold text-lg">Top 3</span> 4 Major Keywords
                </div>
              </div>
            </div>
            <div className="flex-1 flex justify-center items-center p-8 bg-slate-100 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 w-full">
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
              className="group relative bg-white dark:bg-white/[0.02] backdrop-blur-sm border border-slate-200 dark:border-white/10 rounded-3xl p-6 md:p-8 hover:border-indigo-500/30 hover:shadow-[0_0_30px_rgba(99,102,241,0.1)] transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col h-full"
            >
              {/* Gradient Blob */}
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition-all duration-500"></div>

              {/* Icon & Arrow */}
              <div className="flex items-start justify-between mb-8 relative z-10">
                <div className="p-4 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-white/10 group-hover:border-indigo-500/50 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.2)] transition-all duration-300">
                  {service.icon}
                </div>
                <div className="p-2 rounded-full border border-slate-200 dark:border-white/5 group-hover:bg-indigo-500 group-hover:border-indigo-500 transition-all duration-300">
                   <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-white -rotate-45 group-hover:rotate-0 transition-all duration-300" />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors relative z-10">
                {service.title}
              </h3>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm mb-8 flex-grow relative z-10 font-medium">
                {service.description}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                {service.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wider rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 text-slate-500 dark:text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-300 group-hover:border-indigo-500/20 transition-colors">
                    {tag}
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
            <Link to="/contact" className="block bg-white dark:bg-[#0a0a0a] rounded-full px-10 py-4 text-slate-900 dark:text-white font-bold hover:bg-slate-50 dark:hover:bg-slate-900 transition-all">
              Get a Free Consultation &rarr;
            </Link>
          </div>
        </div>

        {/* AEO FAQ SECTION */}
        <div className="mt-24 max-w-4xl mx-auto">
           <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">Frequently Asked Questions</h2>
           <div className="space-y-4">
              {faqs.map((item, i) => (
                 <div key={i} className="border border-slate-200 dark:border-white/10 rounded-2xl bg-white/50 dark:bg-slate-900/30 overflow-hidden">
                    <button 
                       onClick={() => setOpenFaq(openFaq === i ? null : i)}
                       className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
                    >
                       <span className="font-bold text-slate-900 dark:text-white">{item.q}</span>
                       {openFaq === i ? <ChevronUp className="text-indigo-400" /> : <ChevronDown className="text-slate-500" />}
                    </button>
                    {openFaq === i && (
                       <div className="p-6 pt-0 text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-200 dark:border-white/5">
                          {item.a}
                       </div>
                    )}
                 </div>
              ))}
           </div>
        </div>

        {/* SEO CONTENT BLOCK (Ghost Town Fix) */}
        <div className="mt-24 pt-12 border-t border-slate-200 dark:border-slate-800">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Why Choose Ominos Tech for Your Digital Transformation?</h2>
          <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-400">
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
        <footer className="mt-20 pt-12 border-t border-slate-200 dark:border-slate-800 text-sm text-slate-500">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-slate-900 dark:text-white font-bold mb-4">Ominos Tech Location: Balakong, Selangor, Malaysia</h4>
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