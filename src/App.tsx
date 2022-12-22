import { BrowserRouter } from 'react-router-dom';
import Routter from './Routter';

const App = () => {
  return (
    <>
      <BrowserRouter basename="/kakaoGroupPage/">
        <Routter />
      </BrowserRouter>
    </>
  );
};

export default App;
