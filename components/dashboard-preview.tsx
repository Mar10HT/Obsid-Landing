const tableItems = [
  { name: "Laptop Dell XPS 15", sku: "DELL-XPS-001", stock: 24, warehouse: "Main HQ", status: "in-stock" },
  { name: "Monitor LG UltraWide", sku: "LG-UW-034", stock: 3, warehouse: "Warehouse B", status: "low-stock" },
  { name: "USB-C Hub 7-in-1", sku: "USB-C7-019", stock: 87, warehouse: "Main HQ", status: "on-loan" },
  { name: "Standing Desk Frame", sku: "DESK-FR-007", stock: 0, warehouse: "Warehouse A", status: "out-of-stock" },
  { name: "Mechanical Keyboard", sku: "KB-MEC-042", stock: 12, warehouse: "Main HQ", status: "in-stock" },
];

const statusConfig = {
  "in-stock": { label: "In stock", color: "#4ade80", bg: "rgba(74,222,128,0.1)" },
  "low-stock": { label: "Low stock", color: "#fbbf24", bg: "rgba(251,191,36,0.1)" },
  "on-loan": { label: "On loan", color: "#60a5fa", bg: "rgba(96,165,250,0.1)" },
  "out-of-stock": { label: "Out of stock", color: "#f87171", bg: "rgba(248,113,113,0.1)" },
} as const;

const stockColor = (stock: number) => {
  if (stock === 0) return "#f87171";
  if (stock <= 5) return "#fbbf24";
  return "#f0f0f0";
};

export function DashboardPreview() {
  return (
    <section className="w-full px-20 pb-20">
      <div className="max-w-[1440px] mx-auto flex justify-center">
        <div
          className="w-full max-w-[1100px] rounded-xl overflow-hidden border border-[#2a2a2a]"
          style={{ background: "#141414" }}
        >
          {/* Window chrome */}
          <div className="flex items-center justify-between px-5 h-12 bg-[#1c1c1c] border-b border-[#2a2a2a]">
            <div className="flex items-center gap-3">
              <div className="flex gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#f87171]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#fbbf24]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#4ade80]" />
              </div>
              <span className="text-xs text-[#6b6b6b] ml-2">
                Inventory / All items
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#242424]">
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                  <circle cx="7" cy="7" r="5" stroke="#6b6b6b" strokeWidth="1.5" />
                  <path d="M11 11L14 14" stroke="#6b6b6b" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <span className="text-xs text-[#6b6b6b]">Search items...</span>
              </div>
              <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#4d7c6f] text-xs font-semibold text-white">
                + Add item
              </button>
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
                { icon: "📦", label: "Inventory", active: true },
                { icon: "↔", label: "Transfers", active: false },
                { icon: "🔗", label: "Loans", active: false },
                { icon: "📊", label: "Reports", active: false },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`flex items-center gap-2.5 px-3 py-2 rounded-md text-[13px] font-medium ${
                    item.active
                      ? "bg-[#242424] text-[#f0f0f0]"
                      : "text-[#6b6b6b]"
                  }`}
                >
                  <span className={item.active ? "text-[#4d7c6f]" : ""}>
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
                  { label: "Total items", value: "2,847", trend: "↑ 12% this month", trendColor: "#4ade80" },
                  { label: "Low stock alerts", value: "14", trend: "Requires attention", trendColor: "#6b6b6b", valueColor: "#f87171" },
                  { label: "Active loans", value: "38", trend: "6 due this week", trendColor: "#6b6b6b", valueColor: "#60a5fa" },
                  { label: "Warehouses", value: "5", trend: "All operational", trendColor: "#4ade80" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="p-3.5 rounded-lg bg-[#1c1c1c] border border-[#2a2a2a] flex flex-col gap-1"
                  >
                    <span className="text-[11px] text-[#6b6b6b]">{s.label}</span>
                    <span
                      className="font-mono text-[22px] font-bold leading-none"
                      style={{ color: s.valueColor ?? "#f0f0f0" }}
                    >
                      {s.value}
                    </span>
                    <span className="text-[11px]" style={{ color: s.trendColor }}>
                      {s.trend}
                    </span>
                  </div>
                ))}
              </div>

              {/* Table */}
              <div className="rounded-lg overflow-hidden border border-[#2a2a2a] flex-1">
                {/* Table header */}
                <div className="grid grid-cols-[2fr_1.5fr_1fr_1.2fr_1fr] bg-[#242424] px-4 h-9 items-center">
                  {["Item name", "SKU", "Stock", "Warehouse", "Status"].map((h) => (
                    <span key={h} className="text-[11px] font-semibold text-[#6b6b6b]">
                      {h}
                    </span>
                  ))}
                </div>

                {/* Table rows */}
                {tableItems.map((item) => {
                  const s = statusConfig[item.status as keyof typeof statusConfig];
                  return (
                    <div
                      key={item.sku}
                      className="grid grid-cols-[2fr_1.5fr_1fr_1.2fr_1fr] px-4 h-10 items-center border-t border-[#2a2a2a] hover:bg-[#1a1a1a] transition-colors"
                    >
                      <span className="text-[12px] text-[#f0f0f0]">{item.name}</span>
                      <span className="font-mono text-[11px] text-[#a0a0a0]">{item.sku}</span>
                      <span
                        className="font-mono text-[12px] font-bold"
                        style={{ color: stockColor(item.stock) }}
                      >
                        {item.stock}
                      </span>
                      <span className="text-[12px] text-[#a0a0a0]">{item.warehouse}</span>
                      <div>
                        <span
                          className="inline-flex px-2.5 py-0.5 rounded-full text-[11px] font-medium"
                          style={{ color: s.color, background: s.bg }}
                        >
                          {s.label}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
