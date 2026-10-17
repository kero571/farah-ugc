"use client";
import Image from "next/image";
import { useCallback, useState } from "react";
import Icon from "../ui/Icon";
import SectionHeading, { Em } from "../ui/SectionHeading";
import VideoModal from "../VideoModal";
import { WORKS } from "@/data/content";
import { SITE } from "@/lib/site";

export default function Work() {
  const [active, setActive] = useState(null);
  const close = useCallback(() => setActive(null), []);

  return (
    <section
      id="work"
      aria-labelledby="work-title"
      className="section container-x defer"
    >
      <SectionHeading id="work-title" eyebrow="03 / Selected Work">
        Recent <Em>projects</Em>.
      </SectionHeading>

      <ul className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
        {WORKS.map((w) => (
          <li key={w.id} className="min-w-0">
            <button
              onClick={() => setActive(w)}
              aria-label={`Play video ${w.id}`}
              className="group relative block aspect-[4/5] w-full overflow-hidden rounded-[1.6rem] bg-night shadow-[0_18px_36px_-24px_rgba(179,21,42,.5)] transition hover:-translate-y-1"
            >
              <Image
                src="/profile.jpg"
                alt=""
                fill
                loading="lazy"
                sizes="(max-width: 1023px) 46vw, 280px"
                style={{ objectPosition: "58% 35%" }}
                className="object-cover"
              />
              <span className="absolute inset-0 bg-black/25" />
              <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-coral text-white animate-ring transition group-hover:scale-110">
                <Icon name="play" className="h-5 w-5" />
              </span>
            </button>
          </li>
        ))}
      </ul>
      {/* 
      <div className="mt-10 text-center">
        <a href={SITE.whatsappDrive} target="_blank" rel="noopener noreferrer" className="btn-outline">
          Request Portfolio Google Drive <Icon name="arrow" className="h-4 w-4" />
        </a>
      </div> */}

      {active && (
        <VideoModal
          src={active.src}
          title={`Video ${active.id}`}
          onClose={close}
        />
      )}
    </section>
  );
}
