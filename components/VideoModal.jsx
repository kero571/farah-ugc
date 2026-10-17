"use client";
import { useEffect, useRef } from "react";
import Icon from "./ui/Icon";

export default function VideoModal({ src, title, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    const prev = document.activeElement;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      prev?.focus?.();
    };
  }, [onClose]);

  return (
    <div role="dialog" aria-modal="true" aria-label={title} onClick={onClose}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm">
      <button ref={closeRef} onClick={onClose} aria-label="Close video"
        className="fixed right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white hover:bg-crimson">
        <Icon name="close" className="h-4 w-4" />
      </button>
      <video src={src} poster="/profile.jpg" controls autoPlay playsInline preload="metadata"
        onClick={(e) => e.stopPropagation()}
        className="max-h-[85svh] w-auto max-w-[min(92vw,960px)] animate-pop rounded-2xl bg-black object-contain" />
    </div>
  );
}