import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

const MenuModal = ({ isMenuModalOn, toggleMenuModal }) => {

    const {isLoggedIn,authUser,logOutUser} = useAuth()
    if(!isMenuModalOn) return(<></>)
    


  return (
    <>
    <div className="fixed inset-0 bg-zinc-800/50 z-20" onClick={toggleMenuModal}></div>

    <nav className="fixed right-0 top-0 z-30 flex h-[500px] w-[330px] flex-col justify-between rounded-md bg-zinc-800 pb-10 pt-16 text-white lg:hidden">
      {/* Hidden NavLinks */}
      <ul className="flex w-full flex-col items-center gap-12">
        <li className="w-[60%] pb-6 text-center">
          <NavLink
            className="px-1 pb-1"
            to={"/store"}
            onClick={toggleMenuModal}
          >
            Store
          </NavLink>
        </li>
        <li className="w-[60%] pb-6 text-center">
          <NavLink
            className="px-1 pb-1"
            to={"/about-us"}
            onClick={toggleMenuModal}
          >
            About Us
          </NavLink>
        </li>
      </ul>
      {/* Login Signup  profile Logout */}
      {isLoggedIn ? (
        <ul className="mx-auto flex w-[70%] items-center gap-12 border-t-2 pt-7 ">
          <li className="w-[60%]  text-center">
            <NavLink
              to={"/profile"}
              className="px-1 pb-1"
              onClick={toggleMenuModal}
            >
              {authUser.username}
            </NavLink>
          </li>
          <li className="w-[60%] text-center">
            <button
              
              className="px-1 pb-1"
              onClick={()=>{
                logOutUser() 
                toggleMenuModal()
              }}
            >
              Log Out
            </button>
          </li>
        </ul>
      ) : (
        <ul className="mx-auto flex w-[70%] items-center gap-12 border-t-2 pt-7 ">
          <li className="w-[60%]  text-center">
            <NavLink
              to={"/login"}
              className="px-1 pb-1"
              onClick={toggleMenuModal}
            >
              Login
            </NavLink>
          </li>
          <li className="w-[60%] text-center">
            <NavLink
              to={"/signup"}
              className="px-1 pb-1"
              onClick={toggleMenuModal}
            >
              Sign Up
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
    </>
  );
}

export default MenuModal