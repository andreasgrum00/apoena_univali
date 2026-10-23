import type { Metadata } from "next";
import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Faixa, Texto } from "@/components/Secao";
import Recorte from "@/components/Recorte";
import { dce } from "@/content/institucional";
import { cores } from "@/cores";

export const metadata: Metadata = { title: "O que é o DCE?" };

function Foto({ src, alt, w, h, giro }: { src: string; alt: string; w: number; h: number; giro: number }) {
  return (
    <Box sx={{ border: `8px solid ${cores.azul}`, bgcolor: cores.azul, boxShadow: "0 12px 26px rgba(0,0,0,.2)", transform: `rotate(${giro}deg)` }}>
      <Image src={src} alt={alt} width={w} height={h} sizes="(max-width: 900px) 90vw, 440px" style={{ width: "100%", height: "auto", display: "block" }} />
    </Box>
  );
}

export default function DcePage() {
  return (
    <>
      <Faixa tom="claro">
        <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "stretch", mb: 5, mr: { md: -12 } }}>
          <Typography component="h1" sx={{ fontSize: { xs: "2.2rem", sm: "3rem", md: "3.6rem" }, lineHeight: 1.1, display: "flex", flexWrap: "wrap", alignItems: "center" }}>
            <Box component="span" sx={{ color: cores.lavanda, pr: 2 }}>
              O QUE É
            </Box>
            <Box component="span" sx={{ bgcolor: cores.lavanda, color: cores.azul, fontWeight: 700, px: 2, py: 0.5 }}>
              O DCE?
            </Box>
          </Typography>
        </Box>
        <Texto paragrafos={dce.paragrafos} cor={cores.azul} />
        <Box sx={{ mt: 6, mx: "auto", maxWidth: 620 }}>
          <Image src="/colagem-dce.webp" alt="Colagem com as letras DCE" width={897} height={525} sizes="(max-width: 700px) 92vw, 620px" style={{ width: "100%", height: "auto" }} />
        </Box>
      </Faixa>

      <Faixa tom="claro" sx={{ pt: 0 }}>
        <Texto paragrafos={[dce.destaque]} cor={cores.azul} />

        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: { xs: 6, md: 5 }, mt: 7, alignItems: "center" }}>
          <Box sx={{ position: "relative", maxWidth: 440, mx: "auto", width: "100%" }}>
            <Foto src="/fotos/dce-2.webp" alt="Estudantes da UNIVALI reunidos com a bandeira da universidade" w={1037} h={692} giro={-3} />
            <Recorte src="/recortes/estrela-azul.webp" sx={{ position: "absolute", width: 110, left: -36, bottom: -40 }} />
          </Box>
          <Box sx={{ position: "relative", maxWidth: 300, mx: "auto", width: "100%" }}>
            <Foto src="/fotos/dce-1.webp" alt="Estudantes com bandeiras em frente a um prédio" w={268} h={478} giro={3} />
            <Recorte src="/recortes/prendedor.webp" sx={{ position: "absolute", width: 110, top: -38, left: "50%", ml: "-55px" }} />
          </Box>
        </Box>

        <Box sx={{ mt: 8, display: "flex", justifyContent: "center" }}>
          <Box sx={{ bgcolor: cores.branco, px: 4, py: 2, transform: "rotate(-4deg)", boxShadow: "0 8px 18px rgba(0,0,0,.15)", textAlign: "center" }}>
            <Typography sx={{ color: cores.azul, fontWeight: 700, fontSize: { xs: "2rem", md: "2.6rem" }, lineHeight: 1 }}>{dce.selo.titulo}</Typography>
            <Typography sx={{ fontSize: "1.1rem" }}>{dce.selo.subtitulo}</Typography>
          </Box>
        </Box>
      </Faixa>
    </>
  );
}
