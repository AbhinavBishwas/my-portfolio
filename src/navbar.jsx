import React, { useState } from 'react'
import { FaBars, FaTimes} from 'react-icons/fa'
// import {Link} from 'react-router-dom'
const Navbar = () => {
const [nav,setnav] =useState(false);
  const links=[
  {
    id:1,
    link: 'home',
  },
  {
    id:2,
    link: 'about',
  },
  {
    id:3,
    link: 'experience',
  },
  {
    id:4,
    link: 'project',
    
  },
  {
    id:5,
    link: 'contact',
  },
];
  return (
    <div className="flex justify-between items-center w-full h-20 text-white fixed bg-black px-4">
      <div>
        <h1 className="text-5xl font-signature capitalize">
          Abhinav Bishwas
        </h1>
      </div>
    <ul className=" md:flex hidden">

      {links.map((link)=> (
        <li key={link.id} className="px-4 cursor-pointer hover:border-b-2  hover:inline hover:border-gray-400 hover:text-gray-300    capitalize font-medium text-gray-400 hover:scale-105 duration-200 text-xl" >
          {link.link}
        </li>   
      ))}

    </ul>

    {/* for mobile state so icvons we will use  */}
    <div onClick={()=> setnav(!nav)} className="md:hidden cursor-pointer pr-4 z-10 text-gray-300" >
      {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
    </div>

        {nav && (
          <ul className="  flex flex-col justify-center items-center text-4xl top-0 absolute left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800  text-gray-300">
        
          {links.map((link)=>(
            <li key={link.id} className="py-6 cursor-pointer capitalize font-medium hover:scale-105 duration-200">{link.link}</li>
          ))}        
        </ul>
        )}
        

    </div>
  )
}

export default Navbar
