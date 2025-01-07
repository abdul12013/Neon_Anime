import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <div className="flex items-center justify-between h-20 w-full bg-gray-900  shadow-md ">
        <h2 className="pl-5 font-poppins font-semibold text-3xl text-purple-700 md:pl-9">NeonAnime</h2>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-20 pr-28">
          <Link to={"/"}><h1
           
            className=" text-zinc-500 text-xl font-poppins font-medium border-b-2 border-transparent hover:border-rose-500 transition-all duration-300"
          >
            Home
          </h1></Link>
         <Link to={'/Action'}><h1
            
            className="text-zinc-500 text-xl font-poppins font-medium border-b-2 border-transparent hover:border-rose-500 transition-all duration-300"
          >
            Action
          </h1></Link> 
          <Link to={'/up'}><h1
            
            className="text-zinc-500 text-xl font-poppins font-medium border-b-2 border-transparent hover:border-rose-500 transition-all duration-300"
          >
            Upcomming
          </h1></Link>

        
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white cursor-pointer text-3xl pr-5"
          >
            {isMenuOpen ? 'X' : '☰'}
          </button>
          
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`z-50  absolute top-24 right-1  rounded-2xl h-auto w-36  bg-gradient-to-r from-black to-gray-800  pt-4 md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
       <Link to={'/'}><h1  className="block px-4 py-1 pl-7  text-lg font-poppins font-semibold text-zinc-500  border-b-2 border-transparent hover:text-slate-200 transition-all duration-300">
          Home
        </h1></Link> 
       <Link to={'/Action'}> <h1  className="block  text-lg font-poppins font-semibold px-4 py-1 pl-7 text-zinc-500 border-b-2 border-transparent hover:text-slate-200 transition-all duration-300">
          Action
        </h1></Link>
        <Link to={'/up'}> <h1  className="block text-lg font-poppins font-semibold px-4 py-1 pl-7 text-zinc-500 border-b-2 border-transparent hover:text-slate-200 transition-all duration-300">
        New
        </h1></Link>
      
      </div>
    </>
  );
};

export default Navbar;
