"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "Is Paisy available in my country?",
    a: "Paisy currently supports account opening in 40+ countries across Europe, Asia, Africa and the Americas, with card delivery available in most supported regions. Check availability during sign-up.",
  },
  {
    q: "What can I fund my balance with?",
    a: "You can top up with major cryptocurrencies, a bank transfer, or a linked debit card. Crypto top-ups are typically converted and available to spend within minutes.",
  },
  {
    q: "Does Paisy charge monthly fees?",
    a: "The Starter plan has no monthly fee. Paid plans unlock lower FX rates, higher limits and premium card designs — see the Pricing page for full details.",
  },
  {
    q: "How is my money protected?",
    a: "Funds are held with regulated banking and custody partners, sessions are protected with biometric authentication, and you can freeze your card instantly from the app. See our Security page for details.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="mx-auto max-w-5xl px-6 lg:px-10 py-24 sm:py-28">
      <div className="grid sm:grid-cols-[1fr_2fr] gap-8 sm:gap-14">
        <div>
          <p className="text-[13px] uppercase tracking-wide text-blue-soft mb-3">
            Questions
          </p>
          <h2 className="font-display font-semibold text-[32px] sm:text-[36px] leading-[1.15] tracking-tight">
            Frequently asked questions
          </h2>
        </div>

        <div className="divide-y divide-white/[0.08] border-t border-white/[0.08]">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-[15.5px] font-medium">{f.q}</span>
                  <Plus
                    size={18}
                    className={`shrink-0 text-muted transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-[14.5px] text-muted leading-relaxed pb-5 pr-8">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <a
        href="#"
        className="mt-4 sm:mt-0 sm:ml-[calc(33.33%+3.5rem)] inline-flex items-center text-[14.5px] font-medium text-blue-soft gap-1.5"
      >
        View all FAQs <span aria-hidden>›</span>
      </a>
    </section>
  );
}
