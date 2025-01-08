import React from 'react'
import PersonalInfo from '../component/HeroSection/PersonalInfo';
import Picture from '../component/HeroSection/Picture';

function MainHeroSetion() {
  return (
    <div id='home' className="container flex lg:flex-row flex-col mt-16 justify-between px-10 items-center md:items-start space-y-8 md:space-y-0">
    <PersonalInfo />
    <Picture />
  </div>
  
  )
}

export default MainHeroSetion;