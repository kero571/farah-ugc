import { BRANDS } from "@/data/content";

export default function Brands() {
  const loop = [...BRANDS, ...BRANDS];
  return (
    <section aria-label="Brands I've worked with" className="flex items-stretch overflow-hidden bg-crimson text-white">
      <p className="z-10 flex shrink-0 items-center border-r border-white/25 bg-crimson px-4 py-5 text-[10px] font-bold uppercase leading-4 tracking-[.12em] sm:px-8 sm:text-xs">
        Brands I&apos;ve<br className="sm:hidden" /> worked with
      </p>
      <div className="min-w-0 flex-1 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_6%,#000_94%,transparent)]">
        <ul className="flex h-full w-max animate-marquee items-center">
          {loop.map((b, i) => (
            <li key={i} aria-hidden={i >= BRANDS.length} className="flex shrink-0 items-center font-serif text-base font-semibold tracking-[.1em] sm:text-xl">
              <span className="px-6 sm:px-10">{b}</span><span className="text-xs text-white/60">✦</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
