import React from 'react';
import styled from 'styled-components';

export interface Props {
  children: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: Props) => {
  return <MainContainer>{children}</MainContainer>;
};

export default Layout;

const MainContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 110vh;
  background: linear-gradient(rgb(255, 255, 255) 0%, rgb(213, 213, 249) 50%);
`;
