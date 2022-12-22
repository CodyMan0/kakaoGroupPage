import { createContext, useState, useMemo, useContext } from 'react';
import { getLocalStorage, TOKEN_NAME } from '../utils/localStorage';

export const LoginContext = createContext<any>(null);

export const LoginProvider = ({ children }: any) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!getLocalStorage({ name: TOKEN_NAME })
  );
  const value = useMemo(() => ({ isLoggedIn, setIsLoggedIn }), [isLoggedIn]);

  return (
    <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
  );
};

export const useAuth = () => useContext(LoginContext);
