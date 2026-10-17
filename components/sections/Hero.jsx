import Image from "next/image";
import Icon from "../ui/Icon";
import { HERO_STATS, TOPICS } from "@/data/content";

/*
  ارتفاع الـ Hero = ارتفاع الشاشة - ارتفاع الـ navbar (.hero-h)
  Mobile: صورة full-bleed + المحتوى أسفل الـ hero 
  lg+: عمودين، النص يسار والصورة في إطار مدوّر يمين
*/
export default function Hero() {
  return (
    <section
      id="top"
      className="hero-h relative flex flex-col overflow-hidden bg-night text-white"
    >
      <div className="relative z-10 flex flex-1 flex-col lg:container-x lg:grid lg:grid-cols-2 lg:items-center lg:gap-14 lg:py-10">
        <div className="absolute inset-0 lg:relative lg:order-2 lg:h-[min(660px,calc(100svh-var(--nav-h)-5rem))] lg:overflow-hidden lg:rounded-[2rem] lg:border lg:border-white/10">
          <Image
            src="/profile.jpg"
            alt="Farah, UGC creator for beauty, hair, lifestyle and food brands"
            fill
            priority
            fetchPriority="high"
            sizes="(max-width: 1023px) 100vw, 520px"
            className="object-cover object-[58%_38%]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(13,8,8,.55)_0%,rgba(13,8,8,.1)_30%,rgba(13,8,8,.55)_62%,rgba(13,8,8,.95)_100%)] lg:bg-[linear-gradient(to_top,rgba(13,8,8,.55),transparent_45%)]" />
        </div>

        <div className="relative z-10 flex flex-1 flex-col justify-between gap-6 px-5 pb-6 pt-2 sm:px-8 sm:pb-8 lg:order-1 lg:block lg:p-0">
          <p className="glass mx-auto flex w-fit max-w-full animate-fadeUp items-center gap-2.5 rounded-full px-4 py-2 text-[11px] font-bold uppercase tracking-wider lg:mx-0 sm:text-xs">
            <i
              className="block h-2.5 w-2.5 shrink-0 rounded-full bg-gold"
              aria-hidden="true"
            />
            <span className="truncate">{TOPICS.join(" · ")}</span>
          </p>

          <div className="mt-auto lg:mt-8">
            <h1 className="animate-fadeUp font-serif text-[2rem] font-bold leading-[1.12] [animation-delay:.08s] sm:text-5xl lg:text-6xl xl:text-7xl">
              Beauty you can trust. Content people{" "}
              <em className="text-coral">love</em>.
            </h1>
            {/* <p className="mt-4 max-w-md animate-fadeUp text-[15px] leading-7 text-white/85 [animation-delay:.16s] sm:text-base lg:max-w-lg">
              Farah | UGC Creator making authentic beauty, lifestyle, and food stories that turn passive viewers into loyal buyers.
            </p> */}
            <dl className="glass mt-5 grid animate-fadeUp grid-cols-3 divide-x divide-white/15 rounded-2xl py-4 text-center [animation-delay:.32s] sm:max-w-md">
              {HERO_STATS.map((s) => (
                <div key={s.label} className="flex flex-col-reverse px-2">
                  <dt className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-white/80 sm:text-xs">
                    {s.label}
                  </dt>
                  <dd
                    className={`font-serif text-xl font-bold sm:text-2xl ${s.gold ? "text-gold" : ""}`}
                  >
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>
            <div className="mt-6 grid animate-fadeUp grid-cols-2 gap-3 [animation-delay:.24s] sm:max-w-md lg:flex lg:max-w-none">
              <a href="#work" className="btn !px-4 lg:!px-8">
                View My Work
              </a>
              <a href="#contact" className="btn-glass !px-4 lg:!px-8">
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
