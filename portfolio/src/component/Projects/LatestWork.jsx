import React from 'react'

function LatestWork() {
  return (
    <div>
         <div className="container mx-auto flex mb-10 flex-col items-center md:items-start space-y-6 mt-[10rem] md:ms-[2rem] md:ps-8  lg:w-[1100px]  md:w-[700px]">
                <p className="text-[30px] md:text-[40px] lg:text-[50px] font-bold text-red-500 text-center md:text-left">
                My Latest Works
                </p>
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start md:space-x-10 space-y-6 md:space-y-0 ">
  {/* Text Section */}
  <p className="w-[70%] md:w-[70%] lg:w-[55%] leading-8 text-center md:text-left text-sm md:text-base lg:text-lg">
    I believe that working hard and trying to learn every day will make me improve in satisfying my customers.
  </p>
</div>

              </div>
    </div>
  )
}

export default LatestWork;