import React from 'react'
import Middle from '../component/navbar/Middle';
import RightBar from '../component/navbar/RightBar';

function MainNavBar() {
  return (
    <div className='container fixed top-0 left-0 right-0 z-50 bg-gray-800 flex justify-between items-center px-4 py-3'>
      <div className='flex items-center gap-3'>
        <span id='home' className='font-bold text-[20px] md:text-[24px] cursor-pointer hover:underline underline-offset-4 transition duration-200' style={{ color: '#FF0000' }}>M.Usama Abbasi</span>
      </div>
      <div className='lg:flex hidden'><Middle /></div>
      <div><RightBar /></div>
    </div>
  )
}

export default MainNavBar;