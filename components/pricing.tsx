import { FadeIn } from "./fade-in";

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4d7c6f" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

const plans = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect for small teams getting started with inventory management.",
    features: ["Up to 200 items", "1 warehouse", "Basic audit logs", "EN / ES support"],
    cta: "Get started free",
    ctaStyle: "secondary",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$29",
    per: "/mo",
    badge: "Most popular",
    description: "For growing teams that need unlimited items, multiple warehouses, and advanced reporting.",
    features: ["Unlimited items", "Up to 10 warehouses", "QR loan tracking", "Full audit trail", "Advanced reports", "EN / ES support"],
    cta: "Start 14-day trial",
    ctaStyle: "primary",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations that need dedicated support, SSO, SLAs, and unlimited scale.",
    features: ["Everything in Pro", "Unlimited warehouses", "SSO / SAML", "Dedicated support", "Custom SLA"],
    cta: "Contact sales",
    ctaStyle: "secondary",
    highlight: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="w-full bg-[#0d0d0d] border-t border-[#1c1c1c] py-20 px-20">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center gap-12">
        {/* Header */}
        <FadeIn className="flex flex-col items-center gap-3 text-center">
          <span className="text-[11px] font-bold tracking-[0.18em] text-[#4d7c6f] uppercase">
            Pricing
          </span>
          <h2 className="text-[40px] font-bold text-[#f0f0f0]">
            Simple, transparent pricing.
          </h2>
          <p className="text-[16px] text-[#6b6b6b]">
            No hidden fees. Scale as your team grows.
          </p>
        </FadeIn>

        {/* Cards */}
        <div className="w-full max-w-[1100px] grid grid-cols-3 gap-4 items-start">
          {plans.map((plan, i) => (
            <FadeIn key={plan.name} delay={i * 0.07}>
              <div
                className={`p-8 rounded-xl flex flex-col gap-6 border ${
                  plan.highlight
                    ? "bg-[#4d7c6f18] border-[#4d7c6f66]"
                    : "bg-[#141414] border-[#2a2a2a]"
                }`}
              >
                {/* Top */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-[14px] font-semibold ${
                        plan.highlight ? "text-[#4d7c6f]" : "text-[#a0a0a0]"
                      }`}
                    >
                      {plan.name}
                    </span>
                    {plan.badge && (
                      <span className="px-2.5 py-0.5 rounded-full bg-[#4d7c6f] text-[10px] font-bold text-white">
                        {plan.badge}
                      </span>
                    )}
                  </div>
                  <div className="flex items-end gap-1">
                    <span className="text-[36px] font-bold text-[#f0f0f0] leading-none">
                      {plan.price}
                    </span>
                    {plan.per && (
                      <span className="text-[14px] text-[#6b6b6b] mb-1">{plan.per}</span>
                    )}
                  </div>
                  <p className="text-[14px] text-[#6b6b6b] leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                {/* Features */}
                <ul className="flex flex-col gap-2.5">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5">
                      <CheckIcon />
                      <span className="text-[13px] text-[#a0a0a0]">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#"
                  className={`w-full py-3 rounded-lg text-[14px] font-semibold text-center transition-colors ${
                    plan.ctaStyle === "primary"
                      ? "bg-[#4d7c6f] hover:bg-[#5a8f81] text-white"
                      : "bg-[#242424] hover:bg-[#2a2a2a] text-[#a0a0a0] border border-[#333]"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
