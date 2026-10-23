import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PaginaPropostaEntidade } from "@/components/PropostasEntidade";
import { entidadeLaacs } from "@/content/entidades";

// Todas as páginas saem prontas do build (generateStaticParams); a navegação pode
// aguardar o conteúdo em vez de mostrar um fallback de carregamento.
export const instant = false;

export function generateStaticParams() {
  return entidadeLaacs.propostas.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/laacs/propostas/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = entidadeLaacs.propostas.find((x) => x.slug === slug);
  return { title: p ? p.rotulo.replace(/:$/, "") : "Proposta LAACS" };
}

export default async function PropostaLaacsPage({ params }: PageProps<"/laacs/propostas/[slug]">) {
  const { slug } = await params;
  if (!entidadeLaacs.propostas.some((x) => x.slug === slug)) notFound();
  return <PaginaPropostaEntidade entidade={entidadeLaacs} slug={slug} />;
}
