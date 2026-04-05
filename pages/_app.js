import { useEffect, useState } from 'react';
import '../styles/globals.css';
import { UserProfileProvider } from '../context/UserProfileContext';

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
    const preferredTheme = savedTheme || 'light';

    setTheme(preferredTheme);
    document.documentElement.setAttribute('data-theme', preferredTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('theme', nextTheme);
  };

  return (
    <UserProfileProvider>
      <button
        type="button"
        className="themeToggle"
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      >
        {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
      </button>
      <Component {...pageProps} />
    </UserProfileProvider>
  );
}

export default MyApp;
