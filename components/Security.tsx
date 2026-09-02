import { Lock, Fingerprint, Radar, Vault } from "lucide-react";
import Image from "next/image";

const points = [
  {
    icon: Lock,
    title: "Encrypted by default",
    desc: "256-bit encryption on every transaction and stored record.",
  },
  {
    icon: Fingerprint,
    title: "Biometric login",
    desc: "Face and fingerprint unlock, plus 2FA on every device.",
  },
  {
    icon: Radar,
    title: "Real-time monitoring",
    desc: "Automated fraud detection flags unusual activity instantly.",
  },
  {
    icon: Vault,
    title: "Segregated custody",
    desc: "Client funds are held apart from company operating funds.",
  },
];

export default function Security() {
  return (
    <section id="security" className="mx-auto max-w-7xl px-6 lg:px-10 py-14 md:py-10 w-full">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <div className="relative aspect-[4/3] md:aspect-[5/4] overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#0a0f1a]">
          <Image
            src="/assets/security/security-visual.png"
            alt="Paisy Legacy card and mobile security visual"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-contain"
          />
        </div>

        <div>
          <p className="text-[13px] uppercase tracking-wide text-blue-soft mb-3">
            Security first
          </p>
          <h2 className="font-display font-semibold text-[32px] sm:text-[40px] leading-[1.15] tracking-tight">
            Your money, protected at every layer.
          </h2>
          <p className="mt-4 text-[16px] text-muted leading-relaxed max-w-lg">
            Funds are held with regulated custody and banking partners,
            every session is protected by biometric authentication, and
            you&apos;re always one tap away from freezing your card.
          </p>

          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            {points.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-white/[0.06] border border-white/[0.08] flex items-center justify-center shrink-0 mt-0.5">
                  <Icon size={16} className="text-blue-soft" strokeWidth={1.75} />
                </div>
                <div>
                  <p className="text-[14.5px] font-medium">{title}</p>
                  <p className="text-[13.5px] text-muted mt-0.5 leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <a
            href="#"
            className="mt-6 inline-flex items-center rounded-full border border-white/15 px-6 py-3 text-[14.5px] font-medium hover:bg-white/[0.06] transition-colors"
          >
            Learn about security
          </a>
        </div>
      </div>
    </section>
  );
}
