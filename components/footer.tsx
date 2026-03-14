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
      <div className="max-w-[1440px] mx-auto px-20 py-16 flex justify-between gap-16">
        {/* Brand */}
        <div className="flex flex-col gap-4 max-w-[280px]">
          <Link href="/" className="flex items-center gap-2.5">
            <ObsidLogo size={24} />
            <span className="font-mono text-[#f0f0f0] font-bold text-[16px] tracking-[0.16em]">
              obsid
            </span>
          </Link>
          <p className="text-[13px] text-[#6b6b6b] leading-relaxed">
            Inventory intelligence for teams that don&apos;t slow down.
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-20">
          {Object.entries(links).map(([category, items]) => (
            <div key={category} className="flex flex-col gap-4">
              <span className="text-[12px] font-bold text-[#f0f0f0] tracking-wider uppercase">
                {category}
              </span>
              {items.map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-[13px] text-[#6b6b6b] hover:text-[#a0a0a0] transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-[1440px] mx-auto px-20 py-5 border-t border-[#1c1c1c] flex justify-between items-center">
        <span className="text-[12px] text-[#6b6b6b]">
          © 2025 Obsid. All rights reserved.
        </span>
        <span className="text-[12px] text-[#6b6b6b]">
          Built for teams who care about their inventory.
        </span>
      </div>
    </footer>
  );
}
