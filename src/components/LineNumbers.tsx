interface Props {
  count: number
}

export function LineNumbers({ count }: Props) {
  return (
    <div
      className="select-none text-right pr-4 pt-4 pb-4 text-on-surface-variant opacity-70 w-10 shrink-0 font-mono text-[13px] leading-6 bg-surface"
      aria-hidden="true"
    >
      {Array.from({ length: count }, (_, i) => (
        <div key={i + 1}>{i + 1}</div>
      ))}
    </div>
  )
}
