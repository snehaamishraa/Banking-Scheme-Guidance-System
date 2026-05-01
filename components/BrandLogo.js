import Link from 'next/link';
import styles from '../styles/BrandLogo.module.css';

export default function BrandLogo({ href = '/', withLink = true, size = 'md' }) {
  const sizeClass = styles[`size_${size}`] || styles.size_md;

  const logo = (
    <div className={styles.logoStack}>
      <span className={`${styles.logoWrap} ${sizeClass}`}>
        <span className={styles.logoIcon} aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" opacity="0.9"/>
            <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
            <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.8"/>
          </svg>
        </span>
        <span className={styles.logoText}>
          Fin<span className={styles.highlight}>Agent</span>
        </span>
      </span>

      <div className={styles.headerTagline} aria-hidden="true">
        <div className={styles.headerTaglineTrack}>
          <span>Finagent-Har Kadam,Aapke Finance Ke Sath</span>
          <span aria-hidden="true">Finagent-Har Kadam,Aapke Finance Ke Sath</span>
        </div>
      </div>
    </div>
  );

  if (!withLink) {
    return <div className={styles.logoContainer}>{logo}</div>;
  }

  return (
    <Link href={href} className={styles.logoContainer} aria-label="FinAgent Home">
      {logo}
    </Link>
  );
}

