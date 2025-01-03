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
        <div className="lg:hidden flex flex-col fixed top-0 right-0 w-64 h-screen bg-gray-100 dark:bg-gray-800 shadow-lg z-50">
          {/* Close Button */}
          <button onClick={toggleMenu} className="p-4 text-red-500 self-end">
            <Cross />
          </button>

          {/* Menu Items */}
          <ul className="flex flex-col space-y-6 mt-10 px-6">
            <li className="cursor-pointer hover:text-blue-500 hover:underline underline-offset-4 transition duration-200">
              Home
            </li>
            <li className="cursor-pointer hover:text-blue-500 hover:underline underline-offset-4 transition duration-200">
              Services
            </li>
            <li className="cursor-pointer hover:text-blue-500 hover:underline underline-offset-4 transition duration-200">
              Portfolio
            </li>
            <li className="cursor-pointer hover:text-blue-500 hover:underline underline-offset-4 transition duration-200">
              Education
            </li>
            <li className="cursor-pointer hover:text-blue-500 hover:underline underline-offset-4 transition duration-200">
              Contact
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default RightBar;
