import Link from "@/components/Links";
import Image from "next/image";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { sumario } from "@/content/navegacao";
import { cores } from "@/cores";

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: cores.azul, color: cores.branco, pt: 8, pb: 5, borderTop: `6px solid ${cores.lavanda}` }}>
      <Container maxWidth="lg">
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "280px 1fr" }, gap: { xs: 5, md: 8 }, alignItems: "start" }}>
          <Box component={Link} href="/" aria-label="Página inicial" sx={{ bgcolor: cores.claro, p: 2, display: "block", width: { xs: 240, md: "100%" } }}>
            <Image src="/logo.webp" alt="Chapa 01 Apoena 2026" width={1240} height={700} sizes="280px" style={{ width: "100%", height: "auto" }} />
          </Box>
          <Box>
            <Typography component="h2" sx={{ fontWeight: 700, fontSize: "1.4rem", mb: 2, textTransform: "uppercase" }}>
              Sumário
            </Typography>
            <Box
              component="ul"
              sx={{ listStyle: "none", p: 0, m: 0, columns: { xs: 1, sm: 2, md: 3 }, columnGap: 4 }}
            >
              {sumario.map((item) => (
                <Box component="li" key={item.href} sx={{ breakInside: "avoid", mb: 1.25 }}>
                  <Box
                    component={Link}
                    href={item.href}
                    sx={{
                      color: cores.branco,
                      textDecoration: "none",
                      borderBottom: "2px solid transparent",
                      "&:hover": { borderColor: cores.lavandaClara, color: cores.lavandaClara },
                    }}
                  >
                    {item.titulo}
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
        <Typography sx={{ mt: 6, pt: 3, borderTop: "1px solid rgba(255,255,255,.2)", fontSize: 14, opacity: 0.8 }}>
          Chapa 01 · Apoena · 2026 · Plano de Gestão
        </Typography>
      </Container>
    </Box>
  );
}
