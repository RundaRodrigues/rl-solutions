/* ============================================================
   brand.js — CONFIGURAÇÃO DA R&L SOLUTIONS
   ------------------------------------------------------------
   Aqui fica só o que NÃO muda com o idioma: nome, cores, fontes,
   contato e as imagens do portfólio.

   Os textos ficam em js/i18n.js, um bloco por idioma.
   ============================================================ */

window.BRAND = {

  nome: 'R&L Solutions',
  sigla: 'RL',

  /* ---------- cores ----------
     Qualquer chave aqui vira uma CSS var de mesmo nome e vale nos
     dois temas. O tema claro completo está em css/tokens.css, no
     bloco :root[data-theme="light"].                              */
  tema: {
    'brand': '#3b3474'   // indigo oficial da marca
  },

  /* ---------- contato ---------- */
  contato: {
    whatsapp: '+55 11 99498-3021',   // qualquer formato: o código normaliza
    whatsappLabel: '(11) 99498-3021',
    telefone: '+55 11 99498-3021',
    telefoneLabel: '(11) 99498-3021',
    email: '',
    endereco: ''
    // mensagemWhatsapp e tituloMensagem ficam em js/i18n.js,
    // para a mensagem sair no idioma de quem está navegando.
  },

  redes: [],

  /* ---------- imagens do portfólio ----------
     Os textos de cada item ficam em js/i18n.js, na mesma ordem.   */
  portfolio: {
    itens: [
      { foto: 'assets/portfolio/vet.png',            url: 'https://rundarodrigues.github.io/vet-whitelabel/' },
      { foto: 'assets/portfolio/clinica.png',        url: 'https://rundarodrigues.github.io/clinica-whitelabel/' },
      { foto: 'assets/portfolio/imobiliaria.png',    url: 'https://rundarodrigues.github.io/imobiliaria-whitelabel/' },
      { foto: 'assets/portfolio/transportadora.png', url: 'https://rundarodrigues.github.io/transportadora-whitelabel/' }
    ]
  },

  /* ---------- ícones e proporção dos cartões ----------
     Também não mudam com o idioma. A ordem casa com i18n.        */
  servicos: {
    itens: [
      { porte: 'lg', icone: 'code' },
      { porte: 'lg', icone: 'shield' },
      { porte: 'md', icone: 'robot' },
      { porte: 'md', icone: 'spark' },
      { porte: 'md', icone: 'browser' },
      { porte: 'md', icone: 'server' },
      { porte: 'md', icone: 'mail' },
      { porte: 'md', icone: 'cube' }
    ]
  }

  // A lista de stack fica inteira em js/i18n.js: dois itens
  // ("Agentes de IA", "Impressão 3D") mudam com o idioma.
};
