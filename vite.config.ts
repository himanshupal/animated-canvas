import motionCanvas from "@motion-canvas/vite-plugin";
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [motionCanvas()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
});
