import { Route, Routes } from 'react-router-dom';
import SignIn from './page/SignIn';
import KakaoRedirectHandler from './page/KakaoRedirectHandler';
import Home from './page/Home';
import Group from './page/Group';

function Routter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/oauth/callback/kakao" element={<KakaoRedirectHandler />} />
      <Route path="/group" element={<Group />} />
    </Routes>
  );
}

export default Routter;
