import { JournalArticle, Product, PortfolioItem } from './types';

export const BRAND_NAME = "SyncVision";
export const TAGLINE = "Strategic Digital Foundry";
export const BRAND_DOMAIN = "syncvisionlabs.com";

export const FOUNDER = {
  name: "Ganesaa",
  title: "Lead Architect",
  bio: "Full-stack engineer specialized in high-performance web architecture and AI integration."
};

export const CO_FOUNDER = {
  name: "Partner",
  title: "Strategy Lead",
  bio: "Business strategist focused on digital transformation and market dominance."
};

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: '1',
    title: 'The Future of AI in Web Development',
    date: 'OCT 2023',
    excerpt: 'How autonomous agents are reshaping the digital landscape.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop',
    content: 'Full article content here...'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Nexus Core',
    price: 5000,
    category: 'Core',
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2000&auto=format&fit=crop',
    description: 'High-performance web infrastructure.',
    features: ['Next.js', 'TypeScript', 'Tailwind'],
    status: 'Stable',
    tagline: 'The Foundation'
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: '1',
    type: 'CLIENT',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=2000',
    title: 'Industrial Corp',
    role: 'Digital Transformation',
    mission: 'Modernize legacy systems.',
    results: ['50% Faster Load', '2x Leads']
  },
  {
    id: '2',
    type: 'CLIENT',
    image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=2000',
    title: 'E-commerce Giant',
    role: 'Headless Commerce',
    mission: 'Build a scalable and flexible e-commerce platform.',
    results: ['30% increase in conversion rate', '100ms average page load time']
  },
  {
    id: '3',
    type: 'CLIENT',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=2000',
    title: 'Fintech Startup',
    role: 'Mobile App Development',
    mission: 'Create a cross-platform mobile app for personal finance.',
    results: ['App Store rating of 4.8 stars', '50,000+ downloads in the first 3 months']
  },
  {
    id: '4',
    type: 'INTERNAL',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2000',
    title: 'Project Alpha',
    role: 'R&D',
    concept: 'Autonomous trading bot.',
    status: 'Beta'
  },
  {
    id: '5',
    type: 'INTERNAL',
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=2000',
    title: 'Project Beta',
    role: 'R&D',
    concept: 'AI-powered code generation.',
    status: 'In Development'
  },
  {
    id: '6',
    type: 'INTERNAL',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=2000',
    title: 'Project Gamma',
    role: 'R&D',
    concept: 'Decentralized social media platform.',
    status: 'Alpha'
  }
];