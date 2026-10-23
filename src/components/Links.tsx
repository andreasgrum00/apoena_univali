"use client";

// next/link reexportado de um módulo client: assim ele vira uma referência de
// Client Component e pode ser passado como `component={Link}` para o MUI a partir
// de Server Components.
export { default } from "next/link";
