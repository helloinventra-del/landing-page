import Image from "next/image";

export default function Logo({
  light = false,
  id = "brand",
  className = "",
}: {
  /** true = variant for dark surfaces (white wordmark); false = light surfaces (navy wordmark) */
  light?: boolean;
  /** kept for call-site compatibility; the mark is a pre-enhanced raster */
  id?: string;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Image
        src="/logo-mark.png"
        alt="OrinexSoft logo"
        width={720}
        height={364}
        priority
        className="h-9 w-auto"
      />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[15.5px] font-bold tracking-[0.08em] ${
            light ? "text-white" : "text-navy"
          }`}
        >
          ORINEXSOFT
        </span>
        <span
          className={`mt-1 text-[9px] font-semibold tracking-[0.28em] ${
            light ? "text-cool" : "text-muted"
          }`}
        >
          TECHNOLOGIES
        </span>
      </span>
    </span>
  );
}
