import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'ipw573g9',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-10-28',
});

client.fetch(`*[_type == "post"] | order(publishedAt desc) {
    "id": _id,
    title,
    "slug": slug.current,
    excerpt,
    "image": mainImage.asset->url,
    "category": categories[0]->title,
    "date": publishedAt,
    readTime,
    "author": author->name
}`).then(data => console.log(JSON.stringify(data, null, 2))).catch(console.error);