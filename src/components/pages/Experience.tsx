import { LineNumbers } from '@/components/LineNumbers'

interface Job {
  fn: string
  role: string
  company: string
  location: string
  bullets: string[]
}

const JOBS: Job[] = [
  {
    fn: 'company_a',
    company: 'Company A',
    role: 'Your Role Title',
    location: 'City, Country',
    bullets: [
      'Placeholder responsibility or achievement.',
      'Another impact statement.',
    ],
  },
  {
    fn: 'company_b',
    company: 'Company B',
    role: 'Your Role Title',
    location: 'City, Country',
    bullets: [
      'Placeholder responsibility or achievement.',
      'Another impact statement.',
    ],
  },
  {
    fn: 'company_c',
    company: 'Company C',
    role: 'Your Role Title',
    location: 'City, Country',
    bullets: [
      'Placeholder responsibility or achievement.',
    ],
  },
  {
    fn: 'company_d',
    company: 'Company D',
    role: 'Intern — Your Focus',
    location: 'City, Country',
    bullets: [
      'Placeholder internship project or outcome.',
    ],
  },
]

export function Experience() {
  return (
    <div className="flex min-h-full font-mono text-sm leading-6">
      <LineNumbers count={60} />

      <div className="flex-grow px-4 pt-4 pb-12">

        {/* ── File header ──────────────────────────────────────────────── */}
        <p>
          <span className="syn-keyword">import</span>{' '}
          <span className="text-on-surface-variant">datetime</span>
        </p>
        <p className="syn-comment mt-1"># Professional career path — replace with your own data</p>
        <p className="mt-4">
          <span className="syn-keyword">class</span>{' '}
          <span className="syn-type">ProfessionalExperience</span>:
        </p>

        {/* ── Job entries ──────────────────────────────────────────────── */}
        {JOBS.map((job, i) => (
          <div key={job.fn} className={i > 0 ? 'mt-5' : 'mt-3'}>
            <p className="pl-4">
              <span className="syn-keyword">def</span>{' '}
              <span className="syn-function">{job.fn}</span>
              <span className="text-on-surface-variant">(</span>
              <span className="syn-keyword">self</span>
              <span className="text-on-surface-variant">):</span>
            </p>

            <div className="pl-8 border-l border-outline-variant/20 ml-5 mt-1 space-y-0.5">
              <p>
                <span className="syn-variable">role</span>
                <span className="text-on-surface-variant"> = </span>
                <span className="syn-string">&quot;{job.role}&quot;</span>
              </p>
              <p>
                <span className="syn-variable">company</span>
                <span className="text-on-surface-variant"> = </span>
                <span className="syn-string">&quot;{job.company}&quot;</span>
              </p>
              <p>
                <span className="syn-variable">location</span>
                <span className="text-on-surface-variant"> = </span>
                <span className="syn-string">&quot;{job.location}&quot;</span>
              </p>
              <p>
                <span className="syn-variable">highlights</span>
                <span className="text-on-surface-variant"> = [</span>
              </p>
              {job.bullets.map((b, bi) => (
                <p key={bi} className="pl-4">
                  <span className="syn-string">&quot;{b}&quot;</span>
                  <span className="text-on-surface-variant">,</span>
                </p>
              ))}
              <p><span className="text-on-surface-variant">]</span></p>
            </div>
          </div>
        ))}

        {/* ── Footer ───────────────────────────────────────────────────── */}
        <p className="mt-6 syn-comment"># End of ProfessionalExperience</p>
        <p className="mt-2">
          <span className="syn-keyword">if</span>
          <span className="text-on-surface-variant"> __name__ == </span>
          <span className="syn-string">&quot;__main__&quot;</span>
          <span className="text-on-surface-variant">:</span>
        </p>
        <p className="pl-4">
          <span className="syn-function">print</span>
          <span className="text-on-surface-variant">(</span>
          <span className="syn-string">&quot;Experience loaded successfully.&quot;</span>
          <span className="text-on-surface-variant">)</span>
        </p>
      </div>
    </div>
  )
}
