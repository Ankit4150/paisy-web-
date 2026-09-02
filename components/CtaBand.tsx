export default function CtaBand() {
  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-24 sm:pb-28">
      <div className="relative overflow-hidden rounded-[32px] brand-gradient px-8 py-16 sm:py-20 text-center">
        <div
          className="absolute inset-0 opacity-[0.15] mix-blend-overlay"
          style={{
            backgroundImage:
              "repeating-linear-gradient(115deg, rgba(255,255,255,0.5) 0px, rgba(255,255,255,0.5) 1px, transparent 1px, transparent 40px)",
          }}
        />
        <div className="relative">
          <p className="text-[13px] uppercase tracking-wide text-white/80 mb-3">
            Get started today
          </p>
          <h2 className="font-display font-semibold text-[32px] sm:text-[44px] leading-[1.1] tracking-tight text-white max-w-2xl mx-auto text-balance">
            Your money, moving at internet speed.
          </h2>
          <p className="mt-4 text-[16px] text-white/85 max-w-md mx-auto">
            Open a free Paisy account in minutes and get your first virtual
            card instantly.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-[15px] font-medium text-ink"
            >
              Get the App
            </a>
            <a
              href="#"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-white/40 px-7 py-3.5 text-[15px] font-medium text-white hover:bg-white/10 transition-colors"
            >
              Talk to us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
