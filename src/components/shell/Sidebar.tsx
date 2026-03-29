'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { X, ChevronDown, Sun, Moon } from 'lucide-react'
import { TABS, type TabId } from '@/lib/tabs'

const MIN_WIDTH = 160
const MAX_WIDTH = 480

interface Props {
  open: boolean
  view: 'explorer' | 'settings'
  activeTab: TabId
  folderOpen: boolean
  isDark: boolean
  width: number
  onClose: () => void
  onFolderToggle: () => void
  onToggleTheme: () => void
  onWidthChange: (w: number) => void
}

export function Sidebar({ open, view, activeTab, folderOpen, isDark, width, onClose, onFolderToggle, onToggleTheme, onWidthChange }: Props) {
  const dragging = useRef(false)

  function startResize(e: React.PointerEvent) {
    dragging.current = true
    const startX = e.clientX
    const startWidth = width

    function onMove(ev: PointerEvent) {
      if (!dragging.current) return
      const next = Math.min(MAX_WIDTH, Math.max(MIN_WIDTH, startWidth + ev.clientX - startX))
      onWidthChange(next)
    }
    function onUp() {
      dragging.current = false
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerup', onUp)
    }
    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerup', onUp)
  }

  return (
    <aside
      style={{ width: open ? width : 0 }}
      className={[
        'absolute lg:relative inset-y-0 left-0 z-50',
        'flex flex-col font-sans text-[13px] tracking-tight shrink-0 overflow-hidden',
        'bg-surface-container-low border-r border-outline-variant/30',
        'transition-[transform,width] duration-200 ease-in-out',
        open ? 'translate-x-0' : '-translate-x-full lg:translate-x-0',
      ].join(' ')}
    >
      <div className="flex flex-col h-full" style={{ width }}>
        {/* Panel header */}
        <div className="flex items-center justify-between px-4 py-2 shrink-0">
          <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-on-surface-variant opacity-60">
            {view === 'settings' ? 'Settings' : 'Explorer'}
          </span>
          <button
            className="lg:hidden text-on-surface-variant hover:text-on-surface"
            onClick={onClose}
          >
            <X size={14} />
          </button>
        </div>

        {view === 'explorer' ? (
          <div className="flex flex-col overflow-y-auto scrollbar-ide">
            <button
              onClick={onFolderToggle}
              className="flex items-center gap-1 px-2 py-0.5 bg-surface-container-low text-on-surface-variant shrink-0 w-full text-left hover:bg-surface-container transition-colors"
            >
              <ChevronDown size={15} className={`transition-transform duration-150 ${folderOpen ? 'rotate-0' : '-rotate-90'}`} />
              <span className="text-[11px] font-sans font-bold uppercase tracking-tight">Portfolio</span>
            </button>

            {folderOpen && (
              <div className="flex flex-col">
                {TABS.map((tab) => {
                  const isActive = tab.id === activeTab
                  const Icon = tab.icon
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
                      <Icon size={15} className={`${tab.iconColor} transition-opacity ${isActive ? 'opacity-100' : 'opacity-50 group-hover:opacity-100'}`} />
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
                {isDark ? <Sun size={18} className="text-primary shrink-0" /> : <Moon size={18} className="text-primary shrink-0" />}
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

      {/* Resize handle — desktop only */}
      <div
        onPointerDown={startResize}
        className="hidden lg:block absolute right-0 top-0 h-full w-1 cursor-col-resize hover:bg-primary/40 active:bg-primary/60 transition-colors z-10"
      />
    </aside>
  )
}
