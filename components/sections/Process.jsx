import SectionHeading, { Em } from "../ui/SectionHeading";
import { STEPS } from "@/data/content";

export default function Process() {
  return (
    <section id="process" aria-labelledby="process-title" className="section defer bg-blush">
      <div className="container-x">
        <SectionHeading id="process-title" eyebrow="04 / How We Work">Seamless from brief to <Em>final delivery</Em>.</SectionHeading>
        <ol className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {STEPS.map((s) => (
            <li key={s.n} className="flex min-w-0 flex-col rounded-[1.8rem] bg-white p-5 shadow-[0_18px_36px_-26px_rgba(179,21,42,.45)] sm:p-7">
              <span className="font-serif text-3xl font-bold text-crimson" aria-hidden="true">{s.n}</span>
              <h3 className="mt-3 font-serif text-sm font-bold uppercase tracking-wide sm:text-base">{s.title}</h3>
              <p className="mb-5 mt-2 text-sm leading-6 text-ink/70 sm:leading-7">{s.text}</p>
              <p className="mt-auto border-t border-blush pt-4 text-xs font-bold uppercase tracking-wider text-rust">{s.day}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
