import React, { useState } from "react";
import mongodbIcon from "../assets/images/mongodb.svg";
import expressIcon from "../assets/images/express.svg";
import reactIcon from "../assets/images/react.svg";
import nodeIcon from "../assets/images/node.svg";
import aboutImage from "../assets/images/about.webp";


const skills = ["React", "java", "html", "css", "bootstrap", "mongoDb", "Gsap", "tailwind css","Express", "nodemon", "Thunder client","Jquery","JWT","Cloudinary"];

const Popup = () => {
 

  return (
 
    
  
      <div className="bg-black rounded-lg shadow-lg w-[90%] max-w-[80%] flex flex-col md:flex-row overflow-hidden p-6 m-auto ">

      

        {/* Text Section */}
        <div className="flex-1 p-4 text-white">
          <h2 className=" font-bold mb-2 text-3xl">About Me</h2>
          <p className="text-base leading-relaxed">
            Hi there! I'm a Full-Stack Web Developer with a passion for building dynamic, user-friendly, and scalable web applications.
            With expertise in both front-end and back-end technologies, I thrive in creating seamless digital experiences that meet client and user needs.
          </p>

          <ul className="flex flex-wrap mt-4">
            {skills.map((skill, index) => (
              <li key={index}>
                <a href="#" className="rounded-md px-4 py-1 text-sm font-bold text-white border border-blue-300 m-2 inline-flex  transition hover:border-blue-800  hover:scale-110 hover:border-2 ">
                  {skill}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex justify-around items-center mt-12">
            <ToolTip icon={mongodbIcon} letter="M" color="text-[#47A248]" text="mongoDB" tooltipBg="bg-[#47A248]" />
            <ToolTip icon={expressIcon} letter="E" color="text-white" text="Express.js" tooltipBg="bg-white" />
            <ToolTip icon={reactIcon} letter="R" color="text-[#61DAFB]" text="react.js" tooltipBg="bg-[#61DAFB]" />
            <ToolTip icon={nodeIcon} letter="N" color="text-[#8cc842]" text="node.js" tooltipBg="bg-[#8cc842]" />
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 bg-black flex justify-center items-center p-4 md:p-8">
          <img src={aboutImage} alt="Developer" className="max-w-full h-auto rounded-md" />
        </div>

       
      </div>
    
  );
};

const ToolTip = ({ icon, letter, color, text, tooltipBg }) => (
  <div className="relative group flex flex-col items-center gap-1 text-2xl font-bold cursor-default">
    <img src={icon} alt={text} className="w-8 h-8 relative z-10" />
    <span className={color}>{letter}</span>
    <div
      className={`absolute top-[-45px] opacity-0 group-hover:opacity-100 group-hover:top-[-60px] transition-all duration-200 text-black text-sm py-2 px-4 rounded-full shadow-md ${tooltipBg}`}
    >
      {text}
      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 rotate-45 bg-inherit"></div>
    </div>
  </div>
);


export default Popup;
