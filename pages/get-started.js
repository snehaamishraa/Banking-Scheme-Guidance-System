import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { ArrowRight, User, Target, ArrowLeft } from 'lucide-react';
import styles from '../styles/GetStarted.module.css';
import { useUserProfile } from '../context/UserProfileContext';

export default function GetStarted() {
  const router = useRouter();
  const { profile, updateProfile } = useUserProfile();
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    income: '',
    employmentType: '',
    financialGoal: ''
  });

  useEffect(() => {
    setFormData((prev) => ({ ...prev, ...profile }));
  }, [profile]);

  const handleFormChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateProfile(formData);
    router.push('/select-bank');
  };

  const isFormValid =
    formData.name &&
    formData.age &&
    formData.income &&
    formData.employmentType &&
    formData.financialGoal;

  return (
    <>
      <Head>
        <title>Get Started - FinAgent</title>
        <meta name="description" content="Set up your profile once and reuse it everywhere" />
      </Head>

      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.headerContent}>
            <Link href="/">
              <span className={styles.logo}>
                Fin<span className={styles.highlight}>Agent</span>
              </span>
            </Link>
            <p className={styles.tagline}>Personalized Financial Guidance</p>
          </div>
          <Link href="/">
            <button className={styles.backBtn}>
              <ArrowLeft size={20} />
              Home
            </button>
          </Link>
        </header>

        <main className={styles.main}>
          <div className={styles.stepContainer}>
            <div className={styles.stepHeader}>
              <h1>Create Your User Profile</h1>
              <p>Enter your details once and use them across all categories</p>
            </div>

            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formSection}>
                <h3>
                  <User size={20} />
                  Personal Information
                </h3>

                <div className={styles.formGroup}>
                  <label htmlFor="name">Name *</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => handleFormChange('name', e.target.value)}
                  />
                </div>

                <div className={styles.twoCol}>
                  <div className={styles.formGroup}>
                    <label htmlFor="age">Age *</label>
                    <input
                      id="age"
                      type="number"
                      placeholder="18-100"
                      value={formData.age}
                      onChange={(e) => handleFormChange('age', e.target.value)}
                      min="18"
                      max="100"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="employment">Employment Type *</label>
                    <select
                      id="employment"
                      value={formData.employmentType}
                      onChange={(e) => handleFormChange('employmentType', e.target.value)}
                    >
                      <option value="">Select employment type</option>
                      <option value="student">Student</option>
                      <option value="salaried">Salaried</option>
                      <option value="self-employed">Self-Employed</option>
                      <option value="retired">Retired</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className={styles.formSection}>
                <h3>
                  <Target size={20} />
                  Financial Profile
                </h3>

                <div className={styles.formGroup}>
                  <label htmlFor="income">Annual Income (in ₹) *</label>
                  <input
                    id="income"
                    type="number"
                    min="0"
                    placeholder="e.g. 600000"
                    value={formData.income}
                    onChange={(e) => handleFormChange('income', e.target.value)}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="financialGoal">Financial Goal *</label>
                  <select
                    id="financialGoal"
                    value={formData.financialGoal}
                    onChange={(e) => handleFormChange('financialGoal', e.target.value)}
                  >
                    <option value="">Select financial goal</option>
                    <option value="saving">Saving</option>
                    <option value="investment">Investment</option>
                    <option value="loan">Loan</option>
                    <option value="retirement">Retirement</option>
                  </select>
                </div>
              </div>

              <div className={styles.buttonGroup}>
                <button type="submit" className={styles.primaryBtn} disabled={!isFormValid}>
                  Continue to Dashboard
                  <ArrowRight size={20} />
                </button>
                <button type="button" className={styles.secondaryBtn} onClick={() => router.push('/select-bank')}>
                  Skip for Now
                </button>
              </div>
            </form>

            <div className={styles.infoBox}>
              <p>
                <strong>Tip:</strong> Profile data is stored only in your browser and reused across
                your browsing journey.
              </p>
            </div>
          </div>
        </main>

        <footer className={styles.footer}>
          <p>&copy; 2026 FinAgent. Your personalized financial companion.</p>
        </footer>
      </div>
    </>
  );
}