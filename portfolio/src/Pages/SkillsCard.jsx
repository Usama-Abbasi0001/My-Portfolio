import React from 'react'
import MySkills from '../component/Cards/MySkills';
import Html from '../component/Cards/Html';
import Css from '../component/Cards/Css';
import ReactCard from '../component/Cards/ReactCard';
import NextCard from '../component/Cards/NextCard';
import FigmaCard from '../component/Cards/FigmaCard';
import Tailwind from '../component/Cards/Tailwind';

function SkillsCard() {
  return (
    <div className='container flex mb-5  flex-col mt-16 justify-between px-10 items-center md:items-start space-y-8 md:space-y-0'>
        <MySkills/>
        <div className="flex justify-between w-[1100px]  pt-[4rem]">
        <Html/>
        <Css/>
        <ReactCard/>
        <NextCard/>
        <FigmaCard/>
        <Tailwind/>
        </div>
    </div>
  )
}

export default SkillsCard;