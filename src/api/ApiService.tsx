import {
  KAKAO_GET_MY_INFO_URL,
  KAKAO_TOKEN_URL,
  LOGIN,
} from '../constants/config';

export const getRequest = async (code: string | null): Promise<any> => {
  const requestUrl = `${KAKAO_TOKEN_URL}?grant_type=authorization_code&client_id=${
    import.meta.env.VITE_CLIENT_KEY
  }&redirect_uri=${LOGIN.REDIRECT_URI}&code=${code}`;
  const requestHeaders = {
    method: 'POST',
  };
  const response = await fetch(requestUrl, requestHeaders);

  if (response.ok === true) {
    return response.json();
  }
};

export const getUserInfo = async (token: string | null): Promise<any> => {
  const requestUrl = `${KAKAO_GET_MY_INFO_URL}`;
  const requestHeaders = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await fetch(requestUrl, requestHeaders);
  const result = await response.json();
  console.log(result);
  const name = await result.properties.nickname;
  const email = await result.kakao_account.email;
  const kakaoId = await result.id;

  return { name, email, kakaoId };
};
