import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from '../styles/BrandLogo.module.css';

export default function BrandLogo({ href = '/', withLink = true, size = 'md' }) {
  const sizeClass = styles[`size_${size}`] || styles.size_md;
  const [hasImage, setHasImage] = useState(false);

  useEffect(() => {
    let mounted = true;
    const imgCheck = typeof window !== 'undefined' ? new window.Image() : null;
    if (imgCheck) {
      imgCheck.src = '/logo.png';
      imgCheck.onload = () => {
        if (mounted) setHasImage(true);
      };
      imgCheck.onerror = () => {
        if (mounted) setHasImage(false);
      };
    }
    return () => {
      mounted = false;
    };
  }, []);

  const logo = (
    <span className={`${styles.logoWrap} ${sizeClass}`}>
      <span className={styles.logoIcon} aria-hidden="true">
        {hasImage ? (
          <img src="/logo.png" alt="FinAgent" className={styles.logoImg} />
        ) : (
          <span className={styles.logoImage}>
            <Image
              src="/logos/finagent%20logo.jpeg"
              alt="FinAgent"
              width={48}
              height={48}
              priority
            />
          </span>
        )}
      </span>
      <span className={styles.logoText}>
        Fin<span className={styles.highlight}>Agent</span>
      </span>
    </span>
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

