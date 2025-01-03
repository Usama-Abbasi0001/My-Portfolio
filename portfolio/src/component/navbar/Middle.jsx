import React from 'react'

function Middle() {
  return (
    <div>
     <ul className="flex space-x-10">
  <li className="cursor-pointer hover:text-blue-500 hover:underline underline-offset-4 transition duration-200">
    Home
  </li>
  <li className="cursor-pointer hover:text-blue-500 hover:underline underline-offset-4 transition duration-200">
    Services
  </li>
  <li className="cursor-pointer hover:text-blue-500 hover:underline underline-offset-4 transition duration-200">
    Portfolio
  </li>
  <li className="cursor-pointer hover:text-blue-500 hover:underline underline-offset-4 transition duration-200">
    Education
  </li>
  <li className="cursor-pointer hover:text-blue-500 hover:underline underline-offset-4 transition duration-200">
    Contact
  </li>
</ul>

    </div>
  )
}

export default Middle;