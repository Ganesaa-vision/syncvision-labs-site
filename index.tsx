/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

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