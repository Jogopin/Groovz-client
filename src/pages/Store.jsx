import React from "react";
import { Link, Outlet, Route, Routes, useLocation } from "react-router-dom"



const Store = () => {
  const location = useLocation();

    const linkIsActive = (route)=>{
        return location.pathname === route ? 'active-white' : '';
      }
      
  return (
    <div>
      <nav className="h-16 w-full bg-zinc-700">
        <ul className="flex  h-full  items-center justify-evenly font-bold text-zinc-300">
          <li>
            <Link to={"headphones"} className={`${linkIsActive("/store/headphones")} pb-1`} >Headphones</Link>
          </li>
          <li>
            <Link to={"speakers"} className={`${linkIsActive("/store/speakers")}  pb-1`}>Speakers</Link>
          </li>
        </ul>
      </nav>
      {/* {location.pathname === "/store" && <div className="flex justify-center items-center"> Still under construction </div>} */}
      <Outlet/>
      
      
    </div>
  );};

export default Store;
