import Icon from "../ui/Icon";
import SectionHeading, { Em } from "../ui/SectionHeading";
import { SERVICES } from "@/data/content";
import { SITE } from "@/lib/site";

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="section defer bg-blush">
      <div className="container-x">
        <SectionHeading id="services-title" eyebrow="02 / Packages">Content packages built to <Em>convert</Em>.</SectionHeading>

        <div className="grid items-stretch gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {SERVICES.map((s) => {
            const f = s.featured;
            return (
              <article key={s.title}
                className={`flex min-w-0 flex-col rounded-[2rem] p-6 shadow-[0_18px_40px_-26px_rgba(179,21,42,.45)] sm:p-7 ${f ? "bg-crimson text-white md:col-span-2 lg:col-span-1" : "bg-white"}`}>
                <div className="mb-6 flex items-center justify-between gap-3">
                  <span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${f ? "bg-white/15 text-white" : "bg-blush text-crimson"}`}>
                    <Icon name={s.icon} className="h-6 w-6" />
                  </span>
                  <span className={`rounded-full px-4 py-2 text-[11px] font-extrabold uppercase tracking-wider ${f ? "bg-white/15 text-white" : "bg-blush text-crimson"}`}>{s.chip}</span>
                </div>

                <h3 className="font-serif text-2xl font-bold leading-tight">{s.title}</h3>
                <p className={`mt-3 text-[15px] leading-7 ${f ? "text-white/85" : "text-ink/75"}`}>{s.text}</p>

                <ul className="mt-6 flex flex-col gap-2.5">
                  {s.tiers.map((t) => (
                    <li key={t.label}
                      className={`flex flex-wrap items-center justify-between gap-x-3 gap-y-1 rounded-2xl px-4 py-3 ${f ? "bg-white/10" : "bg-blush/60"}`}>
                      <span className="flex flex-wrap items-center gap-2 text-sm font-semibold">
                        {t.label}
                        {t.badge && (
                          <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider ${f ? "bg-gold text-ink" : "bg-crimson text-white"}`}>{t.badge}</span>
                        )}
                      </span>
                      <span className="flex items-baseline gap-2">
                        {t.was && <s className={`text-xs ${f ? "text-white/60" : "text-ink/45"}`}>{t.was}</s>}
                        <span className={`font-serif text-lg font-bold ${f ? "text-white" : "text-crimson"}`}>{t.price}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <div className="mx-auto mt-10 max-w-md text-center">
          <a href={SITE.whatsappPackage} target="_blank" rel="noopener noreferrer" className="btn w-full">Request a Custom Package</a>
          <p className="mt-3 text-xs text-ink/55 sm:text-sm">Need something different? Message me for a custom quote</p>
        </div>
      </div>
    </section>
  );
}