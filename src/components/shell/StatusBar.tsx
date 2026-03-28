import { Terminal } from 'lucide-react'

interface Props {
  language: string | null
}

export function StatusBar({ language }: Props) {
  return (
    <footer className="shrink-0 flex items-center h-6 px-2 gap-3 bg-surface-container-low font-sans tracking-wide text-[10px] text-on-surface-variant z-50 border-t border-outline-variant/30">
      <div className="flex-grow" />
      <div className="flex items-center gap-3 opacity-70 pr-2">
        <span className="hidden sm:block hover:bg-surface-container px-1 cursor-pointer">UTF-8</span>
        <span className="hover:bg-surface-container px-1 cursor-pointer">
          {language ?? 'Plain Text'}
        </span>
        <span className="hover:bg-surface-container px-1 cursor-pointer">
          <Terminal size={12} />
        </span>
      </div>
    </footer>
  )
}
