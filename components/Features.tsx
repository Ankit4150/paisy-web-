import Image from "next/image";
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
    iconBg: "bg-[#5B6EF5]/20",
    iconColor: "text-[#8C9BFF]",
    title: "Virtual & physical cards",
    desc: "Issue a virtual Paisy Card in seconds and spend online immediately. Order a physical card for tap-to-pay anywhere Visa is accepted.",
    href: "#card",
    linkLabel: "Explore the card",
    image: "/assets/features/feature-cards.png",
    imgW: 238,
    imgH: 305,
  },
  {
    icon: Wallet,
    iconBg: "bg-[#3B8CEB]/20",
    iconColor: "text-[#7FC0FF]",
    title: "Multi-currency wallet",
    desc: "Hold crypto and 30+ fiat currencies side by side. Paisy auto-converts at the point of sale, so you always spend what's needed.",
    href: "#how-it-works",
    linkLabel: "See how it works",
    image: "/assets/features/feature-wallet.png",
    imgW: 176,
    imgH: 326,
  },
  {
    icon: Zap,
    iconBg: "bg-[#1E3A66]/40",
    iconColor: "text-[#5FC4FF]",
    title: "Instant top-ups",
    desc: "Fund your balance from a crypto wallet, exchange, or bank transfer. Most top-ups land in your Paisy balance in under a minute.",
    href: "#",
    linkLabel: "View top-up fees",
    image: "/assets/features/feature-topups.png",
    imgW: 207,
    imgH: 305,
  },
  {
    icon: Gift,
    iconBg: "bg-[#8B5CF6]/20",
    iconColor: "text-[#C4A6FF]",
    title: "Cashback & rewards",
    desc: "Earn up to 3% back on eligible purchases and unlock referral bonuses when friends join and activate their card.",
    href: "#card",
    linkLabel: "Explore rewards",
    image: "/assets/features/feature-gift.png",
    imgW: 238,
    imgH: 303,
  },
  {
    icon: ArrowLeftRight,
    iconBg: "bg-[#14B8A6]/20",
    iconColor: "text-[#5EEAD4]",
    title: "Borderless transfers",
    desc: "Send to another Paisy user instantly, or move funds to a bank account in 150+ countries with transparent, low fees.",
    href: "#business",
    linkLabel: "Learn more",
    image: "/assets/features/feature-globe.png",
    imgW: 206,
    imgH: 303,
  },
  {
    icon: ShieldCheck,
    iconBg: "bg-[#7C3AED]/20",
    iconColor: "text-[#C4A6FF]",
    title: "Security & controls",
    desc: "Freeze your card, set merchant limits and confirm every login with biometrics — all from the app, in real time.",
    href: "#security",
    linkLabel: "Explore security",
    image: "/assets/features/feature-shield.png",
    imgW: 247,
    imgH: 303,
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
          Everything you need to move, spend and{" "}
          <span className="bg-[linear-gradient(120deg,var(--color-blue)_0%,var(--color-violet)_60%,var(--color-purple)_100%)] bg-clip-text text-transparent">
            grow your money.
          </span>
        </h2>
        <p className="mt-4 text-[16px] text-muted leading-relaxed">
          No more juggling five different apps for crypto, cards and
          transfers. Paisy brings your spending power into a single, secure
          balance.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map(
          ({
            icon: Icon,
            iconBg,
            iconColor,
            title,
            desc,
            href,
            linkLabel,
            image,
            imgW,
            imgH,
          }) => (
            <div
              key={title}
              className="fold-card group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-base/60 hover:bg-base transition-colors min-h-[380px]"
            >
              <div className="relative z-10 max-w-[52%] p-6 pr-1.5">
                <div
                  className={`w-9 h-9 rounded-full ${iconBg} flex items-center justify-center mb-4`}
                >
                  <Icon size={17} className={iconColor} strokeWidth={1.75} />
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

              <div
                className="pointer-events-none absolute right-0 bottom-0"
                style={{
                  maskImage:
                    "linear-gradient(to right, transparent 0%, black 14%)",
                  WebkitMaskImage:
                    "linear-gradient(to right, transparent 0%, black 14%)",
                }}
              >
                <Image
                  src={image}
                  alt={title}
                  width={imgW}
                  height={imgH}
                  className="block h-[300px] w-auto max-w-[290px] object-contain object-right-bottom"
                />
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}