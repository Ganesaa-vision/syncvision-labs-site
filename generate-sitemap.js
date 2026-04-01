import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
// We use dynamic import for your constants if they are converted to JS, 
// but to keep this script simple and dependency-free, you can safely pull the routes here.

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_URL = 'https://www.ominotech.com.my';

// Define your static routes
const staticRoutes = [
  '/',
  '/about',
  '/services',
  '/services/web-architecture',
  '/services/app-engineering',
  '/services/seo-service',
  '/products',
  '/blog',
  '/work',
  '/contact',
];

const generateSitemap = () => {
  // Dynamically extract blog slugs directly from your blogPosts.ts file
  const blogPostsContent = fs.readFileSync(path.join(__dirname, 'constants.ts'), 'utf-8');
  const slugRegex = /slug:\s*["']([^"']+)["']/g;
  const dynamicBlogSlugs = [];
  let match;
  while ((match = slugRegex.exec(blogPostsContent)) !== null) {
    dynamicBlogSlugs.push(match[1]);
  }

  const allRoutes = [
    ...staticRoutes,
    ...dynamicBlogSlugs.map(slug => `/blog/${slug}`)
  ];

  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes.map(route => `  <url>
    <loc>${SITE_URL}${route}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${route === '/blog' || route === '/' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

  fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml'), sitemapContent);
  console.log('✅ sitemap.xml generated successfully!');
};

generateSitemap();