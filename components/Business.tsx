export default function Business() {
  return (
    <section id="business" className="mx-auto max-w-7xl px-6 lg:px-10 py-6 sm:py-10">
      <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-surface p-10 sm:p-14">
        <div className="pointer-events-none absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-violet/25 blur-[120px]" />
        <div className="relative grid lg:grid-cols-[1.3fr_1fr] gap-10 items-center">
          <div>
            <p className="text-[13px] uppercase tracking-wide text-blue-soft mb-3">
              For businesses
            </p>
            <h2 className="font-display font-semibold text-[30px] sm:text-[36px] leading-[1.15] tracking-tight max-w-lg">
              Paisy for teams, payroll and payouts.
            </h2>
            <p className="mt-4 text-[15.5px] text-muted leading-relaxed max-w-md">
              Issue corporate cards, automate contractor payouts in crypto or
              fiat, and reconcile everything from one dashboard — backed by
              the Paisy API.
            </p>
            <a
              href="#"
              className="mt-7 inline-flex items-center rounded-full brand-gradient px-6 py-3 text-[14.5px] font-medium text-white"
            >
              Explore Paisy Business
            </a>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <p className="text-[14px] font-medium">Payouts API</p>
              <p className="text-[13px] text-muted mt-1">
                Automate global payouts to contractors and vendors.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <p className="text-[14px] font-medium">Team cards</p>
              <p className="text-[13px] text-muted mt-1">
                Issue cards to your team with individual limits.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
