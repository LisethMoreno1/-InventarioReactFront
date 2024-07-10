// themes/theme.ts

import { createTheme } from "@material-ui/core/styles";

// Define your custom Tailwind CSS variables as constants
const colors = {
  background: "hsl(0, 0%, 100%)",
  foreground: "hsl(222.2, 84%, 4.9%)",
  primary: "hsl(221.2, 83.2%, 53.3%)",
  primaryForeground: "hsl(210, 40%, 98%)",
  secondary: "hsl(210, 40%, 96.1%)",
  secondaryForeground: "hsl(222.2, 47.4%, 11.2%)",
  muted: "hsl(210, 40%, 96.1%)",
  mutedForeground: "hsl(215.4, 16.3%, 44%)",
  accent: "hsl(210, 40%, 96.1%)",
  accentForeground: "hsl(222.2, 47.4%, 11.2%)",
  destructive: "hsl(0, 72%, 51%)",
  destructiveForeground: "hsl(210, 40%, 98%)",
  border: "hsl(214.3, 31.8%, 91.4%)",
};

const fonts = {
  body: "YourBodyFont", // Replace with your body font
  heading: "YourHeadingFont", // Replace with your heading font
};

// Create and export your Material UI theme
export const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
      contrastText: colors.primaryForeground,
    },
    secondary: {
      main: colors.secondary,
      contrastText: colors.secondaryForeground,
    },
    background: {
      default: colors.background,
      paper: colors.background, // Assuming 'card' maps to 'paper'
    },
    text: {
      primary: colors.foreground,
      secondary: colors.mutedForeground,
    },
    error: {
      main: colors.destructive,
      contrastText: colors.destructiveForeground,
    },
  },
  typography: {
    fontFamily: fonts.body,
    h1: {
      fontFamily: fonts.heading,
    },
    h2: {
      fontFamily: fonts.heading,
    },
    h3: {
      fontFamily: fonts.heading,
    },
    h4: {
      fontFamily: fonts.heading,
    },
    h5: {
      fontFamily: fonts.heading,
    },
    h6: {
      fontFamily: fonts.heading,
    },
  },
  /* shape: {
    borderRadius: "0.5rem",
  }, */
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "*": {
          border: `1px solid ${colors.border}`,
        },
        body: {
          backgroundColor: colors.background,
          color: colors.foreground,
        },
      },
    },
  },
});
