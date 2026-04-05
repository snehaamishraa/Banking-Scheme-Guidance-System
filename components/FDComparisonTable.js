import styles from '../styles/FDComparison.module.css';

function formatCurrency(value) {
  return `INR ${Number(value || 0).toLocaleString('en-IN', { maximumFractionDigits: 0 })}`;
}

export default function FDComparisonTable({ comparedOptions }) {
  if (!comparedOptions || comparedOptions.length === 0) {
    return null;
  }

  const recommended = comparedOptions.slice(0, 2);

  return (
    <div className={styles.wrapper}>
      <div className={styles.headerRow}>
        <h3>Compare FD Options</h3>
        <p>Sorted by best maturity return</p>
      </div>

      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Bank Name</th>
              <th>Interest Rate</th>
              <th>Tenure</th>
              <th>Minimum Deposit</th>
              <th>Estimated Returns</th>
              <th>Maturity Amount</th>
            </tr>
          </thead>
          <tbody>
            {comparedOptions.map((option) => (
              <tr key={option.id} className={option.isBestReturn ? styles.bestRow : ''}>
                <td>
                  <div className={styles.bankCell}>
                    <strong>{option.bankName}</strong>
                    <div className={styles.tags}>
                      {option.isBestReturn && <span className={styles.bestTag}>Best Return</span>}
                      {option.isHighestInterest && <span className={styles.rateTag}>Highest Interest</span>}
                    </div>
                  </div>
                </td>
                <td>{option.appliedRate}%</td>
                <td>{option.tenure}</td>
                <td>{formatCurrency(option.minimumDeposit)}</td>
                <td>{formatCurrency(option.interestEarned)}</td>
                <td>{formatCurrency(option.maturityAmount)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.recommendedBox}>
        <h4>Recommended for You</h4>
        <div className={styles.recommendedGrid}>
          {recommended.map((item) => (
            <div key={`${item.id}-recommended`} className={styles.recommendedCard}>
              <h5>{item.bankName}</h5>
              <p>Maturity: {formatCurrency(item.maturityAmount)}</p>
              <p>Rate Used: {item.appliedRate}%</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
