import { defineConfig } from 'vite'

export default defineConfig({
  test: {
    css: false,
    environment: 'jsdom',
    globals: true,
  },
});