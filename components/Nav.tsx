import Image from "next/image";

const links = [
  { label: "The Card", href: "#card" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Security", href: "#security" },
  { label: "Business", href: "#business" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-base/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-[76px] flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 shrink-0">
          <Image
            src="/assets/logo/paisy-mark-64.png"
            alt="Paisy"
            width={30}
            height={30}
            priority
          />
          <span className="font-display font-semibold text-[19px] tracking-tight">
            Paisy
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-[14.5px] text-muted hover:text-text transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <a
            href="#"
            className="hidden sm:inline text-[14.5px] text-muted hover:text-text transition-colors"
          >
            Log In
          </a>
          <a
            href="#get-app"
            className="inline-flex items-center rounded-full brand-gradient px-5 py-2.5 text-[14px] font-medium text-white shadow-[0_8px_24px_-8px_rgba(124,58,237,0.7)] hover:shadow-[0_8px_30px_-6px_rgba(124,58,237,0.85)] transition-shadow"
          >
            Get the App
          </a>
        </div>
      </div>
    </header>
  );
}
