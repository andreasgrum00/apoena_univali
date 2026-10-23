import Link from "@/components/Links";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Faixa } from "@/components/Secao";
import Recorte from "@/components/Recorte";

export default function NotFound() {
  return (
    <Faixa tom="azul" sx={{ minHeight: "60vh", display: "flex", alignItems: "center", textAlign: "center" }}>
      <Recorte src="/recortes/baloes.webp" sx={{ width: 140, mx: "auto", mb: 3 }} />
      <Typography component="h1" sx={{ fontSize: { xs: "2rem", md: "2.8rem" }, mb: 3 }}>
        PÁGINA NÃO <strong>ENCONTRADA</strong>
      </Typography>
      <Button component={Link} href="/" variant="contained" color="secondary" size="large">
        Voltar ao início
      </Button>
    </Faixa>
  );
}
