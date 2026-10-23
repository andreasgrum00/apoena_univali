import type { Metadata } from "next";
import Link from "@/components/Links";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Faixa, TituloBloco } from "@/components/Secao";
import MembroCard from "@/components/MembroCard";
import { equipeLaacs } from "@/content/equipe";
import { cores } from "@/cores";

export const metadata: Metadata = { title: "Equipe LAACS" };

export default function EquipeLaacsPage() {
  return (
    <Faixa tom="lavanda" sx={{ pt: 0 }}>
      <Box sx={{ textAlign: "center", mb: { xs: 6, md: 9 } }}>
        <TituloBloco
          texto={"A **EQUIPE**\nDA **LAACS**"}
          bg={cores.claro}
          cor={cores.azul}
          sx={{ px: { xs: 5, md: 8 }, pt: { xs: 4, md: 5 }, fontSize: { xs: "2.2rem", md: "3.2rem" } }}
        />
      </Box>
      <Box sx={{ display: "grid", gap: { xs: 7, md: 9 } }}>
        {equipeLaacs.map((m, i) => (
          <MembroCard key={m.nome} membro={m} invertido={i % 2 === 1} variante="laacs" prioridade={i < 2} />
        ))}
      </Box>
      <Box sx={{ mt: 9, textAlign: "center" }}>
        <Button
          component={Link}
          href="/laacs/propostas"
          variant="contained"
          endIcon={<ArrowForwardIcon />}
          size="large"
          sx={{ bgcolor: cores.azul, "&:hover": { bgcolor: cores.preto } }}
        >
          Propostas LAACS
        </Button>
      </Box>
    </Faixa>
  );
}
