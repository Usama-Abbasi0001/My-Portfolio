import React, { useState } from 'react';
import { Cross, Email, Github, Linkedin, Rightbar } from '../../../public/Utils/Icons';

function RightBar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  // Toggle the menu open/close
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="flex space-x-5">
        {/* Social Icons for Large Screens */}
        <div className="md:flex hidden space-x-6">
          <div>
            <Email />
          </div>
          <div>
            <Linkedin />
          </div>
          <div>
            <Github />
          </div>
        </div>

        {/* Toggle Button for Small Screens */}
        <div className="lg:hidden flex">
          <button onClick={toggleMenu} className="md:mt-0 mt-5">
            <Rightbar />
          </button>
        </div>
      </div>

      {/* RightBar Menu */}
      {isMenuOpen && (
        <div className="lg:hidden  flex flex-col fixed top-0 right-0  h-96  shadow-lg z-50 md:w-[220px] w-[375px]" id='backgroundcolor1'>
          {/* Close Button */}
          <button onClick={toggleMenu} className="p-4  font-bold self-end">
            <div className='flex justify-between items-center md:w-[190px] w-[350px]'>
            <div className='text-[30px] md:text-[16px] text-white'>M.Usama Abbasi</div>
            <Cross />
            </div>
          </button>

          {/* Menu Items */}
          <ul className="flex text-black font-bold flex-col space-y-6 mt-6 px-6">
  <li className="cursor-pointer hover:text-black text-white hover:underline underline-offset-4 transition duration-200">
    Home
  </li>
  <li className="cursor-pointer  hover:text-black text-white hover:underline underline-offset-4 transition duration-200">
    Services
  </li>
  <li className="cursor-pointer  hover:text-black text-white hover:underline underline-offset-4 transition duration-200">
    Portfolio
  </li>
  <li className="cursor-pointer  hover:text-black text-white hover:underline underline-offset-4 transition duration-200">
    Education
  </li>
  <li className="cursor-pointer  hover:text-black text-white hover:underline underline-offset-4 transition duration-200">
    Contact
  </li>
</ul>

        </div>
      )}
    </>
  );
}

export default RightBar;
