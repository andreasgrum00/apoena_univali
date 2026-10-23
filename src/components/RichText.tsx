import { Fragment, type ReactNode } from "react";

// Converte a marcação usada em src/content (**negrito**, __sublinhado__, *itálico*, \n)
// em elementos React. Os marcadores funcionam como liga/desliga e podem se aninhar.
export function rich(texto: string): ReactNode {
  const nodes: ReactNode[] = [];
  let bold = false;
  let underline = false;
  let italic = false;
  let buffer = "";

  const flush = () => {
    if (!buffer) return;
    const parts = buffer.split("\n");
    let node: ReactNode = parts.map((p, i) => (
      <Fragment key={i}>
        {i > 0 && <br />}
        {p}
      </Fragment>
    ));
    if (italic) node = <em>{node}</em>;
    if (underline) node = <u>{node}</u>;
    if (bold) node = <strong>{node}</strong>;
    nodes.push(<Fragment key={nodes.length}>{node}</Fragment>);
    buffer = "";
  };

  for (let i = 0; i < texto.length; i++) {
    const two = texto.slice(i, i + 2);
    if (two === "**") {
      flush();
      bold = !bold;
      i++;
    } else if (two === "__") {
      flush();
      underline = !underline;
      i++;
    } else if (texto[i] === "*") {
      flush();
      italic = !italic;
    } else {
      buffer += texto[i];
    }
  }
  flush();
  return nodes;
}

// Versão sem marcação, para metadados e atributos alt
export function plain(texto: string): string {
  return texto.replace(/\*\*|__|\*/g, "").replace(/\n/g, " ");
}
