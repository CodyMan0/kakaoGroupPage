import { atom } from 'recoil';

export interface IProps {
  myInfo: MyInfo;
}

export interface MyInfo {
  email: string;
  kakaoId: number;
  name: string;
}

export const myState = atom<MyInfo>({
  key: 'userInfo',
  default: {
    email: '',
    kakaoId: 0,
    name: '',
  },
});
