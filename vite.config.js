import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';
import data from './data/registros.js';

export default defineConfig({
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
