import { LineNumbers } from '@/components/LineNumbers'

export function ROPAgen() {
  return (
    <div className="code-page">
      <LineNumbers count={40} />

      <div className="code-content p-4 pb-12">
        <p className="syn-comment">/**</p>
        <p className="syn-comment"> * @project ROPAgen</p>
        <p className="syn-comment"> * @category GDPR Compliance / Full Stack</p>
        <p className="syn-comment"> * @link ropagen.eu</p>
        <p className="syn-comment"> */</p>

        <p className="mt-4">
          <span className="syn-keyword">export const</span>{' '}
          <span className="syn-variable">ROPAgen</span>
          <span className="text-muted"> = {'{'}</span>
        </p>

        <div className="pl-6 mt-1 space-y-0.5">
          <p>
            <span className="syn-variable">description</span>
            <span className="text-muted">: </span>
            <span className="syn-string">&apos;Self-hosted, LLM-driven GDPR ROPA document generation platform built at Ulm University (DBIS). Features integrated AI chatbots and automated compliance workflows.&apos;</span>
            <span className="text-muted">,</span>
          </p>

          <p className="mt-2">
            <span className="syn-variable">stack</span>
            <span className="text-muted">: [</span>
            {['Next.js', 'TypeScript', 'Docker', 'Supabase', 'OpenRouter', 'CI/CD'].map((s, i, arr) => (
              <span key={s}>
                <span className="syn-string">&apos;{s}&apos;</span>
                {i < arr.length - 1 && <span className="text-muted">, </span>}
              </span>
            ))}
            <span className="text-muted">],</span>
          </p>

          <p className="mt-2">
            <span className="syn-variable">links</span>
            <span className="text-muted">: {'{'}</span>
          </p>
          <div className="pl-6 space-y-0.5">
            <p>
              <span className="syn-variable">github</span>
              <span className="text-muted">: </span>
              <a href="https://github.com/ganglem/ROPAgen" target="_blank" rel="noopener noreferrer" className="code-link">
                &apos;github.com/ganglem/ROPAgen&apos;
              </a>
              <span className="text-muted">,</span>
            </p>
            <p>
              <span className="syn-variable">live</span>
              <span className="text-muted">: </span>
              <a href="https://ropagen.eu" target="_blank" rel="noopener noreferrer" className="code-link">
                &apos;ropagen.eu&apos;
              </a>
              <span className="text-muted">,</span>
            </p>
          </div>
          <p><span className="text-muted">{'}'}</span><span className="text-muted">,</span></p>
        </div>

        <p className="mt-1"><span className="text-muted">{'}'}</span></p>
      </div>
    </div>
  )
}
