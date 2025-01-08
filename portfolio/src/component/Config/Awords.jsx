import React, { useState, useEffect } from 'react';
import { Plue } from '../../../public/Utils/Icons';

const Awords = () => {
  const [count, setCount] = useState(0);
  const targetCount = 3;

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
      <div className="flex space-x-1 items-center">
        <div className="flex items-center">
          <p className="mt-4">
            <Plue />
          </p>
          <p className="text-[70px] font-bold">{count}</p>
        </div>
        <p className="font-bold opacity-80 text-white">Satisfied <br />Happy Clients</p>
      </div>
    </>
  );
};

export default Awords;
