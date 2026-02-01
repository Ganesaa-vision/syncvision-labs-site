import React, { ReactNode, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, BrainCircuit, FileText, LucideIcon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import SchemaMarkup from '../../components/SchemaMarkup';

interface ServiceLayoutProps {
  title: string;
  subtitle: string;
  seoTitle: string;
  seoDescription: string;
  features: string[];
  caseStudy?: {
    client?: string;
    result: string;
  };
  schema?: Record<string, any>;
  canonicalUrl?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  children?: ReactNode;
  heroIcon?: LucideIcon;
}

const ServiceLayout: React.FC<ServiceLayoutProps> = ({
  title,
  subtitle,
  seoTitle,
  seoDescription,
  features,
  caseStudy,
  schema,
  canonicalUrl,
  ogTitle,
  ogDescription,
  ogImage,
  children,
  heroIcon: HeroIcon = BrainCircuit
}) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
        {ogTitle && <meta property="og:title" content={ogTitle} />}
        {ogDescription && <meta property="og:description" content={ogDescription} />}
        {ogImage && <meta property="og:image" content={ogImage} />}
      </Helmet>
      {schema && <SchemaMarkup schema={schema} />}

      <div className="min-h-screen bg-slate-950 text-slate-200 pt-32 pb-20 relative overflow-hidden">
        {/* Premium Ambient Background */}
        <div className="fixed inset-0 w-full h-full pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-500/10 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-emerald-500/10 rounded-full blur-[120px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Hero Section: Split Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Link to="/services" className="text-indigo font-mono text-xs font-black uppercase tracking-[0.2em] mb-6 block hover:underline">
                ← Back to Intelligence
              </Link>
              <h1 className="text-5xl md:text-7xl font-mono font-black text-slate-100 uppercase tracking-tighter leading-none mb-8">
                {title}
              </h1>
              <p className="text-xl text-slate-400 font-medium leading-relaxed border-l-4 border-indigo pl-6">
                {subtitle}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-square lg:aspect-video bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-[2rem] overflow-hidden flex items-center justify-center shadow-2xl"
            >
               <div className="absolute inset-0 bg-gradient-to-br from-indigo/20 to-transparent opacity-50"></div>
               <HeroIcon size={120} className="text-indigo/50 animate-pulse" />
            </motion.div>
          </div>

          {/* Features: 2x2 Grid */}
          <div className="mb-32">
            <h3 className="font-mono text-slate-100 text-2xl uppercase tracking-[0.2em] font-black mb-12">Target Parameters</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 bg-white/[0.02] backdrop-blur-lg border border-white/10 rounded-3xl hover:border-indigo/40 transition-all group hover:bg-white/[0.04] hover:shadow-lg hover:shadow-indigo/10"
                >
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="text-indigo shrink-0 mt-1" size={24} />
                    <span className="text-lg font-bold text-slate-200">{feature}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Detailed Content (Guide & Pricing) */}
          {children && (
            <div className="mb-32">
              {children}
            </div>
          )}

          {/* Proof: Bottom Dark Section */}
          {caseStudy && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-900 border border-indigo/20 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo to-transparent opacity-50"></div>
              <span className="font-mono text-indigo text-xs font-black uppercase tracking-[0.4em] mb-6 block">Verified Output</span>
              <h2 className="text-3xl md:text-5xl font-mono font-black text-slate-100 uppercase tracking-tighter mb-8">
                {caseStudy.result}
              </h2>
              {caseStudy.client && (
                <p className="text-slate-400 font-mono text-sm uppercase tracking-widest mb-12">
                  Client: {caseStudy.client}
                </p>
              )}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                 <Link to="/contact" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-indigo-600 text-white font-mono text-sm font-black uppercase tracking-widest rounded-xl hover:bg-indigo-500 transition-all shadow-lg hover:shadow-indigo-500/25 group">
                    Initiate Protocol <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                 </Link>
                 <Link to="/work" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/5 border border-white/10 text-slate-200 font-mono text-sm font-black uppercase tracking-widest rounded-xl hover:bg-white/10 hover:border-white/20 transition-all group backdrop-blur-md">
                    Access Classified Report <FileText size={18} className="text-slate-400 group-hover:text-indigo transition-colors" />
                 </Link>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
};

export default ServiceLayout;