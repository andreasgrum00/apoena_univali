import type { Metadata } from "next";
import Image from "next/image";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Recorte from "@/components/Recorte";
import { Faixa, Texto } from "@/components/Secao";
import { rich } from "@/components/RichText";
import { carta } from "@/content/institucional";
import { cores } from "@/cores";

export const metadata: Metadata = { title: "Carta aberta do presidente" };

export default function CartaPage() {
  return (
    <>
      <Box component="header" sx={{ bgcolor: cores.azul, color: cores.branco, position: "relative", overflow: "hidden", py: { xs: 6, md: 8 } }}>
        <Container maxWidth="md" sx={{ position: "relative" }}>
          <Typography component="h1" sx={{ fontSize: { xs: "2rem", sm: "2.8rem", md: "3.4rem" }, lineHeight: 1.15, textAlign: { xs: "left", sm: "center" }, pr: { xs: 10, sm: 0 } }}>
            CARTA ABERTA DO
            <br />
            <strong>PRESIDENTE</strong>
          </Typography>
          <Recorte
            src="/recortes/mao-apontando.webp"
            priority
            sx={{ position: "absolute", width: { xs: 120, sm: 190, md: 240 }, right: { xs: -30, md: -90 }, top: { xs: 10, md: -20 }, transform: "scaleX(1)" }}
          />
        </Container>
      </Box>

      <Faixa tom="claro">
        <Texto paragrafos={[carta.saudacao, ...carta.paragrafos]} />

        <Box component="ul" sx={{ listStyle: "none", p: 0, my: 4, display: "grid", gap: 2.5 }}>
          {carta.compromissos.map((c) => (
            <Box
              component="li"
              key={c.rotulo}
              sx={{ fontSize: { xs: "1rem", md: "1.125rem" }, lineHeight: 1.8, textAlign: { sm: "justify" }, "& em": { fontStyle: "italic" } }}
            >
              <Box
                component="strong"
                sx={{ bgcolor: cores.azul, color: cores.branco, px: 1, mr: 1, textDecoration: "underline", textUnderlineOffset: 3 }}
              >
                {c.rotulo}
              </Box>
              {rich(c.texto)}
            </Box>
          ))}
        </Box>

        <Texto paragrafos={carta.fechamento} />

        <Typography sx={{ mt: 4, fontSize: { xs: "1rem", md: "1.125rem" } }}>{carta.despedida}</Typography>

        <Box sx={{ mt: 2, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
          <Image src="/recortes/assinatura.webp" alt="Assinatura de Gregório Cristino da Silva Neto" width={432} height={432} style={{ width: 300, height: "auto", marginTop: -50, marginBottom: -125 }} />
          <Typography sx={{ fontWeight: 700, fontSize: { xs: "1rem", md: "1.2rem" }, position: "relative" }}>{carta.assinatura}</Typography>
          <Typography sx={{ fontSize: { xs: "1rem", md: "1.1rem" } }}>{carta.cargo}</Typography>
        </Box>
      </Faixa>
    </>
  );
}
