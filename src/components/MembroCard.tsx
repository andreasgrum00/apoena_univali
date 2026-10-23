import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { rich, plain } from "./RichText";
import type { Membro } from "@/content/equipe";
import { cores } from "@/theme";

const variantes = {
  dce: { moldura: cores.lavanda, faixa: cores.lavanda, nome: cores.branco, cargo: cores.branco, bio: cores.preto },
  laacs: { moldura: cores.claro, faixa: cores.claro, nome: cores.azul, cargo: cores.azul, bio: cores.branco },
};

export default function MembroCard({
  membro,
  invertido,
  variante = "dce",
}: {
  membro: Membro;
  invertido?: boolean;
  variante?: keyof typeof variantes;
}) {
  const v = variantes[variante];
  const giro = invertido ? 4 : -4;
  return (
    <Box
      component="article"
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", sm: invertido ? "1fr 200px" : "200px 1fr", md: invertido ? "1fr 230px" : "230px 1fr" },
        gap: { xs: 3, sm: 4 },
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          order: { xs: 0, sm: invertido ? 1 : 0 },
          justifySelf: "center",
          width: { xs: 200, md: 230 },
          aspectRatio: "3 / 4",
          position: "relative",
          border: `9px solid ${v.moldura}`,
          bgcolor: v.moldura,
          boxShadow: "0 10px 24px rgba(0,0,0,.18)",
          transform: `rotate(${giro}deg)`,
          transition: "transform .3s",
          "&:hover": { transform: "rotate(0deg) scale(1.03)" },
        }}
      >
        <Image
          src={membro.foto}
          alt={`Foto de ${plain(membro.nome)}`}
          fill
          sizes="240px"
          style={{ objectFit: "cover", objectPosition: membro.enquadramento ?? "50% 35%" }}
        />
      </Box>

      <Box>
        <Box sx={{ bgcolor: v.faixa, px: 2, py: 1.25, mb: 2 }}>
          <Typography component="h3" sx={{ color: v.nome, fontWeight: 700, fontSize: { xs: "1.15rem", md: "1.35rem" }, lineHeight: 1.2 }}>
            {rich(membro.nome)}
          </Typography>
          <Typography sx={{ color: v.cargo, fontSize: { xs: "1.05rem", md: "1.2rem" }, lineHeight: 1.3 }}>
            {rich(membro.cargo)}
          </Typography>
        </Box>
        <Typography sx={{ color: v.bio, fontSize: { xs: "0.95rem", md: "1rem" }, lineHeight: 1.7, textAlign: { sm: "justify" }, hyphens: "auto" }}>
          {rich(membro.bio)}
        </Typography>
      </Box>
    </Box>
  );
}
