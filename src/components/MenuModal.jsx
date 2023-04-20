import React from 'react'
import { NavLink } from 'react-router-dom'

const MenuModal = ({ isMenuModalOn, toggleMenuModal }) => {

    if(!isMenuModalOn) return(<></>)
    


  return (
    <nav className="fixed lg:hidden flex flex-col justify-between right-0 top-0 z-40 h-[500px] w-[330px] rounded-md bg-black pt-16 pb-10 text-white">
    {/* Hidden NavLinks */}
    <ul className="flex w-full flex-col items-center gap-12">
      <li className="w-[60%] pb-6 text-center">
        <NavLink className="px-1 pb-1" to={"/store"} onClick={toggleMenuModal}>
          Store
        </NavLink>
      </li>
      <li className="w-[60%] pb-6 text-center">
        <NavLink className="px-1 pb-1" to={"/about-us"} onClick={toggleMenuModal}>
          About Us
        </NavLink>
      </li>
    </ul>
      {/* Login Signup  profile Logout */}
    <ul className="flex w-[70%] mx-auto items-center gap-12 border-t-2 pt-7 ">
      <li className="w-[60%]  text-center">
        <NavLink to={"/login"} className="px-1 pb-1" onClick={toggleMenuModal}>Login</NavLink>
      </li>
      <li className="w-[60%] text-center">
        <NavLink to={"/signup"} className="px-1 pb-1"  onClick={toggleMenuModal}>Sign Up</NavLink>
      </li>
    </ul>
  </nav>
  )
}

export default MenuModal