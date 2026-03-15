"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

type StatConfig = {
  label: string;
  // numeric value to animate to
  target: number;
  // how to format the final animated number into a display string
  format: (n: number) => string;
};

const statConfigs: StatConfig[] = [
  { label: "warehouse teams",  target: 340,  format: (n) => `${Math.round(n)}+`     },
  { label: "items tracked daily", target: 50, format: (n) => `${Math.round(n)}K+`   },
  { label: "uptime SLA",       target: 99.9, format: (n) => `${n.toFixed(1)}%`      },
];

// "EN / ES" is static — no count-up makes sense
const staticStat = { value: "EN / ES", label: "fully bilingual" };

function AnimatedNumber({ target, format, duration = 1200 }: {
  target: number;
  format: (n: number) => string;
  duration?: number;
}) {
  const [display, setDisplay] = useState(format(0));
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const start = performance.now();
    const step = (ts: number) => {
      const progress = Math.min((ts - start) / duration, 1);
      // ease-out-cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(format(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, target, format, duration]);

  return <span ref={ref}>{display}</span>;
}

export function StatsBar() {
  return (
    <div className="w-full bg-[#111111] border-y border-[#1c1c1c]">
      <div className="max-w-[1440px] mx-auto px-5 md:px-20 py-5 md:py-0 md:h-20 grid grid-cols-2 md:flex md:items-center md:justify-center gap-0">

        {statConfigs.map((stat, i) => (
          <div
            key={stat.label}
            className={`flex items-center justify-center md:justify-start py-4 md:py-0 ${
              i % 2 === 0 ? "border-r border-[#2a2a2a] md:border-r-0" : ""
            } ${
              i < 2 ? "border-b border-[#2a2a2a] md:border-b-0" : ""
            }`}
          >
            {i > 0 && <div className="hidden md:block w-px h-9 bg-[#2a2a2a] mx-10" />}
            <div className="flex items-center gap-3">
              <span className="font-mono text-[20px] md:text-[22px] font-bold text-[#4d7c6f]">
                <AnimatedNumber target={stat.target} format={stat.format} />
              </span>
              <span className="text-[12px] md:text-[13px] text-[#888888]">{stat.label}</span>
            </div>
          </div>
        ))}

        {/* Static bilingual stat */}
        <div className="flex items-center justify-center md:justify-start py-4 md:py-0">
          <div className="hidden md:block w-px h-9 bg-[#2a2a2a] mx-10" />
          <div className="flex items-center gap-3">
            <span className="font-mono text-[20px] md:text-[22px] font-bold text-[#4d7c6f]">
              {staticStat.value}
            </span>
            <span className="text-[12px] md:text-[13px] text-[#888888]">{staticStat.label}</span>
          </div>
        </div>

      </div>
    </div>
  );
}
