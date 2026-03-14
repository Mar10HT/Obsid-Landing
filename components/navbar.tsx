"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ObsidLogo } from "./obsid-logo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#1c1c1c]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-20 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <ObsidLogo size={26} />
          <span className="font-mono text-[#f0f0f0] font-bold text-[17px] tracking-[0.16em]">
            obsid
          </span>
        </Link>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-10">
          <Link
            href="#features"
            className="text-sm text-[#a0a0a0] hover:text-[#f0f0f0] transition-colors"
          >
            Features
          </Link>
          <Link
            href="#pricing"
            className="text-sm text-[#a0a0a0] hover:text-[#f0f0f0] transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="#"
            className="text-sm text-[#a0a0a0] hover:text-[#f0f0f0] transition-colors"
          >
            About
          </Link>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <Link
            href="#"
            className="text-sm text-[#a0a0a0] hover:text-[#f0f0f0] transition-colors hidden md:block"
          >
            Log in
          </Link>
          <Link
            href="#"
            className="px-5 py-2.5 rounded-lg bg-[#4d7c6f] hover:bg-[#5a8f81] text-[#f0f0f0] text-sm font-semibold transition-colors"
          >
            Get started
          </Link>
        </div>
      </div>
    </nav>
  );
}
