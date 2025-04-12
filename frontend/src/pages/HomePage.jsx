import React from 'react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-white">
        <div className="flex items-center">
          <span className="text-black font-bold text-xl">Perfect</span>
          <span className="text-red-400 font-bold text-xl">Recipe</span>
        </div>
        <div className="flex space-x-6">
          <a href="#" className="text-gray-700 hover:text-red-400">Home</a>
          <a href="#" className="text-gray-700 hover:text-red-400">Recipe</a>
          <a href="#" className="text-gray-700 hover:text-red-400">Add Recipe</a>
          <a href="#" className="text-gray-700 hover:text-red-400">blog</a>
          <a href="#" className="text-gray-700 hover:text-red-400">About us</a>
        </div>
        <div className="flex space-x-4">
          <button className="px-4 py-2 text-gray-700 border border-gray-300 rounded hover:bg-gray-100">Log in</button>
          <button className="px-4 py-2 bg-red-400 text-white rounded hover:bg-red-500">Sign up</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-8 py-12 bg-red-100 bg-opacity-30">
        <div className="flex">
          <div className="w-1/2 pr-8">
            <h1 className="text-5xl font-bold mb-2">
              Your Daily Dish
              <br />
              A <span className="text-red-400">Food</span> Journey
            </h1>
            <p className="text-gray-600 mt-4 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae enim pharetra, venenatis nunc eget, finibus est. Proin velit
            </p>
            <button className="px-6 py-3 bg-red-400 text-white rounded hover:bg-red-500">Sign up</button>
            <p className="mt-4 text-sm text-gray-600">
              Do you have account? <a href="#" className="text-red-400">Log in</a>
            </p>
          </div>
          <div className="w-1/2 relative">
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img 
                src="/api/placeholder/400/400" 
                alt="Food dish with vegetables" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-16 bg-white p-4 rounded-lg shadow-md max-w-xs">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 rounded-full flex justify-center items-center overflow-hidden mr-2">
                  <img 
                    src="/api/placeholder/50/50" 
                    alt="Sara Johnson" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="font-medium">Sara Johnson</span>
              </div>
              <div className="flex text-yellow-400 mb-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              </div>
              <p className="text-sm text-gray-600">
                "Love this recipe! It's a flavor explosion in my mouth very delicious."
              </p>
            </div>
          </div>
        </div>
        {/* Decorative elements */}
       
        
      </section>

      {/* Share Recipe Section */}
      <section className="px-8 py-24 bg-white">
        <div className="flex items-center">
          <div className="w-1/2 pr-8">
            <img 
              src="/api/placeholder/500/400" 
              alt="Hand holding phone with food app" 
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="w-1/2 pl-8 text-center">
            <h2 className="text-4xl font-bold mb-4">
              Share Your <span className="text-red-400">Recipes</span>
            </h2>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae enim pharetra, venenatis nunc eget, finibus est. Proin velit
            </p>
            <button className="px-6 py-3 bg-red-400 text-white rounded hover:bg-red-500">Create New Recipe</button>
          </div>
        </div>
      </section>
    </div>
  );
}