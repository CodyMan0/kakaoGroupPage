import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header';
import Layout from '../components/Layout';
import { LoginContext } from '../context/LoginContext';
import { getLocalStorage, TOKEN_NAME } from '../utils/localStorage';

const Group = () => {
  const navigator = useNavigate();
  const { isLoggedIn } = useContext(LoginContext);
  const preventClose = (e: BeforeUnloadEvent) => {
    e.preventDefault();
    e.returnValue = ''; // chrome에서는 설정이 필요해서 넣은 코드
  };

  const preventGoBack = () => {
    alert('페이지를 벗어나면 데이터가 사라져요 ㅠ.ㅠ');
    history.pushState(null, '', location.href);
  };

  useEffect(() => {
    !isLoggedIn && navigator('/');
  }, [isLoggedIn]);

  useEffect(() => {
    (() => {
      history.pushState(null, '', location.href);
      window.addEventListener('popstate', preventGoBack);
      window.addEventListener('beforeunload', preventClose);
    })();

    return () => {
      window.removeEventListener('beforeunload', preventClose);
      window.removeEventListener('popstate', preventGoBack);
    };
  }, []);

  return (
    <Layout>
      <Header isLoggedIn={isLoggedIn} />
      <H1>단체 문자 페이지</H1>
    </Layout>
  );
};

export default Group;

const H1 = styled.div`
  place-content: center flex-start;
  align-items: center;
  display: flex;
  flex-flow: column nowrap;
  gap: 34px;
  min-height: 800px;
  overflow: visible;
  padding: 200px 0px 0px;
  width: 100%;
  font-size: 50px;
`;
