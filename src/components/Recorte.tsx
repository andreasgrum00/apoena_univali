import Image from "next/image";
import Box from "@mui/material/Box";
import type { SxProps, Theme } from "@mui/material/styles";
import { dimensoes } from "@/content/imagens";

// Imagem recortada (estilo colagem do PDF). Decorativa por padrão.
export default function Recorte({
  src,
  alt = "",
  sx,
  priority,
}: {
  src: string;
  alt?: string;
  sx?: SxProps<Theme>;
  priority?: boolean;
}) {
  const [w, h] = dimensoes[src] ?? [400, 400];
  return (
    <Box
      aria-hidden={alt ? undefined : true}
      sx={[{ pointerEvents: "none", "& img": { width: "100%", height: "auto", display: "block" } }, ...(Array.isArray(sx) ? sx : [sx])]}
    >
      {/* Os recortes já foram exportados em WebP leve com transparência; servidos como estão */}
      <Image src={src} alt={alt} width={w} height={h} priority={priority} unoptimized />
    </Box>
  );
}
