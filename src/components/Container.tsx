import styled from 'styled-components';

const Container = ({ children }: any) => {
  return (
    <MainContainer>
      <SubContainer>{children}</SubContainer>
    </MainContainer>
  );
};
const MainContainer = styled.div`
  background-color: #e9ecef;
  height: 100vh;
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
