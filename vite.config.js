import { resolve } from 'path';
import { splitVendorChunkPlugin } from 'vite';
import inject from '@rollup/plugin-inject';
import handlebars from 'vite-plugin-handlebars';
const pageData = {
  './src/index.html': {
    title: 'Main Page',
  },
  './src/view/index.html': {
    title: 'Sub Page',
  },
};
export default {
  root: './src',
  publicDir: '../static/',
  base: './',
  server: {
    host: true,
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    sourcemap: true,
    rollupOptions: {
      input: {
        page1: resolve(__dirname, 'src/view/page.html'),
        page2: resolve(__dirname, 'src/view/page2.html'),
      },
    },
  },
  plugins: [
    // inject({
    //   $: 'jquery',
    //   jQuery: 'jquery',
    //   // slick: 'slick-carousel'
    // }),
    splitVendorChunkPlugin({}),
    handlebars({
      context(pagePath) {
        return pageData[pagePath];
      },
      partialDirectory: resolve(__dirname, './src/view/partials'),
      helpers: {
        object: ({ hash }) => hash,
        array: (args) => Array.from(args).slice(0, args.length - 1),
        for: (from, to, incr, block) => {
          var accum = '';
          for (var i = from; i < to; i += incr) accum += block.fn(i);
          return accum;
        },
      },
    }),
  ],
};
