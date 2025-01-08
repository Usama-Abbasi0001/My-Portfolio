import React from 'react'
import MyPIctuer from '../../../public/images/mypicture.png';
function Picture() {
  return (
    <div className='flex justify-center me-20' > 
        <img src={MyPIctuer} alt="" className='h-[400px] border-2 border-red-500   rounded-[100%]  ' />
    </div>
  )
}

export default Picture;