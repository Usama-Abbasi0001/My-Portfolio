import React from 'react'
import { Arrow } from '../../../public/Utils/Icons';

function PersonalInfo() {
  return (
    <>
    <div className='flex flex-col '>
    <div className='text-[40px] font-bold md:text-start text-center' style={{ color: "#FF0000" }} data-aos="flip-up">M.Usama Abbasi</div>
    <p
  className="w-full sm:w-[80%] md:w-[600px] mt-4 md:mt-7 leading-7 md:leading-10 text-center md:text-left"  data-aos="fade-up"
     data-aos-duration="3000"
>
  A highly skilled frontend developer with a strong commitment to delivering seamless and visually engaging digital solutions. With over 1+ years of experience in web development and design, I excel at creating robust applications and user-centric interfaces that drive exceptional user experiences. My expertise lies in blending innovative technologies with modern design principles to craft solutions that are both functional and aesthetically pleasing.
</p>

    <div
  className="flex space-x-3 items-center border-2 border-dotted rounded-[10px] w-[150px] text-center justify-center py-3 hover:bg-red-500 cursor-pointer transition duration-300 mt-10 md:mx-0 mx-auto"
  style={{ borderColor: "#FF0000" }} 
>
  <p>Here ME</p>
  <Arrow />
</div>
    </div>
    </>
  )
}

export default PersonalInfo;