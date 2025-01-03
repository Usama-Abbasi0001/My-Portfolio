import React, { useState } from 'react';
import Logo from '../../../public/images/logo.jpg'
import { Cross, Email, Github, LeftBar, Linkedin } from '../../../public/Utils/Icons';

function LeftSideBar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className='flex space-x-4'>
    <div className='md:flex hidden'>
      <button 
       className="bg-sky-900 px-5 py-3 h-[75px]" 
        onClick={toggleMenu}>
        <LeftBar />
      </button>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMenu}></div>
      <div
        className={`fixed top-0 left-0 z-40 h-full text-black w-64 p-4 bg-gray-400 shadow-lg transform transition-transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
        <div className=" flex justify-end ">
          <button
            onClick={toggleMenu}
            className="mt-2 p-2 text-black bg-gray-300 rounded-lg hover:bg-gray-600">
            <Cross/>
          </button>
        </div>
        <div className='text-[30px] ps-1 mt-7 font-bold text-black cursor-pointer'>
            Get in touch
        </div>
        <hr  className='w-[220px] border-2 border-green-600 rounded-[50%] mt-3 mx-auto'/>
        <div className='ps-1 mt-5 flex flex-col space-y-7 cursor-default'>
        <div className=''>I'm always excited to take on new projects and collaborate with innovative minds.
        </div>
        <div className=''>
        <div>Phone Number</div>
        <div className=''>+92304180777</div>
        </div>
        <div className=''>
        <div>Email</div>
        <div className=''>usamakhan58461@gmail.com</div>
        </div>
        <div className=''>
        <div>Adress</div>
        <div className='text-[16px]'>Nagori Plot Islamabad Colony</div>
        </div>
        <div className=''>
        <div className=''>Adress</div>
        <div className='mt-3 flex space-x-3'>
            <Email/>
            <Linkedin/>
            <Github/>
            </div>
        </div>
        </div>
      </div>
    </div>
    <div className='flex space-x-2 items-center md:mt-0 mt-5'>
        <div>
            <img src={Logo} alt="" className='w-[40px] h-[40px] rounded-t-[30%] rounded-s-[30%]  ' />
        </div>
        <span className='font-bold text-[24px] cursor-pointer hover:text-blue-500 hover:underline underline-offset-4 transition duration-200'>M.Usama Abbasi</span>
    </div>
    </div>
  );
}

export default LeftSideBar;
