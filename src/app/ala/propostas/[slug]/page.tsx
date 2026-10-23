import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PaginaPropostaEntidade } from "@/components/PropostasEntidade";
import { entidadeAla } from "@/content/entidades";

// Todas as páginas saem prontas do build (generateStaticParams); a navegação pode
// aguardar o conteúdo em vez de mostrar um fallback de carregamento.
export const instant = false;

export function generateStaticParams() {
  return entidadeAla.propostas.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/ala/propostas/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = entidadeAla.propostas.find((x) => x.slug === slug);
  return { title: p ? p.rotulo.replace(/:$/, "") : "Proposta ALA" };
}

export default async function PropostaAlaPage({ params }: PageProps<"/ala/propostas/[slug]">) {
  const { slug } = await params;
  if (!entidadeAla.propostas.some((x) => x.slug === slug)) notFound();
  return <PaginaPropostaEntidade entidade={entidadeAla} slug={slug} />;
}
