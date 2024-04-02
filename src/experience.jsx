import React from "react";
import html from "./assets/html.png";
import css from "./assets/css.png";
import javascript from "./assets/javascript.png";
import react_img from "./assets/react.png";
import tailwind from "./assets/tailwind.png";
import github from "./assets/github.png";
import mySql from './assets/mysql.png';
const experience = () => { 

    const Webs =[
        {
            id:1,
            src: html,
            title:'HTML',
            style:'shadow-orange-500 '
        },
        {
            id:2,
            src: css,
            title:'CSS',
            style:'shadow-blue-500'
        },
        {
            id:3,
            src: javascript,
            title:'JAVASCRIPT',
            style:'shadow-yellow-500 '
        },
        {
            id:4,
            src: tailwind,
            title:'Tailwind',
            style:'shadow-sky-400 '
        },
        {
            id:5,
            src: react_img,
            title:'REACT',
            style:'shadow-blue-600 '
        },
        {
            id:6,
            src: github,
            title:'GITHUB',
            style:'shadow-gray-400 '
        },
        {
            id:7,
            src: mySql,
            title:'MySql',
            style:'shadow-white '
        },
        


    ]

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-black to-gray-800 text-white w-full h-screen "
    >
     <div className="flex flex-col max-w-screen-lg justify-center mx-auto p-4 w-full h-full">
        <div>
          <p className="capitalize border-b-4 inline text-4xl p-2 border-gray-500 font-bold ">experience</p>
          <p className="py-6">These are the development technologies i have worked with.</p>
        </div>

        <div className=" w-full  grid grid-cols-2 sm:grid-cols-3 text-center gap-8 py-8 px-12 ">
          {Webs.map((webs)=>(
            <div key={webs.id} className={`hover:scale-105 duration-500 shadow-md py-2 rounded-lg    ${webs.style}`}>
            <img src={webs.src} alt="logo" className="w-20 mx-auto" />
            <p className="font-bold mt-4 ">{webs.title}</p>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default experience;
