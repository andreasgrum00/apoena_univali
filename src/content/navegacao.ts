// Itens do sumário do PDF, ligados às rotas do site
export const sumario = [
  { titulo: "Carta aberta do presidente", href: "/carta" },
  { titulo: "Apoena", href: "/#apoena" },
  { titulo: "Nossa equipe", href: "/equipe" },
  { titulo: "O que é o DCE?", href: "/dce" },
  { titulo: "Nossas propostas", href: "/propostas" },
  { titulo: "Universidade gratuita", href: "/universidade-gratuita" },
  { titulo: "O que é a LAACS?", href: "/laacs" },
  { titulo: "Equipe LAACS", href: "/laacs/equipe" },
  { titulo: "Propostas LAACS", href: "/laacs/propostas" },
  { titulo: "O que é a ALA?", href: "/ala" },
  { titulo: "Propostas ALA", href: "/ala/propostas" },
];

export type ItemMenu = {
  titulo: string;
  href: string;
  filhos?: { titulo: string; href: string }[];
};

export const menu: ItemMenu[] = [
  { titulo: "Carta aberta", href: "/carta" },
  { titulo: "Nossa equipe", href: "/equipe" },
  { titulo: "O DCE", href: "/dce" },
  { titulo: "Nossas propostas", href: "/propostas" },
  { titulo: "Universidade gratuita", href: "/universidade-gratuita" },
  {
    titulo: "LAACS",
    href: "/laacs",
    filhos: [
      { titulo: "O que é a LAACS?", href: "/laacs" },
      { titulo: "Equipe LAACS", href: "/laacs/equipe" },
      { titulo: "Propostas LAACS", href: "/laacs/propostas" },
    ],
  },
  {
    titulo: "ALA",
    href: "/ala",
    filhos: [
      { titulo: "O que é a ALA?", href: "/ala" },
      { titulo: "Propostas ALA", href: "/ala/propostas" },
    ],
  },
];
