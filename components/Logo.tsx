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
        className="h-7 w-auto"
      />
      <span
        className={`font-display text-[15px] font-extrabold tracking-[0.02em] ${
          light ? "text-white" : "text-navy"
        }`}
      >
        ORINEXSOFT
      </span>
    </span>
  );
}
