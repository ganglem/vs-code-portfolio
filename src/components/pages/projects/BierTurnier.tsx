import { LineNumbers } from '@/components/LineNumbers'

export function BierTurnier() {
  return (
    <div className="code-page">
      <LineNumbers count={40} />

      <div className="code-content p-4 pb-12">
        <p className="syn-comment">/**</p>
        <p className="syn-comment"> * @project BierTurnier</p>
        <p className="syn-comment"> * @category Party App / Full Stack + Design</p>
        <p className="syn-comment"> * @link tournament.beer</p>
        <p className="syn-comment"> */</p>

        <p className="mt-4">
          <span className="syn-keyword">export const</span>{' '}
          <span className="syn-variable">BierTurnier</span>
          <span className="text-muted"> = {'{'}</span>
        </p>

        <div className="pl-6 mt-1 space-y-0.5">
          <p>
            <span className="syn-variable">description</span>
            <span className="text-muted">: </span>
            <span className="syn-string">&apos;Web app to create and track party games — also handled full UX/UI design, branding, logos, and graphic assets.&apos;</span>
            <span className="text-muted">,</span>
          </p>

          <p className="mt-2">
            <span className="syn-variable">stack</span>
            <span className="text-muted">: [</span>
            {['Next.js', 'TypeScript', 'Ruby on Rails', 'Docker', 'Supabase', 'Adobe Photoshop', 'Adobe Illustrator'].map((s, i, arr) => (
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
              <a href="https://github.com/MarkusThielker/bier-turnier" target="_blank" rel="noopener noreferrer" className="code-link">
                &apos;github.com/MarkusThielker/bier-turnier&apos;
              </a>
              <span className="text-muted">,</span>
            </p>
            <p>
              <span className="syn-variable">live</span>
              <span className="text-muted">: </span>
              <a href="https://tournament.beer" target="_blank" rel="noopener noreferrer" className="code-link">
                &apos;tournament.beer&apos;
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
