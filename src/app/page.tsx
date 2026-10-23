import Link from "@/components/Links";
import Image from "next/image";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Recorte from "@/components/Recorte";
import { Faixa, TituloBloco, Texto } from "@/components/Secao";
import { apoena } from "@/content/institucional";
import { sumario } from "@/content/navegacao";
import { cores } from "@/cores";

function Capa() {
  return (
    <Box component="section" sx={{ bgcolor: cores.azul, position: "relative", overflow: "hidden", pb: { xs: 0, md: 6 } }}>
      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <Box
          sx={{
            bgcolor: cores.claro,
            width: { xs: "100%", md: "68%" },
            px: { xs: 3, sm: 6, md: 8 },
            pt: { xs: 5, md: 8 },
            pb: { xs: 12, sm: 14, md: 10 },
            position: "relative",
            zIndex: 1,
          }}
        >
          <Image
            src="/logo.webp"
            alt="Chapa 01 Apoena 2026"
            width={1240}
            height={700}
            priority
            sizes="(max-width: 900px) 90vw, 640px"
            style={{ width: "100%", height: "auto", maxWidth: 620 }}
          />
          <Typography
            component="h1"
            sx={{ color: cores.azul, fontWeight: 700, fontSize: { xs: "1.8rem", sm: "2.4rem", md: "2.8rem" }, mt: { xs: 3, md: 5 }, textAlign: "center", maxWidth: 620 }}
          >
            PLANO DE GESTÃO
          </Typography>
        </Box>

        <Recorte
          src="/recortes/estrela-azul.webp"
          sx={{ position: "absolute", width: { xs: 150, md: 260 }, left: { xs: 0, md: "auto" }, right: { md: "22%" }, bottom: { xs: 10, md: -40 }, zIndex: 0, opacity: 0.95 }}
        />
        {/* No celular o recorte entra no fluxo, sobrepondo o fim do painel; no desktop fica solto à direita */}
        <Box
          sx={{
            position: { xs: "relative", md: "absolute" },
            zIndex: 2,
            width: { xs: "72%", sm: 380, md: 470 },
            ml: { xs: "auto", md: 0 },
            mr: { xs: -1, md: 0 },
            mt: { xs: -10, sm: -12, md: 0 },
            right: { md: -10 },
            bottom: { md: -60 },
          }}
        >
          <Recorte
            src="/recortes/indigena.webp"
            alt="Ilustração em retícula de um rosto indígena com cocar"
            priority
            sx={{ filter: "drop-shadow(0 10px 20px rgba(0,0,0,.35))" }}
          />
          <Recorte
            src="/recortes/fita.webp"
            sx={{ position: "absolute", width: "48%", top: "2%", left: "12%", transform: "rotate(-8deg)" }}
          />
        </Box>
      </Container>
      <Box sx={{ height: { xs: 0, md: 40 } }} />
    </Box>
  );
}

function Apoena() {
  return (
    <Faixa id="apoena" tom="azul" sx={{ borderTop: `6px solid ${cores.lavanda}` }}>
      <Typography component="h2" sx={{ textTransform: "uppercase", color: cores.branco, fontSize: { xs: "1.6rem", md: "2.4rem" }, lineHeight: 1.25, mb: 5 }}>
        <Box component="span" sx={{ bgcolor: cores.claro, color: cores.lavandaClara, fontWeight: 700, px: 1, mr: 1.5, textTransform: "none", display: "inline-block" }}>
          Apoena
        </Box>
        VISÃO, CORAGEM E NOVOS HORIZONTES
      </Typography>
      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 220px" }, gap: 5, alignItems: "end" }}>
        <Texto paragrafos={apoena.paragrafos} cor={cores.branco} />
        <Box sx={{ position: "relative", display: { xs: "none", md: "block" }, height: 280 }}>
          <Recorte src="/recortes/estrela-clara.webp" sx={{ position: "absolute", width: 170, top: 0, right: 20 }} />
          <Recorte src="/recortes/megafone.webp" sx={{ position: "absolute", width: 200, bottom: 0, right: 0, transform: "rotate(-8deg)" }} />
        </Box>
      </Box>
    </Faixa>
  );
}

function Sumario() {
  return (
    <Faixa tom="claro">
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <TituloBloco texto="**SUMÁRIO**" bg={cores.azul} cor={cores.branco} as="h2" sx={{ fontSize: { xs: "2rem", md: "3rem" }, px: { xs: 5, md: 9 } }} />
      </Box>
      <Box component="ol" sx={{ listStyle: "none", p: 0, m: 0, maxWidth: 640, mx: "auto" }}>
        {sumario.map((item, i) => (
          <Box component="li" key={item.href}>
            <Box
              component={Link}
              href={item.href}
              sx={{
                display: "flex",
                alignItems: "baseline",
                gap: 1,
                py: 1.5,
                color: cores.preto,
                textDecoration: "none",
                fontSize: { xs: "1.05rem", md: "1.2rem" },
                "& .pontos": { flex: 1, borderBottom: `3px dotted ${cores.preto}`, transform: "translateY(-5px)", transition: "border-color .2s" },
                "&:hover": { color: cores.azul },
                "&:hover .pontos": { borderColor: cores.lavanda },
                "&:hover .seta": { transform: "translateX(4px)" },
              }}
            >
              <span>{item.titulo}</span>
              <span className="pontos" />
              <Box component="span" sx={{ fontVariantNumeric: "tabular-nums", minWidth: 28, textAlign: "right" }}>
                {String(i + 1).padStart(2, "0")}
              </Box>
              <ArrowForwardIcon className="seta" sx={{ fontSize: 20, alignSelf: "center", transition: "transform .2s", color: cores.lavanda }} />
            </Box>
          </Box>
        ))}
      </Box>
    </Faixa>
  );
}

export default function Home() {
  return (
    <>
      <Capa />
      <Apoena />
      <Sumario />
    </>
  );
}
