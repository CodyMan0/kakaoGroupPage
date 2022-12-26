import { Route, Routes } from 'react-router-dom';
import KakaoRedirectHandler from './page/KakaoRedirectHandler';
import SignIn from './page/SignIn';
import Home from './page/Home';
import Group from './page/Group';
import { useContext } from 'react';

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
