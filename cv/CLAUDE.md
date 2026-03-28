# CLAUDE.md — CV (LaTeX)

See root `CLAUDE.md` for content sync rules between CV and portfolio.

## Purpose

A concise, professional PDF CV. It is a **summary and subset** of the portfolio — not the other way around. Keep it tight: one page is ideal, two pages maximum.

## Structure

| File | Section |
|---|---|
| `content/header.tex` | Name, photo, contact info |
| `content/profile.tex` | Short bio / tagline |
| `content/experience.tex` | Professional experience |
| `content/education.tex` | Degrees and theses |
| `content/otherex.tex` | Side projects / other experience |
| `content/skills.tex` | Skills summary |
| `mystyle.sty` | All LaTeX styling — edit here for visual changes |

## Content Rules

- **Experience**: include all roles, but keep bullet points to 2–3 per role max. Focus on impact, not process.
- **Education**: degrees + thesis titles only. No extended descriptions.
- **Projects** (`otherex.tex`): list only the 2–3 most relevant. One line each.
- **Skills**: top skills only — no exhaustive lists. Mirror what's emphasised in the portfolio.
- **No duplication of detail**: if something is better shown on the portfolio (screenshots, demos, full descriptions), just name it here — don't describe it.

## Current Content Snapshot

**Experience** (newest first):
- Airbus Defence and Space — Working Student, AI Tool Development (Mar 2026–present)
- Hitachi Rail GTS — Working Student, Penetration Testing (Feb 2025–Feb 2026)
- DENSO Automotive — Working Student, Fundamental Technology R&D (Oct 2023–Nov 2024)
- Mercedes-Benz Tech Innovation — Working Student, CarIT Security (Oct 2021–Sep 2023)

**Education**:
- M.Sc. Computer Science, Ulm University (Oct 2023–Jun 2026)
- B.Sc. Software Engineering, Ulm University (Oct 2019–Jul 2023)

**Skills**: Python · TypeScript · Java · Next.js · React · Docker · Git · Kali Linux · Burp Suite · Figma

## Build

Compiled via GitHub Actions (`xu-cheng/latex-action`) on every push touching `cv/**`. PDF deployed to GitHub Pages. To compile locally:

```bash
cd cv
latexmk -pdf main.tex
```
