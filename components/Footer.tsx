import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { IMAGES } from '../images';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 pt-12 md:pt-16 pb-8 transition-colors duration-300 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16">
          <div className="col-span-1 sm:col-span-2 lg:col-span-2">
            <Link to="/" className="mb-4 md:mb-6 block">
              <img
                src={IMAGES.GLOBAL.LOGO_LIGHT}
                alt="Omino Tech - Strategic Digital Foundry Malaysia"
                className="h-14 w-auto block dark:hidden"
                width="312"
                height="112"
                loading="lazy"
              />
              <img
                src={IMAGES.GLOBAL.LOGO}
                alt="Omino Tech - Strategic Digital Foundry Malaysia"
                className="h-14 w-auto hidden dark:block"
                width="312"
                height="112"
                loading="lazy"
              />
            </Link>
            <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 mb-6 max-w-sm">
              Strategic Digital Foundry. We engineer high-performance digital assets for Malaysian businesses.
            </p>
            <div className="flex gap-4">
            <a href="https://www.facebook.com/profile.php?id=61576647099551&sk=about" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" aria-label="Visit our Facebook"><Facebook size={20} /></a>
            <a href="https://www.instagram.com/ominotech?igsh=MWxhdTZhNjF4cWR6eA==" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" aria-label="Visit our Instagram"><Instagram size={20} /></a>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4 md:mb-6">Menu</h2>
            <ul className="space-y-3 md:space-y-4 text-sm text-slate-600 dark:text-slate-400">
              <li><Link to="/" className="hover:text-indigo-500 transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-indigo-500 transition-colors">Services</Link></li>
              <li><Link to="/work" className="hover:text-indigo-500 transition-colors">Work</Link></li>
              <li><Link to="/about" className="hover:text-indigo-500 transition-colors">About</Link></li>
              <li><Link to="/blog" className="hover:text-indigo-500 transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-indigo-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4 md:mb-6">Contact</h2>
            <ul className="space-y-3 md:space-y-4 text-sm text-slate-600 dark:text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-1 text-indigo-500" />
                <span>Balakong, Selangor, Malaysia</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-indigo-500" />
                <span>+60 12 345 6789</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-indigo-500" />
                <span>ominotechofficial@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-700 dark:text-slate-300">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p className="font-medium">&copy; {currentYear} Omino Tech. All rights reserved.</p>
            <p className="font-medium text-slate-600 dark:text-slate-400">
              <a href="https://www.ssm.com.my/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">SSM</a> Registration No: 202603055630 (NS0319680-K)
            </p>
          </div>
          <div className="flex gap-8">
            <Link to="/privacy" className="font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;