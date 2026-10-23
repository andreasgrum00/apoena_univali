import type { Metadata } from "next";
import { ListaPropostasEntidade } from "@/components/PropostasEntidade";
import { entidadeAla } from "@/content/entidades";

export const metadata: Metadata = { title: "Propostas ALA" };

export default function PropostasAlaPage() {
  return <ListaPropostasEntidade entidade={entidadeAla} />;
}
