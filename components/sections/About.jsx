import Image from "next/image";
import SectionHeading, { Em } from "../ui/SectionHeading";
import { ABOUT_CARDS } from "@/data/content";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="section container-x defer">
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,.85fr)_minmax(0,1.15fr)] lg:gap-20">
        <figure className="relative mx-auto w-full max-w-[19rem] sm:max-w-sm lg:max-w-md">
          <div className="relative aspect-[3/4] overflow-hidden rounded-t-[999px] rounded-b-md border-[5px] border-white bg-blush shadow-[0_30px_50px_-25px_rgba(35,24,25,.35)]">
            <Image src="/profile.jpg" alt="Portrait of Farah, UGC creator" fill sizes="(max-width: 1023px) 80vw, 448px" loading="lazy" className="object-cover object-[55%_35%]" />
          </div>
          <figcaption className="absolute inset-x-0 -bottom-5 mx-auto flex w-fit items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider shadow-lg">
            <span className="text-coral" aria-hidden="true">✦</span> Authentic Creator
          </figcaption>
        </figure>

        <div className="pt-2">
          <SectionHeading id="about-title" eyebrow="01 / About Me" className="!mb-6">
            Honest content that feels like a <Em>friend&apos;s recommendation</Em>.
          </SectionHeading>
          <div className="space-y-4 text-[15px] leading-8 text-ink/80 sm:text-base">
            <p>Hi, I&apos;m Farah! I bridge the gap between beauty &amp; lifestyle brands and digital audiences through relatable, high-converting organic video assets. My approach skips the artificial sales pitch and emphasizes tangible textures, sincere routines, and aesthetic clarity.</p>
            <p>From scroll-stopping TikTok hooks to direct-response Meta ad creatives, I test and format every angle to drive tangible returns while keeping your brand voice impeccably chic.</p>
          </div>
          <div className="mt-7 grid grid-cols-2 gap-3 sm:gap-4">
            {ABOUT_CARDS.map((c) => (
              <div key={c.label} className="rounded-3xl border border-coral/15 bg-blush/80 p-4 sm:p-6">
                <p className="text-[10px] font-extrabold uppercase tracking-wider text-rust sm:text-xs">{c.label}</p>
                <p className="mt-2 font-serif text-lg font-bold leading-tight sm:text-xl">{c.title}</p>
                <p className="mt-1 text-xs text-ink/60">{c.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
