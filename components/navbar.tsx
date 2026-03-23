"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ObsidLogo } from "./obsid-logo";

const CHANGELOG_ENTRIES = [
  { version: "v2.1", label: "Stock Takes launched" },
  { version: "v2.0", label: "Multi-warehouse support" },
  { version: "v1.9", label: "Loan QR codes" },
];

function ChangelogBadge() {
  const [index, setIndex] = useState(0);
  const prevIndex = useRef(0);
  const spansRef = useRef<(HTMLSpanElement | null)[]>([]);

  // Initialize: show only index 0
  useEffect(() => {
    spansRef.current.forEach((el, i) => {
      if (!el) return;
      gsap.set(el, { opacity: i === 0 ? 1 : 0, y: i === 0 ? 0 : 12 });
    });
  }, []);

  // Animate on index change
  useEffect(() => {
    const prev = prevIndex.current;
    const next = index;
    if (prev === next) return;

    const prevEl = spansRef.current[prev];
    const nextEl = spansRef.current[next];
    if (!prevEl || !nextEl) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      gsap.set(prevEl, { opacity: 0 });
      gsap.set(nextEl, { opacity: 1, y: 0 });
    } else {
      gsap.to(prevEl, { opacity: 0, y: -12, duration: 0.25, ease: "power1.in" });
      gsap.fromTo(
        nextEl,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.25, ease: "power1.out", delay: 0.05 }
      );
    }

    prevIndex.current = next;
  }, [index]);

  // Auto-cycle every 4s
  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % CHANGELOG_ENTRIES.length);
    }, 4000);
    return () => clearInterval(t);
  }, []);

  const entry = CHANGELOG_ENTRIES[index];

  return (
    <Link
      href="/changelog"
      className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full border border-[#2a3d38] bg-[#4d7c6f]/10 hover:bg-[#4d7c6f]/20 transition-colors group overflow-hidden"
      aria-label={`Changelog: ${entry.version} — ${entry.label}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-[#4d7c6f] shrink-0 animate-pulse" />
      <div className="relative h-4 overflow-hidden w-[180px]">
        {CHANGELOG_ENTRIES.map((e, i) => (
          <span
            key={i}
            ref={(el) => { spansRef.current[i] = el; }}
            className="absolute inset-0 flex items-center"
            style={{ opacity: 0 }}
          >
            <span className="text-[11px] font-mono text-[#4d7c6f] font-semibold mr-1.5">
              {e.version}
            </span>
            <span className="text-[11px] text-[#707070] truncate">
              — {e.label}
            </span>
          </span>
        ))}
      </div>
      <span className="text-[#505050] group-hover:text-[#4d7c6f] transition-colors text-[11px]">
        →
      </span>
    </Link>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#1c1c1c]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-5 md:px-20 h-16 flex items-center justify-between">
        {/* Logo + changelog badge */}
        <div className="flex items-center gap-4">
          <Link href="/" aria-label="Obsid home" className="flex items-center gap-2.5">
            <ObsidLogo size={26} />
            <span className="font-mono text-[#f0f0f0] font-bold text-[17px] tracking-[0.16em]">
              Obsid
            </span>
          </Link>
          <ChangelogBadge />
        </div>

        {/* Nav links — desktop */}
        <div className="hidden md:flex items-center gap-10">
          <Link href="#features" className="text-sm text-[#a0a0a0] hover:text-[#f0f0f0] transition-colors">
            Features
          </Link>
          <Link href="#pricing" className="text-sm text-[#a0a0a0] hover:text-[#f0f0f0] transition-colors">
            Pricing
          </Link>
          <Link href="#" className="text-sm text-[#a0a0a0] hover:text-[#f0f0f0] transition-colors">
            About
          </Link>
        </div>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-4">
          <Link
            href="#"
            className="text-sm text-[#a0a0a0] hover:text-[#f0f0f0] transition-colors hidden md:block"
          >
            Log in
          </Link>
          <Link
            href="#"
            className="hidden md:block px-5 py-2.5 rounded-lg bg-[#4d7c6f] hover:bg-[#5a8f81] text-[#f0f0f0] text-sm font-semibold transition-all duration-150 hover:scale-[1.02] active:scale-[0.97]"
          >
            Get started
          </Link>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden flex flex-col justify-center gap-[5px] p-1.5 -mr-1"
          >
            <span className={`block w-5 h-0.5 bg-[#f0f0f0] transition-all duration-200 origin-center ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block w-5 h-0.5 bg-[#f0f0f0] transition-all duration-200 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-[#f0f0f0] transition-all duration-200 origin-center ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden border-t border-[#1c1c1c] bg-[#0a0a0a] overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 py-6 flex flex-col gap-5">
          <Link href="#features" onClick={() => setMenuOpen(false)} className="text-base text-[#a0a0a0] hover:text-[#f0f0f0] transition-colors">Features</Link>
          <Link href="#pricing"  onClick={() => setMenuOpen(false)} className="text-base text-[#a0a0a0] hover:text-[#f0f0f0] transition-colors">Pricing</Link>
          <Link href="#"         onClick={() => setMenuOpen(false)} className="text-base text-[#a0a0a0] hover:text-[#f0f0f0] transition-colors">About</Link>
          <div className="h-px bg-[#1c1c1c]" />
          <Link href="#"         onClick={() => setMenuOpen(false)} className="text-base text-[#a0a0a0] hover:text-[#f0f0f0] transition-colors">Log in</Link>
          <Link
            href="#"
            onClick={() => setMenuOpen(false)}
            className="w-full py-3 rounded-lg bg-[#4d7c6f] hover:bg-[#5a8f81] text-[#f0f0f0] text-base font-semibold transition-colors text-center"
          >
            Get started
          </Link>
        </div>
      </div>
    </nav>
  );
}
