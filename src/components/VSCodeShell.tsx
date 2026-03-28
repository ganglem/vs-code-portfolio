'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { TABS, type TabId } from '@/lib/tabs'
import { TopBar } from '@/components/shell/TopBar'
import { ActivityBar } from '@/components/shell/ActivityBar'
import { Sidebar } from '@/components/shell/Sidebar'
import { TabBar } from '@/components/shell/TabBar'
import { StatusBar } from '@/components/shell/StatusBar'

interface Props {
  activeTab: TabId
  children: React.ReactNode
}

export function VSCodeShell({ activeTab, children }: Props) {
  const router = useRouter()
  const [openTabs, setOpenTabs] = useState<TabId[]>([activeTab])
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [sidebarView, setSidebarView] = useState<'explorer' | 'settings'>('explorer')
  const [folderOpen, setFolderOpen] = useState(true)
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    setOpenTabs((prev) => (prev.includes(activeTab) ? prev : [...prev, activeTab]))
  }, [activeTab])

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

  const activeTabMeta = TABS.find((t) => t.id === activeTab)
  const fillEditor = activeTabMeta?.fillEditor ?? false

  return (
    <div className="flex h-[100dvh] w-full flex-col overflow-hidden bg-surface-container-lowest">
      <TopBar />

      <div className="flex flex-grow overflow-hidden">
        <ActivityBar
          sidebarOpen={sidebarOpen}
          sidebarView={sidebarView}
          onToggleExplorer={() => {
            if (sidebarView === 'explorer') setSidebarOpen((v) => !v)
            else { setSidebarView('explorer'); setSidebarOpen(true) }
          }}
          onToggleSettings={() => {
            if (sidebarView === 'settings') setSidebarOpen((v) => !v)
            else { setSidebarView('settings'); setSidebarOpen(true) }
          }}
        />

        <div className="relative flex flex-grow overflow-hidden">
          <Sidebar
            open={sidebarOpen}
            view={sidebarView}
            activeTab={activeTab}
            folderOpen={folderOpen}
            isDark={isDark}
            onClose={() => setSidebarOpen(false)}
            onFolderToggle={() => setFolderOpen((v) => !v)}
            onToggleTheme={toggleTheme}
          />

          <main className="flex-grow flex flex-col overflow-hidden min-w-0">
            <TabBar openTabs={openTabs} activeTab={activeTab} onClose={closeTab} onReorder={setOpenTabs} />

            <div className={`flex-grow bg-surface ${fillEditor ? 'overflow-hidden' : 'overflow-y-auto overflow-x-hidden scrollbar-ide'}`}>
              {children}
            </div>
          </main>
        </div>
      </div>

      <StatusBar language={activeTabMeta?.language ?? null} />
    </div>
  )
}
