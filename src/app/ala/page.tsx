import type { Metadata } from "next";
import Link from "@/components/Links";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Faixa, Texto } from "@/components/Secao";
import Recorte from "@/components/Recorte";
import { ala } from "@/content/institucional";
import { cores } from "@/cores";

export const metadata: Metadata = { title: "O que é a ALA?" };

export default function AlaPage() {
  return (
    <Faixa tom="claro">
      <Box sx={{ position: "relative", display: "flex", justifyContent: "flex-end", mb: 6, mr: { xs: -2, md: -12 } }}>
        <Recorte
          src="/recortes/mao-escrevendo.webp"
          priority
          sx={{ position: "absolute", width: { xs: 130, md: 220 }, left: { xs: -10, md: 40 }, top: { xs: -10, md: -20 }, transform: "rotate(-10deg)" }}
        />
        <Typography component="h1" sx={{ lineHeight: 1.05, textAlign: "right" }}>
          <Box component="span" sx={{ display: "block", color: cores.azul, fontSize: { xs: "2.4rem", md: "3.6rem" }, pr: { xs: 3, md: 12 } }}>
            O QUE É
          </Box>
          <Box
            component="span"
            sx={{ display: "inline-block", bgcolor: cores.azul, color: cores.claro, fontWeight: 700, fontSize: { xs: "2.4rem", md: "3.6rem" }, pl: { xs: 3, md: 4 }, pr: { xs: 3, md: 12 }, py: 0.5 }}
          >
            A ALA?
          </Box>
        </Typography>
      </Box>

      <Texto paragrafos={ala.paragrafos} />

      <Box sx={{ mt: 6 }}>
        <Button component={Link} href="/ala/propostas" variant="contained" color="primary" endIcon={<ArrowForwardIcon />} size="large">
          Propostas ALA
        </Button>
      </Box>
    </Faixa>
  );
}
