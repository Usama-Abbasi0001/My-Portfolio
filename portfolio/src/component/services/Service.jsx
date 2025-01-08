import React, { useState } from 'react';
import '../Education/Eduction.css'
import { AnglesUp, RightArrow } from '../../../public/Utils/Icons';

function Service() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };
  return (
    <>
<div className="container flex flex-col space-y-10 px-4 lg:w-[1100px] md:w-[700px]">
<hr />
<div href='home' className={`card flex flex-col lg:flex-row md:items-start items-center justify-between lg:w-[1070px] md:w-[560px]  md:space-y-0 hover:border-opacity-100 transition-all duration-300 border-b-2 rounded-t-[10px] border-opacity-50 border-gray-300 py-7 px-3 ${
        isHovered ? "border-red-500" : "border-gray-400"}`}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut} >
  <p className="text-[25px] font-bold md:w-[300px]">04. Web Development</p>
  <div className="flex flex-col md:flex-row items-start justify-between space-y-4 md:space-y-0 w-full md:w-[550px]">
    <p className="text-sm lg:mt-0 mt-5 md:w-[350px]">
      Crafting responsive and engaging websites that align with your brand and business goals.
    </p>
    <a href='home'
      className="border-2 p-2 rounded-full transition duration-300 ease-in-out"
     
    >
      {isHovered ? <AnglesUp /> : <RightArrow />}
    </a>
  </div>
</div>
</div>



    </>
  )
}

export default Service;