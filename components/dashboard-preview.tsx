"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Package, TriangleAlert, ClipboardList, Warehouse, Search } from "lucide-react";
import { FadeIn } from "./fade-in";

gsap.registerPlugin(ScrollTrigger);

const tableItems = [
  { name: "Laptop Dell XPS 15",   sku: "DELL-XPS-001", stock: 24, warehouse: "Main HQ",    status: "in-stock"     },
  { name: "Monitor LG UltraWide", sku: "LG-UW-034",    stock: 3,  warehouse: "Warehouse B", status: "low-stock"    },
  { name: "USB-C Hub 7-in-1",     sku: "USB-C7-019",   stock: 87, warehouse: "Main HQ",    status: "on-loan"      },
  { name: "Standing Desk Frame",  sku: "DESK-FR-007",  stock: 0,  warehouse: "Warehouse A", status: "out-of-stock" },
  { name: "Mechanical Keyboard",  sku: "KB-MEC-042",   stock: 12, warehouse: "Main HQ",    status: "in-stock"     },
];

const newItem = {
  name: "Wireless Presenter K-800",
  sku: "WP-K800-003",
  stock: 6,
  warehouse: "Main HQ",
  status: "in-stock" as const,
};

const statusConfig = {
  "in-stock":    { label: "In stock",     color: "#4ade80", bg: "rgba(74,222,128,0.1)"  },
  "low-stock":   { label: "Low stock",    color: "#fbbf24", bg: "rgba(251,191,36,0.1)"  },
  "on-loan":     { label: "On loan",      color: "#60a5fa", bg: "rgba(96,165,250,0.1)"  },
  "out-of-stock":{ label: "Out of stock", color: "#f87171", bg: "rgba(248,113,113,0.1)" },
};

const stockColor = (n: number) => n === 0 ? "#f87171" : n <= 5 ? "#fbbf24" : "#f0f0f0";

const sidebarItems = [
  { Icon: Package,        label: "Inventory", active: true  },
  { Icon: ArrowLeftRight, label: "Transfers", active: false },
  { Icon: Link2,          label: "Loans",     active: false },
  { Icon: BarChart3,      label: "Reports",   active: false },
];

function ArrowLeftRight({ size = 14, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 3 4 7l4 4"/><path d="M4 7h16"/><path d="m16 21 4-4-4-4"/><path d="M20 17H4"/>
    </svg>
  );
}
function Link2({ size = 14, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 17H7A5 5 0 0 1 7 7h2"/><path d="M15 7h2a5 5 0 1 1 0 10h-2"/><line x1="8" y1="12" x2="16" y2="12"/>
    </svg>
  );
}
function BarChart3({ size = 14, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>
    </svg>
  );
}

export function DashboardPreview() {
  const sectionRef     = useRef<HTMLElement>(null);
  const btnRef         = useRef<HTMLButtonElement>(null);
  const newRowRef      = useRef<HTMLDivElement>(null);
  const newRowInnerRef = useRef<HTMLDivElement>(null);
  const flashCardRef   = useRef<HTMLDivElement>(null);
  const totalItemsRef  = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const section   = sectionRef.current;
    const btn       = btnRef.current;
    const newRow    = newRowRef.current;
    const newRowIn  = newRowInnerRef.current;
    const flashCard = flashCardRef.current;
    if (!section || !btn || !newRow || !newRowIn || !flashCard) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      gsap.set(newRow,   { height: 40 });
      gsap.set(newRowIn, { opacity: 1, y: 0 });
      if (totalItemsRef.current) totalItemsRef.current.textContent = "2,848";
      return;
    }

    // Initial states
    gsap.set(newRow,   { height: 0, overflow: "hidden" });
    gsap.set(newRowIn, { opacity: 0, y: 10, backgroundColor: "rgba(77,124,111,0)" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        pin: true,
        scrub: 1.5,
        start: "top top",
        end: "+=750",
        onUpdate: (self) => {
          // Update counter text imperatively to avoid re-renders on every scroll tick
          if (totalItemsRef.current) {
            totalItemsRef.current.textContent = self.progress > 0.62 ? "2,848" : "2,847";
          }
        },
      },
    });

    // Phase 1 (0–28%): Button pulse — click feel
    tl.to(btn, { scale: 1.13, boxShadow: "0 0 22px rgba(77,124,111,0.75)", duration: 0.5, ease: "power2.out" })
      .to(btn, { scale: 1,    boxShadow: "0 0 0px rgba(77,124,111,0)",    duration: 0.5, ease: "power2.inOut" });

    // Phase 2 (28–62%): New row slides in with green highlight
    tl.to(newRow,   { height: 40, duration: 1, ease: "power3.out" },                         "+=0.3")
      .to(newRowIn, { opacity: 1, y: 0, duration: 1, ease: "power3.out" },                   "<")
      .to(newRowIn, { backgroundColor: "rgba(77,124,111,0.35)", duration: 0.4 },             "<+0.15");

    // Phase 3 (62–100%): Counter flash + green row fades away
    tl.to(flashCard, { backgroundColor: "rgba(77,124,111,0.25)", duration: 0.4 },            "+=0.4")
      .to(flashCard, { backgroundColor: "rgba(26,26,26,1)", duration: 1.2 })
      .to(newRowIn,  { backgroundColor: "rgba(77,124,111,0)", duration: 1.4 },               "<+0.1");

    return () => { tl.scrollTrigger?.kill(); tl.kill(); };
  }, []);

  const s = statusConfig[newItem.status];

  const stats = [
    {
      label: "Total items",      trend: "↑ 12% this month",
      trendColor: "#10b981",     valueColor: "#cbd5e1",
      iconBg: "rgba(77,124,111,0.12)", flash: true,
      icon: <Package size={15} color="#4d7c6f" />,
      value: "2,847",
    },
    {
      label: "Low stock alerts", value: "14",  trend: "Requires attention",
      trendColor: "#64748b",     valueColor: "#f59e0b",
      iconBg: "rgba(245,158,11,0.12)", flash: false,
      icon: <TriangleAlert size={15} color="#f59e0b" />,
    },
    {
      label: "Active loans",     value: "38",  trend: "6 due this week",
      trendColor: "#64748b",     valueColor: "#60a5fa",
      iconBg: "rgba(96,165,250,0.12)", flash: false,
      icon: <ClipboardList size={15} color="#60a5fa" />,
    },
    {
      label: "Warehouses",       value: "5",   trend: "All operational",
      trendColor: "#10b981",     valueColor: "#34d399",
      iconBg: "rgba(52,211,153,0.12)", flash: false,
      icon: <Warehouse size={15} color="#34d399" />,
    },
  ] as const;

  return (
    <section ref={sectionRef} className="w-full px-5 md:px-20 pt-16 md:pt-20 pb-16 md:pb-20">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center gap-10">

        <FadeIn className="flex flex-col items-center gap-3 text-center">
          <span className="text-[11px] font-bold tracking-[0.18em] text-[#4d7c6f] uppercase">
            See it in action
          </span>
          <h2 className="text-[32px] md:text-[40px] font-bold text-[#f0f0f0]">
            A dashboard your team will actually use.
          </h2>
          <p className="text-[15px] md:text-[16px] text-[#888888] max-w-[520px] leading-relaxed">
            Clean, fast, and built for daily operations — from stock counts to QR loan tracking.
          </p>
        </FadeIn>

        {/* Mockup — no FadeIn, pin handles visibility */}
        <div className="w-full flex justify-center">
          <div className="w-full max-w-[1100px] overflow-x-auto rounded-xl border border-[#2a2a2a]">
            <div
              className="md:min-w-[700px] rounded-xl overflow-hidden"
              style={{ background: "#141414" }}
              aria-hidden="true"
            >
              {/* Window chrome */}
              <div className="flex items-center justify-between px-5 h-12 bg-[#111111] border-b border-[#2a2a2a]">
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#f87171]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#fbbf24]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#4ade80]" />
                  </div>
                  <span className="text-xs text-[#6b6b6b] ml-2">Inventory / All items</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#242424]">
                    <Search size={11} color="#6b6b6b" />
                    <span className="text-xs text-[#6b6b6b]">Search items...</span>
                  </div>
                  <button
                    ref={btnRef}
                    type="button"
                    tabIndex={-1}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold text-white"
                    style={{ backgroundColor: "#4d7c6f" }}
                  >
                    + Add item
                  </button>
                </div>
              </div>

              {/* Body */}
              <div className="flex">
                {/* Sidebar */}
                <div className="hidden md:flex w-48 shrink-0 bg-[#0a0a0a] border-r border-[#2a2a2a] p-3 flex-col gap-1">
                  <p className="px-3 pt-1 pb-2 text-[9px] font-bold tracking-widest text-[#6b6b6b] uppercase">
                    Workspace
                  </p>
                  {sidebarItems.map(({ Icon, label, active }) => (
                    <div
                      key={label}
                      className={`flex items-center gap-2.5 px-3 py-2 rounded-md text-[13px] font-medium ${
                        active ? "bg-[#242424] text-[#f0f0f0]" : "text-[#6b6b6b]"
                      }`}
                    >
                      <Icon size={14} color={active ? "#4d7c6f" : "#6b6b6b"} />
                      {label}
                    </div>
                  ))}
                </div>

                {/* Main */}
                <div className="flex-1 p-5 flex flex-col gap-4">
                  {/* Stats row */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {stats.map((stat, i) => (
                      <div
                        key={stat.label}
                        ref={stat.flash ? flashCardRef : undefined}
                        className="p-3.5 rounded-lg border border-[#2a2a2a] flex flex-col gap-2"
                        style={{ backgroundColor: "rgba(26,26,26,1)" }}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex flex-col gap-1">
                            <span className="text-[11px] text-[#94a3b8]">{stat.label}</span>
                            <span className="font-mono text-[20px] font-bold leading-none" style={{ color: stat.valueColor }}>
                              {i === 0
                                ? <span ref={totalItemsRef}>{stat.value}</span>
                                : stat.value
                              }
                            </span>
                          </div>
                          <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: stat.iconBg }}>
                            {stat.icon}
                          </div>
                        </div>
                        <span className="text-[11px]" style={{ color: stat.trendColor }}>{stat.trend}</span>
                      </div>
                    ))}
                  </div>

                  {/* Table */}
                  <div className="rounded-lg overflow-hidden border border-[#2a2a2a]">
                    <div className="grid grid-cols-[1fr_auto_auto] md:grid-cols-[2fr_1.5fr_1fr_1.2fr_1fr] bg-[#242424] px-4 h-9 items-center">
                      <span className="text-[11px] font-semibold text-[#6b6b6b]">Item name</span>
                      <span className="hidden md:block text-[11px] font-semibold text-[#6b6b6b]">SKU</span>
                      <span className="text-[11px] font-semibold text-[#6b6b6b]">Stock</span>
                      <span className="hidden md:block text-[11px] font-semibold text-[#6b6b6b]">Warehouse</span>
                      <span className="text-[11px] font-semibold text-[#6b6b6b] text-right md:text-left">Status</span>
                    </div>

                    {tableItems.map((item) => {
                      const st = statusConfig[item.status as keyof typeof statusConfig];
                      return (
                        <div
                          key={item.sku}
                          className="grid grid-cols-[1fr_auto_auto] md:grid-cols-[2fr_1.5fr_1fr_1.2fr_1fr] px-4 h-10 items-center border-t border-[#2a2a2a] hover:bg-[#1a1a1a] transition-colors"
                        >
                          <span className="text-[12px] text-[#f0f0f0] truncate min-w-0 pr-2">{item.name}</span>
                          <span className="hidden md:block font-mono text-[11px] text-[#a0a0a0]">{item.sku}</span>
                          <span className="font-mono text-[12px] font-bold px-2 md:px-0" style={{ color: stockColor(item.stock) }}>
                            {item.stock}
                          </span>
                          <span className="hidden md:block text-[12px] text-[#a0a0a0]">{item.warehouse}</span>
                          <span
                            className="inline-flex px-2 py-0.5 rounded-full text-[11px] font-medium w-fit"
                            style={{ color: st.color, background: st.bg }}
                          >
                            {st.label}
                          </span>
                        </div>
                      );
                    })}

                    {/* New row — always in DOM, GSAP reveals via scroll */}
                    <div
                      ref={newRowRef}
                      className="border-t border-[#2a2a2a]"
                      style={{ height: 0, overflow: "hidden" }}
                    >
                      <div
                        ref={newRowInnerRef}
                        className="grid grid-cols-[1fr_auto_auto] md:grid-cols-[2fr_1.5fr_1fr_1.2fr_1fr] px-4 h-10 items-center"
                        style={{ opacity: 0 }}
                      >
                        <span className="text-[12px] text-[#f0f0f0] truncate min-w-0 pr-2">{newItem.name}</span>
                        <span className="hidden md:block font-mono text-[11px] text-[#a0a0a0]">{newItem.sku}</span>
                        <span className="font-mono text-[12px] font-bold px-2 md:px-0" style={{ color: stockColor(newItem.stock) }}>
                          {newItem.stock}
                        </span>
                        <span className="hidden md:block text-[12px] text-[#a0a0a0]">{newItem.warehouse}</span>
                        <span
                          className="inline-flex px-2 py-0.5 rounded-full text-[11px] font-medium w-fit"
                          style={{ color: s.color, background: s.bg }}
                        >
                          {s.label}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
