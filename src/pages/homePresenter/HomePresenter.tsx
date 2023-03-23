import React from 'react'
import ClanListAll from './HomeClanList-all/ClanListAll';
import ClanListNew from './HomeClanList-newly/ClanListNew';
import HomeHeader from './HomeHeader/HomeHeader';
import HomeHero from './HomeHero/HomeHero';
import HomeSearchbar from './HomeSearchbar/HomeSearchbar';

const HomePresenter: React.FC = () => {
  return (
    <>
      <HomeHeader />
      <HomeHero />
      <ClanListNew />
      <HomeSearchbar />
      <ClanListAll />
    </>
  )
}

export default HomePresenter