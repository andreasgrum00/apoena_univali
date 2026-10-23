// Texto transcrito do PDF. Marcação: **negrito**, __sublinhado__, *itálico*.

export type Membro = {
  nome: string;
  cargo: string;
  bio: string;
  foto: string;
  // Enquadramento da foto dentro da moldura (CSS object-position)
  enquadramento?: string;
};

export const equipeDce: Membro[] = [
  {
    nome: "GREGÓRIO CRISTINO",
    cargo: "Presidente",
    foto: "/equipe/gregorio.webp",
    enquadramento: "50% 30%",
    bio: "Acadêmico de Direito (10º) e Administração (1º). Foi Presidente do Diretório Acadêmico Des. Henrique da Silva Fontes (DADHSF), Diretor de Esportes da Atlética de Direito (ADUP) e Diretor de Assuntos Internos do Diretório Central dos Estudantes (DCE). Foi representante da UNIVALI no Conselho Municipal de Juventude (COMJUV) de Itajaí. Além disso, foi representante do corpo discente no Conselho de Administração Superior (CAS) da UNIVALI.",
  },
  {
    nome: "VALENTINA RAMOS",
    cargo: "Vice-Presidente",
    foto: "/equipe/valentina.webp",
    bio: "Acadêmica de Medicina (4º Período). É, atualmente, membro no setor de eventos da Associação Atlética Acadêmica Odemari Miranda Ferrari (AAAOMF) e, também, é membro do setor de Projetos Sociais do Centro Acadêmico Professor Edson Vilella (CAPEVI), na gestão plena e setor de projetos sociais.",
  },
  {
    nome: "VICTOR SPENGLER",
    cargo: "Secretário-geral",
    foto: "/equipe/victor.webp",
    bio: "Acadêmico de Relações Internacionais (8°) e Direito (4°). É, atualmente, Presidente do Centro Acadêmico Anita Garibaldi (CAAG), Diretor Jurídico do Diretório Acadêmico Des. Henrique da Silva Fontes (DADHSF) e Vice-Presidente da Sociedade de Debates Rosni Ferreira (SDDRF). Foi Presidente fundador da Liga Acadêmica de Segurança Internacional (LASI) e Vice-Presidente da Liga Acadêmica de Direito Penal (LADIPE).",
  },
  {
    nome: "ISABELLY MARTINS",
    cargo: "Primeira Secretária",
    foto: "/equipe/isabelly.webp",
    bio: "Acadêmica de Engenharia Civil (6º período). É, atualmente, Diretora de Marketing da Associação Atlética Acadêmica de Engenharia (AAAEU), tendo atuado também como Diretora de Marketing no Centro Acadêmico de Engenharia Civil (CAEHB) e da LAACS. Além disso, faz parte do Colegiado do curso de Engenharia Civil.",
  },
  {
    nome: "ANA JULIA PERUCCI",
    cargo: "Tesoureira",
    foto: "/equipe/ana-julia.webp",
    bio: "Acadêmica de Ciências Contábeis (6°). Presidente da Atlética de Ciências Contábeis (AAACONT) do campus de Itajaí. Bolsista do Programa Universidade Gratuita. Integrante do NAF - Núcleo de Apoio Contábil e Fiscal da UNIVALI.",
  },
  {
    nome: "GABRIELLE RUDOLF",
    cargo: "Diretora de Comunicação",
    foto: "/equipe/gabrielle.webp",
    enquadramento: "50% 20%",
    bio: "Acadêmica de Jornalismo (6º), Bolsista do Programa Universidade Gratuita. Foi voluntária na Liga Acadêmica Antonieta de Barros (LAAB), Faz parte da Diretoria de Comunicação da Atlética de Jornalismo (AAAJU) e atua na equipe de Redação e Transmissão do Projeto Integrado de Comunicação Celero/antiga Galo Tv.",
  },
  {
    nome: "ALYSSON LUIZ",
    cargo: "Diretor de Assuntos Institucionais",
    foto: "/equipe/alysson.webp",
    enquadramento: "50% 40%",
    bio: "Acadêmico de Engenharia Química (6º). Bolsista do programa Universidade Gratuita. Ex-Bolsista e voluntário de Extensão Universitária no projeto Química Social (2024 - 2026). Ex-Bolsista do PIBIC e voluntário em projetos de Iniciação Científica (2024 - 2026). Representante do corpo discente do curso de Engenharia Química (2024-2026). E, atualmente, Presidente do Centro Acadêmico de Engenharia Química (CAEQ).",
  },
  {
    nome: "JOÃO ALFREDO (JOFFREY)",
    cargo: "Diretor de Representação de *Campi*",
    foto: "/equipe/joffrey.webp",
    enquadramento: "50% 40%",
    bio: "Acadêmico de Direito (6º), *campus* Florianópolis. É, atualmente, Presidente da Atlética UNIVALI Floripa (AAUF) e Vice-Diretor da Direção de Representação de Campi (DRC), campus Florianópolis, do DCE.",
  },
  {
    nome: "MARIANA CAROLINE SCHMITT",
    cargo: "Diretora de Esportes",
    foto: "/equipe/mariana.webp",
    bio: "Acadêmica de Psicologia (6°). Foi Diretora de Eventos da Atlética de Psicologia (GUAXAS). Foi Supervisora da LPBE Liga Acadêmica de Psicologia Baseada em Evidências) pela COLAP (Coordenação das Ligas acadêmicas de Psicologia) e, atualmente, está como Diretora de Eventos da LAACS (25-26), sendo a principal responsável pela integração da REDBULL a COPA LAACS",
  },
  {
    nome: "PEDRO AUGUSTO SILVA COSTA",
    cargo: "Diretor de Ensino, Pesquisa e Extensão",
    foto: "/equipe/pedro.webp",
    bio: "Acadêmico de Direito (8º). É, atualmente, Presidente do Diretório Acadêmico Des. Henrique da Silva Fontes (DADHSF). Pesquisador pelo Grupo de Pesquisa Estrutura e Dinâmica do Estado Federal (GPEDEF, USP). Bolsista do programa Universidade para Todos (PROUNI). Ex-monitor do Grupo de Pesquisa e Extensão PAIDEIA (2024/2025). Eleito e reeleito Presidente do Conselho das Ligas Acadêmicas do Curso de Direito (CLAD - 2024/26). Presidente-fundador da Liga Acadêmica de Direito Constitucional (LACONST) e Vice-presidente fundador da Liga Acadêmica de Direito Aduaneiro e Comércio Exterior. Representante discente no NDE Colegiado do Curso de Direito, UNIVALI (2024-2026).",
  },
];

export const equipeLaacs: Membro[] = [
  {
    nome: "MARIANA CAROLINE SCHMITT",
    cargo: "Presidente",
    foto: "/equipe/mariana-laacs.webp",
    bio: "Acadêmica de Psicologia (6°). Foi Diretora de Eventos da Atlética de Psicologia (GUAXAS). Foi Supervisora da LPBE Liga Acadêmica de Psicologia Baseada em Evidências) pela COLAP (Coordenação das Ligas acadêmicas de Psicologia) e, atualmente, está como Diretora de Eventos da LAACS (25-26), sendo a principal responsável pela integração da REDBULL a COPA LAACS",
  },
  {
    nome: "ISABELA LINS",
    cargo: "Vice-Presidente",
    foto: "/equipe/isabela.webp",
    bio: "Acadêmica do 9º período de Direito. Participou ativamente da Atlética de Direito da Univali Poseidon (ADUP) entre 2023-2026, desde a secretária geral, diretoria de eventos e vice-presidência. Em 2026/1 foi vice-presidente da Liga das Atléticas Carolina Sinzker e participou dos eventos esportivos e projetos oferecidos pela mesma.",
  },
  {
    nome: "GEOVANA MATHIOLA",
    cargo: "Secretária-geral",
    foto: "/equipe/geovana.webp",
    bio: "Acadêmica de Design de Interiores (1º) e Direito (4º). É Secretária da Tesouraria do Diretório Acadêmico Des. Henrique da Silva Fontes (DADHSF) e Diretora Financeira da Atlética de Direito (ADUP). É representante de classe e Presidente da Comissão de Formatura 2029/2. Além disso, é ligante da Liga Acadêmica de Direito Tributário, Empresarial e Cível (LATEC).",
  },
  {
    nome: "JOÃO GUILHERME GAUER LUSA",
    cargo: "Diretor de Esportes",
    foto: "/equipe/joao-guilherme.webp",
    bio: "Acadêmico de Enfermagem (4º período) pela UNIVALI. Foi Diretor de Esportes da Liga Acadêmica das Atléticas e Centros Acadêmicos (LAACS) da UNIVALI. Além disso, participou de projetos de extensão voltados à promoção da saúde no município de Itajaí, contribuindo em ações de educação em saúde e integração entre universidade e comunidade.",
  },
  {
    nome: "GUILHERMO TAFAS",
    cargo: "Secretário de Esportes",
    foto: "/equipe/guilhermo.webp",
    bio: "Acadêmico de Medicina (3°) da UNIVALI. Integra a Atlética de Medicina (AAAOMF) desde junho de 2026, envolvendo-se principalmente nas áreas de esportes e eventos. Teve seu primeiro contato com a LAACS por meio da Copa LAACS, na qual participou como atleta de futsal, experiência que despertou seu interesse pelo movimento. Recentemente, foi convidado a integrar a LAACS. Tem grande interesse em conhecer novas pessoas, fortalecer conexões e contribuir para o crescimento e desenvolvimento do movimento.",
  },
  {
    nome: "ARTHUR LACERDA",
    cargo: "Diretor de Eventos",
    foto: "/equipe/arthur.webp",
    bio: "Acadêmico de Publicidade e Propaganda (2°). Ocupou o cargo de secretário de esportes da AAAPPU (26.1) e atualmente ocupa o cargo de Secretário de Eventos da AAAPPU (26.2). É *Student Marketeer* da Red Bull, responsável por todas as ativações da marca dentro do *campus* da UNIVALI e na região do Vale do Itajaí, ocupando também a posição de *Team Leader* de SC. Atua a mais de 5 anos como Designer Gráfico.",
  },
  {
    nome: "LETÍCIA GRIMES",
    cargo: "Secretária de Eventos",
    foto: "/equipe/leticia.webp",
    enquadramento: "45% 50%",
    bio: "Está no segundo período de produção audiovisual. Atualmente trabalha no Estúdio Café Maestro, fazendo gravações de Podcast, Palestras e eventos corporativos dentro e fora do estúdio. Além disso, faz parte da LAAB (Liga Acadêmica Antonieta de Barros) e da Celero (ex-galo TV) como DTV (Diretora de corte) e acabo dando uma ajuda em outras áreas.",
  },
  {
    nome: "ISADORA DE MELLO RUBIM",
    cargo: "Secretária de Eventos",
    foto: "/equipe/isadora.webp",
    bio: "Acadêmica de Fisioterapia (4º). Participa da Atlética de Fisioterapia (AAAFU) desde março de 2025 como júnior de eventos e, em abril, assumi a diretoria de eventos. É, atualmente, Vice-Presidente da AAAFU. É, também, Vice-Presidente do Centro Acadêmico de Fisioterapia (CAFT), onde participa da reconstrução e reativação do espaço, que estava parado há cerca de um ano e meio.",
  },
  {
    nome: "CRISTIAN SARAMENTO",
    cargo: "Diretor de Marketing",
    foto: "/equipe/cristian.webp",
    enquadramento: "70% 50%",
    bio: "Acadêmico de Jornalismo (6º período). Atua no setor de Comunicação da Prefeitura, com experiência na cobertura de eventos. Faz parte da equipe de Comunicação da Atlética de Jornalismo desde o início de 2026, com participação na produção de roteiros, peças, ideias e vídeos, além de acompanhar decisões da diretoria. Também integra a equipe do Projeto Integrado de Comunicação Celero, antiga Galo TV, como comentarista dos jogos e colaborador na produção do projeto.",
  },
  {
    nome: "IGOR MATEHUS DE OLIVEIRA ROCHA",
    cargo: "Secretário de Marketing",
    foto: "/equipe/igor.webp",
    bio: "Acadêmico de Odontologia (6°) da UNIVALI. Integra a Atlética de Odontologia da UNIVALI (AAAOU) desde 2024, onde atuou como Secretário de Esportes e, posteriormente, como Diretor de Esportes. É idealizador do projeto *Fala No Rolê*. Atua também como *Creator* da Red Bull no *campus* da UNIVALI Itajaí, auxiliando em ativações da marca junto às atléticas e eventos, além da criação de conteúdos.",
  },
  {
    nome: "PAOLA PIRAN ZANELLA",
    cargo: "Tesoureira",
    foto: "/equipe/paola.webp",
    bio: "Acadêmica do 9º período de Ciência da Computação na UNIVALI. Durante a graduação, participou da Atlética de Ciência da Computação, chegando à vice-presidência, e de projetos de extensão voltados à comunidade. Atualmente, desenvolve seu TCC, o *MapSafe*, focado em rotas seguras durante enchentes.",
  },
  {
    nome: "AMANDA LETÍCIA SILVA ARAÚJO",
    cargo: "Secretária de Esportes",
    foto: "/equipe/amanda.webp",
    enquadramento: "50% 60%",
    bio: "Acadêmica de Educação Física (3º período), bolsista do Programa Universidade Gratuita e do Programa Institucional de Bolsa de Iniciação à Docência (PIBID), no qual atua como professora de Educação Física no Ensino Fundamental. É, Atualmente, Diretora Executiva da Associação Atlética Acadêmica de Educação Física (AAAEFU).",
  },
];
