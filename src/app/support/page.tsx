'use client';

import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export default function ProductPage() {
  return (
    <main className={inter.className} style={styles.page}>
      
      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <p style={styles.tag}>Nouria Product</p>

          <h1 style={styles.title}>
            The system behind a
            <span style={styles.green}> smarter kitchen.</span>
          </h1>

          <p style={styles.subtitle}>
            Nouria replaces scattered decisions with a unified intelligence layer
            that understands your kitchen, your habits, and your real life.
          </p>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section style={styles.section}>
        <div style={styles.grid}>
          {features.map((f, i) => (
            <div key={i} style={styles.card}>
              <h3 style={styles.cardTitle}>{f.title}</h3>
              <p style={styles.cardDesc}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SYSTEM EXPLANATION */}
      <section style={styles.section}>
        <div style={styles.split}>
          <div>
            <h2 style={styles.sectionTitle}>
              Built as a complete system.
            </h2>
            <p style={styles.sectionText}>
              Nouria is not another recipe app. It connects your ingredients,
              your decisions, and your outcomes into one continuous loop.
              Every recommendation adapts to your real usage, not static inputs.
            </p>
          </div>

          <div style={styles.glassBox}>
            <p style={styles.glassTitle}>Nouria Loop</p>
            <ul style={styles.loopList}>
              <li>→ Understand inventory</li>
              <li>→ Predict usage</li>
              <li>→ Recommend meals</li>
              <li>→ Reduce waste</li>
              <li>→ Learn and improve</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={styles.ctaSection}>
        <div style={styles.ctaBox}>
          <h2 style={styles.ctaTitle}>
            Start building your kitchen system.
          </h2>
          <button style={styles.ctaButton}>
            Get Early Access →
          </button>
        </div>
      </section>

    </main>
  );
}

/* ================= STYLES ================= */

const styles: any = {
  page: {
    background: 'linear-gradient(180deg, #f6f7f8 0%, #eef1ef 100%)',
    minHeight: '100vh',
    paddingBottom: '80px',
  },

  hero: {
    padding: '120px 24px 60px',
    display: 'flex',
    justifyContent: 'center',
  },

  heroContent: {
    maxWidth: '900px',
  },

  tag: {
    fontSize: '14px',
    opacity: 0.6,
    marginBottom: '16px',
  },

  title: {
    fontSize: '64px',
    lineHeight: '1.05',
    fontWeight: 600,
    marginBottom: '20px',
  },

  green: {
    color: '#1f7a4f',
  },

  subtitle: {
    fontSize: '18px',
    opacity: 0.7,
    maxWidth: '600px',
  },

  section: {
    padding: '80px 24px',
    display: 'flex',
    justifyContent: 'center',
  },

  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '24px',
    maxWidth: '1000px',
    width: '100%',
  },

  card: {
    backdropFilter: 'blur(20px)',
    background: 'rgba(255,255,255,0.6)',
    borderRadius: '20px',
    padding: '28px',
    border: '1px solid rgba(255,255,255,0.4)',
    transition: '0.3s ease',
  },

  cardTitle: {
    fontSize: '20px',
    fontWeight: 600,
    marginBottom: '10px',
  },

  cardDesc: {
    fontSize: '15px',
    opacity: 0.7,
  },

  split: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '40px',
    maxWidth: '1000px',
    width: '100%',
    alignItems: 'center',
  },

  sectionTitle: {
    fontSize: '36px',
    marginBottom: '16px',
  },

  sectionText: {
    fontSize: '16px',
    opacity: 0.7,
  },

  glassBox: {
    backdropFilter: 'blur(20px)',
    background: 'rgba(255,255,255,0.5)',
    borderRadius: '20px',
    padding: '28px',
    border: '1px solid rgba(255,255,255,0.4)',
  },

  glassTitle: {
    fontWeight: 600,
    marginBottom: '12px',
  },

  loopList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    lineHeight: '2',
  },

  ctaSection: {
    padding: '100px 24px',
    display: 'flex',
    justifyContent: 'center',
  },

  ctaBox: {
    backdropFilter: 'blur(30px)',
    background: 'rgba(255,255,255,0.6)',
    borderRadius: '30px',
    padding: '60px',
    textAlign: 'center',
    maxWidth: '700px',
    width: '100%',
  },

  ctaTitle: {
    fontSize: '32px',
    marginBottom: '20px',
  },

  ctaButton: {
    background: '#1f7a4f',
    color: 'white',
    border: 'none',
    padding: '14px 28px',
    borderRadius: '999px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

/* ================= DATA ================= */

const features = [
  {
    title: 'Ingredient Intelligence',
    desc: 'Knows what you already have and builds around it.',
  },
  {
    title: 'Adaptive Planning',
    desc: 'Plans meals based on your real schedule and behavior.',
  },
  {
    title: 'Waste Reduction',
    desc: 'Predicts expiration and optimizes usage automatically.',
  },
  {
    title: 'Unified System',
    desc: 'Everything connects into one seamless kitchen flow.',
  },
];