import React, { useState } from 'react';
import ClanMemberPage from './components/ClanMemberTab/ClanMemberPage';
import ClanRecruitmentPage from './components/clanRecruitmentTab/ClanRecruitmentPage';
import ClanRoungePage from './components/clanRoungeTab/ClanRoungePage';
import ClanDetailNav from './components/ClanDetailNav/ClanDetailNav';

export default function ClanDetailPresenter() {
  const [activeIndex, setActiveIndex] = useState(0);

  const tabClickHandler = (index: number) => {
    setActiveIndex(index);
  };

  const tabContArr = [
    {
      tabTitle: (
        <li
          className={
            activeIndex === 0
              ? 'is-active border-solid border-b border-purple-700'
              : ''
          }
          onClick={() => tabClickHandler(0)}
        >
          모집 공고
        </li>
      ),
      tabCont: <ClanRecruitmentPage />,
    },
    {
      tabTitle: (
        <li
          className={
            activeIndex === 1
              ? 'is-active border-solid border-b border-purple-700'
              : ''
          }
          onClick={() => tabClickHandler(1)}
        >
          {' '}
          클랜 멤버
        </li>
      ),
      tabCont: <ClanMemberPage />,
    },
    {
      tabTitle: (
        <li
          className={
            activeIndex === 2
              ? 'is-active border-solid border-b border-purple-700'
              : ''
          }
          onClick={() => tabClickHandler(2)}
        >
          {' '}
          라운지{' '}
        </li>
      ),
      tabCont: <ClanRoungePage />,
    },
  ];

  return (
    <>
      <ClanDetailNav />
      <div className="lg:flex lg:justify-center lg:items-center md:flex md:justify-center md:items-center">
        <section className="w-screen md:mx-4 lg:w-screen lg:mx-28 scrollbar-hide">
          <div className="flex flex-col items-center space-y-4">
            <img
              className="mt-6 w-28"
              src="./public/assets/images/clanDetailPage/clanImage.png"
              alt="clanImage"
            ></img>
            <p>수영장파티 클랜</p>
            <p className="text-xs">
              시원시원한 성격의 사람들이 모여 쿨하게 즐기는 즐겜 클랜!
            </p>
          </div>
          <div>
            <ul className="flex justify-around mt-8 border-b-2 cursor-pointer">
              {tabContArr.map((section, index) => {
                return section.tabTitle;
              })}
            </ul>
            <div>{tabContArr[activeIndex].tabCont}</div>
          </div>
          <div className="flex items-center justify-center w-full h-16 mt-3 text-white bg-purple-700 cursor-pointer md:hidden lg:hidden ">
            <p>클랜 가입 신청하기</p>
          </div>
        </section>
      </div>
    </>
  );
}
