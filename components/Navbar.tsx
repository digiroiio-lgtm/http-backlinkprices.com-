"use client";
import { useState } from "react";
import Link from "next/link";
import { Logo } from "./ui/Logo";
import { Pill } from "./ui/Pill";
import { NAV } from "@/data/site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 px-3 pt-3">
      <div className="wrap !px-0">
        <div className="rounded-[2rem] border border-ink/10 bg-white/90 px-3 py-3 sm:px-4 shadow-[0_10px_40px_-15px_rgba(11,13,20,0.25)] backdrop-blur">
          <div className="flex items-center justify-between gap-2">
            <Logo />
            <div className="flex items-center gap-2">
              <Pill href="/compare" size="md" className="!h-12 !px-4 sm:!h-14 sm:!px-6">
                <span className="sm:hidden">Compare</span>
                <span className="hidden sm:inline">Compare providers</span>
              </Pill>
              <button
                aria-label="Menu"
                aria-expanded={open}
                onClick={() => setOpen((o) => !o)}
                className="grid h-12 w-12 place-items-center sm:h-14 sm:w-14 rounded-full border border-ink/15"
              >
                <span className="space-y-1.5">
                  <span className="block h-0.5 w-6 bg-ink" />
                  <span className="block h-0.5 w-6 bg-ink" />
                </span>
              </button>
            </div>
          </div>
          {open && (
            <nav className="mt-3 grid gap-1 border-t border-ink/10 pt-3">
              {NAV.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-3 py-3 text-lg font-semibold hover:bg-paper"
                >
                  {n.label}
                </Link>
              ))}
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
