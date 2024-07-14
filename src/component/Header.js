
import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-black text-white flex items-baseline px-4 py-2 justify-between">
      <h1 className="text-2xl">Tail Web</h1>
      <nav className="space-x-5 ">
        <NavLink to='/about-page' className={(e)=>{
          return e.isActive ? 'same p-2 text-ok' : 'same p-2'}} >  About </NavLink>
        <NavLink to={'/contact-page'} className={(a)=>{
          return a.isActive ? "same p-2 text-green-600" : 'same p-2'}} >Contact </NavLink>
          
       
      </nav>
    </header>
  );
};

export default Header;