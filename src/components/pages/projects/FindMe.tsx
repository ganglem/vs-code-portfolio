import { LineNumbers } from '@/components/LineNumbers'

export function FindMe() {
  return (
    <div className="code-page">
      <LineNumbers count={40} />

      <div className="code-content p-4 pb-12">
        <p className="syn-comment">/**</p>
        <p className="syn-comment"> * @project FIND.ME</p>
        <p className="syn-comment"> * @category Festival App / Full Stack</p>
        <p className="syn-comment"> * @link festival-find.me</p>
        <p className="syn-comment"> */</p>

        <p className="mt-4">
          <span className="syn-keyword">export const</span>{' '}
          <span className="syn-variable">FindMe</span>
          <span className="text-muted"> = {'{'}</span>
        </p>

        <div className="pl-6 mt-1 space-y-0.5">
          <p>
            <span className="syn-variable">description</span>
            <span className="text-muted">: </span>
            <span className="syn-string">&apos;Digital festival companion — live track friends&apos; stage location, view all acts, mark favorites, and manage profiles.&apos;</span>
            <span className="text-muted">,</span>
          </p>

          <p className="mt-2">
            <span className="syn-variable">stack</span>
            <span className="text-muted">: [</span>
            {['Next.js', 'TypeScript', 'Docker', 'Supabase'].map((s, i, arr) => (
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
              <a href="https://github.com/ganglem/findme" target="_blank" rel="noopener noreferrer" className="code-link">
                &apos;github.com/ganglem/findme&apos;
              </a>
              <span className="text-muted">,</span>
            </p>
            <p>
              <span className="syn-variable">live</span>
              <span className="text-muted">: </span>
              <a href="https://festival-find.me" target="_blank" rel="noopener noreferrer" className="code-link">
                &apos;festival-find.me&apos;
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
