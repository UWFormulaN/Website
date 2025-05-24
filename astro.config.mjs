// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import react from "@astrojs/react";
import cloudflare from "@astrojs/cloudflare";
import path from "path";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    icon({
      include: {
        ph: [
          "arrow-right",
          "handshake",
          "money-wavy",
          "atom",
          "microscope",
          "arrows-in-line-horizontal",
          "caret-down",
          "arrow-left",
          "check-circle",
          "star",
          "number-circle-one",
          "number-circle-two",
          "number-circle-three",
          "number-circle-four",
          "number-circle-five",
          "number-circle-six",
          "number-circle-seven",
          "number-circle-eight",
          "house"
        ],
      },
    }),
    react(),
  ],
  adapter: cloudflare(),
  vite: {
    define: {
      "process.env": process.env, // to make environment variables work, as per https://github.com/withastro/astro/issues/4416
    },
    resolve: {
      alias: {
        "@": path.resolve("./src"),
      },
    },
  },
});
