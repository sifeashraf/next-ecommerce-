"use client";
import { createTheme } from "@mui/material/styles";

import "@mui/material/styles";

declare module "@mui/material/styles" {
  // interface Palette {
  //   myCustomColor?: {
  //     textPryamery: string;
  //     teal?: string;
  //     dark?: string;
  //     contrastTexts?: string;
  //   };
  // }
  interface PaletteOptions {
    custom?: {
      textPryamery: string;
      teal?: string;
      dark?: string;
      contrastTexts?: string;
    };
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    custom: true;
  }
}

declare module "@mui/system" {
  interface BreakpointOverrides {
    laptop: true;
    tablet: true;
  }
}

export const theme = createTheme({
  palette: {
    custom: {
      textPryamery: "#06bbb9", // Main shade
      teal: "#03858b", // Lighter shade
      dark: "#334499", // Darker shade
      contrastTexts: "#494941c7", // Text color for contrast
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      tablet: 700,
      laptop: 1000,
    },
  },
});
