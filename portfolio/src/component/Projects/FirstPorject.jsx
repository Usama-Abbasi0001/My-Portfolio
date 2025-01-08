import React, { useState } from 'react'
import '../Projects/Portfolio.css';
import ProjectOne from '../../../public/images/projectOne.png'
import { AnglesUp2,  RightArrow2 } from '../../../public/Utils/Icons'

function FirstPorject() {
    const [isHovered, setIsHovered] = useState(false);
    
      const handleMouseOver = () => {
        setIsHovered(true);
      };
    
      const handleMouseOut = () => {
        setIsHovered(false);
      };
  return (
    <>
<div
  id="Portfolio"
  className="container-fluid mt-10 pt-[5rem] md:pt-[10rem] px-[1rem] md:px-[3rem] pb-[3rem]"
>
  <div className="flex flex-col lg:flex-row space-y-5 md:space-y-0 lg:space-x-4 rounded-[10px] p-5 shadow-lg border-t-2 border-red-500 shadow-red-500">
    {/* Image Section */}
    <img
      src={ProjectOne}
      alt="Project One"
      className="w-full md:w-[700px] h-[300px] md:h-[500px] rounded-md object-cover"
    />

    {/* Content Section */}
    <div className="pt-5 px-3 md:pt-7 md:px-5 rounded-lg flex flex-col space-y-5">
      <p className="text-red-500 font-bold text-lg md:text-xl">Featured Project</p>

      {/* Title and Icon */}
      <div
        className={`flex w-full justify-between items-center py-3 rounded-md ${
          isHovered ? "border-red-400" : "border-gray-400"
        }`}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <p className="text-lg md:text-[25px] font-bold">Draper University</p>
        <div className="border-2 rounded-full p-3">
          {isHovered ? <AnglesUp2 /> : <RightArrow2 />}
        </div>
      </div>

      {/* Description */}
      <p className="text-sm md:text-base">
        I've enhanced Draper University's website by fixing frontend issues and
        creating new course pages.
      </p>

      {/* Tools Section */}
      <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center w-full space-y-3 md:space-y-0 lg:pt-[13rem] pt-0"> 
        <p className="text-sm font-semibold">Tools</p>
        <p className="text-sm md:text-base w-full md:w-[230px]">
          React Js, Redux, JavaScript, Firebase, HTML/CSS
        </p>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default FirstPorject;