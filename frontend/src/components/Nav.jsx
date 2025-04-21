import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import TopRightUserArea from './TopRightUserArea';
import { Menu, X } from 'lucide-react'; // Hamburger & close icons

const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path) =>
    location.pathname === path ? 'text-red-400' : 'text-gray-700';


  const handleNavigation = (e, path) => {
    e.preventDefault();
    navigate(path);
    setIsOpen(false); // close menu after navigation
  };



return (
     <nav className="bg-white px-6 py-4 shadow-md">
       <div className="flex items-center justify-between md:justify-around">
         {/* Logo */}
          <a href="/" className="flex items-center">
           <span className="text-black font-bold text-xl">Yum</span>
           <span className="text-red-400 font-bold text-xl">Story</span>
         </a> 


        <div className="hidden md:flex space-x-6 items-center">
          <a onClick={(e) => handleNavigation(e, '/')} className={`font-bold hover:text-red-400 cursor-pointer ${isActive('/')}`}>Home</a>
          <a onClick={(e) => handleNavigation(e, '/recipes')} className={`font-bold hover:text-red-400 cursor-pointer ${isActive('/recipes')}`}>Recipe</a>
          <a onClick={(e) => handleNavigation(e, '/create-recipe')} className={`font-bold hover:text-red-400 cursor-pointer ${isActive('/create-recipe')}`}>Add Recipe</a>
          <a onClick={(e) => handleNavigation(e, '/blog')} className={`font-bold hover:text-red-400 cursor-pointer ${isActive('/blog')}`}>Blog</a>
          <a  onClick={(e) => handleNavigation(e, '/about')} className={`font-bold hover:text-red-400 cursor-pointer ${isActive('/about')}`}>About us</a>
          <TopRightUserArea />
        </div>
        

   
        {/* Hamburger for Mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4">
          <a  onClick={(e) => handleNavigation(e, '/')} className={`block font-bold hover:text-red-400 cursor-pointer ${isActive('/')}`}>Home</a>
          <a onClick={(e) => handleNavigation(e, '/recipes')} className={`block font-bold hover:text-red-400 cursor-pointer ${isActive('/recipes')}`}>Recipe</a>
          <a  onClick={(e) => handleNavigation(e, '/create-recipe')} className={`block font-bold hover:text-red-400 cursor-pointer ${isActive('/create-recipe')}`}>Add Recipe</a>
          <a  onClick={(e) => handleNavigation(e, '/blog')} className={`block font-bold hover:text-red-400 cursor-pointer ${isActive('/blog')}`}>Blog</a>
          <a  onClick={(e) => handleNavigation(e, '/about')} className={`block font-bold hover:text-red-400 cursor-pointer ${isActive('/about')}`}>About us</a>
          <div className="pt-2 border-t border-gray-200">
            <TopRightUserArea />
          </div>
        </div>
      )}
    </nav>
  );
};
export default Nav;