import React from 'react'
import { FaGithub,FaLinkedin } from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'


const sociallinks = () => {

    const Links =[
        {
            id:1,
            child:(
                <>
            Linkedin <FaLinkedin size={30} />
            </>
            ),
            href:'https://www.linkedin.com/in/abhinav-bishwas-6a8576241',
            style:'rounded-tr-md'
        },
        {
            id:2,
            child:(
                <>
            Github <FaGithub size={30} />
            </>
            ),
            href:'https://github.com/AbhinavBishwas1',
            
        },
        {
            id:3,
            child:(
                <>
            Mail <HiOutlineMail size={30} />
            </>
            ),
            href:'mailto:abhinav.biswas06@gmail.com',
            
        },
        {
            id:4,
            child:(
                <>
            Resume <BsFillPersonLinesFill size={30} />
            </>
            ),
            href:'/ABHINAV_BISHWAS.pdf',
            download:true,
            style:'rounded-br-md'
        },
    ]



  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed ">
      <ul>
        {Links.map((link) =>(
            <li 
            key={link.id} className={`flex justify-between  items-center w-40 h-14 px-4 0 ml-[-100px] hover:rounded-md hover:ml-[-10px] duration-300 ${link.style}`}
>
            <a 
            className="flex justify-between items-center  w-full text-white" tyle={{color:"#f5a041"}} href={link.href} download={link.download} target='_blank' rel="noreferrer" >
            {link.child}
            </a>
            </li>
        ))}

        
      </ul>
    </div>
  )
}

export default sociallinks
