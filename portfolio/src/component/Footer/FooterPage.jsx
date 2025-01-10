import React from 'react';
import logo from '../../../public/images/logo.jpg';

function FooterPage() {
  return (
    <div className="mt-[5rem] px-4">
      {/* Logo and Name */}
      <div className="flex flex-col items-center sm:flex-row sm:space-x-3 justify-center">
        <img
          src={logo}
          alt=""
          className="w-[40px] h-[40px] rounded-t-[30%] rounded-s-[30%]"
        />
        <a
          href="#home"
          className="font-bold text-[20px] sm:text-[24px] cursor-pointer hover:underline underline-offset-4 transition duration-200 mt-2 sm:mt-0"
          style={{ color: "#FF0000" }}
        >
          Usama Abbasi
        </a>
      </div>

      {/* Navigation Links */}
      <ul className="flex md:flex-row flex-col gap-4 sm:space-x-10 items-center justify-center mt-7">
        <a
          href="#home"
          className="cursor-pointer hover:text-red-500 text-white hover:underline underline-offset-4 transition duration-200"
        >
          Home
        </a>
        <a
          href="#services"
          className="cursor-pointer hover:text-red-500 text-white hover:underline underline-offset-4 transition duration-200"
        >
          Services
        </a>
        <a
          href="#portfolio"
          className="cursor-pointer hover:text-red-500 text-white hover:underline underline-offset-4 transition duration-200"
        >
          Portfolio
        </a>
        <a
          href="#education"
          className="cursor-pointer hover:text-red-500 text-white hover:underline underline-offset-4 transition duration-200"
        >
          Education
        </a>
        <a
          href="#contact"
          className="cursor-pointer hover:text-red-500 text-white hover:underline underline-offset-4 transition duration-200"
        >
          Contact
        </a>
      </ul>

      {/* Footer Text */}
      <p className="text-center mt-7 text-sm sm:text-base">
        © 2025 All Rights Reserved by{" "}
        <span className="text-red-400 underline hover:text-red-600">
          M. Usama Abbasi
        </span>
      </p>
    </div>
  );
}

export default FooterPage;
