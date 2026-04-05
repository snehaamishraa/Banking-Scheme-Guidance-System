import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const STORAGE_KEY = 'finagent-user-profile';

const defaultProfile = {
  name: '',
  age: '',
  income: '',
  employmentType: '',
  financialGoal: ''
};

const UserProfileContext = createContext({
  profile: defaultProfile,
  hasProfile: false,
  isHydrated: false,
  updateProfile: () => {},
  clearProfile: () => {}
});

export function UserProfileProvider({ children }) {
  const [profile, setProfile] = useState(defaultProfile);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        setProfile((prev) => ({ ...prev, ...parsed }));
      }
    } catch (error) {
      console.error('Failed to restore user profile from localStorage', error);
    } finally {
      setIsHydrated(true);
    }
  }, []);

  const updateProfile = (updates) => {
    setProfile((prev) => {
      const next = { ...prev, ...updates };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  };

  const clearProfile = () => {
    setProfile(defaultProfile);
    localStorage.removeItem(STORAGE_KEY);
  };

  const hasProfile = Boolean(
    profile.name && profile.age && profile.income && profile.employmentType && profile.financialGoal
  );

  const value = useMemo(
    () => ({
      profile,
      hasProfile,
      isHydrated,
      updateProfile,
      clearProfile
    }),
    [profile, hasProfile, isHydrated]
  );

  return <UserProfileContext.Provider value={value}>{children}</UserProfileContext.Provider>;
}

export function useUserProfile() {
  const context = useContext(UserProfileContext);
  if (!context) {
    throw new Error('useUserProfile must be used within UserProfileProvider');
  }
  return context;
}