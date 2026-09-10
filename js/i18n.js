/* ============================================================
   i18n.js — TEXTOS POR IDIOMA
   ------------------------------------------------------------
   Um bloco por idioma. A estrutura é idêntica nos três: o que
   estiver aqui sobrescreve js/brand.js, posição a posição nas
   listas — por isso a ORDEM dos itens precisa bater.

   Para adicionar um idioma, copie o bloco 'en', traduza e use a
   sigla ISO como chave. O botão aparece sozinho no cabeçalho se
   você adicionar <button data-lang-btn="xx"> no index.html.
   ============================================================ */

window.I18N = {

  /* ==========================================================
     PORTUGUÊS
     ========================================================== */
  pt: {
    meta: { htmlLang: 'pt-BR' },
    tagline: 'Software, qualidade e automação para quem não pode errar em produção',

    seo: {
      titulo: 'R&L Solutions — Software, engenharia de qualidade e automação com IA',
      descricao: 'Desenvolvimento de software e sites, engenharia de qualidade, testes automatizados, agentes de IA, hospedagem, domínios de e-mail e impressão 3D. Fale no WhatsApp.'
    },

    ui: {
      pularConteudo: 'Pular para o conteúdo',
      abrirMenu: 'Abrir menu',
      fecharMenu: 'Fechar menu',
      temaClaro: 'Ativar tema claro',
      temaEscuro: 'Ativar tema escuro',
      idioma: 'Idioma',
      erros: {
        obrigatorio: 'Preencha este campo para continuar.',
        telefone: 'Informe DDD e número, ex.: (11) 99999-0000.',
        email: 'Confira o e-mail, ex.: nome@dominio.com.br.',
        revisar: 'Confira os campos destacados abaixo.',
        enviadoWhatsapp: 'Abrimos o WhatsApp com sua mensagem pronta. É só enviar.',
        enviadoEmail: 'Abrimos seu e-mail com a mensagem pronta.'
      }
    },

    nav: {
      servicos: 'Serviços',
      processo: 'Como trabalhamos',
      trabalhos: 'Trabalhos',
      faq: 'Dúvidas',
      cta: 'Falar no WhatsApp'
    },

    contato: {
      atendimento: 'Atendimento remoto para todo o Brasil',
      mensagemWhatsapp: 'Olá! Vim pelo site da R&L Solutions e gostaria de conversar sobre um projeto.',
      tituloMensagem: 'Novo contato pelo site da R&L Solutions'
    },

    hero: {
      badge: 'Disponível para novos projetos',
      tituloHtml: 'Engenharia que <em>aguenta produção</em>',
      subtitulo: 'A R&L Solutions constrói software, testa o que constrói e automatiza o que se repete. São oito frentes técnicas com um único interlocutor — sem repassar o seu problema para outro setor.',
      ctaPrimario: 'Falar no WhatsApp',
      ctaSecundario: 'Ver o que fazemos',
      esteira: [
        'Playwright', 'Cypress', 'Selenium', 'CI/CD', 'React', 'Next.js', 'Node.js',
        'Kotlin', 'Python', 'TypeScript', 'Agentes de IA', 'API REST', 'Docker',
        'GitHub Actions', 'Testes de regressão', 'DNS e e-mail', 'Hospedagem', 'Impressão 3D'
      ]
    },

    servicos: {
      eyebrow: 'Áreas de atuação',
      titulo: 'Oito frentes, uma engenharia só',
      subtitulo: 'Do código que entra em produção ao domínio que faz o e-mail chegar — e à peça 3D que você precisava para ontem.',
      itens: [
        {
          titulo: 'Desenvolvimento de software',
          texto: 'Sistemas web, APIs e integrações construídos para durar: código revisado, cobertura de testes de verdade e publicação que não depende de alguém estar acordado.',
          tags: ['React e Next.js', 'Node.js', 'Kotlin']
        },
        {
          titulo: 'Engenharia de qualidade',
          texto: 'Estratégia de QA antes do primeiro defeito: critérios de aceite, pirâmide de testes, métricas de escape e revisão de processo. Qualidade como disciplina, não como etapa final.',
          tags: ['Shift-left', 'Critérios de aceite', 'Métricas']
        },
        {
          titulo: 'Testes automatizados',
          texto: 'Suítes de regressão que rodam na esteira e falham por motivo real, não por instabilidade.',
          tags: ['Playwright', 'Cypress', 'CI/CD']
        },
        {
          titulo: 'Agentes de IA e automações',
          texto: 'Agentes que executam a rotina repetitiva de ponta a ponta e conversam com as ferramentas que você já usa.',
          tags: ['Agentes', 'Integrações', 'RPA']
        },
        {
          titulo: 'Sites e landing pages',
          texto: 'Site rápido, indexável e fácil de editar. Sem construtor pesado e sem mensalidade de plataforma.',
          tags: ['SEO técnico', 'Performance', 'Responsivo']
        },
        {
          titulo: 'Hospedagem de sites',
          texto: 'Publicação, certificado SSL, backup e monitoramento de disponibilidade. Você só olha quando quiser.',
          tags: ['SSL', 'Backup', 'Disponibilidade']
        },
        {
          titulo: 'Domínios e e-mail corporativo',
          texto: 'Registro de domínio, DNS configurado corretamente e e-mail no seu domínio que não cai em spam.',
          tags: ['DNS', 'SPF e DKIM', 'E-mail profissional']
        },
        {
          titulo: 'Impressão 3D',
          texto: 'Prototipagem rápida e peças sob medida, do desenho técnico ao objeto na sua mão.',
          tags: ['Protótipo', 'Peça sob medida', 'FDM']
        }
      ]
    },

    processo: {
      eyebrow: 'Como trabalhamos',
      titulo: 'Sem proposta de quarenta páginas para começar',
      subtitulo: 'O ciclo é curto de propósito: você vê resultado antes de assinar contrato longo.',
      itens: [
        { titulo: 'Conversa de diagnóstico', texto: 'Trinta minutos no WhatsApp ou em chamada para entender o problema real, e não a solução que você já imaginou.' },
        { titulo: 'Escopo e preço por escrito', texto: 'Você recebe o que será entregue, em quanto tempo e por quanto. Sem letra miúda e sem hora extra surpresa.' },
        { titulo: 'Entrega em ciclos curtos', texto: 'Você vê funcionando a cada etapa e pode mudar a direção. Nada de sumir por dois meses e voltar com a coisa errada.' },
        { titulo: 'Entrega com documentação', texto: 'Código, acessos e um documento de como manter. Se quiser trocar de fornecedor depois, você consegue.' }
      ]
    },

    stack: {
      eyebrow: 'Ferramentas',
      titulo: 'O que usamos todo dia',
      itens: [
        { sigla: 'PW', nome: 'Playwright' },
        { sigla: 'TS', nome: 'TypeScript' },
        { sigla: 'RN', nome: 'React' },
        { sigla: 'NX', nome: 'Next.js' },
        { sigla: 'PY', nome: 'Python' },
        { sigla: 'KT', nome: 'Kotlin' },
        { sigla: 'DK', nome: 'Docker' },
        { sigla: 'GH', nome: 'GitHub Actions' },
        { sigla: 'IA', nome: 'Agentes de IA' },
        { sigla: 'PG', nome: 'PostgreSQL' },
        { sigla: 'CY', nome: 'Cypress' },
        { sigla: '3D', nome: 'Impressão 3D' }
      ]
    },

    portfolio: {
      eyebrow: 'Trabalhos',
      titulo: 'Modelos que já estão no ar',
      subtitulo: 'Quatro sites de setores diferentes, construídos sobre o mesmo motor: trocar de cliente é trocar um arquivo de configuração.',
      itens: [
        { kind: 'Saúde animal', nome: 'Clínica veterinária',  texto: 'Agendamento por WhatsApp, plantão 24 horas e equipe com CRMV.' },
        { kind: 'Saúde',        nome: 'Clínica médica',       texto: 'Doze especialidades, convênios e agendamento em trinta segundos.' },
        { kind: 'Imobiliário',  nome: 'Imobiliária boutique', texto: 'Portfólio curado, busca por bairro e avaliação gratuita.' },
        { kind: 'Logística',    nome: 'Transportadora',       texto: 'Painel de rastreio, tabela de prazo por destino e cotação.' }
      ]
    },

    numeros: [
      { valor: '8',    label: 'frentes técnicas' },
      { valor: '100%', label: 'atendimento direto, sem intermediário' },
      { valor: '24h',  label: 'para responder a um orçamento' },
      { valor: 'BR',   label: 'atendimento remoto em todo o país' }
    ],

    faixaFinal: {
      titulo: 'Vamos falar do seu projeto',
      texto: 'Mande a ideia no WhatsApp, mesmo que ainda esteja mal formada. A primeira conversa serve para entender o problema — e ela não custa nada.',
      cta: 'Chamar no WhatsApp'
    },

    faq: {
      eyebrow: 'Dúvidas',
      titulo: 'O que perguntam antes de fechar',
      itens: [
        { p: 'Vocês atendem fora de São Paulo?', r: 'Atendemos. O trabalho é remoto e cobre o Brasil inteiro: reuniões por chamada, entregas por repositório e acompanhamento pelo WhatsApp.' },
        { p: 'Qual é o prazo para receber um orçamento?', r: 'Até 24 horas depois da conversa de diagnóstico, com escopo, prazo e valor por escrito.' },
        { p: 'Trabalham com projeto fechado ou por hora?', r: 'Com os dois. Escopo bem definido sai como projeto fechado; evolução contínua e sustentação saem como pacote mensal de horas.' },
        { p: 'O código fica comigo?', r: 'Fica. O repositório é seu desde o primeiro commit, junto com os acessos e a documentação de manutenção. Não prendemos cliente por dependência técnica.' },
        { p: 'Já tenho um sistema pronto. Vocês assumem?', r: 'Assumimos. Começamos por um diagnóstico do que existe — dívida técnica, cobertura de testes e riscos — antes de propor qualquer mudança.' },
        { p: 'Como funciona a parte de domínio e hospedagem?', r: 'Registramos o domínio no seu nome, configuramos DNS, SSL e e-mail corporativo, e publicamos o site. A titularidade é sempre sua.' },
        { p: 'A impressão 3D serve para que tipo de peça?', r: 'Protótipos, peças de reposição e itens sob medida em FDM. Envie o desenho ou descreva a peça pelo WhatsApp que avaliamos a viabilidade.' }
      ]
    },

    contatoSecao: {
      eyebrow: 'Contato',
      titulo: 'Conte o que você precisa',
      subtitulo: 'Responda em um minuto. A mensagem cai direto no WhatsApp da R&L, já formatada.',
      chaves: { whatsapp: 'WhatsApp', ligacao: 'Ligação', cobertura: 'Cobertura' },
      form: {
        nome: 'Seu nome',
        nomeHint: 'Ex.: Maria Silva…',
        whats: 'WhatsApp',
        whatsHint: 'Ex.: (11) 99999-0000',
        empresa: 'Empresa',
        empresaHint: 'Opcional',
        area: 'O que você precisa',
        mensagem: 'Conte o contexto',
        mensagemHint: 'Ex.: tenho um sistema em produção com defeito recorrente e nenhum teste automatizado…',
        enviar: 'Enviar pelo WhatsApp',
        nota: 'Abrimos o WhatsApp com a sua mensagem já escrita. Nenhum dado fica salvo no site.',
        areas: [
          'Desenvolvimento de software', 'Site ou landing page', 'Engenharia de qualidade',
          'Testes automatizados', 'Agentes de IA e automações', 'Hospedagem de site',
          'Domínio e e-mail corporativo', 'Impressão 3D', 'Ainda não sei, quero conversar'
        ]
      }
    },

    rodape: {
      sobre: 'Software, engenharia de qualidade, automação com IA, infraestrutura web e impressão 3D. Atendimento direto com quem executa.',
      aviso: 'Atendimento remoto para todo o Brasil.',
      colServicos: 'Serviços',
      colEmpresa: 'Empresa',
      colContato: 'Contato',
      links: {
        desenvolvimento: 'Desenvolvimento',
        qualidade: 'Engenharia de qualidade',
        ia: 'Agentes de IA',
        infra: 'Hospedagem e domínios',
        tresD: 'Impressão 3D',
        processo: 'Como trabalhamos',
        trabalhos: 'Trabalhos',
        faq: 'Dúvidas',
        contato: 'Contato'
      },
      direitos: 'Todos os direitos reservados.'
    }
  },

  /* ==========================================================
     ENGLISH
     ========================================================== */
  en: {
    meta: { htmlLang: 'en' },
    tagline: 'Software, quality and automation for teams that cannot fail in production',

    seo: {
      titulo: 'R&L Solutions — Software, quality engineering and AI automation',
      descricao: 'Software and web development, quality engineering, test automation, AI agents, hosting, email domains and 3D printing. Talk to us on WhatsApp.'
    },

    ui: {
      pularConteudo: 'Skip to content',
      abrirMenu: 'Open menu',
      fecharMenu: 'Close menu',
      temaClaro: 'Switch to light theme',
      temaEscuro: 'Switch to dark theme',
      idioma: 'Language',
      erros: {
        obrigatorio: 'Please fill in this field to continue.',
        telefone: 'Include the area code, e.g. +55 11 99999-0000.',
        email: 'Check the email, e.g. name@domain.com.',
        revisar: 'Please review the highlighted fields below.',
        enviadoWhatsapp: 'We opened WhatsApp with your message ready. Just hit send.',
        enviadoEmail: 'We opened your email client with the message ready.'
      }
    },

    nav: {
      servicos: 'Services',
      processo: 'How we work',
      trabalhos: 'Work',
      faq: 'FAQ',
      cta: 'Message us'
    },

    contato: {
      atendimento: 'Remote work across Brazil and abroad',
      mensagemWhatsapp: 'Hi! I came from the R&L Solutions website and would like to discuss a project.',
      tituloMensagem: 'New enquiry from the R&L Solutions website'
    },

    hero: {
      badge: 'Available for new projects',
      tituloHtml: 'Engineering that <em>holds up in production</em>',
      subtitulo: 'R&L Solutions builds software, tests what it builds and automates what repeats. Eight technical practices, one point of contact — we never hand your problem to another department.',
      ctaPrimario: 'Message us on WhatsApp',
      ctaSecundario: 'See what we do',
      esteira: [
        'Playwright', 'Cypress', 'Selenium', 'CI/CD', 'React', 'Next.js', 'Node.js',
        'Kotlin', 'Python', 'TypeScript', 'AI agents', 'REST API', 'Docker',
        'GitHub Actions', 'Regression testing', 'DNS & email', 'Hosting', '3D printing'
      ]
    },

    servicos: {
      eyebrow: 'What we do',
      titulo: 'Eight practices, one engineering team',
      subtitulo: 'From the code going live to the domain that makes email arrive — and the 3D part you needed yesterday.',
      itens: [
        {
          titulo: 'Software development',
          texto: 'Web systems, APIs and integrations built to last: reviewed code, real test coverage and deployment that does not depend on someone being awake.',
          tags: ['React & Next.js', 'Node.js', 'Kotlin']
        },
        {
          titulo: 'Quality engineering',
          texto: 'QA strategy before the first defect: acceptance criteria, test pyramid, escape metrics and process review. Quality as a discipline, not a final stage.',
          tags: ['Shift-left', 'Acceptance criteria', 'Metrics']
        },
        {
          titulo: 'Test automation',
          texto: 'Regression suites that run in the pipeline and fail for real reasons, not flakiness.',
          tags: ['Playwright', 'Cypress', 'CI/CD']
        },
        {
          titulo: 'AI agents and automation',
          texto: 'Agents that run repetitive work end to end and talk to the tools you already use.',
          tags: ['Agents', 'Integrations', 'RPA']
        },
        {
          titulo: 'Websites and landing pages',
          texto: 'Fast, indexable sites that are easy to edit. No heavy page builder, no platform subscription.',
          tags: ['Technical SEO', 'Performance', 'Responsive']
        },
        {
          titulo: 'Web hosting',
          texto: 'Deployment, SSL certificate, backups and uptime monitoring. You only look when you want to.',
          tags: ['SSL', 'Backups', 'Uptime']
        },
        {
          titulo: 'Domains and business email',
          texto: 'Domain registration, DNS done right and email on your own domain that does not land in spam.',
          tags: ['DNS', 'SPF & DKIM', 'Business email']
        },
        {
          titulo: '3D printing',
          texto: 'Rapid prototyping and made-to-measure parts, from technical drawing to the object in your hand.',
          tags: ['Prototype', 'Custom part', 'FDM']
        }
      ]
    },

    processo: {
      eyebrow: 'How we work',
      titulo: 'No forty-page proposal to get started',
      subtitulo: 'The cycle is deliberately short: you see results before signing a long contract.',
      itens: [
        { titulo: 'Discovery conversation', texto: 'Thirty minutes on WhatsApp or a call to understand the real problem, not the solution you already pictured.' },
        { titulo: 'Scope and price in writing', texto: 'You get what will be delivered, in how long and for how much. No fine print, no surprise overtime.' },
        { titulo: 'Delivery in short cycles', texto: 'You see it working at every stage and can change direction. We never disappear for two months and come back with the wrong thing.' },
        { titulo: 'Handover with documentation', texto: 'Code, credentials and a maintenance guide. If you want to change vendors later, you can.' }
      ]
    },

    stack: {
      eyebrow: 'Tooling',
      titulo: 'What we use every day',
      itens: [
        { sigla: 'PW', nome: 'Playwright' },
        { sigla: 'TS', nome: 'TypeScript' },
        { sigla: 'RN', nome: 'React' },
        { sigla: 'NX', nome: 'Next.js' },
        { sigla: 'PY', nome: 'Python' },
        { sigla: 'KT', nome: 'Kotlin' },
        { sigla: 'DK', nome: 'Docker' },
        { sigla: 'GH', nome: 'GitHub Actions' },
        { sigla: 'AI', nome: 'AI agents' },
        { sigla: 'PG', nome: 'PostgreSQL' },
        { sigla: 'CY', nome: 'Cypress' },
        { sigla: '3D', nome: '3D printing' }
      ]
    },

    portfolio: {
      eyebrow: 'Work',
      titulo: 'Templates already live',
      subtitulo: 'Four sites for four different sectors, built on the same engine: changing client means changing one configuration file.',
      itens: [
        { kind: 'Animal health', nome: 'Veterinary clinic', texto: 'WhatsApp booking, 24-hour emergency care and a licensed team.' },
        { kind: 'Healthcare',    nome: 'Medical clinic',    texto: 'Twelve specialties, insurance plans and booking in thirty seconds.' },
        { kind: 'Real estate',   nome: 'Boutique agency',   texto: 'Curated portfolio, search by neighbourhood and free valuation.' },
        { kind: 'Logistics',     nome: 'Freight carrier',   texto: 'Tracking panel, delivery times by destination and quoting.' }
      ]
    },

    numeros: [
      { valor: '8',    label: 'technical practices' },
      { valor: '100%', label: 'direct contact, no middleman' },
      { valor: '24h',  label: 'to answer a quote request' },
      { valor: 'BR',   label: 'remote work nationwide' }
    ],

    faixaFinal: {
      titulo: 'Let us talk about your project',
      texto: 'Send the idea on WhatsApp, even if it is still rough. The first conversation is about understanding the problem — and it costs nothing.',
      cta: 'Message on WhatsApp'
    },

    faq: {
      eyebrow: 'FAQ',
      titulo: 'What people ask before signing',
      itens: [
        { p: 'Do you work outside São Paulo?', r: 'We do. The work is remote and covers all of Brazil: calls for meetings, repositories for delivery and WhatsApp for day-to-day follow-up.' },
        { p: 'How long does a quote take?', r: 'Up to 24 hours after the discovery conversation, with scope, timeline and price in writing.' },
        { p: 'Fixed scope or hourly?', r: 'Both. A well-defined scope becomes a fixed-price project; continuous work and support become a monthly block of hours.' },
        { p: 'Do I own the code?', r: 'You do. The repository is yours from the first commit, along with credentials and maintenance documentation. We do not lock clients in through technical dependency.' },
        { p: 'I already have a system. Can you take it over?', r: 'Yes. We start with an assessment of what exists — technical debt, test coverage and risks — before proposing any change.' },
        { p: 'How do domains and hosting work?', r: 'We register the domain in your name, configure DNS, SSL and business email, and publish the site. Ownership is always yours.' },
        { p: 'What kind of parts can you 3D print?', r: 'Prototypes, replacement parts and custom items in FDM. Send the drawing or describe the part on WhatsApp and we will assess feasibility.' }
      ]
    },

    contatoSecao: {
      eyebrow: 'Contact',
      titulo: 'Tell us what you need',
      subtitulo: 'Takes a minute to fill in. The message goes straight to R&L on WhatsApp, already formatted.',
      chaves: { whatsapp: 'WhatsApp', ligacao: 'Phone', cobertura: 'Coverage' },
      form: {
        nome: 'Your name',
        nomeHint: 'e.g. Maria Silva…',
        whats: 'WhatsApp',
        whatsHint: 'e.g. +55 11 99999-0000',
        empresa: 'Company',
        empresaHint: 'Optional',
        area: 'What you need',
        mensagem: 'Tell us the context',
        mensagemHint: 'e.g. I have a system in production with a recurring bug and no automated tests…',
        enviar: 'Send via WhatsApp',
        nota: 'We open WhatsApp with your message already written. Nothing is stored on this site.',
        areas: [
          'Software development', 'Website or landing page', 'Quality engineering',
          'Test automation', 'AI agents and automation', 'Web hosting',
          'Domain and business email', '3D printing', 'Not sure yet, let us talk'
        ]
      }
    },

    rodape: {
      sobre: 'Software, quality engineering, AI automation, web infrastructure and 3D printing. You talk directly to the people doing the work.',
      aviso: 'Remote work across Brazil.',
      colServicos: 'Services',
      colEmpresa: 'Company',
      colContato: 'Contact',
      links: {
        desenvolvimento: 'Development',
        qualidade: 'Quality engineering',
        ia: 'AI agents',
        infra: 'Hosting and domains',
        tresD: '3D printing',
        processo: 'How we work',
        trabalhos: 'Work',
        faq: 'FAQ',
        contato: 'Contact'
      },
      direitos: 'All rights reserved.'
    }
  },

  /* ==========================================================
     ESPAÑOL
     ========================================================== */
  es: {
    meta: { htmlLang: 'es' },
    tagline: 'Software, calidad y automatización para quien no puede fallar en producción',

    seo: {
      titulo: 'R&L Solutions — Software, ingeniería de calidad y automatización con IA',
      descricao: 'Desarrollo de software y sitios web, ingeniería de calidad, pruebas automatizadas, agentes de IA, hospedaje, dominios de correo e impresión 3D. Hablemos por WhatsApp.'
    },

    ui: {
      pularConteudo: 'Saltar al contenido',
      abrirMenu: 'Abrir menú',
      fecharMenu: 'Cerrar menú',
      temaClaro: 'Activar tema claro',
      temaEscuro: 'Activar tema oscuro',
      idioma: 'Idioma',
      erros: {
        obrigatorio: 'Completa este campo para continuar.',
        telefone: 'Incluye el código de área, ej.: +55 11 99999-0000.',
        email: 'Revisa el correo, ej.: nombre@dominio.com.',
        revisar: 'Revisa los campos marcados abajo.',
        enviadoWhatsapp: 'Abrimos WhatsApp con tu mensaje listo. Solo tienes que enviarlo.',
        enviadoEmail: 'Abrimos tu correo con el mensaje listo.'
      }
    },

    nav: {
      servicos: 'Servicios',
      processo: 'Cómo trabajamos',
      trabalhos: 'Trabajos',
      faq: 'Preguntas',
      cta: 'Hablar por WhatsApp'
    },

    contato: {
      atendimento: 'Atención remota en todo Brasil y en el exterior',
      mensagemWhatsapp: '¡Hola! Vengo del sitio de R&L Solutions y me gustaría hablar sobre un proyecto.',
      tituloMensagem: 'Nuevo contacto desde el sitio de R&L Solutions'
    },

    hero: {
      badge: 'Disponibles para nuevos proyectos',
      tituloHtml: 'Ingeniería que <em>aguanta producción</em>',
      subtitulo: 'R&L Solutions construye software, prueba lo que construye y automatiza lo que se repite. Ocho frentes técnicos con un solo interlocutor: nunca pasamos tu problema a otro sector.',
      ctaPrimario: 'Hablar por WhatsApp',
      ctaSecundario: 'Ver lo que hacemos',
      esteira: [
        'Playwright', 'Cypress', 'Selenium', 'CI/CD', 'React', 'Next.js', 'Node.js',
        'Kotlin', 'Python', 'TypeScript', 'Agentes de IA', 'API REST', 'Docker',
        'GitHub Actions', 'Pruebas de regresión', 'DNS y correo', 'Hospedaje', 'Impresión 3D'
      ]
    },

    servicos: {
      eyebrow: 'Áreas de trabajo',
      titulo: 'Ocho frentes, una sola ingeniería',
      subtitulo: 'Del código que entra en producción al dominio que hace llegar el correo — y a la pieza 3D que necesitabas para ayer.',
      itens: [
        {
          titulo: 'Desarrollo de software',
          texto: 'Sistemas web, APIs e integraciones hechos para durar: código revisado, cobertura de pruebas real y despliegue que no depende de que alguien esté despierto.',
          tags: ['React y Next.js', 'Node.js', 'Kotlin']
        },
        {
          titulo: 'Ingeniería de calidad',
          texto: 'Estrategia de QA antes del primer defecto: criterios de aceptación, pirámide de pruebas, métricas de escape y revisión de proceso. Calidad como disciplina, no como etapa final.',
          tags: ['Shift-left', 'Criterios de aceptación', 'Métricas']
        },
        {
          titulo: 'Pruebas automatizadas',
          texto: 'Suites de regresión que corren en el pipeline y fallan por motivos reales, no por inestabilidad.',
          tags: ['Playwright', 'Cypress', 'CI/CD']
        },
        {
          titulo: 'Agentes de IA y automatización',
          texto: 'Agentes que ejecutan la rutina repetitiva de punta a punta y se integran con las herramientas que ya usas.',
          tags: ['Agentes', 'Integraciones', 'RPA']
        },
        {
          titulo: 'Sitios web y landing pages',
          texto: 'Sitio rápido, indexable y fácil de editar. Sin constructor pesado ni mensualidad de plataforma.',
          tags: ['SEO técnico', 'Rendimiento', 'Responsivo']
        },
        {
          titulo: 'Hospedaje de sitios',
          texto: 'Publicación, certificado SSL, respaldo y monitoreo de disponibilidad. Solo lo miras cuando quieres.',
          tags: ['SSL', 'Respaldo', 'Disponibilidad']
        },
        {
          titulo: 'Dominios y correo corporativo',
          texto: 'Registro de dominio, DNS bien configurado y correo en tu dominio que no cae en spam.',
          tags: ['DNS', 'SPF y DKIM', 'Correo profesional']
        },
        {
          titulo: 'Impresión 3D',
          texto: 'Prototipado rápido y piezas a medida, del dibujo técnico al objeto en tu mano.',
          tags: ['Prototipo', 'Pieza a medida', 'FDM']
        }
      ]
    },

    processo: {
      eyebrow: 'Cómo trabajamos',
      titulo: 'Sin propuesta de cuarenta páginas para empezar',
      subtitulo: 'El ciclo es corto a propósito: ves resultados antes de firmar un contrato largo.',
      itens: [
        { titulo: 'Conversación de diagnóstico', texto: 'Treinta minutos por WhatsApp o videollamada para entender el problema real, no la solución que ya imaginaste.' },
        { titulo: 'Alcance y precio por escrito', texto: 'Recibes qué se entregará, en cuánto tiempo y por cuánto. Sin letra chica ni horas extra sorpresa.' },
        { titulo: 'Entrega en ciclos cortos', texto: 'Lo ves funcionando en cada etapa y puedes cambiar el rumbo. Nada de desaparecer dos meses y volver con lo equivocado.' },
        { titulo: 'Entrega con documentación', texto: 'Código, accesos y un documento de mantenimiento. Si después quieres cambiar de proveedor, puedes.' }
      ]
    },

    stack: {
      eyebrow: 'Herramientas',
      titulo: 'Lo que usamos todos los días',
      itens: [
        { sigla: 'PW', nome: 'Playwright' },
        { sigla: 'TS', nome: 'TypeScript' },
        { sigla: 'RN', nome: 'React' },
        { sigla: 'NX', nome: 'Next.js' },
        { sigla: 'PY', nome: 'Python' },
        { sigla: 'KT', nome: 'Kotlin' },
        { sigla: 'DK', nome: 'Docker' },
        { sigla: 'GH', nome: 'GitHub Actions' },
        { sigla: 'IA', nome: 'Agentes de IA' },
        { sigla: 'PG', nome: 'PostgreSQL' },
        { sigla: 'CY', nome: 'Cypress' },
        { sigla: '3D', nome: 'Impresión 3D' }
      ]
    },

    portfolio: {
      eyebrow: 'Trabajos',
      titulo: 'Modelos que ya están en línea',
      subtitulo: 'Cuatro sitios de sectores distintos, construidos sobre el mismo motor: cambiar de cliente es cambiar un archivo de configuración.',
      itens: [
        { kind: 'Salud animal', nome: 'Clínica veterinaria', texto: 'Agendamiento por WhatsApp, guardia 24 horas y equipo matriculado.' },
        { kind: 'Salud',        nome: 'Clínica médica',      texto: 'Doce especialidades, obras sociales y turno en treinta segundos.' },
        { kind: 'Inmobiliario', nome: 'Inmobiliaria boutique', texto: 'Portafolio curado, búsqueda por barrio y tasación gratuita.' },
        { kind: 'Logística',    nome: 'Transportadora',      texto: 'Panel de seguimiento, plazos por destino y cotización.' }
      ]
    },

    numeros: [
      { valor: '8',    label: 'frentes técnicos' },
      { valor: '100%', label: 'atención directa, sin intermediarios' },
      { valor: '24h',  label: 'para responder un presupuesto' },
      { valor: 'BR',   label: 'atención remota en todo el país' }
    ],

    faixaFinal: {
      titulo: 'Hablemos de tu proyecto',
      texto: 'Manda la idea por WhatsApp, aunque todavía esté sin forma. La primera conversación sirve para entender el problema — y no cuesta nada.',
      cta: 'Escribir por WhatsApp'
    },

    faq: {
      eyebrow: 'Preguntas',
      titulo: 'Lo que preguntan antes de cerrar',
      itens: [
        { p: '¿Atienden fuera de São Paulo?', r: 'Sí. El trabajo es remoto y cubre todo Brasil: reuniones por videollamada, entregas por repositorio y seguimiento por WhatsApp.' },
        { p: '¿Cuánto tarda un presupuesto?', r: 'Hasta 24 horas después de la conversación de diagnóstico, con alcance, plazo y valor por escrito.' },
        { p: '¿Proyecto cerrado o por hora?', r: 'Ambos. Un alcance bien definido sale como proyecto cerrado; la evolución continua y el soporte salen como paquete mensual de horas.' },
        { p: '¿El código queda conmigo?', r: 'Sí. El repositorio es tuyo desde el primer commit, junto con los accesos y la documentación de mantenimiento. No atamos clientes por dependencia técnica.' },
        { p: 'Ya tengo un sistema. ¿Lo asumen?', r: 'Lo asumimos. Empezamos con un diagnóstico de lo que existe — deuda técnica, cobertura de pruebas y riesgos — antes de proponer cualquier cambio.' },
        { p: '¿Cómo funciona el dominio y el hospedaje?', r: 'Registramos el dominio a tu nombre, configuramos DNS, SSL y correo corporativo, y publicamos el sitio. La titularidad siempre es tuya.' },
        { p: '¿Qué tipo de piezas imprimen en 3D?', r: 'Prototipos, repuestos y piezas a medida en FDM. Envía el dibujo o describe la pieza por WhatsApp y evaluamos la viabilidad.' }
      ]
    },

    contatoSecao: {
      eyebrow: 'Contacto',
      titulo: 'Cuéntanos qué necesitas',
      subtitulo: 'Se responde en un minuto. El mensaje llega directo al WhatsApp de R&L, ya formateado.',
      chaves: { whatsapp: 'WhatsApp', ligacao: 'Teléfono', cobertura: 'Cobertura' },
      form: {
        nome: 'Tu nombre',
        nomeHint: 'Ej.: María Silva…',
        whats: 'WhatsApp',
        whatsHint: 'Ej.: +55 11 99999-0000',
        empresa: 'Empresa',
        empresaHint: 'Opcional',
        area: 'Qué necesitas',
        mensagem: 'Cuéntanos el contexto',
        mensagemHint: 'Ej.: tengo un sistema en producción con un error recurrente y sin pruebas automatizadas…',
        enviar: 'Enviar por WhatsApp',
        nota: 'Abrimos WhatsApp con tu mensaje ya escrito. Ningún dato se guarda en el sitio.',
        areas: [
          'Desarrollo de software', 'Sitio web o landing page', 'Ingeniería de calidad',
          'Pruebas automatizadas', 'Agentes de IA y automatización', 'Hospedaje de sitio',
          'Dominio y correo corporativo', 'Impresión 3D', 'Todavía no sé, quiero conversar'
        ]
      }
    },

    rodape: {
      sobre: 'Software, ingeniería de calidad, automatización con IA, infraestructura web e impresión 3D. Hablas directo con quien ejecuta.',
      aviso: 'Atención remota en todo Brasil.',
      colServicos: 'Servicios',
      colEmpresa: 'Empresa',
      colContato: 'Contacto',
      links: {
        desenvolvimento: 'Desarrollo',
        qualidade: 'Ingeniería de calidad',
        ia: 'Agentes de IA',
        infra: 'Hospedaje y dominios',
        tresD: 'Impresión 3D',
        processo: 'Cómo trabajamos',
        trabalhos: 'Trabajos',
        faq: 'Preguntas',
        contato: 'Contacto'
      },
      direitos: 'Todos los derechos reservados.'
    }
  }
};
