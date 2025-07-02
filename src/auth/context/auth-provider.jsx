import { useContext, createContext } from 'react';

// ----------------------------------------------------------------------

const AuthContext = createContext();

export function useAuthContext() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }

  return context;
}

// ----------------------------------------------------------------------

export function AuthProvider({ children }) {
  const checkUserSession = async () => null;

  const memoizedValue = {
    user: null,
    loading: false,
    authenticated: false,
    unauthenticated: true,
    checkUserSession,
  };

  return <AuthContext.Provider value={memoizedValue}>{children}</AuthContext.Provider>;
}