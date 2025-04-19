import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import TopRightUserArea from './TopRightUserArea';

const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation(); // 👈 current path

  const isActive = (path) =>
    location.pathname === path ? 'text-red-400' : 'text-gray-700';
  

  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white">
    <div className="flex items-center">
      <span className="text-black font-bold text-xl">Yum</span>
      <span className="text-red-400 font-bold text-xl">Story</span>
    </div>
    <div className="flex space-x-6">


    <a href="" onClick={(e) => {
    e.preventDefault();
    navigate('/');
  }}
   className={` font-bold hover:text-red-400 ${isActive('/')}`}>Home</a>
<a href="#" className={` font-bold hover:text-red-400 ${isActive('/recipe')}`}>Recipe</a>
<a 
  href=''
  onClick={(e) => {
    e.preventDefault();
    navigate('/create-recipe');
  }}
  className={` font-bold hover:text-red-400 ${isActive('/create-recipe')}`}
>
  Add Recipe
</a>
<a href="#" className={` font-bold hover:text-red-400 ${isActive('/blog')}`}>Blog</a>
<a href="#" className={`font-bold hover:text-red-400 ${isActive('/about-us')}`}>About us</a>

    </div>
    <TopRightUserArea />
  </nav>
  )
}

export default Nav