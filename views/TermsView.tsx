import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import { m, LazyMotion, domAnimation } from 'framer-motion';
import { IMAGES } from '../images';

const TermsView: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  return (
    <LazyMotion features={domAnimation}>
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#0a0a0a] text-slate-900 dark:text-slate-200 font-sans transition-colors duration-300">
      <Helmet>
        <title>Terms of Service | Omino Tech</title>
        <meta name="description" content="Terms of Service for Omino Tech services and digital products." />
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Omino Tech" />
        <meta property="og:image" content={IMAGES.GLOBAL.OG_IMAGE} />
        <meta name="twitter:image" content={IMAGES.GLOBAL.OG_IMAGE} />
        <link rel="manifest" href="/site.webmanifest" />
      </Helmet>

      <m.main initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} className="pt-32 pb-20 px-6 max-w-4xl mx-auto flex-grow w-full">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-cyan-500 to-fuchsia-500 dark:from-indigo-400 dark:via-cyan-300 dark:to-purple-400 mb-8 leading-[1.1]">Terms of Service</h1>
        <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-400">
          <p className="font-mono text-xs uppercase tracking-widest mb-8">Last Updated: {new Date().getFullYear()}</p>
          
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4">1. Agreement to Terms</h3>
          <p>By accessing our website and using our services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>

          <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4">2. Services</h3>
          <p>Omino Tech provides digital infrastructure, web development, and software engineering services. Specific deliverables are defined in individual project contracts.</p>

          <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4">3. Intellectual Property</h3>
          <p>Unless otherwise stated in a specific contract, we grant clients full ownership of the code and assets we create for them upon full payment. We retain the right to showcase the work in our portfolio.</p>

          <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4">4. Payment Terms</h3>
          <p>Payment schedules are defined in project proposals. We generally require a deposit to commence work. Late payments may incur interest charges.</p>

          <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4">5. Governing Law</h3>
          <p>These terms are governed by the laws of Malaysia.</p>
        </div>
      </m.main>
      <Footer />
    </div>
    </LazyMotion>
  );
};

export default TermsView;