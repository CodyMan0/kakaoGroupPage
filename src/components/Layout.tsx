import React from 'react';
import styled from 'styled-components';

const Layout = ({ children }: any) => {
  return <MainContainer>{children}</MainContainer>;
};

export default Layout;

const MainContainer = styled.div`
  width: 1200px;
  margin: 0 auto;
`;
