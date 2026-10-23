import { propostasAla, propostasLaacs, tituloPropostasAla, tituloPropostasLaacs } from "./propostas";

export const entidadeLaacs = {
  nome: "LAACS",
  base: "/laacs/propostas",
  titulo: tituloPropostasLaacs,
  propostas: propostasLaacs,
  tom: "azul" as const,
};

export const entidadeAla = {
  nome: "ALA",
  base: "/ala/propostas",
  titulo: tituloPropostasAla,
  propostas: propostasAla,
  tom: "lavanda" as const,
};
