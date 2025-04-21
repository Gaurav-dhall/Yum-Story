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
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-black font-bold text-xl">Yum</span>
          <span className="text-red-400 font-bold text-xl">Story</span>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-6 items-center">
          <a href="/" onClick={(e) => handleNavigation(e, '/')} className={`font-bold hover:text-red-400 ${isActive('/')}`}>Home</a>
          <a href="/recipe" onClick={(e) => handleNavigation(e, '/recipe')} className={`font-bold hover:text-red-400 ${isActive('/recipe')}`}>Recipe</a>
          <a href="/create-recipe" onClick={(e) => handleNavigation(e, '/create-recipe')} className={`font-bold hover:text-red-400 ${isActive('/create-recipe')}`}>Add Recipe</a>
          <a href="/blog" onClick={(e) => handleNavigation(e, '/blog')} className={`font-bold hover:text-red-400 ${isActive('/blog')}`}>Blog</a>
          <a href="/about-us" onClick={(e) => handleNavigation(e, '/about-us')} className={`font-bold hover:text-red-400 ${isActive('/about-us')}`}>About us</a>
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
          <a href="/" onClick={(e) => handleNavigation(e, '/')} className={`block font-bold hover:text-red-400 ${isActive('/')}`}>Home</a>
          <a href="/recipe" onClick={(e) => handleNavigation(e, '/recipe')} className={`block font-bold hover:text-red-400 ${isActive('/recipe')}`}>Recipe</a>
          <a href="/create-recipe" onClick={(e) => handleNavigation(e, '/create-recipe')} className={`block font-bold hover:text-red-400 ${isActive('/create-recipe')}`}>Add Recipe</a>
          <a href="/blog" onClick={(e) => handleNavigation(e, '/blog')} className={`block font-bold hover:text-red-400 ${isActive('/blog')}`}>Blog</a>
          <a href="/about-us" onClick={(e) => handleNavigation(e, '/about-us')} className={`block font-bold hover:text-red-400 ${isActive('/about-us')}`}>About us</a>
          <div className="pt-2 border-t border-gray-200">
            <TopRightUserArea />
          </div>
        </div>
      )}
    </nav>
  );
};
export default Nav;