import React from 'react'
import './Skills.css'
function Skills() {
  return (
    < >
 <div className="container flex flex-col mt-16 px-10 items-center md:items-start space-y-8 md:space-y-0">
  <p className="text-center md:text-left">
    +1 year 6 months with professional Frontend  design
 . </p>
  <div className="flex flex-col space-y-6 pt-5">
    <div className="flex flex-wrap justify-center md:justify-start gap-4">
      <p className="skill-item">HTML5</p>
      <p className="skill-item">CSS3</p>
      <p className="skill-item">React.js</p>
      <p className="skill-item">Next.js</p>
    </div>
    <div className="flex flex-wrap justify-center md:justify-start gap-4">
      <p className="skill-item">Tailwind</p>
      <p className="skill-item">Bootstrap</p>
      <p className="skill-item">Git, GitHub</p>
    </div>
  </div>
</div>

    </>
  )
}

export default Skills;