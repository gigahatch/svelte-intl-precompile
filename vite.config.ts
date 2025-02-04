import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [dts()],
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      formats: ["es"],
      entry: {
        index: resolve(__dirname, "src/index.ts"),
      },
    },
  },
});
