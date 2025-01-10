import React from 'react'
import LeftSideBar from '../component/navbar/LeftSideBAr';
import Middle from '../component/navbar/Middle';
import RightBar from '../component/navbar/RightBar';

function MainNavBar() {
  return (
    <div className='container fixed bg-gray-800 flex justify-between items-center pr-4'>
    <div><LeftSideBar/></div>
    <div className='lg:flex hidden'><Middle/></div>
    <div><RightBar/></div>
    </div>
  )
}

export default MainNavBar;