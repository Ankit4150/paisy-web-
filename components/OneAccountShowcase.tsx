import Image from "next/image";

type Card = {
  eyebrow: string;
  title: string;
  desc: string;
  linkLabel: string;
  href: string;
  image?: string;
  stat: { icon: string; value: string; caption: string };
};

const cards: Card[] = [
  {
    eyebrow: "STORE",
    title: "Store",
    desc: "Open a balance from anywhere, regardless of residency. Receive transfers and hold funds that move as freely as you do.",
    linkLabel: "USD ACCOUNTS",
    href: "#",
    stat: { icon: "🇺🇸", value: "8,888.42", caption: "Virtual Account · ****7891" },
  },
  {
    eyebrow: "EARN",
    title: "Earn",
    desc: "Turn idle cash into active capital. Earn a competitive APY plus bonus rewards with risk-adjusted vaults.",
    linkLabel: "PAISY EARN",
    href: "#",
    image: "/assets/showcase/earn.webp",
    stat: { icon: "$", value: "142.07", caption: "Current APY 5.6%" },
  },
  {
    eyebrow: "MOVE",
    title: "Move",
    desc: "Send dollars, your local currency, or crypto to friends and family anywhere in the world — 24/7, instantly, with no hidden fees.",
    linkLabel: "PAISY PAY",
    href: "#",
    image: "/assets/showcase/move.webp",
    stat: { icon: "↔", value: "Send money", caption: "Jasper · Kai · 0x95…5452" },
  },
  {
    eyebrow: "SPEND",
    title: "Spend",
    desc: "The Paisy Card is accepted at millions of merchants worldwide. Pay in dollars, earn cashback on every purchase.",
    linkLabel: "PAISY CARD",
    href: "#card",
    image: "/assets/showcase/paisy t3d.png",
    stat: { icon: "★", value: "Founder's Card", caption: "Up to 5% total rewards" },
  },
];

function ShowcaseCard({ card }: { card: Card }) {
  return (
    <div>
      <p className="text-[13px] uppercase tracking-wide text-blue-soft mb-3">
        {card.eyebrow}
      </p>
      <h3 className="font-display font-semibold text-[24px] sm:text-[28px] leading-[1.15] tracking-tight mb-3">
        {card.title}
      </h3>
      <p className="text-[15px] text-muted leading-relaxed max-w-md">
        {card.desc}
      </p>
      <a
        href={card.href}
        className="mt-4 inline-flex items-center gap-1.5 text-[13.5px] font-medium text-blue-soft hover:gap-2.5 transition-all"
      >
        {card.linkLabel} <span aria-hidden>→</span>
      </a>

      <div className="mt-6 relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/[0.08]">
        {card.image ? (
          <Image
            src={card.image}
            alt={`${card.title} — Paisy`}
            fill
            sizes="(min-width: 1024px) 45vw, 90vw"
            className="object-cover"
          />
        ) : (
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 30% 20%, rgba(59,130,246,.30), transparent 55%), radial-gradient(circle at 75% 80%, rgba(56,120,210,.28), transparent 50%), linear-gradient(135deg, #0B111F 0%, #0A0F1C 60%, #05080F 100%)",
            }}
          />
        )}

        <div className="absolute left-4 right-4 bottom-4 sm:left-6 sm:right-auto sm:bottom-6 rounded-xl bg-black/45 backdrop-blur-md border border-white/10 px-4 py-3 sm:px-5 sm:py-4 max-w-[240px]">
          <div className="flex items-center gap-1.5 text-[13px] text-white/70">
            <span aria-hidden>{card.stat.icon}</span>
            <span className="font-semibold text-white text-[17px] sm:text-[19px] leading-tight">
              {card.stat.value}
            </span>
          </div>
          <p className="mt-1 text-[11.5px] text-white/60 leading-snug">
            {card.stat.caption}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function OneAccountShowcase() {
  return (
    <section
      id="one-account"
      className="mx-auto max-w-7xl px-6 lg:px-10 py-16 md:py-20 w-full"
    >
      <h2 className="font-display font-semibold text-[32px] sm:text-[44px] leading-[1.1] tracking-tight max-w-3xl mb-12 md:mb-16">
        One account for every move.
      </h2>

      <div className="grid md:grid-cols-2 gap-x-14 gap-y-14 md:gap-y-20">
        {cards.map((card) => (
          <ShowcaseCard key={card.eyebrow} card={card} />
        ))}
      </div>
    </section>
  );
}
