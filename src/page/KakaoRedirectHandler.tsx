import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { KAKAO_TOKEN_URL, LOGIN } from '../constants/config';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

const KakaoRedirectHandler = () => {
  const navigator = useNavigate();
  const code = new URL(location.href).searchParams.get('code');

  const requestUrl = `${KAKAO_TOKEN_URL}?grant_type=authorization_code&client_id=${
    import.meta.env.VITE_CLIENT_KEY
  }&redirect_uri=${LOGIN.REDIRECT_URI}&code=${code}`;
  const requestHeaders = {
    method: 'POST',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
    },
  };

  useEffect(() => {
    const getRequest = () => {
      const response = fetch(requestUrl, requestHeaders)
        .then(res => res.json())
        .then(result => {
          if (!getLocalStorage('token')) {
            console.log(!getLocalStorage('token'));
            localStorage.setItem('token', result.access_token);
          }
          navigator('/home');
        });
    };
    getRequest();
  }, []);

  return <div>로그인 중입니다.</div>;
};

export default KakaoRedirectHandler;
