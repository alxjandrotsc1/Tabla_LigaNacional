import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';
import data from './data/registros.js';

export default defineConfig({
  base: process.env.DEPLOY_BASE_URL,
  plugins: [
    handlebars({
      context: data,
      partialDirectory: './src/parciales',
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
      },
    },
  },
});
