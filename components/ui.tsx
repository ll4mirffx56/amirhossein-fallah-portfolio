export function SectionMark({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="font-mono text-[13px] tracking-wide text-signal">
        {"{"} {label} {"}"}
      </span>
      <span className="flex-1 h-px bg-line" />
    </div>
  );
}

export function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono px-3 py-1.5 rounded-full border border-line text-[13px] text-ink bg-white/60">
      {children}
    </span>
  );
}
