import React from 'react';
  import Nav from '../components/Nav';
  import Footer from '../components/Footer'
  import fs from '../assets/fs.png'
  import { useNavigate } from 'react-router-dom';


const HomePage = () => {
  const navigate = useNavigate();

  
  return (
    
    <div className="min-h-screen bg-white">
      <Nav />

    {/* Hero Section */}
    {/* Hero Section */}
    

<section className="relative px-4 md:px-8 py-12 bg-red-100 bg-opacity-30">
  <div className="flex flex-col md:flex-row justify-center items-center">
    {/* Text content - stacks vertically on mobile */}
    <div className="w-full md:w-1/2 md:pr-8 text-center md:text-left mb-8 md:mb-0">
      <h1 className="text-3xl md:text-5xl font-bold mb-2">
        Your Daily Dish
        <br />
        A <span className="text-red-400">Food</span> Journey
      </h1>
      <p className="text-gray-600 mt-4 mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae enim pharetra, venenatis nunc eget, finibus est. Proin velit
      </p>
      <button onClick={() => navigate('/signup')} className="px-6 py-3 bg-red-400 text-white rounded hover:bg-red-500">Sign up</button>
      <p className="mt-4 text-sm text-gray-600">
        Do you have account? <a href="/login" className="text-red-400">Log in</a>
      </p>
    </div>
    
    {/* Image section - takes full width on mobile */}
    <div className="w-full md:w-1/2 relative">
      <img 
        src={fs}
        className="w-full h-full object-cover rounded-lg"
      />
      
      {/* Testimonial box - adjusted for mobile */}
      <div className="absolute bottom-4 left-4 md:bottom-0 md:left-16 bg-white p-3 md:p-4 rounded-lg shadow-md max-w-xs w-3/4 md:w-auto">
        <div className="flex items-center mb-2">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden mr-2">
            <img 
              src="https://img.freepik.com/premium-photo/attractive-excited-young-girl-standing-isolated-white-pointing-finger-copy-space_171337-103437.jpg?ga=GA1.1.1102787616.1725702790&semt=ais_hybrid&w=740" 
              alt="Sara Johnson" 
              className="w-full h-full object-cover"
            />
          </div>
          <span className="font-medium text-sm md:text-base">Sara Johnson</span>
        </div>
        <div className="flex text-yellow-400 mb-1">
          <svg className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
          <svg className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
          <svg className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
          <svg className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
          <svg className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        </div>
        <p className="text-xs md:text-sm text-gray-600">
          "Love this recipe! It's a flavor explosion in my mouth very delicious."
        </p>
      </div>
    </div>
  </div>
</section>

{/* Share Recipe Section - responsive */}
<section className="px-4 md:px-8 py-16 md:py-24 bg-white">
  <div className="flex flex-col md:flex-row items-center">
    {/* Image takes full width on mobile, appears first */}
    <div className="w-full md:w-1/2 md:pr-8 mb-8 md:mb-0">
      <img 
        src="https://img.freepik.com/free-photo/person-taking-photo-assortment-sandwiches-with-smartphone_23-2149428219.jpg?ga=GA1.1.1102787616.1725702790&semt=ais_hybrid&w=740" 
        alt="Hand holding phone with food app" 
        className="rounded-lg shadow-lg w-full"
      />
    </div>
    {/* Text content underneath on mobile */}
    <div className="w-full md:w-1/2 md:pl-8 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Share Your <span className="text-red-400">Recipes</span>
      </h2>
      <p className="text-gray-600 mb-8 max-w-lg mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae enim pharetra, venenatis nunc eget, finibus est. Proin velit
      </p>
      <button onClick={() => navigate('/create-recipe')} className="px-6 py-3 bg-red-400 text-white rounded hover:bg-red-500">Create New Recipe</button>
    </div>
  </div>
</section>

    {/* TRENDING RECIPES SECTION */}

   {/* TRENDING RECIPES SECTION */}
   <section className="px-8 py-24 bg-gray-50">
  <h2 className="text-4xl font-bold mb-8 text-center">
    Trending <span className="text-red-400">Recipes</span>
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {/* Card 1 */}
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
      <img
        src="https://images.unsplash.com/photo-1608039755401-742074f0548d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80"
        alt="Onion Rings"
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">Onion Rings</h3>
        <div className="flex items-center text-yellow-400 mb-2">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className="text-sm text-gray-600 mb-2">322 calls</p>
        <p className="text-sm text-gray-600">By Alex Martin</p>
      </div>
    </div>

    {/* Card 2 */}
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
      <img
        src="https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80"
        alt="Toast with Tomato, Onion, & Hummus"
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">Toast with Tomato, Onion, & Hummus</h3>
        <div className="flex items-center text-yellow-400 mb-2">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className="text-sm text-gray-600 mb-2">139 calls</p>
        <p className="text-sm text-gray-600">By Alex Martin</p>
      </div>
    </div>

    {/* Card 3 */}
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
      <img
        src="https://images.unsplash.com/photo-1600335895229-6e75511892c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80"
        alt="Ham, Egg, and Spinach Roll-Ups"
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">Ham, Egg, and Spinach Roll-Ups</h3>
        <div className="flex items-center text-yellow-400 mb-2">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className="text-sm text-gray-600 mb-2">174 calls</p>
        <p className="text-sm text-gray-600">By Alex Martin</p>
      </div>
    </div>

    {/* Card 4 */}
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
      <img
        src="https://images.unsplash.com/photo-1551782450-17144efb9c50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80"
        alt="Chicken Ranch Wrap"
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">Chicken Ranch Wrap</h3>
        <div className="flex items-center text-yellow-400 mb-2">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className="text-sm text-gray-600 mb-2">188 calls</p>
        <p className="text-sm text-gray-600">By Alex Martin</p>
      </div>
    </div>

    {/* Card 5 */}
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
      <img
        src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80"
        alt="Tuna Mex Tuna Salad"
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">Tuna Mex Tuna Salad</h3>
        <div className="flex items-center text-yellow-400 mb-2">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className="text-sm text-gray-600 mb-2">296 calls</p>
        <p className="text-sm text-gray-600">By Alex Martin</p>
      </div>
    </div>

    {/* Card 6 */}
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
      <img
        src="https://images.unsplash.com/photo-1528207776546-365bb710ee93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80"
        alt="Strawberry and Cherry Pancake"
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">Strawberry and Cherry Pancake</h3>
        <div className="flex items-center text-yellow-400 mb-2">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className="text-sm text-gray-600 mb-2">251 calls</p>
        <p className="text-sm text-gray-600">By Alex Martin</p>
      </div>
    </div>
  </div>
</section>
<Footer />

    
  </div>



);
}
export default HomePage;
