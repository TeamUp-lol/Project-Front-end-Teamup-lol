import React from 'react';
import LoginContainer from './LoginContainer';
import { LOGIN_DATA, SOCIAL_IMG } from './LoginData';

export default function LoginPresenter(): JSX.Element {
  return (
    <div>
      <LoginContainer data={LOGIN_DATA} socialLoginImg={SOCIAL_IMG} />
    </div>
  );
}
