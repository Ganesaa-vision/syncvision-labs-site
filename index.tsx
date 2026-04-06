/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Premium preloader removal:
// 1. Wait minimum 1.8s so the full animation sequence plays out
// 2. Wait for React to commit at least one painted frame
// 3. Then play exit animation and clean up DOM
const PRELOADER_MIN_MS = 1800;
const preloaderStart = Date.now();

const dismissPreloader = () => {
  const elapsed = Date.now() - preloaderStart;
  const remaining = Math.max(0, PRELOADER_MIN_MS - elapsed);

  setTimeout(() => {
    const el = document.getElementById('app-preloader');
    if (!el) return;
    el.classList.add('pl-exit'); // triggers CSS scale+fade transition
    setTimeout(() => el.remove(), 650); // cleanup after transition
  }, remaining);
};

// Double RAF = guaranteed first React frame has been committed to DOM
requestAnimationFrame(() => requestAnimationFrame(dismissPreloader));

// Performance Metrics Logger
window.addEventListener('load', () => {
  const timing = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  if (timing) {
    console.groupCollapsed('🚀 Performance Metrics');
    console.log(`DNS Lookup: ${(timing.domainLookupEnd - timing.domainLookupStart).toFixed(2)}ms`);
    console.log(`TCP Connection: ${(timing.connectEnd - timing.connectStart).toFixed(2)}ms`);
    console.log(`Time to First Byte (TTFB): ${(timing.responseStart - timing.requestStart).toFixed(2)}ms`);
    console.log(`DOM Content Loaded: ${(timing.domContentLoadedEventEnd - timing.requestStart).toFixed(2)}ms`);
    console.log(`Full Page Load: ${(timing.loadEventEnd - timing.requestStart).toFixed(2)}ms`);
    console.groupEnd();
  }
});