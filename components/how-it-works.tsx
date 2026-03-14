import { FadeIn } from "./fade-in";

const steps = [
  {
    number: "01",
    title: "Add your inventory",
    description:
      "Create items with categories, suppliers, and custom fields. Import from CSV or add manually in seconds.",
  },
  {
    number: "02",
    title: "Track every movement",
    description:
      "Transfers, loans, adjustments — every action is logged automatically with user, timestamp, and location.",
  },
  {
    number: "03",
    title: "Stay in control",
    description:
      "Reports, low-stock alerts, and a full audit trail keep your team accountable and always informed.",
    highlight: true,
  },
];

export function HowItWorks() {
  return (
    <section className="w-full bg-[#0d0d0d] border-y border-[#1c1c1c] py-20 px-20">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center gap-14">
        {/* Header */}
        <FadeIn className="flex flex-col items-center gap-3 text-center">
          <span className="text-[11px] font-bold tracking-[0.18em] text-[#4d7c6f] uppercase">
            How it works
          </span>
          <h2 className="text-[40px] font-bold text-[#f0f0f0] leading-tight">
            Up and running in minutes.
          </h2>
          <p className="text-[16px] text-[#6b6b6b] max-w-[520px] leading-relaxed">
            No lengthy onboarding. No spreadsheet imports. Just a clean setup
            that gets your team moving.
          </p>
        </FadeIn>

        {/* Steps */}
        <div className="w-full max-w-[1100px] grid grid-cols-3 divide-x divide-[#2a2a2a]">
          {steps.map((step, i) => (
            <FadeIn key={step.number} delay={i * 0.08} className="px-10 flex flex-col items-center gap-5 text-center">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center text-[14px] font-bold font-mono border ${
                  step.highlight
                    ? "bg-[#4d7c6f] border-[#4d7c6f] text-[#f0f0f0]"
                    : "bg-[#141414] border-[#2a2a2a] text-[#4d7c6f]"
                }`}
              >
                {step.number}
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-[18px] font-bold text-[#f0f0f0]">
                  {step.title}
                </h3>
                <p className="text-[14px] text-[#6b6b6b] leading-relaxed max-w-[260px]">
                  {step.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
