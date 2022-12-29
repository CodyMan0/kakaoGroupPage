import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { getFriendsList } from '../api/ApiService';
import { MyInfo, myState } from '../atom/store';
import FriendsItem from '../components/friend/FriendsItem';
import MessageForm from '../components/friend/MessageForm';
import Header from '../components/Header';
import Layout from '../components/Layout';
import { LoginContext } from '../context/LoginContext';
import { getLocalStorage, TOKEN_NAME } from '../utils/localStorage';
import { preventCloseAndGoBack } from '../utils/preventCloseAndGoBack';

interface FriendList {
  after_url: null;
  elements: Elements[];
  favorite_count: number;
  total_count: number;
}

export interface Elements {
  allowed_msg: boolean;
  favorite: boolean;
  id: number;
  profile_nickname: string;
  profile_thumbnail_image: string;
  uuid: string;
}

const Group = () => {
  const [friendLists, setFriendLists] = useState<FriendList>();
  console.log(friendLists);
  const { isLoggedIn } = useContext(LoginContext);
  const [myInfo, setMyInfo] = useRecoilState<MyInfo>(myState);
  const token = getLocalStorage({ name: TOKEN_NAME });
  const uuid = friendLists?.elements?.map(el => el.uuid);

  const navigator = useNavigate();

  const getFriendsListHandler = () => {
    getFriendsList(token).then(result => setFriendLists(result));
  };
  preventCloseAndGoBack();

  useEffect(() => {
    getFriendsListHandler();
  }, []);

  useEffect(() => {
    !isLoggedIn && navigator('/');
  }, [isLoggedIn]);

  return (
    <Layout>
      <Header isLoggedIn={isLoggedIn} name={myInfo?.name} />
      <SubLayout>
        <Container>
          {friendLists?.elements?.map((friendList, idx) => (
            <>
              <FriendsItem key={idx} friendList={friendList} />
            </>
          ))}
        </Container>
        <MessageForm uuid={uuid} />
      </SubLayout>
    </Layout>
  );
};

export default Group;

const Container = styled.div`
  flex: 1;
  padding: 40px;
  min-height: 100vh;
  overflow-y: scroll;
  background-color: #fff;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 5px;
  backdrop-filter: blur(30px);
`;

const SubLayout = styled.div`
  display: flex;
  overflow: visible;
  padding: 95px 0px 0px;
  width: 100%;
`;
