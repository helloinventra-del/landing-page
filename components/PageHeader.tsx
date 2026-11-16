import Reveal from "./Reveal";

export default function PageHeader({
  eyebrow,
  title,
  highlight,
  sub,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  sub: string;
}) {
  return (
    <section className="relative overflow-hidden px-5 pb-6 pt-[132px] sm:px-8 sm:pb-10 sm:pt-[152px]">
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_30%,black,transparent)]" />
      <div className="absolute left-1/2 top-[-160px] h-[360px] w-[640px] -translate-x-1/2 rounded-full bg-violet/10 blur-[130px]" />
      <div className="relative mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="text-[11px] font-bold tracking-[0.14em] text-violet uppercase">
            {eyebrow}
          </p>
          <h1 className="font-display mt-4 text-4xl font-bold leading-[1.1] tracking-tight text-navy sm:text-6xl">
            {title}{" "}
            {highlight && <span className="text-violet">{highlight}</span>}
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-[16px] leading-relaxed text-muted sm:text-[18px]">
            {sub}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
