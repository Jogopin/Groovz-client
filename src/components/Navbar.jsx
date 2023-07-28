import React, { useState } from "react";

import { Link, NavLink, useLocation } from "react-router-dom";
import { logoIcon, menuIcon, searchIcon, xIcon } from "../assets/icons";
import MenuModal from "./MenuModal";
import SearchBar from "./SearchBar";

import Cart from "./Cart";
import { useAuth } from "../hooks/useAuth";


const Navbar = () => {
  const [isMenuModalOn, setIsMenuModalOn] = useState(false);
  const [isSearchBarOn, setIsSearchBarOn] = useState(false);
  

  const { isLoggedIn, authUser, logOutUser } = useAuth();

  
  const toggleMenuModal = (e) => {
    setIsMenuModalOn((prevState) => !prevState);
  };

  const toggleSearchBar = (e) => {
    e.preventDefault();
    setIsSearchBarOn((prevState) => !prevState);
  };

  return (
    
    <nav className="flex h-16 w-full items-center justify-between bg-zinc-800 px-5 py-6 font-semibold text-white">
      {/* Left Side */}

      <Link to={"/"} className="mx-2 h-10 w-10 flex-1">
        <img src={logoIcon} className={`h-full invert hover:invert-[70%] `} />
      </Link>

      {/* Center  */}
      <ul className="mx-4 hidden flex-1 items-center justify-center gap-8 lg:flex">
        <li>
          <NavLink className="px-2 pb-1 hover:text-gray-300" to={"/store"}>
            Store
          </NavLink>
        </li>
        <li>
          <NavLink className="px-2 pb-1 hover:text-gray-300" to={"/about-us"}>
            About Us
          </NavLink>
        </li>
      </ul>

      {/* Right Side */}
      {isSearchBarOn ? (
        <ul className="flex flex-1 items-center justify-end gap-5 lg:gap-4">
          <li>
            <SearchBar
              isSearchBarOn={isSearchBarOn}
              toggleSearchBar={toggleSearchBar}
            />
          </li>
          <li className="flex h-7 w-7">
            <button onClick={toggleSearchBar} className="h-6 w-6">
              <img src={xIcon} className="invert hover:invert-[70%]" />
            </button>
          </li>
        </ul>
      ) : (
        <ul className="flex flex-1 items-center justify-end gap-5 lg:gap-4">
          <li className="flex h-7 w-7">
            <button onClick={toggleSearchBar} className="m-auto h-7 w-6">
              <img
                src={searchIcon}
                className="object-contain invert hover:invert-[70%]"
              />
            </button>
          </li>
          <li>
            <Cart />
          </li>
          <li className="z-40 flex h-7 w-7 lg:hidden">
            <button onClick={toggleMenuModal} className="m-auto h-6 w-6">
              <img
                src={isMenuModalOn ? xIcon : menuIcon}
                className="h-full invert hover:invert-[70%] "
              />
            </button>
          </li>
          
          {isLoggedIn ? (
            <>
              <li className="hidden lg:inline-block">
                <NavLink
                  className=" px-1 pb-1 hover:text-gray-300"
                  to={"/profile"}
                >
                  {authUser.username}
                </NavLink>
              </li>
              <li className="hidden lg:inline-block">
                <button
                  className=" px-1 pb-1 hover:text-gray-300"
                  onClick={logOutUser}
                >
                  Log Out
                </button>
              </li>
            </>
          ) : (
            <>
              <li className="hidden lg:inline-block">
                <NavLink
                  className=" px-1 pb-1 hover:text-gray-300"
                  to={"/login"}
                >
                  Login
                </NavLink>
              </li>
              <li className="hidden lg:inline-block">
                <NavLink
                  className=" px-1 pb-1 hover:text-gray-300"
                  to={"/signup"}
                >
                  Sign Up
                </NavLink>
              </li>
            </>
          )}
        </ul>
      )}

      <MenuModal
        isMenuModalOn={isMenuModalOn}
        toggleMenuModal={toggleMenuModal}
      />
    </nav>
  
     
  );
};

export default Navbar;
