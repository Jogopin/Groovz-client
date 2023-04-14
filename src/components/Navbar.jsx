import React, { useState } from "react";

import { Link } from "react-router-dom";
import { cartIcon, logo, menu, searchIcon } from "../assets/icons";
import MenuModal from "./MenuModal";

const Navbar = () => {
  const [ isMenuModalOn, setIsMenuModalOn ] = useState(false)

  const toggleMenuModal= (e)=>{
    e.preventDefault()
    
    setIsMenuModalOn(prevState=>!prevState)
  }
  return (
    <nav className="flex h-16 w-screen items-center justify-between bg-black px-5 py-6 font-semibold text-white">
      {/* Left Side */}
      <Link to={"/"} className="mx-4 h-10 w-10 flex-1 ">
        <img src={logo} className="h-full invert hover:invert-[70%]" />
      </Link>

      {/* Center  */}
      <ul className="mx-4 hidden flex-1 items-center justify-center gap-8 lg:flex">
        <li>
          <Link className="hover:text-gray-300" to={"/shop"}>
            Store
          </Link>
        </li>
        <li>
          <Link className="hover:text-gray-300" to={"/#"}>
            About Us
          </Link>
        </li>
      </ul>
      {/* Right Side */}
      <ul className="flex flex-1 items-center justify-end gap-5 lg:gap-4">
        <li>
          <button className="h-5 w-5  ">
            <img src={searchIcon} className="invert hover:invert-[70%]" />
          </button>
        </li>
        <li>
          <button className="h-6 w-6">
            <img src={cartIcon} className="h-full invert hover:invert-[70%]" />
          </button>
        </li>
        <li className="z-50 lg:hidden">
          <button onClick={toggleMenuModal} className="h-6 w-6">
            <img src={menu} className="h-full invert hover:invert-[70%] " />
          </button>
        </li>
        <li className="hidden lg:inline-block">
          <Link className=" hover:text-gray-300 " to={"/login"}>
            Login
          </Link>
        </li>
        <li className="hidden lg:inline-block">
          <Link className=" hover:text-gray-300" to={"/signup"}>
            Sign Up
          </Link>
        </li>
      </ul>

      <MenuModal isMenuModalOn={isMenuModalOn} />
    </nav>
  );
};

export default Navbar;
