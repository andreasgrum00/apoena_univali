"use client";

import { createTheme } from "@mui/material/styles";
import { cores } from "./cores";

const theme = createTheme({
  palette: {
    primary: { main: cores.azul, contrastText: cores.branco },
    secondary: { main: cores.lavanda, contrastText: cores.branco },
    info: { main: cores.azulVivo },
    background: { default: cores.claro, paper: cores.branco },
    text: { primary: cores.preto, secondary: cores.azul },
  },
  typography: {
    fontFamily: "var(--font-montserrat), Montserrat, Arial, sans-serif",
    fontWeightRegular: 400,
    fontWeightBold: 700,
    h1: { fontWeight: 400, textTransform: "uppercase", lineHeight: 1.1, letterSpacing: "0.01em" },
    h2: { fontWeight: 400, textTransform: "uppercase", lineHeight: 1.15 },
    h3: { fontWeight: 400, textTransform: "uppercase", lineHeight: 1.2 },
    body1: { fontSize: "1.0625rem", lineHeight: 1.75 },
    button: { fontWeight: 700, letterSpacing: "0.04em" },
  },
  shape: { borderRadius: 0 },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: { root: { borderRadius: 0, paddingInline: 20 } },
    },
    MuiPaper: { styleOverrides: { root: { borderRadius: 0 } } },
    MuiLink: { defaultProps: { underline: "hover" } },
  },
});

export default theme;
