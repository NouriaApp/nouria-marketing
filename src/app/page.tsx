'use client';

import Image from 'next/image';
import logo from './logo.png';
import { Inter } from 'next/font/google';
import { useEffect } from 'react';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

const stats = [
  {
    value: '40%',
    title: 'of food purchased',
    subtitle: 'ends up wasted',
  },
  {
    value: '15hrs',
    title: 'spent planning',
    subtitle: 'meals each month',
  },
  {
    value: '$200+',
    title: 'lost monthly',
    subtitle: 'on unused groceries',
  },
];

const featureCards = [
  {
    eyebrow: 'Kitchen Intelligence',
    title: 'See your kitchen like a live system',
    text: 'Nouria organizes what you already have, what is running low, and what should be used next so your kitchen finally feels under control.',
  },
  {
    eyebrow: 'Daily Execution',
    title: 'Know exactly what to cook next',
    text: 'Instead of asking what to make every day, you open Nouria and get a clear plan built around your pantry, timing, and routine.',
  },
  {
    eyebrow: 'Waste Reduction',
    title: 'Buy less by using more of what you own',
    text: 'Nouria helps you cook through ingredients before they expire so fewer groceries disappear into the back of the fridge.',
  },
  {
    eyebrow: 'Operational Simplicity',
    title: 'Less planning. Less friction. Better food.',
    text: 'The experience is designed to remove the mental load of meal planning without turning cooking into another spreadsheet.',
  },
];

const panels = [
  {
    number: '01',
    title: 'Bring your kitchen online',
    text: 'Receipts, ingredients, pantry staples, and groceries come into one system so Nouria understands what your kitchen looks like right now.',
  },
  {
    number: '02',
    title: 'Nouria builds the daily decision layer',
    text: 'Meals, recommendations, and priorities update around what you have, what you like, and what should be used first.',
  },
  {
    number: '03',
    title: 'You open the app and just cook',
    text: 'No overthinking. No guessing what to buy. No wasting time trying to plan a perfect week.',
  },
];

export default function HomePage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      {
        threshold: 0.14,
      }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((element) => observer.observe(element));

    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return (
    <main className={`${inter.className} page-shell`}>
      <div className="site-glow site-glow-one" />
      <div className="site-glow site-glow-two" />
      <div className="site-glow site-glow-three" />

      <header className="navbar">
        <a className="brand" href="/" aria-label="Nouria home">
          <div className="brand-mark">
            <Image src={logo} alt="Nouria logo" fill sizes="40px" className="brand-image" priority />
          </div>
          <span className="brand-name">Nouria</span>
        </a>

        <nav className="nav-links" aria-label="Primary">
          <a href="/product">Product</a>
          <a href="/intelligence">Intelligence</a>
          <a href="/company">Company</a>
          <a href="/support">Support</a>
        </nav>

        <a className="nav-cta" href="/early-access">
          Early Access
        </a>
      </header>

      <section className="hero-section">
        <div className="hero-grid">
          <div className="hero-copy reveal is-visible">
            <div className="hero-chip">AI food operating system</div>

            <h1>
              The system for a
              <span>smarter kitchen.</span>
            </h1>

            <p className="hero-description">
              Nouria turns pantry chaos, meal decisions, and grocery waste into one clean,
              intelligent experience built for modern life.
            </p>

            <div className="hero-actions">
              <a className="primary-button" href="/early-access">
                Get Early Access
                <span className="button-arrow">→</span>
              </a>
              <a className="secondary-button" href="/product">
                Explore Product
              </a>
            </div>

            <div className="hero-micro">
              <span>No meal planning overload</span>
              <span>Less waste</span>
              <span>Sharper decisions</span>
            </div>
          </div>

          <div className="hero-visual reveal is-visible" aria-hidden="true">
            <div className="visual-orb visual-orb-a" />
            <div className="visual-orb visual-orb-b" />

            <div className="hero-card hero-card-back">
              <div className="glass-label">Kitchen State</div>
              <div className="glass-title">Everything you own, organized</div>
              <div className="mini-grid">
                <div className="mini-tile">
                  <span>Fresh</span>
                  <strong>18 items</strong>
                </div>
                <div className="mini-tile">
                  <span>Use next</span>
                  <strong>4 items</strong>
                </div>
                <div className="mini-tile">
                  <span>Meals ready</span>
                  <strong>12 ideas</strong>
                </div>
                <div className="mini-tile">
                  <span>Waste risk</span>
                  <strong>Low</strong>
                </div>
              </div>
            </div>

            <div className="phone-shell">
              <div className="phone-topbar">
                <div className="phone-dots">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="phone-top-pill">Nouria Intelligence</div>
              </div>

              <div className="phone-body">
                <div className="phone-logo-wrap">
                  <div className="phone-logo-mark">
                    <Image src={logo} alt="Nouria logo" fill sizes="76px" className="brand-image" />
                  </div>
                </div>

                <p className="phone-kicker">Tonight</p>
                <h3 className="phone-title">Lemon garlic salmon bowl</h3>
                <p className="phone-subtitle">Built from what is already in your kitchen.</p>

                <div className="phone-panel phone-panel-primary">
                  <span className="panel-label">Recommended now</span>
                  <strong>Uses 5 ingredients you already own</strong>
                </div>

                <div className="phone-panel-row">
                  <div className="phone-panel compact">
                    <span className="panel-label">Waste avoided</span>
                    <strong>$24 this week</strong>
                  </div>
                  <div className="phone-panel compact">
                    <span className="panel-label">Prep time</span>
                    <strong>18 min</strong>
                  </div>
                </div>
              </div>
            </div>

            <div className="floating-glass floating-left">Uses what you already have</div>
            <div className="floating-glass floating-right">Plans around real life</div>
            <div className="floating-glass floating-bottom">No kitchen guesswork</div>
          </div>
        </div>
      </section>

      <section className="stats-section reveal">
        <div className="section-heading">
          <span className="section-kicker">Why this matters</span>
          <h2>The kitchen is still one of the most broken systems in everyday life.</h2>
        </div>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <article className="stat-card" key={stat.title} style={{ transitionDelay: `${index * 80}ms` }}>
              <div className="stat-value">{stat.value}</div>
              <h3>{stat.title}</h3>
              <p>{stat.subtitle}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="feature-section">
        <div className="section-heading reveal">
          <span className="section-kicker">Designed for Nouria</span>
          <h2>A cleaner, sharper experience than another recipe or grocery app.</h2>
        </div>

        <div className="feature-grid">
          {featureCards.map((card, index) => (
            <article className="feature-card reveal" key={card.title} style={{ transitionDelay: `${index * 90}ms` }}>
              <span className="feature-eyebrow">{card.eyebrow}</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="system-section">
        <div className="system-shell reveal">
          <div className="system-copy">
            <span className="section-kicker">Nouria System</span>
            <h2>Built to feel premium, calm, and operational.</h2>
            <p>
              Nouria should not feel like work. The visual language is intentionally clean,
              elevated, and intelligent so the product feels more like a high end operating
              system than a cluttered utility app.
            </p>
          </div>

          <div className="system-stack">
            {panels.map((panel, index) => (
              <article className="system-panel" key={panel.number} style={{ transitionDelay: `${index * 110}ms` }}>
                <div className="system-number">{panel.number}</div>
                <div>
                  <h3>{panel.title}</h3>
                  <p>{panel.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="closing-section reveal">
        <div className="closing-shell">
          <span className="section-kicker">Coming soon</span>
          <h2>Less planning. Better decisions. A kitchen that finally runs well.</h2>
          <p>
            Nouria is building the intelligence layer for everyday food decisions.
          </p>
          <div className="hero-actions closing-actions">
            <a className="primary-button" href="/early-access">
              Join Early Access
              <span className="button-arrow">→</span>
            </a>
            <a className="secondary-button" href="/company">
              Learn More
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-brand">
          <div className="brand-mark footer-mark">
           <Image src={logo} alt="Nouria logo" fill sizes="32px" className="brand-image" />
          </div>
          <span className="brand-name">Nouria</span>
        </div>

        <div className="footer-links">
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
          <a href="/faq">FAQ</a>
          <a href="/feedback">Feedback</a>
          <a href="/report-a-bug">Report a Bug</a>
        </div>

        <div className="footer-copy">© 2026 Nouria. All rights reserved.</div>
      </footer>

      <style jsx>{`
        :global(html) {
          scroll-behavior: smooth;
        }

        :global(body) {
          margin: 0;
          background:
            radial-gradient(circle at top left, rgba(120, 209, 153, 0.16), transparent 30%),
            radial-gradient(circle at top right, rgba(169, 191, 255, 0.14), transparent 28%),
            linear-gradient(180deg, #f4f8f6 0%, #edf3f0 48%, #e9efec 100%);
          color: #08111f;
        }

        :global(*) {
          box-sizing: border-box;
        }

        .page-shell {
          position: relative;
          min-height: 100vh;
          overflow: clip;
          color: #0e1728;
          background: transparent;
        }

        .site-glow {
          position: absolute;
          border-radius: 999px;
          pointer-events: none;
          filter: blur(80px);
          opacity: 0.8;
        }

        .site-glow-one {
          left: -80px;
          top: 80px;
          width: 280px;
          height: 280px;
          background: rgba(122, 224, 159, 0.2);
        }

        .site-glow-two {
          right: -80px;
          top: 180px;
          width: 320px;
          height: 320px;
          background: rgba(172, 189, 255, 0.18);
        }

        .site-glow-three {
          left: 50%;
          top: 720px;
          width: 340px;
          height: 160px;
          transform: translateX(-50%);
          background: rgba(181, 211, 196, 0.18);
        }

        .navbar {
          position: sticky;
          top: 16px;
          z-index: 50;
          width: min(1280px, calc(100% - 32px));
          height: 76px;
          margin: 18px auto 0;
          padding: 0 18px 0 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          border: 1px solid rgba(255, 255, 255, 0.42);
          background: rgba(255, 255, 255, 0.48);
          box-shadow: 0 24px 60px rgba(20, 35, 66, 0.08);
          backdrop-filter: blur(26px) saturate(140%);
          -webkit-backdrop-filter: blur(26px) saturate(140%);
          border-radius: 24px;
        }

        .brand {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          color: #10192d;
          text-decoration: none;
          flex-shrink: 0;
        }

        .brand-mark {
          position: relative;
          width: 40px;
          height: 40px;
          border-radius: 14px;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.7);
          box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.75), 0 10px 24px rgba(22, 37, 64, 0.1);
        }

        .brand-image {
          object-fit: cover;
        }

        .brand-name {
          font-size: 1rem;
          font-weight: 700;
          letter-spacing: -0.04em;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 32px;
        }

        .nav-links a,
        .footer-links a {
          color: rgba(16, 25, 45, 0.72);
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 500;
          letter-spacing: -0.02em;
          transition: color 180ms ease, transform 180ms ease;
        }

        .nav-links a:hover,
        .footer-links a:hover {
          color: #0d1730;
          transform: translateY(-1px);
        }

        .nav-cta,
        .primary-button,
        .secondary-button {
          height: 52px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: transform 220ms ease, box-shadow 220ms ease, background 220ms ease, border-color 220ms ease;
          letter-spacing: -0.02em;
          font-weight: 600;
        }

        .nav-cta,
        .primary-button {
          padding: 0 22px;
          background: linear-gradient(180deg, #1d8b55 0%, #146f45 100%);
          color: #ffffff;
          box-shadow: 0 16px 34px rgba(26, 118, 74, 0.24);
        }

        .nav-cta:hover,
        .primary-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 20px 40px rgba(26, 118, 74, 0.28);
        }

        .secondary-button {
          padding: 0 22px;
          color: #0f1830;
          background: rgba(255, 255, 255, 0.42);
          border: 1px solid rgba(255, 255, 255, 0.56);
          box-shadow: 0 12px 30px rgba(16, 27, 49, 0.06);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
        }

        .secondary-button:hover {
          transform: translateY(-2px);
          border-color: rgba(255, 255, 255, 0.86);
        }

        .button-arrow {
          margin-left: 10px;
          font-size: 1.2rem;
          line-height: 1;
          animation: nudgeArrow 2.3s ease-in-out infinite;
        }

        .hero-section {
          width: min(1280px, calc(100% - 32px));
          margin: 28px auto 0;
          padding: 40px 0 10px;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.02fr) minmax(0, 0.98fr);
          gap: 34px;
          align-items: center;
        }

        .hero-copy,
        .hero-visual,
        .stat-card,
        .feature-card,
        .system-shell,
        .closing-shell {
          border: 1px solid rgba(255, 255, 255, 0.42);
          background: rgba(255, 255, 255, 0.42);
          box-shadow: 0 24px 60px rgba(18, 31, 56, 0.08);
          backdrop-filter: blur(26px) saturate(145%);
          -webkit-backdrop-filter: blur(26px) saturate(145%);
        }

        .hero-copy {
          border-radius: 34px;
          padding: 48px;
        }

        .hero-chip,
        .section-kicker,
        .glass-label,
        .feature-eyebrow,
        .panel-label {
          display: inline-flex;
          align-items: center;
          min-height: 34px;
          padding: 0 14px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.52);
          border: 1px solid rgba(255, 255, 255, 0.64);
          color: #31556d;
          font-size: 0.84rem;
          font-weight: 600;
          letter-spacing: -0.02em;
        }

        .hero-copy h1 {
          margin: 24px 0 0;
          font-size: clamp(3.8rem, 6.3vw, 6.2rem);
          line-height: 0.95;
          letter-spacing: -0.08em;
          font-weight: 700;
          color: #091223;
        }

        .hero-copy h1 span {
          display: block;
          color: #1c7e51;
        }

        .hero-description {
          margin: 24px 0 0;
          max-width: 620px;
          color: #4d5d73;
          font-size: 1.08rem;
          line-height: 1.7;
          letter-spacing: -0.02em;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 34px;
        }

        .hero-micro {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 24px;
        }

        .hero-micro span {
          min-height: 38px;
          padding: 0 14px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          background: rgba(255, 255, 255, 0.38);
          border: 1px solid rgba(255, 255, 255, 0.52);
          color: #55647a;
          font-size: 0.9rem;
        }

        .hero-visual {
  position: relative;
  min-height: 720px;
  border-radius: 34px;
  padding: 32px;
  overflow: hidden;
  isolation: isolate;
}

        .visual-orb {
          position: absolute;
          border-radius: 999px;
          filter: blur(70px);
          pointer-events: none;
        }

        .visual-orb-a {
          width: 240px;
          height: 240px;
          top: 50px;
          left: -30px;
          background: rgba(128, 229, 164, 0.22);
        }

        .visual-orb-b {
          width: 260px;
          height: 260px;
          right: -30px;
          bottom: 100px;
          background: rgba(182, 195, 255, 0.24);
        }

        .hero-card {
          position: absolute;
          border-radius: 28px;
          border: 1px solid rgba(255, 255, 255, 0.44);
          background: rgba(255, 255, 255, 0.34);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          box-shadow: 0 18px 44px rgba(18, 31, 56, 0.08);
        }

       .hero-card-back {
          top: 18px;
          right: 10px;
          width: 292px;
          padding: 22px;
          z-index: 1;
          opacity: 0.55;
          transform: scale(0.96);
          animation: cardDrift 7s ease-in-out infinite;
        }

        .glass-title {
          margin-top: 14px;
          color: #0b1630;
          font-size: 1.22rem;
          line-height: 1.15;
          letter-spacing: -0.04em;
          font-weight: 700;
        }

        .mini-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
          margin-top: 18px;
        }

        .mini-tile {
          padding: 14px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.38);
          border: 1px solid rgba(255, 255, 255, 0.5);
        }

        .mini-tile span,
        .phone-kicker,
        .phone-subtitle,
        .system-panel p,
        .feature-card p,
        .stat-card p,
        .closing-shell p {
          color: #56667c;
        }

        .mini-tile span {
          display: block;
          font-size: 0.8rem;
        }

        .mini-tile strong {
          display: block;
          margin-top: 8px;
          color: #10203b;
          font-size: 1rem;
          letter-spacing: -0.03em;
        }

        .phone-shell {
          position: absolute;
          left: 50%;
          top: 88px;
          z-index: 6;
          transform: translateX(-50%);
          width: 360px;
          min-height: 570px;
          border-radius: 44px;
          padding: 14px;
          background: linear-gradient(180deg, rgba(23, 35, 58, 0.98) 0%, rgba(10, 18, 31, 0.98) 100%);
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 38px 90px rgba(10, 17, 31, 0.34), inset 0 1px 0 rgba(255, 255, 255, 0.08), inset 0 -1px 0 rgba(0, 0, 0, 0.2);
          animation: phoneFloat 7s ease-in-out infinite;
        }

        .phone-topbar {
          height: 44px;
          padding: 0 12px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .phone-dots {
          display: flex;
          gap: 6px;
        }

        .phone-dots span {
          width: 6px;
          height: 6px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.38);
        }

        .phone-top-pill {
          height: 28px;
          padding: 0 10px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          background: rgba(255, 255, 255, 0.08);
          color: rgba(255, 255, 255, 0.72);
          font-size: 0.78rem;
        }

        .phone-body {
          position: relative;
          min-height: 498px;
          border-radius: 32px;
          padding: 28px 22px 22px;
          background: linear-gradient(180deg, #f4f8f6 0%, #edf3f0 100%);
          box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.55);
          overflow: hidden;
        }

        .phone-logo-wrap {
          display: flex;
          justify-content: center;
        }

        .phone-logo-mark {
          position: relative;
          width: 76px;
          height: 76px;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 12px 26px rgba(17, 31, 56, 0.12);
          background: #ffffff;
        }

        .phone-title {
          margin: 12px 0 0;
          color: #0c1730;
          font-size: 1.7rem;
          line-height: 1.06;
          letter-spacing: -0.06em;
          font-weight: 700;
        }

        .phone-kicker {
          margin: 20px 0 0;
          font-size: 0.92rem;
          letter-spacing: -0.02em;
        }

        .phone-subtitle {
          margin: 12px 0 0;
          font-size: 0.95rem;
          line-height: 1.55;
        }

        .phone-panel {
          margin-top: 18px;
          padding: 16px;
          border-radius: 22px;
          background: rgba(255, 255, 255, 0.72);
          border: 1px solid rgba(255, 255, 255, 0.82);
          box-shadow: 0 12px 28px rgba(15, 27, 49, 0.06);
        }

        .phone-panel strong {
          display: block;
          margin-top: 10px;
          color: #0e1a31;
          font-size: 1rem;
          letter-spacing: -0.03em;
        }

        .phone-panel-row {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
        }

        .compact {
          min-height: 112px;
        }

        .floating-glass {
  position: absolute;
  z-index: 5;
  min-height: 46px;
  padding: 0 16px;
  display: inline-flex;
  align-items: center;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(255, 255, 255, 0.82);
  box-shadow: 0 10px 24px rgba(16, 29, 52, 0.06);
  color: #4f6076;
  font-size: 0.86rem;
  max-width: 220px;
}

        .floating-left {
  left: -10px;
  top: 230px;
  animation: floatTag 5.4s ease-in-out infinite;
}

        .floating-right {
  right: -10px;
  top: 380px;
  animation: floatTag 5.9s ease-in-out infinite 0.3s;
}

       .floating-bottom {
  left: 50%;
  bottom: -10px;
  transform: translateX(-50%);
  animation: floatTagCenter 6s ease-in-out infinite 0.2s;
}

        .stats-section,
        .feature-section,
        .system-section,
        .closing-section {
          width: min(1280px, calc(100% - 32px));
          margin: 44px auto 0;
        }

        .section-heading {
          max-width: 860px;
          margin: 0 auto 28px;
          text-align: center;
        }

        .section-heading h2,
        .system-copy h2,
        .closing-shell h2 {
          margin: 18px 0 0;
          color: #0b1530;
          font-size: clamp(2.6rem, 4.8vw, 4.5rem);
          line-height: 0.98;
          letter-spacing: -0.07em;
          font-weight: 700;
        }

        .stats-grid,
        .feature-grid {
          display: grid;
          gap: 20px;
        }

        .stats-grid {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .stat-card {
          border-radius: 28px;
          padding: 34px 28px;
          text-align: center;
          transition: transform 240ms ease, box-shadow 240ms ease;
        }

        .stat-card:hover,
        .feature-card:hover,
        .system-panel:hover {
          transform: translateY(-4px);
        }

        .stat-value {
          color: #1e7e52;
          font-size: clamp(3.4rem, 5.8vw, 4.9rem);
          line-height: 1;
          letter-spacing: -0.08em;
          font-weight: 700;
        }

        .stat-card h3,
        .feature-card h3,
        .system-panel h3 {
          margin: 16px 0 0;
          color: #0d1730;
          font-size: 1.24rem;
          line-height: 1.15;
          letter-spacing: -0.04em;
          font-weight: 700;
        }

        .stat-card p {
          margin: 10px 0 0;
          font-size: 0.98rem;
          line-height: 1.5;
        }

        .feature-grid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 24px;
        }

        .feature-card {
          border-radius: 30px;
          padding: 32px;
          min-height: 260px;
          transition: transform 240ms ease, box-shadow 240ms ease;
        }

        .feature-eyebrow {
          color: #2d5b73;
        }

        .feature-card p,
        .system-panel p,
        .closing-shell p,
        .system-copy p {
          margin: 16px 0 0;
          font-size: 1rem;
          line-height: 1.68;
          letter-spacing: -0.02em;
        }

        .system-shell {
          border-radius: 34px;
          padding: 38px;
          display: grid;
          grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
          gap: 28px;
        }

        .system-copy {
          padding: 12px 8px 12px 8px;
        }

        .system-stack {
          display: grid;
          gap: 16px;
        }

        .system-panel {
          padding: 22px;
          border-radius: 24px;
          display: grid;
          grid-template-columns: 72px 1fr;
          gap: 18px;
          background: rgba(255, 255, 255, 0.38);
          border: 1px solid rgba(255, 255, 255, 0.48);
          box-shadow: 0 14px 30px rgba(16, 29, 52, 0.06);
          transition: transform 240ms ease, box-shadow 240ms ease;
        }

        .system-number {
          width: 72px;
          height: 72px;
          border-radius: 22px;
          display: grid;
          place-items: center;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.74) 0%, rgba(240, 247, 243, 0.8) 100%);
          color: #1b7c50;
          font-size: 1.1rem;
          font-weight: 700;
          letter-spacing: -0.04em;
          box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.75);
        }

        .closing-shell {
          border-radius: 34px;
          padding: 62px 32px;
          text-align: center;
        }

        .closing-shell p {
          max-width: 720px;
          margin-left: auto;
          margin-right: auto;
        }

        .closing-actions {
          justify-content: center;
        }

        .footer {
          width: min(1280px, calc(100% - 32px));
          margin: 44px auto 28px;
          min-height: 92px;
          padding: 24px 26px;
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: center;
          gap: 18px;
          border-radius: 26px;
          border: 1px solid rgba(255, 255, 255, 0.42);
          background: rgba(255, 255, 255, 0.38);
          box-shadow: 0 18px 46px rgba(20, 35, 66, 0.06);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
        }

        .footer-brand {
          display: inline-flex;
          align-items: center;
          gap: 12px;
        }

        .footer-mark {
          width: 32px;
          height: 32px;
          border-radius: 11px;
        }

        .footer-links {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 16px 28px;
        }

        .footer-copy {
          color: rgba(16, 25, 45, 0.66);
          font-size: 0.92rem;
          text-align: right;
        }

        .reveal {
          opacity: 0;
          transform: translateY(36px);
          transition: opacity 700ms ease, transform 700ms ease;
          will-change: transform, opacity;
        }

        .reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        @keyframes nudgeArrow {
          0%,
          100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(3px);
          }
        }

        @keyframes phoneFloat {
          0%,
          100% {
            transform: translateX(-50%) translateY(0);
          }
          50% {
            transform: translateX(-50%) translateY(-10px);
          }
        }

        @keyframes floatTag {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes floatTagCenter {
          0%,
          100% {
            transform: translateX(-50%) translateY(0);
          }
          50% {
            transform: translateX(-50%) translateY(-8px);
          }
        }

        @keyframes cardDrift {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-6px) rotate(-1deg);
          }
        }

        @media (max-width: 1180px) {
          .hero-grid,
          .system-shell {
            grid-template-columns: 1fr;
          }

          .hero-visual {
            min-height: 760px;
          }

          .hero-card-back {
            right: 10px;
          }
        }

        @media (max-width: 920px) {
          .navbar {
            top: 10px;
            height: auto;
            min-height: 76px;
            padding-top: 14px;
            padding-bottom: 14px;
            flex-wrap: wrap;
            justify-content: center;
          }

          .nav-links {
            order: 3;
            width: 100%;
            justify-content: center;
            flex-wrap: wrap;
            gap: 16px 22px;
          }

          .stats-grid,
          .feature-grid {
            grid-template-columns: 1fr;
          }

          .footer {
            grid-template-columns: 1fr;
            justify-items: center;
          }

          .footer-copy {
            text-align: center;
          }
        }

        @media (max-width: 720px) {
          .navbar,
          .hero-section,
          .stats-section,
          .feature-section,
          .system-section,
          .closing-section,
          .footer {
            width: min(100% - 18px, calc(100% - 18px));
          }

          .nav-links {
            display: none;
          }

          .nav-cta,
          .primary-button,
          .secondary-button {
            width: 100%;
          }

          .hero-copy,
          .hero-visual,
          .system-shell,
          .closing-shell,
          .stat-card,
          .feature-card {
            border-radius: 26px;
          }

          .hero-copy {
            padding: 28px 22px;
          }

          .hero-copy h1 {
            font-size: clamp(3rem, 14vw, 4.4rem);
          }

          .hero-visual {
            min-height: 690px;
            padding: 20px;
          }

          .phone-shell {
            width: 304px;
            min-height: 540px;
            top: 108px;
          }

          .hero-card-back {
            position: relative;
            top: 0;
            right: 0;
            width: 100%;
            margin-bottom: 18px;
          }

          .floating-left {
            left: -6px;
            top: 260px;
          }

          .floating-right {
            right: -6px;
            top: 388px;
          }

          .floating-bottom {
            bottom: -8px;
          }

          .system-shell {
            padding: 22px;
          }

          .system-panel {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  );
}