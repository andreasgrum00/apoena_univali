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
  sizes = "(max-width: 600px) 50vw, 360px",
}: {
  src: string;
  alt?: string;
  sx?: SxProps<Theme>;
  priority?: boolean;
  sizes?: string;
}) {
  const [w, h] = dimensoes[src] ?? [400, 400];
  return (
    <Box
      aria-hidden={alt ? undefined : true}
      sx={[{ pointerEvents: "none", "& img": { width: "100%", height: "auto", display: "block" } }, ...(Array.isArray(sx) ? sx : [sx])]}
    >
      <Image src={src} alt={alt} width={w} height={h} sizes={sizes} priority={priority} />
    </Box>
  );
}
