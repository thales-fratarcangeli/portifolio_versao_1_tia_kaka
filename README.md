# Tia Kaka · Site

Landing page e portfólio de **Klara Bosso** (Tia Kaka), professora de artes plásticas em São Joaquim da Barra - SP. Construído em **Astro 4.x + Tailwind CSS v3 + Motion One**, 100% estático, com deploy automático no GitHub Pages via GitHub Actions.

- Site final: https://thales-fratarcangeli.github.io/portifolio_versao_1_tia_kaka/
- WhatsApp: [+55 16 99146-8916](https://wa.me/5516991468916)
- Instagram: [@borboletasemdesenvolvimento](https://www.instagram.com/borboletasemdesenvolvimento/)

## Stack

| Camada          | Tecnologia                                   |
|-----------------|----------------------------------------------|
| Framework       | Astro 4.x (SSG)                              |
| Estilos         | Tailwind CSS v3 + @tailwindcss/typography    |
| Animações       | Motion One (`motion`)                        |
| Tipografia      | Playfair Display + Nunito (Google Fonts)     |
| Ícones          | SVG inline (Lucide) + WhatsApp oficial       |
| Deploy          | GitHub Pages (workflow `deploy.yml`)         |

## Rodando localmente

```bash
npm install
npm run dev
```

Build de produção:

```bash
npm run build
npm run preview
```

## Estrutura

```
src/
├── components/       Todos os blocos visuais da landing (Hero, About, Services, etc.)
├── layouts/          BaseLayout.astro e BlogPostLayout.astro
├── content/blog/     Posts em Markdown (Content Collections)
├── styles/           globals.css com variáveis CSS, texturas e utilidades
└── pages/            index.astro + /blog (listagem e posts)
```

## Seções implementadas

Do **prompt base** (`prompt`):

1. Header sticky com smooth scroll + hamburger mobile
2. Hero full-viewport com stagger reveal (Motion One) e pinceladas SVG animadas
3. About (bio + destaques + pills das modalidades)
4. Services (4 cards com glassmorphism + CTAs WhatsApp personalizados)
5. Gallery (12 itens + filtros pill + masonry + lightbox vanilla)
6. Testimonials (slider scroll-snap com autoplay pausável)
7. Contact (Google Maps iframe + cards + WhatsApp flutuante com pulse)
8. Footer completo

Do **prompt acessório** (`prompt_acessorio`):

1. Galeria filtrável com fade+scale via Motion One + lightbox (ESC / setas)
2. Before/After deslizante ("Do branco à obra") com clip-path + drag + touch
3. Stats animados (`IntersectionObserver` + `requestAnimationFrame` + easeOutCubic)
4. Schedule (calendário semanal com badges de status)
5. FAQ em accordion `<details>` + apenas um aberto + max-height transition
6. CTAs WhatsApp pré-preenchidos por serviço
7. Custom cursor de pincel (lerp + hover scale, apenas `pointer: fine`)
8. Timeline de reconhecimentos (linha central alternada)
9. Blog estático com Content Collections (Zod schema, 3 posts placeholder)
10. Google Maps embed sem API key + fallback

## Deploy no GitHub Pages

O workflow `.github/workflows/deploy.yml` dispara em qualquer push para `main` e publica a pasta `dist/`.

**Configuração única (uma vez no GitHub):**

1. Settings → **Pages** → **Source**: selecione **GitHub Actions**.
2. Faça qualquer push na `main` e aguarde o workflow.

## Imagens e conteúdo — o que ainda precisa ser preenchido

Todas as `<img>` e áreas de imagem têm comentário `<!-- SUBSTITUIR: ... -->` e um placeholder visual em CSS. Ao adicionar as imagens reais, coloque em:

| Caminho esperado                                 | Uso                           |
|--------------------------------------------------|-------------------------------|
| `public/images/hero-bg.jpg`                      | Fundo do Hero                 |
| `public/images/klara-profile.jpg`                | Foto da Klara (About, Hero)   |
| `public/images/before-placeholder.jpg`           | Before/After — antes          |
| `public/images/after-placeholder.jpg`            | Before/After — depois         |
| `public/images/gallery/placeholder-1…12.jpg`     | Galeria                       |
| `public/images/blog/post-1-cover.jpg` etc.       | Capas dos posts               |

Outros pontos com a marca **AJUSTAR**:

- Depoimentos em `src/components/Testimonials.astro`
- Horários reais das turmas em `src/components/Schedule.astro`
- Eventos reais na `src/components/Timeline.astro`
- Conteúdo real dos 3 posts em `src/content/blog/*.md`

## Acessibilidade

- HTML5 semântico, `aria-label` nos botões sem texto, skip-to-content.
- `prefers-reduced-motion` respeitado em todas as animações.
- Focus-visible customizado (outline + offset).
- Contraste AA (paleta terrosa sobre cream).

---

© 2025 Klara Bosso · Borboletas em Desenvolvimento
