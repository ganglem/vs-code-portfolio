import type { LucideIcon } from 'lucide-react'
import { FileText, FileCode, Coffee, Sparkles, FolderOpen, Gem, Atom } from 'lucide-react'

export const TAB_IDS = ['introduction', 'experience', 'education', 'ropagen', 'findme', 'bierturnier', 'skills'] as const
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

export interface SidebarFolder {
  type: 'folder'
  id: string
  label: string
  icon: LucideIcon
  iconColor: string
  children: Tab[]
}

export type SidebarItem = Tab | SidebarFolder

export const TABS: Tab[] = [
  {
    id: 'introduction',
    label: 'Introduction.md',
    icon: FileText,
    iconColor: 'text-code-orange',
    language: 'Markdown',
  },
  {
    id: 'experience',
    label: 'Experience.py',
    icon: FileCode,
    iconColor: 'text-code-teal',
    language: 'Python 3',
  },
  {
    id: 'education',
    label: 'AcademicBackground.java',
    icon: Coffee,
    iconColor: 'text-code-orange',
    language: 'Java',
  },
  {
    id: 'ropagen',
    label: 'ROPAgen.tsx',
    icon: Atom,
    iconColor: 'text-code-blue',
    language: 'TypeScript',
  },
  {
    id: 'findme',
    label: 'FindMe.tsx',
    icon: Atom,
    iconColor: 'text-code-blue',
    language: 'TypeScript',
  },
  {
    id: 'bierturnier',
    label: 'BierTurnier.rb',
    icon: Gem,
    iconColor: 'text-code-red',
    language: 'Ruby',
  },
  {
    id: 'skills',
    label: 'Skills.tsx',
    icon: Sparkles,
    iconColor: 'text-code-blue',
    language: 'TypeScript',
    fillEditor: true,
  },
]

const t = (id: TabId) => TABS.find((tab) => tab.id === id)!

export const SIDEBAR_TREE: SidebarItem[] = [
  t('introduction'),
  t('experience'),
  t('education'),
  {
    type: 'folder',
    id: 'projects',
    label: 'Projects',
    icon: FolderOpen,
    iconColor: 'text-code-yellow',
    children: [t('ropagen'), t('findme'), t('bierturnier')],
  },
  t('skills'),
]

export const DEFAULT_TAB: TabId = 'introduction'

export function isValidTab(tab: string | undefined): tab is TabId {
  return TAB_IDS.includes(tab as TabId)
}
