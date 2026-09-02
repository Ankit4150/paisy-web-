const rails = ["VISA", "Mastercard", "Apple Pay", "Google Pay", "SWIFT", "SEPA"];

const stats = [
  { value: "170+", label: "countries" },
  { value: "30+", label: "currencies" },
  { value: "Up to 3%", label: "cashback" },
  { value: "$2.1B+", label: "processed" },
];

export default function TrustStrip() {
  return (
    <section className="border-y border-white/[0.06]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-10">
          {stats.map((s) => (
            <div key={s.label} className="text-center sm:text-left">
              <p className="font-display font-semibold text-[26px] sm:text-[30px]">
                {s.value}
              </p>
              <p className="text-[13px] text-muted-2 mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-center sm:justify-between gap-x-8 gap-y-3 border-t border-white/[0.06] pt-8">
          <p className="text-[12.5px] uppercase tracking-wide text-muted-2 w-full sm:w-auto text-center sm:text-left">
            Built on rails you already trust
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {rails.map((r) => (
              <span
                key={r}
                className="text-[14.5px] font-medium text-muted/80"
              >
                {r}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
