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

O conteudo esta dividido em dois arquivos:

| Arquivo | O que guarda |
|---|---|
| `js/brand.js` | o que **nao** muda com o idioma: nome, cores, WhatsApp, icones, proporcao dos cartoes, imagens do portfolio |
| `js/i18n.js` | **todos os textos**, um bloco por idioma (`pt`, `en`, `es`) |

O `i18n.js` sobrescreve o `brand.js`. Em listas a mesclagem e **posicao a
posicao**, entao a ordem dos itens precisa bater nos dois arquivos: o item 3 de
`servicos.itens` no `brand.js` guarda o icone, e o item 3 no `i18n.js` guarda o
titulo e o texto daquele mesmo cartao.

```js
// js/brand.js — nao traduz
servicos: { itens: [ { porte: 'lg', icone: 'code' }, … ] }

// js/i18n.js — traduz
pt: { servicos: { itens: [ { titulo: 'Desenvolvimento…', texto: '…', tags: […] }, … ] } }
```

- `porte: 'lg'` ocupa meia largura no bento; `'md'` ocupa um terco.
  O layout atual espera **2 itens `lg` seguidos de 6 itens `md`**.
- `icone` referencia um `<g id="i-...">` do sprite SVG no topo do `index.html`.
  Icones disponiveis: `code`, `shield`, `robot`, `spark`, `browser`, `server`,
  `mail`, `cube`, `check`, `phone`, `globe`, `sun`, `moon`, `wa`.

### Adicionar um idioma

1. Copie o bloco `en` inteiro em `js/i18n.js`, troque a chave pela sigla ISO
   (`fr`, `it`, …) e traduza.
2. Adicione o botao no `index.html`, nos **dois** blocos `.langs` (cabecalho e
   menu do celular):
   ```html
   <button type="button" data-lang-btn="fr" aria-pressed="false" lang="fr">FR</button>
   ```

O idioma inicial vem de `navigator.languages` (nunca de IP) e a escolha fica
salva em `localStorage`. O atributo `lang` do `<html>`, o `<title>` e a
`meta description` acompanham a troca.

### Tema claro e escuro

O botao de sol/lua alterna e salva a preferencia em `localStorage`. Sem
escolha salva, o site segue o `prefers-color-scheme` do sistema. Um script
inline no `<head>` aplica o tema **antes da primeira pintura**, para nao piscar
branco em quem usa o modo escuro.

A paleta clara fica em `css/tokens.css`, no bloco `:root[data-theme="light"]`.
Ajustes visuais pontuais (brilhos, sombras, gradiente do titulo) estao no fim
do `css/site.css`, prefixados por `:root[data-theme="light"]`.

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
js/brand.js         configuracao: marca, cores, contato, icones
js/i18n.js          textos em pt, en e es
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
