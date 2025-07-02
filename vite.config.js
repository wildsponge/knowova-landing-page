import path from 'path';
import checker from 'vite-plugin-checker';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// Plugin to suppress CSS file generation and references
const suppressCSS = () => ({
  name: 'suppress-css',
  generateBundle(options, bundle) {
    // Remove all CSS files from the bundle
    Object.keys(bundle).forEach(fileName => {
      if (fileName.endsWith('.css')) {
        delete bundle[fileName];
      }
    });
  },
  transformIndexHtml(html) {
    // Remove CSS link tags from HTML
    return html.replace(/<link rel="stylesheet"[^>]*>/gi, '');
  },
});

// ----------------------------------------------------------------------

const PORT = 3030;

export default defineConfig({
  plugins: [
    react(),
    checker({
      eslint: {
        useFlatConfig: true,
        lintCommand: 'eslint "./src/**/*.{js,jsx,ts,tsx}"',
        dev: { logLevel: ['error'] },
      },
      overlay: {
        position: 'tl',
        initialIsOpen: false,
      },
    }),
    suppressCSS(),
  ],
  resolve: {
    alias: [
      {
        find: /^src(.+)/,
        replacement: path.resolve(process.cwd(), 'src/$1'),
      },
    ],
  },
  build: {
    target: 'es2015',
    cssCodeSplit: false,
    chunkSizeWarningLimit: 1000,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn'],
        passes: 2,
      },
      mangle: {
        safari10: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          mui: ['@mui/material', '@emotion/react', '@emotion/styled'],
          motion: ['framer-motion'],
          carousel: ['embla-carousel', 'embla-carousel-react', 'embla-carousel-autoplay'],
          i18n: ['i18next', 'react-i18next', 'i18next-browser-languagedetector'],
          utils: ['minimal-shared/utils', 'minimal-shared/hooks'],
        },
        assetFileNames: 'assets/[name].[hash][extname]',
      },
    },
  },
  server: { port: PORT, host: true },
  preview: { port: PORT, host: true },
});
