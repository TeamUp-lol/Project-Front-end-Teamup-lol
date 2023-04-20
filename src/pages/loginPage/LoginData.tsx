import { REST_API_KEY } from './socialLogin/kakaoConfig';

export const LOGIN_DATA = [
  {
    id: 1,
    title: '이메일',
    type: 'text',
    name: 'email',
    button: false,
  },
  {
    id: 2,
    title: '비밀번호',
    type: 'password',
    name: 'pwd',
    button: false,
  },
];

export const SOCIAL_IMG = [
  {
    id: 1,
    style: 'w-16 h-12 mx cursor-pointer',
    link: '',
    name: 'google_icon.png',
    alt: 'google_icon',
  },
  {
    id: 2,
    style: 'w-12 h-12 mx-2 cursor-pointer',
    link: '',
    name: 'kakao_icon.png',
    alt: 'kakao_icon',
  },
  {
    id: 3,
    style: 'w-12 h-12 mx-2 cursor-pointer',
    link: '',
    name: 'naver_icon.png',
    alt: 'naver_icon',
  },
];
