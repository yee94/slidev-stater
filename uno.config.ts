import { defineConfig } from "unocss";

export default defineConfig({
  theme: {
    colors: {
      deepBlue: {
        1: "var(--color-notice-1, #e2efff)",
        2: "var(--color-notice-2, #bad9ff)",
        3: "var(--color-notice-3, #1a71ff)",
        4: "var(--color-notice-4, #1066f3)",
        DEFAULT: "var(--main-color, #1a71ff)",
      },
    },
  },
});
