import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Filter.module.css';
import resultStyles from '../styles/Results.module.css';
import { useUserProfile } from '../context/UserProfileContext';

export default function QuickFilter() {
  const { profile, hasProfile, isHydrated } = useUserProfile();
  const [formData, setFormData] = useState({
    purpose: 'Home Loans',
    loanAmount: ''
  });

  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const categories = [
    'Education Loans',
    'Home Loans',
    'Personal Loans',
    'MSME / Business Loans',
    'Agriculture Loans',
    'Government-backed schemes',
    'Fixed Deposits',
    'Savings Accounts'
  ];

  // helpers copied from results.js to format amounts
  const parseCurrency = (amount) => {
    if (typeof amount === 'number') return amount;
    if (typeof amount !== 'string') return 0;
    return parseInt(amount.replace(/[₹,\s]/g, '')) || 0;
  };

  const formatCurrency = (amount) => {
    if (amount >= 10000000) {
      return '₹' + (amount / 10000000).toFixed(1) + ' Cr';
    } else if (amount >= 100000) {
      return '₹' + (amount / 100000).toFixed(1) + ' Lakh';
    } else if (amount >= 1000) {
      return '₹' + (amount / 1000).toFixed(0) + 'K';
    }
    return '₹' + amount.toLocaleString();
  };

  const formatSchemeData = (scheme) => ({
    ...scheme,
    loanAmountMin: parseCurrency(scheme.loan_amount_min),
    loanAmountMax: parseCurrency(scheme.loan_amount_max),
    loanAmountFormatted: {
      min: formatCurrency(parseCurrency(scheme.loan_amount_min)),
      max: formatCurrency(parseCurrency(scheme.loan_amount_max))
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (!hasProfile) {
        throw new Error('Please complete your profile first');
      }

      const age = parseInt(profile.age, 10);
      const annualIncome = parseInt(profile.income, 10);

      if (!age || age < 18 || age > 100) {
        throw new Error('Saved profile age must be between 18 and 100');
      }

      if (!annualIncome || annualIncome < 0) {
        throw new Error('Saved profile income is invalid');
      }

      const response = await fetch('/api/filter-schemes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          age,
          income: Math.floor(annualIncome / 12),
          employmentType: profile.employmentType,
          savingsGoal: profile.financialGoal,
          purpose: formData.purpose,
          loanAmount: formData.loanAmount ? parseInt(formData.loanAmount) : 0
        })
      });

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.error || 'Failed to filter schemes');
      }

      const formatted = data.schemes.map(formatSchemeData);
      setResults(formatted);
    } catch (err) {
      setError(err.message || 'Something went wrong');
      setResults(null);
    } finally {
      setLoading(false);
    }
  };

  if (!isHydrated) {
    return null;
  }

  return (
    <>
      <Head>
        <title>Find Your Perfect Scheme - Finagent</title>
      </Head>

      <div className={styles.container}>
        <header className={styles.header}>
          <Link href="/">
            <button className={styles.backButton}>← Back to Home</button>
          </Link>
        </header>

        <main className={styles.main}>
          <div className={styles.content}>
            <div className={styles.intro}>
              <h1 className={styles.title}>
                Find Your <span className={styles.neonText}>Perfect Scheme</span>
              </h1>
              <p className={styles.subtitle}>
                Answer a few simple questions to discover schemes tailored just for you
              </p>
              <div className={styles.infoBox}>
                <p>
                  <strong>Using Profile:</strong> {profile.name || 'Guest'} | Age {profile.age || '-'} |
                  Annual Income ₹{profile.income || '-'}
                </p>
              </div>
            </div>

            {!hasProfile && (
              <div className={styles.disclaimer}>
                <p>Complete your profile once to continue with quick filtering.</p>
                <Link href="/get-started">
                  <button className={styles.submitButton}>Go to Get Started</button>
                </Link>
              </div>
            )}

            {hasProfile && (
            <form onSubmit={handleSubmit} className={styles.form}>
              {error && <div className={styles.errorBox}>{error}</div>}

              {/* Purpose/Category Field */}
              <div className={styles.formGroup}>
                <label htmlFor="purpose">
                  What are you looking for? <span className={styles.required}>*</span>
                </label>
                <select
                  id="purpose"
                  name="purpose"
                  value={formData.purpose}
                  onChange={handleChange}
                  required
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              {/* Loan Amount Field (Optional) */}
              <div className={styles.formGroup}>
                <label htmlFor="loanAmount">
                  Desired Loan Amount (₹) <span className={styles.optional}>(Optional)</span>
                </label>
                <input
                  type="number"
                  id="loanAmount"
                  name="loanAmount"
                  value={formData.loanAmount}
                  onChange={handleChange}
                  placeholder="Enter loan amount (optional)"
                  min="0"
                  step="100000"
                />
              </div>

              <button type="submit" disabled={loading} className={styles.submitButton}>
                {loading ? '🔍 Searching...' : '🔍 Find Schemes'}
              </button>
            </form>
            )}

            {/* Results Display */}
            {results && results.length > 0 && (
              <div className={styles.results}>
                <h2>Found {results.length} Matching Scheme{results.length !== 1 ? 's' : ''}</h2>
                <div className={resultStyles.schemesGrid}>
                  {results.map(scheme => (
                    <div key={scheme.id} className={resultStyles.schemeCard}>
                      <div className={resultStyles.schemeHeader}>
                        <h3>{scheme.scheme_name}</h3>
                        {scheme.matchScore != null && (
                          <span className={resultStyles.matchBadge}>
                            {scheme.matchScore}% Match
                          </span>
                        )}
                      </div>
                      <p className={resultStyles.bankName}>{scheme.bank_name}</p>
                      <div className={resultStyles.schemeDetails}>
                        <p><strong>Interest Rate:</strong> {scheme.interest_rate_range}</p>
                        <p><strong>Loan Amount:</strong> {scheme.loanAmountFormatted.min} - {scheme.loanAmountFormatted.max}</p>
                        <p><strong>Tenure:</strong> {scheme.repayment_tenure}</p>
                      </div>

                      {scheme.bestFitExplanation && scheme.bestFitExplanation.length > 0 && (
                        <div className={resultStyles.explanations}>
                          <strong>💡 Why this fits you:</strong>
                          <ul>
                            {scheme.bestFitExplanation.map((pt, idx) => (
                              <li key={idx}>{pt}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <a 
                        href={scheme.official_website_reference} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={resultStyles.learnMoreButton}
                      >
                        Learn More →
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {results && results.length === 0 && (
              <div className={styles.noResults}>
                <p>😕 No schemes found matching your criteria.</p>
                <p>Try adjusting your filters and search again.</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </>
  );
}
