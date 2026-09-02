import Image from "next/image";
import { Check } from "lucide-react";

const bullets = [
  "Accepted worldwide",
  "Instant card issuance",
  "Secure and fully encrypted",
  "Manage from the Paisy app",
];

const cards = [
  {
    label: "Virtual Card",
    src: "/assets/cards/virtual-card.png",
    alt: "Paisy Virtual Black card",
  },
  {
    label: "Physical Card",
    src: "/assets/cards/physical-card.jpeg",
    alt: "Paisy Legacy physical metal card",
  },
];

export default function CardShowcase() {
  return (
    <section id="card" className="mx-auto max-w-7xl px-6 lg:px-10 py-14 md:py-10 w-full">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <div className="order-2 lg:order-1">
          <p className="text-[13px] uppercase tracking-wide text-blue-soft mb-3">
            Your Cards
          </p>
          <h2 className="font-display font-semibold text-[32px] sm:text-[40px] leading-[1.15] tracking-tight">
            Physical &amp; Virtual Card
          </h2>
          <p className="mt-4 text-[16px] text-muted leading-relaxed max-w-lg">
            Pay your way. Online or in real life.
          </p>

          <ul className="mt-7 space-y-3.5">
            {bullets.map((b) => (
              <li key={b} className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full border border-blue-soft/40 flex items-center justify-center shrink-0">
                  <Check size={13} className="text-blue-soft" strokeWidth={2.5} />
                </span>
                <span className="text-[14.5px] text-text/90">{b}</span>
              </li>
            ))}
          </ul>

          <a
            href="#"
            className="mt-8 inline-flex items-center gap-2 rounded-full brand-gradient px-6 py-3 text-[14.5px] font-semibold text-white hover:opacity-90 transition-opacity"
          >
            Manage Cards <span aria-hidden>→</span>
          </a>
        </div>

        <div className="order-1 lg:order-2 flex items-center justify-center gap-6 sm:gap-8">
          {cards.map(({ label, src, alt }) => (
            <div key={label} className="flex flex-col items-center gap-4 w-1/2 max-w-[260px]">
              <span className="text-[14px] text-muted">{label}</span>
              <div className="w-full paisy-card-image-wrap">
                <Image
                  src={src}
                  alt={alt}
                  width={499}
                  height={785}
                  priority
                  className="paisy-card-image rounded-[18px]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
