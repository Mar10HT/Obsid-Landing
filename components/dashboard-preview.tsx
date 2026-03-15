"use client";
import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "./fade-in";

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

type Phase = "idle" | "pulse-btn" | "add-row" | "counter-flash" | "done";

function scrollLock() {
  document.documentElement.style.overflow = "hidden";
}

function scrollUnlock() {
  document.documentElement.style.overflow = "";
}

export function DashboardPreview() {
  const mockupRef  = useRef<HTMLDivElement>(null);
  const didAnimate = useRef(false);
  const timers     = useRef<ReturnType<typeof setTimeout>[]>([]);

  const [phase,      setPhase]      = useState<Phase>("idle");
  const [totalItems, setTotalItems] = useState("2,847");

  useEffect(() => {
    const el = mockupRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting || didAnimate.current) return;
        didAnimate.current = true;
        observer.disconnect();

        scrollLock();

        const t1 = setTimeout(() => setPhase("pulse-btn"),  500);
        const t2 = setTimeout(() => setPhase("add-row"),    1100);
        const t3 = setTimeout(() => {
          setPhase("counter-flash");
          setTotalItems("2,848");
        }, 2300);
        const t4 = setTimeout(() => setPhase("done"),       3000);
        const t5 = setTimeout(() => scrollUnlock(),         3300);
        timers.current = [t1, t2, t3, t4, t5];
      },
      { threshold: 0.99 },
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      timers.current.forEach(clearTimeout);
      scrollUnlock();
    };
  }, []);

  const showRow = phase === "add-row" || phase === "counter-flash" || phase === "done";
  const s = statusConfig[newItem.status];

  return (
    <section className="w-full px-5 md:px-20 pb-16 md:pb-20">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center gap-10">

        {/* Section header */}
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

        {/* Mockup */}
        <FadeIn className="w-full flex justify-center">
          <div ref={mockupRef} className="w-full max-w-[1100px] overflow-x-auto rounded-xl border border-[#2a2a2a]">
            <div
              className="min-w-[700px] rounded-xl overflow-hidden"
              style={{ background: "#141414" }}
              aria-hidden="true"
            >
              {/* Window chrome */}
              <div className="flex items-center justify-between px-5 h-12 bg-[#1c1c1c] border-b border-[#2a2a2a]">
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#f87171]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#fbbf24]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#4ade80]" />
                  </div>
                  <span className="text-xs text-[#6b6b6b] ml-2">Inventory / All items</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#242424]">
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                      <circle cx="7" cy="7" r="5" stroke="#6b6b6b" strokeWidth="1.5" />
                      <path d="M11 11L14 14" stroke="#6b6b6b" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                    <span className="text-xs text-[#6b6b6b]">Search items...</span>
                  </div>

                  {/* Pulsing "Add item" button */}
                  <motion.button
                    type="button"
                    tabIndex={-1}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold text-white"
                    style={{ backgroundColor: "#4d7c6f" }}
                    animate={
                      phase === "pulse-btn"
                        ? {
                            scale: [1, 1.18, 0.96, 1.04, 1],
                            boxShadow: [
                              "0 0 0px rgba(77,124,111,0)",
                              "0 0 28px rgba(77,124,111,0.85)",
                              "0 0 12px rgba(77,124,111,0.4)",
                              "0 0 8px rgba(77,124,111,0.2)",
                              "0 0 0px rgba(77,124,111,0)",
                            ],
                          }
                        : { scale: 1, boxShadow: "0 0 0px rgba(77,124,111,0)" }
                    }
                    transition={{ duration: 0.55, times: [0, 0.35, 0.6, 0.8, 1] }}
                  >
                    + Add item
                  </motion.button>
                </div>
              </div>

              {/* Body */}
              <div className="flex">
                {/* Sidebar */}
                <div className="w-48 shrink-0 bg-[#0f0f0f] border-r border-[#1c1c1c] p-3 flex flex-col gap-1">
                  <p className="px-3 pt-1 pb-2 text-[9px] font-bold tracking-widest text-[#6b6b6b] uppercase">
                    Workspace
                  </p>
                  {[
                    { icon: "📦", label: "Inventory", active: true  },
                    { icon: "↔",  label: "Transfers", active: false },
                    { icon: "🔗", label: "Loans",     active: false },
                    { icon: "📊", label: "Reports",   active: false },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className={`flex items-center gap-2.5 px-3 py-2 rounded-md text-[13px] font-medium ${
                        item.active ? "bg-[#242424] text-[#f0f0f0]" : "text-[#6b6b6b]"
                      }`}
                    >
                      <span className={item.active ? "text-[#4d7c6f]" : ""} aria-hidden="true">
                        {item.icon}
                      </span>
                      {item.label}
                    </div>
                  ))}
                </div>

                {/* Main */}
                <div className="flex-1 p-5 flex flex-col gap-4">
                  {/* Stats row */}
                  <div className="grid grid-cols-4 gap-3">
                    {[
                      { label: "Total items",      value: totalItems, trend: "↑ 12% this month",  trendColor: "#4ade80", flash: true  },
                      { label: "Low stock alerts", value: "14",       trend: "Requires attention", trendColor: "#6b6b6b", valueColor: "#f87171" },
                      { label: "Active loans",     value: "38",       trend: "6 due this week",   trendColor: "#6b6b6b", valueColor: "#60a5fa" },
                      { label: "Warehouses",       value: "5",        trend: "All operational",   trendColor: "#4ade80" },
                    ].map((stat) => (
                      <motion.div
                        key={stat.label + stat.value}
                        className="p-3.5 rounded-lg border border-[#2a2a2a] flex flex-col gap-1"
                        animate={
                          stat.flash && phase === "counter-flash"
                            ? { backgroundColor: ["rgba(77,124,111,0.3)", "rgba(77,124,111,0)"] }
                            : { backgroundColor: "rgba(28,28,28,1)" }
                        }
                        transition={{ duration: 1.4 }}
                      >
                        <span className="text-[11px] text-[#6b6b6b]">{stat.label}</span>
                        <span
                          className="font-mono text-[22px] font-bold leading-none"
                          style={{ color: stat.valueColor ?? "#f0f0f0" }}
                        >
                          {stat.value}
                        </span>
                        <span className="text-[11px]" style={{ color: stat.trendColor }}>
                          {stat.trend}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Table */}
                  <div className="rounded-lg overflow-hidden border border-[#2a2a2a]">
                    {/* Header */}
                    <div className="grid grid-cols-[2fr_1.5fr_1fr_1.2fr_1fr] bg-[#242424] px-4 h-9 items-center">
                      {["Item name", "SKU", "Stock", "Warehouse", "Status"].map((h) => (
                        <span key={h} className="text-[11px] font-semibold text-[#6b6b6b]">{h}</span>
                      ))}
                    </div>

                    {/* Static rows */}
                    {tableItems.map((item) => {
                      const st = statusConfig[item.status as keyof typeof statusConfig];
                      return (
                        <div
                          key={item.sku}
                          className="grid grid-cols-[2fr_1.5fr_1fr_1.2fr_1fr] px-4 h-10 items-center border-t border-[#2a2a2a] hover:bg-[#1a1a1a] transition-colors"
                        >
                          <span className="text-[12px] text-[#f0f0f0]">{item.name}</span>
                          <span className="font-mono text-[11px] text-[#a0a0a0]">{item.sku}</span>
                          <span className="font-mono text-[12px] font-bold" style={{ color: stockColor(item.stock) }}>
                            {item.stock}
                          </span>
                          <span className="text-[12px] text-[#a0a0a0]">{item.warehouse}</span>
                          <span
                            className="inline-flex px-2.5 py-0.5 rounded-full text-[11px] font-medium w-fit"
                            style={{ color: st.color, background: st.bg }}
                          >
                            {st.label}
                          </span>
                        </div>
                      );
                    })}

                    {/* Animated new row */}
                    <AnimatePresence>
                      {showRow && (
                        <motion.div
                          key="new-row"
                          className="overflow-hidden border-t border-[#2a2a2a]"
                          initial={{ height: 0 }}
                          animate={{ height: 40 }}
                          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        >
                          <motion.div
                            className="grid grid-cols-[2fr_1.5fr_1fr_1.2fr_1fr] px-4 h-10 items-center"
                            initial={{ opacity: 0, y: 10, backgroundColor: "rgba(77,124,111,0.38)" }}
                            animate={{
                              opacity: 1,
                              y: 0,
                              backgroundColor:
                                phase === "add-row"
                                  ? "rgba(77,124,111,0.38)"
                                  : "rgba(77,124,111,0)",
                            }}
                            transition={{
                              opacity:         { duration: 0.2 },
                              y:               { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
                              backgroundColor: { duration: 1.8 },
                            }}
                          >
                            <span className="text-[12px] text-[#f0f0f0]">{newItem.name}</span>
                            <span className="font-mono text-[11px] text-[#a0a0a0]">{newItem.sku}</span>
                            <span className="font-mono text-[12px] font-bold" style={{ color: stockColor(newItem.stock) }}>
                              {newItem.stock}
                            </span>
                            <span className="text-[12px] text-[#a0a0a0]">{newItem.warehouse}</span>
                            <span
                              className="inline-flex px-2.5 py-0.5 rounded-full text-[11px] font-medium w-fit"
                              style={{ color: s.color, background: s.bg }}
                            >
                              {s.label}
                            </span>
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
