const quotes = [
  {
    quote:
      "I get paid in crypto and spend it the same day without ever touching an exchange. The card just works, everywhere I travel.",
    initials: "JM",
    name: "Jonas M.",
    role: "Freelance designer, Lisbon",
  },
  {
    quote:
      "Switching between my exchange and my bank used to take days. With Paisy it's one balance and one card, full stop.",
    initials: "AK",
    name: "Aisha K.",
    role: "Product manager, Nairobi",
  },
  {
    quote:
      "The spend controls sold me. I can freeze the card, cap a merchant, and see everything in real time from my phone.",
    initials: "RS",
    name: "Rahul S.",
    role: "Software engineer, Bengaluru",
  },
];

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24 sm:py-28">
      <div className="max-w-2xl mb-14">
        <p className="text-[13px] uppercase tracking-wide text-blue-soft mb-3">
          Trusted by our users
        </p>
        <h2 className="font-display font-semibold text-[32px] sm:text-[40px] leading-[1.15] tracking-tight">
          What people are saying about Paisy.
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {quotes.map((t) => (
          <div
            key={t.name}
            className="fold-card rounded-2xl border border-white/[0.08] bg-surface/60 p-7 flex flex-col justify-between"
          >
            <p className="text-[15px] leading-relaxed text-text/90">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="flex items-center gap-3 mt-7">
              <div className="w-9 h-9 rounded-full bg-surface-2 border border-white/10 flex items-center justify-center text-[11px] font-medium text-muted-2">
                {t.initials}
              </div>
              <div>
                <p className="text-[13.5px] font-medium">{t.name}</p>
                <p className="text-[12.5px] text-muted-2">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
