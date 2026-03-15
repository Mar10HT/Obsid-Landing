import Link from "next/link";
import { ObsidLogo } from "./obsid-logo";

const links = {
  Product: ["Features", "Pricing", "Changelog", "Roadmap"],
  Company: ["About", "Blog", "Contact"],
  Legal: ["Privacy", "Terms"],
};

export function Footer() {
  return (
    <footer className="w-full bg-[#0a0a0a] border-t border-[#1c1c1c]">
      <div className="max-w-[1440px] mx-auto px-5 md:px-20 py-12 md:py-16 flex flex-col md:flex-row justify-between gap-10 md:gap-16">
        {/* Brand */}
        <div className="flex flex-col gap-4 max-w-[280px]">
          <Link href="/" aria-label="Obsid home" className="flex items-center gap-2.5">
            <ObsidLogo size={24} />
            <span className="font-mono text-[#f0f0f0] font-bold text-[16px] tracking-[0.16em]">
              Obsid
            </span>
          </Link>
          <p className="text-[13px] text-[#888888] leading-relaxed">
            Inventory intelligence for teams that don&apos;t slow down.
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-10 md:gap-20 flex-wrap">
          {Object.entries(links).map(([category, items]) => (
            <div key={category} className="flex flex-col gap-4">
              <span className="text-[12px] font-bold text-[#f0f0f0] tracking-wider uppercase">
                {category}
              </span>
              {items.map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-[13px] text-[#888888] hover:text-[#a0a0a0] transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-[1440px] mx-auto px-5 md:px-20 py-5 border-t border-[#1c1c1c] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
        <span className="text-[12px] text-[#888888]">
          © 2025 Obsid. All rights reserved.
        </span>
        <span className="text-[12px] text-[#888888]">
          Designed for ops teams, not just IT.
        </span>
      </div>
    </footer>
  );
}
