import React from 'react'

function ContactHeading() {
  return (
    <>
         <div className="container md:ps-[4rem] flex mb-10 flex-col items-center md:items-start space-y-3   lg:w-[1100px]  md:w-[700px]">
                <p className="text-[30px] md:text-[40px] lg:text-[50px] font-bold text-red-500 text-center md:text-left">
                Get in touch
                </p>
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start md:space-x-10 space-y-6 md:space-y-0 w-full">
                  <p className="w-full md:w-[80%] lg:w-[60%] leading-8 text-center md:text-left">
                  I'm always excited to take on new projects and collaborate with innovative minds. If you
                  have a project in mind or just want to chat about design, feel free to reach out!
                  </p>
                </div>
              </div>
    </>
  )
}

export default ContactHeading;