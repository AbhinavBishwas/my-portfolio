import React from 'react'

const contact = () => {
  return (
    <div name='contact' className="bg-gradient-to-b from-black to-gray-800 text-white p-4" >
    <div className="flex flex-col justify-center w-full h-full max-w-screen-lg mx-auto p-4 ">
        <div>
            <p className="  text-4xl font-bold border-b-4 border-gray-500 inline  " >Contact Me</p>
            <p className="py-6 font-semibold">Let's have a coffee </p>
        </div>
        <div>
            <form action="" className="flex flex-col w-full md:w-2/3">
                <input type="name" name="name" placeholder="Enter ur name" className="  my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none "/>
                <input type="email" name="email" placeholder="Enter ur Email" className="  my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none "/>
                <textarea name="Message" placeholder="Type a Message"  rows="10" className=" my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"></textarea>
                <button className="group flex w-fit text-white px-6 py-3 my-2 rounded-md items-center bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer" >
              Get In Touch
            </button>
            </form>
        </div>
    </div>
    </div>
  )
}

export default contact
