'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { TABS, type TabId } from '@/lib/tabs'

interface Props {
  activeTab: TabId
  children: React.ReactNode
}

export function VSCodeShell({ activeTab, children }: Props) {
  const router = useRouter()
  const [openTabs, setOpenTabs] = useState<TabId[]>(activeTab ? [activeTab] : [])
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [sidebarView, setSidebarView] = useState<'explorer' | 'settings'>('explorer')
  const [folderOpen, setFolderOpen] = useState(true)
  const [isDark, setIsDark] = useState(true)

  // When URL-driven activeTab changes, ensure it is in the open tabs list
  useEffect(() => {
    if (!activeTab) return
    setOpenTabs((prev) => (prev.includes(activeTab) ? prev : [...prev, activeTab]))
  }, [activeTab])

  // Restore theme state from DOM (set by inline script in layout.tsx)
  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'))
  }, [])

  function closeTab(tabId: TabId, e: React.MouseEvent) {
    e.preventDefault()
    e.stopPropagation()
    const next = openTabs.filter((t) => t !== tabId)
    setOpenTabs(next)
    if (next.length === 0) {
      router.push('/')
    } else if (tabId === activeTab) {
      const idx = openTabs.indexOf(tabId)
      router.push(`/?tab=${next[Math.min(idx, next.length - 1)]}`)
    }
  }

  function toggleTheme() {
    const nowDark = document.documentElement.classList.toggle('dark')
    setIsDark(nowDark)
    try { localStorage.setItem('portfolio-theme', nowDark ? 'dark' : 'light') } catch (_) {}
  }

  const activeTabData = activeTab ? TABS.find((t) => t.id === activeTab) ?? null : null

  return (
    <div className="flex h-[100dvh] w-full flex-col overflow-hidden bg-surface-container-lowest">

      {/* ── TopAppBar ─────────────────────────────────────────────────────── */}
      <header className="shrink-0 flex items-center gap-3 px-4 h-8 bg-surface-container-low z-50 border-b border-outline-variant/30">
        <span className="font-sans font-bold text-[11px] uppercase tracking-wider text-on-surface-variant opacity-50">
          CV - Emilija Kastratović
        </span>

        <div className="flex-grow" />

      </header>

      {/* ── Body ──────────────────────────────────────────────────────────── */}
      <div className="flex flex-grow overflow-hidden">

        {/* ── Activity Bar ─────────────────────────────────────────────── */}
        <nav className="w-12 bg-surface-container-low shrink-0 flex flex-col items-center pt-0 pb-4 gap-1 z-40 border-r border-outline-variant/30">
          {/* Explorer toggle */}
          <button
            onClick={() => {
              if (sidebarView === 'explorer') {
                setSidebarOpen((v) => !v)
              } else {
                setSidebarView('explorer')
                setSidebarOpen(true)
              }
            }}
            className={[
              'w-full flex justify-center py-2 transition-all',
              sidebarOpen && sidebarView === 'explorer'
                ? 'border-l-2 border-on-surface text-on-surface'
                : 'border-l-2 border-transparent text-on-surface-variant opacity-50 hover:opacity-100',
            ].join(' ')}
            aria-label="Toggle explorer"
          >
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 20" }}>folder_open</span>
          </button>

          {/* Search toggle */}
          <div className="w-full flex justify-center py-2 text-on-surface-variant opacity-50 hover:opacity-100 transition-all cursor-pointer">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 20" }}>search</span>
          </div>

          {/* Social links + settings — pushed to bottom */}
          <div className="mt-auto w-full flex flex-col items-center gap-3 pb-0">
            <a
              href="https://www.linkedin.com/in/emilijak/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-on-surface-variant opacity-50 hover:opacity-100 transition-all"
              title="LinkedIn"
            >
              <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="https://github.com/ganglem"
              target="_blank"
              rel="noopener noreferrer"
              className="text-on-surface-variant opacity-50 hover:opacity-100 transition-all"
              title="GitHub"
            >
              <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <button
              onClick={() => {
                if (sidebarView === 'settings') {
                  setSidebarOpen((v) => !v)
                } else {
                  setSidebarView('settings')
                  setSidebarOpen(true)
                }
              }}
              className={[
                'w-full flex justify-center py-2 transition-all',
                sidebarOpen && sidebarView === 'settings'
                  ? 'border-l-2 border-on-surface text-on-surface'
                  : 'border-l-2 border-transparent text-on-surface-variant opacity-50 hover:opacity-100',
              ].join(' ')}
              title="Settings"
              aria-label="Toggle settings"
            >
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 20" }}>settings</span>
            </button>
          </div>
        </nav>

        {/* ── Sidebar + editor wrapper ───────────────────────────────────── */}
        <div className="relative flex flex-grow overflow-hidden">

          {/* ── Explorer Sidebar ────────────────────────────────────────── */}
          <aside
            className={[
              'absolute lg:relative inset-y-0 left-0 z-50',
              'flex flex-col font-sans text-[13px] tracking-tight shrink-0 w-56 overflow-hidden',
              'bg-surface-container-low border-r border-outline-variant/30',
              'transition-[transform,width] duration-200 ease-in-out',
              sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0 lg:w-0',
            ].join(' ')}
          >
            <div className="w-56 flex flex-col h-full">
              {/* Panel header */}
              <div className="flex items-center justify-between px-4 py-2 shrink-0">
                <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-on-surface-variant opacity-60">
                  {sidebarView === 'settings' ? 'Settings' : 'Explorer'}
                </span>
                <button
                  className="lg:hidden text-on-surface-variant hover:text-on-surface"
                  onClick={() => setSidebarOpen(false)}
                >
                  <span className="material-symbols-outlined text-[11px]" style={{ fontVariationSettings: "'wght' 200" }}>close</span>
                </button>
              </div>

              {sidebarView === 'explorer' ? (
                /* ── Explorer ── */
                <div className="flex flex-col overflow-y-auto scrollbar-ide">
                  <button
                    onClick={() => setFolderOpen((v) => !v)}
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
                            onClick={() => { if (window.innerWidth < 1024) setSidebarOpen(false) }}
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
                /* ── Settings ── */
                <div className="flex flex-col overflow-y-auto scrollbar-ide">
                  <div className="px-2 pt-3 pb-1">
                    <p className="text-[10px] font-sans font-bold uppercase tracking-widest text-on-surface-variant opacity-40 px-2 pb-1">
                      Appearance
                    </p>
                    <button
                      onClick={toggleTheme}
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

          {/* ── Main editor area ──────────────────────────────────────────── */}
          <main className="flex-grow flex flex-col overflow-hidden min-w-0">

            {/* Tab Bar */}
            <div className="shrink-0 flex h-8 bg-surface-container-low overflow-x-auto scrollbar-ide border-b border-outline-variant/30">
              {openTabs.map((tabId) => {
                const tab = TABS.find((t) => t.id === tabId)!
                const isActive = tabId === activeTab
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
                    {/* Tab label — clicking switches to it */}
                    <Link
                      href={`/?tab=${tab.id}`}
                      className="flex items-center gap-1"
                    >
                      <span className={`material-symbols-outlined text-[12px] ${tab.iconColor}`}>
                        {tab.icon}
                      </span>
                      <span className="whitespace-nowrap pr-1 tracking-wide">{tab.label}</span>
                    </Link>

                    {/* Close button — always visible on active tab, hover-only on inactive */}
                    <button
                      onClick={(e) => closeTab(tabId, e)}
                      className={[
                        'flex items-center justify-center w-4 h-4 hover:bg-surface-container-high transition-opacity shrink-0',
                        isActive ? 'opacity-40 hover:!opacity-100' : 'opacity-0 group-hover:opacity-60 hover:!opacity-100',
                      ].join(' ')}
                      aria-label={`Close ${tab.label}`}
                    >
                      <span className="material-symbols-outlined text-[11px]" style={{ fontVariationSettings: "'wght' 200" }}>close</span>
                    </button>
                  </div>
                )
              })}
            </div>

            {/* Editor content */}
            <div className="flex-grow overflow-y-auto overflow-x-hidden scrollbar-ide bg-surface">
              {openTabs.length === 0 || !activeTab ? (
                // Empty state — no tabs open
                <div className="h-full flex flex-col items-center justify-center select-none pointer-events-none">
                  <div className="flex flex-col items-center gap-3 opacity-[0.12]">
                    <span className="material-symbols-outlined" style={{ fontSize: '72px' }}>
                      terminal
                    </span>
                    <p className="font-sans font-bold text-2xl tracking-widest uppercase text-on-surface">
                      Portfolio
                    </p>
                  </div>
                  <p className="mt-6 font-mono text-[11px] text-on-surface-variant opacity-30 tracking-wider">
                    Select a file from the Explorer to open it
                  </p>
                </div>
              ) : (
                children
              )}
            </div>
          </main>
        </div>
      </div>

      {/* ── Status Bar ────────────────────────────────────────────────────── */}
      <footer className="shrink-0 flex items-center h-6 px-2 gap-3 bg-surface-container-low font-sans tracking-wide text-[10px] text-on-surface-variant z-50 border-t border-outline-variant/30">
        <div className="flex-grow" />
        <div className="flex items-center gap-3 opacity-70 pr-2">
          <span className="hidden sm:block hover:bg-surface-container px-1 cursor-pointer">UTF-8</span>
          <span className="hover:bg-surface-container px-1 cursor-pointer">
            {activeTabData?.language ?? 'Plain Text'}
          </span>
          <span className="material-symbols-outlined text-[12px] hover:bg-surface-container px-1 cursor-pointer">
            terminal
          </span>
        </div>
      </footer>
    </div>
  )
}
