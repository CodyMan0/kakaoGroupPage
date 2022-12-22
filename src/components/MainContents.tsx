import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MainContents = () => {
  return (
    <Container>
      <SubContainer>
        <FirstHeading>더욱 쉽게 카카오톡 단체 문자 메시지 </FirstHeading>
        <FirstHeading>기능을 이용하는 방법</FirstHeading>
        <SecondHeading>일일 100명 한번에 최대 20명</SecondHeading>
        <SecondHeading>바로 시작해보세요</SecondHeading>
        <Box>
          <Link to="/group">단체 문자 전송 시작하기</Link>
        </Box>
      </SubContainer>
    </Container>
  );
};

export default MainContents;

const Box = styled.div`
  display: flex;
  align-items: center;
  background: linear-gradient(rgb(38, 113, 255) 0%, rgb(0, 87, 255) 100%);
  color: white;
  border-radius: 10px;
  height: 40px;
  padding: 16px;
  margin-top: 30px;
  &:hover {
    transform: scale(1.03);
    translate: 0px;
  }
`;

const SecondHeading = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: rgb(108, 120, 137);
`;

const FirstHeading = styled.h1`
  font-size: 35px;
  font-weight: 800;
`;

const SubContainer = styled.div`
  place-content: center;
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  flex-flow: column nowrap;
  gap: 10px;
  height: 150px;
`;

const Container = styled.div`
  place-content: center flex-start;
  align-items: center;
  display: flex;
  flex-flow: column nowrap;
  gap: 34px;
  min-height: 800px;
  overflow: visible;
  padding: 200px 0px 0px;
  width: 100%;
`;
