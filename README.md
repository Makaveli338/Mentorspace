# MentorSpace — Nuxt 3

The MentorSpace landing page, rebuilt as a **Nuxt 3** application. It is a
direct port of the original standalone `index.html`, but modernised:

- **Tailwind CSS** is now compiled at build time (via `@nuxtjs/tailwindcss`)
  instead of loaded from a CDN `<script>`.
- All the interactivity that used **Alpine.js** is now done with **Vue 3**
  (`ref`, `onMounted`, `<Transition>`, `v-show`, etc.).
- The single HTML file is split into reusable pieces: a **header** component,
  a **footer** component, and the page body.

> New to this project? Read **`AGENT.md`** first — it's a step-by-step log of
> exactly what was built and why.

---

## Table of contents

1. [Requirements](#requirements)
2. [Getting started](#getting-started)
3. [Project structure](#project-structure)
4. [How each file works](#how-each-file-works)
5. [Tailwind CSS setup](#tailwind-css-setup)
6. [Alpine.js → Vue: what changed](#alpinejs--vue-what-changed)
7. [Images & assets](#images--assets)
8. [Building for production](#building-for-production)
9. [FAQ](#faq)

---

## Requirements

- **Node.js 18+** (tested on Node 20)
- **npm** (ships with Node)

Check with:

```bash
node --version
npm --version
```

---

## Getting started

From inside the `mentorspace-nuxt/` folder:

```bash
# 1. Install dependencies (only needed once)
npm install

# 2. Start the dev server (hot-reloads on save)
npm run dev
```

Then open **http://localhost:3000** in your browser.

That's it. Edit any `.vue` file and the page updates instantly.

---

## Project structure

```
mentorspace-nuxt/
├── AGENT.md               # Build log: what the agent did, step by step
├── README.md              # ← you are here
├── .gitignore             # Files Git should ignore (.nuxt, node_modules, …)
├── package.json           # Dependencies + npm scripts
├── nuxt.config.ts         # Main Nuxt config (modules, CSS, fonts, <head>)
├── tailwind.config.cjs    # Tailwind theme: colours, spacing, fonts
├── assets/
│   └── css/
│       └── main.css       # Tailwind directives + a little custom CSS
├── app.vue                # The root component (page shell)
├── components/
│   ├── AppHeader.vue      # The top navigation bar
│   └── AppFooter.vue      # The bottom footer
├── pages/
│   └── index.vue          # The landing page content (the "/" route)
└── public/                # Static images, served from the site root "/"
    ├── robotics-clas.jpeg
    ├── youth-employability.jpeg
    ├── sdg1.jpg … sdg7.jpg
    └── … (all other images)
```

### The mental model (how Nuxt assembles the page)

```
app.vue
 ├── <AppHeader />     ← components/AppHeader.vue  (auto-imported)
 ├── <NuxtPage />      ← renders the current route → pages/index.vue
 └── <AppFooter />     ← components/AppFooter.vue  (auto-imported)
```

Nuxt **auto-imports** anything in `components/`, so you can use `<AppHeader />`
without writing an `import` line. And **`pages/`** is file-based routing:
`pages/index.vue` automatically becomes the `/` route.

---

## How each file works

### `package.json`
Declares the dependencies and the scripts:

| Script | What it does |
|---|---|
| `npm run dev` | Start the dev server with hot reload |
| `npm run build` | Build for production (server output in `.output/`) |
| `npm run generate` | Pre-render a fully static site |
| `npm run preview` | Preview the production build locally |

### `nuxt.config.ts`
The central configuration. It:
- registers the `@nuxtjs/tailwindcss` module,
- loads the global stylesheet `assets/css/main.css`,
- sets the page `<title>`, the `<html lang>`, and loads the **Google Fonts**
  and **Material Symbols** icon font via `<link>` tags in the `<head>`.

### `tailwind.config.cjs`
The design system. It's a 1:1 copy of the `tailwind.config` that used to be
inline in the original HTML — the full Material-Design colour palette, the
custom spacing scale (`gutter`, `xl`, `lg`, `md`, `sm`, `base`, `xs`), and the
custom fonts/font-sizes. This is why classes like `bg-primary`, `px-gutter`,
`text-on-surface-variant` work throughout the markup.

### `assets/css/main.css`
Contains the three Tailwind directives (`@tailwind base/components/utilities`)
plus the handful of custom CSS rules that can't be expressed as utilities:
the hero gradient, the leaf-shaped list bullet, the icon-font settings and the
custom scrollbar.

### `app.vue`
The outermost wrapper. Renders the header, the routed page, and the footer, and
applies the base body classes (background, text colour, selection colour).

### `components/AppHeader.vue`
The sticky top navigation. **This is where the Alpine scroll + mobile-menu logic
was rewritten in Vue** — see the next section.

### `components/AppFooter.vue`
The footer (links + copyright). Purely presentational, so it's plain markup.

### `pages/index.vue`
The whole landing page body: hero, impact bar, program cards, mission, "who we
serve", SDG strip, "how we work", the call-to-action, and the contact section.
The hero fade-in and the scroll-reveal animations live here (in Vue).

---

## Tailwind CSS setup

The original page pulled Tailwind from a CDN:

```html
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
```

That's great for prototyping but not for production (no purging, runtime
compilation, large payload). This project uses the **`@nuxtjs/tailwindcss`**
module instead, which compiles Tailwind at build time. Concretely:

- `nuxt.config.ts` → `modules: ['@nuxtjs/tailwindcss']`
- `tailwind.config.cjs` → holds the theme and enables the `forms` +
  `container-queries` plugins (the same two the CDN URL loaded).
- `assets/css/main.css` → the `@tailwind` directives.

No other setup is required — the module wires up PostCSS automatically.

---

## Alpine.js → Vue: what changed

The original relied on **Alpine.js** for three behaviours. All three are now
plain **Vue 3**. No Alpine is loaded anymore.

**1. Navbar shadow on scroll + mobile menu toggle** (`AppHeader.vue`)

```js
// Was: <html x-data="{ scrolled:false, mobileOpen:false }"
//            x-init="addEventListener('scroll', () => scrolled = scrollY > 50)">
const scrolled = ref(false)
const mobileOpen = ref(false)
onMounted(() => window.addEventListener('scroll', () => (scrolled.value = scrollY > 50)))
```

- `:class="scrolled ? 'shadow-md' : 'shadow-sm'"` — the shadow.
- `@click="mobileOpen = !mobileOpen"` — the hamburger button.
- The Alpine `x-transition` mobile dropdown became a Vue `<Transition>` with
  the same enter/leave utility classes, wrapping a `v-show` element.

**2. Hero fade-in on load** (`pages/index.vue`)

```js
// Was: x-data="{show:false}" x-init="setTimeout(() => show = true, 100)"
const heroShow = ref(false)
onMounted(() => setTimeout(() => (heroShow.value = true), 100))
```

**3. Scroll-reveal for sections** (`pages/index.vue`)

The Alpine `x-intersect` helper + the standalone `IntersectionObserver` script
were merged into a single `IntersectionObserver` created in `onMounted`. It
watches every element that carries the `.reveal` class and fades it in when it
scrolls into view.

---

## Images & assets

Every local image lives in **`public/`**. Nuxt serves that folder from the site
root, so a file at `public/sdg1.jpg` is reachable at `/sdg1.jpg`. Because the
original HTML already used root-absolute paths like `src="/sdg1.jpg"`, no image
`src` had to be rewritten.

Two images in the hero/programs grid are loaded from a remote
`googleusercontent.com` URL, exactly as in the original.

---

## Building for production

```bash
# Server-rendered build (Node output in .output/)
npm run build
npm run preview          # test it locally

# OR: fully static site (great for GitHub Pages, Netlify, etc.)
npm run generate         # output in .output/public/
```

---

## FAQ

**Q: Where do I change the navigation links or menu items?**
In `components/AppHeader.vue` (desktop nav and mobile menu are both there).

**Q: Where do I edit the page content / sections?**
In `pages/index.vue`. Each section is clearly commented (Hero, Programs, etc.).

**Q: Where are the colours defined?**
In `tailwind.config.cjs`, under `theme.extend.colors`. Class names like
`bg-primary` or `text-on-surface-variant` map to those values.

**Q: Do I need Alpine.js?**
No. It has been fully replaced by Vue. Nothing loads Alpine anymore.

**Q: Why is there both an AGENT.md and a README.md?**
`AGENT.md` is the *history* — what was done to create the project. `README.md`
(this file) is the *manual* — how to run and work with it.
