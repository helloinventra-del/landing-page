/**
 * Restrained wireframe preview for products that have no shipped interface yet.
 * Deliberately generic: skeleton blocks, no fabricated data or features.
 */
export default function PreviewFrame({
  label = "Interface preview",
  compact = false,
  className = "",
}: {
  label?: string;
  compact?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-line bg-white shadow-[0_1px_2px_rgba(16,19,34,0.05)] ${className}`}
    >
      <div className="flex items-center gap-1.5 border-b border-line px-3 py-2.5">
        <span className="h-2 w-2 rounded-full bg-line" />
        <span className="h-2 w-2 rounded-full bg-line" />
        <span className="h-2 w-2 rounded-full bg-line" />
        <span className="ml-2 text-[10px] font-medium text-muted/80">{label}</span>
      </div>
      <div className={`grid grid-cols-[52px_1fr] divide-x divide-line ${compact ? "p-0" : ""}`}>
        <div className="space-y-2.5 p-3">
          <div className="h-2 w-10 rounded bg-navy/15" />
          <div className="h-2 w-8 rounded bg-soft" />
          <div className="h-2 w-9 rounded bg-soft" />
          <div className="h-2 w-8 rounded bg-soft" />
        </div>
        <div className="space-y-3 p-4">
          <div className="h-2.5 w-24 rounded bg-navy/15" />
          <div className="h-16 rounded-md border border-line bg-soft" />
          <div className="grid grid-cols-2 gap-3">
            <div className="h-14 rounded-md border border-line bg-soft" />
            <div className="h-14 rounded-md border border-line bg-soft" />
          </div>
          <div className="h-2 w-3/4 rounded bg-soft" />
          <div className="h-2 w-1/2 rounded bg-soft" />
        </div>
      </div>
    </div>
  );
}
