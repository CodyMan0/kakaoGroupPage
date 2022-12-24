import React from 'react';
import styled from 'styled-components';
import { IProps, MyInfo } from '../atom/store';

const DropDown = ({ myInfo }: IProps) => {
  const { name, email } = myInfo;

  return (
    <Container>
      <ImgContainer>{name}</ImgContainer>
      <div>{email}</div>
      <LogOutButton>로그아웃</LogOutButton>
    </Container>
  );
};

export default DropDown;

const Container = styled.div`
  position: absolute;
  top: 4rem;
  right: 11rem;
  width: 200px;
  height: 150px;
  background-color: pink;
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 20px;
`;
const ImgContainer = styled.div`
  width: 80px;
  height: 80px;
  background-color: ghostwhite;
  margin: 0 auto;
`;

const LogOutButton = styled.button`
  align-items: center;
  background-color: rgb(38, 112, 255);
  border-radius: 10px;
  padding: 10px 30px 8px;
  color: white;
  &:hover {
    transform: scale(1.03);
    translate: 0px;
  }
`;
