# CLAUDE.md — Orchestrator

This repo has two distinct parts. Each has its own `CLAUDE.md` with detailed guidance:

| Part | Location | Purpose |
|---|---|---|
| Portfolio | `src/` → see `src/CLAUDE.md` | Full Next.js site at emilija.dev |
| CV | `cv/` → see `cv/CLAUDE.md` | LaTeX PDF, compiled to GitHub Pages |

---

## Content Sync Rules

**The portfolio is the source of truth. The CV is a curated subset.**

- A one-way street: portfolio content → CV, never the other way around.
- When content changes in the portfolio (new job, new project, updated skill), check whether the CV needs a corresponding update.
- When content changes in `cv/`, ask: does this reflect something that should also be updated in the portfolio?

### What belongs in BOTH

| Content | Portfolio | CV |
|---|---|---|
| Job titles, companies, dates | ✅ full detail | ✅ concise |
| Education | ✅ full detail | ✅ concise |
| Key skills | ✅ full list | ✅ top skills only |
| Contact info | ✅ | ✅ |
| Name & title | ✅ | ✅ |

### What belongs ONLY in the portfolio

- Project deep-dives, screenshots, live demos
- Design system, aesthetic choices
- Extended bio / personality
- All projects (CV lists only the most relevant 2–3)

### What belongs ONLY in the CV

- Mailing address, phone number
- Profile photo (in header)

---

## Owner

Emilija Kastratović — hello@emilija.dev
