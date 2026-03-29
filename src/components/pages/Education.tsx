import { LineNumbers } from '@/components/LineNumbers'

interface Degree {
  fn: string
  institution: string
  degree: string
  period: string
  thesis: string[]
}

const DEGREES: Degree[] = [
  {
    fn: 'msc_computer_science',
    institution: 'Ulm University',
    degree: 'M.Sc. Computer Science',
    period: 'Oct 2023 – Jun 2026',
    thesis: [
      '"Assessing the Effectiveness of Large Language Model Support for Generating GDPR ROPA Documentation"',
    ],
  },
  {
    fn: 'bsc_software_engineering',
    institution: 'Ulm University',
    degree: 'B.Sc. Software Engineering',
    period: 'Oct 2019 – Jul 2023',
    thesis: [
      '"Comparing different vehicle architectures based on attack path analysis"',
      '(in cooperation with Mercedes-Benz Tech Innovation)',
    ],
  },
]

export function Education() {
  return (
    <div className="code-page">
      <LineNumbers count={60} />

      <div className="code-content px-4 pt-4 pb-12">

        {/* ── File header ──────────────────────────────────────────────── */}
        <p className="syn-comment">// AcademicBackground.java</p>
        <p className="syn-comment mt-0.5">// Emilija Kastratović — Ulm University</p>
        <p className="mt-4">
          <span className="syn-keyword">public class </span>
          <span className="syn-type">AcademicBackground</span>
          <span className="text-muted"> &#123;</span>
        </p>

        {/* ── Degree entries ───────────────────────────────────────────── */}
        {DEGREES.map((d, i) => (
          <div key={d.fn} className={i > 0 ? 'mt-5' : 'mt-3'}>
            <p className="pl-4">
              <span className="syn-keyword">public void </span>
              <span className="syn-function">{d.fn}</span>
              <span className="text-muted">() &#123;</span>
            </p>

            <div className="pl-8 border-l border-subtle/20 ml-5 mt-1 space-y-0.5">
              <p>
                <span className="syn-type">String </span>
                <span className="syn-variable">institution</span>
                <span className="text-muted"> = </span>
                <span className="syn-string">&quot;{d.institution}&quot;</span>
                <span className="text-muted">;</span>
              </p>
              <p>
                <span className="syn-type">String </span>
                <span className="syn-variable">degree</span>
                <span className="text-muted"> = </span>
                <span className="syn-string">&quot;{d.degree}&quot;</span>
                <span className="text-muted">;</span>
              </p>
              <p>
                <span className="syn-type">String </span>
                <span className="syn-variable">period</span>
                <span className="text-muted"> = </span>
                <span className="syn-string">&quot;{d.period}&quot;</span>
                <span className="text-muted">;</span>
              </p>
              <p>
                <span className="syn-type">String</span>
                <span className="text-muted">[] </span>
                <span className="syn-variable">thesis</span>
                <span className="text-muted"> = &#123;</span>
              </p>
              {d.thesis.map((line, li) => (
                <p key={li} className="pl-4">
                  <span className="syn-string">&quot;{line}&quot;</span>
                  <span className="text-muted">,</span>
                </p>
              ))}
              <p><span className="text-muted">&#125;;</span></p>
            </div>

            <p className="pl-4 mt-0.5">
              <span className="text-muted">&#125;</span>
            </p>
          </div>
        ))}

        {/* ── main ─────────────────────────────────────────────────────── */}
        <div className="mt-5 pl-4">
          <p>
            <span className="syn-keyword">public static void </span>
            <span className="syn-function">main</span>
            <span className="text-muted">(</span>
            <span className="syn-type">String</span>
            <span className="text-muted">[] </span>
            <span className="syn-variable">args</span>
            <span className="text-muted">) &#123;</span>
          </p>
          <p className="pl-4">
            <span className="syn-type">System</span>
            <span className="text-muted">.out.</span>
            <span className="syn-function">println</span>
            <span className="text-muted">(</span>
            <span className="syn-string">&quot;Education loaded successfully.&quot;</span>
            <span className="text-muted">);</span>
          </p>
          <p><span className="text-muted">&#125;</span></p>
        </div>

        <p className="mt-2"><span className="text-muted">&#125;</span></p>

      </div>
    </div>
  )
}
