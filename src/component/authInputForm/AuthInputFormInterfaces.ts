export interface AuthFormInputItem {
  id: number;
  title: string;
  type: string;
  name: string;
  button: boolean;
  validate?: string;
  errorMsg?: string;
}

export interface SocialLoginImg {
  id: number;
  style: string;
  name: string;
  alt: string;
}

export interface AuthInputFormProps {
  isLoginPage: boolean;
  data: AuthFormInputItem[];
  handleValues: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface AuthContainerProps {
  data: AuthFormInputItem[];
  socialLoginImg?: SocialLoginImg[];
  handleValues: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export interface InputValues {
  email: string;
  pwd: string;
  rePwd?: string;
  nickname?: string;
}
