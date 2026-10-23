import type { Metadata } from "next";
import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Faixa, Texto } from "@/components/Secao";
import { CardProposta, GradeCards } from "@/components/Propostas";
import { rich } from "@/components/RichText";
import { estrofe, introPropostas, propostasDce } from "@/content/propostas";
import { cores } from "@/cores";

export const metadata: Metadata = { title: "Nossas propostas" };

function Estrofe() {
  if (estrofe.linhas.length === 0) return null;
  return (
    <Box component="figure" sx={{ m: 0, mb: 6, display: "flex", alignItems: "center", flexDirection: { xs: "column", sm: "row" } }}>
      <Box sx={{ width: { xs: 200, sm: 230 }, flexShrink: 0, mr: { sm: -3 }, mb: { xs: -2, sm: 0 }, zIndex: 1 }}>
        <Image src="/recortes/bob-marley.webp" alt="Bob Marley" width={415} height={304} style={{ width: "100%", height: "auto" }} />
      </Box>
      <Box sx={{ bgcolor: cores.claro, color: cores.azul, p: { xs: 3, md: 4 }, pl: { sm: 6 }, flex: 1, textAlign: "right" }}>
        <Box component="blockquote" sx={{ m: 0, fontSize: { xs: "0.95rem", md: "1.05rem" }, lineHeight: 1.6 }}>
          {estrofe.linhas.map((l, i) => (
            <div key={i}>{l}</div>
          ))}
          {estrofe.destaque && <strong>{estrofe.destaque}</strong>}
        </Box>
        <Box component="figcaption" sx={{ mt: 0.5, "& strong": { fontWeight: 700 } }}>
          {rich(estrofe.autor)}
        </Box>
      </Box>
    </Box>
  );
}

export default function PropostasPage() {
  return (
    <>
      <Box component="header" sx={{ bgcolor: cores.claro, py: { xs: 6, md: 8 }, textAlign: "center" }}>
        <Typography component="h1" sx={{ color: cores.azul, fontSize: { xs: "2.2rem", sm: "3rem", md: "3.6rem" }, lineHeight: 1.1 }}>
          NOSSAS <strong>PROPOSTAS</strong>
        </Typography>
      </Box>

      <Faixa tom="azul">
        <Estrofe />
        <Texto paragrafos={introPropostas} cor={cores.branco} />
      </Faixa>

      <Faixa tom="claro" maxWidth="lg">
        <GradeCards>
          {propostasDce.map((p, i) => (
            <CardProposta key={p.slug} href={`/propostas/${p.slug}`} titulo={p.titulo} imagem={p.imagem} tom={p.tom} numero={i + 1} />
          ))}
        </GradeCards>
      </Faixa>
    </>
  );
}
