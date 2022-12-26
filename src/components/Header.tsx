import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { MyInfo, myState } from '../atom/store';
import DropDown from './DropDown';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

interface IsLoggedInProps {
  isLoggedIn: boolean;
  name: string;
}

const Header = ({ isLoggedIn, name }: IsLoggedInProps) => {
  const [isToggled, setTogged] = useState(false);
  const clickHandler = () => {
    setTogged(prev => !prev);
  };

  return (
    <>
      <NavContainer>
        <Nav>
          <Logo>
            <Link to="/">몽땅 보내</Link>
          </Logo>
          {isLoggedIn ? (
            <UserInfoSection onClick={clickHandler}>
              {isToggled && <DropDown />}
              <Name>
                <Strong>{name}</Strong>
              </Name>
              <DropDownButton>
                {!isToggled ? (
                  <Icon>
                    <MdKeyboardArrowDown></MdKeyboardArrowDown>
                  </Icon>
                ) : (
                  <Icon>
                    <MdKeyboardArrowUp></MdKeyboardArrowUp>
                  </Icon>
                )}
              </DropDownButton>
            </UserInfoSection>
          ) : (
            <LoginButton>
              <Link
                to="/signin
              "
              >
                로그인
              </Link>
            </LoginButton>
          )}
        </Nav>
      </NavContainer>
    </>
  );
};

export default Header;

const Icon = styled.div`
  text-align: center;
`;

const Strong = styled.strong`
  font-weight: 800;
`;

const DropDownButton = styled.div`
  position: relative;
  margin-right: 50px;
  font-size: 20px;
  font-family: 'Gaegu';
  cursor: pointer;
`;

const UserInfoSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const Name = styled.div`
  font-size: 16px;
`;

const NavContainer = styled.div`
  position: fixed;
  backdrop-filter: blur(10px);
  width: 100%;
`;

const Logo = styled.h1`
  font-size: 35px;
  font-family: 'Gaegu';
  cursor: pointer;
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
