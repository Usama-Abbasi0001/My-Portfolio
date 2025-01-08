import React from 'react'
import PartTwo from '../component/Education/PartTwo';
import PartOne from '../component/Education/PartOne';

function Education() {
  return (
    <>
     <div id='education' className="container flex flex-col mt-16 px-10 items-center md:items-start space-y-8 md:space-y-0">
      <PartOne Heading='My Education' title='  I believe that working hard and trying to learn every day will make me improve in satisfying my customers' button='Get a Touch'/>
      <PartTwo/>
     </div>
    </>
  )
}

export default Education;