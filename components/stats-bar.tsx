const stats = [
  { value: "200+", label: "teams trust Obsid" },
  { value: "50K+", label: "items tracked daily" },
  { value: "99.9%", label: "uptime SLA" },
  { value: "EN / ES", label: "fully bilingual" },
];

export function StatsBar() {
  return (
    <div className="w-full bg-[#111111] border-y border-[#1c1c1c]">
      <div className="max-w-[1440px] mx-auto px-20 h-20 flex items-center justify-center">
        {stats.map((stat, i) => (
          <div key={stat.value} className="flex items-center">
            {i > 0 && <div className="w-px h-9 bg-[#2a2a2a] mx-12" />}
            <div className="flex items-center gap-3">
              <span className="font-mono text-[22px] font-bold text-[#4d7c6f]">
                {stat.value}
              </span>
              <span className="text-[13px] text-[#6b6b6b]">{stat.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
