import React from 'react';
import styled from 'styled-components';
import { MdCheckCircleOutline } from 'react-icons/md';

const FriendsItem = ({ friendList }: any) => {
  const {
    allowed_msg,
    favorite,
    id,
    profile_nickname,
    profile_thumbnail_image,
    uuid,
  } = friendList;

  return (
    <Container>
      <Title>친구목록</Title>
      <SubContainer>
        <Image
          src={profile_thumbnail_image}
          alt="사용자가 설정하지 않았습니다"
        />
        <P>{profile_nickname}</P>
        <CheckSection>
          <Icon>
            <MdCheckCircleOutline />
          </Icon>
        </CheckSection>
      </SubContainer>
    </Container>
  );
};

export default FriendsItem;

const Container = styled.div``;
const SubContainer = styled.div`
  display: flex;
  background-color: transparent;
  min-height: 90px;
  &:hover {
    opacity: 0.5;
  }
`;
const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
`;
const Image = styled.img`
  display: flex;
  align-items: center;
  width: 80px;
  max-height: auto;
  margin: 5px;
  border-radius: 50%;
`;

const P = styled.p`
  flex: 2;
  align-self: center;
  font-size: 18px;
  font-weight: 500;
  margin-left: 15px;
`;

const CheckSection = styled.div`
  flex: 1;
  align-self: center;
`;

const Title = styled.p`
  font-size: 16px;
  font-weight: 500;
  padding: 10px;
`;
