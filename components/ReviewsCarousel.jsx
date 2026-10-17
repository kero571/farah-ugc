"use client";
import Image from "next/image";
import { useRef } from "react";
import Icon from "./ui/Icon";

export default function ReviewsCarousel({ items }) {
  const ref = useRef(null);

  const go = (dir) => {
    const el = ref.current;
    if (!el) return;
    const card = el.querySelector("li");
    const step = card ? card.getBoundingClientRect().width + 16 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  // فيديو واحد يشتغل في نفس الوقت
  const onPlay = (e) => {
    ref.current?.querySelectorAll("video").forEach((v) => {
      if (v !== e.currentTarget) v.pause();
    });
  };

  return (
    <div className="relative">
      <ul ref={ref} tabIndex={0} aria-label="Client reviews"
        className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-5 px-5 pb-4 sm:-mx-8 sm:scroll-px-8 sm:px-8 lg:mx-0 lg:scroll-px-0 lg:px-0">
        {items.map((r, i) => (
          <li key={r.src} className="w-[78%] shrink-0 snap-start sm:w-[46%] lg:w-[calc((100%-2rem)/3)]">
            <div className="overflow-hidden rounded-[1.6rem] border border-blush bg-white shadow-[0_18px_36px_-24px_rgba(179,21,42,.45)]">
              {r.type === "video" ? (
                <video src={`${r.src}#t=0.1`} controls playsInline preload="metadata"
                  aria-label={`Client review video ${i + 1}`} onPlay={onPlay}
                  className="aspect-[4/5] w-full bg-black object-contain" />
              ) : (
                <Image src={r.src} alt={`Client review ${i + 1}`} width={800} height={1000}
                  loading={i < 2 ? "eager" : "lazy"}
                  sizes="(max-width: 639px) 78vw, (max-width: 1023px) 46vw, 360px"
                  className="h-auto w-full" />
              )}
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-4 hidden justify-center gap-3 sm:flex">
        <button type="button" onClick={() => go(-1)} aria-label="Previous reviews" className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-crimson shadow transition hover:bg-crimson hover:text-white"><Icon name="left" /></button>
        <button type="button" onClick={() => go(1)} aria-label="Next reviews" className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-crimson shadow transition hover:bg-crimson hover:text-white"><Icon name="right" /></button>
      </div>
    </div>
  );
}