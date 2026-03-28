export const TAB_IDS = ['introduction', 'experience', 'education', 'projects'] as const
export type TabId = (typeof TAB_IDS)[number]

export interface Tab {
  id: TabId
  /** Filename shown in the tab bar and sidebar */
  label: string
  /** Material Symbol icon name */
  icon: string
  /** Tailwind text color class for the icon */
  iconColor: string
  /** Tailwind text size class for the sidebar icon, defaults to text-[14px] */
  iconSize?: string
  /** Language shown in the status bar */
  language: string
}

export const TABS: Tab[] = [
  {
    id: 'introduction',
    label: 'Introduction.md',
    icon: 'description',
    iconColor: 'text-tertiary',
    language: 'Markdown',
  },
  {
    id: 'experience',
    label: 'Experience.py',
    icon: 'code',
    iconColor: 'text-[#4ec9b0]',
    language: 'Python 3',
  },
  {
    id: 'education',
    label: 'Education.ts',
    icon: 'javascript',
    iconColor: 'text-primary-container',
    language: 'TypeScript',
  },
  {
    id: 'projects',
    label: 'Projects.js',
    icon: 'javascript',
    iconColor: 'text-[#dcdcaa]',
    language: 'JavaScript',
  },
]

export const DEFAULT_TAB: TabId = 'introduction'

export function isValidTab(tab: string | undefined): tab is TabId {
  return TAB_IDS.includes(tab as TabId)
}
