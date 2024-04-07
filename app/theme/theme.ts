"use client";
import { createTheme } from "@mui/material/styles";

import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    myCustomColor?: {
      textPryamery: string;
      teal?: string;
      dark?: string;
      contrastTexts?: string;
    };
  }
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

export const theme = createTheme({
  palette: {
    custom: {
      textPryamery: "#00c4dc", // Main shade
      teal: "#03858b", // Lighter shade
      dark: "#334499", // Darker shade
      contrastTexts: "#ffffff", // Text color for contrast
    },
  },
});
