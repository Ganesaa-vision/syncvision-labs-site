import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const sanityClient = createClient({
  projectId: 'ipw573g9',
  dataset: 'production',
  useCdn: false, // Set to false if you want fresh data every request (bypasses cache)
  apiVersion: '2024-10-28', // Use today's date
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: any) {
  return builder.image(source);
}

export async function getBlogPosts() {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    "id": _id,
    title,
    "slug": slug.current,
    excerpt,
    "image": mainImage.asset->url,
    "category": categories[0]->title,
    "date": publishedAt,
    readTime,
    "author": author->name
  }`;
  return sanityClient.fetch(query);
}

export async function getBlogPostBySlug(slug: string) {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    "id": _id,
    title,
    "slug": slug.current,
    excerpt,
    "image": mainImage.asset->url,
    "category": categories[0]->title,
    "date": publishedAt,
    readTime,
    "author": author->name,
    body
  }`;
  return sanityClient.fetch(query, { slug });
}