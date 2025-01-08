import React, { useState, useEffect } from 'react';
import html from '../../../public/images/html.png'

const Html = () => {
  const [count, setCount] = useState(0);
  const targetCount = 95;

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < targetCount) {
          return prevCount + 1;
        } else {
          clearInterval(interval);
          return prevCount;
        }
      });
    }, 100); // Adjust speed (milliseconds per increment)

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <>
    <div className='container border-transparent pt-10 md:ps-5 border-2'>
    <div className="flex w-[160px] shadow-lg shadow-red-400 flex-col items-center border-t-4 border-l-4 border-r-4 border-gray-700 p-6 bg-gray-800 rounded-lg hover:border-red-500 hover:shadow-lg transition-all duration-300 ease-in-out">
  <div>
    <img src={html} alt="HTML Icon" className="w-[80px] md:w-[100px] h-[80px] md:h-[100px]" />
  </div>
  <div className="flex items-center">
    <p className="text-[30px] md:text-[40px] font-bold mt-6 md:mt-10 text-white">{count}%</p>
  </div>
  <p className="font-bold opacity-80 text-white mt-2 text-sm md:text-base">HTML</p>
</div>
    </div>

    </>
  );
};

export default Html;
