'use client'

import dynamic from 'next/dynamic'
import { LineNumbers } from '@/components/LineNumbers'

const Gravity = dynamic(() => import('@/components/fancy/physics/gravity'), { ssr: false })
// @ts-ignore — MatterBody is a named export on the same module
const MatterBody = dynamic(
  () => import('@/components/fancy/physics/gravity').then((m) => m.MatterBody),
  { ssr: false }
)

const SKILL_GROUPS = [
  {
    label: 'Languages',
    color: 'bg-skill-lang text-white',
    skills: ['Python', 'TypeScript', 'JavaScript', 'Java', 'Bash'],
  },
  {
    label: 'Frameworks',
    color: 'bg-skill-fw text-white',
    skills: ['Next.js', 'React', 'Three.js', 'Tailwind CSS', 'Framer Motion', 'Apache Kafka', 'Supabase'],
  },
  {
    label: 'Tools',
    color: 'bg-skill-tools text-white',
    skills: ['Docker', 'Git', 'Jenkins', 'Figma', 'Adobe Suite', 'Burp Suite', 'Kali Linux'],
  },
  {
    label: 'Domains',
    color: 'bg-skill-domain text-white',
    skills: ['Cybersecurity', 'Penetration Testing', 'Full-Stack Dev', 'R&D', 'Agentic AI', 'LLMs'],
  },
]

// Flatten into a single list with group metadata
const ALL_BUBBLES = SKILL_GROUPS.flatMap((group) =>
  group.skills.map((skill) => ({ skill, color: group.color, label: group.label }))
)

export function Skills() {
  return (
    <div className="flex w-full h-full">
      <LineNumbers count={30} />
      <div className="relative flex-grow h-full">
        <Gravity gravity={{ x: 0, y: 0.5 }} className="w-full h-full">
          {ALL_BUBBLES.map(({ skill, color }) => (
            <MatterBody
              key={skill}
              bodyType="rectangle"
              x={`${10 + Math.random() * 80}%`}
              y={`${5 + Math.random() * 40}%`}
              matterBodyOptions={{ restitution: 0.4, friction: 0.05, density: 0.002 }}
            >
              <span
                className={`inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-3 font-mono text-xs sm:text-sm lg:text-base font-semibold tracking-wide rounded-full ${color} select-none whitespace-nowrap`}
              >
                {skill}
              </span>
            </MatterBody>
          ))}
        </Gravity>

        {/* Legend */}
        <div className="absolute bottom-4 right-4 flex flex-col gap-1.5 pointer-events-none">
          {SKILL_GROUPS.map((g) => (
            <div key={g.label} className="flex items-center gap-2">
              <span className={`w-2.5 h-2.5 rounded-full ${g.color}`} />
              <span className="font-mono text-[10px] text-muted opacity-60 uppercase tracking-widest">
                {g.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
