import type { Metadata } from "next";
import Link from "@/components/Links";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Faixa, Texto } from "@/components/Secao";
import Recorte from "@/components/Recorte";
import { laacs } from "@/content/institucional";
import { cores } from "@/cores";

export const metadata: Metadata = { title: "O que é a LAACS?" };

export default function LaacsPage() {
  return (
    <Faixa tom="claro">
      <Box sx={{ display: "flex", alignItems: "flex-end", mb: 6, ml: { xs: -2, md: -12 } }}>
        <Typography component="h1" sx={{ lineHeight: 1.05 }}>
          <Box component="span" sx={{ display: "block", color: cores.azul, fontSize: { xs: "2.4rem", md: "3.6rem" }, pl: { xs: 2, md: 12 } }}>
            O QUE É
          </Box>
          <Box
            component="span"
            sx={{ display: "inline-block", bgcolor: cores.azul, color: cores.claro, fontWeight: 700, fontSize: { xs: "2.4rem", md: "3.6rem" }, pl: { xs: 2, md: 12 }, pr: { xs: 3, md: 4 }, py: 0.5 }}
          >
            A LAACS?
          </Box>
        </Typography>
        <Recorte
          src="/recortes/laacs.webp"
          alt="Logo da LAACS"
          priority
          sx={{ width: { xs: 80, md: 130 }, ml: { xs: -2, md: -3 }, mb: -1.5, flexShrink: 0, transform: "rotate(-4deg)", position: "relative", zIndex: 1 }}
        />
      </Box>

      <Texto paragrafos={laacs.paragrafos} />

      <Box sx={{ mt: 6, display: "flex", gap: 2, flexWrap: "wrap" }}>
        <Button component={Link} href="/laacs/equipe" variant="contained" color="primary" endIcon={<ArrowForwardIcon />} size="large">
          Equipe LAACS
        </Button>
        <Button component={Link} href="/laacs/propostas" variant="contained" color="secondary" endIcon={<ArrowForwardIcon />} size="large">
          Propostas LAACS
        </Button>
      </Box>
    </Faixa>
  );
}
