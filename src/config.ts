export const HOST = {
  AUTH_URL: 'https://kauth.kakao.com',
  USER_URL: 'https://kapi.kakao.com',
};

export const LOGIN = {
  REDIRECT_URI: 'http://127.0.0.1:5173/kakaoGroupPage/oauth/callback/kakao',
};

// 내 로컬 주소 http://127.0.0.1:5173
// 베포 주소 https://codyman0.github.io

export const KAKAO_AUTH_URL = `${HOST.AUTH_URL}/oauth/authorize?client_id=${
  import.meta.env.VITE_CLIENT_KEY
}&redirect_uri=${
  LOGIN.REDIRECT_URI
}&response_type=code&scope=talk_message,friends`;

export const KAKAO_TOKEN_URL = `${HOST.AUTH_URL}/oauth/token`;

export const KAKAO_GET_MY_INFO_URL = `${HOST.USER_URL}/v2/user/me`;

export const KAKAO_GET_FRIENDS_LIST = `${HOST.USER_URL}/v1/api/talk/friends`;
