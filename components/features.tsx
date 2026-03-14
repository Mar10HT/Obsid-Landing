import { FadeIn } from "./fade-in";

function FeatureIcon({
  color,
  bg,
  children,
}: {
  color: string;
  bg: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
      style={{ background: bg }}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        {children}
      </svg>
    </div>
  );
}

export function Features() {
  return (
    <section id="features" className="w-full py-20 px-20 bg-[#0a0a0a]">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center gap-12">
        {/* Header */}
        <FadeIn className="flex flex-col items-center gap-3 text-center">
          <span className="text-[11px] font-bold tracking-[0.18em] text-[#4d7c6f] uppercase">
            Built for real operations
          </span>
          <h2 className="text-[40px] font-bold text-[#f0f0f0] leading-tight max-w-[600px]">
            Everything your team needs to stay in control.
          </h2>
          <p className="text-[16px] text-[#6b6b6b] max-w-[500px] leading-relaxed">
            From real-time stock counts to QR-coded loans — every workflow is covered.
          </p>
        </FadeIn>

        {/* Bento grid */}
        <div className="w-full max-w-[1100px] flex flex-col gap-3">

          {/* Row 1 */}
          <FadeIn className="flex gap-3">
            {/* Big card — Real-time */}
            <div className="flex-1 p-8 rounded-xl bg-[#141414] border border-[#2a2a2a] flex flex-col gap-5">
              <FeatureIcon color="#4d7c6f" bg="rgba(77,124,111,0.13)">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
              </FeatureIcon>
              <div className="flex flex-col gap-2">
                <h3 className="text-[22px] font-bold text-[#f0f0f0]">
                  Real-time inventory
                </h3>
                <p className="text-[14px] text-[#6b6b6b] leading-relaxed max-w-[420px]">
                  Every stock movement is reflected instantly across all warehouses.
                  No manual syncing, no stale data — just live numbers your team can trust.
                </p>
              </div>
              <div className="flex gap-8 mt-2">
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-[28px] font-bold text-[#4d7c6f] leading-none">~1s</span>
                  <span className="text-[12px] text-[#6b6b6b]">Update latency</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-[28px] font-bold text-[#4d7c6f] leading-none">99.9%</span>
                  <span className="text-[12px] text-[#6b6b6b]">Uptime SLA</span>
                </div>
              </div>
            </div>

            {/* Small card — Transfers */}
            <div className="w-[280px] shrink-0 p-7 rounded-xl bg-[#141414] border border-[#2a2a2a] flex flex-col gap-3 justify-between">
              <div className="flex flex-col gap-3">
                <FeatureIcon color="#60a5fa" bg="rgba(96,165,250,0.13)">
                  <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
                </FeatureIcon>
                <h3 className="text-[18px] font-bold text-[#f0f0f0] leading-tight">
                  Multi-warehouse transfers
                </h3>
                <p className="text-[13px] text-[#6b6b6b] leading-relaxed">
                  Move stock between locations with automatic tracking and confirmation.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#60a5fa]" />
                <span className="text-[12px] text-[#6b6b6b]">5 warehouses supported</span>
              </div>
            </div>
          </FadeIn>

          {/* Row 2 */}
          <FadeIn delay={0.05} className="flex gap-3">
            {/* QR Loans */}
            <div className="flex-1 p-7 rounded-xl bg-[#141414] border border-[#2a2a2a] flex flex-col gap-3">
              <FeatureIcon color="#fbbf24" bg="rgba(251,191,36,0.13)">
                <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="4" height="4" /><path d="M10 10h4v4" />
              </FeatureIcon>
              <h3 className="text-[18px] font-bold text-[#f0f0f0]">QR loan tracking</h3>
              <p className="text-[13px] text-[#6b6b6b] leading-relaxed">
                Generate QR codes for any loan. Staff scan to check out, return,
                and verify items in seconds.
              </p>
            </div>

            {/* Audit trail — highlighted */}
            <div className="flex-1 p-7 rounded-xl bg-[#162420] border border-[#4d7c6f44] flex flex-col gap-3">
              <FeatureIcon color="#4d7c6f" bg="rgba(77,124,111,0.2)">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </FeatureIcon>
              <h3 className="text-[18px] font-bold text-[#ffffff]">Full audit trail</h3>
              <p className="text-[13px] text-[#a0a0a0] leading-relaxed">
                Every action is logged with user, timestamp, and before/after state.
                Complete accountability for every change.
              </p>
            </div>

            {/* Smart categories */}
            <div className="w-[260px] shrink-0 p-7 rounded-xl bg-[#141414] border border-[#2a2a2a] flex flex-col gap-3">
              <FeatureIcon color="#f87171" bg="rgba(248,113,113,0.13)">
                <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
              </FeatureIcon>
              <h3 className="text-[18px] font-bold text-[#f0f0f0]">Smart categories</h3>
              <p className="text-[13px] text-[#6b6b6b] leading-relaxed">
                Organize items with flexible categories, suppliers, and custom fields.
              </p>
            </div>
          </FadeIn>

          {/* Row 3 */}
          <FadeIn delay={0.1} className="flex gap-3">
            {/* Roles */}
            <div className="flex-1 p-7 rounded-xl bg-[#141414] border border-[#2a2a2a] flex flex-col gap-4">
              <div className="flex items-start justify-between">
                <div className="flex flex-col gap-3">
                  <FeatureIcon color="#a78bfa" bg="rgba(167,139,250,0.13)">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" />
                  </FeatureIcon>
                  <h3 className="text-[18px] font-bold text-[#f0f0f0]">
                    Role-based access
                  </h3>
                </div>
                <div className="flex gap-2 mt-1">
                  {["Admin", "Manager", "Staff"].map((role, i) => (
                    <span
                      key={role}
                      className="px-3 py-1 rounded-full text-[12px] font-semibold border border-[#333]"
                      style={{
                        background: "#242424",
                        color: i === 0 ? "#f0f0f0" : "#a0a0a0",
                      }}
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-[13px] text-[#6b6b6b] leading-relaxed max-w-[540px]">
                Granular permissions for every role. Admins control everything,
                managers handle operations, staff handles daily tasks — no overlap,
                no chaos.
              </p>
            </div>

            {/* Bilingual */}
            <div className="w-[280px] shrink-0 p-7 rounded-xl bg-[#141414] border border-[#2a2a2a] flex flex-col gap-3 justify-between">
              <div className="flex flex-col gap-3">
                <FeatureIcon color="#34d399" bg="rgba(52,211,153,0.13)">
                  <circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </FeatureIcon>
                <h3 className="text-[18px] font-bold text-[#f0f0f0]">Fully bilingual</h3>
                <p className="text-[13px] text-[#6b6b6b] leading-relaxed">
                  The entire interface is available in English and Spanish.
                  Switch instantly, no reload.
                </p>
              </div>
              <div className="flex gap-2">
                <span className="px-3 py-1 rounded-md text-[12px] font-semibold bg-[#4d7c6f22] text-[#4d7c6f]">
                  English
                </span>
                <span className="px-3 py-1 rounded-md text-[12px] font-semibold bg-[#242424] text-[#a0a0a0]">
                  Español
                </span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
