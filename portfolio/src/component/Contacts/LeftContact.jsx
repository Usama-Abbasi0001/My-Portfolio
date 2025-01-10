import React from 'react'
import { Adderss, Email2, Phone } from '../../../public/Utils/Icons';

function LeftContact() {
  return (
    <div className='md:ms-[4rem] flex flex-col space-y-6  md:w-[400px] w-[full]'>

    <div className='flex space-x-5 items-center'>
    <div className='border-b-2 bg-gray-800 w-[60px] h-[60px] flex justify-center items-center rounded-[10px] border-red-500  transition-transform duration-300 hover:scale-110 hover:bg-gray-700 hover:border-red-700'>
        <Phone />
      </div>
        <div className='flex flex-col'>
        <p className='font-bold'>Phone Number</p>
        <p>+93304180777</p>
        </div>
    </div>

    <div className='flex space-x-5 items-center'>
    <div className='border-b-2 bg-gray-800 w-[60px] h-[60px] flex justify-center items-center rounded-[10px] border-red-500  transition-transform duration-300 hover:scale-110 hover:bg-gray-700 hover:border-red-700'>
        <Email2/>
      </div>
        <div className='flex flex-col'>
        <p className='font-bold'>Email ID</p>
        <p>usamakhan58461@gmail.com</p>
        </div>
    </div>

    <div className='flex space-x-5 items-center'>
    <div className='border-b-2 bg-gray-800 w-[60px] h-[60px] flex justify-center items-center rounded-[10px] border-red-500  transition-transform duration-300 hover:scale-110 hover:bg-gray-700 hover:border-red-700'>
        <Adderss/>
      </div>
        <div className='flex flex-col'>
        <p className='font-bold'>Address</p>
        <p>Islamabad Colony Tando Allahyar</p>
        </div>
    </div>
    </div>
  )
}

export default LeftContact;