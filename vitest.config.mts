import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    css: false,
    include: ["tests/**/*.test.ts"],
    coverage: {
      reporter: [["cobertura", { file: "coverage.xml" }], "text"],
      include: ["src/**/*.ts"],
      exclude: ["src/index.ts"],
    },
    reporters: ["default", "junit"],
    outputFile: { junit: "coverage/test-results.xml" },
  },
});
