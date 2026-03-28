import { User } from 'lucide-react'
import { LineNumbers } from '@/components/LineNumbers'

export function Introduction() {
  return (
    <div className="code-page">
      <LineNumbers count={60} />

      <div className="code-content p-6 max-w-3xl">

        {/* ── Profile header ───────────────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center mb-10 gap-6">
          {/* Avatar placeholder */}
          <div className="w-24 h-24 bg-surface-container-highest border border-outline-variant/20 shrink-0 flex items-center justify-center">
            <User size={32} className="text-on-surface-variant opacity-30" />
          </div>
          <div>
            <h1 className="syn-md-header text-3xl font-headline font-bold mb-1">
              # Emilija Kastratović
            </h1>
            <p className="text-on-surface-variant italic">// Software Engineer &amp; Cybersecurity Enthusiast</p>
          </div>
        </div>

        {/* ── Markdown sections ────────────────────────────────────────── */}
        <div className="space-y-7">

          <section>
            <p className="syn-md-header text-lg font-bold">## Overview</p>
            <p className="mt-2 text-on-surface-variant">
              <span className="syn-md-bold">Master&apos;s student in Computer Science</span> at Ulm University
              with <span className="syn-md-bold">4+ years</span> of practical experience in Cybersecurity
              and Software Engineering. Combines a creative, analytical mindset with hands-on work across
              automotive security, railway penetration testing, and full-stack development.
            </p>
          </section>

          <section>
            <p className="syn-md-header text-lg font-bold">## Technical Focus</p>
            <ul className="mt-2 space-y-2 list-none">
              {[
                ['Languages', 'Python, TypeScript, Java'],
                ['Frameworks', 'Next.js, React.js, Three.js, Framer Motion, Apache Kafka, Supabase'],
                ['Tools', 'Docker, Git, Jenkins, Kali Linux, Burp Suite, Figma'],
                ['Domains', 'Cybersecurity, Full-Stack Development, Research & Development'],
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
                MSc thesis:{' '}
                <span className="syn-md-bold">
                  &ldquo;Assessing the Effectiveness of Large Language Model Support for Generating
                  GDPR ROPA Documentation&rdquo;
                </span>{' '}
                — researching LLM applicability for automated compliance documentation at Ulm University
                (DBIS). Concurrently working as a{' '}
                <span className="syn-md-bold">Working Student at Airbus Defence and Space</span>.
              </p>
            </div>
          </section>

          <section>
            <p className="syn-md-header text-lg font-bold">## Contact</p>
            <p className="mt-2 text-on-surface-variant">
              Email:{' '}
              <a className="syn-md-link" href="mailto:emilija1705@gmail.com">
                emilija1705@gmail.com
              </a>
              <br />
              Location:{' '}
              <span className="text-tertiary">Ulm, Germany / Remote</span>
              <br />
              LinkedIn:{' '}
              <a
                className="syn-md-link"
                href="https://www.linkedin.com/in/emilijak/"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/emilijak
              </a>
              <br />
              GitHub:{' '}
              <a
                className="syn-md-link"
                href="https://github.com/ganglem"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/ganglem
              </a>
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
