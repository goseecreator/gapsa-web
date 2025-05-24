// src/theme/theme.ts
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      gold: {
        100: "#fffaf0",
        200: "#fde68a",
        300: "#facc15",
        400: "#eab308",
        500: "#ca8a04",
        600: "#a16207",
      },
      blue: {
        100: "#e0f2fe",
        200: "#bae6fd",
        300: "#7dd3fc",
        400: "#38bdf8",
        500: "#0ea5e9",
        600: "#0284c7",
      },
    },
  },
  fonts: {
    heading: `'Segoe UI', sans-serif`,
    body: `'Open Sans', sans-serif`,
  },
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
});

export default theme;
