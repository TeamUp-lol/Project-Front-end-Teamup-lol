import React from 'react';
import SignUpContainer from './SignUpContainer';
import { SIGN_UP_DATA } from './SignUpData';

const SignUpPresenter = () => {
  return (
    <>
      <SignUpContainer data={SIGN_UP_DATA} />
    </>
  );
};

export default SignUpPresenter;
