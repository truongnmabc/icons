import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    react(),
    dts({
      entryRoot: "src",
      tsconfigPath: "./tsconfig.json",
    }),
  ],
  build: {
    outDir: "./dist",
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    minify: "esbuild" as const,
    lib: {
      entry: "src/index.ts",
      name: "abc-icon",
      fileName: "index",
      formats: ["es" as const],
    },
    rollupOptions: {
      external: ["react", "react-dom"],

      output: {
        preserveModules: true,
        preserveModulesRoot: "src",
        entryFileNames: "[name].js",
        manualChunks: undefined,
        inlineDynamicImports: false,
        compact: true,
        generatedCode: {
          preset: "es2015" as const,
          symbols: false,
        },
      },
    },
  },
});
