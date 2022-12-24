import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { getRequest } from '../api/ApiService';
import { LoginContext } from '../context/LoginContext';
import { setLocalStorage, TOKEN_NAME } from '../utils/localStorage';
import Container from '../components/Container';

const KakaoRedirectHandler = () => {
  const navigator = useNavigate();
  const code = new URL(location.href).searchParams.get('code');
  const getToken = () => {
    getRequest(code).then(result => {
      setLocalStorage({ name: TOKEN_NAME, value: result?.access_token });
      navigator('/');
    });
  };

  getToken();

  return (
    <Container>
      <div>로딩중 입니다</div>
    </Container>
  );
};

export default KakaoRedirectHandler;
