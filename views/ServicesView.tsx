import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation } from 'react-router-dom';
import { 
  Code, Smartphone, ShoppingBag, 
  Bot, BarChart, HardDrive, ArrowRight, ShieldCheck,
  MapPin, Phone, Mail, Building2, ChevronDown, ChevronUp,
  CircleCheck, MessageSquare
} from 'lucide-react'; 
import { m, LazyMotion, domAnimation, AnimatePresence } from 'framer-motion';
import Footer from '../components/Footer';
import { PageTransition } from '../PageTransition';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { IMAGES } from '../images';

// === MASTER STRATEGY: MALAYSIA SEO & GEO ===
// Keywords Targeted: "SME Web Design", "FPX Payment", "WhatsApp Bot", "Google Maps Ranking"
// Why: These are high-intent keywords. People searching these are ready to spend money.

const services = [
  {
    id: 'web-development',
    title: 'Custom Web Development',
    description: 'High-Performance Web Developer Malaysia. High-speed Next.js and Enterprise WordPress design that loads in under 2 seconds.',
    icon: <Code className="w-8 h-8 text-indigo-400 group-hover:text-white dark:group-hover:text-indigo-600 transition-colors duration-300" />,
    link: '/services/web-architecture',
    tags: ['Next.js', 'WordPress', 'React']
  },
  {
    id: 'mobile-app',
    title: 'Mobile App Development',
    description: 'Native-Performance iOS & Android apps. We engineer custom mobile applications using Flutter for local businesses.',
    icon: <Smartphone className="w-8 h-8 text-blue-400 group-hover:text-white dark:group-hover:text-blue-600 transition-colors duration-300" />,
    link: '/services/app-engineering',
    tags: ['Flutter', 'iOS', 'Android']
  },
  {
    id: 'seo-ranking',
    title: 'Expert SEO Services',
    description: 'Dominate Google search results. Local ranking strategies and AI SEO expertise to help customers find you first.',
    icon: <BarChart className="w-8 h-8 text-green-400 group-hover:text-white dark:group-hover:text-green-600 transition-colors duration-300" />,
    link: '/services/seo-service',
    tags: ['Local SEO', 'Google Maps', 'Traffic']
  },
  {
    id: 'ai-chatbots',
    title: 'AI Chatbot Development',
    description: 'Automate your customer service. Custom AI agents and WhatsApp auto-reply systems for business automation.',
    icon: <Bot className="w-8 h-8 text-purple-400 group-hover:text-white dark:group-hover:text-purple-600 transition-colors duration-300" />,
    link: '/services/automation',
    tags: ['WhatsApp', 'Chatbots', 'AI']
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Web Design',
    description: 'Launch a secure, high-converting online store. Custom WooCommerce expert development with Stripe/FPX integration.',
    icon: <ShoppingBag className="w-8 h-8 text-yellow-400 group-hover:text-white dark:group-hover:text-yellow-600 transition-colors duration-300" />,
    link: '/services/ecommerce',
    tags: ['Billplz', 'Stripe', 'FPX']
  },
  {
    id: 'web-management',
    title: 'Website Maintenance',
    description: 'Keep your website fast and secure. Professional website management, hosting setup, and legacy redesign services.',
    icon: <ShieldCheck className="w-8 h-8 text-cyan-400 group-hover:text-white dark:group-hover:text-cyan-600 transition-colors duration-300" />,
    link: '/services/web-management',
    tags: ['Security', 'Backups', 'Updates']
  },
  {
    id: 'server-setup',
    title: 'Domain & Hosting',
    description: 'We handle the technical setup. Domain registration, fast hosting, and professional company email.',
    icon: <HardDrive className="w-8 h-8 text-slate-400 group-hover:text-white dark:group-hover:text-slate-600 transition-colors duration-300" />,
    link: '/services/server-setup',
    tags: ['Email', 'Domain', 'Hosting']
  }
];

const faqs = [
  { q: "How much does a website cost in Malaysia?", a: "Custom corporate websites at Omino Tech start from RM 1,500. Advanced E-commerce or Next.js Web Apps typically range from RM 3,500 to RM 15,000 depending on features." },
  { q: "Can you integrate ToyyibPay or Billplz?", a: "Yes. We specialize in integrating local Malaysian payment gateways like ToyyibPay, Billplz, and Stripe for seamless FPX and credit card transactions." },
  { q: "Do you offer website maintenance?", a: "Yes. Our DevOps team provides 24/7 uptime monitoring and security updates to keep your business safe from cyber threats." }
];

const ServicesView: React.FC = () => {
  const { pathname } = useLocation();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    if (window.history.scrollRestoration) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
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

  const schemaData = [
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": services.map((service, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Service",
          "name": service.title,
          "description": service.description,
          "url": `https://www.ominotech.com.my${service.link}`
        }
      }))
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
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#0a0a0a] text-slate-900 dark:text-slate-200 font-sans selection:bg-indigo-500/30 transition-colors duration-300">
      
      {/* === ULTIMATE SEO HEAD === */}
      {/* Targeted specifically for Malaysian Business Owners */}
      <Helmet>
        <title>Omino Tech | Web Design &amp; App Development Agency Malaysia (Selangor)</title>
        <meta name="description" content="Strategic Digital Agency in Malaysia (Selangor & KL). We provide Custom Web Development, Mobile Apps, and SME Digital Grant solutions. SSM Registered." />
        <meta name="keywords" content="Web Design Malaysia, Mobile App Developer KL, SEO Expert Malaysia, SME Digital Grant, SSM Registered, Selangor, Kuala Lumpur, Negeri Sembilan, Payment Gateway Integration" />
        <link rel="canonical" href="https://www.ominotech.com.my/services" />
        
        {/* GEO: Open Graph for Social Sharing (WhatsApp/LinkedIn) */}
        <meta property="og:title" content="Omino Tech - Web Design & App Development Agency Malaysia" />
        <meta property="og:description" content="We build high-performance websites and AI systems for Malaysian businesses." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ominotech.com.my/services" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.ominotech.com.my/services" />
        <meta name="twitter:title" content="Omino Tech - Web Design & App Development Agency Malaysia" />
        <meta name="twitter:description" content="We build high-performance websites and AI systems for Malaysian businesses." />
        <meta name="twitter:image" content={IMAGES.GLOBAL.OG_IMAGE} />
        <meta property="og:image" content={IMAGES.GLOBAL.OG_IMAGE} />
        <meta property="og:image:alt" content="Omino Tech Digital Growth Engine - Custom Web Development and SEO Services Malaysia" />
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Omino Tech" />
        <link rel="manifest" href="/site.webmanifest" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      </Helmet>

      {/* Background Ambient Glow */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/5 dark:bg-indigo-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/5 dark:bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <m.main initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} className="relative z-10 pt-24 md:pt-32 pb-12 md:pb-20 px-6 max-w-7xl mx-auto flex-grow w-full">

        {/* HERO SECTION */}
        <m.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-500/30 mb-6">
            <ShieldCheck className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            <span className="text-indigo-600 dark:text-indigo-300 text-xs font-bold tracking-wider uppercase">Engineered in Malaysia</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-6 text-slate-900 dark:text-white leading-[1.1]">
            Complete Digital Solutions <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-cyan-500 to-fuchsia-500 dark:from-indigo-400 dark:via-cyan-300 dark:to-purple-400">
              for Malaysian Businesses
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            From custom websites to mobile apps. We provide the exact technical solutions your business needs to grow.
          </p>
        </m.div>

        {/* SERVICES GRID */}
        <m.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <m.div key={service.id} variants={itemVariants} className="h-full">
            <Link 
              to={service.link} 
              className="group relative bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 rounded-3xl p-6 md:p-8 hover:bg-slate-900 dark:hover:bg-white hover:border-transparent hover:shadow-[0_0_50px_rgba(99,102,241,0.25)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] transform-gpu will-change-transform overflow-hidden flex flex-col h-full"
            >
              {/* Gradient Blob */}
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl group-hover:bg-white/10 dark:group-hover:bg-indigo-500/10 transition-colors duration-500 transform-gpu will-change-transform"></div>

              {/* Icon & Arrow */}
              <div className="flex items-start justify-between mb-8 relative z-10">
                <div className="p-4 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-white/10 group-hover:bg-white/10 group-hover:border-white/10 dark:group-hover:bg-indigo-50 dark:group-hover:border-indigo-100 transition-colors duration-300 transform-gpu">
                  {service.icon}
                </div>
                <div className="p-2 rounded-full border border-slate-200 dark:border-white/5 group-hover:bg-white/10 group-hover:border-white/10 dark:group-hover:bg-indigo-600 dark:group-hover:border-indigo-600 transition-colors duration-300 transform-gpu">
                   <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-white dark:group-hover:text-white -rotate-45 group-hover:rotate-0 transition-transform duration-300 transform-gpu" />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-white dark:group-hover:text-slate-900 transition-colors duration-300 relative z-10">
                {service.title}
              </h3>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm mb-8 flex-grow relative z-10 font-medium group-hover:text-slate-300 dark:group-hover:text-slate-600 transition-colors duration-300">
                {service.description}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                {service.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wider rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 text-slate-500 dark:text-slate-400 group-hover:bg-white/10 group-hover:text-white group-hover:border-white/10 dark:group-hover:bg-white dark:group-hover:text-indigo-600 dark:group-hover:border-indigo-200 dark:group-hover:shadow-sm transition-colors duration-300">
                    {tag}
                  </span>
                ))}
              </div>

            </Link>
            </m.div>
          ))}
        </m.div>

        {/* TRUST SIGNALS / CASE STUDY (MOVED DOWN) */}
        <m.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="my-24 p-8 bg-white/50 dark:bg-slate-900/30 border border-slate-200 dark:border-slate-800 rounded-2xl backdrop-blur-sm shadow-sm dark:shadow-none"
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
            <div className="flex-1 w-full relative rounded-xl overflow-hidden shadow-xl border border-slate-200/50 dark:border-slate-800/50 group">
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent z-10 opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
               <img 
                 src={IMAGES.WORK.ALLIED_PREMISES} 
                 alt="Allied Group Premises" 
                 className="w-full h-full object-cover aspect-video md:aspect-[4/3] group-hover:scale-105 transition-transform duration-700 ease-out"
                 loading="lazy"
               />
               <div className="absolute bottom-6 left-6 z-20">
                 <div className="text-xl font-bold text-white tracking-widest uppercase mb-1 drop-shadow-lg">Allied Group</div>
                 <div className="text-sm text-slate-300 font-medium">Manufacturing Facility</div>
               </div>
            </div>
          </div>
        </m.div>

        {/* CUSTOMIZATION SECTION */}
        <m.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="my-32 relative rounded-[3rem] overflow-hidden bg-slate-900 border border-slate-800 p-8 md:p-20"
        >
            {/* Background effects */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-500/20 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                    <span className="text-indigo-400 font-mono text-xs font-black uppercase tracking-[0.3em] mb-6 block">Custom Solutions</span>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-white mb-8 leading-[1.1]">
                        Don't Settle for <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Templates.</span>
                    </h2>
                    <p className="text-slate-400 text-lg leading-relaxed mb-10">
                        Your business is unique. Your website should be too. 
                        We build custom solutions that fit exactly how you work, 
                        connecting with your existing systems.
                    </p>
                    
                    <div className="space-y-4 mb-12">
                        {[
                            "Connect with your software (POS, CRM)",
                            "Custom features built just for you",
                            "High-security data protection",
                            "Automate your daily tasks"
                        ].map((point, i) => (
                            <div key={i} className="flex items-center gap-4">
                                <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 flex-shrink-0">
                                    <CircleCheck size={14} />
                                </div>
                                <span className="text-slate-300 font-medium">{point}</span>
                            </div>
                        ))}
                    </div>

                    <WhatsAppButton 
                        serviceName="Custom Digital Solution"
                        message="I need a custom digital solution for my business."
                        buttonText="Chat on WhatsApp"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-900 rounded-full font-bold hover:bg-indigo-50 transition-all group shadow-lg shadow-indigo-500/10"
                        showIcon={true}
                    />
                </div>

                <div className="relative hidden lg:block">
                    {/* Visual representation - Abstract UI */}
                    <div className="bg-slate-950/80 backdrop-blur-md border border-slate-800 rounded-3xl p-8 shadow-2xl transform-gpu rotate-3 hover:rotate-0 transition-transform duration-500">
                        <div className="flex items-center gap-2 mb-6 border-b border-slate-800 pb-4">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            <span className="ml-4 text-xs font-mono text-slate-500">system_config.ts</span>
                        </div>
                        <div className="space-y-3 font-mono text-sm">
                            <div className="flex gap-4">
                                <span className="text-purple-400">const</span>
                                <span className="text-blue-400">BusinessLogic</span>
                                <span className="text-slate-400">=</span>
                                <span className="text-slate-400">{`{`}</span>
                            </div>
                            <div className="pl-8 flex gap-4">
                                <span className="text-slate-400">mode:</span>
                                <span className="text-green-400">'scale_aggressive',</span>
                            </div>
                            <div className="pl-8 flex gap-4">
                                <span className="text-slate-400">integration:</span>
                                <span className="text-yellow-400">['Stripe', 'Salesforce'],</span>
                            </div>
                            <div className="pl-8 flex gap-4">
                                <span className="text-slate-400">security:</span>
                                <span className="text-blue-400">'enterprise_grade',</span>
                            </div>
                            <div className="pl-8 flex gap-4">
                                <span className="text-slate-400">uptime:</span>
                                <span className="text-purple-400">'99.99%'</span>
                            </div>
                            <div className="text-slate-400">{`}`}</div>
                        </div>
                    </div>
                </div>
            </div>
        </m.div>

        {/* BOTTOM CTA */}
        <div className="mt-24 text-center">
          <p className="text-slate-500 mb-6 uppercase tracking-widest text-xs font-bold">
            Project Availability: Open for Q1 2026
          </p>
          <div className="inline-block p-[1px] rounded-full bg-gradient-to-r from-indigo-500 to-purple-500">
            <WhatsAppButton
                serviceName="Free Consultation Inquiry"
                buttonText="Get a Free Consultation →"
                className="block bg-white dark:bg-[#0a0a0a] rounded-full px-6 md:px-10 py-4 text-slate-900 dark:text-white font-bold hover:bg-slate-50 dark:hover:bg-slate-900 transition-all"
                showIcon={false}
            />
          </div>
        </div>

        {/* AEO FAQ SECTION */}
        <div className="mt-16 md:mt-24 max-w-4xl mx-auto">
           <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-8 md:mb-12 text-center">Frequently Asked Questions</h2>
           <div className="space-y-4">
              {faqs.map((item, i) => (
                 <m.div 
                    key={i} 
                    className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openFaq === i ?'border-indigo-500 bg-white dark:bg-slate-900 shadow-lg shadow-indigo-500/10' : 'border-slate-200 dark:border-white/10 bg-white/50 dark:bg-slate-900/30 hover:border-indigo-500/30'}`}
                 >
                    <button 
                       onClick={() => setOpenFaq(openFaq === i ? null : i)}
                       className="w-full flex items-center justify-between p-6 text-left"
                    >
                       <span className={`font-bold text-lg ${openFaq === i ?'text-indigo-600 dark:text-indigo-400' : 'text-slate-900 dark:text-white'}`}>{item.q}</span>
                       <div className={`p-2 rounded-full transition-colors ${openFaq === i ?'bg-indigo-100 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'}`}>
                          {openFaq === i ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                       </div>
                    </button>
                    <AnimatePresence>
                        {openFaq === i && (
                           <m.div
                              key="faq-content"
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
                 </m.div>
              ))}
           </div>
        </div>

        {/* SEO CONTENT BLOCK (Ghost Town Fix) */}
        <m.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-24 pt-6 md:pt-12 border-t border-slate-200 dark:border-slate-800"
        >
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Why Choose Omino Tech for Your Digital Transformation?</h2>
          <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-400">
            <p className="mb-4">
              As a premier <Link to="/" className="text-indigo-600 dark:text-indigo-400 font-bold hover:underline">Web Design Agency in Malaysia</Link>, Omino Tech is dedicated to helping local SMEs and startups in <strong>Kuala Lumpur, Selangor, and Negeri Sembilan</strong> thrive in the digital economy. We don't just build websites; we engineer digital assets that drive sales and improve operational efficiency.
            </p>
            <p className="mb-4">
              Whether you are looking to apply for the <a href="https://mdec.my/smedigitalgrant" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 font-bold hover:underline">SME Digital Grant</a> or need a robust <strong>E-commerce</strong> platform with <strong>Payment Gateway Integration</strong> (ToyyibPay, iPay88, Stripe), our team has the technical expertise to deliver. We are a verified <a href="https://www.ssm.com.my/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 font-bold hover:underline">SSM Registered</a> entity, committed to long-term partnerships with our clients.
            </p>
            <p>
              From <strong>Corporate Website Design</strong> to <strong>Custom Mobile App Development</strong>, we ensure your business stands out. Our solutions are hosted on high-speed NVMe servers in Singapore/Malaysia to ensure your customers experience zero lag.
            </p>
          </div>
        </m.div>
      </m.main>
      <Footer />
    </div>
    </LazyMotion>
    </PageTransition>
  );
};

export default ServicesView;
