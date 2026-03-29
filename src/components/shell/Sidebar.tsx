'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { X, ChevronDown, Sun, Moon, FolderOpen, Folder } from 'lucide-react'
import { SIDEBAR_TREE, type TabId, type Tab, type SidebarFolder } from '@/lib/tabs'

const MIN_WIDTH = 160
const MAX_WIDTH = 480

interface Props {
  open: boolean
  view: 'explorer' | 'settings'
  activeTab: TabId
  isDark: boolean
  width: number
  onClose: () => void
  onToggleTheme: () => void
  onWidthChange: (w: number) => void
}

function FileItem({ tab, isActive, onClose }: { tab: Tab; isActive: boolean; onClose: () => void }) {
  const Icon = tab.icon
  return (
    <Link
      href={`/?tab=${tab.id}`}
      onClick={() => { if (window.innerWidth < 1024) onClose() }}
      className={[
        'group flex items-center gap-1 px-2 py-0.5 mx-1 transition-colors whitespace-nowrap tracking-wide rounded-xl',
        isActive
          ? 'bg-surface-container-highest text-foreground'
          : 'text-muted hover:bg-surface-container-high hover:text-foreground',
      ].join(' ')}
    >
      <Icon size={15} className={`${tab.iconColor} transition-opacity ${isActive ? 'opacity-100' : 'opacity-50 group-hover:opacity-100'}`} />
      <span>{tab.label}</span>
    </Link>
  )
}

function FolderItem({ folder, activeTab, onClose }: { folder: SidebarFolder; activeTab: TabId; onClose: () => void }) {
  const [open, setOpen] = useState(true)
  const hasActive = folder.children.some((c) => c.id === activeTab)

  return (
    <div>
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1 px-2 py-0.5 bg-surface-container-low text-muted shrink-0 w-full text-left hover:bg-surface-container transition-colors"
      >
        <ChevronDown size={15} className={`transition-transform duration-150 ${open ? 'rotate-0' : '-rotate-90'}`} />
        {open
          ? <FolderOpen size={15} className={`${folder.iconColor} ${hasActive ? 'opacity-100' : 'opacity-60'}`} />
          : <Folder size={15} className={`${folder.iconColor} ${hasActive ? 'opacity-100' : 'opacity-60'}`} />
        }
        <span className="text-[13px] font-sans">{folder.label}</span>
      </button>

      {open && (
        <div className="flex flex-col pl-3">
          {folder.children.map((tab) => (
            <FileItem key={tab.id} tab={tab} isActive={tab.id === activeTab} onClose={onClose} />
          ))}
        </div>
      )}
    </div>
  )
}

function PortfolioTree({ activeTab, onClose }: { activeTab: TabId; onClose: () => void }) {
  const [open, setOpen] = useState(true)
  return (
    <div className="flex flex-col overflow-y-auto scrollbar-ide">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1 px-2 py-0.5 bg-surface-container-low text-muted shrink-0 w-full text-left hover:bg-surface-container transition-colors"
      >
        <ChevronDown size={15} className={`transition-transform duration-150 ${open ? 'rotate-0' : '-rotate-90'}`} />
        <span className="text-[11px] font-sans font-bold uppercase tracking-tight">Portfolio</span>
      </button>

      {open && (
        <div className="flex flex-col">
          {SIDEBAR_TREE.map((item) =>
            'type' in item && item.type === 'folder' ? (
              <FolderItem key={item.id} folder={item} activeTab={activeTab} onClose={onClose} />
            ) : (
              <FileItem key={(item as Tab).id} tab={item as Tab} isActive={(item as Tab).id === activeTab} onClose={onClose} />
            )
          )}
        </div>
      )}
    </div>
  )
}

export function Sidebar({ open, view, activeTab, isDark, width, onClose, onToggleTheme, onWidthChange }: Props) {
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
        'bg-surface-container-low border-r border-subtle/30',
        'transition-[transform,width] duration-200 ease-in-out',
        open ? 'translate-x-0' : '-translate-x-full lg:translate-x-0',
      ].join(' ')}
    >
      <div className="flex flex-col h-full" style={{ width }}>
        {/* Panel header */}
        <div className="flex items-center justify-between px-4 py-2 shrink-0">
          <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-muted opacity-60">
            {view === 'settings' ? 'Settings' : 'Explorer'}
          </span>
          <button
            className="lg:hidden text-muted hover:text-foreground"
            onClick={onClose}
          >
            <X size={14} />
          </button>
        </div>

        {view === 'explorer' ? (
          <PortfolioTree activeTab={activeTab} onClose={onClose} />
        ) : (
          <div className="flex flex-col overflow-y-auto scrollbar-ide">
            <div className="px-2 pt-3 pb-1">
              <p className="text-[10px] font-sans font-bold uppercase tracking-widest text-muted opacity-40 px-2 pb-1">
                Appearance
              </p>
              <button
                onClick={onToggleTheme}
                className="flex items-center gap-3 px-2 py-2.5 w-full text-left hover:bg-surface-container-highest transition-colors rounded-xl"
              >
                {isDark ? <Sun size={18} className="text-code-blue shrink-0" /> : <Moon size={18} className="text-code-blue shrink-0" />}
                <div>
                  <p className="font-mono text-[12px] text-foreground leading-tight">
                    {isDark ? 'Light Theme' : 'Dark Theme'}
                  </p>
                  <p className="font-mono text-[10px] text-muted opacity-50 leading-tight">
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
        className="hidden lg:block absolute right-0 top-0 h-full w-1 cursor-col-resize hover:bg-code-blue/40 active:bg-code-blue/60 transition-colors z-10"
      />
    </aside>
  )
}
