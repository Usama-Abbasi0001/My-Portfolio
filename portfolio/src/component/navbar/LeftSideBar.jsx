import React, { useState } from 'react';
import  './NavBar.css'
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
       className=" px-5 py-3 h-[75px]"
       id='Leftbar' 
        onClick={toggleMenu}>
        <LeftBar />
      </button>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMenu}></div>
      <div id='backgroundcolor'
        className={`fixed top-0 left-0 z-40 h-full text-white w-64 p-4  shadow-lg transform transition-transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
        <div className=" flex justify-end ">
          <button
            onClick={toggleMenu}
            className="mt-2 p-2 text-blac">
            <Cross/>
          </button>
        </div>
        <div className='text-[30px] ps-1 mt-7 font-bold text-white cursor-pointer'>
            Get in touch
        </div>
        <hr  className='w-[220px] border-2 rounded-[50%] mt-3 mx-auto border-black' />
        <div className='ps-1 mt-5 flex flex-col space-y-7 cursor-default' >
        <div className='' >I'm always excited to take on new projects and collaborate with innovative minds.
        </div>
        <div className=''>
        <div className='font-bold'>Phone Number</div>
        <div className=''>+92304180777</div>
        </div>
        <div className=''>
        <div className='font-bold'>Email</div>
        <div className=''>usamakhan58461@gmail.com</div>
        </div>
        <div className=''>
        <div className='font-bold'>Adress</div>
        <div className='text-[16px]'>Nagori Plot Islamabad Colony</div>
        </div>
        <div className=''>
        <div className='font-bold'>Adress</div>
        <div className='mt-3 flex space-x-7'>
            <Email/>
            <Linkedin/>
            <Github/>
            </div>
        </div>
        </div>
      </div>
    </div>
    <div  className='flex space-x-2 items-center md:mt-0 mt-5'>
        <div>
            <img src={Logo} alt="" className='w-[40px] h-[40px] rounded-t-[30%] rounded-s-[30%]  ' />
        </div>
        <span id='home' className='font-bold text-[24px] cursor-pointer  hover:underline underline-offset-4 transition duration-200' style={{ color: "#FF0000" }}>M.Usama Abbasi</span>
    </div>
    </div>
  );
}


export default LeftSideBar;
