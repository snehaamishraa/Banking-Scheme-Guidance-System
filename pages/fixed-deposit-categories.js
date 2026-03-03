import { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import styles from '../styles/SelectBank.module.css';

export default function FixedDepositCategories() {
  const router = useRouter();
  const fdTypes = [
    'Regular Fixed Deposit',
    'Senior Citizen Fixed Deposit',
    'Tax Saving Fixed Deposit',
    'Cumulative Fixed Deposit',
    'Non Cumulative Fixed Deposit',
    'Flexi Fixed Deposit',
    'Recurring Deposit'
  ];

  const fdDescriptions = {
    'Regular Fixed Deposit':
      'Standard FD where you lock a lump sum for a fixed tenure. Great for predictable savings.',
    'Senior Citizen Fixed Deposit':
      'FDs with higher interest rates available to depositors aged 60 and above.',
    'Tax Saving Fixed Deposit':
      '5‑year FD that qualifies for tax deduction under Section 80C of the Income Tax Act.',
    'Cumulative Fixed Deposit':
      'Interest is compounded and paid at maturity; ideal if you don\'t need periodic payouts.',
    'Non Cumulative Fixed Deposit':
      'Interest is paid out monthly/quarterly; suitable for regular income seekers.',
    'Flexi Fixed Deposit':
      'Linked to savings account; allows auto-sweep from surplus balance with FD rates.',
    'Recurring Deposit':
      'Deposit a fixed amount every month; interest rates similar to FDs, good for disciplined saving.'
  };

  const [selectedType, setSelectedType] = useState('');

  const handleTypeSelect = (type) => {
    setSelectedType(type);
  };

  const handleContinue = () => {
    if (selectedType) {
      router.push(
        `/category-details?category=${encodeURIComponent('Fixed Deposits')}&depositType=${encodeURIComponent(
          selectedType
        )}`
      );
    }
  };

  return (
    <>
      <Head>
        <title>Fixed Deposit Types | Finagent</title>
      </Head>

      <div className={styles.container}>
        <header className={styles.header}>
          <button
            onClick={() => router.push('/select-bank?mode=category')}
            className={styles.backButton}
          >
            ← Back to Categories
          </button>
          <h1 className={styles.headerTitle}>Fixed Deposit Types</h1>
        </header>

        <main className={styles.main}>
          <div className={styles.content}>
            <div className={styles.categoryGrid}>
              {fdTypes.map((type) => (
                <div
                  key={type}
                  className={`${styles.categoryCard} ${
                    selectedType === type ? styles.selected : ''
                  }`}
                  onClick={() => handleTypeSelect(type)}
                >
                  <h3>{type}</h3>
                  <p>Browse {type} options</p>
                  {selectedType === type && (
                    <div className={styles.checkmark}>✓</div>
                  )}
                </div>
              ))}
            </div>

            {selectedType && (
              <div className={styles.info}>
                <p>
                  <strong>About {selectedType}:</strong>{' '}
                  {fdDescriptions[selectedType]}
                </p>
              </div>
            )}

            <button
              className={styles.continueButton}
              onClick={handleContinue}
              disabled={!selectedType}
            >
              Continue to Details
              <span className={styles.arrow}>→</span>
            </button>

            <div className={styles.info}>
              <p>
                💡 <strong>Tip:</strong> Select an FD type to narrow down the
                schemes. You can still modify deposit amount and other details on
                the next screen.
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
