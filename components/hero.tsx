import { FadeIn } from "./fade-in";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-16 px-20 pb-24 overflow-hidden">
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 30%, rgba(77,124,111,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative flex flex-col items-center gap-0 text-center max-w-[1100px] w-full">
        {/* Badge */}
        <FadeIn delay={0}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141414] border border-[#2a2a2a] mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4d7c6f]" />
            <span className="text-[13px] text-[#a0a0a0] font-medium">
              Inventory intelligence for modern teams
            </span>
          </div>
        </FadeIn>

        {/* Headline */}
        <FadeIn delay={0.05}>
          <h1 className="font-bold leading-[1.1] tracking-tight">
            <span className="block text-[72px] text-[#f0f0f0]">
              Inventory that moves
            </span>
            <span className="block text-[72px] text-[#4d7c6f]">
              as fast as your team.
            </span>
          </h1>
        </FadeIn>

        {/* Subheadline */}
        <FadeIn delay={0.1}>
          <p className="mt-6 text-[18px] text-[#6b6b6b] max-w-[620px] leading-relaxed">
            Real-time stock tracking, multi-warehouse transfers, loan management
            with QR codes, and a full audit trail — all in one place.
          </p>
        </FadeIn>

        {/* CTAs */}
        <FadeIn delay={0.15}>
          <div className="flex items-center gap-4 mt-10">
            <a
              href="#"
              className="px-7 py-3.5 rounded-lg bg-[#4d7c6f] hover:bg-[#5a8f81] text-[#f0f0f0] text-base font-semibold transition-colors"
            >
              Get started free
            </a>
            <a
              href="#"
              className="px-7 py-3.5 rounded-lg bg-[#141414] hover:bg-[#1c1c1c] border border-[#2a2a2a] text-[#a0a0a0] text-base font-medium transition-colors"
            >
              View demo →
            </a>
          </div>
        </FadeIn>

        {/* Trust */}
        <FadeIn delay={0.2}>
          <p className="mt-12 text-[13px] text-[#6b6b6b]">
            Trusted by 200+ warehouse teams
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
