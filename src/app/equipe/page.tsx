import type { Metadata } from "next";
import Box from "@mui/material/Box";
import { Faixa, TituloBloco } from "@/components/Secao";
import MembroCard from "@/components/MembroCard";
import { equipeDce } from "@/content/equipe";
import { cores } from "@/cores";

export const metadata: Metadata = { title: "Nossa equipe" };

export default function EquipePage() {
  return (
    <Faixa tom="claro" sx={{ pt: 0 }}>
      <Box sx={{ textAlign: "center", mb: { xs: 6, md: 9 } }}>
        <TituloBloco texto="NOSSA **EQUIPE**" bg={cores.lavanda} cor={cores.branco} sx={{ px: { xs: 5, md: 8 }, pt: { xs: 5, md: 7 } }} />
      </Box>
      <Box sx={{ display: "grid", gap: { xs: 7, md: 9 } }}>
        {equipeDce.map((m, i) => (
          <MembroCard key={m.nome} membro={m} invertido={i % 2 === 1} prioridade={i < 2} />
        ))}
      </Box>
    </Faixa>
  );
}
