import { LineNumbers } from '@/components/LineNumbers'

interface Job {
  fn: string
  role: string
  company: string
  location: string
  period: string
  bullets: string[]
}

const JOBS: Job[] = [
  {
    fn: 'airbus_defence_and_space',
    company: 'Airbus Defence and Space',
    role: 'Working Student — AI Tool Development',
    location: 'Ulm, Germany',
    period: 'Mar 2026 – present',
    bullets: [],
  },
  {
    fn: 'hitachi_rail_gts',
    company: 'Hitachi Rail GTS Deutschland',
    role: 'Working Student — Penetration Testing',
    location: 'Germany',
    period: 'Feb 2025 – Feb 2026',
    bullets: [
      'Performed penetration testing on railway systems and products.',
      'Created and maintained custom Kali Linux ISO with automated builds using Jenkins.',
      'Developed a custom Burp Suite plugin to simulate railway-specific traffic protocols for security testing purposes.',
    ],
  },
  {
    fn: 'denso_automotive',
    company: 'DENSO Automotive Deutschland',
    role: 'Working Student — Fundamental Technology R&D',
    location: 'Germany',
    period: 'Oct 2023 – Nov 2024',
    bullets: [
      'CONNECT Horizon Europe research program focusing on Trust Management in VANETs.',
      'Implemented, tested, and maintained a Python-based Cooperative Adaptive Cruise Control (CACC) module within SUMO traffic simulations, using Apache Kafka for real-time vehicle communication on Ubuntu Linux.',
      'Integrated communication between the Trust Assessment Framework (TAF) and partner systems to dynamically migrate CACC instances between ECUs based on Trust Levels.',
    ],
  },
  {
    fn: 'mercedes_benz_tech_innovation',
    company: 'Mercedes-Benz Tech Innovation',
    role: 'Working Student — CarIT Security',
    location: 'Stuttgart, Germany',
    period: 'Oct 2021 – Sep 2023',
    bullets: [
      'Developed a Python-based tool for automated cybersecurity analysis of vehicular network architectures.',
      'Performed vulnerability analysis on vehicle systems to identify security weaknesses.',
      'Assisted with project management tasks, including documentation and review processes.',
      'Bachelor\'s Thesis: "Comparing different vehicle architectures based on attack path analysis".',
    ],
  },
]

export function Experience() {
  return (
    <div className="code-page">
      <LineNumbers count={80} />

      <div className="code-content px-4 pt-4 pb-12">

        {/* ── File header ──────────────────────────────────────────────── */}
        <p>
          <span className="syn-keyword">import</span>{' '}
          <span className="text-muted">datetime</span>
        </p>
        <p className="syn-comment mt-1"># Professional career — Emilija Kastratović</p>
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
              <span className="text-muted">(</span>
              <span className="syn-keyword">self</span>
              <span className="text-muted">):</span>
            </p>

            <div className="pl-8 border-l border-subtle/20 ml-5 mt-1 space-y-0.5">
              <p>
                <span className="syn-variable">role</span>
                <span className="text-muted"> = </span>
                <span className="syn-string">&quot;{job.role}&quot;</span>
              </p>
              <p>
                <span className="syn-variable">company</span>
                <span className="text-muted"> = </span>
                <span className="syn-string">&quot;{job.company}&quot;</span>
              </p>
              <p>
                <span className="syn-variable">location</span>
                <span className="text-muted"> = </span>
                <span className="syn-string">&quot;{job.location}&quot;</span>
              </p>
              <p>
                <span className="syn-variable">period</span>
                <span className="text-muted"> = </span>
                <span className="syn-string">&quot;{job.period}&quot;</span>
              </p>
              <p>
                <span className="syn-variable">highlights</span>
                <span className="text-muted"> = [</span>
              </p>
              {job.bullets.map((b, bi) => (
                <p key={bi} className="pl-4">
                  <span className="syn-string">&quot;{b}&quot;</span>
                  <span className="text-muted">,</span>
                </p>
              ))}
              <p><span className="text-muted">]</span></p>
            </div>
          </div>
        ))}

        {/* ── Footer ───────────────────────────────────────────────────── */}
        <p className="mt-6 syn-comment"># End of ProfessionalExperience</p>
        <p className="mt-2">
          <span className="syn-keyword">if</span>
          <span className="text-muted"> __name__ == </span>
          <span className="syn-string">&quot;__main__&quot;</span>
          <span className="text-muted">:</span>
        </p>
        <p className="pl-4">
          <span className="syn-function">print</span>
          <span className="text-muted">(</span>
          <span className="syn-string">&quot;Experience loaded successfully.&quot;</span>
          <span className="text-muted">)</span>
        </p>
      </div>
    </div>
  )
}
