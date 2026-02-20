import fs from 'fs';
import path from 'path';
import { BLOG_POSTS } from '../constants';

const BASE_URL = 'https://ominostech.com';
const SITEMAP_PATH = path.resolve(process.cwd(), 'public/sitemap.xml');

const staticRoutes = [
    '',
    '/services',
    '/services/web-architecture',
    '/services/app-engineering',
    '/services/seo-service',
    '/services/automation',
    '/services/ecommerce',
    '/services/web-management',
    '/services/server-setup',
    '/work',
    '/about',
    '/blog',
    '/contact',
    '/products',
];

const generateSitemap = () => {
    const urls = [
        ...staticRoutes.map(route => ({
            loc: `${BASE_URL}${route}`,
            lastmod: new Date().toISOString().split('T')[0],
            changefreq: route === '' ? 'daily' : 'weekly',
            priority: route === '' ? '1.0' : '0.8'
        })),
        ...BLOG_POSTS.map(post => ({
            loc: `${BASE_URL}/blog/${post.slug}`,
            lastmod: new Date(post.date).toISOString().split('T')[0],
            changefreq: 'monthly',
            priority: '0.7'
        }))
    ];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

    fs.writeFileSync(SITEMAP_PATH, sitemap);
    console.log(`✅ Sitemap generated at ${SITEMAP_PATH}`);
};

generateSitemap();