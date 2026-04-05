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
            manualChunks: {
              // Separate vendor chunks for better caching
              'react-vendor': ['react', 'react-dom', 'react-router-dom'],
              'animation-vendor': ['framer-motion'],
              'ui-vendor': ['lucide-react'],
            }
          }
        },
        // Reduce chunk size warnings threshold
        chunkSizeWarningLimit: 1000,
        // Use esbuild for faster minification
        minify: 'esbuild',
        // Target modern browsers for smaller bundles
        target: 'es2015',
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
