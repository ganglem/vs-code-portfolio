import Link from 'next/link'
import { TABS, type TabId } from '@/lib/tabs'

interface Props {
  open: boolean
  view: 'explorer' | 'settings'
  activeTab: TabId
  folderOpen: boolean
  isDark: boolean
  onClose: () => void
  onFolderToggle: () => void
  onToggleTheme: () => void
}

export function Sidebar({ open, view, activeTab, folderOpen, isDark, onClose, onFolderToggle, onToggleTheme }: Props) {
  return (
    <aside
      className={[
        'absolute lg:relative inset-y-0 left-0 z-50',
        'flex flex-col font-sans text-[13px] tracking-tight shrink-0 w-56 overflow-hidden',
        'bg-surface-container-low border-r border-outline-variant/30',
        'transition-[transform,width] duration-200 ease-in-out',
        open ? 'translate-x-0' : '-translate-x-full lg:translate-x-0 lg:w-0',
      ].join(' ')}
    >
      <div className="w-56 flex flex-col h-full">
        {/* Panel header */}
        <div className="flex items-center justify-between px-4 py-2 shrink-0">
          <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-on-surface-variant opacity-60">
            {view === 'settings' ? 'Settings' : 'Explorer'}
          </span>
          <button
            className="lg:hidden text-on-surface-variant hover:text-on-surface"
            onClick={onClose}
          >
            <span className="material-symbols-outlined text-[11px]" style={{ fontVariationSettings: "'wght' 200" }}>close</span>
          </button>
        </div>

        {view === 'explorer' ? (
          <div className="flex flex-col overflow-y-auto scrollbar-ide">
            <button
              onClick={onFolderToggle}
              className="flex items-center gap-1 px-2 py-0.5 bg-surface-container-low text-on-surface-variant shrink-0 w-full text-left hover:bg-surface-container transition-colors"
            >
              <span className={`material-symbols-outlined text-[15px] transition-transform duration-150 ${folderOpen ? 'rotate-0' : '-rotate-90'}`} style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 20" }}>
                keyboard_arrow_down
              </span>
              <span className="text-[11px] font-sans font-bold uppercase tracking-tight">Portfolio</span>
            </button>

            {folderOpen && (
              <div className="flex flex-col">
                {TABS.map((tab) => {
                  const isActive = tab.id === activeTab
                  return (
                    <Link
                      key={tab.id}
                      href={`/?tab=${tab.id}`}
                      onClick={() => { if (window.innerWidth < 1024) onClose() }}
                      className={[
                        'group flex items-center gap-1 px-2 py-0.5 mx-1 transition-colors whitespace-nowrap tracking-wide rounded-xl',
                        isActive
                          ? 'bg-surface-container-highest text-on-surface'
                          : 'text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface',
                      ].join(' ')}
                    >
                      <span className={`material-symbols-outlined ${tab.iconSize ?? 'text-[15px]'} ${tab.iconColor} transition-opacity ${isActive ? 'opacity-100' : 'opacity-50 group-hover:opacity-100'}`} style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 20" }}>
                        {tab.icon}
                      </span>
                      <span>{tab.label}</span>
                    </Link>
                  )
                })}
              </div>
            )}
          </div>
        ) : (
          <div className="flex flex-col overflow-y-auto scrollbar-ide">
            <div className="px-2 pt-3 pb-1">
              <p className="text-[10px] font-sans font-bold uppercase tracking-widest text-on-surface-variant opacity-40 px-2 pb-1">
                Appearance
              </p>
              <button
                onClick={onToggleTheme}
                className="flex items-center gap-3 px-2 py-2.5 w-full text-left hover:bg-surface-container-highest transition-colors rounded-xl"
              >
                <span className="material-symbols-outlined text-[18px] text-primary shrink-0">
                  {isDark ? 'light_mode' : 'dark_mode'}
                </span>
                <div>
                  <p className="font-mono text-[12px] text-on-surface leading-tight">
                    {isDark ? 'Light Theme' : 'Dark Theme'}
                  </p>
                  <p className="font-mono text-[10px] text-on-surface-variant opacity-50 leading-tight">
                    Switch color theme
                  </p>
                </div>
              </button>
            </div>
          </div>
        )}
      </div>
    </aside>
  )
}
