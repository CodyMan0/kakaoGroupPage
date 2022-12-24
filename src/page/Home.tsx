import { useContext, useEffect, useState } from 'react';
import { RecoilState, useRecoilState } from 'recoil';
import { getUserInfo } from '../api/ApiService';
import { MyInfo, myState } from '../atom/store';
import Header from '../components/Header';
import Layout from '../components/Layout';
import MainContents from '../components/MainContents';
import { LoginContext } from '../context/LoginContext';
import { getLocalStorage, TOKEN_NAME } from '../utils/localStorage';

const Home = () => {
  const [myInfo, setMyInfo] = useRecoilState<MyInfo>(myState);
  console.log('home', myInfo);
  const token = getLocalStorage({ name: TOKEN_NAME });
  const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext);
  if (!!getLocalStorage({ name: TOKEN_NAME })) setIsLoggedIn(true);

  const getUserInfoData = () => {
    getUserInfo(token).then(result => setMyInfo(result));
  };

  useEffect(() => {
    getUserInfoData();
  }, [token]);

  return (
    <Layout>
      <Header isLoggedIn={isLoggedIn} />
      <MainContents />
    </Layout>
  );
};

export default Home;
