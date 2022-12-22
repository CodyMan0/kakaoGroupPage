import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './page/SignIn';
import KakaoRedirectHandler from './page/KakaoRedirectHandler';
import Home from './page/Home';

function App() {
  return (
    <BrowserRouter basename="/kakaoGroupPage">
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route
          path="/oauth/callback/kakao"
          element={<KakaoRedirectHandler />}
        />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
