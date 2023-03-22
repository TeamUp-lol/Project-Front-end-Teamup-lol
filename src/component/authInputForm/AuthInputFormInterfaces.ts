export interface AuthFormInputItem {
  id: number;
  title: string;
  type: string;
  name: string;
  button: boolean;
  validate?: string;
  errorMsg?: string;
}

export interface IsLoginPageProps {
  isLoginPage: boolean;
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
}
