import Link from "@/components/Links";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Recorte from "./Recorte";
import { rich, plain } from "./RichText";
import { fundos } from "./Secao";
import { cores } from "@/cores";
import type { Tom } from "@/content/propostas";

// Cores da faixa de título conforme o fundo da página, como no PDF
export const faixaPorTom: Record<Tom, { bg: string; texto: string }> = {
  azul: { bg: cores.claro, texto: cores.azul },
  lavanda: { bg: cores.azul, texto: cores.branco },
  claro: { bg: cores.azul, texto: cores.branco },
};

export function BannerProposta({ titulo, imagem, tom }: { titulo: string; imagem: string; tom: Tom }) {
  const faixa = faixaPorTom[tom];
  return (
    <Box sx={{ position: "relative", pr: { xs: 9, sm: 16 }, mt: { xs: 2, md: 4 } }}>
      <Typography
        component="h1"
        sx={{
          bgcolor: faixa.bg,
          color: faixa.texto,
          px: { xs: 2.5, md: 4 },
          py: { xs: 2, md: 3 },
          fontSize: { xs: "1.3rem", sm: "1.7rem", md: "2.1rem" },
          lineHeight: 1.25,
          textTransform: "uppercase",
          fontWeight: 400,
          "& strong": { fontWeight: 700 },
        }}
      >
        {rich(titulo)}
      </Typography>
      <Recorte
        src={imagem}
        priority
        sx={{
          position: "absolute",
          right: { xs: -8, sm: 0 },
          top: "50%",
          transform: "translateY(-50%) rotate(-4deg)",
          width: { xs: 96, sm: 170 },
          filter: "drop-shadow(0 6px 12px rgba(0,0,0,.25))",
        }}
      />
    </Box>
  );
}

export function CardProposta({
  href,
  titulo,
  imagem,
  tom,
  numero,
}: {
  href: string;
  titulo: string;
  imagem?: string;
  tom: Tom;
  numero: number;
}) {
  const f = fundos[tom];
  return (
    <Box
      component={Link}
      href={href}
      aria-label={plain(titulo)}
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        minHeight: 210,
        p: 3,
        pr: imagem ? 12 : 3,
        bgcolor: f.bg,
        color: f.texto,
        textDecoration: "none",
        border: `3px solid ${tom === "claro" ? cores.azul : f.bg}`,
        overflow: "hidden",
        transition: "transform .2s, box-shadow .2s",
        "&:hover, &:focus-visible": {
          transform: "translate(-4px, -4px)",
          boxShadow: `8px 8px 0 ${tom === "azul" ? cores.lavanda : cores.azul}`,
        },
        "&:hover .seta": { transform: "translateX(6px)" },
        "&:hover img": { transform: "rotate(-6deg) scale(1.08)" },
      }}
    >
      <Typography sx={{ fontWeight: 700, fontSize: 14, opacity: 0.75, mb: 1 }}>{String(numero).padStart(2, "0")}</Typography>
      <Typography
        component="h2"
        sx={{ textTransform: "uppercase", fontSize: "1.05rem", lineHeight: 1.35, fontWeight: 400, "& strong": { fontWeight: 700 } }}
      >
        {rich(titulo)}
      </Typography>
      <ArrowForwardIcon className="seta" sx={{ mt: "auto", pt: 2, fontSize: 40, transition: "transform .2s" }} />
      {imagem && (
        <Recorte
          src={imagem}
          sx={{
            position: "absolute",
            right: -6,
            bottom: 10,
            width: 110,
            "& img": { transition: "transform .3s" },
          }}
        />
      )}
    </Box>
  );
}

export function GradeCards({ children }: { children: React.ReactNode }) {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" },
        gap: 3,
      }}
    >
      {children}
    </Box>
  );
}

type Vizinho = { href: string; titulo: string } | null;

export function NavProposta({
  anterior,
  proxima,
  voltar,
  cor,
}: {
  anterior: Vizinho;
  proxima: Vizinho;
  voltar: { href: string; titulo: string };
  cor: string;
}) {
  const botao = {
    color: cor,
    borderColor: cor,
    borderWidth: 2,
    justifyContent: "flex-start",
    textAlign: "left",
    py: 1.5,
    "&:hover": { borderWidth: 2, bgcolor: "rgba(127,148,228,.18)" },
  } as const;
  return (
    <Box component="nav" aria-label="Navegação entre propostas" sx={{ mt: { xs: 6, md: 8 } }}>
      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2 }}>
        {anterior ? (
          <Button component={Link} href={anterior.href} variant="outlined" startIcon={<ArrowBackIcon />} sx={botao}>
            <Box component="span" sx={{ display: "block", overflow: "hidden", textOverflow: "ellipsis" }}>
              {plain(anterior.titulo)}
            </Box>
          </Button>
        ) : (
          <span />
        )}
        {proxima && (
          <Button
            component={Link}
            href={proxima.href}
            variant="outlined"
            endIcon={<ArrowForwardIcon />}
            sx={{ ...botao, justifyContent: "flex-end", textAlign: "right" }}
          >
            <Box component="span" sx={{ display: "block", overflow: "hidden", textOverflow: "ellipsis" }}>
              {plain(proxima.titulo)}
            </Box>
          </Button>
        )}
      </Box>
      <Box sx={{ textAlign: "center", mt: 3 }}>
        <Button component={Link} href={voltar.href} sx={{ color: cor, textDecoration: "underline", textUnderlineOffset: 4 }}>
          {voltar.titulo}
        </Button>
      </Box>
    </Box>
  );
}
