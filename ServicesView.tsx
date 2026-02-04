import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  Code, Smartphone, Globe, ShoppingBag, 
  Bot, Search, RefreshCw, Server, CheckCircle2 
} from 'lucide-react'; 

// SEO & GEO OPTIMIZED DATA STRUCTURE
// All content is visible immediately for AI Crawlers.
const services = [
  {
    id: 'custom-web',
    title: 'Custom Full-Stack Web Development',
    description: 'We engineer high-performance, proprietary websites using Next.js and React. Best for clients who need speed, total security, and 100% source code ownership.',
    features: ['React / Next.js Architecture', '< 100ms Load Time', 'Full Source Code Delivery', 'Supabase Database Security'],
    icon: <Code className="w-10 h-10 text-indigo-400" />
  },
  {
    id: 'wordpress',
    title: 'WordPress & CMS Design',
    description: 'Rapid, editable, and professional. We build enterprise-grade WordPress sites using Elementor Pro, giving you full control to edit text and images yourself.',
    features: ['Custom Elementor Design', 'Easy-to-Edit Dashboard', 'Bot Protection & Security', '1-Week Fast Launch'],
    icon: <Globe className="w-10 h-10 text-pink-400" />
  },
  {
    id: 'mobile-app',
    title: 'Mobile App Development (iOS/Android)',
    description: 'Native-quality mobile applications built with Flutter. We create offline-first apps that work smoothly on both iPhone and Android from a single codebase.',
    features: ['iOS & Android Compatible', 'Offline Functionality', 'App Store Deployment', 'Real-time Notifications'],
    icon: <Smartphone className="w-10 h-10 text-blue-400" />
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce & Online Stores',
    description: 'Turn visitors into paying customers. We build secure shopping platforms using WooCommerce or Custom Stripe Integrations that handle payments and inventory.',
    features: ['WooCommerce / Shopify', 'Secure Payment Gateways', 'Inventory Management', 'Automated Email Receipts'],
    icon: <ShoppingBag className="w-10 h-10 text-yellow-400" />
  },
  {
    id: 'seo-rank',
    title: 'SEO & Google Ranking (AEO/GEO)',
    description: 'We don’t just design; we rank. Our code includes Schema Markup and structured data that helps you reach #1 on Google and appear in AI answers.',
    features: ['Google #1 Ranking Strategy', 'Technical Schema Markup', 'Local Map Pack Optimization', 'Core Web Vitals Speed Fix'],
    icon: <Search className="w-10 h-10 text-green-400" />
  },
  {
    id: 'ai-agents',
    title: 'AI Agents & Chatbot Automation',
    description: 'Reduce manual work. We program intelligent AI agents (Gemini/OpenAI) that plug into your website or WhatsApp to answer customer questions 24/7.',
    features: ['Custom Knowledge Base', 'WhatsApp Auto-Reply', '24/7 Customer Support', 'Lead Qualification'],
    icon: <Bot className="w-10 h-10 text-purple-400" />
  },
  {
    id: 'redesign',
    title: 'Website Redesign & Rescue',
    description: 'Have an old, slow, or ugly website? We modernize it. We migrate legacy sites to modern servers and give them a complete visual and speed overhaul.',
    features: ['Visual Modernization', 'Speed Optimization (100/100)', 'Mobile Responsiveness Fix', 'Safe Data Migration'],
    icon: <RefreshCw className="w-10 h-10 text-orange-400" />
  },
  {
    id: 'setup',
    title: 'Technical Setup & Hosting',
    description: 'Stop struggling with DNS and servers. We handle the boring technical work so you don’t have to. Domains, emails, and SSL certificates set up correctly.',
    features: ['Domain Registration', 'Professional Email Setup', 'DNS & SSL Configuration', 'Cloud Server Management'],
    icon: <Server className="w-10 h-10 text-slate-400" />
  }
];

const ServicesView: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-slate-200 font-sans selection:bg-indigo-500/30">
      
      {/* 1. GEO OPTIMIZATION: Specific Title Tags */}
      <Helmet>
        <title>Our Services | Web Development, Apps, & SEO in Malaysia - SyncVision Labs</title>
        <meta name="description" content="Full-service digital agency. From Custom Next.js coding and Mobile Apps to fast WordPress design and SEO ranking. View our full service list." />
      </Helmet>

      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tighter mb-6 text-white">
            DIGITAL INFRASTRUCTURE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
              FULL SERVICE LIST.
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            We are a full-spectrum technical partner. Whether you need a simple WordPress site, 
            a complex mobile app, or AI automation, we have the engineering capability to deliver.
          </p>
        </div>

        {/* The "Simple" Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-slate-900/40 border border-slate-800 p-8 rounded-xl hover:bg-slate-900/60 hover:border-indigo-500/30 transition-all duration-300 group"
            >
              {/* Header: Icon + Title */}
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 group-hover:border-indigo-500/50 transition-colors">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-100 mb-2">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Description (SEO Rich Text) */}
              <p className="text-slate-400 leading-relaxed mb-6 border-b border-slate-800 pb-6">
                {service.description}
              </p>

              {/* Feature List (GEO Bullet Points) */}
              <ul className="space-y-3">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-indigo-500" />
                    {feature}
                  </li>
                ))}
              </ul>

            </div>
          ))}
        </div>
        
        {/* Call to Action at Bottom */}
        <div className="mt-20 text-center p-10 border border-slate-800 rounded-2xl bg-gradient-to-b from-slate-900/50 to-transparent">
          <h2 className="text-3xl font-bold text-white mb-4">Not sure what you need?</h2>
          <p className="text-slate-400 mb-8">
            Tell us your goal (e.g., "I need more sales" or "I need a professional look"), 
            and we will recommend the right architecture.
          </p>
          <Link to="/contact" className="inline-block bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-indigo-50 transition-colors">
            Get a Free Consultation
          </Link>
        </div>

      </main>
    </div>
  );
};

export default ServicesView;