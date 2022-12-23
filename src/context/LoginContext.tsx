import React, {
  createContext,
  useState,
  useMemo,
  useContext,
  useEffect,
} from 'react';
import { getLocalStorage, TOKEN_NAME } from '../utils/localStorage';

interface IsLoginedContextProps {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IProviderProps {
  children: React.ReactNode;
}
export const LoginContext = createContext<IsLoginedContextProps>({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
});

export const LoginProvider = ({ children }: IProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!getLocalStorage({ name: TOKEN_NAME })
  );
  console.log('context', isLoggedIn);
  const value = useMemo(() => ({ isLoggedIn, setIsLoggedIn }), [isLoggedIn]);

  return (
    <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
  );
};
