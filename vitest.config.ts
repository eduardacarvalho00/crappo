import { mergeConfig } from 'vite';
import { defineConfig } from 'vitest/config';
import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: 'jsdom',
      css: false,
      deps: {
        fallbackCJS: true, // para o chakra ui
      },
      coverage: {
        provider: 'c8',
        reporter: ['text', 'json', 'html'],
      },
      reporters: ['html'],
    },
  }),
);
