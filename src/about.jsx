import React from 'react'

const about = () => {
  return (
    <div name="about" className="  w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white ">
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center h-full w-full">
        <div className="pb-8">
            <p className="  text-4xl font-bold border-b-4 border-gray-500 inline   ">About</p>
        </div>
        <p className="text-xl ">
         I'm a front-end developer with a passion for crafting engaging and intuitive user experiences. My journey in web development began with projects like Aim2Crack, where I honed my skills in HTML, CSS, and JavaScript to create responsive web pages. Currently, I'm working on College-Hub, a project aimed at enhancing academic success by creating a unified platform for students to access academic resources and track their progress. My experience has taught me the importance of clean code and user-centric design, skills I strive to improve with each project.</p>
        <br />          
        <p className="text-xl">
        Apart from my technical skills, I'm also actively involved in extracurricular activities like event management and hackathons. These experiences have helped me develop strong organizational and leadership skills. I take pride in my academic achievements, such as my high SGPA and ranking in the department. In my free time, I enjoy participating in competitive coding challenges, which not only sharpen my skills but also keep me motivated to learn and grow. Overall, I'm a dedicated and enthusiastic individual eager to continue exploring new technologies and pushing the boundaries of web development.
        </p>
      </div>
    </div>
  )
}

export default about
