import type { LucideIcon } from 'lucide-react'
import { FileText, FileCode, FileCode2, FileJson, Sparkles } from 'lucide-react'

export const TAB_IDS = ['introduction', 'experience', 'education', 'projects', 'skills'] as const
export type TabId = (typeof TAB_IDS)[number]

export interface Tab {
  id: TabId
  /** Filename shown in the tab bar and sidebar */
  label: string
  /** Lucide icon component */
  icon: LucideIcon
  /** Tailwind text color class for the icon */
  iconColor: string
  /** Language shown in the status bar */
  language: string
  /**
   * When true the editor area uses overflow-hidden and fills to exact height
   * instead of scrolling. Use for canvas/physics/full-bleed pages.
   */
  fillEditor?: boolean
}

export const TABS: Tab[] = [
  {
    id: 'introduction',
    label: 'Introduction.md',
    icon: FileText,
    iconColor: 'text-tertiary',
    language: 'Markdown',
  },
  {
    id: 'experience',
    label: 'Experience.py',
    icon: FileCode,
    iconColor: 'text-[#4ec9b0]',
    language: 'Python 3',
  },
  {
    id: 'education',
    label: 'Education.ts',
    icon: FileCode2,
    iconColor: 'text-primary-container',
    language: 'TypeScript',
  },
  {
    id: 'projects',
    label: 'Projects.js',
    icon: FileJson,
    iconColor: 'text-[#dcdcaa]',
    language: 'JavaScript',
  },
  {
    id: 'skills',
    label: 'Skills.tsx',
    icon: Sparkles,
    iconColor: 'text-primary',
    language: 'TypeScript',
    fillEditor: true,
  },
]

export const DEFAULT_TAB: TabId = 'introduction'

export function isValidTab(tab: string | undefined): tab is TabId {
  return TAB_IDS.includes(tab as TabId)
}
