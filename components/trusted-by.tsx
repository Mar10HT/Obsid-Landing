import {
  ShoppingCart,
  HeartPulse,
  Factory,
  GraduationCap,
  Truck,
  UtensilsCrossed,
  Building2,
  Wrench,
} from "lucide-react";

const INDUSTRIES = [
  { icon: ShoppingCart, label: "Retail" },
  { icon: HeartPulse, label: "Healthcare" },
  { icon: Factory, label: "Manufacturing" },
  { icon: GraduationCap, label: "Education" },
  { icon: Truck, label: "Logistics" },
  { icon: UtensilsCrossed, label: "Hospitality" },
  { icon: Building2, label: "Real Estate" },
  { icon: Wrench, label: "Field Services" },
];

export function TrustedBy() {
  return (
    <section className="py-12 border-y border-[#1c1c1c] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 md:px-20 mb-8">
        <p className="text-center text-xs font-mono uppercase tracking-[0.2em] text-[#505050]">
          Trusted by teams across
        </p>
      </div>

      {/* Scrolling strip */}
      <div className="relative">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-r from-[#0a0a0a] to-transparent" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-l from-[#0a0a0a] to-transparent" />

        {/* Track: 4 copies keep the viewport covered on wide screens;
            mr-8 per item makes -50% a seamless loop point. */}
        <div aria-hidden="true" className="marquee-track flex w-max">
          {[...INDUSTRIES, ...INDUSTRIES, ...INDUSTRIES, ...INDUSTRIES].map(({ icon: Icon, label }, i) => (
            <div
              key={`${label}-${i}`}
              className="flex items-center gap-3 px-6 py-3 mr-8 rounded-xl border border-[#1c1c1c] bg-[#111111] shrink-0 select-none"
            >
              <Icon size={18} className="text-[#4d7c6f] shrink-0" strokeWidth={1.5} />
              <span className="text-sm font-medium text-[#707070] whitespace-nowrap">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
