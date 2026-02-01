import { Product, DetailedService, PortfolioItem, JournalArticle } from './types';

export const BRAND_NAME = 'SyncVision Systems';
export const BRAND_DOMAIN = 'SyncVisionSystems.com';
export const TAGLINE = 'Strategic Digital Infrastructure & Innovation Foundry.';

export const PRODUCTS: Product[] = [
  {
    id: 'lifesync-os',
    name: 'LifeSync OS',
    tagline: 'The Behavioral Operating System',
    description: 'A mobile architecture designed to enforce human focus through software-level locks.',
    longDescription: 'LifeSync is more than an app; it is a system for human optimization. Built on Flutter with a local-first database architecture, it represents our commitment to "Deep Work" and behavioral enforcement.',
    price: 499,
    category: 'Innovation Lab',
    imageUrl: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=1200',
    features: ['Behavioral AI Agent', 'Deep Work Protocols', 'Local-First Sync', 'Supabase Backend'],
    status: 'ACTIVE DEVELOPMENT'
  }
];

export const SERVICES: DetailedService[] = [
  {
    id: 'full-stack-dev',
    category: 'PRESENCE', // Corresponds to Core Infrastructure (Web)
    title: 'Full-Stack Web Development',
    shortDesc: 'From concept to source code.',
    fullDesc: 'From concept to source code. We design, host, and deploy database-linked websites tailored to your brand. Includes full source code delivery for your future control.',
    features: ['Full Source Code Delivery', 'Hosting & Deployment', 'Database Integration', 'Brand-Tailored Design'],
    tech: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'Vercel'],
    icon: 'Code' // Existing icon
  },
  {
    id: 'strategic-redesign',
    category: 'PRESENCE', // Corresponds to Core Infrastructure (Web)
    title: 'Legacy Modernization',
    shortDesc: 'Rescue projects from spaghetti code.',
    fullDesc: 'We don\'t just patch; we re-architect. Transforming legacy WordPress/PHP sites into high-velocity React assets.',
    features: ['Codebase Rewrite', 'Database Migration', 'Speed Optimization', 'Security Hardening'],
    tech: ['Next.js', 'Webflow', 'WordPress', 'Shopify'],
    icon: 'History' // I'll add this to the icon map
  },
  {
    id: 'seo-dominance',
    category: 'PRESENCE', // Corresponds to Growth & Commerce
    title: 'SEO & Market Dominance',
    shortDesc: "We don't just optimize; we rank.",
    fullDesc: "We don't just optimize; we rank. Proven track record of achieving Rank #1 on Google and capturing 'AI Overviews' in under 20 days.",
    features: ['Rank #1 Guarantee', 'AI Overview Capture', 'Technical SEO', 'Industrial Keywords'],
    tech: ['Semrush', 'Ahrefs', 'Google Analytics', 'Python'],
    icon: 'Trophy' // I'll add this to the icon map
  },
  {
    id: 'ecommerce-engineering',
    category: 'PRESENCE', // Corresponds to Growth & Commerce
    title: 'E-Commerce Engineering',
    shortDesc: 'Turn visitors into buyers.',
    fullDesc: 'Turn visitors into buyers. We set up complete shop pages, manage product listings, and integrate secure payment gateways for a seamless retail experience.',
    features: ['Shopify/Stripe Integration', 'Product Management', 'Secure Payments', 'Conversion Rate Optimization'],
    tech: ['Shopify', 'Stripe', 'WooCommerce', 'React'],
    icon: 'ShoppingCart' // I'll add this to the icon map
  },
  {
    id: 'custom-app-dev',
    category: 'ENGINEERING', // Corresponds to Innovation & Automation
    title: 'Custom App Development',
    shortDesc: 'Native iOS and Android apps integrated with secure databases.',
    fullDesc: 'Native iOS and Android apps integrated with secure databases. Built on your specific plans, scalable from MVP to Enterprise.',
    features: ['iOS & Android', 'Secure Database', 'Scalable Architecture', 'MVP to Enterprise'],
    tech: ['Flutter', 'React Native', 'Firebase', 'AWS'],
    icon: 'Smartphone' // Existing icon
  },
  {
    id: 'whatsapp-business',
    category: 'OPERATIONS', // Corresponds to Innovation & Automation
    title: 'WhatsApp Automation Systems',
    shortDesc: 'The 24/7 Sales Agent.',
    fullDesc: 'Replace manual data entry with autonomous code. We deploy WhatsApp API agents, CRM syncs, and AI workflows that work 24/7 without a salary.',
    features: ['WhatsApp API Setup', 'Auto-Reply Workflows', 'CRM Synchronization', 'Zero-Error Operations'],
    tech: ['Twilio', 'WhatsApp API', 'Zapier', 'Node.js'],
    icon: 'Bot' // Existing icon
  },
  {
    id: 'custom-ai-agents',
    category: 'ENGINEERING', // Corresponds to Innovation & Automation
    title: 'Custom AI Agents',
    shortDesc: 'Deploy intelligent bots trained on your data.',
    fullDesc: 'Deploy intelligent bots trained on your data. Whether for customer support or internal logic, we build AI agents that work 24/7.',
    features: ['Custom Data Training', '24/7 Operation', 'Customer Support Automation', 'Internal Logic Bots'],
    tech: ['OpenAI API', 'LangChain', 'Python', 'Vector DBs'],
    icon: 'BrainCircuit'
  },
  {
    id: 'digital-presence',
    category: 'PRESENCE',
    title: 'Web Management (DevOps)',
    shortDesc: 'Your dedicated 24/7 infrastructure team.',
    fullDesc: 'We handle the servers, security, and updates so you don\'t have to. Enterprise-grade uptime monitoring and CI/CD pipelines.',
    features: ['24/7 Uptime Monitoring', 'Security Patching', 'Content Updates', 'Server Scaling'],
    tech: ['AWS', 'Vercel', 'Docker', 'GitHub Actions'],
    icon: 'Server'
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: 'industrial-market',
    type: 'CLIENT',
    title: 'From Invisible to Rank #1.',
    role: 'CASE STUDY: INDUSTRIAL SECTOR',
    mission: 'A leading Pre-Insulated Pipe Manufacturer needed digital visibility. We engineered a takeover.',
    execution: ['Technical SEO', 'Headless migration', 'WhatsApp Bot'],
    results: [
      'Rank #1 Global Search (in <20 Days)',
      'Featured in Google AI Overview',
      'Zero-Latency Response (via Auto-WhatsApp)'
    ],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'ecommerce-scale',
    type: 'CLIENT',
    title: 'E-Commerce Velocity.',
    role: 'CASE STUDY: RETAIL',
    mission: 'A retail partner needed to reduce cart abandonment. We rebuilt their checkout logic.',
    execution: ['Headless Architecture', 'Stripe Integration', '1-Click Checkout'],
    results: ['Sub-1s Load Time', '50% Conversion Increase', 'Zero Downtime'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'lifesync-internal',
    type: 'INTERNAL',
    title: 'LifeSync: The Behavioral OS.',
    role: 'INTERNAL R&D: PROPRIETARY TECH',
    status: 'PRIVATE BETA / ACTIVE DEVELOPMENT',
    concept: 'We don\'t just build for others; we build for ourselves. LifeSync enforces human focus.',
    tech: 'Flutter & AI Agents',
    execution: ['Locked UI Logic', 'Supabase Backend', 'Offline-First Sync'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200'
  }
];

export const FOUNDER = {
  name: 'Ganesaa',
  title: 'Lead Architect',
  bio: 'A technology strategist specialized in high-performance digital infrastructure.'
};

export const CO_FOUNDER = {
  name: 'Co-Founder',
  title: 'Chief Strategist',
  bio: 'A business architect focused on translating deep tech into market-leading products.'
};

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: 'seo-2025',
    title: 'ALGORITHM REVERSAL',
    date: 'JAN 2025',
    excerpt: 'The methodology behind our Rank #1 industrial success.',
    content: 'Details on our reverse-engineering process.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200'
  }
];
