import {
  CreditCard,
  Wallet,
  Zap,
  Gift,
  ArrowLeftRight,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: CreditCard,
    title: "Virtual & physical cards",
    desc: "Issue a virtual Paisy Card in seconds and spend online immediately. Order a physical card for tap-to-pay anywhere Visa is accepted.",
    href: "#card",
    linkLabel: "Explore the card",
  },
  {
    icon: Wallet,
    title: "Multi-currency wallet",
    desc: "Hold crypto and 30+ fiat currencies side by side. Paisy auto-converts at the point of sale, so you always spend what's needed.",
    href: "#how-it-works",
    linkLabel: "See how it works",
  },
  {
    icon: Zap,
    title: "Instant top-ups",
    desc: "Fund your balance from a crypto wallet, exchange, or bank transfer. Most top-ups land in your Paisy balance in under a minute.",
    href: "#",
    linkLabel: "View top-up fees",
  },
  {
    icon: Gift,
    title: "Cashback & rewards",
    desc: "Earn up to 3% back on eligible purchases and unlock referral bonuses when friends join and activate their card.",
    href: "#card",
    linkLabel: "See reward tiers",
  },
  {
    icon: ArrowLeftRight,
    title: "Borderless transfers",
    desc: "Send to another Paisy user instantly, or move funds to a bank account in 150+ countries with transparent, upfront fees.",
    href: "#business",
    linkLabel: "Transfers for teams",
  },
  {
    icon: ShieldCheck,
    title: "Security & controls",
    desc: "Freeze your card, set merchant limits and confirm every login with biometrics — all from the app, in real time.",
    href: "#security",
    linkLabel: "Read about security",
  },
];

export default function Features() {
  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-10 py-14 md:py-10 w-full">
      <div className="max-w-2xl mb-10">
        <p className="text-[13px] uppercase tracking-wide text-blue-soft mb-3">
          Everything, one app
        </p>
        <h2 className="font-display font-semibold text-[32px] sm:text-[40px] leading-[1.15] tracking-tight">
          Everything you need to move, spend and grow your money.
        </h2>
        <p className="mt-4 text-[16px] text-muted leading-relaxed">
          No more juggling five different apps for crypto, cards and
          transfers. Paisy brings your spending power into a single, secure
          balance.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map(({ icon: Icon, title, desc, href, linkLabel }) => (
          <div
            key={title}
            className="fold-card group rounded-2xl border border-white/[0.08] bg-base/60 p-6 hover:bg-base transition-colors"
          >
            <div className="w-9 h-9 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center mb-4">
              <Icon size={17} className="text-blue-soft" strokeWidth={1.75} />
            </div>
            <h3 className="font-display font-medium text-[17px] mb-1.5">
              {title}
            </h3>
            <p className="text-[13.5px] text-muted leading-relaxed mb-4">
              {desc}
            </p>
            <a
              href={href}
              className="text-[13.5px] font-medium text-blue-soft inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all"
            >
              {linkLabel} <span aria-hidden>›</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
