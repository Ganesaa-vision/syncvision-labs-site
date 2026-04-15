import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { m, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const WHATSAPP_NUMBER = '601127117920';

/**
 * Context-aware pre-filled WhatsApp message based on the current route.
 * Keeps the user's intent warm — they don't have to re-type what page they came from.
 */
const getContextualMessage = (pathname: string): string => {
  const map: Record<string, string> = {
    '/': "Hi Omino Tech, I'm interested in engineering a high-performance digital asset. Can we discuss my project?",
    '/services': "Hi Omino Tech, I was browsing your services and I'd like to know which one fits my business best.",
    '/services/web-architecture': "Hi Omino Tech, I'm interested in your Custom Web Architecture services. Can we discuss my project?",
    '/services/app-engineering': "Hi Omino Tech, I'd like to explore Mobile App Engineering for my business.",
    '/services/seo-service': "Hi Omino Tech, I want to rank higher on Google. Can we discuss your SEO services?",
    '/services/seo-dominance': "Hi Omino Tech, I want to dominate search results. Tell me about SEO Dominance.",
    '/services/automation': "Hi Omino Tech, I'm interested in AI Automation & WhatsApp AI agents for my business.",
    '/services/ecommerce': "Hi Omino Tech, I'd like to build a high-converting e-commerce store with Malaysian payment gateways.",
    '/services/web-management': "Hi Omino Tech, I'm interested in your Web Management & maintenance services.",
    '/services/server-setup': "Hi Omino Tech, I'd like to discuss Server Setup & hosting solutions.",
    '/work': "Hi Omino Tech, I saw your work portfolio and I'd like to discuss a similar project.",
    '/about': "Hi Omino Tech, I'd like to connect with your team about a potential project.",
    '/blog': "Hi Omino Tech, I was reading your blog and wanted to reach out.",
  };

  // Blog post pages: /blog/:slug
  if (pathname.startsWith('/blog/')) {
    return "Hi Omino Tech, I was reading one of your blog posts and wanted to reach out about a project.";
  }

  return map[pathname] || "Hi Omino Tech, I'd like to discuss a project with your team.";
};

/**
 * Premium Floating WhatsApp FAB — site-wide contact shortcut.
 * - Hides on /contact (redundant there)
 * - Context-aware pre-filled message based on the current route
 * - Appears with a delayed entrance (non-intrusive)
 * - Pulsing rings + "online" indicator + hover tooltip
 * - Respects reduced-motion (Framer Motion handles this gracefully)
 */
const FloatingWhatsAppFAB: React.FC = () => {
  const { pathname } = useLocation();
  const [isMounted, setIsMounted] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  // Don't render on contact page — redundant
  const shouldHide = pathname === '/contact';

  // Delayed entrance (2.5s) so it doesn't feel aggressive on page load
  useEffect(() => {
    if (shouldHide) {
      setIsMounted(false);
      return;
    }
    const timer = setTimeout(() => setIsMounted(true), 2500);
    return () => clearTimeout(timer);
  }, [shouldHide, pathname]);

  // Auto-show tooltip once per session after button appears (subtle nudge)
  useEffect(() => {
    if (!isMounted || isDismissed) return;
    const hasSeen = sessionStorage.getItem('wa_tooltip_seen');
    if (hasSeen) return;

    const showTimer = setTimeout(() => {
      setShowTooltip(true);
      sessionStorage.setItem('wa_tooltip_seen', '1');
    }, 1500);

    const hideTimer = setTimeout(() => setShowTooltip(false), 7500);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, [isMounted, isDismissed]);

  const handleClick = () => {
    const message = getContextualMessage(pathname);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleDismiss = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsDismissed(true);
  };

  if (shouldHide || isDismissed) return null;

  return (
    <AnimatePresence>
      {isMounted && (
        <m.div
          initial={{ opacity: 0, scale: 0.3, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.3, y: 40 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[100] flex flex-col items-end gap-3"
          style={{
            paddingBottom: 'env(safe-area-inset-bottom)',
            paddingRight: 'env(safe-area-inset-right)',
          }}
        >
          {/* --- TOOLTIP CARD (desktop + mobile) --- */}
          <AnimatePresence>
            {showTooltip && (
              <m.div
                initial={{ opacity: 0, x: 30, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 30, scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                className="relative mr-1 max-w-[280px]"
              >
                {/* Dismiss pill */}
                <button
                  onClick={handleDismiss}
                  aria-label="Dismiss WhatsApp chat prompt"
                  className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200 z-10"
                >
                  <X size={12} strokeWidth={3} />
                </button>

                {/* Tooltip Card */}
                <div
                  role="button"
                  tabIndex={0}
                  onClick={handleClick}
                  onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleClick()}
                  className="cursor-pointer bg-white dark:bg-[#0a0a0a] border border-slate-200 dark:border-white/10 rounded-2xl shadow-2xl p-4 pr-5 relative overflow-hidden group"
                >
                  {/* Subtle gradient accent bar */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#25D366] via-[#128C7E] to-[#25D366]"></div>

                  {/* Online row */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-green-600 dark:text-green-500">Online Now</span>
                  </div>

                  {/* Message */}
                  <p className="text-sm font-bold text-slate-900 dark:text-white leading-tight mb-1">
                    Got a project in mind?
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    Chat with our team — <span className="text-green-600 dark:text-green-500 font-semibold">replies in minutes</span>
                  </p>

                  {/* Arrow pointing to button */}
                  <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white dark:bg-[#0a0a0a] border-r border-b border-slate-200 dark:border-white/10 transform rotate-45"></div>
                </div>
              </m.div>
            )}
          </AnimatePresence>

          {/* --- MAIN FAB BUTTON --- */}
          <m.button
            onClick={handleClick}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            className="relative flex items-center justify-center group focus:outline-none focus-visible:ring-4 focus-visible:ring-green-500/40 rounded-full"
            aria-label="Chat with Omino Tech on WhatsApp"
          >
            {/* Pulsing ring 1 (outer, slower) */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping" style={{ animationDuration: '2.5s' }}></span>

            {/* Pulsing ring 2 (inner, faster, offset) */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-20 animate-ping" style={{ animationDuration: '3s', animationDelay: '0.7s' }}></span>

            {/* Outer glow on hover */}
            <span className="absolute -inset-2 rounded-full bg-gradient-to-tr from-[#25D366] via-[#128C7E] to-[#25D366] blur-xl opacity-50 group-hover:opacity-90 transition-opacity duration-500"></span>

            {/* Main button body */}
            <span className="relative w-14 h-14 md:w-[60px] md:h-[60px] rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] flex items-center justify-center shadow-[0_8px_30px_rgba(37,211,102,0.45)] border border-white/20 overflow-hidden">
              {/* Shine sweep on hover */}
              <span className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-[shine_1s_ease-out] transition-opacity"></span>

              {/* WhatsApp Logo */}
              <svg
                viewBox="0 0 24 24"
                width="28"
                height="28"
                fill="#ffffff"
                className="relative z-10 md:w-[30px] md:h-[30px] drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)] group-hover:scale-110 transition-transform duration-300"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>

              {/* Online indicator dot */}
              <span className="absolute top-1 right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400 border-2 border-white shadow-sm"></span>
              </span>
            </span>
          </m.button>
        </m.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingWhatsAppFAB;
