import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { BookOpen, Home as HomeIcon, DollarSign, Briefcase, Leaf, TrendingUp, PiggyBank, Building, Zap, Lock, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react';
import styles from '../styles/Home.module.css';

export default function Home() {
  const router = useRouter();

  const handleCategoryClick = (category) => {
    router.push(`/select-bank?category=${encodeURIComponent(category)}`);
  };

  const categories = [
    { name: 'Education Loans', icon: BookOpen },
    { name: 'Home Loans', icon: HomeIcon },
    { name: 'Personal Loans', icon: DollarSign },
    { name: 'MSME / Business Loans', icon: Briefcase },
    { name: 'Agriculture Loans', icon: Leaf },
    { name: 'Savings Accounts', icon: PiggyBank },
    { name: 'Fixed Deposits', icon: TrendingUp },
    { name: 'Government-backed schemes', icon: Building },
  ];

  const features = [
    { icon: Zap, title: 'Instant Matching', description: 'Get personalized results in seconds based on your eligibility' },
    { icon: Lock, title: '100% Private', description: 'No data storage. Your information is never saved or shared' },
    { icon: CheckCircle, title: 'Verified Data', description: 'All schemes are from official bank sources and updated regularly' },
  ];

  return (
    <>
      <Head>
        <title>FinAgent - Financial Scheme Guidance System</title>
        <meta name="description" content="Discover financial schemes tailored to your needs with intelligent matching" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.logo}>
            <span className={styles.logoText}>Fin<span className={styles.highlight}>Agent</span></span>
          </div>
        </header>

        <main className={styles.main}>
          <div className={styles.hero}>
            {/* Hero Section */}
            <div className={styles.heroContent}>
              <h1 className={styles.title}>
                Find the <span className={styles.neonText}>Perfect</span> Financial Scheme
              </h1>
              <p className={styles.subtitle}>
                Intelligent scheme matching powered by transparent rule-based matching.
                Discover financial products tailored to your needs in seconds.
              </p>
            </div>

            {/* Primary CTA */}
            <div className={styles.ctaSection}>
              <div className={styles.ctaContainer}>
                <Link href="/quick-filter">
                  <button className={styles.ctaButton}>
                    <span className={styles.ctaLabel}>Find Your Perfect Scheme</span>
                    <ArrowRight size={20} />
                  </button>
                </Link>
                <Link href="/select-bank">
                  <button className={styles.secondaryButton}>
                    Browse by Bank
                  </button>
                </Link>
              </div>
            </div>

            {/* Features Grid */}
            <div className={styles.features}>
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div key={idx} className={styles.featureCard}>
                    <Icon className={styles.featureIcon} size={28} />
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                );
              })}
            </div>

            {/* Categories Preview */}
            <div className={styles.categoriesSection}>
              <h2 className={styles.sectionTitle}>Browse by Category</h2>
              <div className={styles.categoriesGrid}>
                {categories.map((category, idx) => {
                  const Icon = category.icon;
                  return (
                    <button
                      key={idx}
                      className={styles.categoryTag}
                      onClick={() => handleCategoryClick(category.name)}
                    >
                      <Icon size={20} />
                      <span>{category.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Disclaimer */}
            <div className={styles.disclaimer}>
              <AlertCircle size={20} />
              <p>
                <strong>Educational Purpose:</strong> Scheme information is for informational use only. 
                Always verify with official bank sources before applying.
              </p>
            </div>
          </div>
        </main>

        <footer className={styles.footer}>
          <p>FinAgent • Intelligent Financial Scheme Guidance • Secure • Private • Trusted</p>
        </footer>
      </div>
    </>
  );
}
