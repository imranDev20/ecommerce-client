import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { Open_Sans } from "next/font/google";

const open_sans = Open_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        light: "rgb(219, 240, 254)",
        main: "#4E97FD",
        dark: "#2756B6",
        contrastText: "#fff",
      },
      secondary: {
        main: "#ff6666",
      },
      background: {
        default: "#F7F9FC",
        paper: "#fff",
      },
      text: {
        primary: "#243445",
        secondary: "#4b566b",
        disabled: "rgba(144,60,60,0.38)",
      },
    },

    typography: {
      fontFamily: [
        open_sans.style.fontFamily,
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: "#F7F9FC",
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: ({ theme }) =>
            theme.unstable_sx({
              borderRadius: 2,
              boxShadow: "0px 1px 3px rgba(3, 0, 71, 0.09)",
              "&:hover": {
                boxShadow: "0px 1px 3px rgba(3, 0, 71, 0.09)",
              },
            }),
        },
      },

      MuiCardContent: {
        styleOverrides: {
          root: ({ theme }) =>
            theme.unstable_sx({
              "&:last-child": {
                paddingBottom: "inherit",
                padding: "16px",
              },
            }),
        },
      },

      MuiButton: {
        styleOverrides: {
          root: ({ theme }) =>
            theme.unstable_sx({
              minWidth: "initial",
              textTransform: "none",
            }),
        },
      },
    },
  })
);
