import { VSCodeShell } from '@/components/VSCodeShell'
import { Introduction } from '@/components/pages/Introduction'
import { Experience } from '@/components/pages/Experience'
import { Education } from '@/components/pages/Education'
import { ROPAgen } from '@/components/pages/projects/ROPAgen'
import { FindMe } from '@/components/pages/projects/FindMe'
import { BierTurnier } from '@/components/pages/projects/BierTurnier'
import { Skills } from '@/components/pages/Skills'
import { isValidTab, DEFAULT_TAB, type TabId } from '@/lib/tabs'

interface PageProps {
  searchParams: Promise<{ tab?: string }>
}

const CONTENT: Record<TabId, React.ReactNode> = {
  introduction: <Introduction />,
  experience: <Experience />,
  education: <Education />,
  ropagen: <ROPAgen />,
  findme: <FindMe />,
  bierturnier: <BierTurnier />,
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
