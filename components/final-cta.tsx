import { FadeIn } from "./fade-in";

const trustSignals = [
  "Free forever plan",
  "No credit card required",
  "Cancel anytime",
];

export function FinalCta() {
  return (
    <section className="w-full py-24 px-20 bg-[#0a0a0a]">
      <div className="max-w-[1440px] mx-auto flex justify-center">
        <FadeIn className="w-full max-w-[1100px]">
          <div className="p-16 rounded-xl bg-[#141414] border border-[#2a2a2a] flex flex-col items-center gap-6 text-center">
            <span className="text-[11px] font-bold tracking-[0.18em] text-[#4d7c6f] uppercase">
              Get started today
            </span>
            <h2 className="text-[48px] font-bold text-[#f0f0f0] leading-tight max-w-[700px]">
              Your inventory, finally under control.
            </h2>
            <p className="text-[16px] text-[#6b6b6b] max-w-[480px] leading-relaxed">
              Join teams that stopped guessing and started knowing. Free to start,
              no credit card required.
            </p>

            <div className="flex items-center gap-4 mt-2">
              <a
                href="#"
                className="px-8 py-3.5 rounded-lg bg-[#4d7c6f] hover:bg-[#5a8f81] text-white text-base font-semibold transition-colors"
              >
                Start for free
              </a>
              <a
                href="#"
                className="px-8 py-3.5 rounded-lg bg-[#1c1c1c] hover:bg-[#242424] border border-[#333] text-[#a0a0a0] text-base font-medium transition-colors"
              >
                Book a demo
              </a>
            </div>

            <div className="flex items-center gap-6 mt-2">
              {trustSignals.map((signal) => (
                <div key={signal} className="flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4d7c6f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span className="text-[13px] text-[#6b6b6b]">{signal}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
