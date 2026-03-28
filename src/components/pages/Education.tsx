import { LineNumbers } from '@/components/LineNumbers'

export function Education() {
  return (
    <div className="code-page">
      <LineNumbers count={70} />

      <div className="code-content p-4 pb-12">

        {/* ── TypeScript prelude ───────────────────────────────────────── */}
        <p>
          <span className="syn-keyword">import</span>
          <span className="text-on-surface-variant"> &#123; </span>
          <span className="syn-type">Professional</span>
          <span className="text-on-surface-variant"> &#125; </span>
          <span className="syn-keyword">from</span>
          <span className="syn-string"> &apos;./core/identity&apos;</span>
          <span className="text-on-surface-variant">;</span>
        </p>

        <div className="mt-4">
          <p>
            <span className="syn-keyword">interface</span>{' '}
            <span className="syn-type">AcademicBackground</span>
            <span className="text-on-surface-variant"> &#123;</span>
          </p>
          {[
            ['institution', 'string'],
            ['degree', 'string'],
            ['focus', 'string[]'],
            ['graduationYear', 'number'],
          ].map(([field, type]) => (
            <p key={field} className="pl-4">
              <span className="syn-variable">{field}</span>
              <span className="text-on-surface-variant">: </span>
              <span className="syn-type">{type}</span>
              <span className="text-on-surface-variant">;</span>
            </p>
          ))}
          <p><span className="text-on-surface-variant">&#125;</span></p>
        </div>

        {/* ── Bento grid ───────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-8">

          {/* Main education card */}
          <div className="lg:col-span-2 bg-surface-container border-l-4 border-primary-container p-6 shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <span className="material-symbols-outlined" style={{ fontSize: '6rem' }}>school</span>
            </div>
            <div className="relative z-10">
              <h2 className="font-headline font-extrabold text-2xl text-primary tracking-tight mb-1">
                Ulm University
              </h2>
              <p className="text-on-surface-variant font-mono text-base mb-1">
                M.Sc. Computer Science{' '}
                <span className="text-xs opacity-60">— Oct 2023 – Jun 2026</span>
              </p>
              <p className="text-on-surface-variant font-mono text-xs mb-4 opacity-70 leading-relaxed">
                Thesis: &ldquo;Assessing the Effectiveness of Large Language Model Support for Generating GDPR ROPA Documentation&rdquo;
              </p>
              <p className="text-on-surface-variant font-mono text-sm mb-1 border-t border-outline-variant/20 pt-3 opacity-80">
                B.Sc. Software Engineering{' '}
                <span className="text-xs opacity-60">— Oct 2019 – Jul 2023</span>
              </p>
              <p className="text-on-surface-variant font-mono text-xs mb-4 opacity-60 leading-relaxed">
                Thesis: &ldquo;Comparing different vehicle architectures based on attack path analysis&rdquo; (co-op with Mercedes-Benz Tech Innovation)
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {['System Architecture', 'Cybersecurity', 'Interaction Design', 'LLM Research'].map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-surface-container-high text-secondary text-xs font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="bg-surface-container-lowest p-3 font-mono text-xs border border-outline-variant/20">
                <span className="syn-comment">// Key Focus Areas</span>
                <br />
                <span className="text-on-surface-variant">
                  Vehicular Security, Trust Management in VANETs, GDPR Automation, Advanced UI Engineering
                </span>
              </div>
            </div>
          </div>

          {/* Skills sidebar card */}
          <div className="bg-surface-container p-5 border-l-4 border-tertiary shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-headline font-bold text-xs tracking-widest text-tertiary uppercase">
                Skills.json
              </h3>
              <span className="material-symbols-outlined text-tertiary text-[15px]">terminal</span>
            </div>
            <div className="space-y-3 font-mono text-[11px] leading-tight text-on-surface-variant">
              <div>
                <span className="syn-keyword">&quot;languages&quot;</span>
                <span className="text-on-surface-variant">: [</span>
                <br />
                <span className="pl-4 syn-string">&quot;Python&quot;</span>
                <span className="text-on-surface-variant">, </span>
                <span className="syn-string">&quot;TypeScript&quot;</span>
                <span className="text-on-surface-variant">, </span>
                <span className="syn-string">&quot;Java&quot;</span>
                <br />
                <span className="text-on-surface-variant">],</span>
              </div>
              <div>
                <span className="syn-keyword">&quot;frameworks&quot;</span>
                <span className="text-on-surface-variant">: [</span>
                <br />
                <span className="pl-4 syn-string">&quot;Next.js&quot;</span>
                <span className="text-on-surface-variant">, </span>
                <span className="syn-string">&quot;React.js&quot;</span>
                <span className="text-on-surface-variant">, </span>
                <span className="syn-string">&quot;Three.js&quot;</span>
                <span className="text-on-surface-variant">,</span>
                <br />
                <span className="pl-4 syn-string">&quot;Framer Motion&quot;</span>
                <span className="text-on-surface-variant">, </span>
                <span className="syn-string">&quot;Supabase&quot;</span>
                <span className="text-on-surface-variant">, </span>
                <span className="syn-string">&quot;Kafka&quot;</span>
                <br />
                <span className="text-on-surface-variant">],</span>
              </div>
              <div>
                <span className="syn-keyword">&quot;tools&quot;</span>
                <span className="text-on-surface-variant">: [</span>
                <br />
                <span className="pl-4 syn-string">&quot;Docker&quot;</span>
                <span className="text-on-surface-variant">, </span>
                <span className="syn-string">&quot;Git&quot;</span>
                <span className="text-on-surface-variant">, </span>
                <span className="syn-string">&quot;Jenkins&quot;</span>
                <span className="text-on-surface-variant">,</span>
                <br />
                <span className="pl-4 syn-string">&quot;Kali Linux&quot;</span>
                <span className="text-on-surface-variant">, </span>
                <span className="syn-string">&quot;Burp Suite&quot;</span>
                <span className="text-on-surface-variant">, </span>
                <span className="syn-string">&quot;Figma&quot;</span>
                <br />
                <span className="text-on-surface-variant">]</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Export statement ─────────────────────────────────────────── */}
        <div>
          <p>
            <span className="syn-keyword">export const</span>{' '}
            <span className="syn-variable">me</span>
            <span className="text-on-surface-variant">: </span>
            <span className="syn-type">Professional</span>
            <span className="text-on-surface-variant"> = &#123;</span>
          </p>
          <p className="pl-4">
            <span className="syn-variable">fullName</span>
            <span className="text-on-surface-variant">: </span>
            <span className="syn-string">&apos;Emilija Kastratović&apos;</span>
            <span className="text-on-surface-variant">,</span>
          </p>
          <p className="pl-4">
            <span className="syn-variable">status</span>
            <span className="text-on-surface-variant">: </span>
            <span className="syn-string">&apos;Open to opportunities&apos;</span>
            <span className="text-on-surface-variant">,</span>
          </p>
          <p><span className="text-on-surface-variant">&#125;;</span></p>
        </div>

        {/* ── CTA block ────────────────────────────────────────────────── */}
        <div className="mt-10 mr-4 p-8 bg-gradient-to-br from-surface to-surface-container-high flex flex-col items-center justify-center text-center border border-outline-variant/10">
          <div className="w-14 h-14 mb-4 flex items-center justify-center bg-primary-container text-on-primary-container">
            <span className="material-symbols-outlined text-2xl">terminal</span>
          </div>
          <h3 className="font-headline font-black text-3xl mb-2 text-on-surface">
            BUILD_THE_FUTURE()
          </h3>
          <p className="text-on-surface-variant font-mono max-w-md mb-6 text-xs">
            Compiling expertise into production-ready solutions.
          </p>
          <a
            href="mailto:emilija1705@gmail.com"
            className="bg-gradient-to-r from-primary to-primary-container text-on-primary-container font-mono px-8 py-2.5 font-bold text-sm hover:opacity-90 transition-opacity"
          >
            INITIALIZE_CONTACT
          </a>
        </div>

      </div>
    </div>
  )
}
