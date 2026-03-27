import { VSCodeShell } from '@/components/VSCodeShell'
import { Introduction } from '@/components/pages/Introduction'
import { Experience } from '@/components/pages/Experience'
import { Education } from '@/components/pages/Education'
import { Projects } from '@/components/pages/Projects'
import { isValidTab, type TabId } from '@/lib/tabs'

interface PageProps {
  searchParams: Promise<{ tab?: string }>
}

const CONTENT: Record<TabId, React.ReactNode> = {
  introduction: <Introduction />,
  experience: <Experience />,
  education: <Education />,
  projects: <Projects />,
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
