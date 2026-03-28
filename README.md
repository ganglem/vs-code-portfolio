# ganglem.space

Personal portfolio — VS Code dark IDE aesthetic built with Next.js 15.

## Stack

- Next.js 15 App Router, TypeScript, Tailwind CSS
- Docker + Traefik + Watchtower
- Deployed at [ganglem.space](https://ganglem.space)

## Local development

```bash
npm install
npm run dev
```

## Server deployment

```bash
git clone git@github.com:ganglem/vs-code-portfolio.git
cd vs-code-portfolio
cp .env.example .env   # fill in values
docker compose up -d
```

Traefik handles TLS and routing. Watchtower auto-deploys on every push to `main`.

## CV

[![Compile CV](https://github.com/ganglem/vs-code-portfolio/actions/workflows/compile-cv.yml/badge.svg)](https://github.com/ganglem/vs-code-portfolio/actions/workflows/compile-cv.yml) [**Download PDF**](https://ganglem.github.io/vs-code-portfolio/CV_Emilija_Kastratovic.pdf)

LaTeX source lives in `cv/`. Compiled and deployed to GitHub Pages on every push that touches `cv/**`.

![CV Page 1](cv/preview/cv-1.png)
![CV Page 2](cv/preview/cv-2.png)
