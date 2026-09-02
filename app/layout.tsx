import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const spaceGrotesk = localFont({
  src: "./fonts/SpaceGrotesk.ttf",
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = localFont({
  src: "./fonts/InterVariable.woff2",
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Paisy — Spend Crypto & Cash Anywhere with One Card",
  description:
    "Paisy is the global money app: a crypto-and-cash card, a multi-currency wallet, and instant transfers — built for spending, saving and getting paid across 150+ countries.",
  icons: {
    icon: "/assets/logo/paisy-mark-64.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} antialiased bg-base text-text`}
      >
        {children}
      </body>
    </html>
  );
}
