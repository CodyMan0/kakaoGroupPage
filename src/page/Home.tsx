import { useContext, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { getUserInfo } from '../api/ApiService';
import { MyInfo, myState } from '../atom/store';
import Header from '../components/Header';
import Layout from '../components/Layout';
import MainContents from '../components/MainContents';
import { LoginContext } from '../context/LoginContext';
import { getLocalStorage, TOKEN_NAME } from '../utils/localStorage';

const Home = () => {
  const [myInfo, setMyInfo] = useRecoilState<MyInfo>(myState);
  const token = getLocalStorage({ name: TOKEN_NAME });
  const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext);

  console.log('home동기1', myInfo);
  const getUserInfoData = () => {
    getUserInfo(token).then(result => {
      setMyInfo(() => result);
      if (token) setIsLoggedIn(true);
    });
  };

  useEffect(() => {
    getUserInfoData();
  }, [token]);

  return (
    <Layout>
      <Header isLoggedIn={isLoggedIn} name={myInfo?.name} />
      <MainContents />
    </Layout>
  );
};

export default Home;
