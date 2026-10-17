"use client";
import { useEffect, useState } from "react";
import Icon from "../ui/Icon";
import { NAV } from "@/data/content";

// الـ pill ثابت (fixed) و في spacer بنفس ارتفاع --nav-h بيحجز مكانه في أول الصفحة
export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const mq = window.matchMedia("(min-width: 1024px)");
    const onMq = () => mq.matches && setOpen(false);
    document.addEventListener("keydown", onKey);
    mq.addEventListener("change", onMq);
    return () => { document.removeEventListener("keydown", onKey); mq.removeEventListener("change", onMq); };
  }, []);

  return (
    <>
      <div aria-hidden="true" className="h-[var(--nav-h)] bg-night" />
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:pt-5">
        <div className="glass mx-auto flex h-14 max-w-6xl items-center justify-between rounded-full pe-2 ps-5 text-white lg:h-[60px] lg:ps-7">
          <a href="#top" className="flex items-center gap-3" aria-label="Farah — Home">
            <span className="font-serif text-2xl font-bold">Farah</span>
            <span className="rounded-full bg-white/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[.14em]">UGC Creator</span>
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
            {NAV.map((n) => <a key={n.href} href={n.href} className="text-sm font-semibold text-white/80 transition hover:text-white">{n.label}</a>)}
          </nav>

          <div className="flex items-center gap-2">
            <a href="#contact" className="hidden items-center gap-2 rounded-full bg-crimson px-6 py-2.5 text-sm font-bold lg:inline-flex hover:bg-crimsonDark">Hire Me</a>
            <button type="button" onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? "Close menu" : "Open menu"}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 lg:hidden">
              <Icon name={open ? "close" : "menu"} />
            </button>
          </div>
        </div>

        <nav id="mobile-nav" aria-label="Mobile" hidden={!open} className="glass mx-auto mt-2 max-w-6xl rounded-3xl p-3 text-white lg:hidden">
          <ul className="grid gap-1">
            {NAV.map((n) => <li key={n.href}><a href={n.href} onClick={() => setOpen(false)} className="block rounded-2xl px-4 py-3 text-base font-semibold hover:bg-white/10">{n.label}</a></li>)}
            <li className="pt-1"><a href="#contact" onClick={() => setOpen(false)} className="btn w-full !py-3">Hire Me</a></li>
          </ul>
        </nav>
      </header>
    </>
  );
}
