"use client";
import { useState } from "react";
import { FadeIn } from "./fade-in";

const faqs = [
  {
    q: "How does the free plan differ from Pro?",
    a: "The free Starter plan supports up to 200 items and 1 warehouse — perfect for small teams getting started. Pro unlocks unlimited items, up to 10 warehouses, QR loan tracking, advanced reports, and a full audit trail.",
  },
  {
    q: "Can I import my existing inventory data?",
    a: "Yes. Obsid supports CSV import so you can bring in your existing spreadsheets on day one. No manual re-entry required.",
  },
  {
    q: "How does QR loan tracking work?",
    a: "Each item gets a unique QR code you can print or display. Staff scan the code to check items in or out, and Obsid logs the full loan history — who borrowed it, when, and from which warehouse.",
  },
  {
    q: "Is the EN / ES bilingual support available on all plans?",
    a: "Yes — full English and Spanish support is available on every plan, including the free tier. The interface, emails, and PDF reports all respect the user's preferred language.",
  },
  {
    q: "Can I control what each team member can access?",
    a: "Absolutely. Obsid has a role-based access system with three levels: Admin (full access), Manager (create/edit, no delete), and Staff (view and loan operations only). Enterprise plans add SSO/SAML for centralized identity management.",
  },
  {
    q: "Is there a contract or minimum commitment?",
    a: "No contracts and no minimum term. You can cancel anytime from your account settings and your data remains exportable for 30 days after cancellation.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[#1c1c1c]">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
        aria-expanded={open}
      >
        <span className="text-[15px] font-medium text-[#f0f0f0] group-hover:text-white transition-colors">
          {q}
        </span>
        <span
          className="shrink-0 w-5 h-5 flex items-center justify-center rounded-full border border-[#2a2a2a] transition-transform duration-200"
          style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
          aria-hidden="true"
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <line x1="5" y1="1" x2="5" y2="9" stroke="#6b6b6b" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="1" y1="5" x2="9" y2="5" stroke="#6b6b6b" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: open ? "200px" : "0px" }}
      >
        <p className="pb-5 text-[14px] text-[#888888] leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

export function Faq() {
  return (
    <section className="w-full bg-[#0a0a0a] border-t border-[#1c1c1c] py-16 md:py-20 px-5 md:px-20">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center gap-10 md:gap-12">

        <FadeIn className="flex flex-col items-center gap-3 text-center">
          <span className="text-[11px] font-bold tracking-[0.18em] text-[#4d7c6f] uppercase">
            FAQ
          </span>
          <h2 className="text-[32px] md:text-[40px] font-bold text-[#f0f0f0]">
            Common questions.
          </h2>
        </FadeIn>

        <FadeIn className="w-full max-w-[720px]">
          {faqs.map((item) => (
            <FaqItem key={item.q} q={item.q} a={item.a} />
          ))}
        </FadeIn>

      </div>
    </section>
  );
}
