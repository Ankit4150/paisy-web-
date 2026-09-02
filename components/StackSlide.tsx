import { ReactNode } from "react";

/**
 * Pins its children to the viewport while the user scrolls through this
 * slide's height, then lets the next section scroll up and cover it —
 * the "fixed hero, new content slides in over it" effect from the
 * reference (KAST) site.
 *
 * IMPORTANT: only wrap content whose height you control and that's
 * close to one viewport tall. If the pinned content is much taller than
 * the screen, the extra content stays invisible for the whole pinned
 * phase and only appears once it unsticks — that reads as a jump/snap.
 * That's why this is used for the hero only; everything else below it
 * uses a plain (non-sticky) "cover" panel instead.
 *
 * Active on all breakpoints, including mobile, using dvh units so
 * mobile browser chrome (address bar show/hide) doesn't cause jumps.
 */
export default function StackSlide({
  children,
  z,
  tone = "base",
  first = false,
}: {
  children: ReactNode;
  z: number;
  tone?: "base" | "surface";
  first?: boolean;
}) {
  return (
    <div
      className={[
        "relative sticky top-0 min-h-[100dvh] flex flex-col justify-center",
        tone === "surface" ? "bg-surface" : "bg-base",
        first
          ? ""
          : "rounded-t-[36px] sm:rounded-t-[56px] shadow-[0_-60px_100px_-40px_rgba(0,0,0,0.6)]",
      ].join(" ")}
      style={{ zIndex: z }}
    >
      {children}
    </div>
  );
}
