import Image from "next/image";

/**
 * Drop-in placeholder for real photography / product shots.
 * Swap it out later by putting the final asset in /public/assets/images
 * and replacing the call site with a plain <Image> tag.
 */
export default function ComingSoon({
  label = "Image coming soon",
  className = "",
  tone = "violet",
}: {
  label?: string;
  className?: string;
  tone?: "violet" | "blue" | "deep";
}) {
  const tones: Record<string, string> = {
    violet:
      "from-[#7FB1FF] via-[#3B82F6] to-[#1E4FC7]",
    blue: "from-[#7FB1FF] via-[#3B82F6] to-[#0E1A33]",
    deep: "from-[#1E4FC7] via-[#121A2C] to-[#070B14]",
  };

  return (
    <div
      className={`relative overflow-hidden rounded-[28px] border border-white/10 ${className}`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${tones[tone]} opacity-90`} />
      <div
        className="absolute inset-0 opacity-40 mix-blend-overlay"
        style={{
          backgroundImage:
            "repeating-linear-gradient(115deg, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 34px)",
        }}
      />
      <div className="absolute -right-10 -bottom-10 w-40 h-40 opacity-20">
        <Image
          src="/assets/logo/paisy-mark-256.png"
          alt=""
          width={256}
          height={256}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="relative h-full w-full flex flex-col items-center justify-center gap-3 py-16 px-6 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-black/25 backdrop-blur px-4 py-1.5 text-xs font-medium tracking-wide text-white/90 border border-white/15">
          <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
          {label}
        </span>
      </div>
    </div>
  );
}
