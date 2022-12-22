import styled from 'styled-components';
import Header from '../components/Header';
import Layout from '../components/Layout';
import MainContents from '../components/MainContents';
import { getLocalStorage, TOKEN_NAME } from '../utils/localStorage';

const Home = () => {
  return (
    <Layout>
      <Header />
      <MainContents />
    </Layout>
  );
};

export default Home;
