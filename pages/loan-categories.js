import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import styles from '../styles/SelectBank.module.css';

export default function LoanCategories() {
  const router = useRouter();
  const [loanCategories, setLoanCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchLoanCategories();
  }, []);

  const fetchLoanCategories = async () => {
    try {
      const res = await fetch('/api/filter-schemes');
      const data = await res.json();
      const allCategories = data.schemes.map(s => s.scheme_category);
      const unique = [...new Set(allCategories)];
      const loans = unique.filter(c => c.toLowerCase().includes('loan'));
      setLoanCategories(loans.sort());
      setLoading(false);
    } catch (err) {
      setError('Failed to load loan categories.');
      setLoading(false);
    }
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleContinue = () => {
    if (selectedCategory) {
      router.push(`/category-details?category=${encodeURIComponent(selectedCategory)}`);
    }
  };

  const getCategoryIcon = (category) => {
    const icons = {
      'Education Loans': '🎓',
      'Home Loans': '🏠',
      'Personal Loans': '💰',
      'MSME / Business Loans': '🏢',
      'Agriculture Loans': '🌾',
      'Loans': '💸'
    };
    return icons[category] || '💼';
  };

  return (
    <>
      <Head>
        <title>Loan Categories | Finagent</title>
      </Head>

      <div className={styles.container}>
        <header className={styles.header}>
          <button onClick={() => router.push('/select-bank?mode=category')} className={styles.backButton}>
            ← Back to Categories
          </button>
          <h1 className={styles.headerTitle}>Loan Categories</h1>
        </header>

        <main className={styles.main}>
          <div className={styles.content}>
            {loading && <p>Loading...</p>}
            {!loading && error && <p className={styles.error}>{error}</p>}

            {!loading && !error && (
              <>
                <div className={styles.categoryGrid}>
                  {loanCategories.map(category => (
                    <div
                      key={category}
                      className={`${styles.categoryCard} ${
                        selectedCategory === category ? styles.selected : ''
                      }`}
                      onClick={() => handleCategorySelect(category)}
                    >
                      <div className={styles.categoryIcon}>{getCategoryIcon(category)}</div>
                      <h3>{category}</h3>
                      <p>Browse all schemes in this category</p>
                      {selectedCategory === category && (
                        <div className={styles.checkmark}>✓</div>
                      )}
                    </div>
                  ))}
                </div>

                {loanCategories.length === 0 && (
                  <div className={styles.noResults}>
                    <p>No loan categories found</p>
                  </div>
                )}

                <button
                  className={styles.continueButton}
                  onClick={handleContinue}
                  disabled={!selectedCategory}
                >
                  Continue to Category Details
                  <span className={styles.arrow}>→</span>
                </button>

                <div className={styles.info}>
                  <p>
                    💡 <strong>Tip:</strong> Select a loan category to see all available
                    schemes. Compare loans across different banks within the same
                    category.
                  </p>
                </div>
              </>
            )}
          </div>
        </main>
      </div>
    </>
  );
}
