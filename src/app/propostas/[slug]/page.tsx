import type { Metadata } from "next";
import Link from "@/components/Links";
import { notFound } from "next/navigation";
import Box from "@mui/material/Box";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Faixa, Texto, fundos } from "@/components/Secao";
import { BannerProposta, NavProposta } from "@/components/Propostas";
import { plain } from "@/components/RichText";
import { propostasDce } from "@/content/propostas";
import { cores } from "@/cores";

// Todas as páginas saem prontas do build (generateStaticParams); a navegação pode
// aguardar o conteúdo em vez de mostrar um fallback de carregamento.
export const instant = false;

export function generateStaticParams() {
  return propostasDce.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/propostas/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = propostasDce.find((x) => x.slug === slug);
  return { title: p ? plain(p.titulo) : "Proposta" };
}

export default async function PropostaPage({ params }: PageProps<"/propostas/[slug]">) {
  const { slug } = await params;
  const i = propostasDce.findIndex((x) => x.slug === slug);
  if (i === -1) notFound();
  const p = propostasDce[i];
  const anterior = propostasDce[i - 1];
  const proxima = propostasDce[i + 1];
  const corTexto = p.textoAzul ? cores.azul : fundos[p.tom].texto;

  return (
    <Faixa tom={p.tom} sx={{ minHeight: "70vh" }}>
      <Box
        component={Link}
        href="/propostas"
        sx={{ display: "inline-flex", alignItems: "center", gap: 1, color: fundos[p.tom].texto, fontWeight: 700, textDecoration: "none", fontSize: 14, "&:hover": { textDecoration: "underline" } }}
      >
        <ArrowBackIcon fontSize="small" /> NOSSAS PROPOSTAS · {String(i + 1).padStart(2, "0")}/{propostasDce.length}
      </Box>

      <BannerProposta titulo={p.titulo} imagem={p.imagem} tom={p.tom} />

      <Texto paragrafos={p.paragrafos} cor={corTexto} sx={{ mt: { xs: 5, md: 6 } }} />

      <NavProposta
        anterior={anterior ? { href: `/propostas/${anterior.slug}`, titulo: anterior.titulo } : null}
        proxima={proxima ? { href: `/propostas/${proxima.slug}`, titulo: proxima.titulo } : null}
        voltar={{ href: "/propostas", titulo: "Ver todas as propostas" }}
        cor={fundos[p.tom].texto === cores.preto ? cores.azul : cores.branco}
      />
    </Faixa>
  );
}
