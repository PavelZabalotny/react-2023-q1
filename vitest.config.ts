/// <reference types="vitest" />
import { defineConfig } from "vitest/config";
import path from "path";

export default defineConfig({
  test: {
    css: false,
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/vitestSetup.ts",
    coverage: {
      provider: "c8",
      all: true,
      reporter: "text",
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
