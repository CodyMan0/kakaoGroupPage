import { Route, Routes, useNavigate } from 'react-router-dom';
import SignIn from './page/SignIn';
import KakaoRedirectHandler from './page/KakaoRedirectHandler';
import Home from './page/Home';
import { useContext, useEffect } from 'react';
import { LoginContext } from './context/LoginContext';
import Group from './page/Group';

function Routter() {
  const { isLoggedIn } = useContext(LoginContext);
  const navigator = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      navigator('/');
    } else {
      navigator('/home');
    }
  }, [isLoggedIn]);

  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/oauth/callback/kakao" element={<KakaoRedirectHandler />} />
      <Route path="/home" element={<Home />} />
      <Route path="/group" element={<Group />} />
    </Routes>
  );
}

export default Routter;
