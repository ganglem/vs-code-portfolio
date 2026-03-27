import { LineNumbers } from '@/components/LineNumbers'

interface Project {
  varName: string
  name: string
  category: string
  stack: string[]
  description: string
  githubHref: string
  liveHref: string
}

const PROJECTS: Project[] = [
  {
    varName: 'projectAlpha',
    name: 'Project Alpha',
    category: 'Category / Domain',
    stack: ['Next.js', 'TypeScript', 'Prisma'],
    description: 'One-line description of what this project does.',
    githubHref: '#',
    liveHref: '#',
  },
  {
    varName: 'projectBeta',
    name: 'Project Beta',
    category: 'Category / Domain',
    stack: ['React Native', 'Node', 'Socket.io'],
    description: 'One-line description of what this project does.',
    githubHref: '#',
    liveHref: '#',
  },
]

export function Projects() {
  return (
    <div className="flex min-h-full font-mono text-sm leading-6">
      <LineNumbers count={65} />

      <div className="flex-grow p-4 pb-12">

        {/* ── File header ──────────────────────────────────────────────── */}
        <p>
          <span className="syn-keyword">import</span>
          <span className="text-on-surface-variant"> &#123; Code, ExternalLink &#125; </span>
          <span className="syn-keyword">from</span>
          <span className="syn-string"> &apos;portfolio-ui&apos;</span>
          <span className="text-on-surface-variant">;</span>
        </p>
        <p className="mt-3 syn-comment">/**</p>
        <p className="syn-comment"> * @name Your Name</p>
        <p className="syn-comment"> * @role Your Title</p>
        <p className="syn-comment"> */</p>

        <p className="mt-4">
          <span className="syn-keyword">export const</span>{' '}
          <span className="syn-variable">projects</span>
          <span className="text-on-surface-variant"> = [</span>
        </p>

        {/* ── Project entries ───────────────────────────────────────────── */}
        {PROJECTS.map((project) => (
          <div key={project.varName} className="pl-3 mt-4">
            <p><span className="text-on-surface-variant">&#123;</span></p>

            <div className="pl-3 space-y-0.5">
              <p>
                <span className="syn-variable">name</span>
                <span className="text-on-surface-variant">: </span>
                <span className="syn-string">&apos;{project.name}&apos;</span>
                <span className="text-on-surface-variant">,</span>
              </p>
              <p>
                <span className="syn-variable">category</span>
                <span className="text-on-surface-variant">: </span>
                <span className="syn-string">&apos;{project.category}&apos;</span>
                <span className="text-on-surface-variant">,</span>
              </p>
              <p>
                <span className="syn-variable">techStack</span>
                <span className="text-on-surface-variant">: [</span>
                {project.stack.map((s, i) => (
                  <span key={s}>
                    <span className="syn-string">&apos;{s}&apos;</span>
                    {i < project.stack.length - 1 && (
                      <span className="text-on-surface-variant">, </span>
                    )}
                  </span>
                ))}
                <span className="text-on-surface-variant">],</span>
              </p>
              <p>
                <span className="syn-variable">description</span>
                <span className="text-on-surface-variant">: </span>
                <span className="syn-string">&apos;{project.description}&apos;</span>
                <span className="text-on-surface-variant">,</span>
              </p>
              <p>
                <span className="syn-variable">links</span>
                <span className="text-on-surface-variant">: &#123;</span>
              </p>
              <div className="pl-3">
                <p>
                  <span className="syn-variable">github</span>
                  <span className="text-on-surface-variant">: </span>
                  <a
                    href={project.githubHref}
                    className="syn-string underline decoration-dotted decoration-on-surface-variant hover:text-primary transition-colors"
                  >
                    &apos;github.com/you/{project.varName}&apos;
                  </a>
                  <span className="text-on-surface-variant">,</span>
                </p>
                <p>
                  <span className="syn-variable">live</span>
                  <span className="text-on-surface-variant">: </span>
                  <a
                    href={project.liveHref}
                    className="syn-string underline decoration-dotted decoration-on-surface-variant hover:text-primary transition-colors"
                  >
                    &apos;your-project.io&apos;
                  </a>
                </p>
              </div>
              <p><span className="text-on-surface-variant">&#125;,</span></p>

              {/* Preview image placeholder */}
              <p>
                <span className="syn-variable">preview</span>
                <span className="text-on-surface-variant">: (</span>
              </p>
              <div className="my-3 border border-outline-variant/20 bg-surface-container-low relative overflow-hidden max-w-2xl group">
                <div className="w-full h-40 lg:h-56 flex items-center justify-center bg-surface-container">
                  <span className="text-[11px] font-mono text-on-surface-variant opacity-30 uppercase tracking-widest">
                    project screenshot
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest to-transparent opacity-50" />
              </div>
              <p><span className="text-on-surface-variant">)</span></p>
            </div>

            <p><span className="text-on-surface-variant">&#125;,</span></p>
          </div>
        ))}

        <p className="mt-2"><span className="text-on-surface-variant">];</span></p>
      </div>
    </div>
  )
}
