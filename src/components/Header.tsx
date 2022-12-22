import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  return (
    <>
      <NavContainer>
        <Nav>
          <Logo>몽땅 보내</Logo>
          <LoginButton>
            <Link to="/">로그인</Link>
          </LoginButton>
        </Nav>
      </NavContainer>
    </>
  );
};

export default Header;
const NavContainer = styled.div`
  position: fixed;
  backdrop-filter: blur(10px);
  width: 100%;
`;

const Logo = styled.h1`
  font-size: 35px;
  font-family: 'Gaegu';
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 36px 30px 30px;

  @media ${props => props.theme.mobile} {
    gap: 8px;
    padding: 30px 8px 30px 14px;
    width: 100%;
  }
  @media ${props => props.theme.laptop} {
    width: 100%;
    padding: 30px 13px 30px 16px;
  }
  @media ${props => props.theme.desktop} {
    width: 100%;
    padding: 30px 25px 30px 20px;
  }
`;

const LoginButton = styled.button`
  place-content: center;
  align-items: center;
  background-color: rgb(38, 112, 255);
  border-radius: 10px;
  display: flex;
  flex: 0 0 auto;
  flex-flow: row nowrap;
  gap: 10px;
  height: min-content;
  overflow: visible;
  padding: 10px 30px 8px;
  position: relative;
  text-decoration: none;
  color: white;
  &:hover {
    transform: scale(1.03);
    translate: 0px;
  }
`;
