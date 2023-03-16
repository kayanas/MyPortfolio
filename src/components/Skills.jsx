import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Tailwind from "../assets/tailwind.png";
import PHP from "../assets/php.png";
import MySql from "../assets/mysql.png";
import Prestashop from "../assets/prestashop.png";
import Wordpress from "../assets/wordpress.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-full bg-[#0a192f] text-gray-300" >
      <div className="w-full h-full max-w-[1000px] mx-auto p-8 flex flex-col justify-center">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Skills
          </p>
          <p className="py-4">These are the technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="CSS icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={JavaScript} alt="JS icon" />
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="React icon" />
            <p className="my-4">REACT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Tailwind} alt="Tailwind icon" />
            <p className="my-4">TAILWIND</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto pt-6" src={PHP} alt="PHP icon" />
            <p className="my-4">PHP</p>
          </div><div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto pt-5" src={MySql} alt="MySQL icon" />
            <p className="my-4">MYSQL</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-30 h-20 mx-auto" src={Prestashop} alt="PrestaShop icon" />
            <p className="my-4">PRESTASHOP</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 h-20 mx-auto" src={Wordpress} alt="WordPress icon" />
            <p className="my-4">WORDPRESS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
