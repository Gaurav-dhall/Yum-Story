import React from 'react'

const Nav = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white">
    <div className="flex items-center">
      <span className="text-black font-bold text-xl">Perfect</span>
      <span className="text-red-400 font-bold text-xl">Recipe</span>
    </div>
    <div className="flex space-x-6">
      <a href="#" className=" text-gray-700 font-bold hover:text-red-400">Home</a>
      <a href="#" className="text-gray-700 font-bold hover:text-red-400">Recipe</a>
      <a href="#" className="text-gray-700 font-bold hover:text-red-400">Add Recipe</a>
      <a href="#" className="text-gray-700 font-bold hover:text-red-400">Blog</a>
      <a href="#" className="text-gray-700 font-bold hover:text-red-400">About us</a>
    </div>
    <div className="flex space-x-4">
      <button className="px-4 py-2 text-gray-700 border border-gray-300 rounded hover:bg-gray-100">Log in</button>
      <button className="px-4 py-2 bg-red-400 text-white rounded hover:bg-red-500">Sign up</button>
    </div>
  </nav>
  )
}

export default Nav