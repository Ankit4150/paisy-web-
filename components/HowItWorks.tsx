const steps = [
  {
    n: "1",
    title: "Create your account",
    desc: "Verify your identity in the app — most accounts are approved in under five minutes.",
  },
  {
    n: "2",
    title: "Fund your balance",
    desc: "Top up with crypto, a bank transfer, or a linked debit card.",
  },
  {
    n: "3",
    title: "Get your card",
    desc: "Spend online instantly with a virtual card, or order a physical one.",
  },
  {
    n: "4",
    title: "Spend & earn",
    desc: "Tap to pay anywhere, track every transaction, and earn cashback.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="mx-auto max-w-7xl px-6 lg:px-10 py-24 sm:py-28"
    >
      <div className="max-w-2xl mb-14">
        <p className="text-[13px] uppercase tracking-wide text-blue-soft mb-3">
          How it works
        </p>
        <h2 className="font-display font-semibold text-[32px] sm:text-[40px] leading-[1.15] tracking-tight">
          From sign-up to spending, in minutes.
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] rounded-3xl overflow-hidden border border-white/[0.06]">
        {steps.map((s) => (
          <div key={s.n} className="bg-base p-8">
            <span className="font-display text-[15px] text-muted-2">
              {s.n}
            </span>
            <h3 className="font-display font-medium text-[18px] mt-4 mb-2">
              {s.title}
            </h3>
            <p className="text-[14px] text-muted leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>

      <a
        href="#"
        className="mt-8 inline-flex items-center text-[14.5px] font-medium text-blue-soft gap-1.5"
      >
        See the full walkthrough <span aria-hidden>›</span>
      </a>
    </section>
  );
}
