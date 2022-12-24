import { useContext } from 'react';
import Header from '../components/Header';
import Layout from '../components/Layout';
import MainContents from '../components/MainContents';
import { LoginContext } from '../context/LoginContext';
import { getLocalStorage, TOKEN_NAME } from '../utils/localStorage';

const Home = () => {
  const { setIsLoggedIn } = useContext(LoginContext);
  if (!!getLocalStorage({ name: TOKEN_NAME })) setIsLoggedIn(true);

  return (
    <Layout>
      <Header />
      <MainContents />
    </Layout>
  );
};

export default Home;
