import React, { useState } from 'react';
import LoginContainer from './LoginContainer';
import { LOGIN_DATA, SOCIAL_IMG } from './LoginData';
import { InputValues } from '../../component/authInputForm/AuthInputFormInterfaces';

export default function LoginPresenter(): JSX.Element {
  const [inputValues, setInputValues] = React.useState<InputValues>({
    email: '',
    pwd: '',
  });

  const handleValues = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  return (
    <div>
      <LoginContainer
        data={LOGIN_DATA}
        socialLoginImg={SOCIAL_IMG}
        handleValues={handleValues}
      />
    </div>
  );
}
