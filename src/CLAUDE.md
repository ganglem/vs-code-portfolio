# CLAUDE.md — Portfolio (Next.js)

See root `CLAUDE.md` for content sync rules between portfolio and CV.

## Project Overview

Next.js 15 portfolio for **Emilija Kastratović** — a VS Code-inspired dark IDE aesthetic ("The Precision Compiler"). Live at [emilija.dev](https://emilija.dev). The `monocode_dark/` folder contains the design system spec. The four `*_final/` folders are the original Google Stitch HTML mockups to faithfully reproduce.

## Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm run lint     # ESLint
```

## Design System (monocode_dark/DESIGN.md)

Read this before touching any styles:

- **Zero border-radius everywhere** (`borderRadius: { DEFAULT: "0px" }`) — no exceptions except `full: "9999px"` for avatars/pills
- **No 1px borders for separation** — use background color shifts only (the "No-Line Rule")
- **Surface tonal layering** (darkest → lightest): `#0e0e0e` → `#131313` → `#1b1b1c` → `#202020` → `#2a2a2a` → `#353535`
- **Typography**: Space Grotesk for headlines/labels, JetBrains Mono for all code/data content, Inter for body text
- **Syntax color semantics**: keywords `#569cd6`, strings `#ce9178`, variables `#9cdcfe`, comments `#6a9955`, types `#4ec9b0`
- **Primary palette**: `primary: #95ccff`, `primary-container: #569cd6`, `secondary: #8fcff0`, `tertiary: #fab79d`
- **Glassmorphism** for floating elements: `surface-container-highest` at 85% opacity + `20px` backdrop blur

## Pages → Mockup Mapping

| Route | Mockup | "File" concept |
|---|---|---|
| `/` | `introduction.md_final/code.html` | `Introduction.md` — About/hero with profile photo |
| `/experience` | `experience.py_final/code.html` | `Experience.py` — Python class with job entries |
| `/education` | `education.ts_final/code.html` | `Education.ts` — TypeScript interfaces + bento grid |
| `/projects` | `projects.js_final/code.html` | `Projects.js` — JS array of project objects with image previews |

## Shared VS Code Chrome (every page)

Every page reuses the same IDE shell — build this as a layout component:

1. **TopAppBar** (`h-9`/`h-12`): Fixed, `bg-[#131313]`. Left: hamburger (mobile) + "Portfolio - VS Code" title. Center: active tab pill. Right: window controls icon.
2. **Activity Bar** (`w-12`): Far left, `bg-[#0e0e0e]`. Icons: folder_open (active with `border-l-2 border-[#569cd6]`), search, conversion_path, play_arrow, extension. Bottom: LinkedIn + GitHub SVG links, settings.
3. **Explorer Sidebar** (`w-52`–`w-64`): `bg-[#202020]`, JetBrains Mono. Shows `PORTFOLIO` folder with all page files. Active file highlighted `bg-[#131313] border-l-2 border-[#569cd6] text-[#95ccff]`. Desktop: always visible. Mobile: slide-in drawer over `left-12`.
4. **Tab Bar** (`h-9`): `bg-[#202020]`. Active tab: `bg-[#131313] border-t-2 border-[#569cd6]`. Inactive: `opacity-60`.
5. **Line Numbers**: `w-8`–`w-12`, `color: #858585`/`#40474f`, JetBrains Mono, `user-select: none`.
6. **Status Bar** (`h-6`): Fixed bottom, `bg-[#0e0e0e]`. Left: `main*` branch pill `bg-[#569cd6]`, error/warning counts. Right: encoding, language mode, terminal icon.

## Portfolio Content

- **Name**: Emilija Kastratović
- **Title**: Software Engineer & Cybersecurity Researcher (also: Full-Stack Developer / Systems Engineer)
- **Location**: Podgorica, Montenegro / Remote (studying at Ulm University, Germany)
- **Education**: MSc Media Informatics, Ulm University — focus: System Architecture, Interaction Design, Advanced UI Engineering
- **Experience**: Airbus → Hitachi Rail → DENSO → Mercedes-Benz
- **Projects**: ROPAgen (Next.js/TS/Prisma, compliance tech), FIND.ME (React Native/Node/Socket.io, geolocation)
- **Skills**: TypeScript, Python, Java, React, Vue, Tailwind, Framer Motion, Git, Docker, Figma
- **Contact**: hello@emilija.dev

## Architecture Notes

- **Framework**: Next.js 15 App Router, TypeScript, Tailwind CSS v3
- **Routing**: single `src/app/page.tsx` reads `?tab=` query param; `src/lib/tabs.ts` defines all tab metadata. `isValidTab()` guards against invalid values.
- **Fonts**: JetBrains Mono via `next/font/google` (CSS var `--font-jetbrains`). SF Pro via `@font-face` in `globals.css` pointing to `public/fonts/*.otf` — falls back to `system-ui`. Material Symbols Outlined loaded via Google Fonts CDN in `globals.css`.
- **Tailwind**: `darkMode: 'class'`, `<html class="dark">` always set. All border-radius tokens are `0px` except `full`.
- **Syntax highlight classes**: defined in `globals.css` as `.syn-keyword`, `.syn-type`, `.syn-string`, `.syn-comment`, `.syn-function`, `.syn-variable`, `.syn-number`, `.syn-md-header`, `.syn-md-bold`, `.syn-md-link`
- **Scrollbar**: `.scrollbar-ide` utility class in `globals.css`; dark `#333333` thumb on `#131313` track, 8px wide.
- **VSCodeShell** (`src/components/VSCodeShell.tsx`): `'use client'`, uses `useState` for mobile sidebar toggle. Activity Bar always in flex flow (`w-12`). Sidebar is `absolute lg:relative`, slides in via `-translate-x-full lg:translate-x-0`.
- **LineNumbers** (`src/components/LineNumbers.tsx`): shared helper; takes a `count` prop, `aria-hidden`.
- **Content components** (`src/components/pages/*.tsx`): Server Components, no `'use client'`. Each renders its own `<LineNumbers>` + styled content.
