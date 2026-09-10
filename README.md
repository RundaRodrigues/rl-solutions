# R&L Solutions — site institucional

Site da R&L Solutions: desenvolvimento de software, sites, engenharia de
qualidade, testes automatizados, agentes de IA, hospedagem, dominios de e-mail
e impressao 3D.

Site **100% estatico**: HTML, CSS e um JS sem dependencias. Sem build, sem npm,
sem backend. Publica direto no GitHub Pages.

---

## Identidade

| Token | Valor | Onde usar |
|---|---|---|
| `--brand` | `#3b3474` | indigo oficial do logo — favicon e superficie clara |
| `--primary` | `#6f63e8` | cor de interface sobre o fundo escuro |
| `--primary-hover` | `#8b82ff` | hover e realce |
| `--accent` | `#35d6c0` | segunda cor, usada com parcimonia |

O indigo `#3b3474` do logo tem contraste insuficiente sobre o canvas
`#07070c` — por isso a interface usa a versao elevada `#6f63e8`, que mantem a
mesma familia cromatica e passa em contraste. O indigo original continua sendo
a cor oficial da marca em fundo claro (favicon, papelaria, `assets/logo.svg`).

**Se voce tiver o hex exato da marca**, troque `tema.brand` e `tema.primary`
em `js/brand.js` — o site inteiro se re-tematiza.

### Logo

`assets/logo.svg` e `assets/favicon.svg` sao **reconstrucoes aproximadas** do
logo a partir do PNG. Substitua pelos arquivos oficiais quando tiver o vetor.
O monograma no cabecalho e SVG inline dentro do `index.html` (procure por
`class="logo-mark"`) — trocar la atualiza cabecalho e rodape de uma vez.

---

## Editar o conteudo

Tudo vive em **`js/brand.js`**: servicos, processo, stack, portfolio, FAQ,
numeros, WhatsApp e textos do rodape.

```js
window.BRAND = {
  contato: {
    whatsapp: '+55 11 99498-3021',   // qualquer formato; o codigo normaliza
    mensagemWhatsapp: 'Ola! Vim pelo site…'
  },
  servicos: {
    itens: [
      { porte: 'lg', icone: 'code', titulo: '…', texto: '…', tags: ['…'] }
    ]
  }
};
```

- `porte: 'lg'` ocupa meia largura no bento; `'md'` ocupa um terco.
  O layout atual espera **2 itens `lg` seguidos de 6 itens `md`**.
- `icone` referencia um `<g id="i-...">` do sprite SVG no topo do `index.html`.
  Icones disponiveis: `code`, `shield`, `robot`, `spark`, `browser`, `server`,
  `mail`, `cube`, `check`, `phone`, `globe`, `wa`.

### Portfolio

As imagens em `assets/portfolio/` sao capturas dos quatro modelos white label.
Quando publicar cada um no GitHub Pages, troque `url: '#contato'` pelo link
real em `portfolio.itens` — os cartoes ja apontam para onde voce mandar.

---

## Publicar no GitHub Pages

1. Crie o repositorio e faca push da branch `main`.
2. **Settings › Pages › Source: GitHub Actions**.
3. `.github/workflows/pages.yml` publica a cada push.

Caminhos sao relativos, entao funciona em `usuario.github.io/repo/` e em
dominio proprio sem ajuste. Para dominio proprio, crie um arquivo `CNAME` na
raiz com o dominio e aponte o DNS.

---

## Rodar localmente

```bash
npx --yes serve .
```

---

## Estrutura

```
index.html          marcacao + sprite de icones SVG inline
css/tokens.css      tokens da marca (cores, tipo, espaco, forma)
css/base.css        reset e primitivas (identico aos 4 modelos white label)
css/site.css        componentes deste site: bento, esteira, portfolio
js/brand.js         >>> conteudo e tema <<<
js/app.js           motor de binding (identico aos 4 modelos white label)
assets/             logo, favicon e capturas do portfolio
```

---

## Formulario

GitHub Pages nao executa backend. O formulario valida os campos, mostra erro
inline, foca o primeiro campo invalido e abre o WhatsApp com a mensagem ja
formatada. Nenhum dado e armazenado.

---

## Acessibilidade

Revisado contra o [Web Interface Guidelines](https://github.com/vercel-labs/web-interface-guidelines)
da Vercel: foco visivel, `aria-hidden` em icones decorativos, `autocomplete` e
`inputmode` nos campos, validacao inline com foco no primeiro erro,
`prefers-reduced-motion` (a esteira e o pulso do badge param), `color-scheme:
dark`, `touch-action`, `overscroll-behavior` e `env(safe-area-inset-*)`.

---

## Direcao visual

Sistema adaptado de **linear.app** via
[awesome-design-md](https://github.com/voltagent/awesome-design-md): canvas
quase preto, uma unica cor cromatica, painel com hairline, tipografia densa
com tracking negativo. Estrutura reaproveitada, cores substituidas pelas da
R&L.
