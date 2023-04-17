import React from 'react'
import { Link } from 'react-router-dom'

const MenuModal = ({ isMenuModalOn }) => {

    if(!isMenuModalOn) return(<></>)
    


  return (
    <nav className="fixed lg:hidden flex flex-col justify-between right-0 top-0 z-40 h-[500px] w-[330px] rounded-md bg-black pt-16 pb-10 text-white">
    {/* Hidden NavLinks */}
    <ul className="flex w-full flex-col items-center gap-12">
      <li className="w-[60%] pb-6 text-center">
        <Link className="hover:text-gray-300" to={"/shop"}>
          Store
        </Link>
      </li>
      <li className="w-[60%] pb-6 text-center">
        <Link className="hover:text-gray-300" to={"/#"}>
          About Us
        </Link>
      </li>
    </ul>
      {/* Login Signup  profile Logout */}
    <ul className="flex w-[70%] mx-auto items-center gap-12 border-t-2 pt-7 ">
      <li className="w-[60%]  text-center">
        <Link to={"/login"}>Login</Link>
      </li>
      <li className="w-[60%] text-center">
        <Link to={"/signup"}>Sign Up</Link>
      </li>
    </ul>
  </nav>
  )
}

export default MenuModal