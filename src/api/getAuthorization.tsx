import { KAKAO_TOKEN_URL, LOGIN } from '../constants/config';

export const getRequest = async (code: string | null): Promise<any> => {
<<<<<<< HEAD
=======
  console.log('getRequest');
>>>>>>> main
  const requestUrl = `${KAKAO_TOKEN_URL}?grant_type=authorization_code&client_id=${
    import.meta.env.VITE_CLIENT_KEY
  }&redirect_uri=${LOGIN.REDIRECT_URI}&code=${code}`;
  const requestHeaders = {
    method: 'POST',
  };
<<<<<<< HEAD
  const result = await fetch(requestUrl, requestHeaders);

  if (result.ok === true) {
    return result.json();
  }
};

// export const getUserInfo = async (params: type) => {
//   const;
// };
=======
  const response = await fetch(requestUrl, requestHeaders);

  if (response.ok === true) {
    return response.json();
  }
};
>>>>>>> main
