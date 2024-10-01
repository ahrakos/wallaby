import { defineConfig } from "vite";
import path from "path";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    dts({
      tsconfigPath: "tsconfig.build.json",
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/lib/login-provider.ts"),
      name: "LoginProvider",
      fileName: (format) => `login-provider.${format}.js`,
      formats: ["es", "umd", "cjs"], // You can adjust formats according to your needs (e.g., cjs, es, umd)
    },
    rollupOptions: {
      external: [], // Add any external libraries here (e.g., dependencies like React)
      output: {
        globals: {}, // Map any external libraries to global variables if needed
      },
    },
  },
  esbuild: {
    exclude: [/\.test\.ts$/, /\.spec\.ts$/], // Exclude test files
  },
});
