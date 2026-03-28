import Link from 'next/link'
import { X } from 'lucide-react'
import { TABS, type TabId } from '@/lib/tabs'

interface Props {
  openTabs: TabId[]
  activeTab: TabId
  onClose: (tabId: TabId, e: React.MouseEvent) => void
}

export function TabBar({ openTabs, activeTab, onClose }: Props) {
  return (
    <div className="shrink-0 flex h-8 bg-surface-container-low overflow-x-auto scrollbar-ide border-b border-outline-variant/30">
      {openTabs.map((tabId) => {
        const tab = TABS.find((t) => t.id === tabId)!
        const isActive = tabId === activeTab
        const Icon = tab.icon
        return (
          <div
            key={tabId}
            className={[
              'flex items-center gap-1 px-3 h-full font-sans text-[12px] tracking-wide shrink-0 group relative rounded-t-sm',
              isActive
                ? 'bg-surface border-t border-primary-container text-on-surface'
                : 'bg-surface-container-low border-t border-transparent text-on-surface-variant opacity-65 hover:opacity-100 hover:bg-surface-container-highest',
            ].join(' ')}
          >
            <Link href={`/?tab=${tab.id}`} className="flex items-center gap-1">
              <Icon size={12} className={tab.iconColor} />
              <span className="whitespace-nowrap pr-1 tracking-wide">{tab.label}</span>
            </Link>

            <button
              onClick={(e) => onClose(tabId, e)}
              className={[
                'flex items-center justify-center w-4 h-4 hover:bg-surface-container-high transition-opacity shrink-0',
                isActive ? 'opacity-40 hover:!opacity-100' : 'opacity-0 group-hover:opacity-60 hover:!opacity-100',
              ].join(' ')}
              aria-label={`Close ${tab.label}`}
            >
              <X size={11} />
            </button>
          </div>
        )
      })}
    </div>
  )
}
