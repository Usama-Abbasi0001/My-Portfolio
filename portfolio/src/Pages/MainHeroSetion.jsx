import React from 'react'
import PersonalInfo from '../component/HeroSection/PersonalInfo';
import Picture from '../component/HeroSection/Picture';

function MainHeroSetion() {
  return (
    <div id='home' className="container border-2 flex lg:flex-row flex-col  pt-[7rem] justify-between md:ps-[6rem] px-4 items-center md:items-start space-y-8 md:space-y-0">
    <PersonalInfo />
    <Picture />
  </div>
  
  )
}

export default MainHeroSetion;