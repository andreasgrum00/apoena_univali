import type { Metadata } from "next";
import { ListaPropostasEntidade } from "@/components/PropostasEntidade";
import { entidadeLaacs } from "@/content/entidades";
import { laacs } from "@/content/institucional";

export const metadata: Metadata = { title: "Propostas LAACS" };

export default function PropostasLaacsPage() {
  return <ListaPropostasEntidade entidade={entidadeLaacs} intro={laacs.chamadaPropostas} />;
}
