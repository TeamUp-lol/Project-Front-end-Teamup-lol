import React from 'react';
import { Link } from 'react-router-dom';
import AuthInputForm from '../../component/authInputForm/AuthInputForm';
import {
  LoginContainerProps,
  SocialLoginImg,
} from '../../component/authInputForm/AuthInputFormInterfaces';

const LoginContainer = ({
  data,
  socialLoginImg,
}: LoginContainerProps): JSX.Element => {
  const isLoginPage = true;
  return (
    <div className="relative flex justify-center mx-auto mt-10 p-12 w-96 lg:w-[900px] border border-solid border-slate-300">
      <img
        className="absolute right-10 w-16 h-10 lg:w-24 lg:h-14"
        src="/assets/images/whiteLogo.png"
        alt="logo image"
      />
      <section className="flex">
        <form className="flex flex-col items-center w-96 lg:mr-4 ">
          <AuthInputForm isLoginPage={isLoginPage} data={data} />
          <button className="mt-5 w-56 h-12 lg:w-72 bg-violet-600 rounded-lg text-white">
            로그인
          </button>
          <Link to="/signUp">
            <button className="mt-5 w-56 h-12 lg:w-72 border border-solid rounded-lg border-slate-300 text-slate-500">
              회원가입
            </button>
          </Link>
          <div className="relative w-72">
            <hr className="mt-12 w-full border border-solid border-slate-300"></hr>
            <p className="absolute top-9 left-10 w-52 bg-white text-center text-slate-500">
              소셜 계정으로 로그인하기
            </p>
          </div>
          <div className="flex mt-8">
            {socialLoginImg.map((img: SocialLoginImg) => {
              return (
                <img
                  key={img.id}
                  className={img.style}
                  src={`src/assets/images/login/${img.name}`}
                  alt={`${img.alt} image`}
                />
              );
            })}
          </div>
          <div className="mt-8 text-slate-600">
            <Link to="/findEmail">아이디</Link>/
            <Link to="/findPassword">비밀번호 찾기</Link>
            &gt;
          </div>
        </form>
        <aside className="flex justify-center pt-14  border-l hidden lg:block">
          <img
            className="w-96 mx-6"
            src="src/assets/images/login/hero.png"
            alt="hero image"
          />
        </aside>
      </section>
    </div>
  );
};

export default LoginContainer;
