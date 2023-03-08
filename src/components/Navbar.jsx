import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

import { Link } from "react-scroll";

import Logo from "../assets/logo.png";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center p-10  bg-[#08192f] text-gray-300">
      <div>
        <img src={Logo} alt="Logo Img" style={{ width: "70px" }} />
      </div>

      {/* MENU */}
      <ul className="hidden md:flex">
        <li className="text-xl"><Link to="home" smooth={true} duration={500}>Home</Link></li>
        <li className="text-xl"><Link to="about" smooth={true} duration={500}>About</Link></li>
        <li className="text-xl"><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
        <li className="text-xl"><Link to="work" smooth={true} duration={500}>Work</Link></li>
        <li className="text-xl"><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
      </ul>

      {/* HAMBURGER */}
      <div className="md:hidden z-10" onClick={handleClick}>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* MOBILE MENU */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#08192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl "><Link onClick={handleClick} to="home" smooth={true} duration={500}>Home</Link></li>
        <li className="py-6 text-4xl "><Link onClick={handleClick} to="about" smooth={true} duration={500}>About</Link></li>
        <li className="py-6 text-4xl "><Link onClick={handleClick} to="skills" smooth={true} duration={500}>Skills</Link></li>
        <li className="py-6 text-4xl "><Link onClick={handleClick} to="work" smooth={true} duration={500}>Work</Link></li>
        <li className="py-6 text-4xl "><Link onClick={handleClick} to="contact" smooth={true} duration={500}>Contact</Link></li>
      </ul>

      {/* SOCIALS */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/kajus-karenauskas-482010250/"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/kayanas"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-[#6fc2b0]">
            <Link
              className="flex justify-between items-center w-full text-gray-300"
              to="contact" smooth={true} duration={500}
            >
              Email <HiOutlineMail size={30} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
