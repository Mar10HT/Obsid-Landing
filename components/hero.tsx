import { FadeIn } from "./fade-in";

function FloatingCard({
  className,
  delay,
  children,
  animation = "float",
}: {
  className: string;
  delay: string;
  children: React.ReactNode;
  animation?: string;
}) {
  return (
    <div
      className={`absolute hidden lg:block pointer-events-none select-none ${className}`}
      style={{ animation: `${animation} 5s ease-in-out infinite`, animationDelay: delay }}
    >
      <div className="bg-[#141414] border border-[#2a2a2a] rounded-xl p-4 w-[210px] shadow-2xl">
        {children}
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center pt-32 md:pt-40 px-5 md:px-20 pb-20 md:pb-28 overflow-hidden">
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 30%, rgba(77,124,111,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Floating inventory notification cards */}
      <FloatingCard className="top-[23%] right-[6%] xl:right-[11%]" delay="0s">
        <div className="flex items-center gap-2 mb-2.5">
          <span className="w-2 h-2 rounded-full bg-[#4ade80]" />
          <span className="text-[11px] font-semibold text-[#4ade80]">Restocked</span>
        </div>
        <p className="text-[13px] font-medium text-[#f0f0f0] mb-0.5">Mechanical Keyboard</p>
        <p className="text-[11px] text-[#888888]">+24 units · Main HQ</p>
        <p className="text-[10px] text-[#6b6b6b] mt-2">just now</p>
      </FloatingCard>

      <FloatingCard className="top-[42%] left-[5%] xl:left-[10%]" delay="1.8s" animation="float-slow">
        <div className="flex items-center gap-2 mb-2.5">
          <span className="w-2 h-2 rounded-full bg-[#60a5fa]" />
          <span className="text-[11px] font-semibold text-[#60a5fa]">Transfer complete</span>
        </div>
        <p className="text-[13px] font-medium text-[#f0f0f0] mb-0.5">12× USB-C Hub 7-in-1</p>
        <p className="text-[11px] text-[#888888]">Main HQ → Warehouse A</p>
        <p className="text-[10px] text-[#6b6b6b] mt-2">2 min ago</p>
      </FloatingCard>

      <FloatingCard className="bottom-[26%] right-[5%] xl:right-[10%]" delay="3.5s" animation="float-slow">
        <div className="flex items-center gap-2 mb-2.5">
          <span className="w-2 h-2 rounded-full bg-[#fbbf24]" />
          <span className="text-[11px] font-semibold text-[#fbbf24]">Low stock alert</span>
        </div>
        <p className="text-[13px] font-medium text-[#f0f0f0] mb-0.5">Monitor LG UltraWide</p>
        <p className="text-[11px] text-[#888888]">3 units remaining</p>
        <p className="text-[10px] text-[#6b6b6b] mt-2">Warehouse B</p>
      </FloatingCard>

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
            <span className="block text-[38px] sm:text-[54px] lg:text-[72px] text-[#f0f0f0]">
              Inventory that moves
            </span>
            <span className="block text-[38px] sm:text-[54px] lg:text-[72px] text-[#4d7c6f]">
              as fast as your team.
            </span>
          </h1>
        </FadeIn>

        {/* Subheadline */}
        <FadeIn delay={0.1}>
          <p className="mt-6 text-[16px] md:text-[18px] text-[#888888] max-w-[620px] leading-relaxed">
            Real-time stock tracking, multi-warehouse transfers, loan management
            with QR codes, and a full audit trail — all in one place.
          </p>
        </FadeIn>

        {/* CTAs */}
        <FadeIn delay={0.15}>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-10 w-full sm:w-auto">
            <a
              href="#"
              className="px-7 py-3.5 rounded-lg bg-[#4d7c6f] hover:bg-[#5a8f81] text-[#f0f0f0] text-base font-semibold transition-all duration-150 text-center hover:scale-[1.02] active:scale-[0.97]"
            >
              Get started free
            </a>
            <a
              href="#"
              className="px-7 py-3.5 rounded-lg bg-[#141414] hover:bg-[#1c1c1c] border border-[#2a2a2a] text-[#a0a0a0] text-base font-medium transition-all duration-150 text-center inline-flex items-center justify-center gap-2 active:scale-[0.97]"
            >
              Watch a demo
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </a>
          </div>
        </FadeIn>

        {/* Trust */}
        <FadeIn delay={0.2}>
          <p className="mt-8 md:mt-12 text-[13px] text-[#888888]">
            No credit card required · Cancel anytime
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
