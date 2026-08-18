import React from 'react';
import reactimg from '../../../public/images/reactpic.jpg';
import AnimatedCounter from '../AnimatedCounter';

const ReactCard = () => {
  return (
    <div className='container border-transparent pt-10 md:ps-5 border-2'>
      <div className="flex w-[160px] shadow-lg shadow-red-400 flex-col items-center border-t-4 border-l-4 border-r-4 border-gray-700 p-6 bg-gray-800 rounded-lg hover:border-red-500 hover:shadow-lg transition-all duration-300 ease-in-out">
        <div>
          <img src={reactimg} alt="React Icon" className="w-[80px] md:w-[100px] h-[80px] md:h-[100px]" />
        </div>
        <div className="flex items-center">
          <p className="text-[30px] md:text-[40px] font-bold mt-6 md:mt-10 text-white">
            <AnimatedCounter target={80} suffix="%" />
          </p>
        </div>
        <p className="font-bold opacity-80 text-white mt-2 text-sm md:text-base">React</p>
      </div>
    </div>
  );
};

export default ReactCard;
