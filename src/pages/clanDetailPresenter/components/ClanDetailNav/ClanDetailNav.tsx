import React from 'react';

export default function ClanDetailNav() {
  return (
    <div>
      <nav>
        <div className="flex items-center justify-between h-12 bg-purple-700">
          <img
            className="w-12 h-8 ml-4"
            src="./public/assets/images/clanDetailPage/headerLogo.svg"
            alt="headerLogo"
          />
          <div className="flex items-center text-center">
            <img
              className="w-8 mr-4"
              src="./public/assets/images/clanDetailPage/clanImage.png"
              alt="userProfile"
            />
            <div className="hidden lg:block lg:h-10 lg:mr-4 lg:text-white lg:bg-black lg:rounded-2xl lg:flex lg:items-center lg:text-sm lg:p-4">
              <span className="">클랜 가입 신청</span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
