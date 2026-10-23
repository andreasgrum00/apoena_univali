import type { Metadata } from "next";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Faixa, Texto, TituloBloco } from "@/components/Secao";
import Recorte from "@/components/Recorte";
import { rich } from "@/components/RichText";
import { universidadeGratuita as ug } from "@/content/institucional";
import { cores } from "@/cores";

export const metadata: Metadata = { title: "Universidade gratuita" };

export default function UniversidadeGratuitaPage() {
  return (
    <>
      <Faixa tom="azul">
        <Box sx={{ position: "relative", display: "flex", justifyContent: "center", mb: { xs: 6, md: 8 } }}>
          <Recorte src="/recortes/estrela-azul-2.webp" sx={{ position: "absolute", width: { xs: 80, md: 120 }, left: { xs: -10, sm: "8%" }, bottom: -30, zIndex: 2 }} />
          <TituloBloco
            texto={"UNIVERSIDADE\n**GRATUITA**"}
            bg={cores.claro}
            cor={cores.azul}
            sx={{ px: { xs: 4, md: 8 }, fontSize: { xs: "2rem", sm: "2.8rem", md: "3.2rem" } }}
          />
          <Recorte src="/recortes/estrela-cinza.webp" sx={{ position: "absolute", width: { xs: 90, md: 140 }, right: { xs: -10, sm: "6%" }, top: -30, zIndex: 0 }} />
        </Box>
        <Texto paragrafos={ug.paragrafos} cor={cores.branco} />
      </Faixa>

      <Faixa tom="azul" sx={{ pt: 0 }}>
        <Box sx={{ position: "relative", mb: 6, pr: { xs: 7, sm: 10 } }}>
          <Typography
            component="h2"
            sx={{ bgcolor: cores.claro, color: cores.azul, textAlign: "center", py: 2, px: 3, fontSize: { xs: "1rem", sm: "1.25rem", md: "1.4rem" }, lineHeight: 1.4, "& strong": { fontWeight: 700 } }}
          >
            {rich(ug.tituloPropostas)}
          </Typography>
          <Recorte
            src="/recortes/universidade-gratuita.webp"
            alt="Logo do programa Universidade Gratuita"
            sx={{ position: "absolute", width: { xs: 80, sm: 120 }, right: 0, top: "50%", transform: "translateY(-30%) rotate(6deg)" }}
          />
        </Box>

        <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0, display: "grid", gap: 4 }}>
          {ug.propostas.map((p) => (
            <Box
              component="li"
              key={p.rotulo}
              sx={{ color: cores.branco, fontSize: { xs: "1rem", md: "1.125rem" }, lineHeight: 1.8, textAlign: { sm: "justify" }, hyphens: "auto" }}
            >
              <Box component="strong" sx={{ bgcolor: cores.claro, color: cores.azul, px: 1, mr: 1, fontWeight: 700, boxDecorationBreak: "clone", WebkitBoxDecorationBreak: "clone" }}>
                {p.rotulo}
              </Box>
              {rich(p.texto)}
            </Box>
          ))}
        </Box>
      </Faixa>
    </>
  );
}
