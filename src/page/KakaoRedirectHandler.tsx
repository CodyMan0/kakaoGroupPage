import { useQuery } from '@tanstack/react-query';
import { useContext, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { getRequest } from '../api/getAuthorization';
import Container from '../components/Container';

import {
  getLocalStorage,
  setLocalStorage,
  TOKEN_NAME,
} from '../utils/localStorage';

const KakaoRedirectHandler = () => {
  const navigator = useNavigate();
  const code = new URL(location.href).searchParams.get('code');
  const getTokenAndSendHome = () => {
    getRequest(code).then(result => {
      setLocalStorage({ name: TOKEN_NAME, value: result?.access_token });
      navigator('/home');
    });
  };

  getTokenAndSendHome();

  return (
    <Container>
      <div>로딩중 입니다</div>
    </Container>
  );
};

export default KakaoRedirectHandler;
