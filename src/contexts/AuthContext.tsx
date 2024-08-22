import React, { createContext, useContext, useEffect, useState } from 'react';
import { fakeAuthProvider } from '../lib/utils/auth';

interface AuthContextType {
  user: string | null;
  signin: (user: string, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
  children: React.ReactNode;
}

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<string | null>(null);

  const isSignedIn = () => {
    if (fakeAuthProvider.hasAccess) setUser(fakeAuthProvider.hasAccess);
  };

  const signin = (newUser: string, callback: VoidFunction) => {
    return fakeAuthProvider.signin(newUser, () => {
      setUser(newUser);
      callback();
    });
  };

  const signout = (callback: VoidFunction) => {
    return fakeAuthProvider.signout(() => {
      setUser(null);
      callback();
    });
  };

  useEffect(() => {
    isSignedIn();
  }, []);

  const value: AuthContextType = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export { AuthProvider, useAuth };
