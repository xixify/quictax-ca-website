import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  build: {
    rollupOptions: {
      input: {
        index: 'index.html',
        services: 'services.html',
        pricing: 'pricing.html',
        taxArticles: 'tax-articles.html',
        singleArticle: 'single-article.html',
        about: 'about.html',
        contact: 'contact.html',
        cra: 'cra.html',
        faq: 'faq.html',
      }
    }
  },
  server: {
    port: 3000,
    host: true,
    open: false
  }
});
