import React from 'react';
import styled from 'styled-components';
import { Props } from './Layout';

const Container = ({ children }: Props) => {
  return (
    <MainContainer>
      <SubContainer>{children}</SubContainer>
    </MainContainer>
  );
};
const MainContainer = styled.div`
  padding-top: 40px;
`;

const SubContainer = styled.div`
  position: relative;
  padding: 30px;
  width: 500px;
  height: 80%;
  margin: 0 auto;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
`;

export default Container;
