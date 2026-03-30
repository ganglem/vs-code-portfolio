import { VSCodeShell } from '@/components/VSCodeShell'
import { Introduction } from '@/components/pages/Introduction'
import { Experience } from '@/components/pages/Experience'
import { Education } from '@/components/pages/Education'
import { ROPAgen } from '@/components/pages/projects/ROPAgen'
import { FindMe } from '@/components/pages/projects/FindMe'
import { BierTurnier } from '@/components/pages/projects/BierTurnier'
import { Skills } from '@/components/pages/Skills'
import { Impressum } from '@/components/pages/Impressum'
import { Photography } from '@/components/pages/Photography'
import { isValidTab, type TabId } from '@/lib/tabs'

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
  impressum: <Impressum />,
  photography: <Photography />,
}

export default async function Page({ searchParams }: PageProps) {
  const { tab } = await searchParams
  const activeTab: TabId | null = isValidTab(tab) ? tab : null

  return (
    <VSCodeShell activeTab={activeTab}>
      {activeTab ? CONTENT[activeTab] : null}
    </VSCodeShell>
  )
}
