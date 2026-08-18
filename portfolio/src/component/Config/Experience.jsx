import React from 'react';
import { Plue } from '../../../public/Utils/Icons';
import AnimatedCounter from '../AnimatedCounter';

const Experience = () => {
  return (
    <div className="flex space-x-1 items-center">
      <div className="flex items-center">
        <p className="mt-4">
          <Plue />
        </p>
        <p className="text-[70px] font-bold">
          <AnimatedCounter target={1} />
        </p>
      </div>
      <p className="font-bold opacity-80 text-white">
        Year of <br />Experience
      </p>
    </div>
  );
};

export default Experience;
