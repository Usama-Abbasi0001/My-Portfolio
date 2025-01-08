import React from 'react'

function Middle() {
  return (
    <div>
     <ul className="flex space-x-10">
     <a href='#home' className="cursor-pointer hover:text-red-500 text-white hover:underline underline-offset-4 transition duration-200">
    Home
  </a>
  <a href='#Services' className="cursor-pointer  hover:text-red-500 text-white hover:underline underline-offset-4 transition duration-200">
    Services
  </a>
  <a href='#portfolio' className="cursor-pointer  hover:text-red-500 text-white hover:underline underline-offset-4 transition duration-200">
    Portfolio
  </a>
  <a href='#education' className="cursor-pointer  hover:text-red-500 text-white hover:underline underline-offset-4 transition duration-200">
    Education
  </a>
  <li className="cursor-pointer  hover:text-red-500 text-white hover:underline underline-offset-4 transition duration-200">
    Contact
  </li>
</ul>

    </div>
  )
}

export default Middle;