import React from 'react'
import PartOne from '../component/Education/PartOne';
import Service from '../component/services/Service';

function Mainserives() {
  return (
    <div id='Services' className="container flex flex-col mt-16 px-10 items-center md:items-start space-y-8 md:space-y-0">

        <PartOne Heading='What do I offer?' title='My journey started with a fascination for design and technology,
         leading me to specialize in UI/UX design' button='Get a Quote'/>
         <Service/>
         <Service/>
         <Service/>
    </div>
  )
}

export default Mainserives;