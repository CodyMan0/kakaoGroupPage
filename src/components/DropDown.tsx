import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { LoginContext } from '../context/LoginContext';
import { deleteLocalStorage, TOKEN_NAME } from '../utils/localStorage';

interface IsToggled {
  isToggled: boolean;
}

const DropDown = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext);

  const deleteToken = () => {
    deleteLocalStorage({ name: TOKEN_NAME });
    setIsLoggedIn(false);
  };

  return (
    <Container>
      <LogOutButton onClick={deleteToken}>로그아웃</LogOutButton>
    </Container>
  );
};

export default DropDown;

const Container = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
  width: max-content;
  display: flex;
  flex-direction: column;
`;

const LogOutButton = styled.button`
  background-color: rgb(38, 112, 255);
  border-radius: 10px;
  padding: 10px 30px 8px;
  color: white;
  &:hover {
    transform: scale(1.03);
    translate: 0px;
  }
`;
