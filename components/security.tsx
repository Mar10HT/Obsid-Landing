import { Check, Download, User, CirclePlus, Pencil, Trash2 } from "lucide-react";
import { FadeIn } from "./fade-in";

const bullets = [
  { color: "#4d7c6f", text: "Full audit trail — before/after state on every change" },
  { color: "#a78bfa", text: "Role-based access — Admins, Managers, Staff" },
  { color: "#60a5fa", text: "JWT + CSRF protection on every request" },
  { color: "#34d399", text: "Warehouse-level isolation to prevent data crossing" },
];

const statCards = [
  { label: "Total",   value: "1,284", color: "#cbd5e1" },
  { label: "Creates", value: "347",   color: "#10b981" },
  { label: "Updates", value: "856",   color: "#6b7bb5" },
  { label: "Deletes", value: "81",    color: "#ef4444" },
];

const logEntries = [
  {
    action: "CREATE", actionColor: "#10b981", iconBg: "rgba(16,185,129,0.08)",
    Icon: CirclePlus, iconColor: "#10b981",
    entity: "Inventory Item", name: "Laptop HP ProBook 450 G10",
    user: "Carlos M.", time: "09:41",
  },
  {
    action: "UPDATE", actionColor: "#6b7bb5", iconBg: "rgba(107,123,181,0.08)",
    Icon: Pencil, iconColor: "#6b7bb5",
    entity: "Transfer", name: "Warehouse A → Main HQ (12× USB-C Hub)",
    user: "Ana R.", time: "09:38",
  },
  {
    action: "DELETE", actionColor: "#ef4444", iconBg: "rgba(239,68,68,0.08)",
    Icon: Trash2, iconColor: "#ef4444",
    entity: "Inventory Item", name: 'Monitor LG UltraWide 34"',
    user: "Carlos M.", time: "09:22",
  },
  {
    action: "UPDATE", actionColor: "#6b7bb5", iconBg: "rgba(107,123,181,0.08)",
    Icon: Pencil, iconColor: "#6b7bb5",
    entity: "Loan", name: 'MacBook Pro 14" — returned by Juan P.',
    user: "Ana R.", time: "09:15",
    faded: true,
  },
];

export function Security() {
  return (
    <section className="w-full bg-[#0d0d0d] border-t border-[#1c1c1c] py-16 md:py-20 px-5 md:px-20">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">

          {/* Left column */}
          <FadeIn className="flex flex-col gap-7 lg:max-w-[500px] w-full shrink-0">
            <span className="text-[11px] font-bold tracking-[0.18em] text-[#4d7c6f] uppercase">
              Security &amp; Compliance
            </span>
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#f0f0f0] leading-[1.15]">
              Enterprise-grade security, built in.
            </h2>
            <p className="text-[15px] text-[#888888] leading-relaxed max-w-[480px]">
              Every action is tracked, every user is scoped to what they need,
              and your data never leaks across teams.
            </p>
            <ul className="flex flex-col gap-4">
              {bullets.map((b) => (
                <li key={b.text} className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0">
                    <Check size={14} color={b.color} strokeWidth={2.5} />
                  </span>
                  <span className="text-[14px] text-[#a0a0a0]">{b.text}</span>
                </li>
              ))}
            </ul>
          </FadeIn>

          {/* Audit log mockup */}
          <FadeIn delay={0.1} className="w-full min-w-0 flex-1">
            <div className="rounded-xl border border-[#2a2a2a] bg-[#0f0f0f] overflow-hidden">

              {/* Header */}
              <div className="h-[52px] bg-[#1a1a1a] border-b border-[#2a2a2a] flex items-center justify-between px-5">
                <div className="flex flex-col gap-0.5">
                  <span className="text-[13px] font-semibold text-[#f0f0f0]">Audit Log</span>
                  <span className="text-[11px] text-[#94a3b8]">1,284 entries</span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#242424] border border-[#3a3a3a]">
                  <Download size={11} color="#94a3b8" />
                  <span className="text-[11px] text-[#94a3b8]">Export CSV</span>
                </div>
              </div>

              {/* Stats row */}
              <div className="flex gap-2 px-4 py-2.5 border-b border-[#2a2a2a]">
                {statCards.map((s) => (
                  <div key={s.label} className="flex-1 bg-[#242424] rounded-lg px-3 py-2 flex flex-col gap-0.5">
                    <span className="text-[10px] text-[#64748b]">{s.label}</span>
                    <span className="font-mono text-[13px] font-bold" style={{ color: s.color }}>{s.value}</span>
                  </div>
                ))}
              </div>

              {/* Log entries */}
              {logEntries.map((entry, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-3 px-4 py-3.5 border-b border-[#2a2a2a] last:border-0 ${entry.faded ? "opacity-40" : ""}`}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: entry.iconBg }}
                  >
                    <entry.Icon size={13} color={entry.iconColor} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="font-mono text-[10px] font-bold" style={{ color: entry.actionColor }}>
                        {entry.action}
                      </span>
                      <span className="text-[10px] text-[#3a3a3a]">—</span>
                      <span className="text-[10px] text-[#94a3b8]">{entry.entity}</span>
                    </div>
                    <div className="text-[12px] font-semibold text-[#cbd5e1] truncate">{entry.name}</div>
                    <div className="flex items-center gap-1 mt-0.5">
                      <User size={10} color="#64748b" />
                      <span className="text-[11px] text-[#64748b]">{entry.user}</span>
                    </div>
                  </div>
                  <span className="font-mono text-[11px] text-[#64748b] shrink-0">{entry.time}</span>
                </div>
              ))}
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
