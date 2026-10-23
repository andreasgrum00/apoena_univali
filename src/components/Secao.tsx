import type { ReactNode } from "react";
import Box, { type BoxProps } from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import type { SxProps, Theme } from "@mui/material/styles";
import { rich } from "./RichText";
import { cores } from "@/cores";
import type { Tom } from "@/content/propostas";

export const fundos: Record<Tom, { bg: string; texto: string }> = {
  azul: { bg: cores.azul, texto: cores.branco },
  lavanda: { bg: cores.lavanda, texto: cores.branco },
  claro: { bg: cores.claro, texto: cores.preto },
};

// Faixa de largura total com a cor de fundo de uma página do PDF
export function Faixa({
  tom = "claro",
  children,
  sx,
  maxWidth = "md",
  ...rest
}: { tom?: Tom; children: ReactNode; sx?: SxProps<Theme>; maxWidth?: "sm" | "md" | "lg" | "xl" } & Omit<BoxProps, "sx">) {
  return (
    <Box
      component="section"
      {...rest}
      sx={[
        { bgcolor: fundos[tom].bg, color: fundos[tom].texto, py: { xs: 6, md: 9 }, position: "relative", overflow: "hidden" },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <Container maxWidth={maxWidth} sx={{ position: "relative", zIndex: 1 }}>
        {children}
      </Container>
    </Box>
  );
}

// Bloco de título no estilo do PDF: caixa sólida, caixa alta, mistura de regular e negrito
export function TituloBloco({
  texto,
  bg,
  cor,
  as = "h1",
  align = "center",
  sx,
}: {
  texto: string;
  bg: string;
  cor: string;
  as?: "h1" | "h2" | "h3";
  align?: "left" | "center" | "right";
  sx?: SxProps<Theme>;
}) {
  return (
    <Typography
      component={as}
      sx={[
        {
          display: "inline-block",
          bgcolor: bg,
          color: cor,
          px: { xs: 2.5, md: 4 },
          py: { xs: 1.75, md: 2.5 },
          fontSize: as === "h1" ? { xs: "2rem", sm: "2.6rem", md: "3.4rem" } : { xs: "1.25rem", md: "1.6rem" },
          lineHeight: 1.15,
          textTransform: "uppercase",
          fontWeight: 400,
          textAlign: align,
          "& strong": { fontWeight: 700 },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {rich(texto)}
    </Typography>
  );
}

// Parágrafos justificados, como no PDF
export function Texto({ paragrafos, cor, sx }: { paragrafos: string[]; cor?: string; sx?: SxProps<Theme> }) {
  return (
    <Box
      sx={[
        {
          color: cor,
          "& p": {
            m: 0,
            mb: 3,
            fontSize: { xs: "1rem", md: "1.125rem" },
            lineHeight: 1.8,
            textAlign: { xs: "left", sm: "justify" },
            hyphens: "auto",
          },
          "& p:last-of-type": { mb: 0 },
          "& strong": { fontWeight: 700 },
          "& u": { textDecorationThickness: "2px", textUnderlineOffset: "3px" },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {paragrafos.map((p, i) => (
        <p key={i}>{rich(p)}</p>
      ))}
    </Box>
  );
}
