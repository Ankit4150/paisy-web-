const stats = [
  { value: "250K+", label: "Active accounts worldwide" },
  { value: "40+", label: "Countries supported" },
  { value: "$2.1B+", label: "Processed in transactions" },
  { value: "4.8/5", label: "Average app store rating" },
];

export default function CardStats() {
  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-white/[0.06] pt-12">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="font-display font-semibold text-[28px] sm:text-[32px]">
              {s.value}
            </p>
            <p className="text-[13px] text-muted-2 mt-1">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
