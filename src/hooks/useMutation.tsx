import { useEffect, useState } from 'react';
import { KAKAO_TOKEN_URL, LOGIN } from '../constants/config';

export interface Status {
  data: string;
  isLoading: boolean;
  error: string;
}

const useAxios = (code: string) => {
  const [response, setResponse] = useState<Status>({
    data: '',
    isLoading: false,
    error: '',
  });

  const getLogin = async () => {
    try {
      setResponse(prev => ({ ...prev, isLoading: true }));
      const results = await fetch(
        `${KAKAO_TOKEN_URL}?grant_type=authorization_code&client_id=${
          import.meta.env.VITE_CLIENT_KEY
        }&redirect_uri=${LOGIN.REDIRECT_URI}&code=${code}`
      );
      console.log(results);
    } catch (error) {
      console.log(error);
      return;
    } finally {
      setResponse(prev => ({ ...prev, isLoading: false }));
    }
  };

  useEffect(() => {
    getLogin();
  }, []);

  return [getLogin, response];
};
export default useAxios;
