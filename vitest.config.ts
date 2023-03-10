import { defineConfig } from "vite";

export default defineConfig({
  test: {
    css: false,
    environment: "jsdom",
    globals: true,
    coverage: {
      provider: "c8",
      all: true,
      reporter: "text",
    },
  },
});
