import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [
        react({
          // Fast Refresh optimization
          fastRefresh: true,
        })
      ],
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
        // Performance optimizations
        rollupOptions: {
          output: {
            // Function-based manualChunks — more reliable in Vite 6 than the object form
            // because it matches actual file paths, not just package entry points.
            manualChunks: (id) => {
              if (!id.includes('/node_modules/')) return;
              if (
                id.includes('/react-dom/') ||
                id.includes('/react/') ||
                id.includes('/scheduler/') ||
                id.includes('/react-router') ||
                id.includes('/react-is/')
              ) return 'react-vendor';
              if (id.includes('/framer-motion/')) return 'animation-vendor';
              if (id.includes('/lucide-react/')) return 'ui-vendor';
              if (
                id.includes('/@sanity/') ||
                id.includes('/sanity/') ||
                id.includes('/@portabletext/')
              ) return 'sanity-vendor';
            },
          }
        },
        // Reduce chunk size warnings threshold
        chunkSizeWarningLimit: 1000,
        // Terser gives ~10-15% better compression than esbuild
        minify: 'terser',
        terserOptions: {
          compress: {
            drop_console: true,
            drop_debugger: true,
            pure_funcs: ['console.log', 'console.groupCollapsed', 'console.groupEnd'],
          },
          mangle: true,
        },
        // Target modern browsers — avoids transpiling async/await, optional chaining etc.
        target: 'es2020',
      },
      // Optimize dependencies
      optimizeDeps: {
        include: ['react', 'react-dom', 'react-router-dom', 'framer-motion'],
      },
      // Enable CSS code splitting
      css: {
        devSourcemap: false,
      }
    };
});
