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
      <Component {...pageProps} theme={theme} toggleTheme={toggleTheme} />
    </UserProfileProvider>
  );
}

export default MyApp;
