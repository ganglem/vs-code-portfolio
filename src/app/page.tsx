import { VSCodeShell } from '@/components/VSCodeShell'
import { Introduction } from '@/components/pages/Introduction'
import { Experience } from '@/components/pages/Experience'
import { Education } from '@/components/pages/Education'
import { Projects } from '@/components/pages/Projects'
import { Skills } from '@/components/pages/Skills'
import { isValidTab, DEFAULT_TAB, type TabId } from '@/lib/tabs'

interface PageProps {
  searchParams: Promise<{ tab?: string }>
}

const CONTENT: Record<TabId, React.ReactNode> = {
  introduction: <Introduction />,
  experience: <Experience />,
  education: <Education />,
  projects: <Projects />,
  skills: <Skills />,
}

export default async function Page({ searchParams }: PageProps) {
  const { tab } = await searchParams
  const activeTab: TabId = isValidTab(tab) ? tab : DEFAULT_TAB

  return (
    <VSCodeShell activeTab={activeTab}>
      {CONTENT[activeTab]}
    </VSCodeShell>
  )
}
