import type { LucideIcon } from 'lucide-react'
import { FileText, FileCode, FileCode2, FileJson } from 'lucide-react'

export const TAB_IDS = ['introduction', 'experience', 'education', 'projects'] as const
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
]

export const DEFAULT_TAB: TabId = 'introduction'

export function isValidTab(tab: string | undefined): tab is TabId {
  return TAB_IDS.includes(tab as TabId)
}
