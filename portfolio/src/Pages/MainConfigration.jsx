import React from 'react'
import Experience from '../component/Config/Experience';
import Projects from '../component/Config/Projects';
import Clients from '../component/Config/Clients';
import Awords from '../component/Config/Awords';


function MainConfigration() {
  return (
<div className="container  px-4 lg:w-[1100px] md:w-[700px] md:ms-[3rem] pb-5 mt-[6rem] flex lg:flex-row flex-col space-y-5 md:space-y-8 lg:space-y-0 ">

  {/* First Row */}
  <div className="flex flex-col md:w-[550px] w-[full]  lg:justify-around  items-center space-y-5 md:flex-row   md:justify-between md:space-y-0 md:space-x-5">
    <Experience />
    <Projects />
  </div>

  {/* Second Row */}
  <div className="flex flex-col items-center md:w-[550px] w-[full] lg:justify-around space-y-5 md:flex-row md:justify-between md:space-y-0 md:space-x-5">
    <Clients />
    <Awords />
  </div>
</div>

  )
}

export default MainConfigration;