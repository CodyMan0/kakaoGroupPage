import styled from 'styled-components';
import Layout from '../components/Layout';
import { getLocalStorage, TOKEN_NAME } from '../utils/localStorage';

const Home = () => {
  const token = getLocalStorage({ name: TOKEN_NAME });

  return (
    <Layout>
      <Nav>
        <h1>몽땅보내</h1>
        <ul>
          <li>로그인</li>
        </ul>
      </Nav>
    </Layout>
  );
};

export default Home;

const Nav = styled.nav`
  display: flex;
`;
