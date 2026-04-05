import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import styles from '../styles/Filter.module.css';
import { useUserProfile } from '../context/UserProfileContext';

export default function Filter() {
  const router = useRouter();
  const { bank } = router.query;

  const { profile, hasProfile, isHydrated } = useUserProfile();
  const [formData, setFormData] = useState({
    gender: '',
    category: '',
    loanAmount: ''
  });
  const [bankName, setBankName] = useState('');

  useEffect(() => {
    if (bank) {
      setBankName(formatBankName(bank));
    }
  }, [bank]);

  const formatBankName = (id) => {
    return id ? id.replace(/_/g, ' ') : '';
  };

  const toMonthlyIncome = (annualIncome) => {
    const annual = parseInt(annualIncome, 10);
    if (!annual || annual < 0) return '';
    return Math.floor(annual / 12).toString();
  };

  const toOccupation = (employmentType) => {
    const map = {
      student: 'Student',
      salaried: 'Salaried',
      'self-employed': 'Self-Employed',
      retired: 'Retired'
    };
    return map[employmentType] || '';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const queryParams = new URLSearchParams({
      bank,
      age: profile.age,
      gender: formData.gender || '',
      category: formData.category,
      monthlyIncome: toMonthlyIncome(profile.income),
      occupation: toOccupation(profile.employmentType),
      employmentType: profile.employmentType,
      savingsGoal: profile.financialGoal,
      loanAmount: formData.loanAmount || ''
    });

    router.push(`/results?${queryParams.toString()}`);
  };

  if (!isHydrated) {
    return null;
  }

  return (
    <>
      <Head>
        <title>Find Your Match - Finagent</title>
      </Head>

      <div className={styles.container}>
        <header className={styles.header}>
          <button 
            onClick={() => router.push(`/schemes/${encodeURIComponent(bank)}`)} 
            className={styles.backButton}
          >
            ← Back to Schemes
          </button>
        </header>

        <main className={styles.main}>
          <div className={styles.content}>
            <div className={styles.intro}>
              <h1 className={styles.title}>
                Find Your Best Match
              </h1>
              <p className={styles.subtitle}>
                Use your saved profile to discover schemes from {bankName}
              </p>
              <div className={styles.infoBox}>
                <p>
                  <strong>Profile:</strong> {profile.name || 'Guest'} | Age {profile.age || '-'} |
                  Annual Income ₹{profile.income || '-'}
                </p>
              </div>
            </div>

            {!hasProfile && (
              <div className={styles.disclaimer}>
                <p>
                  Please complete your user profile before filtering schemes.
                </p>
                <button
                  type="button"
                  className={styles.submitButton}
                  onClick={() => router.push('/get-started')}
                >
                  Go to Get Started
                </button>
              </div>
            )}

            {hasProfile && (
              <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <div className={styles.labelRow}>
                  <label htmlFor="gender">
                    Gender (Optional)
                  </label>
                </div>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <option value="">Prefer not to say</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <div className={styles.labelRow}>
                  <label htmlFor="category">
                    Category <span className={styles.required}>*</span>
                  </label>
                </div>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select category</option>
                  <option value="General">General</option>
                  <option value="SC">SC (Scheduled Caste)</option>
                  <option value="ST">ST (Scheduled Tribe)</option>
                  <option value="OBC">OBC (Other Backward Class)</option>
                  <option value="Minority">Minority</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <div className={styles.labelRow}>
                  <label htmlFor="loanAmount">
                    Desired Loan Amount (₹)
                  </label>
                </div>
                <input
                  type="number"
                  id="loanAmount"
                  name="loanAmount"
                  value={formData.loanAmount}
                  onChange={handleChange}
                  placeholder="Optional"
                  min="0"
                />
              </div>

              <div className={styles.formActions}>
                <button type="submit" className={styles.submitButton}>
                  Find Matching Schemes
                  <span className={styles.arrow}>→</span>
                </button>
              </div>
              </form>
            )}

            <div className={styles.disclaimer}>
              <p>
                ℹ️ Results are based on rule-based filtering only. Always verify details with the
                actual bank before making decisions.
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
