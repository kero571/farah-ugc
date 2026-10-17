import Icon from "../ui/Icon";
import { Em } from "../ui/SectionHeading";
import { SITE } from "@/lib/site";
import { SOCIALS } from "@/data/content";

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="section defer bg-blush">
      <div className="container-x text-center">
        <p className="mb-5 flex items-center justify-center gap-3 text-xs font-extrabold uppercase tracking-[.16em] text-crimson">
          <span className="h-0.5 w-7 bg-coral" aria-hidden="true" />06 / Let&apos;s Create Together<span className="h-0.5 w-7 bg-coral" aria-hidden="true" />
        </p>
        <h2 id="contact-title" className="h2 mx-auto max-w-2xl">Ready to make content that <Em>sells</Em>?</h2>
        <p className="mx-auto mt-5 max-w-lg text-[15px] leading-7 text-ink/75 sm:text-base">
          Now booking for next week. Reach out directly with your brand brief or request my full UGC rate card &amp; portfolio drive.
        </p>

        <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer"
          className="btn mx-auto mt-8 flex w-full max-w-xl !py-5 text-lg sm:!py-6 sm:text-xl">
          <Icon name="whatsapp" className="h-7 w-7" /> Chat on WhatsApp
        </a>

        <ul className="mt-7 flex justify-center gap-4">
          {SOCIALS.map((s) => (
            <li key={s.label}>
              <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-crimson shadow-md transition hover:-translate-y-1 hover:bg-crimson hover:text-white">
                <Icon name={s.icon} className="h-6 w-6" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
