import React, { useLayoutEffect, useState, useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { m, LazyMotion, domAnimation, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, User, Tag, Share2, Twitter, Linkedin, Facebook, Mail, ChevronRight, ChevronDown, ChevronUp, Check, ArrowRight } from 'lucide-react';
import { BLOG_POSTS } from '../constants';
import Footer from '../components/Footer';
import { WhatsAppButton } from '../components/WhatsAppButton';

const BlogPostView: React.FC = () => {
  const { slug } = useParams();
  const { pathname } = useLocation();
  const [showShareBar, setShowShareBar] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);
  
  const post = BLOG_POSTS?.find(p => p.slug === slug);

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
        const shouldShow = window.scrollY > 500;
        setShowShareBar(prev => prev !== shouldShow ? shouldShow : prev);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!post) {
      return (
          <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-[#0a0a0a] text-slate-900 dark:text-white">
              <div className="text-center">
                  <h1 className="text-4xl font-bold mb-4">404</h1>
                  <p className="mb-8 text-slate-500">Article not found.</p>
                  <Link to="/blog" className="px-6 py-3 bg-indigo-600 text-white rounded-full font-bold hover:bg-indigo-700 transition-colors">
                      Back to Insights
                  </Link>
              </div>
          </div>
      );
  }

  const relatedPosts = BLOG_POSTS?.filter(p => p.id !== post.id).slice(0, 2) || [];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": post.image,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Omino Tech",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.ominotech.com.my/logo.png"
      }
    },
    "datePublished": "2024-10-12", // In a real app, use post.date
    "description": post.excerpt,
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://www.ominotech.com.my/blog/${post.slug}`
    }
  };

  return (
    <LazyMotion features={domAnimation}>
        <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-[#0a0a0a] text-slate-900 dark:text-slate-200 font-sans selection:bg-indigo-500/30 transition-colors duration-300 relative">
            <Helmet>
                <title>{post.title} | Omino Tech Insights</title>
                <meta name="description" content={post.excerpt} />
                
                {/* Open Graph / Facebook */}
                <meta property="og:type" content="article" />
                <meta property="og:url" content={`https://www.ominotech.com.my/blog/${post.slug}`} />
                <meta property="og:title" content={post.title} />
                <meta property="og:description" content={post.excerpt} />
                <meta property="og:image" content={post.image} />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content={`https://www.ominotech.com.my/blog/${post.slug}`} />
                <meta name="twitter:title" content={post.title} />
                <meta name="twitter:description" content={post.excerpt} />
                <meta name="twitter:image" content={post.image} />
                <link rel="icon" href="https://www.ominotech.com.my/favicon.ico" />

                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
            </Helmet>

            {/* Background Ambient Glow */}
            <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/5 dark:bg-indigo-500/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/5 dark:bg-purple-500/5 rounded-full blur-[100px]" />
            </div>

            {/* Progress Bar could go here */}

            <div className="relative z-10 pt-32 pb-20 px-6 max-w-7xl mx-auto flex-grow w-full">
                {/* Breadcrumbs (SEO Structure) */}
                <nav className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-500 mb-8">
                    <Link to="/" className="hover:text-indigo-500 transition-colors">Home</Link>
                    <ChevronRight size={12} />
                    <Link to="/blog" className="hover:text-indigo-500 transition-colors">Insights</Link>
                    <ChevronRight size={12} />
                    <span className="text-slate-900 dark:text-white truncate max-w-[200px]">{post.title}</span>
                </nav>

                <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors mb-12 group">
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Insights
                </Link>

                <m.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-12"
                >
                    <div className="lg:col-span-8">
                        {/* Meta Tags */}
                        <div className="flex flex-wrap gap-4 mb-8 text-xs font-mono font-bold uppercase tracking-widest">
                            <span className="px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-300 flex items-center gap-2 border border-indigo-200 dark:border-indigo-500/30">
                                <Tag size={12} /> {post.category}
                            </span>
                            <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 flex items-center gap-2 border border-slate-200 dark:border-slate-700">
                                <Clock size={12} /> {post.readTime}
                            </span>
                        </div>

                    {/* Title */}
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mb-10 leading-[1.1] tracking-tight">
                        {post.title}
                    </h1>

                    {/* Author Bar */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between border-y border-slate-200 dark:border-white/10 py-6 mb-12 gap-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold shadow-lg">
                                <User size={20} />
                            </div>
                            <div>
                                <div className="font-bold text-slate-900 dark:text-white text-sm">{post.author}</div>
                                <div className="text-xs text-slate-500 flex items-center gap-2 mt-1 font-mono">
                                    <Calendar size={12} /> {post.date}
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <button className="p-3 rounded-full bg-slate-100 dark:bg-slate-900 hover:bg-blue-50 dark:hover:bg-blue-900/30 text-slate-400 hover:text-blue-500 transition-all"><Twitter size={18} /></button>
                            <button className="p-3 rounded-full bg-slate-100 dark:bg-slate-900 hover:bg-blue-50 dark:hover:bg-blue-900/30 text-slate-400 hover:text-blue-700 transition-all"><Linkedin size={18} /></button>
                            <button className="p-3 rounded-full bg-slate-100 dark:bg-slate-900 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 text-slate-400 hover:text-indigo-500 transition-all"><Share2 size={18} /></button>
                        </div>
                    </div>

                    {/* Featured Image */}
                    <div className="aspect-video w-full rounded-[2rem] overflow-hidden mb-16 shadow-2xl border border-slate-200 dark:border-white/10">
                        <img src={post.image} alt={post.title} className="w-full h-full object-cover" decoding="async" />
                    </div>

                    {/* Article Content */}
                    <div 
                        className="space-y-8 text-lg leading-relaxed text-slate-600 dark:text-slate-300"
                        dangerouslySetInnerHTML={{ __html: post.content || "" }}
                    />

                    {/* Author Bio (E-E-A-T Signal) */}
                    <div className="mt-16 p-8 bg-slate-100 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row gap-6 items-center sm:items-start">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-2xl shadow-lg flex-shrink-0">
                            {post.author.charAt(0)}
                        </div>
                        <div className="text-center sm:text-left">
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">About the Author</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                                {post.author} is a Lead Engineer at Omino Tech, specializing in high-performance web architecture and AI integration. With over 5 years of experience in the Malaysian digital landscape.
                            </p>
                            <div className="flex gap-4 justify-center sm:justify-start">
                                <a href="#" className="text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider hover:underline">LinkedIn</a>
                                <a href="#" className="text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider hover:underline">Twitter</a>
                            </div>
                        </div>
                    </div>

                    {/* FAQ Section (AEO Boost) */}
                    <div className="mt-16">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Frequently Asked Questions</h3>
                        <div className="space-y-4">
                            {[
                                { q: "Why is AEO important for Malaysian businesses?", a: "AEO ensures your business appears in AI-generated answers (like Google's AI Overview), which is becoming the primary way users find information." },
                                { q: "How does Next.js improve SEO?", a: "Next.js offers Server-Side Rendering (SSR), which provides search crawlers with fully rendered HTML, improving indexability and ranking potential compared to client-side React apps." }
                            ].map((faq, i) => (
                                <m.div 
                                    key={i} 
                                    className={`border rounded-xl overflow-hidden transition-all duration-300 ${openFaq === i ? 'border-indigo-500 bg-white dark:bg-slate-900 shadow-lg shadow-indigo-500/10' : 'border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 hover:border-indigo-500/30'}`}
                                >
                                    <button 
                                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                        className="w-full flex items-center justify-between p-4 text-left"
                                    >
                                        <span className={`font-bold text-sm md:text-base ${openFaq === i ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-900 dark:text-white'}`}>{faq.q}</span>
                                        {openFaq === i ? <ChevronUp size={16} className="text-indigo-500" /> : <ChevronDown size={16} className="text-slate-500" />}
                                    </button>
                                    <AnimatePresence>
                                        {openFaq === i && (
                                            <m.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                            >
                                                <div className="p-4 pt-0 text-slate-600 dark:text-slate-400 text-sm leading-relaxed border-t border-transparent">
                                                    <div className="pt-2 border-t border-dashed border-slate-200 dark:border-slate-800">{faq.a}</div>
                                                </div>
                                            </m.div>
                                        )}
                                    </AnimatePresence>
                                </m.div>
                            ))}
                        </div>
                    </div>

                    {/* Related Posts */}
                    <div className="mt-24 pt-12 border-t border-slate-200 dark:border-white/10">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Related Insights</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {relatedPosts.map(related => (
                                <Link key={related.id} to={`/blog/${related.slug}`} className="group block h-full bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-white/5 rounded-3xl overflow-hidden hover:border-indigo-500/30 transition-all duration-500 hover:-translate-y-1 shadow-sm dark:shadow-none flex flex-col">
                                    <div className="aspect-video w-full overflow-hidden relative">
                                        <img 
                                            src={related.image} 
                                            alt={related.title} 
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                            loading="lazy"
                                            decoding="async"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="px-3 py-1 bg-white/90 dark:bg-black/60 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider rounded-lg border border-slate-200 dark:border-white/10 text-indigo-600 dark:text-white">
                                                {related.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-8 flex flex-col flex-grow">
                                        <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mb-4 font-mono">
                                            <span className="flex items-center gap-1"><Calendar size={12} /> {related.date}</span>
                                            <span className="flex items-center gap-1"><Clock size={12} /> {related.readTime}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 leading-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                            {related.title}
                                        </h3>
                                        <span className="text-indigo-600 dark:text-indigo-400 font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all mt-auto">
                                            Read Article <ArrowRight size={16} />
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Newsletter Section */}
                    <div className="mt-24 p-8 md:p-12 bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-100 dark:border-indigo-500/20 rounded-3xl text-center">
                        <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-indigo-600 dark:text-indigo-400">
                            <Mail size={32} />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">Join the Inner Circle</h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-lg mx-auto">
                            Get the latest engineering insights, SEO strategies, and digital transformation tips delivered straight to your inbox. No fluff, just code and growth.
                        </p>
                        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
                            <input 
                                type="email" 
                                placeholder="Enter your email" 
                                className="flex-1 px-6 py-4 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl outline-none focus:border-indigo-500 transition-colors text-slate-900 dark:text-white"
                                required
                            />
                            <button type="submit" className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-500/20">
                                Subscribe
                            </button>
                        </form>
                        <p className="text-xs text-slate-500 mt-6">
                            We respect your privacy. Unsubscribe at any time.
                        </p>
                    </div>
                    </div>

                    {/* Sidebar / Table of Contents */}
                    <div className="hidden lg:block lg:col-span-4 relative">
                        <div className="sticky top-32 p-8 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-3xl">
                            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Need a System Like This?</h4>
                            <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">
                                We build high-performance digital assets that rank #1 and convert visitors into customers.
                            </p>
                            <WhatsAppButton 
                                serviceName="Blog Inquiry"
                                buttonText="Start Your Project"
                                className="block w-full py-3 bg-indigo-600 text-white text-center font-bold rounded-xl hover:bg-indigo-700 transition-colors"
                                showIcon={false}
                            />
                        </div>
                    </div>

                </m.div>
            </div>

            <Footer />

            {/* Floating Share Bar */}
            <AnimatePresence>
                {showShareBar && (
                    <m.div 
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 100 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="fixed bottom-10 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2 p-2 pl-6 bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg border border-slate-200 dark:border-slate-800 rounded-full shadow-2xl shadow-indigo-500/10"
                    >
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-widest mr-2">Share</span>
                        <div className="flex gap-1">
                            <button className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-[#1DA1F2] transition-colors"><Twitter size={18} /></button>
                            <button className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-[#0A66C2] transition-colors"><Linkedin size={18} /></button>
                            <button className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-[#1877F2] transition-colors"><Facebook size={18} /></button>
                            <div className="w-px h-4 bg-slate-200 dark:bg-slate-700 my-auto mx-1"></div>
                            <button 
                                onClick={handleCopyLink}
                                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-indigo-500 transition-colors"
                            >
                                {copied ? <Check size={18} className="text-green-500" /> : <Share2 size={18} />}
                            </button>
                        </div>
                    </m.div>
                )}
            </AnimatePresence>
        </div>
    </LazyMotion>
  );
};

export default BlogPostView;