import { useState } from 'react';
import styles from '../styles/InfoIcon.module.css';

export default function InfoIcon({ title, description, children }) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className={styles.infoContainer}>
      {children}
      <button
        type="button"
        className={styles.infoButton}
        onClick={() => setShowTooltip(!showTooltip)}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        title={title}
      >
        ⓘ
      </button>

      {showTooltip && (
        <div className={styles.tooltip}>
          <div className={styles.tooltipContent}>
            {title && <strong className={styles.tooltipTitle}>{title}</strong>}
            <p className={styles.tooltipText}>{description}</p>
          </div>
          <div className={styles.tooltipArrow}></div>
        </div>
      )}
    </div>
  );
}
