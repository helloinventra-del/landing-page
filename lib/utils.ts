/**
 * Minimal clsx-style class joiner — covers the `cn` call sites in this
 * project (strings, conditional objects, arrays) without pulling in
 * clsx/tailwind-merge. Order matters: later classes win for conflicting
 * utilities, matching shadcn-style call patterns closely enough for our usage.
 */
type ClassValue =
  | string
  | false
  | null
  | undefined
  | ClassValue[]
  | Record<string, boolean | undefined>;

export function cn(...inputs: ClassValue[]): string {
  const out: string[] = [];
  const walk = (v: ClassValue): void => {
    if (!v) return;
    if (typeof v === "string") {
      out.push(v);
    } else if (Array.isArray(v)) {
      v.forEach(walk);
    } else {
      for (const [key, on] of Object.entries(v)) {
        if (on) out.push(key);
      }
    }
  };
  inputs.forEach(walk);
  return out.join(" ");
}
