import Icon from "../ui/Icon";
import { SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-petal px-5 pb-10 pt-14 text-center">
      <p className="flex items-center justify-center gap-3">
        <span className="font-serif text-3xl font-bold">Farah</span>
        <span className="text-coral" aria-hidden="true">✦</span>
        <span className="text-sm font-bold tracking-[.14em]">{SITE.studio}</span>
      </p>
      <p className="mt-3 text-sm text-ink/60 sm:text-base">{SITE.tagline}</p>
      <p className="mt-6 text-xs uppercase tracking-wider text-ink/45">© 2026 Farah. All rights reserved.</p>
      <a href="#top" className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-crimson"><Icon name="up" className="h-4 w-4" /> Back to top</a>
    </footer>
  );
}
