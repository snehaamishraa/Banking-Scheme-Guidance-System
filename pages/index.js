import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  ChartNoAxesColumn,
  Clock3,
  Layers,
  Lock,
  Moon,
  Shield,
  Sparkles,
  Sun,
  Workflow,
} from 'lucide-react';
import styles from '../styles/Home.module.css';
import BrandLogo from '../components/BrandLogo';

export default function Home({ theme = 'light', toggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const marqueeTrackRef = useRef(null);
  const marqueeInnerRef = useRef(null);
  const marqueeSpacerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const revealItems = document.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.revealed);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => {
      revealItems.forEach((item) => observer.unobserve(item));
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const updateMarqueeDistance = () => {
      if (!marqueeTrackRef.current || !marqueeInnerRef.current || !marqueeSpacerRef.current) {
        return;
      }

      const distance = marqueeInnerRef.current.scrollWidth;
      const gap = marqueeSpacerRef.current.getBoundingClientRect().width;
      marqueeTrackRef.current.style.setProperty('--marquee-distance', `${distance}px`);
      marqueeTrackRef.current.style.setProperty('--marquee-gap-distance', `${gap}px`);
    };

    updateMarqueeDistance();
    window.addEventListener('resize', updateMarqueeDistance);

    return () => window.removeEventListener('resize', updateMarqueeDistance);
  }, []);

  const features = [
    {
      icon: Sparkles,
      title: 'AI-Powered Matching',
      description: 'Personalized scheme recommendations in seconds using clear eligibility rules.',
    },
    {
      icon: Shield,
      title: 'Security First',
      description: 'No unnecessary data collection with robust privacy controls at every step.',
    },
    {
      icon: Banknote,
      title: 'Verified Bank Schemes',
      description: 'Curated from official banking sources so you can compare with confidence.',
    },
  ];

  const steps = [
    {
      title: 'Tell Us Your Goal',
      description: 'Choose your intent, bank preferences, and eligibility details in guided steps.',
      icon: Layers,
    },
    {
      title: 'Compare Smartly',
      description: 'See matched schemes with transparent criteria, rates, and key terms side by side.',
      icon: ChartNoAxesColumn,
    },
    {
      title: 'Apply Faster',
      description: 'Move ahead with confidence using clear next steps and relevant scheme insights.',
      icon: Workflow,
    },
  ];

  const benefits = [
    'Modern, intuitive workflow designed for first-time and experienced users.',
    'Clear comparison views that reduce confusion and decision fatigue.',
    'Professional experience optimized for desktop and mobile.',
  ];

  const trustItems = [
    { label: 'Verified Schemes', value: '22+' },
    { label: 'Partner Banks', value: '9' },
    { label: 'Avg. Match Time', value: '< 60 sec' },
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Entrepreneur',
      text: 'FinAgent helped me shortlist the right business loan in minutes, not days.',
    },
    {
      name: 'Priya Singh',
      role: 'Student',
      text: 'The education loan recommendations were accurate and easy to understand.',
    },
    {
      name: 'Amit Patel',
      role: 'Homebuyer',
      text: 'Finally, a platform that makes financial decisions feel structured and transparent.',
    },
  ];

  return (
    <>
      <Head>
        <title>FinAgent - Smart Financial Scheme Discovery</title>
        <meta
          name="description"
          content="Discover, compare, and choose the right financial schemes with confidence."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <header className={styles.header}>
          <nav className={`${styles.navbar} ${isScrolled ? styles.navbarScrolled : ''}`}>
            <BrandLogo size="md" />
            <div className={styles.navLinks}>
              <a href="#features">Features</a>
              <a href="#how-it-works">How It Works</a>
              <a href="#benefits">Benefits</a>
              <a href="#about">About</a>
            </div>
            <div className={styles.navActions}>
              <Link href="/get-started" className={styles.navCta}>
                Try Now
              </Link>
              <button
                type="button"
                className={styles.themeToggleNav}
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
              >
                {theme === 'light' ? <Moon size={18} aria-hidden="true" /> : <Sun size={18} aria-hidden="true" />}
              </button>
            </div>
          </nav>
        </header>

        <div className={styles.globalTagline} role="region" aria-label="Site Tagline">
          <div className={styles.globalTaglineTrack} ref={marqueeTrackRef}>
            <div className={styles.trackInner} ref={marqueeInnerRef}>
              <span>Finagent-Har Kadam,Aapke Finance Ke Sath</span>
              <span>Finagent-Har Kadam,Aapke Finance Ke Sath</span>
              <span>Finagent-Har Kadam,Aapke Finance Ke Sath</span>
              <span>Finagent-Har Kadam,Aapke Finance Ke Sath</span>
              <span>Finagent-Har Kadam,Aapke Finance Ke Sath</span>
              <span>Finagent-Har Kadam,Aapke Finance Ke Sath</span>
            </div>
            <div className={styles.trackSpacer} ref={marqueeSpacerRef} aria-hidden="true" />
            <div className={styles.trackInner} aria-hidden="true">
              <span>Finagent-Har Kadam,Aapke Finance Ke Sath</span>
              <span>Finagent-Har Kadam,Aapke Finance Ke Sath</span>
              <span>Finagent-Har Kadam,Aapke Finance Ke Sath</span>
              <span>Finagent-Har Kadam,Aapke Finance Ke Sath</span>
              <span>Finagent-Har Kadam,Aapke Finance Ke Sath</span>
              <span>Finagent-Har Kadam,Aapke Finance Ke Sath</span>
            </div>
          </div>
        </div>

        <main className={styles.main}>
          <section className={`${styles.heroSection} ${styles.reveal}`} id="home" data-reveal>
            <div className={styles.heroGrid}>
              <div className={`${styles.heroContent} ${styles.reveal}`} data-reveal>
                <p className={styles.heroKicker}>Premium Fintech Assistant</p>
                <h1 className={styles.heroTitle}>
                  Find Schemes That Fit <span className={styles.accent}>Your Life</span>
                </h1>
                <p className={styles.heroSubtitle}>
                  Make confident banking decisions faster with curated recommendations matched to
                  your profile, verified eligibility, and financial objectives.
                </p>
                <div className={styles.heroCTA}>
                  <Link href="/get-started" className={styles.primaryBtn}>
                    Get Started
                    <ArrowRight size={18} />
                  </Link>
                  <Link href="/about" className={styles.secondaryBtn}>
                    Learn More
                  </Link>
                </div>
                <div className={styles.heroTrustRow}>
                  <Clock3 size={16} />
                  <span>Average discovery time under one minute</span>
                </div>
              </div>

              <div className={`${styles.heroVisual} ${styles.reveal}`} data-reveal>
                <div className={styles.mockPanel}>
                  <h3>Top Match</h3>
                  <p>Business Growth Loan</p>
                  <div className={styles.progressTrack}>
                    <div className={styles.progressFill} />
                  </div>
                  <ul>
                    <li>
                      <BadgeCheck size={16} /> Match Score: 96%
                    </li>
                    <li>
                      <BadgeCheck size={16} /> Rate Band: Competitive
                    </li>
                    <li>
                      <BadgeCheck size={16} /> Processing: Fast Track
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <a href="#features" className={styles.scrollIndicator} aria-label="Scroll to features">
              <span />
            </a>
          </section>

          <section className={styles.featuresSection} id="features">
            <div className={`${styles.sectionHeader} ${styles.reveal}`} data-reveal>
              <h2>Designed for Better Financial Decisions</h2>
              <p>
                Everything you need to discover and compare schemes in one polished experience.
              </p>
            </div>
            <div className={styles.featuresGrid}>
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <article key={idx} className={`${styles.featureCard} ${styles.reveal}`} data-reveal>
                    <div className={styles.featureIconBox}>
                      <Icon size={24} />
                    </div>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </article>
                );
              })}
            </div>
          </section>

          <section className={styles.howItWorksSection} id="how-it-works">
            <div className={`${styles.sectionHeader} ${styles.reveal}`} data-reveal>
              <h2>How It Works</h2>
              <p>A streamlined 3-step flow built for clarity.</p>
            </div>
            <div className={styles.stepsGrid}>
              {steps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <article key={idx} className={`${styles.stepCard} ${styles.reveal}`} data-reveal>
                    <div className={styles.stepTopRow}>
                      <span className={styles.stepIndex}>{String(idx + 1).padStart(2, '0')}</span>
                      <Icon size={20} />
                    </div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </article>
                );
              })}
            </div>
          </section>

          <section className={styles.benefitsSection} id="benefits">
            <div className={`${styles.benefitsGrid} ${styles.reveal}`} data-reveal>
              <div className={styles.benefitsContent}>
                <h2>Why Teams and Individuals Trust FinAgent</h2>
                <p>
                  Built with a premium-first approach, FinAgent combines a clean interface and
                  practical decision support for modern banking discovery.
                </p>
                <ul>
                  {benefits.map((benefit, idx) => (
                    <li key={idx}>
                      <Lock size={16} />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.trustGrid}>
                {trustItems.map((item, idx) => (
                  <article key={idx} className={styles.trustCard}>
                    <h3>{item.value}</h3>
                    <p>{item.label}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className={styles.testimonialsSection} id="testimonials">
            <div className={`${styles.sectionHeader} ${styles.reveal}`} data-reveal>
              <h2>What Users Say</h2>
              <p>Trusted by users across categories and goals.</p>
            </div>
            <div className={styles.testimonialsGrid}>
              {testimonials.map((testimonial, idx) => (
                <article key={idx} className={`${styles.testimonialCard} ${styles.reveal}`} data-reveal>
                  <p className={styles.testimonialText}>&quot;{testimonial.text}&quot;</p>
                  <div className={styles.testimonialAuthor}>
                    <h4>{testimonial.name}</h4>
                    <span>{testimonial.role}</span>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className={`${styles.ctaSection} ${styles.reveal}`} id="about" data-reveal>
            <h2>Ready to Find Your Perfect Scheme?</h2>
            <p>Start your guided journey and shortlist the best fit in minutes.</p>
            <Link href="/get-started" className={styles.ctaBigBtn}>
              Start Now
              <ArrowRight size={24} />
            </Link>
          </section>
        </main>

        <footer className={styles.footer}>
          <div className={styles.footerContent}>
            <div className={styles.footerSection}>
              <h4>FinAgent</h4>
              <p>Professional financial scheme discovery for modern users.</p>
            </div>
            <div className={styles.footerSection}>
              <h5>Quick Links</h5>
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#features">Features</a>
                </li>
                <li>
                  <a href="#how-it-works">How It Works</a>
                </li>
              </ul>
            </div>
            <div className={styles.footerSection}>
              <h5>Resources</h5>
              <ul>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/schemes">Schemes</Link>
                </li>
                <li>
                  <Link href="/get-started">Get Started</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <p>&copy; 2026 FinAgent. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
