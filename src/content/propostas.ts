// Texto transcrito do PDF. Marcação: **negrito**, __sublinhado__, *itálico*. Quebra de linha: \n
// "tom" reproduz a cor de fundo da página correspondente no PDF.

export type Tom = "azul" | "lavanda" | "claro";

export type Proposta = {
  slug: string;
  titulo: string;
  paragrafos: string[];
  imagem: string;
  tom: Tom;
  textoAzul?: boolean;
};

// Estrofe citada na abertura de "Nossas propostas" (página 11 do PDF).
// Cole aqui as linhas da estrofe, uma por item, para o quadro da citação aparecer no site.
export const estrofe: { linhas: string[]; destaque: string; autor: string } = {
  linhas: [],
  destaque: "",
  autor: "BOB **MARLEY**",
};

export const introPropostas = [
  "Essa estrofe é da música “*Get Up, Stand Up*”, de Bob Marley, mas poderia ser o resumo de qualquer conquista estudantil desta universidade. **__Os nossos Direitos não caem do céu, e ninguém irá entregá-los o que não é cobrado.__** O que existe hoje na UNIVALI, das bolsas ao assento nos conselhos, chegou até aqui porque acadêmicos se levantaram, se uniram e insistiram. É desse lugar que falamos.",
  "As propostas a seguir não são uma lista de desejos. **Cada uma nasceu de conversa com quem vive a universidade todos os dias e vem acompanhada do que pretendemos fazer, em quanto tempo e como vocês poderão verificar se cumprimos.** Algumas dependem só do nosso trabalho e começam no primeiro mês. Outras dependem de negociação com a instituição e exigirão pressão e paciência. Nenhuma delas está aqui por acaso.",
  "Leiam, cobrem e nos ajudem a levantar essa pauta.",
];

export const propostasDce: Proposta[] = [
  {
    slug: "prato-cheio",
    titulo: "**PRATO CHEIO:** REFEIÇÃO ACESSÍVEL PARA TODOS OS ACADÊMICOS",
    imagem: "/recortes/prato.webp",
    tom: "azul",
    paragrafos: [
      "A meta é um restaurante universitário de verdade, com preço subsidiado, e vamos trabalhar por isso. Mas até que essa conquista se viabilize, ninguém pode continuar escolhendo entre almoçar e pagar o transporte. **Nossa __proposta imediata__ é negociar com todos os estabelecimentos que operam dentro da UNIVALI a oferta de ao menos um prato acessível de R$12,00 (doze reais),** disponível todos os dias e divulgado de forma visível. Em contrapartida, o DCE oferece divulgação institucional e apoio na comunicação com os estudantes. É uma solução de curto prazo, mas que resolve um problema que é diário.",
      "**__O restaurante universitário, porém, continua sendo a pauta central.__** Ele existe em praticamente toda universidade grande deste país porque cumpre uma função simples e decisiva: garantir que ninguém abandone a graduação por não conseguir se alimentar. Comer mal durante cinco anos cobra preço em saúde, em rendimento e em permanência, e quem sente isso primeiro é o estudante que trabalha o dia inteiro e assiste aula à noite de estômago vazio. Um RU também transforma o campus em lugar de convivência, e não apenas de passagem. Por isso, vamos tratar essa pauta com seriedade desde o primeiro mês de gestão, buscando estudo de viabilidade junto à universidade e mantendo a discussão viva, para que ela deixe de ser promessa de campanha e vire projeto com prazo.",
    ],
  },
  {
    slug: "taxa-zero",
    titulo: "**TAXA ZERO:** O FIM DAS TAXAS ADMINISTRATIVAS",
    imagem: "/recortes/mao-escrevendo.webp",
    tom: "claro",
    paragrafos: [
      "Cobrar à parte por serviços que já deveriam estar contemplados na mensalidade é onerar duas vezes o mesmo acadêmico. Histórico oficial, segunda chamada, juntar atestado no Intranet são parte da vida acadêmica de qualquer aluno, e não itens opcionais de consumo. **Vamos levantar todas as taxas hoje cobradas pela UNIVALI, calcular o impacto real que elas geram no orçamento estudantil e apresentar à administração um pedido formal de extinção, com proposta de cronograma.** Onde a extinção imediata não for possível, cobraremos isenção automática para estudantes bolsistas e inscritos no CadÚnico, além de transparência sobre a destinação dos valores arrecadados.",
    ],
  },
  {
    slug: "estacionamentos",
    titulo: "MELHORIAS NOS **ESTACIONAMENTOS** DA UNIVALI (TODOS OS CAMPI)",
    imagem: "/recortes/carro.webp",
    tom: "azul",
    paragrafos: [
      "O estacionamento é hoje uma das maiores queixas em todos os *campi*, e o problema é o mesmo em cada um deles: valor cobrado, disponibilidade de vagas, filas em horário de pico (entrada e saída) e ausência de canal claro para reclamação. Vamos reunir as reclamações de forma organizada, com formulário aberto e dados por campus, e levar à universidade um pedido formal de revisão do contrato firmado com a operadora. **__Nossas pautas: mensalidade e tarifa reduzida para estudante, mais vagas, tolerância de tempo compatível com a rotina acadêmica e um canal de ouvidoria que funcione de fato.__**",
    ],
  },
  {
    slug: "casa-do-estudante",
    titulo: "CASA DO **ESTUDANTE**",
    imagem: "/recortes/casa.webp",
    tom: "claro",
    paragrafos: [
      "Nenhum estudante deveria abandonar a graduação por não ter onde morar. **__Nossa proposta é a criação de uma Casa do Estudante destinada a acadêmicos da UNIVALI inscritos no CadÚnico, com critérios públicos de seleção e prioridade para quem vem de outra cidade e comprova vulnerabilidade.__**",
      "O projeto começaria como piloto no campus de Itajaí, o maior da universidade, com número inicial reduzido de vagas para permitir avaliação e ajuste antes da expansão. O caminho é longo e passa por estudo de viabilidade, definição de imóvel, modelo de gestão e possíveis parcerias com o poder público municipal e com a própria universidade. Assumimos o compromisso de iniciar e documentar publicamente cada etapa, para que a pauta não morra ao fim da gestão.",
    ],
  },
  {
    slug: "turma-garantida",
    titulo: "**TURMA GARANTIDA:** REVISÃO DO NÚMERO MÍNIMO PARA ABERTURA DE TURMAS",
    imagem: "/recortes/livros.webp",
    tom: "claro",
    paragrafos: [
      "Cursos menores convivem com uma insegurança permanente: a cada semestre, o risco de a turma não abrir e de o estudante ter que atrasar a formação, migrar de curso ou trancar. **__Vamos solicitar à universidade a revisão dos critérios de quórum mínimo, com atenção especial aos cursos de menor demanda e às disciplinas de fase final.__** Defenderemos alternativas já praticadas em outras instituições, como turmas conjuntas entre cursos afins, oferta em regime concentrado, aproveitamento entre campi e comunicação antecipada ao acadêmico, para que ninguém descubra em cima da hora que sua disciplina não vai existir.",
    ],
  },
  {
    slug: "doe-sangue",
    titulo: "**DOE SANGUE:** HEMOSC NA UNIVALI",
    imagem: "/recortes/bolsa-sangue.webp",
    tom: "lavanda",
    paragrafos: [
      "Uma bolsa de sangue leva menos de uma hora para ser doada e pode salvar até quatro vidas. **__Nossa proposta é firmar parceria permanente com o HEMOSC para uma ação de coleta a cada semestre, intercalando os campi da universidade, de modo que todos participem ao longo da gestão.__** Além da coleta, faremos campanha de esclarecimento sobre critérios de doação e cadastro de medula óssea, com apoio dos cursos da área da saúde e das Ligas Acadêmicas. É a forma mais simples de a UNIVALI devolver algo concreto às cidades que a acolhem.",
    ],
  },
  {
    slug: "univali-sem-assedio",
    titulo: "**UNIVALI SEM ASSÉDIO:** CANAL SEGURO E POLÍTICA ATIVA DE ENFRENTAMENTO",
    imagem: "/recortes/celular-olhos.webp",
    tom: "claro",
    paragrafos: [
      "Assédio dentro da universidade não é caso isolado nem assunto para se resolver em conversa de corredor. É violência, e a relação desigual entre docente e discente faz com que a maioria dos casos nunca seja denunciada, por medo de retaliação na nota, no estágio ou na carreira.",
      "**__Vamos cobrar da UNIVALI um canal de denúncia acessível, com garantia de sigilo, acolhimento imediato e prazo definido de resposta, além de protocolo claro que afaste o denunciado do contato direto com a vítima durante a apuração.__** Paralelamente, o DCE manterá o acolhimento estudantil, orientação sobre os caminhos formais e acompanhamento dos casos, sem expor ninguém. Faremos campanhas de conscientização a cada semestre, porque prevenção também é política institucional.",
    ],
  },
  {
    slug: "campus-seguro",
    titulo: "**CAMPUS SEGURO:** ILUMINAÇÃO E RONDAS",
    imagem: "/recortes/lampada.webp",
    tom: "azul",
    paragrafos: [
      "Sair da aula às 22h (dez da noite) e caminhar até o carro, o ponto de ônibus ou a moradia não pode ser motivo de medo. Vamos mapear, com participação dos estudantes, os pontos críticos de cada campus e do entorno, identificando trechos escuros, áreas sem circulação e horários de maior risco. Com esse levantamento em mãos, **__cobraremos da universidade a ampliação da iluminação e da segurança interna, e articularemos com as prefeituras e com a Polícia Militar o reforço de rondas nos horários de entrada e saída do período noturno.__** Segurança se resolve com dados e com pressão, não com sorte.",
    ],
  },
  {
    slug: "pontos-de-onibus",
    titulo: "MELHORIA DOS **PONTOS DE ÔNIBUS** NO ENTORNO DA UNIVALI",
    imagem: "/recortes/onibus.webp",
    tom: "azul",
    paragrafos: [
      "Quem depende de transporte público enfrenta um problema invisível para quem não depende: pontos pequenos, sem cobertura adequada, sem iluminação e sem qualquer sensação de segurança na espera noturna. **__Vamos levantar a situação dos pontos que atendem cada campus e apresentar às prefeituras e aos órgãos responsáveis um pedido formal de ampliação, cobertura, iluminação e melhor sinalização. Também cobraremos revisão de horários compatíveis com o fim das aulas noturnas.__** É uma pauta que exige articulação externa, e por isso será tratada com ofício, protocolo e acompanhamento público de cada resposta recebida.",
    ],
  },
  {
    slug: "amicao",
    titulo: "**AMICÃO:** PONTOS DE ALIMENTAÇÃO PARA CÃES E GATOS",
    imagem: "/recortes/cachorro.webp",
    tom: "claro",
    paragrafos: [
      "Os animais que circulam pela universidade fazem parte da rotina de todo mundo e são cuidados hoje de forma improvisada, por quem se sensibiliza. **__Nossa proposta é instalar potes fixos de ração e água em todos os blocos e campi, com reposição organizada pelo DCE em parceria com voluntários e protetores independentes.__** Junto disso, faremos campanhas de castração, vacinação e adoção responsável. É uma ação de baixo custo e alto impacto, que diz muito sobre o tipo de comunidade acadêmica que queremos ser.",
    ],
  },
  {
    slug: "jiu-jitsu-gratuito",
    titulo: "**JIU-JITSU GRATUITO** PARA TODOS OS ACADÊMICOS DA UNIVALI",
    imagem: "/recortes/jiu-jitsu.webp",
    tom: "claro",
    paragrafos: [
      "**__Vamos oferecer aulas gratuitas de jiu-jítsu para estudantes da UNIVALI, em duas turmas distintas: uma mista e outra exclusiva para mulheres, com foco em defesa pessoal.__** A proposta une três coisas que nos importam, que são saúde física, convivência entre cursos e autonomia diante da insegurança que muitos estudantes relatam no dia a dia. A viabilização se dará por parceria com academias, professores voluntários, projetos de extensão e cursos da área de educação física, com uso de espaço cedido pela universidade. Turmas com inscrição aberta, horários compatíveis com o período noturno e sem qualquer custo para o participante.",
    ],
  },
  {
    slug: "manual-dos-calouros",
    titulo: "**MANUAL DOS CALOUROS**",
    imagem: "/recortes/mao-coracao.webp",
    tom: "lavanda",
    paragrafos: [
      "Todo calouro passa pelo mesmo período de desorientação: não sabe onde fica o setor que resolve seu problema, como pedir bolsa, quais são os prazos, o que é colegiado, quem procurar quando algo dá errado. **__Vamos produzir um manual do calouro, digital e gratuito, reunindo informações práticas sobre matrícula, bolsas e financiamento, sistemas da universidade, direitos do estudante, estrutura de cada campus, transporte, CAs, DAs, Atléticas, Ligas e canais de apoio.__** Será atualizado a cada semestre e distribuído no início de cada período letivo, junto com uma ação presencial de recepção nos campi.",
    ],
  },
  {
    slug: "voz-academica",
    titulo: "**VOZ ACADÊMICA:** JORNAL DO DCE",
    imagem: "/recortes/jornal.webp",
    tom: "lavanda",
    paragrafos: [
      "**__Vamos criar um jornal estudantil, em formato digital e com edições impressas pontuais, produzido por estudantes de todos os cursos.__** O espaço servirá para divulgar as ações do DCE e o andamento das pautas, mas principalmente para dar voz ao que acontece na universidade: pesquisa, extensão, projetos, conquistas de cursos, denúncias, opinião e debate. Será aberto à colaboração de qualquer acadêmico, com curadoria feita por uma equipe editorial estudantil. Comunicação própria é o que impede que a história da universidade seja contada apenas por quem a administra.",
    ],
  },
  {
    slug: "dce-digital",
    titulo: "**DCE DIGITAL:** SITE DA ENTIDADE",
    imagem: "/recortes/notebook.webp",
    tom: "azul",
    paragrafos: [
      "Informação que não circula não serve para nada. **__Vamos criar um site oficial do DCE, com estatuto e regimento disponíveis, composição da gestão, calendário de ações, canal de escuta e formulário de demandas, além da área de prestação de contas, com receitas, despesas e status de cada proposta deste plano.__** O site funcionará como memória institucional da entidade, de modo que as próximas gestões não precisem começar do zero, e como ferramenta de cobrança, permitindo que qualquer estudante verifique, a qualquer momento, o que foi prometido e o que foi cumprido.",
    ],
  },
  {
    slug: "imprime-ai",
    titulo: "**IMPRIME AÍ:** AMPLIAÇÃO DOS PONTOS DE IMPRESSÃO",
    imagem: "/recortes/impressora.webp",
    tom: "claro",
    paragrafos: [
      "A quantidade atual de pontos de impressão não acompanha o número de acadêmicos, o que gera fila, atraso e a corrida de última hora antes da entrega de trabalho. **__Vamos levantar a demanda real por campus e por bloco, com dados de uso e horários de pico, e apresentar à universidade um pedido de ampliação dos pontos, com atenção especial aos blocos mais distantes e ao período noturno.__** Também cobraremos previsibilidade de manutenção e de reposição de insumos, porque equipamento parado é o mesmo que equipamento inexistente.",
    ],
  },
  {
    slug: "carteirinha-na-mao",
    titulo: "**CARTEIRINHA NA MÃO:** REPASSE AOS CA’S E ATLÉTICAS",
    imagem: "/recortes/carteirinha.webp",
    tom: "claro",
    paragrafos: [
      "A carteirinha estudantil é um direito e também uma fonte de recurso para as entidades que movimentam a vida universitária. **__Nossa proposta é organizar o processo de emissão em conjunto com Centros/Diretórios Acadêmicos e Atléticas, garantindo repasse justo, transparente e previsível a essas entidades, com critérios definidos em assembleia e prestação de contas pública.__** Fortalecer quem está na base é fortalecer o DCE, porque nenhuma gestão central chega a todos os cursos sozinha.",
    ],
  },
  {
    slug: "cursinho-intensivo",
    titulo: "**CURSINHO INTENSIVO** PARA ALUNOS DE ENSINO MÉDIO CARENTES",
    imagem: "/recortes/professor.webp",
    tom: "lavanda",
    paragrafos: [
      "A universidade não pode existir de costas para a cidade que a cerca. **__Vamos criar um cursinho preparatório gratuito, voltado a estudantes de ensino médio da rede pública em situação de vulnerabilidade, ministrado por acadêmicos voluntários da própria UNIVALI, em espaços da universidade e em horários ociosos, com foco no ENEM e nos vestibulares e com orientação sobre isenção de taxa, Universidade Gratuita, ProUni e FIES, informação que costuma faltar justamente para quem mais depende dela.__** O ganho é dos dois lados: para o aluno da rede pública, é a chance concreta de disputar uma vaga que hoje parece distante; para o acadêmico voluntário, é experiência docente real e cumprimento de horas de extensão e de contrapartida de bolsa, transformando uma exigência burocrática em trabalho com sentido.",
      "Começaremos como projeto piloto em um campus, com turma reduzida e resultados acompanhados publicamente, em articulação com os cursos de licenciatura, com a Pró-Reitoria de Extensão e com as redes de ensino, para então expandir.",
    ],
  },
  {
    slug: "passarela-segura",
    titulo: "**PASSARELA SEGURA:** TRAVESSIA DA SC-401 (*CAMPUS* FLORIANÓPOLIS)",
    imagem: "/recortes/olhos.webp",
    tom: "claro",
    paragrafos: [
      "A passarela de acesso ao campus é caminho obrigatório para boa parte dos estudantes de Florianópolis, e a insegurança nesse trajeto, sobretudo à noite, é uma queixa recorrente de quem estuda ali. Trata-se de uma estrutura sobre rodovia estadual, o que exige articulação entre a universidade e os órgãos públicos responsáveis, e é exatamente essa articulação que o DCE se propõe a puxar.",
      "**__Nossas propostas para o local são a instalação ou ampliação de câmeras de monitoramento na passarela e nos seus acessos, com avaliação da possibilidade de integração ao sistema de segurança do campus; a melhoria da iluminação em toda a extensão da travessia; a manutenção e conservação da estrutura física; a instalação de botão ou sistema de acionamento de emergência, caso tecnicamente viável; a sinalização adequada nos acessos; e o estudo de medidas específicas de reforço nos horários de maior movimento, especialmente na entrada e na saída do período noturno.__** Vamos protocolar a demanda junto à universidade e aos órgãos competentes e tornar público cada retorno recebido, para que a cobrança não dependa da nossa insistência isolada, e sim do acompanhamento de todos.",
    ],
  },
  {
    slug: "todos-os-campi-sao-sedes",
    titulo: "**TODOS OS CAMPI SÃO SEDES:** ESTRUTURA DIGNA FORA DE ITAJAÍ",
    imagem: "/recortes/univali.webp",
    tom: "lavanda",
    paragrafos: [
      "Não existe estudante de segunda categoria dentro da mesma universidade. Quem estuda em Balneário Camboriú, Biguaçu, Kobrasol, Tijucas, Piçarras ou Florianópolis paga a mesma mensalidade e recebe o mesmo diploma, mas nem sempre encontra a mesma estrutura, e ouve com frequência a mesma resposta: em Itajaí tem. **__Vamos fazer um diagnóstico de infraestrutura em cada campus, com participação dos estudantes e das entidades locais, registrando com foto e localização cada problema de sala, laboratório, biblioteca, internet, convivência e conservação.__**",
      "**__Esse levantamento será entregue formalmente à universidade com pedido de cronograma de solução, e cada resposta recebida será publicada.__** Defenderemos ainda que serviços administrativos sejam resolvidos no próprio campus, sem obrigar ninguém a se deslocar até a sede, e que o investimento em estrutura siga critérios públicos, e não a ordem de tamanho de cada unidade.",
    ],
  },
  {
    slug: "portal-de-transparencia",
    titulo: "**PORTAL DE TRANSPARÊNCIA E PRESTAÇÃO DE CONTAS**",
    imagem: "/recortes/notebook-2.webp",
    tom: "claro",
    textoAzul: true,
    paragrafos: [
      "Defender uma universidade democrática também significa garantir que a comunidade acadêmica tenha acesso claro às informações sobre a utilização de seus recursos. Por isso, **__propomos a criação de um Portal de Transparência da UNIVALI, com informações organizadas, acessíveis e atualizadas.__**",
      "O portal deverá apresentar dados sobre arrecadação com mensalidades, recursos públicos recebidos, investimentos em ensino, pesquisa, extensão, bolsas, infraestrutura e tecnologia, além de contratos, convênios, parcerias e execução orçamentária.",
      "As informações serão disponibilizadas respeitando a legislação, a proteção de dados pessoais e os casos de sigilo previstos em lei. A proposta busca fortalecer a transparência, a responsabilidade e a prestação de contas, permitindo que estudantes e toda a comunidade compreendam melhor quanto a Universidade arrecada, quanto recebe e onde esses recursos são investidos.",
    ],
  },
];

// Propostas das entidades (LAACS e ALA): o rótulo abre o primeiro parágrafo, como no PDF.
export type PropostaEntidade = {
  slug: string;
  rotulo: string;
  paragrafos: string[];
  imagem?: string;
  grupo?: string;
};

export const tituloPropostasLaacs = "NOSSAS **PROPOSTAS** PARA O FUTURO DA **LAACS**";

export const propostasLaacs: PropostaEntidade[] = [
  {
    slug: "reconhecimento-das-atleticas",
    rotulo: "RECONHECIMENTO INSTITUCIONAL DAS ATLÉTICAS E HORAS DE EXTENSÃO PARA MEMBROS DAS MESMAS:",
    imagem: "/recortes/laacs.webp",
    paragrafos: [
      "As Atléticas desempenham um papel fundamental na vida universitária, promovendo integração, organização estudantil, práticas esportivas, eventos, ações sociais e atividades de representação acadêmica. Apesar da relevância desse trabalho, muitas das atividades desenvolvidas por seus membros ainda não possuem reconhecimento institucional perante as coordenações de seu próprio curso.",
      "Defendemos a construção, junto à Reitoria e aos órgãos competentes da Universidade, de um processo de **reconhecimento formal das Atléticas da UNIVALI**, assegurando legitimidade institucional às suas ações e fortalecendo seu papel dentro da comunidade acadêmica, além disso, lutaremos pelo **reconhecimento das atividades de gestão, organização, planejamento de eventos, representação estudantil e ações comunitárias realizadas nas Atléticas como atividades complementares e de extensão**, possibilitando o aproveitamento de horas acadêmicas.",
    ],
  },
  {
    slug: "sala-de-atendimento-ao-atleta",
    rotulo: "SALA DE ATENDIMENTO E SUPORTE AO ATLETA NAS COMPETIÇÕES:",
    imagem: "/recortes/corredora.webp",
    paragrafos: [
      "As competições esportivas universitárias exigem não apenas organização e estrutura adequada, mas também condições que garantam segurança, cuidado e bem-estar aos atletas participantes. A prática esportiva, especialmente em eventos de maior porte, demanda suporte técnico e atendimento imediato em casos de lesões, intercorrências ou necessidades de acompanhamento preventivo. Propomos a destinação de uma das salas multiuso do ginásio para funcionar como **espaço de atendimento fisioterapêutico, e suporte médico durante as competições promovidas pela LAACS nas dependências da UNIVALI**. A iniciativa permitirá, ainda, a participação voluntária e supervisionada de estudantes dos cursos da área da saúde, como Enfermagem, Fisioterapia e Medicina, possibilitando a geração de horas complementares aos acadêmicos envolvidos.",
    ],
  },
  {
    slug: "cursos-de-arbitragem",
    rotulo: "CURSOS DE CAPACITAÇÃO DE ARBITRAGEM:",
    imagem: "/recortes/relogio.webp",
    paragrafos: [
      "A arbitragem é elemento essencial para o desenvolvimento do esporte universitário, mas a formação de novos árbitros ainda é pouco acessível para muitos estudantes, seja pelo custo dos cursos, seja pela ausência de polos de formação próximos aos campi. Em diálogo com a **ECAMM e outras escolas de arbitragem esportiva de Santa Catarina**, buscaremos estabelecer parcerias que possibilitem **descontos exclusivos para estudantes da UNIVALI, por meio do DCE, em cursos de formação nas modalidades de futebol, futsal, voleibol, basquetebol e handebol**. Também propomos a criação de polos de apoio dentro dos campi da Universidade para a realização das etapas teóricas dos cursos, ampliando o acesso dos estudantes à formação técnica e contribuindo para o fortalecimento da formação pessoal do profissional.",
    ],
  },
  {
    slug: "praticas-coletivas",
    rotulo: "PRÁTICAS COLETIVAS AMPLIADAS + AÇÕES NA COMUNIDADE:",
    imagem: "/recortes/mao-aberta.webp",
    paragrafos: [
      "A Universidade deve estar em diálogo permanente com a comunidade e proporcionar espaços de convivência, cultura e esporte que ultrapassem os limites da sala de aula. Por isso, defendemos a ampliação das práticas coletivas e das ações extensionistas, promovendo **oficinas, projetos e atividades periódicas que integrem estudantes e a comunidade por meio do esporte, da arte, da dança e de outras expressões culturais**. A proposta inclui a realização de oficinas mensais nos campi e em comunidades parceiras, envolvendo modalidades esportivas, práticas artísticas, atividades recreativas e ações de promoção da saúde e do bem-estar. Mais do que ampliar a oferta de atividades, queremos fortalecer o papel social da Universidade, aproximando os estudantes da realidade da comunidade e criando espaços de formação humana, cidadania e convivência coletiva.",
    ],
  },
  {
    slug: "grupo-de-danca-e-teatro",
    rotulo: "DIVULGAÇÃO E INTEGRAÇÃO DO GRUPO DE DANÇA UNIVALI E DO GRUPO DE TEATRO UNIVALI:",
    imagem: "/recortes/danca.webp",
    paragrafos: [
      "A vida universitária é construída pela integração entre diferentes formas de expressão estudantil. Esporte, arte e cultura não devem ser compreendidos como áreas isoladas, mas como dimensões complementares da formação acadêmica. Propomos ampliar a divulgação e o reconhecimento institucional do **Grupo de Dança UNIVALI e do Grupo de Teatro UNIVALI**, incentivando sua participação em eventos esportivos, acadêmicos e culturais promovidos pela Universidade. Defendemos, em especial, a presença do Grupo de Dança em cerimônias de abertura e encerramento de eventos esportivos, como a COPA LAACS, bem como o fortalecimento da divulgação das apresentações realizadas pelos grupos artísticos. A iniciativa busca promover maior integração entre esporte, cultura e arte, valorizando os talentos estudantis e contribuindo para uma Universidade mais diversa, participativa e culturalmente viva.",
    ],
  },
];

export const tituloPropostasAla = "NOSSAS PROPOSTAS\nPARA O FUTURO DA **ALA**";
export const grupoCiencia = "**CIÊNCIA NÃO É PRIVILÉGIO:**\nBOLSAS, PESQUISA E INOVAÇÃO";

export const propostasAla: PropostaEntidade[] = [
  {
    slug: "regulamento-geral-das-ligas",
    rotulo: "REGULAMENTO GERAL DAS LIGAS ACADÊMICAS DA UNIVALI:",
    imagem: "/recortes/lampada.webp",
    paragrafos: [
      "Construir, junto à Universidade, um Regulamento Geral das Ligas Acadêmicas da UNIVALI, estabelecendo critérios claros e uniformes para a criação, reconhecimento, renovação, funcionamento, certificação e encerramento das Ligas Acadêmicas em todos os cursos e campi, ressalvado as especificidades de cada curso e campi. A proposta busca superar a ausência de uma regulamentação institucional única, garantindo segurança, transparência e reconhecimento acadêmico às atividades desenvolvidas pelos estudantes. O regulamento deverá definir direitos e deveres, requisitos mínimos de funcionamento, formas de organização, critérios para emissão de certificados, prestação de atividades e mecanismos de acompanhamento de suas atividades. Mais do que estabelecer regras, a iniciativa pretende reconhecer institucionalmente as Ligas Acadêmicas como espaços de ensino, pesquisa, extensão e formação complementar, assegurando que o trabalho voluntário e acadêmico desenvolvido pelos estudantes tenha respaldo formal e possa ser realizado com maior organização, continuidade e legitimidade dentro da UNIVALI.",
    ],
  },
  {
    slug: "fundo-de-fomento-a-pesquisa",
    rotulo: "FUNDO DE FOMENTO À PESQUISA ESTUDANTIL:",
    imagem: "/recortes/mao-escrevendo.webp",
    paragrafos: [
      "Sabemos que nem todas as Ligas Acadêmicas e estudantes possuem as mesmas condições socioeconômicas para participar de congressos, publicar trabalhos ou desenvolver projetos de extensão. Muitas vezes, uma taxa de inscrição, um deslocamento ou o custo de publicação é suficiente para impedir que uma pesquisa seja apresentada ou que uma iniciativa estudantil saia do papel. A universidade não pode permitir que o acesso à pesquisa, à extensão e às oportunidades acadêmicas seja determinado pela capacidade financeira de cada estudante.",
      "Por isso, defendemos a constituição de um fundo que possa contar com subsídios institucionais da própria UNIVALI, recursos de empresas parceiras, institutos de pesquisa, fundações, entidades de promoção à ciência e à cultura e outras fontes de financiamento, ampliando sua capacidade de atendimento e reduzindo a dependência exclusiva do orçamento universitário.",
      "Os recursos poderão ser destinados, mediante critérios públicos e transparentes, a despesas como: inscrição em congressos e eventos científicos; publicação de artigos científicos; aquisição de materiais para pesquisa; deslocamento para apresentação de trabalhos e outros. Nosso objetivo é democratizar o acesso à Universidade em sua plenitude: não apenas às aulas, mas também à pesquisa, à extensão, à produção científica, à cultura e a todas as oportunidades que a formação universitária pode proporcionar. Queremos que talento, dedicação e qualidade de um projeto sejam mais importantes do que a condição financeira de quem o desenvolve.",
    ],
  },
  {
    slug: "diversificacao-das-horas-complementares",
    rotulo: "LUTA PELA DIVERSIFICAÇÃO DA OBTENÇÃO DAS HORAS COMPLEMENTARES:",
    imagem: "/recortes/relogio.webp",
    paragrafos: [
      "Sabemos que grande parte dos estudantes da UNIVALI é formada pelo **estudante-trabalhador**, que precisa conciliar universidade, trabalho, estágio, família e outras responsabilidades. Para esse estudante, permanecer durante horas em atividades de voluntariado, muitas vezes repetitivas, morosas e pouco relacionadas à sua formação, pode representar mais um obstáculo em uma rotina que já é extremamente pesada. Não somos contra o voluntariado — **pelo contrário, reconhecemos sua importância para a formação acadêmica e para a comunidade**. O que defendemos é que ele não seja, na prática, a única ou uma das principais portas de acesso à integralização das horas complementares e de extensão. Por isso, lutaremos pela **diversificação das formas de obtenção e aproveitamento dessas horas**, buscando junto à Universidade o reconhecimento de diferentes atividades acadêmicas, profissionais, científicas, culturais e sociais desenvolvidas pelos estudantes.",
    ],
  },
  {
    slug: "projetos-de-extensao-e-monitoria",
    rotulo: "AMPLIAÇÃO DOS PROJETOS DE EXTENSÃO E DE MONITORIA:",
    imagem: "/recortes/computador.webp",
    paragrafos: [
      "Falar em ampliar projetos de extensão e monitorias é falar, também, sobre financiamento universitário para a produção de conhecimento e para as atividades desenvolvidas pelos estudantes. Defenderemos a ampliação da oferta de projetos de extensão, monitorias e oportunidades de iniciação científica, especialmente aquelas que contam com bolsas e outros mecanismos de apoio institucional. Queremos que mais estudantes tenham a possibilidade de transformar suas ideias em projetos concretos, participar da produção científica e atuar diretamente em atividades de impacto social.",
      "Para isso, precisamos **ampliar o diálogo com a Coordenação de Bolsas e com a Reitoria**, buscando realizar um verdadeiro mapeamento institucional dos projetos, programas, bolsas e oportunidades atualmente existentes na UNIVALI. A partir desse diagnóstico, será possível identificar áreas subatendidas, projetos com potencial de expansão e demandas dos diferentes cursos e campi. Nossa atuação será pela **ampliação do número de projetos, bolsas e vagas disponíveis**, buscando também diversificar as áreas contempladas e facilitar o acesso dos estudantes às oportunidades existentes.",
    ],
  },
  {
    slug: "banco-publico-de-producoes",
    rotulo: "BANCO PÚBLICO DE PRODUÇÕES ACADÊMICAS PARA INTEGRALIZAÇÃO DE HORAS:",
    imagem: "/recortes/livros.webp",
    paragrafos: [
      "**Propor que estudantes possam disponibilizar fichamentos, pesquisas, resumos, trabalhos e outros materiais acadêmicos produzidos ao longo da graduação em um repositório público institucional, com possibilidade de aproveitamento dessas produções para a integralização de horas de extensão e atividades complementares.**",
      "A Universidade produz conhecimento diariamente, mas uma parcela significativa dessa produção permanece restrita ao estudante, à sala de aula ou ao professor que realizou a avaliação. **Se esse conhecimento pode ser organizado, compartilhado e colocado à disposição de outros estudantes e da comunidade no geral, ele também pode cumprir uma função social.**",
      "Defendemos, portanto, a criação de uma **pasta ou repositório público de produções acadêmicas estudantis**, organizado por curso, disciplina e área temática, permitindo que outros acadêmicos possam consultar materiais de estudo, pesquisas e conteúdos produzidos por seus colegas.",
      "A proposta parte de uma concepção simples: **hora de extensão não deve significar apenas estar fisicamente presente em uma atividade ou evento. É também colocar aquilo que se produz na Universidade a serviço de outras pessoas.** Um fichamento bem elaborado pode auxiliar outro estudante; uma pesquisa pode servir de ponto de partida para um novo trabalho; um material produzido em sala pode democratizar o acesso ao conhecimento.",
    ],
  },
  {
    slug: "ampliacao-do-pibic",
    rotulo: "PELA AMPLIAÇÃO DO PIBIC - MAIS BOLSAS DE INICIAÇÃO CIENTÍFICA E TECNOLÓGICA:",
    imagem: "/recortes/lampada.webp",
    grupo: grupoCiencia,
    paragrafos: [
      "O PIBIC é uma das principais — senão a principal — política federal de bolsas de pesquisa destinada diretamente à graduação. Por isso, defender a ciência também significa lutar para que mais estudantes tenham acesso a ela. A ALA e o DCE irão articular-se com o CNPq, MCTI, CAPES e parlamentares federais para reivindicar a ampliação do número de bolsas PIBIC, PIBITI e PIBIC-Af destinadas à UNIVALI. Não basta defender o reajuste do valor das bolsas: é preciso aumentar o número de estudantes contemplados, democratizando o acesso à iniciação científica e tecnológica.",
    ],
  },
  {
    slug: "iniciacao-cientifica-com-acoes-afirmativas",
    rotulo: "PROGRAMA DE INICIAÇÃO CIENTÍFICA COM AÇÕES AFIRMATIVAS:",
    imagem: "/recortes/interrogacao.webp",
    grupo: grupoCiencia,
    paragrafos: [
      "A desigualdade de acesso à pesquisa não começa na seleção de uma bolsa. Muitos estudantes deixam de participar porque precisam trabalhar, não conhecem os grupos de pesquisa, não possuem orientação sobre a elaboração de projetos ou não conseguem arcar com os custos indiretos da atividade científica. Por isso, defendemos a criação e ampliação de uma política de Iniciação Científica com Ações Afirmativas, destinada prioritariamente a estudantes em situação de vulnerabilidade socioeconômica, oriundos de escolas públicas, com deficiência e integrantes de outros grupos sub-representados na produção científica.",
    ],
  },
  {
    slug: "mostra-anual-de-ciencia",
    rotulo: "MOSTRA ANUAL DE CIÊNCIA, EXTENSÃO, INOVAÇÃO E LIGAS ACADÊMICAS:",
    imagem: "/recortes/baloes.webp",
    grupo: grupoCiencia,
    paragrafos: [
      "Propomos a realização de uma Mostra Anual de Ciência, Extensão, Inovação e Ligas Acadêmicas da UNIVALI, reunindo projetos desenvolvidos em todos os cursos e campi. A Mostra deverá permitir: apresentação de pesquisas; exposição de projetos de extensão; demonstração de protótipos e soluções tecnológicas; integração entre Ligas; divulgação de oportunidades; aproximação com escolas e comunidades. O evento também deverá funcionar como espaço de prestação de contas do Fundo de Fomento, apresentação dos dados do Observatório de Bolsas e diálogo entre estudantes, Universidade, FAPESC, CNPq, municípios e parlamentares. Queremos tornar visível aquilo que os estudantes já produzem e criar novas oportunidades para que a ciência desenvolvida dentro da UNIVALI gere impacto social fora dela.",
    ],
  },
];
