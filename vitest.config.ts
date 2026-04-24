import path from "node:path"
import { defineConfig } from "vitest/config"

const rootDir = path.resolve(__dirname)

export default defineConfig({
  resolve: {
    alias: {
      "@": rootDir,
      "server-only": path.resolve(rootDir, "tests/stubs/server-only.ts"),
    },
  },
  test: {
    environment: "node",
    globals: true,
    projects: [
      {
        extends: true,
        test: {
          name: "unit",
          include: ["tests/unit/**/*.test.ts"],
        },
      },
      {
        extends: true,
        test: {
          name: "integration",
          include: ["tests/integration/**/*.test.ts"],
          testTimeout: 30000,
        },
      },
    ],
  },
})
