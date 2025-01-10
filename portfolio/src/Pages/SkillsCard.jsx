import React from 'react'
import '../component/Cards/SkillsCard.css';
import MySkills from '../component/Cards/MySkills';
import Html from '../component/Cards/Html';
import Css from '../component/Cards/Css';
import ReactCard from '../component/Cards/ReactCard';
import NextCard from '../component/Cards/NextCard';
import FigmaCard from '../component/Cards/FigmaCard';
import Tailwind from '../component/Cards/Tailwind';
import BootStrap from '../component/Cards/BootStrap';
import Addition from '../component/Cards/Addition';

function SkillsCard() {
  return (
    <div className='container flex mb-5  flex-col mt-16 justify-between px-10 items-center md:items-start space-y-8 md:space-y-0'>
        <MySkills/>
        
        <div className="flex lg:flex-nowrap flex-wrap lg:justify-start justify-center gap-4 pt-[4rem] w-full lg:w-[1100px] overflow-x-auto lg:overflow-y-auto pb-10 custom-scrollbar">
  <div className="transition-transform transform hover:scale-105 duration-300 flex-shrink-0">
    <Html />
  </div>
  <div className="transition-transform transform hover:scale-105 duration-300 flex-shrink-0">
    <Css />
  </div>
  <div className="transition-transform transform hover:scale-105 duration-300 flex-shrink-0">
    <ReactCard />
  </div>
  <div className="transition-transform transform hover:scale-105 duration-300 flex-shrink-0">
    <NextCard />
  </div>
  <div className="transition-transform transform hover:scale-105 duration-300 flex-shrink-0">
    <FigmaCard />
  </div>
  <div className="transition-transform transform hover:scale-105 duration-300 flex-shrink-0">
    <Tailwind />
  </div>
  <div className="transition-transform transform hover:scale-105 duration-300 flex-shrink-0">
    <BootStrap />
  </div>
</div>
  <Addition/>


    </div>
  )
}

export default SkillsCard;