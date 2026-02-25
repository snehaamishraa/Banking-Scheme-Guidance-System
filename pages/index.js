import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Banking Scheme Guidance System</title>
        <meta name="description" content="Discover banking schemes tailored to your needs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.logo}>
            <span className={styles.logoIcon}>🏦</span>
            <span className={styles.logoText}>BankScheme<span className={styles.highlight}>Finder</span></span>
          </div>
        </header>

        <main className={styles.main}>
          <div className={styles.hero}>
            <h1 className={styles.title}>
              Find the <span className={styles.neonText}>Perfect</span> Banking Scheme
            </h1>
            <p className={styles.subtitle}>
              A smart, rule-based guidance system that helps you discover banking schemes 
              tailored to your unique eligibility and financial goals.
            </p>
            
            <div className={styles.features}>
              <div className={styles.featureCard}>
                <span className={styles.featureIcon}>🎯</span>
                        <div className={styles.ctaContainer}>
                          <Link href="/quick-filter">
                            <button className={styles.ctaButton}>
                              Find Your Perfect Scheme
                              <span className={styles.arrow}>→</span>
                            </button>
                          </Link>
                          <Link href="/select-bank">
                            <button className={styles.secondaryButton}>
                              Browse by Bank
                            </button>
                          </Link>
                        </div>
                <p>Get immediate results using rule-based filtering logic</p>
              </div>
              <div className={styles.featureCard}>
                <span className={styles.featureIcon}>🔒</span>
                <h3>No Data Storage</h3>
                <p>Your information is never saved or shared</p>
              </div>
            </div>

            <Link href="/select-bank">
              <button className={styles.ctaButton}>
                Explore Schemes
                <span className={styles.arrow}>→</span>
              </button>
            </Link>

            <div className={styles.disclaimer}>
              <p>
                <strong>⚠️ Educational Purpose Only:</strong> Scheme information based on publicly available 
                data from official Indian bank sources. For the most current details, please visit official 
                bank websites or contact banks directly.
              </p>
              <Link href="/about" className={styles.aboutLink}>
                Learn More About Data Sources & Ethics →
              </Link>
            </div>
          </div>
        </main>

        <footer className={styles.footer}>
          <p>🏦 Banking Scheme Guidance • Real Bank Data • Secure & Private • Educational Purpose</p>
        </footer>
      </div>
    </>
  );
}
