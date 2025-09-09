# 👨‍💻 Portfólio — Leonardo Martins

Página de portfólio moderna, responsiva e acessível, com tema dark/light, partículas animadas no fundo e foco em UX e performance. Construída com HTML, CSS e JavaScript puro.

[![HTML5](https://img.shields.io/badge/HTML5-E34F26.svg?logo=html5&logoColor=white)](#-arquitetura-e-stack)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6.svg?logo=css3&logoColor=white)](#-arquitetura-e-stack)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E.svg?logo=javascript&logoColor=000)](#-arquitetura-e-stack)
[![Acessível](https://img.shields.io/badge/A11y-Foco%20em%20UX-5E60CE.svg)](#-acessibilidade)
[![Status](https://img.shields.io/badge/Status-Ativo-green.svg)](#-roadmap--versões)
[![License](https://img.shields.io/badge/License-TBD-lightgrey.svg)](#-licença)

---

## 📌 Sumário

- [Visão Geral](#-visão-geral)
- [Arquitetura e Stack](#-arquitetura-e-stack)
- [Como Rodar](#-como-rodar)
- [Destaques de UX e Performance](#-destaques-de-ux-e-performance)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Acessibilidade](#-acessibilidade)
- [SEO e Metadados](#-seo-e-metadados)
- [Roadmap / Versões](#-roadmap--versões)
- [Contribuição](#-contribuição)
- [Licença](#-licença)

---

## ✨ Visão Geral

- Portfólio single-page com seções de introdução, projetos, habilidades e contato.
- Estética minimalista com acento ciano, tipografia refinada e microinterações suaves.
- Tema claro/escuro com persistência em `localStorage` e respeito ao `prefers-color-scheme`.
- Canvas de partículas leve com linhas de conexão e interação ao movimento do mouse.
- Acessibilidade com navegação por teclado, foco visível, `aria-live` e toasts.

Arquivos principais:
- Página: [index.html](cci:7://file:///home/leonardo/portif%C3%B3lio/index.html:0:0-0:0)
- Estilos: [styles.css](cci:7://file:///home/leonardo/portif%C3%B3lio/styles.css:0:0-0:0)
- Interações: [script.js](cci:7://file:///home/leonardo/portif%C3%B3lio/script.js:0:0-0:0)
- Imagens: `assets/`

Preview:
- Capa/Foto: `assets/foto-perfil.jpg`

---

## 🧱 Arquitetura e Stack

- Frontend: HTML + CSS + JavaScript puro
- Tipografia: Google Fonts (`Space Grotesk`, `Inter`)
- Design Tokens: variáveis CSS (cores, raio, sombras, etc.)
- Tema: data-attribute `data-theme="light"` no `body` com overrides de variáveis
- Interações:
  - Partículas em `<canvas id="bg-particles">`
  - `IntersectionObserver` para revelar elementos ao rolar
  - Botão de alternância de tema com persistência

Componentes e padrões:
- Botões (`.btn`, `.btn-primary`, `.btn-ghost`)
- Cards de projeto (`.card`)
- Skills em grade (`.skills-grid`)
- Toast para mensagens (`#toast`)
- Navegação sem framework usando âncoras

---

## 🚀 Como Rodar

Por ser um site estático, você pode abrir o [index.html](cci:7://file:///home/leonardo/portif%C3%B3lio/index.html:0:0-0:0) diretamente no navegador.
Para uma experiência mais fiel (e evitar bloqueios de CORS em alguns navegadores), use um servidor local:

1) Usando o Python (3.x):
- Windows/macOS/Linux:
  - python -m http.server 8080
- Acesse:
  - http://127.0.0.1:8080

2) Usando o Node (http-server):
- Instalar:
  - npm i -g http-server
- Rodar:
  - http-server -p 8080
- Acesse:
  - http://127.0.0.1:8080

3) Extensão “Live Server” no VS Code:
- Clique em “Go Live” no rodapé e acesse a URL exibida.

Observações:
- O site é client-side e não precisa de backend.
- As partículas ajustam densidade conforme o tamanho da janela para manter performance.
- O tema selecionado fica salvo em `localStorage` (chave `theme`).

---

## 🧪 Destaques de UX e Performance

- Microinterações: hover em botões/cards e reveal de conteúdo.
- Canvas otimizado:
  - Limite de densidade e `devicePixelRatio` limitado para equilibrar nitidez e custo.
  - “Wrap” de partículas nas bordas para movimento contínuo.
- Debounce implícito via `IntersectionObserver` (observa uma vez e desliga).
- Layout fluido com `clamp()` e `grid` responsivo.

Código relevante:
- Tema (toggle e persistência): [script.js](cci:7://file:///home/leonardo/portif%C3%B3lio/script.js:0:0-0:0) (função auto-executável “themeToggle”).
- Partículas: [script.js](cci:7://file:///home/leonardo/portif%C3%B3lio/script.js:0:0-0:0) (`#bg-particles`, [initParticles()](cci:1://file:///home/leonardo/portif%C3%B3lio/script.js:98:2-108:3), [step()](cci:1://file:///home/leonardo/portif%C3%B3lio/script.js:110:2-162:3)).
- Reveal on scroll: `IntersectionObserver` em [script.js](cci:7://file:///home/leonardo/portif%C3%B3lio/script.js:0:0-0:0).

---

## 🗂️ Estrutura do Projeto

- [index.html](cci:7://file:///home/leonardo/portif%C3%B3lio/index.html:0:0-0:0)
  - Estrutura semântica, seções e metadados OG/Twitter.
  - Header fixo com marca “LM”, navegação e toggle de tema.
  - Canvas de partículas fixo ao fundo.
- [styles.css](cci:7://file:///home/leonardo/portif%C3%B3lio/styles.css:0:0-0:0)
  - Variáveis CSS e temas (dark/light).
  - Grid responsivo para projetos/skills/contato.
  - Estilos de botões, cards, badges e toasts.
- [script.js](cci:7://file:///home/leonardo/portif%C3%B3lio/script.js:0:0-0:0)
  - Atualização automática do ano no footer.
  - Alternância de tema com persistência.
  - `IntersectionObserver` para revelar elementos.
  - Render de partículas com conexão entre pontos.
  - Integração de contato via WhatsApp quando houver formulário (estrutura preparada).
- `assets/`
  - Imagem de perfil e arquivos auxiliares.

---

## ♿ Acessibilidade

- Navegação por teclado com foco visível.
- `aria-live` no toast para feedback não intrusivo.
- Links de âncora focam a seção de destino após rolagem.
- Contrast ratio mantido no tema claro/escuro.
- Botões com `aria-label` e ícones com `aria-hidden` quando apropriado.

---

## 🔎 SEO e Metadados

- Metatags Open Graph e Twitter em [index.html](cci:7://file:///home/leonardo/portif%C3%B3lio/index.html:0:0-0:0):
  - `og:title`, `og:description`, `og:image`, `og:type`
  - `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`
- `meta name="description"` com foco em UX, performance e clareza.
- Fonte carregada via Google Fonts com `preconnect`.

---

## 🗺️ Roadmap / Versões

- MVP (atual):
  - Tema dark/light com persistência.
  - Partículas animadas interativas.
  - Seções: Hero, Projetos, Habilidades, Contato.
  - Acessibilidade básica (foco, `aria-live`, navegação por âncora).
- Próximas versões:
  - v1.1: Animação de entrada por seção mais sofisticada e prefers-reduced-motion.
  - v1.2: Mais projetos com thumbs reais e badge de status (WIP/Live).
  - v1.3: Formulário de contato nativo com fallback por e-mail e anti-spam básico.
  - v1.4: LightHouse tuning (performance e SEO) e imagens responsivas (`srcset`).
  - v2.0: Internacionalização (pt-BR/en-US) e modo impressão para o portfólio.

---

## 🤝 Contribuição

- Sugestões de melhorias são bem-vindas via issues/PRs.
- Commits no padrão simples: `feat`, `fix`, `refactor`, `docs`, `chore`.
- Por ser site estático, foque em:
  - Semântica do HTML e acessibilidade.
  - Redução e organização de CSS.
  - Interações JS enxutas e performáticas.

---

## 📄 Licença

- TBD (a definir). Sugestão: MIT.
