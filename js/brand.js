/* ============================================================
   brand.js — R&L SOLUTIONS
   Este e o site institucional da propria R&L. Mesma engenharia
   dos modelos white label: todo o conteudo vive aqui.
   ============================================================ */

window.BRAND = {

  nome: 'R&L Solutions',
  sigla: 'RL',
  tagline: 'Software, qualidade e automacao para quem nao pode errar em producao',

  seo: {
    titulo: 'R&L Solutions — Software, engenharia de qualidade e automacao com IA',
    descricao: 'Desenvolvimento de software e sites, engenharia de qualidade, testes automatizados, agentes de IA, hospedagem, dominios de e-mail e impressao 3D. Fale no WhatsApp.'
  },

  tema: {
    'brand':        '#3b3474',
    'primary':      '#6f63e8',
    'primary-hover':'#8b82ff',
    'accent':       '#35d6c0'
  },

  contato: {
    whatsapp: '+55 11 99498-3021',
    whatsappLabel: '(11) 99498-3021',
    telefone: '+55 11 99498-3021',
    telefoneLabel: '(11) 99498-3021',
    email: '',
    endereco: '',
    atendimento: 'Atendimento remoto para todo o Brasil',
    mensagemWhatsapp: 'Ola! Vim pelo site da R&L Solutions e gostaria de conversar sobre um projeto.',
    tituloMensagem: 'Novo contato pelo site da R&L Solutions'
  },

  redes: [],

  hero: {
    badge: 'Disponivel para novos projetos',
    tituloHtml: 'Engenharia que <em>segura o peso</em> de producao',
    subtitulo: 'A R&L Solutions constroi software, testa o que constroi e automatiza o que se repete. Oito frentes tecnicas, um unico interlocutor — sem repassar seu problema para outro setor.',
    ctaPrimario: 'Falar no WhatsApp',
    ctaSecundario: 'Ver o que fazemos',
    esteira: [
      'Playwright', 'Cypress', 'Selenium', 'CI/CD', 'React', 'Next.js', 'Node.js',
      'Kotlin', 'Python', 'TypeScript', 'Agentes de IA', 'API REST', 'Docker',
      'GitHub Actions', 'Testes de regressao', 'DNS & e-mail', 'Hospedagem', 'Impressao 3D'
    ]
  },

  servicos: {
    eyebrow: 'Areas de atuacao',
    titulo: 'Oito frentes, uma engenharia so',
    subtitulo: 'Do codigo que entra em producao ao dominio que faz o e-mail chegar — e a peca 3D que voce precisava para ontem.',
    itens: [
      {
        porte: 'lg', icone: 'code',
        titulo: 'Desenvolvimento de software',
        texto: 'Sistemas web, APIs e integracoes construidos para durar: codigo revisado, cobertura de teste real e deploy que nao depende de ninguem estar acordado.',
        tags: ['React & Next.js', 'Node.js', 'Kotlin', 'Python', 'API REST']
      },
      {
        porte: 'lg', icone: 'shield',
        titulo: 'Engenharia de qualidade',
        texto: 'Estrategia de QA antes do primeiro bug: criterio de aceite, pirâmide de testes, metricas de escape e revisao de processo. Qualidade como disciplina, nao como etapa final.',
        tags: ['Shift-left', 'Criterios de aceite', 'Metricas', 'Code review']
      },
      {
        porte: 'md', icone: 'robot',
        titulo: 'Testes automatizados',
        texto: 'Suites de regressao que rodam no pipeline e falham por motivo real, nao por instabilidade.',
        tags: ['Playwright', 'Cypress', 'CI/CD']
      },
      {
        porte: 'md', icone: 'spark',
        titulo: 'Agentes de IA e automacoes',
        texto: 'Agentes que executam rotina chata de ponta a ponta e se integram ao que voce ja usa.',
        tags: ['Agentes', 'Integracoes', 'RPA']
      },
      {
        porte: 'md', icone: 'browser',
        titulo: 'Sites e landing pages',
        texto: 'Site rapido, indexavel e facil de editar. Sem construtor pesado e sem mensalidade de plataforma.',
        tags: ['SEO tecnico', 'Performance', 'Responsivo']
      },
      {
        porte: 'md', icone: 'server',
        titulo: 'Hospedagem de sites',
        texto: 'Publicacao, certificado SSL, backup e monitoramento de disponibilidade. Voce so olha quando quer.',
        tags: ['SSL', 'Backup', 'Uptime']
      },
      {
        porte: 'md', icone: 'mail',
        titulo: 'Dominios e e-mail corporativo',
        texto: 'Registro de dominio, DNS configurado certo e e-mail no seu dominio que nao cai em spam.',
        tags: ['DNS', 'SPF & DKIM', 'E-mail pro']
      },
      {
        porte: 'md', icone: 'cube',
        titulo: 'Impressao 3D',
        texto: 'Prototipagem rapida e pecas sob medida, do desenho tecnico ao objeto na sua mao.',
        tags: ['Prototipo', 'Peca sob medida', 'FDM']
      }
    ]
  },

  processo: {
    eyebrow: 'Como trabalhamos',
    titulo: 'Sem proposta de 40 paginas para comecar',
    subtitulo: 'O ciclo e curto de proposito: voce ve resultado antes de assinar contrato longo.',
    itens: [
      { titulo: 'Conversa de diagnostico', texto: 'Trinta minutos no WhatsApp ou em call para entender o problema real, nao a solucao que voce ja imaginou.' },
      { titulo: 'Escopo e preco por escrito', texto: 'Voce recebe o que sera entregue, em quanto tempo e por quanto. Sem letra miuda e sem hora extra surpresa.' },
      { titulo: 'Entrega em ciclos curtos', texto: 'Voce ve funcionando a cada etapa e pode redirecionar. Nada de sumir por dois meses e voltar com algo errado.' },
      { titulo: 'Entrega com documentacao', texto: 'Codigo, acessos e um documento de como manter. Se quiser trocar de fornecedor depois, voce consegue.' }
    ]
  },

  stack: {
    eyebrow: 'Stack',
    titulo: 'Ferramentas que usamos todo dia',
    itens: [
      { sigla: 'PW', nome: 'Playwright' },
      { sigla: 'TS', nome: 'TypeScript' },
      { sigla: 'RN', nome: 'React' },
      { sigla: 'NX', nome: 'Next.js' },
      { sigla: 'PY', nome: 'Python' },
      { sigla: 'KT', nome: 'Kotlin' },
      { sigla: 'DK', nome: 'Docker' },
      { sigla: 'GH', nome: 'GitHub Actions' },
      { sigla: 'AI', nome: 'Agentes de IA' },
      { sigla: 'PG', nome: 'PostgreSQL' },
      { sigla: 'CY', nome: 'Cypress' },
      { sigla: '3D', nome: 'Impressao 3D' }
    ]
  },

  portfolio: {
    eyebrow: 'Trabalhos',
    titulo: 'Modelos que ja estao no ar',
    subtitulo: 'Quatro sites de vertical diferente, construidos sobre o mesmo motor: trocar de cliente e trocar um arquivo de configuracao.',
    itens: [
      { kind: 'Saude animal',  nome: 'Clinica veterinaria', texto: 'Agendamento por WhatsApp, plantao 24h e equipe com CRMV.', foto: 'assets/portfolio/vet.png', url: '#contato' },
      { kind: 'Saude',         nome: 'Clinica medica',      texto: 'Doze especialidades, convenios e agendamento em 30 segundos.', foto: 'assets/portfolio/clinica.png', url: '#contato' },
      { kind: 'Imobiliario',   nome: 'Imobiliaria boutique', texto: 'Portfolio curado, busca por bairro e avaliacao gratuita.', foto: 'assets/portfolio/imobiliaria.png', url: '#contato' },
      { kind: 'Logistica',     nome: 'Transportadora',      texto: 'Painel de rastreio, tabela de prazo por destino e cotacao.', foto: 'assets/portfolio/transportadora.png', url: '#contato' }
    ]
  },

  numeros: [
    { valor: '8',    label: 'frentes tecnicas' },
    { valor: '100%', label: 'atendimento direto, sem intermediario' },
    { valor: '24h',  label: 'para responder um orcamento' },
    { valor: 'BR',   label: 'atendimento remoto em todo o pais' }
  ],

  faixaFinal: {
    titulo: 'Vamos falar do seu projeto',
    texto: 'Manda a ideia no WhatsApp, mesmo que ainda esteja mal formada. A primeira conversa e para entender o problema — e ela nao custa nada.',
    cta: 'Chamar no WhatsApp'
  },

  faq: {
    eyebrow: 'Duvidas',
    titulo: 'O que perguntam antes de fechar',
    itens: [
      { p: 'Voces atendem fora de Sao Paulo?', r: 'Atendemos. O trabalho e remoto e cobre o Brasil inteiro. Reunioes por call, entregas por repositorio e acompanhamento por WhatsApp.' },
      { p: 'Qual o prazo para receber um orcamento?', r: 'Ate 24 horas depois da conversa de diagnostico, com escopo, prazo e valor por escrito.' },
      { p: 'Trabalham com projeto fechado ou por hora?', r: 'Os dois. Escopo bem definido sai como projeto fechado; evolucao continua e sustentacao saem como pacote mensal de horas.' },
      { p: 'O codigo fica comigo?', r: 'Fica. O repositorio e seu desde o primeiro commit, junto com acessos e documentacao de manutencao. Nao prendemos cliente por dependencia tecnica.' },
      { p: 'Ja tenho um sistema pronto. Voces assumem?', r: 'Assumimos. Comecamos por um diagnostico do que existe — divida tecnica, cobertura de teste e riscos — antes de propor qualquer mudanca.' },
      { p: 'Como funciona a parte de dominio e hospedagem?', r: 'Registramos o dominio no seu nome, configuramos DNS, SSL e e-mail corporativo, e publicamos o site. A titularidade e sempre sua.' },
      { p: 'A impressao 3D e para que tipo de peca?', r: 'Prototipos, pecas de reposicao e itens sob medida em FDM. Envie o desenho ou descreva a peca pelo WhatsApp que avaliamos a viabilidade.' }
    ]
  },

  contatoSecao: {
    eyebrow: 'Contato',
    titulo: 'Conta o que voce precisa',
    subtitulo: 'Responda em um minuto. A mensagem cai direto no WhatsApp da R&L, ja formatada.'
  },

  rodape: {
    sobre: 'Software, engenharia de qualidade, automacao com IA, infraestrutura web e impressao 3D. Atendimento direto com quem executa.',
    aviso: 'Atendimento remoto para todo o Brasil.'
  }
};
