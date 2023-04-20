export const REST_API_KEY = import.meta.env.REACT_APP_REST_API_KEY;
export const REDIRECT_URI = import.meta.env.REACT_APP_REDIRECT_URI;
export const KAKAO_OAUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
