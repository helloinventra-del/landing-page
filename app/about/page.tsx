import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "OrinexSoft is a product-driven technology company. We build intelligent software, digital products, and platforms that solve real problems.",
};

const PILLARS = [
  {
    title: "Product-first",
    body: "We build and own products. Services exist to fund and sharpen them, never to replace them.",
  },
  {
    title: "Problem-first",
    body: "Every product starts with a written problem statement from a real workflow, not a market trend.",
  },
  {
    title: "Engineering-first",
    body: "Decisions are documented, code is reviewed, and scope is defended. The craft is the company.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Driven by ideas."
        highlight="Defined by engineering."
        sub="OrinexSoft is a product-driven technology company. We build intelligent software, digital products, and platforms designed to solve real-world problems."
      />

      <section className="px-5 pb-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
              {PILLARS.map((p) => (
                <div key={p.title} className="bg-white p-7">
                  <h2 className="text-[15.5px] font-bold text-navy">{p.title}</h2>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-muted">{p.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-5 pb-16 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative h-72 w-full overflow-hidden rounded-2xl border border-line sm:h-80">
              <Image
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=75"
                alt="The OrinexSoft team working together around a shared desk"
                fill
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="flex h-full flex-col justify-center">
              <h2 className="font-display text-2xl font-bold tracking-tight text-navy sm:text-3xl">
                Why we exist
              </h2>
              <div className="mt-5 space-y-5 text-[15.5px] leading-relaxed text-muted">
                <p>
                  Software is too often built backwards. Products get shaped
                  around org charts and feature lists instead of the problem
                  itself, and the complexity lands on the people who can least
                  afford it.
                </p>
                <p>
                  We work the other way around. We start from the problem, stay
                  small until we understand it, and let engineering decisions
                  follow from what the product needs to do.
                </p>
                <p>
                  Our long-term vision is a portfolio of products that share one
                  standard: each one makes a specific kind of work measurably
                  better, and each one is built to last.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line bg-soft">
        <div className="mx-auto max-w-3xl px-5 py-16 text-center sm:px-8 sm:py-20">
          <Reveal>
            <h2 className="font-display text-2xl font-bold tracking-tight text-navy sm:text-3xl">
              Building what&apos;s next, in the open.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-[15.5px] leading-relaxed text-muted">
              Our first product is in active development. If you want to follow
              the build or bring us a problem worth solving, we would like to
              hear from you.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center rounded-lg bg-violet px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-violet-soft"
            >
              Get in touch
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
