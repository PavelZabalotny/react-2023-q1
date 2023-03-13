/// <reference types="vitest" />
import { defineConfig } from "vitest/config";

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
});
