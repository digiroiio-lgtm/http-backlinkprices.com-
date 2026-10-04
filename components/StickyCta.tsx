"use client";
import { useEffect, useState } from "react";
import { Pill } from "./ui/Pill";

const KEY = "bp-cta-dismissed";

export function StickyCta() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem(KEY) === "1") setDismissed(true);
    } catch {}
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (dismissed || !visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 rounded-t-[2rem] bg-ink px-4 pb-5 pt-4 sm:inset-x-auto sm:bottom-4 sm:right-4 sm:w-96 sm:rounded-[2rem]">
      <div className="flex items-center gap-3">
        <Pill href="/compare" className="flex-1 !h-14">
          Compare providers
        </Pill>
        <button
          aria-label="Dismiss"
          onClick={() => {
            setDismissed(true);
            try {
              localStorage.setItem(KEY, "1");
            } catch {}
          }}
          className="grid h-12 w-12 place-items-center text-2xl text-white/70"
        >
          ×
        </button>
      </div>
    </div>
  );
}
