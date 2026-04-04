import { useEffect, useState } from 'react';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
    const preferredTheme = savedTheme || 'dark';

    setTheme(preferredTheme);
    document.documentElement.setAttribute('data-theme', preferredTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('theme', nextTheme);
  };

  return (
    <>
      <button
        type="button"
        className="themeToggle"
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === 'dark' ? 'day' : 'night'} mode`}
      >
        {theme === 'dark' ? 'Day Mode' : 'Night Mode'}
      </button>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
