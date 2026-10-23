# Apoena · Chapa 01 — site do Plano de Gestão

Site de campanha feito em Next.js (App Router) + Material UI, com o texto do PDF "[APOENA] PLANO DE GESTÃO".

## Rodar

```bash
npm install
npm run dev
```

Abra http://localhost:3000. Para gerar a versão de produção: `npm run build && npm start`.

## Onde editar

- **Textos**: `src/content/` (`institucional.ts`, `equipe.ts`, `propostas.ts`). Marcação: `**negrito**`, `__sublinhado__`, `*itálico*`, `\n` para quebra de linha.
- **Cores**: `src/cores.ts` (tiradas do PDF). Fonte: Montserrat, carregada em `src/app/layout.tsx`.
- **Imagens**: `public/recortes` (colagens), `public/equipe` (fotos) e `public/fotos`, todas extraídas do PDF.
- **Estrofe da página "Nossas propostas"**: preencha `estrofe.linhas` em `src/content/propostas.ts`; o quadro só aparece quando houver texto.

## Rotas

| Rota | Conteúdo |
| --- | --- |
| `/` | Capa, "Apoena" e sumário |
| `/carta` | Carta aberta do presidente |
| `/equipe` | Nossa equipe |
| `/dce` | O que é o DCE? |
| `/propostas` e `/propostas/[slug]` | Nossas propostas (uma página por proposta) |
| `/universidade-gratuita` | Universidade gratuita |
| `/laacs`, `/laacs/equipe`, `/laacs/propostas/[slug]` | LAACS |
| `/ala`, `/ala/propostas/[slug]` | ALA |
