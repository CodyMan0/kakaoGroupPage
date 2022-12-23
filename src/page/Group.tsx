import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import Header from '../components/Header';
import Layout from '../components/Layout';
import { getLocalStorage, TOKEN_NAME } from '../utils/localStorage';

const Group = () => {
  const token = getLocalStorage({ name: TOKEN_NAME });

  // const fetchLists = async () => {
  //   const response = await fetch('123');
  //   return response.json();
  // };

  // const { data, error, isError, isLoading } = useQuery(['list'], fetchLists);

  // console.log('react', data, isError, isLoading);

  const preventClose = (e: BeforeUnloadEvent) => {
    e.preventDefault();
    e.returnValue = ''; // chrome에서는 설정이 필요해서 넣은 코드
  };

  const preventGoBack = () => {
    history.pushState(null, '', location.href);
    alert('페이지를 벗어나면 데이터가 사라져요 ㅠ.ㅠ');
  };

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
      <Header />
    </Layout>
  );
};

export default Group;
