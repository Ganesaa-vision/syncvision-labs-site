import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import { BLOG_POSTS } from '../../constants';

const ArrowLeftIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
);
const CalendarIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
);
const ClockIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
);
const UserIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
);

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<typeof BLOG_POSTS[0] | null>(null);
  const [processedContent, setProcessedContent] = useState('');
  const [headings, setHeadings] = useState<{ id: string; text: string }[]>([]);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const foundPost = BLOG_POSTS.find(p => p.slug === slug);
    
    if (foundPost) {
      setPost(foundPost);
      
      // Process content to add IDs to h2 tags for TOC
      const regex = /<h2.*?>(.*?)<\/h2>/g;
      const newHeadings: { id: string; text: string }[] = [];
      const content = foundPost.content || '';
      
      const newContent = content.replace(regex, (match, title) => {
        const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
        newHeadings.push({ id: slug, text: title });
        
        return `<h2 id="${slug}" class="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mt-12 mb-6 scroll-mt-32 group flex items-center">
          ${title}
          <a href="#${slug}" class="ml-2 opacity-0 group-hover:opacity-100 text-indigo-500 transition-opacity" aria-label="Link to this section">#</a>
        </h2>`;
      });
      
      setProcessedContent(newContent);
      setHeadings(newHeadings);
    } 
  }, [slug, navigate]);

  if (!post) {
    return (
        <div className="min-h-screen bg-obsidian flex items-center justify-center text-white">
            Loading...
        </div>
    );
  }

  return (
    <div className="min-h-screen bg-obsidian text-slate-200 selection:bg-indigo-500/30">
      {/* Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-indigo-500 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-obsidian/80 backdrop-blur-md z-40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/blog" className="flex items-center text-slate-400 hover:text-white transition-colors group">
            <ArrowLeftIcon className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <article className="lg:col-span-8">
            {/* Header */}
            <header className="mb-12">
              <div className="flex gap-2 mb-6">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  {post.category}
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-slate-400 text-sm border-b border-white/10 pb-8">
                <div className="flex items-center gap-2">
                  <UserIcon className="w-4 h-4" />
                  {post.author}
                </div>
                <div className="flex items-center gap-2">
                  <CalendarIcon className="w-4 h-4" />
                  {post.date}
                </div>
                <div className="flex items-center gap-2">
                  <ClockIcon className="w-4 h-4" />
                  {post.readTime}
                </div>
              </div>
            </header>

            {/* Featured Image */}
            <div className="mb-12 rounded-2xl overflow-hidden border border-white/10 aspect-video bg-glass">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div
              className="prose prose-invert prose-lg max-w-none
                prose-headings:text-white prose-p:text-slate-300 prose-p:leading-relaxed
                prose-a:text-indigo-400 prose-a:no-underline hover:prose-a:text-indigo-300
                prose-strong:text-white prose-li:text-slate-300
                prose-blockquote:border-l-indigo-500 prose-blockquote:bg-indigo-500/5 prose-blockquote:p-4 prose-blockquote:rounded-r-lg"
              dangerouslySetInnerHTML={{ __html: processedContent }}
            />
          </article>

          {/* Sidebar / Table of Contents */}
          <aside className="lg:col-span-4 hidden lg:block">
            <div className="sticky top-32 space-y-8">
              {/* TOC */}
              {headings.length > 0 && (
                <div className="bg-glass border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Table of Contents</h3>
                  <nav className="flex flex-col gap-2">
                    {headings.map(heading => (
                      <a
                        key={heading.id}
                        href={`#${heading.id}`}
                        className="text-sm text-slate-400 hover:text-indigo-400 transition-colors py-1 border-l-2 border-transparent hover:border-indigo-500 pl-3 block"
                        onClick={(e) => {
                          e.preventDefault();
                          document.getElementById(heading.id)?.scrollIntoView({ behavior: 'smooth' });
                        }}
                      >
                        {heading.text}
                      </a>
                    ))}
                  </nav>
                </div>
              )}
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default BlogPost;