import React, { useLayoutEffect, useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation } from 'react-router-dom';
import { m, LazyMotion, domAnimation } from 'framer-motion';
import { Search, Calendar, Clock, ArrowRight, User } from 'lucide-react';
import Footer from '../components/Footer';
import { BLOG_POSTS } from '../constants';

const BlogView: React.FC = () => {
  const { pathname } = useLocation();
  const [searchQuery, setSearchQuery] = useState("");

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  const filteredPosts = useMemo(() => BLOG_POSTS.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.category.toLowerCase().includes(searchQuery.toLowerCase())
  ), [searchQuery]);

  return (
    <LazyMotion features={domAnimation}>
      <div className="min-h-screen flex flex-col bg-white dark:bg-[#0a0a0a] text-slate-900 dark:text-slate-200 font-sans selection:bg-indigo-500/30 transition-colors duration-300">
        <Helmet>
          <title>Digital Insights & Engineering Blog | Omino Tech Malaysia</title>
          <meta name="description" content="Expert insights on Web Development, SEO, AI Automation, and Digital Transformation for Malaysian businesses. Read our latest engineering logs." />
          <meta name="keywords" content="Web Dev Blog Malaysia, SEO Tips, Next.js Tutorial, Business Automation, Digital Transformation" />
          <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
          <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <meta name="apple-mobile-web-app-title" content="Omino Tech" />
          <link rel="manifest" href="/site.webmanifest" />
        </Helmet>

        {/* Background Ambient Glow */}
        <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/5 dark:bg-indigo-500/5 rounded-full blur-[100px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/5 dark:bg-purple-500/5 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 pt-24 md:pt-32 pb-12 md:pb-20 px-6 max-w-7xl mx-auto flex-grow w-full">
          
          {/* HERO SECTION */}
          <m.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <span className="font-mono text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Engineering Logs</span>
            <h1 className="text-4xl md:text-7xl font-black font-mono tracking-tighter mb-6 text-slate-900 dark:text-white leading-none">
              INSIGHTS & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-500">
                INTELLIGENCE.
              </span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10">
              Decoding the future of the Malaysian Digital Economy. From technical deep-dives to strategic business automation.
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full flex items-center px-6 py-4 shadow-lg">
                    <Search className="w-5 h-5 text-slate-400 mr-4" />
                    <input 
                        type="text" 
                        placeholder="Search articles..." 
                        className="bg-transparent border-none outline-none flex-grow text-slate-900 dark:text-white placeholder-slate-400 font-medium"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>
          </m.div>

          {/* FEATURED POST */}
          {filteredPosts.length > 0 && !searchQuery && (
            <m.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-20"
            >
               <Link to={`/blog/${filteredPosts[0].slug}`} className="group relative block w-full aspect-[16/9] md:aspect-[21/9] rounded-[2.5rem] overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl">
                  <img 
                    src={filteredPosts[0].image} 
                    alt={filteredPosts[0].title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  
                  <div className="absolute bottom-0 left-0 p-8 md:p-16 w-full md:w-2/3">
                     <div className="flex items-center gap-4 text-xs font-mono font-bold uppercase tracking-widest text-indigo-400 mb-4">
                        <span className="px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/30 backdrop-blur-md">
                           {filteredPosts[0].category}
                        </span>
                        <span className="text-slate-300 flex items-center gap-2">
                           <Calendar size={12} /> {filteredPosts[0].date}
                        </span>
                     </div>
                     <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight group-hover:text-indigo-200 transition-colors">
                        {filteredPosts[0].title}
                     </h2>
                     <p className="text-slate-300 text-lg line-clamp-2 md:line-clamp-3 mb-8 leading-relaxed">
                        {filteredPosts[0].excerpt}
                     </p>
                     <div className="flex items-center gap-3 text-white font-bold text-sm group-hover:gap-4 transition-all">
                        Read Article <ArrowRight size={18} />
                     </div>
                  </div>
               </Link>
            </m.div>
          )}

          {/* BLOG GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
             {(searchQuery ? filteredPosts : filteredPosts.slice(1)).map((post, index) => (
                 <m.div 
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                 >
                    <Link to={`/blog/${post.slug}`} className="group block h-full bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-white/5 rounded-3xl overflow-hidden hover:border-indigo-500/30 transition-all duration-500 hover:-translate-y-1 shadow-sm dark:shadow-none flex flex-col">
                        <div className="aspect-video w-full overflow-hidden relative">
                            <img 
                                src={post.image} 
                                alt={post.title} 
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                loading="lazy"
                                decoding="async"
                            />
                            <div className="absolute top-4 left-4">
                                <span className="px-3 py-1 bg-white/90 dark:bg-black/60 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider rounded-lg border border-slate-200 dark:border-white/10 text-indigo-600 dark:text-white">
                                    {post.category}
                                </span>
                            </div>
                        </div>
                        <div className="p-8 flex flex-col flex-grow">
                            <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mb-4 font-mono">
                                <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                                <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 leading-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                {post.title}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 flex-grow">
                                {post.excerpt}
                            </p>
                            <div className="flex items-center justify-between pt-6 border-t border-slate-100 dark:border-white/5 mt-auto">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
                                        <User size={14} className="text-slate-500" />
                                    </div>
                                    <span className="text-xs font-bold text-slate-700 dark:text-slate-300">{post.author}</span>
                                </div>
                                <span className="text-indigo-600 dark:text-indigo-400 font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                                    Read Article <ArrowRight size={16} />
                                </span>
                            </div>
                        </div>
                    </Link>
                 </m.div>
             ))}
          </div>
        </div>
        <Footer />
      </div>
    </LazyMotion>
  );
};

export default BlogView;