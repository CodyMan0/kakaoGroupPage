import { useState } from 'react';
import Container from '../components/Container';
import { KAKAO_AUTH_URL } from '../constants/config';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <Container>
      <Wrapper>
        <Header>로그인</Header>
        <Prevbtn>
          <Link to="/">뒤로 가기</Link>
        </Prevbtn>
        <Section>로고나 이미지 삽입</Section>
      </Wrapper>
      <KakaoLoginWrapper href={KAKAO_AUTH_URL}>
        <Img src="./kakaoLargeLogin.png" alt="kakaoLoginImg" />
      </KakaoLoginWrapper>
    </Container>
  );
};

const Prevbtn = styled.button``;
const KakaoLoginWrapper = styled.a`
  margin: 0 auto;
  margin-left: 50px;
  width: 90%;
`;

const Section = styled.section`
  height: 420px;
  background-color: aliceblue;
  margin-bottom: 20px;
`;
const Img = styled.img`
  width: inherit;
  cursor: pointer;
`;

const Header = styled.h1`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding-bottom: 30px;
  font-size: 30px;
`;

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export default SignIn;
