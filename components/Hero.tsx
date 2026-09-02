import Image from "next/image";
import { CreditCard, Zap, ArrowLeftRight } from "lucide-react";

function PhoneMockup() {
  return (
    <div className="hero-phone" aria-label="Paisy mobile app preview">
      <div className="hero-phone-screen">
        <div className="hero-phone-status">
          <span>9:41</span>
          <div className="hero-phone-status-icons">
            <span className="signal">▮▮▮</span>
            <span>⌁</span>
            <span className="battery">▭</span>
          </div>
        </div>

        <div className="hero-balance-label">TOTAL BALANCE</div>
        <div className="hero-balance">$4,286.50</div>

        <div className="hero-bank-card">
          <Image
            src="/assets/cards/physical-card.jpeg"
            alt="Paisy Legacy physical metal card"
            fill
            sizes="350px"
            className="hero-bank-card-image"
          />
        </div>

        <div className="hero-transactions">
          <div className="hero-transaction">
            <div className="hero-transaction-icon"><Zap size={18} strokeWidth={2} /></div>
            <div className="hero-transaction-copy">
              <strong>Crypto top-up</strong>
              <span>2 min ago</span>
            </div>
            <b>+$500.00</b>
          </div>

          <div className="hero-transaction">
            <div className="hero-transaction-icon"><CreditCard size={17} strokeWidth={2} /></div>
            <div className="hero-transaction-copy">
              <strong>Aroma Coffee</strong>
              <span>Tokyo, JP</span>
            </div>
            <b>−$6.40</b>
          </div>

          <div className="hero-transaction">
            <div className="hero-transaction-icon"><ArrowLeftRight size={17} strokeWidth={2} /></div>
            <div className="hero-transaction-copy">
              <strong>USDT → USD</strong>
              <span>Auto-convert</span>
            </div>
            <b>$212.10</b>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="hero-section">
      <div className="hero-grid" />
      <div className="hero-glow hero-glow-left" />
      <div className="hero-glow hero-glow-right" />

      <div className="hero-inner">
        <div className="hero-copy">
          <h1 className="hero-title">
            <span>One card for <em>crypto</em></span>
            <span><strong>and cash,</strong> <em>everywhere</em></span>
            <span><strong>you spend.</strong></span>
          </h1>

          <p className="hero-description">
            Paisy turns your crypto and everyday cash into one spendable
            balance: a virtual card in seconds, a physical card that taps anywhere
            Visa is accepted, and transfers that move at the speed of the internet.
          </p>

          <div className="hero-actions">
            <a id="get-app" href="#" className="hero-primary">Get the App <span>→</span></a>
            <a href="#how-it-works" className="hero-secondary">See how it works</a>
          </div>
        </div>

        <div className="hero-device-wrap">
          <PhoneMockup />
        </div>
      </div>
    </section>
  );
}
