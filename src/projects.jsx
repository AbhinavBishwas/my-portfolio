import React from "react";
import tictac from "./assets/tic_tac_toe.png";
import profile from './assets/profilecard.png'
import stonepaper from './assets/rock_paper_scissors.png'
const projects = () => {
  const pro = [
    {
      id: 1,
      src: tictac,
      view:"https://abhinavbishwas.github.io/Tic-Tac-Toe/",
      repo:"https://github.com/AbhinavBishwas/Tic-Tac-Toe",
    },
    {
      id:2,
      src:stonepaper,
      view:"https://abhinavbishwas.github.io/questionTab/",
      repo:"https://github.com/AbhinavBishwas/questionTab",

     },
     {
      id:3,
      src:profile,
      view:"https://github.com/Piyushkumarsah/College_hub",
      repo:"https://github.com/Piyushkumarsah/College_hub",

     },
  ];
  const redirectToRepo = (url) => {
    window.open(url, "_blank");
  };


  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-gray-800 to-black  text-white w-full h-screen"
    >
      <div className=" max-w-screen-lg flex flex-col justify-center mx-auto p-4 w-full h-full ">
        <div className="pb-8">
          <p className="capitalize border-b-4 inline text-4xl p-2 border-gray-500 font-bold ">
            Projects
          </p>
          <p className="py-6">U can see some of my projects here. </p>
        </div>
        <div  className="grid grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 ">
        {pro.map((pros)=>(
          <div key={pros.id} className="   rounded-lg n shadow-white shadow-md">
          <img
            src={pros.src}
            alt=""
            className=" rounded-2xl hover:scale-105 duration-200 w-full h-64  p-4 object-cover  "
          />

          <div className="flex  justify-center items-center ">
            <button onClick={() => redirectToRepo(pros.view)} className=" rounded-md w-1/2 px-6 py-3 m-4 duration-300 hover:scale-105 bg-gradient-to-r from-cyan-500 to-blue-500">
              View
            </button>
            <button onClick={() => redirectToRepo(pros.repo)} className=" rounded-md w-1/2 px-6 py-3 m-4 duration-300 hover:scale-105 bg-gradient-to-r from-cyan-500 to-blue-500">
              Repo
            </button>
          </div>
        </div>
        ))}
        </div>
        
      </div>
    </div>
  );
};

export default projects;
