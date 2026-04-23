import {
  FileDown, Code2, QrCode, Mail, FileSpreadsheet, Scan, FileText, Bell, CalendarClock, AlertTriangle,
  ShieldCheck, Warehouse, ScrollText, Globe, Smartphone, Handshake, ClipboardList, ArrowRightLeft, Building2, ClipboardCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { FadeIn } from "./fade-in";

type PillItem = { label: string; Icon: LucideIcon };

const row1: PillItem[] = [
  { label: "CSV Export",          Icon: FileDown        },
  { label: "REST API",            Icon: Code2           },
  { label: "QR Codes",            Icon: QrCode          },
  { label: "Email Alerts",        Icon: Mail            },
  { label: "Excel Import",        Icon: FileSpreadsheet },
  { label: "Barcode Scanner",     Icon: Scan            },
  { label: "PDF Reports",         Icon: FileText        },
  { label: "Push Notifications",  Icon: Bell            },
  { label: "Scheduled Reports",   Icon: CalendarClock   },
  { label: "Low Stock Alerts",    Icon: AlertTriangle   },
];

const row2: PillItem[] = [
  { label: "Role-based Access", Icon: ShieldCheck     },
  { label: "Multi-warehouse",   Icon: Warehouse       },
  { label: "Audit Trail",       Icon: ScrollText      },
  { label: "EN / ES",           Icon: Globe           },
  { label: "Mobile app",        Icon: Smartphone      },
  { label: "Loan Tracking",     Icon: Handshake       },
  { label: "Stock Takes",       Icon: ClipboardList   },
  { label: "Transfer Workflow", Icon: ArrowRightLeft  },
  { label: "Multi-tenant",      Icon: Building2       },
  { label: "Discharge Requests", Icon: ClipboardCheck },
];

function Pill({ label, Icon }: PillItem) {
  return (
    <div className="flex items-center gap-2.5 px-5 py-2.5 mr-3 rounded-full bg-[#141414] border border-[#2a2a2a] text-[14px] text-[#a0a0a0] whitespace-nowrap shrink-0">
      <Icon size={15} className="text-[#4d7c6f] shrink-0" />
      {label}
    </div>
  );
}

function MarqueeRow({ items, reverse }: { items: PillItem[]; reverse?: boolean }) {
  // 4 copies so viewport stays covered on wide screens even when a single
  // set is narrower than the viewport. The -50% keyframe still produces a
  // seamless loop because the first half equals the second half.
  const looped = [...items, ...items, ...items, ...items];
  return (
    <div className="w-full overflow-hidden" style={{ maskImage: "linear-gradient(to right, transparent, black 210px, black calc(100% - 210px), transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 210px, black calc(100% - 210px), transparent)" }}>
      <div
        aria-hidden="true"
        className={`flex w-max ${reverse ? "marquee-row-reverse" : "marquee-row"}`}
      >
        {looped.map((item, i) => (
          <Pill key={`${item.label}-${i}`} label={item.label} Icon={item.Icon} />
        ))}
      </div>
    </div>
  );
}

export function Integrations() {
  return (
    <section className="w-full bg-[#0a0a0a] border-t border-[#1c1c1c] py-16 md:py-20 flex flex-col items-center gap-10 md:gap-12">

      <FadeIn className="flex flex-col items-center gap-3 text-center px-5 md:px-20 max-w-[1440px] w-full">
        <span className="text-[11px] font-bold tracking-[0.18em] text-[#4d7c6f] uppercase">
          Integrations &amp; Export
        </span>
        <h2 className="text-[32px] md:text-[40px] font-bold text-[#f0f0f0]">
          Fits into your existing workflow.
        </h2>
        <p className="text-[15px] md:text-[16px] text-[#888888] max-w-[520px] leading-relaxed">
          From QR loan tracking to REST API access — Obsid connects with
          the tools your team already uses.
        </p>
      </FadeIn>

      <div className="w-screen flex flex-col gap-4">
        <MarqueeRow items={row1} />
        <MarqueeRow items={row2} reverse />
      </div>

    </section>
  );
}
