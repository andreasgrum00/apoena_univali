import Link from "@/components/Links";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Faixa, Texto, TituloBloco, fundos } from "./Secao";
import { CardProposta, GradeCards, NavProposta } from "./Propostas";
import Recorte from "./Recorte";
import { rich } from "./RichText";
import type { PropostaEntidade, Tom } from "@/content/propostas";
import { cores } from "@/cores";

type Entidade = {
  nome: string;
  base: string; // ex.: /laacs/propostas
  titulo: string;
  propostas: PropostaEntidade[];
  tom: Tom;
};

const somenteLeitor = {
  position: "absolute",
  width: 1,
  height: 1,
  overflow: "hidden",
  clip: "rect(0 0 0 0)",
  whiteSpace: "nowrap",
} as const;

const tomDa =(p: PropostaEntidade, e: Entidade): Tom => (p.grupo ? "azul" : e.tom);

// Rótulo em destaque que abre o parágrafo, como no PDF
function Rotulo({ texto, tom }: { texto: string; tom: Tom }) {
  const sx =
    tom === "azul"
      ? { color: cores.lavandaClara }
      : { bgcolor: cores.azul, color: cores.branco, px: 0.75, boxDecorationBreak: "clone", WebkitBoxDecorationBreak: "clone" };
  return (
    <Box component="strong" sx={{ fontWeight: 700, ...sx }}>
      {texto}
    </Box>
  );
}

export function ListaPropostasEntidade({ entidade, intro }: { entidade: Entidade; intro?: string }) {
  const grupos = Array.from(new Set(entidade.propostas.map((p) => p.grupo ?? "")));
  let n = 0;
  return (
    <>
      {intro && (
        <Faixa tom="lavanda" sx={{ py: { xs: 5, md: 6 } }}>
          <Typography sx={{ fontWeight: 700, fontSize: { xs: "1.15rem", md: "1.4rem" }, textAlign: "center", lineHeight: 1.5 }}>{intro}</Typography>
        </Faixa>
      )}
      <Faixa tom={entidade.tom} maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <TituloBloco
            texto={entidade.titulo}
            bg={entidade.tom === "azul" ? cores.lavanda : cores.azul}
            cor={entidade.tom === "azul" ? cores.azul : cores.branco}
            sx={{ fontSize: { xs: "1.5rem", sm: "2rem", md: "2.6rem" }, "& strong": { fontWeight: 700, color: entidade.tom === "azul" ? cores.azul : cores.branco } }}
          />
        </Box>
        {grupos.map((g) => (
          <Box key={g} sx={{ mt: g ? 8 : 0 }}>
            {g && (
              <Box sx={{ textAlign: "center", mb: 4 }}>
                <TituloBloco texto={g} bg={cores.claro} cor={cores.lavanda} as="h2" sx={{ "& strong": { color: cores.lavanda } }} />
              </Box>
            )}
            <GradeCards>
              {entidade.propostas
                .filter((p) => (p.grupo ?? "") === g)
                .map((p) => {
                  n += 1;
                  const tom: Tom = entidade.tom === "azul" ? "claro" : "azul";
                  return (
                    <CardProposta
                      key={p.slug}
                      href={`${entidade.base}/${p.slug}`}
                      titulo={`**${p.rotulo.replace(/:$/, "")}**`}
                      imagem={p.imagem}
                      tom={g ? "lavanda" : tom}
                      numero={n}
                    />
                  );
                })}
            </GradeCards>
          </Box>
        ))}
      </Faixa>
    </>
  );
}

export function PaginaPropostaEntidade({ entidade, slug }: { entidade: Entidade; slug: string }) {
  const i = entidade.propostas.findIndex((x) => x.slug === slug);
  const p = entidade.propostas[i];
  const tom = tomDa(p, entidade);
  const cor = fundos[tom].texto;
  const anterior = entidade.propostas[i - 1];
  const proxima = entidade.propostas[i + 1];
  const [primeiro, ...resto] = p.paragrafos;

  return (
    <Faixa tom={tom} sx={{ minHeight: "70vh" }}>
      <Box
        component={Link}
        href={entidade.base}
        sx={{ display: "inline-flex", alignItems: "center", gap: 1, color: cor, fontWeight: 700, textDecoration: "none", fontSize: 14, "&:hover": { textDecoration: "underline" } }}
      >
        <ArrowBackIcon fontSize="small" /> PROPOSTAS {entidade.nome} · {String(i + 1).padStart(2, "0")}/{entidade.propostas.length}
      </Box>

      <Box sx={{ mt: 4, mb: 5, display: "flex", alignItems: "center", gap: 3 }}>
        <Typography component="p" sx={{ textTransform: "uppercase", fontSize: { xs: "1rem", md: "1.2rem" }, lineHeight: 1.3, flex: 1, "& strong": { fontWeight: 700 } }}>
          {rich(p.grupo ?? entidade.titulo)}
        </Typography>
        {p.imagem && <Recorte src={p.imagem} priority sx={{ width: { xs: 90, sm: 140 }, flexShrink: 0, transform: "rotate(-5deg)" }} />}
      </Box>

      <Box component="h1" sx={somenteLeitor}>
        {p.rotulo.replace(/:$/, "")}
      </Box>
      <Box
        component="p"
        sx={{
          m: 0,
          mb: 3,
          fontSize: { xs: "1rem", md: "1.125rem" },
          lineHeight: 1.8,
          fontWeight: 400,
          textAlign: { xs: "left", sm: "justify" },
          hyphens: "auto",
          "& strong": { fontWeight: 700 },
        }}
      >
        <Rotulo texto={p.rotulo} tom={tom} /> {rich(primeiro)}
      </Box>
      {resto.length > 0 && <Texto paragrafos={resto} cor={cor} />}

      <NavProposta
        anterior={anterior ? { href: `${entidade.base}/${anterior.slug}`, titulo: anterior.rotulo.replace(/:$/, "") } : null}
        proxima={proxima ? { href: `${entidade.base}/${proxima.slug}`, titulo: proxima.rotulo.replace(/:$/, "") } : null}
        voltar={{ href: entidade.base, titulo: `Ver todas as propostas ${entidade.nome}` }}
        cor={cor}
      />
    </Faixa>
  );
}
