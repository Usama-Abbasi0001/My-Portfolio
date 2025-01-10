import React from "react";

function RightContact() {
  return (
    <>
      <div className="lg:w-[600px] md:w-[700px] w-[full] pr-10 text-white   lg:px-8 md:ps-14 lg:mt-0 mt-5">
        <h2 className="text-2xl font-bold pb-5">Leave a messge</h2>
        
        <form className="space-y-4">
          <div className="flex md:justify-between md:flex-row flex-col">
          <div className="flex flex-col">
            <label className="text-sm font-medium">Name</label>
            <input 
              type="text" 
              placeholder="Enter your name" 
              className="lg:w-[250px] w-[300px] mt-1 p-2 border-gray-800 bg-gray-500 rounded-[6px] focus:ring-2 focus:ring-red-500 focus:outline-none"
            />
          </div>
          <div className="flex flex-col md:mt-0 mt-10">
            <label className="text-sm font-medium">Phone Number</label>
            <input 
              type="tel" 
              placeholder="Enter your phone number" 
              className="lg:w-[250px] w-[300px] mt-1 p-2 bg-gray-500 border-gray-800 rounded-[6px] focus:ring-2 focus:ring-red-500 focus:outline-none"
            />
          </div>
          </div>
          
          <div className="flex md:justify-between md:flex-row flex-col ">
          <div className="flex flex-col  md:mt-0 mt-10">
            <label className="text-sm font-medium ">Email</label>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="lg:w-[250px] w-[300px] mt-1 p-2 bg-gray-500 border-gray-800 rounded-[6px] focus:ring-2  focus:ring-red-500 focus:outline-none"
            />
          </div>
          <div className="flex flex-col  md:mt-0 mt-10">
            <label className="text-sm font-medium ">Subject</label>
            <input 
              type="text" 
              placeholder="Enter subject" 
              className="lg:w-[250px] w-[300px] mt-1 p-2  bg-gray-500 border-gray-800 rounded-[6px] focus:ring-2 focus:ring-red-500 focus:outline-none"
            />
          </div>
          </div>
          {/* Message */}
          <div className=" md:mt-0 pt-10">
            <label className="text-sm font-medium ">Message</label>
            <textarea 
              placeholder="Type your message here" 
              rows="4" 
              className="w-full mt-1 p-2  bg-gray-500 border-gray-800 rounded-[6px] focus:ring-2 focus:ring-red-500 focus:outline-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="">
            <button 
              type="submit" 
              className=" border-red-500 hover:bg-red-500 border-dotted border-2 text-white py-2 px-4 rounded-lg transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default RightContact;
