'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { X } from 'lucide-react'
import {
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
  closestCenter,
  type DragEndEvent,
} from '@dnd-kit/core'
import { restrictToHorizontalAxis } from '@dnd-kit/modifiers'
import {
  SortableContext,
  horizontalListSortingStrategy,
  useSortable,
  arrayMove,
} from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { TABS, type TabId } from '@/lib/tabs'

interface TabItemProps {
  tabId: TabId
  activeTab: TabId
  onClose: (tabId: TabId, e: React.MouseEvent) => void
  justDragged: React.RefObject<boolean>
}

function SortableTab({ tabId, activeTab, onClose, justDragged }: TabItemProps) {
  const tab = TABS.find((t) => t.id === tabId)!
  const isActive = tabId === activeTab
  const Icon = tab.icon

  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: tabId })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    cursor: isDragging ? 'grabbing' : 'grab',
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={[
        'flex items-center gap-1 px-3 h-full font-sans text-[12px] tracking-wide shrink-0 group relative rounded-t-sm select-none',
        isActive
          ? 'bg-surface border-t border-primary-container text-on-surface'
          : 'bg-surface-container-low border-t border-transparent text-on-surface-variant opacity-65 hover:opacity-100 hover:bg-surface-container-highest',
      ].join(' ')}
    >
      <Link
        href={`/?tab=${tab.id}`}
        className="flex items-center gap-1"
        onClick={(e) => { if (justDragged.current) e.preventDefault() }}
      >
        <Icon size={12} className={tab.iconColor} />
        <span className="whitespace-nowrap pr-1 tracking-wide">{tab.label}</span>
      </Link>

      <button
        onPointerDown={(e) => e.stopPropagation()}
        onClick={(e) => onClose(tabId, e)}
        className={[
          'flex items-center justify-center w-4 h-4 hover:bg-surface-container-high transition-opacity shrink-0',
          isActive ? 'opacity-40 hover:!opacity-100' : 'opacity-0 group-hover:opacity-60 hover:!opacity-100',
        ].join(' ')}
        aria-label={`Close ${tab.label}`}
      >
        <X size={11} />
      </button>
    </div>
  )
}

interface Props {
  openTabs: TabId[]
  activeTab: TabId
  onClose: (tabId: TabId, e: React.MouseEvent) => void
  onReorder: (tabs: TabId[]) => void
}

export function TabBar({ openTabs, activeTab, onClose, onReorder }: Props) {
  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 5 } }))
  const justDragged = useRef(false)

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event
    if (over && active.id !== over.id) {
      justDragged.current = true
      const oldIndex = openTabs.indexOf(active.id as TabId)
      const newIndex = openTabs.indexOf(over.id as TabId)
      onReorder(arrayMove(openTabs, oldIndex, newIndex))
    }
    // Clear after the click event that follows pointerUp has fired
    setTimeout(() => { justDragged.current = false }, 100)
  }

  return (
    <DndContext
      id="tab-dnd-context"
      sensors={sensors}
      collisionDetection={closestCenter}
      modifiers={[restrictToHorizontalAxis]}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={openTabs} strategy={horizontalListSortingStrategy}>
        <div className="shrink-0 flex h-8 bg-surface-container-low overflow-x-auto scrollbar-ide border-b border-outline-variant/30">
          {openTabs.map((tabId) => (
            <SortableTab key={tabId} tabId={tabId} activeTab={activeTab} onClose={onClose} justDragged={justDragged} />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  )
}
