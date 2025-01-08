import React from 'react';
import './Eduction.css';
import { UpArrow } from '../../../public/Utils/Icons';

function PartOne({Heading, title , button}) {
  return (
    <>
      <div className="container flex mb-10 flex-col items-center md:items-start space-y-6 px-4  lg:w-[1100px]  md:w-[700px]">
        <p className="text-[30px] md:text-[40px] lg:text-[50px] font-bold text-red-500 text-center md:text-left">
          {Heading}
        </p>
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start md:space-x-10 space-y-6 md:space-y-0 w-full">
          <p className="w-full md:w-[70%] lg:w-[40%] leading-8 text-center md:text-left">
          {title}
          </p>
          <button className="skill-items w-full md:w-[170px] flex items-center justify-center space-x-3 text-white bg-red-500 px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition duration-300">
            <p>{button}</p>
            <span>
              <UpArrow />
            </span>
          </button>
        </div>
      </div>
    </>
  );
}

export default PartOne;
