import Link from 'next/link';
import styles from '../styles/BrandLogo.module.css';

export default function BrandLogo({ href = '/', withLink = true }) {
  const logo = (
    <span className={styles.logoText}>
      Fin<span className={styles.highlight}>Agent</span>
    </span>
  );

  if (!withLink) {
    return <div className={styles.logoWrap}>{logo}</div>;
  }

  return (
    <Link href={href} className={styles.logoWrap}>
      {logo}
    </Link>
  );
}
