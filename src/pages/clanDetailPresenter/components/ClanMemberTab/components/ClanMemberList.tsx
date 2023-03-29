import React from 'react';

export default function ClanMemberList() {
  return (
    <div>
      <div className="flex items-center h-12 space-x-32 text-white bg-black cursor-pointer lg:rounded-xl lg:space-x-0 lg:flex-col justify-evenly rounded-3xl hover:bg-purple-700 lg:w-48 lg:h-56 lg:p-4 lg:m-2">
        <div className="flex items-center lg:flex lg:flex-col">
          <img
            className="ml-2 mr-2 lg:border-2 lg:border-solid lg:border-purple-700 lg:w-12 lg:h-12 lg:rounded-3xl lg:mb-2"
            src="./public/assets/images/clanDetailPage/memberProfile.svg"
            alt="memberProfile"
          ></img>
          <span className="text-xs lg:text-base">woody</span>
        </div>
        <div className="flex items-center">
          <img
            className="ml-4 mr-2 lg:mx-0 lg:mb-2"
            src="./public/assets/images/clanDetailPage/tierIcon.svg"
            alt="tierLogo"
          ></img>
          <span className="text-xs lg:hidden">Grand Master</span>
        </div>
        <div className="lg:text-center lg:rounded-xl">
          <p className="text-xs lg:flex lg:justify-center lg:items-center">
            반갑습니다 잘부탁드려요!!
          </p>
        </div>
      </div>
    </div>
  );
}
