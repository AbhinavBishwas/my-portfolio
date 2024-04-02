import React from 'react'
import Myimage from '../src/assets/hero1.jpg'
import { RiArrowRightDoubleLine } from 'react-icons/ri';


const home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black to bg-gray-800 via-black">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center md:flex-row h-full px-4  ">
        <div className="flex flex-col justify-center h-full mr-4 "> 
          <p className="text-4xl sm:text-7xl text-white font-bold ">I am a  front end developer. </p>
          <p className="text-gray-400 py-4 max-w-md font-semibold " >I have an year of experience building and designing software.
            Currentl i love to work on web applications using texhstacks like React, Tailwind, javascript,and Graphsql. 
          </p>
          <div className="flex" >
            <button className="group flex w-fit text-white px-6 py-3 my-2 rounded-md items-center bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer" >
              Projects <span className="group-hover:rotate-90 duration-300"> <RiArrowRightDoubleLine size={25}/> </span>
            </button>
        </div>
      </div> 
      <div className="flex items-center justify-center">
        <img src={Myimage} alt="my profile" className="   mx-auto w-2/3   md:w-full lg:w-2/3 shadow-cyan-500 shadow-lg  rounded-2xl " />
      </div>
    </div>
  </div>
  )
}

export default home
