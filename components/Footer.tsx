import Image from "next/image";

const columns = [
  {
    title: "Product",
    links: ["The Paisy Card", "How It Works", "Security", "Pricing & Fees", "Paisy for Business"],
  },
  {
    title: "Company",
    links: ["About Us", "Careers", "Blog", "Contact", "Help Center"],
  },
  {
    title: "Legal",
    links: ["Terms of Service", "Privacy Policy", "Cookie Policy", "Trust & Compliance"],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
        <div className="grid lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-12">
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5">
              <Image
                src="/assets/logo/paisy-mark-64.png"
                alt="Paisy"
                width={28}
                height={28}
              />
              <span className="font-display font-semibold text-[18px]">
                Paisy
              </span>
            </div>
            <p className="text-[13.5px] text-muted-2 leading-relaxed mt-4">
              Paisy is a global money app: spend crypto and cash from one
              card, move funds across 30+ currencies, and get paid back in
              real rewards — built for people who live online.
            </p>
            <div className="flex items-center gap-4 mt-5">
              {["Twitter", "LinkedIn", "Instagram", "Telegram"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="text-[12.5px] text-muted-2 hover:text-muted transition-colors"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-[13px] font-medium text-text mb-4">
                {col.title}
              </p>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-[13.5px] text-muted-2 hover:text-muted transition-colors"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[12.5px] text-muted-2">
            © 2026 Paisy Technologies, Inc. All rights reserved.
          </p>
          <p className="text-[12px] text-muted-2">United States (USD)</p>
        </div>

        <p className="text-[11.5px] text-muted-2/70 leading-relaxed mt-8 max-w-4xl">
          Paisy is a financial technology company, not a bank. Card issuance
          and payment services are provided by licensed banking and e-money
          partners in each supported region; deposit and custody protections
          vary by product and jurisdiction. Digital asset services carry
          risk, including price volatility and possible loss of value, and
          are not covered by government deposit insurance.
        </p>
      </div>
    </footer>
  );
}
