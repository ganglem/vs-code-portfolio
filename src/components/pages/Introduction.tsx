import { LineNumbers } from '@/components/LineNumbers'

export function Introduction() {
  return (
    <div className="flex min-h-full font-mono text-sm leading-6">
      <LineNumbers count={48} />

      <div className="flex-grow p-6 max-w-3xl">

        {/* ── Profile header ───────────────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center mb-10 gap-6">
          {/* Avatar placeholder */}
          <div className="w-24 h-24 bg-surface-container-highest border border-outline-variant/20 shrink-0 flex items-center justify-center">
            <span className="material-symbols-outlined text-3xl text-on-surface-variant opacity-30">
              person
            </span>
          </div>
          <div>
            <h1 className="syn-md-header text-3xl font-headline font-bold mb-1">
              # Your Name
            </h1>
            <p className="text-on-surface-variant italic">// Your Title</p>
          </div>
        </div>

        {/* ── Markdown sections ────────────────────────────────────────── */}
        <div className="space-y-7">

          <section>
            <p className="syn-md-header text-lg font-bold">## Overview</p>
            <p className="mt-2 text-on-surface-variant">
              <span className="syn-md-bold">Placeholder</span> — replace this with a short bio.
              Mention your current role, years of experience, and key domains you work in.
            </p>
          </section>

          <section>
            <p className="syn-md-header text-lg font-bold">## Technical Focus</p>
            <ul className="mt-2 space-y-2 list-none">
              {[
                ['Languages', 'Rust, Python, TypeScript, Go'],
                ['Domains', 'Placeholder domain A, placeholder domain B'],
                ['Stack', 'Placeholder framework, cloud, database'],
              ].map(([label, value]) => (
                <li key={label} className="flex items-start gap-2">
                  <span className="text-secondary shrink-0">-</span>
                  <span>
                    <span className="syn-md-bold">{label}:</span>{' '}
                    <span className="text-on-surface-variant">{value}</span>
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <p className="syn-md-header text-lg font-bold">## Current Mission</p>
            <div className="mt-2 bg-surface-container-low p-4 border-l-4 border-primary-container">
              <p className="text-on-surface-variant leading-relaxed">
                Replace this with what you&apos;re currently focused on — a project, a research area,
                or a goal you&apos;re working toward.
              </p>
            </div>
          </section>

          <section>
            <p className="syn-md-header text-lg font-bold">## Contact</p>
            <p className="mt-2 text-on-surface-variant">
              Email:{' '}
              <a className="syn-md-link" href="mailto:you@example.com">
                you@example.com
              </a>
              <br />
              Location:{' '}
              <span className="text-tertiary">Your City, Country / Remote</span>
            </p>
          </section>

        </div>

        {/* ── Decorative ambient block ─────────────────────────────────── */}
        <div className="mt-14 opacity-40">
          <p className="text-[10px] uppercase tracking-widest mb-2 text-on-surface-variant">
            // ambient
          </p>
          <div className="aspect-video bg-surface-container-lowest flex items-center justify-center">
            <span className="text-[10px] font-mono text-on-surface-variant opacity-30 tracking-widest uppercase">
              image placeholder
            </span>
          </div>
        </div>

      </div>
    </div>
  )
}
