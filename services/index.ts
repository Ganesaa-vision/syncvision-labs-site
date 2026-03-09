import { BlogPost, Product, JournalArticle } from '../types';
import { IMAGES } from '../images';

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    slug: 'nextjs-vs-wordpress-malaysia',
    title: 'Why Next.js is Better than WordPress for Malaysian SMEs',
    excerpt: 'Speed, security, and SEO. Discover why modern Malaysian businesses are switching from slow WordPress templates to custom Next.js architectures.',
    image: IMAGES.WEB_ARCHITECTURE.TIER_INNOVATOR,
    category: 'Engineering',
    date: 'Oct 12, 2024',
    readTime: '5 min read',
    author: 'Ganesaa',
    content: `<p>In the competitive digital landscape of Malaysia, speed is currency. While WordPress powers 40% of the web, its reliance on heavy plugins and PHP processing often leads to slow load times, especially on mobile networks in rural areas.</p><p>Next.js, a React framework, pre-renders pages at build time. This means when a customer visits your site, they receive static HTML instantly. No database queries, no PHP processing. Just raw speed.</p><h3>The SEO Advantage</h3><p>Google's Core Web Vitals heavily penalize slow sites. By switching to Next.js, our clients typically see a 30-50% improvement in Lighthouse scores, directly translating to higher rankings on Google.com.my.</p>`
  },
  {
    id: '2',
    slug: 'whatsapp-automation-guide',
    title: 'Automating Sales with WhatsApp Business API',
    excerpt: 'How to set up a 24/7 sales agent on WhatsApp that qualifies leads and closes deals while you sleep.',
    image: IMAGES.HOME.FUTURE_TECH_AI_NETWORK,
    category: 'Automation',
    date: 'Oct 08, 2024',
    readTime: '4 min read',
    author: 'Co-Founder',
    content: `<p>Malaysians love WhatsApp. It is the primary communication channel for commerce. However, manually replying to "PM price" messages is a waste of human potential.</p><p>By integrating the WhatsApp Business API with an AI agent, you can automate the entire initial sales conversation. The bot can answer FAQs, send catalogs, and even process orders using FPX payment links.</p>`
  },
  {
    id: '3',
    slug: 'seo-dominance-strategy',
    title: 'The "17-Day" SEO Strategy: A Case Study',
    excerpt: 'How we took a local manufacturer from zero visibility to Rank #1 on Google for high-value industrial keywords.',
    image: IMAGES.SEO.CASE_STUDY_AFTER,
    category: 'Case Study',
    date: 'Sep 28, 2024',
    readTime: '6 min read',
    author: 'Ganesaa',
    content: `<p>Ranking a new website usually takes 3-6 months. We did it in 17 days. How? Programmatic SEO.</p><p>Instead of writing one page at a time, we engineered a system to generate hundreds of high-quality, location-specific landing pages targeting long-tail keywords like "Pre-insulated pipe supplier Selangor" and "Industrial piping KL".</p>`
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'LifeSync',
    price: 0,
    category: 'Mobile',
    description: 'A revolutionary productivity ecosystem built on the "Second Brain" methodology.',
    longDescription: 'LifeSync integrates tasks, notes, and goals into a single "Universal Mind" powered by AI. It uses local-first architecture for zero-latency interactions.',
    features: ['Offline-First', 'AI Synthesis', 'Cross-Platform'],
    imageUrl: IMAGES.WEB_ARCHITECTURE.PORTFOLIO_HEALTHCARE,
    status: 'In Development',
    tagline: 'The Second Brain.'
  },
  {
    id: 'p2',
    name: 'MediMy',
    price: 0,
    category: 'Systems',
    description: 'Clinic Management System (CMS) designed for modern healthcare facilities.',
    longDescription: 'Handles patient records, appointment scheduling, and inventory in one secure dashboard. Compliant with Malaysian healthcare data regulations.',
    features: ['Patient Records', 'Inventory OS', 'Tele-Health'],
    imageUrl: IMAGES.WEB_ARCHITECTURE.PORTFOLIO_HEALTHCARE,
    status: 'Beta',
    tagline: 'Clinic OS.'
  }
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: 'j1',
    title: 'The Death of the "Brochure" Website',
    date: '2024.10.01',
    excerpt: 'Why static corporate sites are dying and dynamic digital assets are taking over.',
    image: IMAGES.HOME.SYSTEM_ARCHITECTURE,
    content: 'Static websites are dead. In the age of AI, your website needs to be an active participant in your business...'
  },
  {
    id: 'j2',
    title: 'Engineering Trust',
    date: '2024.09.15',
    excerpt: 'How clean code and fast load times subconsciously build trust with your customers.',
    image: IMAGES.HOME.DIGITAL_FOUNDRY,
    content: 'Speed is trust. When a site loads instantly, users perceive the business as competent and reliable...'
  }
];