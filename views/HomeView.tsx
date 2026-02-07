import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Code2, Cpu, Globe, Zap, Bot, Terminal, ShieldCheck, TrendingUp, Activity, Rocket, MessageSquare, MapPin, Phone, Mail, Building2, ChevronDown, ChevronUp } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  const { pathname } = useLocation();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Ominos Tech",
    "image": "https://ominostech.com/logo.png",
    "@id": "https://ominostech.com",
    "url": "https://ominostech.com",
    "telephone": "+60123456789",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jalan KPB 12, Balakong",
      "addressLocality": "Seri Kembangan",
      "addressRegion": "Selangor",
      "postalCode": "43300",
      "addressCountry": "MY"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 3.028, 
      "longitude": 101.763
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "priceRange": "RM200 - RM20000",
    "servesCuisine": "Web Development"
  };

  return (
    <>
      <Helmet>
        {/* --- SEO (Google Search) --- */}
        {/* Front-loaded keywords: "Web Design", "Malaysia", "SEO", "AI" */}
        <title>Ominos Tech | Web & App Developer Malaysia (Selangor)</title>
        
        {/* --- AEO (Voice Search) --- */}
        {/* Written in natural language for Siri/Alexa to read out loud */}
        <meta name="description" content="Top-rated Digital Agency in Malaysia (Selangor & KL). We provide Custom Web Development, Mobile Apps, and SME Digital Grant solutions. SSM Registered." />
        
        <link rel="canonical" href="https://syncvisionlabs.com" />
        
        {/* --- GEO (AI Search) --- */}
        {/* Injecting the raw data map for AI models */}
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <div className="min-h-screen bg-[#0a0a0a] text-slate-200 font-sans selection:bg-indigo-500/30 relative overflow-hidden">
        
        {/* Background Ambient Glow */}
        <div className="fixed inset-0 w-full h-full pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/5 rounded-full blur-[120px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-500/5 rounded-full blur-[120px]" />
        </div>
        
        {/* --- HERO SECTION --- */}
        <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 px-6 max-w-7xl mx-auto flex flex-col items-center text-center z-10">
          
          {/* THE "SERVICE TICKER" - Immediate visual confirmation of services */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-wrap justify-center gap-4 mb-8 text-xs font-mono text-indigo-400/80 uppercase tracking-widest border border-indigo-500/20 bg-indigo-500/5 px-6 py-2 rounded-full shadow-[0_0_15px_rgba(99,102,241,0.2)]"
          >
            <span className="flex items-center gap-2 text-white font-bold"><Globe size={12} /> CORPORATE WEB DESIGN</span>
            <span className="text-gray-600">|</span>
            <span className="flex items-center gap-2 text-white font-bold"><Zap size={12} /> SEO & GEO RANKING</span>
            <span className="text-gray-600">|</span>
            <span className="flex items-center gap-2 text-white font-bold"><Bot size={12} /> AI AGENTS</span>
          </motion.div>
          
          {/* THE H1 TITLE - Optimized for High Volume Keywords */}
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-4xl md:text-7xl font-black font-mono text-white mb-8 tracking-tighter leading-[1.0]"
          >
            High-Performance Digital Infrastructure <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
              for Malaysia’s Visionaries
            </span>
          </motion.h1>
          
          {/* THE SUB-HEADER - Optimized for AEO (Voice) */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl text-xl text-gray-400 mb-12 leading-relaxed font-light"
          >
            We don’t just build websites; we engineer Digital Assets that rank, perform, and convert. From custom personal portfolios to complex corporate inventory systems. If you have the vision, Ominos Tech writes the code.
          </motion.p>
          
          {/* CTA BUTTONS */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col md:flex-row gap-6 w-full md:w-auto"
          >
            <Link to="/contact" className="group relative px-8 py-4 bg-indigo text-white font-mono font-black uppercase tracking-widest rounded-lg overflow-hidden transition-all hover:bg-white hover:text-black hover:shadow-[0_0_20px_rgba(99,102,241,0.5)]">
              <span className="relative z-10 flex items-center gap-3 font-sans font-bold normal-case tracking-normal">
                Start Your Project &rarr;
              </span>
            </Link>
            <Link to="/work" className="px-8 py-4 border border-white/10 text-gray-400 font-mono font-bold uppercase tracking-widest rounded-lg hover:border-indigo hover:text-indigo transition-all">
              See Our Rankings
            </Link>
          </motion.div>
        </section>

        {/* --- TRUST TICKER (RESTORED) --- */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-full border-y border-white/5 bg-slate-950/50 backdrop-blur-xl overflow-hidden py-6"
        >
             <motion.div 
                className="flex gap-32 whitespace-nowrap items-center"
                animate={{ x: [0, -1000] }}
                transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
             >
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="flex gap-32 text-xs font-mono font-bold uppercase tracking-[0.2em] text-slate-500 items-center">
                    <span className="flex items-center gap-3">
                      <TrendingUp size={14} className="text-emerald-500"/> 
                      <span className="text-slate-300">Rank #1 on Google</span>
                    </span>
                    <span className="flex items-center gap-3">
                      <Zap size={14} className="text-indigo-500"/> 
                      <span className="text-slate-300">AI Overview Captured</span>
                    </span>
                    <span className="flex items-center gap-3">
                      <Activity size={14} className="text-emerald-500"/> 
                      <span className="text-slate-300">420% Lead Increase</span>
                    </span>
                    <span className="flex items-center gap-3">
                      <Code2 size={14} className="text-indigo-500" /> 
                      <span className="text-slate-300">Active R&D Labs</span>
                    </span>
                  </div>
                ))}
             </motion.div>
        </motion.div>

        {/* --- TRUST SIGNALS / CASE STUDY (NEW) --- */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <div className="p-8 bg-slate-900/30 border border-slate-800 rounded-2xl">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-4">
                  <Building2 className="w-5 h-5 text-indigo-400" />
                  <span className="text-indigo-400 font-bold tracking-wider text-sm uppercase">Trusted By Market Leaders</span>
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">CASE STUDY: The "17-Day" SEO Takeover</h2>
                <p className="text-slate-400 text-sm mb-6"><strong>Project:</strong> SEO & Digital Transformation for Pipe Manufacturing</p>
                
                <div className="space-y-6 text-slate-400 leading-relaxed text-sm mb-8">
                    <p>
                        <strong className="text-white block mb-1">The Challenge:</strong>
                        A crowded market with zero Google visibility for key industrial terms.
                    </p>
                    <div>
                        <strong className="text-white block mb-1">The Execution:</strong>
                        We implemented a Programmatic SEO (pSEO) strategy, targeting high-value commercial keywords with precision.
                    </div>
                    <div>
                        <strong className="text-white block mb-1">The Verified Record:</strong>
                        <ul className="space-y-2 mt-2">
                           <li><span className="text-emerald-400 font-bold">Rank #1 in 17 Days:</span> "Pre-insulated pipe manufacturer Malaysia"</li>
                           <li><span className="text-emerald-400 font-bold">Top 3 Ranking:</span> "Copper pipe supplier Malaysia"</li>
                           <li><span className="text-white font-bold">Market Dominance:</span> Secured Top 3 positions for 4 major keywords and Top 10 visibility for 10+ secondary search terms.</li>
                        </ul>
                    </div>
                    <p className="italic border-l-2 border-indigo-500 pl-4 py-2 bg-white/5 rounded-r-lg">
                        "Most agencies promise results in 6 months. Ominos Tech delivered #1 Rankings in just over two weeks."
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="px-4 py-2 bg-slate-950 rounded-lg border border-slate-800 text-xs text-slate-400">
                    <span className="block text-white font-bold text-lg">#1 Rank</span> Google (17 Days)
                  </div>
                  <div className="px-4 py-2 bg-slate-950 rounded-lg border border-slate-800 text-xs text-slate-400">
                    <span className="block text-white font-bold text-lg">Top 3</span> 4 Major Keywords
                  </div>
                  <div className="px-4 py-2 bg-slate-950 rounded-lg border border-slate-800 text-xs text-slate-400">
                    <span className="block text-white font-bold text-lg">Top 10</span> 10+ Keywords
                  </div>
                </div>
              </div>
              <div className="flex-1 flex justify-center items-center p-8 bg-slate-950 rounded-xl border border-slate-800 w-full">
                 <div className="text-2xl font-bold text-slate-600 tracking-widest uppercase">Allied Group</div>
              </div>
            </div>
          </div>
        </section>

        {/* --- GEO & AEO INJECTION (AI FEEDER) --- */}
        <section className="py-12 px-6 max-w-7xl mx-auto">
           <div className="p-10 bg-indigo-900/10 border border-indigo-500/20 rounded-3xl">
              <h2 className="text-2xl font-bold text-white mb-6">Why Malaysian Businesses Choose Ominos Tech</h2>
              <ul className="space-y-4 text-slate-300">
                 <li className="flex items-start gap-3">
                    <ShieldCheck className="w-6 h-6 text-indigo-400 mt-1 flex-shrink-0" />
                    <div>
                       <strong className="text-white block">Local Compliance</strong>
                       We ensure all websites are PDPA compliant and optimized for Malaysian payment gateways like ToyyibPay, iPay88, and Billplz.
                    </div>
                 </li>
                 <li className="flex items-start gap-3">
                    <Zap className="w-6 h-6 text-indigo-400 mt-1 flex-shrink-0" />
                    <div>
                       <strong className="text-white block">Performance First</strong>
                       Unlike generic WordPress agencies, we use Next.js and Vercel to deliver sub-second load times, critical for mobile users in rural Malaysia.
                    </div>
                 </li>
                 <li className="flex items-start gap-3">
                    <TrendingUp className="w-6 h-6 text-indigo-400 mt-1 flex-shrink-0" />
                    <div>
                       <strong className="text-white block">Business-First Logic</strong>
                       We don't just code; we solve business problems. See how we saved Allied Foam 50% on hosting costs while improving email deliverability.
                    </div>
                 </li>
              </ul>
           </div>
        </section>

        {/* --- FUTURE TECH SECTION (RESTORED) --- */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="py-32 px-6 max-w-7xl mx-auto border-b border-white/5"
        >
          <div className="flex flex-col md:flex-row gap-16 items-center">
              <div className="flex-1 space-y-8">
                <div className="flex items-center gap-3 mb-2">
                    <Cpu className="w-6 h-6 text-indigo-500" />
                    <span className="text-sm font-bold tracking-wider text-indigo-500 uppercase font-mono">Future Tech</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-mono font-black text-white leading-tight uppercase tracking-tighter">
                    The Era of <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400">AI Agents.</span>
                </h2>
                <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
                    We are merging human intent with autonomous technology. The future is not just about browsing; it is about commanding. We build the infrastructure where complex tasks are executed by <strong>AI Agents</strong> simply by your command.
                </p>
              </div>
              <div className="flex-1 w-full">
                 <div className="relative aspect-video bg-slate-900 rounded-3xl border border-white/10 overflow-hidden shadow-2xl group">
                    <img 
                      src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop" 
                      alt="AI Neural Network" 
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                    
                    <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                        <div className="flex items-center gap-4 mb-3">
                            <div className="p-2 bg-indigo-500/20 rounded-lg text-indigo-400"><Bot size={20} /></div>
                            <div>
                                <div className="text-white font-mono font-bold uppercase tracking-widest text-xs">Neural Core</div>
                                <div className="text-slate-400 text-[10px] font-mono">Status: Active Learning</div>
                            </div>
                        </div>
                        <div className="h-1 w-full bg-slate-700 rounded-full overflow-hidden">
                            <div className="h-full bg-indigo-500 w-[70%] animate-pulse"></div>
                        </div>
                    </div>
                 </div>
              </div>
          </div>
        </motion.section>

        {/* --- ACHIEVEMENTS LISTING (RESTORED) --- */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="py-24 px-6 max-w-7xl mx-auto"
        >
          <div className="mb-16 text-center md:text-left">
            <h3 className="text-3xl md:text-4xl font-mono font-black text-white uppercase tracking-tighter mb-4">
              Verified Achievements
            </h3>
            <p className="text-slate-400 text-lg">
              Proven results in SEO, Automation, and Engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AchievementCard 
              icon={<TrendingUp className="w-6 h-6 text-emerald-400" />}
              title="SEO Rank #1 in 17 Days"
              description="Achieved top ranking in record time. Secured Top 3 for 4 major keywords and Top 10 visibility for 10+ secondary search terms."
            />
            <AchievementCard 
              icon={<Zap className="w-6 h-6 text-yellow-400" />}
              title="402% Quality Boost"
              description="Designed and implemented a high-performance shop page, improving user interaction and website quality scores by over 400%."
            />
            <AchievementCard 
              icon={<Rocket className="w-6 h-6 text-red-400" />}
              title="Ultimate Speed"
              description="Developed platforms with no visible load time. Whether hard-coded or managed WordPress, we engineer for raw performance and speed."
            />
            <AchievementCard 
              icon={<MessageSquare className="w-6 h-6 text-indigo-400" />}
              title="WhatsApp Automation"
              description="End-to-end automation with keyword filtering and auto-reply systems, reducing interaction and response time by 95%."
            />
            <AchievementCard 
              icon={<ShieldCheck className="w-6 h-6 text-purple-400" />}
              title="Client Ecosystems"
              description="Comprehensive monthly management of client websites, implementing continuous SEO practices and technical updates."
            />
            <AchievementCard 
              icon={<Globe className="w-6 h-6 text-blue-400" />}
              title="Market Dominance"
              description="We don't just build websites; we build market leaders. Our strategies are designed to outrank and outperform competitors."
            />
          </div>
        </motion.section>

        {/* --- VISUAL SYSTEM PREVIEW --- */}
        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="py-12 px-6 max-w-7xl mx-auto"
        >
            <div className="relative rounded-[3rem] overflow-hidden border border-white/10 aspect-[21/9] group shadow-2xl">
                <img 
                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2000&auto=format&fit=crop" 
                    alt="Code Architecture" 
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-700 scale-105 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent"></div>
                <div className="absolute inset-0 flex flex-col justify-center p-10 md:p-20 max-w-4xl">
                    <span className="text-emerald-400 font-mono text-xs font-black uppercase tracking-[0.4em] mb-6 block">System Architecture</span>
                    <h2 className="text-3xl md:text-5xl font-mono font-black text-white mb-6 leading-tight">
                        Clean Code. <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Pure Performance.</span>
                    </h2>
                    <p className="text-slate-300 text-lg leading-relaxed max-w-xl mb-8">
                        We don't hide behind builders. We write semantic, high-performance code that Google loves and hackers hate.
                    </p>
                    <div className="flex items-center gap-4">
                        <div className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-lg text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider">
                            React / Next.js
                        </div>
                        <div className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-lg text-blue-400 text-xs font-mono font-bold uppercase tracking-wider">
                            TypeScript
                        </div>
                        <div className="px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-lg text-purple-400 text-xs font-mono font-bold uppercase tracking-wider">
                            Tailwind
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>

        {/* --- SERVICE MATRIX (Internal Linking Structure) --- */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5"
        >
           <div className="text-center mb-16">
              <span className="text-indigo font-mono text-xs font-black uppercase tracking-[0.2em] block mb-4">The Matrix</span>
              <h2 className="text-3xl md:text-5xl font-bold text-white">Our Services</h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* 1. WEB DEVELOPMENT - Keyword: "Custom Website" */}
              <Link to="/services/web-architecture" className="group block p-8 bg-[#111] rounded-2xl border border-white/5 hover:border-indigo/50 hover:bg-[#151515] transition-all">
                 <div className="flex justify-between items-start mb-6">
                    <Globe className="text-indigo group-hover:scale-110 transition-transform" size={40} />
                    <span className="text-xs font-mono text-gray-600 group-hover:text-indigo">01</span>
                 </div>
                 <h3 className="text-xl font-bold text-white mb-2">Custom Web Development</h3>
                 <p className="text-sm text-gray-400 mb-4">Whether you are an individual needing a personal brand site or a business requiring a complex dashboard. We use Next.js and React to build sites that load instantly and capture attention.</p>
                 <span className="text-xs font-mono text-indigo uppercase tracking-widest group-hover:underline">Build Site -&gt;</span>
              </Link>

              {/* 2. SEO / GEO - Keyword: "Rank #1" */}
              <Link to="/services/seo-service" className="group block p-8 bg-[#111] rounded-2xl border border-white/5 hover:border-indigo/50 hover:bg-[#151515] transition-all">
                 <div className="flex justify-between items-start mb-6">
                    <Zap className="text-indigo group-hover:scale-110 transition-transform" size={40} />
                    <span className="text-xs font-mono text-gray-600 group-hover:text-indigo">02</span>
                 </div>
                 <h3 className="text-xl font-bold text-white mb-2">Strategic SEO & Content Engineering</h3>
                 <p className="text-sm text-gray-400 mb-4">We don't guess; we engineer rankings. Our strategies are proven to hit Rank #1 for competitive keywords like 'Pre-insulated pipe manufacturer' and 'Copper pipe supplier' in record time.</p>
                 <span className="text-xs font-mono text-indigo uppercase tracking-widest group-hover:underline">Rank #1 -&gt;</span>
              </Link>

              {/* 3. AI AGENTS - Keyword: "Automation" */}
              <Link to="/services/automation" className="group block p-8 bg-[#111] rounded-2xl border border-white/5 hover:border-indigo/50 hover:bg-[#151515] transition-all">
                 <div className="flex justify-between items-start mb-6">
                    <Bot className="text-indigo group-hover:scale-110 transition-transform" size={40} />
                    <span className="text-xs font-mono text-gray-600 group-hover:text-indigo">03</span>
                 </div>
                 <h3 className="text-xl font-bold text-white mb-2">AI Agents</h3>
                 <p className="text-sm text-gray-400 mb-4">Autonomous bots and WhatsApp API integration to automate sales 24/7.</p>
                 <span className="text-xs font-mono text-indigo uppercase tracking-widest group-hover:underline">Automate -&gt;</span>
              </Link>
              
              {/* 4. MOBILE APPS - Keyword: "App Developer" */}
              <Link to="/services/app-engineering" className="group block p-8 bg-[#111] rounded-2xl border border-white/5 hover:border-indigo/50 hover:bg-[#151515] transition-all">
                 <div className="flex justify-between items-start mb-6">
                    <Cpu className="text-indigo group-hover:scale-110 transition-transform" size={40} />
                    <span className="text-xs font-mono text-gray-600 group-hover:text-indigo">04</span>
                 </div>
                 <h3 className="text-xl font-bold text-white mb-2">App & System Development</h3>
                 <p className="text-sm text-gray-400 mb-4">From 'LifeSync' personal productivity apps to corporate inventory systems handling 1,000+ SKUs. We build scalable mobile and web applications that solve real-world problems.</p>
                 <span className="text-xs font-mono text-indigo uppercase tracking-widest group-hover:underline">Build App -&gt;</span>
              </Link>

              {/* 5. MANAGED HOSTING - Keyword: "Hosting" */}
              <div className="group p-8 bg-[#171717] rounded-2xl border border-indigo/20 flex flex-col justify-center items-center text-center col-span-1 md:col-span-2 lg:col-span-2">
                 <ShieldCheck className="text-indigo mb-4" size={40} />
                 <h3 className="text-xl font-bold text-white mb-2">Managed Hosting</h3>
                 <p className="text-sm text-gray-400 mb-6 max-w-md">Secure, high-speed hosting on NVMe servers in Singapore/Malaysia.</p>
                 <Link to="/contact" className="px-6 py-2 bg-indigo text-white text-xs font-bold rounded hover:bg-indigo/80">
                   Get Hosting
                 </Link>
              </div>

           </div>
        </motion.section>

        {/* --- MOVING PREVIEW (MARQUEE) (RESTORED) --- */}
        <section className="w-full overflow-hidden py-12 border-y border-white/5 bg-slate-900/30">
          <motion.div 
            className="flex gap-24 whitespace-nowrap items-center"
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          >
            <PreviewStat label="SEO Result" value="Rank #1 (Google)" />
            <PreviewStat label="Load Time" value="0.2s Speed" />
            <PreviewStat label="Client" value="Pipe Manufacturer" />
            <PreviewStat label="Automation" value="95% Faster" />
            <PreviewStat label="Quality Score" value="402% Increase" />
            <PreviewStat label="Tech Stack" value="React + Vite + AI" />
            <PreviewStat label="Service" value="Cheap SEO Malaysia" />
            {/* Duplicate for seamless loop */}
            <PreviewStat label="SEO Result" value="Rank #1 (Google)" />
            <PreviewStat label="Load Time" value="0.2s Speed" />
            <PreviewStat label="Client" value="Pipe Manufacturer" />
            <PreviewStat label="Automation" value="95% Faster" />
            <PreviewStat label="Quality Score" value="402% Increase" />
          </motion.div>
        </section>

        {/* --- IDENTITY PROTOCOL (RESTORED) --- */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="py-32 px-6 max-w-7xl mx-auto border-t border-white/5"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
               <div>
                  <span className="text-indigo-500 font-mono text-xs font-black uppercase tracking-[0.4em] mb-4 block">Identity Protocol</span>
                  <h2 className="text-4xl md:text-6xl font-mono font-black text-white uppercase tracking-tighter leading-none">
                    Not An Agency.<br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">A Digital Foundry.</span>
                  </h2>
               </div>
               
               <div className="space-y-6 text-lg text-slate-400 leading-relaxed">
                  <p>
                    Most "web designers" are decorators. We are <strong className="text-white">Systems Architects</strong>. 
                    We don't just make things look good; we engineer them to perform.
                  </p>
                  <p>
                    From <strong className="text-white">High-Frequency Trading Algorithms</strong> to <strong className="text-white">SEO Dominance Protocols</strong>, 
                    we bring enterprise-grade engineering to ambitious businesses.
                  </p>
               </div>

               {/* --- REBELLION BANNER (STRATEGIC PLACEMENT) --- */}
               <Link to="/about" className="block bg-green-950/10 border border-green-500/20 p-6 rounded-xl relative overflow-hidden group hover:bg-green-950/20 transition-all">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                        <div className="p-3 bg-green-500/10 rounded-lg text-green-500 group-hover:scale-110 transition-transform">
                            <Terminal size={20} />
                        </div>
                        <div>
                            <div className="text-green-500 font-mono text-[10px] font-bold uppercase tracking-[0.2em] mb-1 animate-pulse">Transmission Incoming</div>
                            <div className="text-slate-300 font-mono text-xs font-bold uppercase tracking-widest group-hover:text-white transition-colors">
                                We are the glitch in the matrix. Read the Manifesto &rarr;
                            </div>
                        </div>
                    </div>
               </Link>

               <div className="flex flex-col sm:flex-row gap-6 pt-4">
                  <div className="flex items-center gap-4">
                     <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 border border-indigo-500/20">
                        <Code2 size={24} />
                     </div>
                     <div>
                        <h4 className="text-white font-bold font-mono uppercase tracking-wider text-sm">Custom Core</h4>
                        <p className="text-slate-500 text-xs">No Templates. Pure Code.</p>
                     </div>
                  </div>
                  <div className="flex items-center gap-4">
                     <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20">
                        <TrendingUp size={24} />
                     </div>
                     <div>
                        <h4 className="text-white font-bold font-mono uppercase tracking-wider text-sm">Growth Logic</h4>
                        <p className="text-slate-500 text-xs">Built to Rank & Convert.</p>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </motion.section>

        {/* --- SEO CONTENT BLOCK (Ghost Town Fix) --- */}
        <section className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
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
        </section>

        {/* --- AEO FAQ SECTION (VOICE SEARCH) --- */}
        <section className="py-24 px-6 max-w-4xl mx-auto">
           <h2 className="text-3xl font-bold text-white mb-12 text-center">Frequently Asked Questions</h2>
           <div className="space-y-4">
              {[
                 { q: "Who is the best SEO expert for fast rankings in Malaysia?", a: "Ominos Tech has a verified track record of achieving Rank #1 on Google in just 17 days for competitive industrial keywords in Malaysia." },
                 { q: "Can you build a website for an individual or small startup?", a: "Yes. Ominos Tech serves everyone from individual entrepreneurs to large manufacturers. We build custom digital solutions tailored to your specific budget and goals." }
              ].map((item, i) => (
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
        </section>

        {/* --- TECHNICAL FOOTER --- */}
        <footer className="py-12 px-6 max-w-7xl mx-auto border-t border-white/5 text-sm text-slate-500">
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
    </>
  );
};

const AchievementCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="p-8 bg-white/[0.02] backdrop-blur-xl rounded-3xl border border-white/10 hover:border-indigo-500/30 transition-all duration-500 group hover:-translate-y-1">
    <div className="mb-6 p-4 bg-slate-900 rounded-2xl w-fit border border-white/5 group-hover:border-indigo-500/30 transition-colors">{icon}</div>
    <h4 className="text-xl font-mono font-bold mb-4 text-slate-100 group-hover:text-indigo-400 transition-colors">{title}</h4>
    <p className="text-sm text-slate-400 leading-relaxed font-medium">{description}</p>
  </div>
);

const PreviewStat = ({ label, value }: { label: string, value: string }) => (
  <div className="flex flex-col">
    <span className="text-xs font-mono font-black text-slate-500 uppercase tracking-[0.2em] mb-2">{label}</span>
    <span className="text-2xl font-mono font-black text-white uppercase tracking-tighter">{value}</span>
  </div>
);

export default Home;