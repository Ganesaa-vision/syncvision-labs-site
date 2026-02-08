import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const TermsView: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0a0a0a] text-slate-900 dark:text-slate-200 font-sans transition-colors duration-300">
      <Helmet>
        <title>Terms of Service | SyncVision Labs</title>
        <meta name="description" content="Terms of Service for SyncVision Labs services and digital products." />
      </Helmet>

      <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold mb-8 text-slate-900 dark:text-white">Terms of Service</h1>
        <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-400">
          <p className="font-mono text-xs uppercase tracking-widest mb-8">Last Updated: {new Date().getFullYear()}</p>
          
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4">1. Agreement to Terms</h3>
          <p>By accessing our website and using our services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>

          <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4">2. Services</h3>
          <p>SyncVision Labs provides digital infrastructure, web development, and software engineering services. Specific deliverables are defined in individual project contracts.</p>

          <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4">3. Intellectual Property</h3>
          <p>Unless otherwise stated in a specific contract, we grant clients full ownership of the code and assets we create for them upon full payment. We retain the right to showcase the work in our portfolio.</p>

          <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4">4. Payment Terms</h3>
          <p>Payment schedules are defined in project proposals. We generally require a deposit to commence work. Late payments may incur interest charges.</p>

          <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4">5. Governing Law</h3>
          <p>These terms are governed by the laws of Malaysia.</p>
        </div>
      </div>
    </div>
  );
};

export default TermsView;