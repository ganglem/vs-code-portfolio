'use client'

import { useRef } from 'react'
import { Mail, MapPin, Calendar } from 'lucide-react'

function GithubIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

function LinkedinIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}
import Typewriter from '@/components/fancy/text/typewriter'
import BorderGlow from '@/components/fancy/ui/BorderGlow'

const CARD_BG = 'var(--bg-editor)'
const GLOW_COLORS = ['#ffffff', '#e8e8e8', '#d0d0d0']
const GLOW_COLOR = '0 0 95'

function BentoCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)

  function onMouseMove(e: React.MouseEvent) {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    ref.current.style.transform = `perspective(800px) rotateX(${(-y * 8).toFixed(2)}deg) rotateY(${(x * 8).toFixed(2)}deg) translateZ(4px)`
  }

  function onMouseLeave() {
    if (!ref.current) return
    ref.current.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0px)'
  }

  return (
    <div ref={ref} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave} style={{ transition: 'transform 0.15s ease-out' }} className={className}>
      <BorderGlow
        borderRadius={50}
        backgroundColor={CARD_BG}
        colors={GLOW_COLORS}
        glowColor={GLOW_COLOR}
        glowIntensity={0.8}
        animated={false}
        className="h-full w-full p-6"
      >
        {children}
      </BorderGlow>
    </div>
  )
}

export function Introduction() {
  return (
    <div className="min-h-full p-6 flex flex-col gap-6 font-mono">

      {/* Typewriter header */}
      <div className="flex justify-center pt-2">
        <Typewriter
          text={['Welcome! 🪩', 'Welcome! 💻', 'Welcome! ✨', 'Welcome! 🔐', 'Welcome! 💫', 'Welcome! 🎮']}
          speed={60}
          deleteSpeed={30}
          waitTime={1800}
          showCursor
          cursorChar="_"
          cursorClassName="ml-0.5 text-code-blue"
          className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight"
        />
      </div>

      {/* Bento grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        {/* Hero — name + title */}
        <BentoCard className="md:col-span-2">
          <div className="flex flex-col justify-center h-full gap-2 min-h-[160px]">
            <p className="text-xs text-muted opacity-50 uppercase tracking-widest">
              Software Engineer &amp; Cybersecurity Researcher
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight">
              Emilija<br />Kastratović
            </h1>
            <p className="text-sm text-muted opacity-60 mt-1">
              Full-Stack · Pentesting · R&amp;D · LLM / AI
            </p>
          </div>
        </BentoCard>

        {/* Photo placeholder */}
        <BentoCard>
          <div className="flex items-center justify-center h-full min-h-[160px]">
            <div className="w-28 h-28 rounded-full bg-surface-container flex items-center justify-center border border-subtle/20">
              <span className="text-4xl">👩‍💻</span>
            </div>
          </div>
        </BentoCard>

        {/* Date + Location */}
        <BentoCard>
          <div className="flex flex-col gap-3 h-full justify-center min-h-[120px]">
            <div className="flex items-center gap-2 text-muted">
              <Calendar size={14} className="shrink-0 opacity-60" />
              <span className="text-sm">17.05.2001</span>
            </div>
            <div className="flex items-center gap-2 text-muted">
              <MapPin size={14} className="shrink-0 opacity-60" />
              <span className="text-sm">Belgrade → Ulm</span>
            </div>
          </div>
        </BentoCard>

        {/* Bio */}
        <BentoCard>
          <div className="flex flex-col justify-center h-full min-h-[120px]">
            <p className="text-sm text-muted leading-relaxed opacity-70 italic">
              &ldquo;...&rdquo;
            </p>
          </div>
        </BentoCard>

        {/* Socials */}
        <BentoCard>
          <div className="flex flex-col justify-center gap-3 h-full min-h-[120px]">
            <a href="https://github.com/ganglem" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors group">
              <span className="opacity-60 group-hover:opacity-100 transition-opacity"><GithubIcon /></span>
              <span>github.com/ganglem</span>
            </a>
            <a href="https://linkedin.com/in/emilija-kastratovic" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors group">
              <span className="opacity-60 group-hover:opacity-100 transition-opacity"><LinkedinIcon /></span>
              <span>emilija-kastratovic</span>
            </a>
            <a href="mailto:hello@emilija.dev"
              className="flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors group">
              <Mail size={15} className="opacity-60 group-hover:opacity-100 transition-opacity" />
              <span>hello@emilija.dev</span>
            </a>
          </div>
        </BentoCard>

      </div>
    </div>
  )
}
