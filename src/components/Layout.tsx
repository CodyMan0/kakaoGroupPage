import React from 'react';
import styled from 'styled-components';

const Layout = ({ children }: any) => {
  return <MainContainer>{children}</MainContainer>;
};

export default Layout;

const MainContainer = styled.div`
  margin: 0 auto;
  @media ${props => props.theme.laptop} {
    width: 100%;
  }
  @media ${props => props.theme.desktop} {
    width: 100%;
  }
  @media ${props => props.theme.mobile} {
    width: 100%;
  } ;
`;
