import React from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import { FooterBanner, HeroBanner } from "../components";


const Store = () => {

    const linkIsActive = (route)=>{
        const location = useLocation();
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
      <Routes>
        <Route path="/headphones" element={<div>headphones</div>} />
        <Route path="/speakers" element={<div>speakers</div>} />
      </Routes>
    </div>
  );};

export default Store;
