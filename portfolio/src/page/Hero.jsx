import React from "react";
import { TypeAnimation } from "react-type-animation";
import photo from "../assets/images/photo1.jpg";
import { Link } from 'react-scroll';

export const Hero = () => {
  return (
    <section className="relative flex flex-col-reverse md:flex-row items-center justify-between mt-12 md:mt-20 px-6 md:px-20 z-10 max-w-[80%] m-auto">
      <div className="flex flex-col items-start md:items-start text-white z-10 max-w-xl">
        
        <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-red-500 font-['Roboto']"> <span className=" text-white">  Hi,</span> 
        <TypeAnimation
  sequence={[
    " I'm Shubham Rawat",
    2000,
    "I'm a Full Stack Developer",
    2000,
    "I love Coding ",
    2000,
  ]}
  wrapper="span"
  cursor={true}
  repeat={Infinity}
  speed={30} 
  style={{ display: 'inline-block' }}
/>

        </h1>

        <p className="text-2xl md:text-3xl mb-10 font-['Roboto'] text-white">
          <TypeAnimation
            sequence={[
              "Crafting websites with passion!",
              2000,
              "Building full-stack applications!",
              2000,
              "Transforming ideas into code!",
              2000,
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            speed={30} 
            style={{ display: 'inline-block' }}
          />
        </p>

        
        <Link to="gmail" smooth={true} duration={500}  className="bg-blue-600 hover:bg-blue-700 text-white text-xl font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300" >  Contact Me</Link>
      </div>

      <img
        src= "https://img.pikbest.com/png-images/20240727/a-boy-with-laptop-on-the-chair-studying-concept-_10684170.png!sw800"
        alt="Hero"
        className="w-[40%] md:w-1/2 animate-float z-10 "
      />





 
    <ul className="hidden sm:block ml-auto space-y-6 text-white absolute right-8">
      <li>
        <a
          href="www.linkedin.com/in/shubham-rawat-691526340"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            className="w-7 hover:text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"
            />
          </svg>
        </a>
      </li>
      <li>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <svg
            className="w-7 hover:text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
            />
          </svg>
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/shubhamrawat195/?utm_source=qr&igsh=MWl5ZzJ0d2E0bjJ6bg%3D%3D#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            className="w-7 hover:text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
            />
          </svg>
        </a>
      </li>
      <li>
        <a
          href="https://mail.google.com/mail/u/0/#sent/QgrcJHsTgtGfbmjsxlFmzxZVMmMgGsHGhFg?compose=new"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            className="w-7 hover:text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"
            />
          </svg>
        </a>
      </li>
      <li>
        <a
          href="https://www.youtube.com/@CodeNinja12"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            className="w-7 hover:text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            fill="currentColor"
          >
            <path
              d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"
            />
          </svg>
        </a>
      </li>
    </ul>
 



    </section>
  );
};
