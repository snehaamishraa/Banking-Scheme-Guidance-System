import { useMemo, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import styles from '../styles/SelectBank.module.css';
import { useUserProfile } from '../context/UserProfileContext';
import { fdOptions } from '../data/fdOptions';
import { compareFdOptions } from '../utils/fdCalculations';
import FDComparisonTable from '../components/FDComparisonTable';

export default function FixedDepositCategories() {
  const router = useRouter();
  const { profile } = useUserProfile();
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
  const [compareInputs, setCompareInputs] = useState({
    amount: '100000',
    tenureValue: '1',
    tenureUnit: 'years'
  });
  const [showComparison, setShowComparison] = useState(false);

  const age = Number(profile?.age || 0);
  const isSeniorCitizen = age >= 60;

  const comparedOptions = useMemo(() => {
    const principal = Number(compareInputs.amount);
    if (!showComparison || !Number.isFinite(principal) || principal <= 0) {
      return [];
    }

    return compareFdOptions(fdOptions, {
      principal,
      tenureValue: compareInputs.tenureValue,
      tenureUnit: compareInputs.tenureUnit,
      age
    });
  }, [showComparison, compareInputs, age]);

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

  const handleCompareChange = (field, value) => {
    setCompareInputs((prev) => ({ ...prev, [field]: value }));
    if (showComparison) {
      setShowComparison(false);
    }
  };

  const handleCompareSubmit = (event) => {
    event.preventDefault();
    setShowComparison(true);
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

            <div className={styles.compareInfo}>
              <p>
                <strong>FD Compare:</strong> Enter amount and tenure to compare banks by maturity value.
                {isSeniorCitizen
                  ? ' Senior citizen rates are applied for your profile.'
                  : ' Add age 60+ in your profile to apply senior citizen rates automatically.'}
              </p>
            </div>

            <section className={styles.compareSection}>
              <div className={styles.compareHeader}>
                <h2>Compare Fixed Deposits</h2>
                <p>Quickly compare FD options for your selected deposit type.</p>
              </div>

              <form onSubmit={handleCompareSubmit}>
                <div className={styles.compareFormGrid}>
                  <div className={styles.compareFormGroup}>
                    <label htmlFor="amount">Deposit Amount (INR)</label>
                    <input
                      id="amount"
                      type="number"
                      min="1"
                      value={compareInputs.amount}
                      onChange={(e) => handleCompareChange('amount', e.target.value)}
                      placeholder="e.g. 100000"
                      required
                    />
                  </div>

                  <div className={styles.compareFormGroup}>
                    <label htmlFor="tenureValue">Tenure</label>
                    <input
                      id="tenureValue"
                      type="number"
                      min="1"
                      value={compareInputs.tenureValue}
                      onChange={(e) => handleCompareChange('tenureValue', e.target.value)}
                      required
                    />
                  </div>

                  <div className={styles.compareFormGroup}>
                    <label htmlFor="tenureUnit">Tenure Unit</label>
                    <select
                      id="tenureUnit"
                      value={compareInputs.tenureUnit}
                      onChange={(e) => handleCompareChange('tenureUnit', e.target.value)}
                    >
                      <option value="years">Years</option>
                      <option value="months">Months</option>
                    </select>
                  </div>
                </div>

                <button type="submit" className={styles.compareButton} disabled={!selectedType}>
                  Compare FD Options
                  <span className={styles.arrow}>→</span>
                </button>
              </form>
            </section>

            {showComparison && comparedOptions.length === 0 && (
              <div className={styles.noResults}>
                <p>No FD options matched your deposit amount. Try a higher amount.</p>
              </div>
            )}

            <FDComparisonTable comparedOptions={comparedOptions} />
          </div>
        </main>
      </div>
    </>
  );
}
