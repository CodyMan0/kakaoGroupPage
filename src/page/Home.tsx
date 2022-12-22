import { getLocalStorage, TOKEN_NAME } from '../utils/localStorage';

const Home = () => {
  const getTokenByFunciton = getLocalStorage({ name: TOKEN_NAME });

  return <div>Home</div>;
};

export default Home;
