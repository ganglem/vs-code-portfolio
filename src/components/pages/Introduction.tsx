'use client'

import { useRef } from 'react'
import Image from 'next/image'
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

      {/* Typewriter header — left aligned */}
      <div>
        <Typewriter
          text={['Welcome! 🪩', 'Welcome! 💻', 'Welcome! ✨', 'Welcome! 🧠']}
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

        {/* Picture — 1/3 width, 2 rows tall */}
        <BentoCard className="md:row-span-2">
          <div className="relative h-full min-h-[320px] rounded-[26px] overflow-hidden">
            <Image
              src="/picture.jpg"
              alt="Emilija Kastratović"
              fill
              className="object-cover"
            />
          </div>
        </BentoCard>

        {/* Name + tagline */}
        <BentoCard className="md:col-span-2">
          <div className="flex flex-col justify-center h-full gap-2 min-h-[150px]">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight">
              Emilija<br />Kastratović
            </h1>
            <p className="text-sm text-muted opacity-60 mt-1">
              computer science student and tech enthusiast
            </p>
          </div>
        </BentoCard>

        {/* Description */}
        <BentoCard className="md:col-span-2">
          <div className="flex flex-col justify-center h-full min-h-[150px]">
            <p className="text-sm text-muted leading-relaxed opacity-70">
              Master&apos;s student in Computer Science with 4+ years of practical experience
              in Cybersecurity and Software Engineering who brings a creative and analytical
              mindset to technical problem-solving.
            </p>
          </div>
        </BentoCard>

      </div>

    </div>
  )
}
