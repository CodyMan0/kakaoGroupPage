export const LOGIN = {
  BASE_URL: 'https://kauth.kakao.com',
  REDIRECT_URI:
    'https://codyman0.github.io/kakaoGroupPage/oauth/callback/kakao',
};

// 내 로컬 주소 http://127.0.0.1:5173
// 베포 주소 https://codyman0.github.io

export const KAKAO_AUTH_URL = `${LOGIN.BASE_URL}/oauth/authorize?client_id=${
  import.meta.env.VITE_CLIENT_KEY
}&redirect_uri=${LOGIN.REDIRECT_URI}&response_type=code`;

export const KAKAO_TOKEN_URL = `${LOGIN.BASE_URL}/oauth/token`;
