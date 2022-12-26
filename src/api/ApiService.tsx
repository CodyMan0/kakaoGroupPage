import { isConstValueNode } from 'graphql';
import {
  KAKAO_GET_FRIENDS_LIST,
  KAKAO_GET_MY_INFO_URL,
  KAKAO_TOKEN_URL,
  LOGIN,
} from '../config';
import { SendMessage } from '../model/interface';

export const getRequest = async (code: string | null): Promise<any> => {
  const requestUrl = `${KAKAO_TOKEN_URL}?grant_type=authorization_code&client_id=${
    import.meta.env.VITE_CLIENT_KEY
  }&redirect_uri=${LOGIN.REDIRECT_URI}&code=${code}`;
  const requestHeaders = {
    method: 'POST',
  };
  const response = await fetch(requestUrl, requestHeaders);

  if (response.status === 200) {
    return response.json();
  }
};

export const getUserInfo = async (
  token: string | null | undefined
): Promise<any> => {
  const requestUrl = `${KAKAO_GET_MY_INFO_URL}`;
  const requestHeaders = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  //'undefined'가 떠서 로컬 스토리지에서 가지고 올때 문자열로 바뀌는 것이 문제였다
  if (token === 'undefined') return;

  if (token) {
    const response = await fetch(requestUrl, requestHeaders);
    const result = await response.json();
    const name = await result?.properties?.nickname;
    const email = await result?.kakao_account?.email;
    const kakaoId = await result?.id;
    return { name, email, kakaoId };
  }
};

export const getFriendsList = async (
  token: string | null | undefined
): Promise<any> => {
  const requestUrl = `${KAKAO_GET_FRIENDS_LIST}?friend_order=favorite&limit=100&order=asc`;
  const requestHeaders = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await fetch(requestUrl, requestHeaders);

  const result = await response.json();
  console.log('getfri', result);
  return result;
};

//딱 이름만 가져와지는 것 보니깐 2번째 API랑 교체해서 사용해도 될것같다...

export const sendMessage = async ({
  token,
  receiver_uuids,
  template_object,
}: SendMessage) => {
  const uuidsJson = JSON.stringify(receiver_uuids);
  const getChangeJson = JSON.stringify(template_object);

  const requestUrl = `${KAKAO_GET_FRIENDS_LIST}/message/default/send?receiver_uuids=${uuidsJson}&template_object=${getChangeJson}`;
  const requestHeaders = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  console.log('req', requestUrl);

  const response = await fetch(requestUrl, requestHeaders);

  console.log('res', response);
  const result = await response.json();

  console.log('send', result);
  return result;
};
