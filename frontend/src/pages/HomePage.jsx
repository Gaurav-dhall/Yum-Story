import React from 'react';
  import Nav from '../components/Nav';
  import fs from '../assets/fs.png'

  
  

const HomePage = () => {

  
  return (
    
    <div className="min-h-screen bg-white">
      <Nav />

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
          {/* <div className="flex justify-center items-center absolute top-0 right-0 w-65 h-65 rounded-full overflow-hidden border-4 border-white shadow-lg"> */}
            <img 
              src={fs}
              className="w-full h-full object-cover"
            />
          {/* </div> */}
          <div className="absolute bottom-0 left-16 bg-white p-4 rounded-lg shadow-md max-w-xs">
            <div className="flex items-center mb-2">
              <div className="w-10 h-10 rounded-full overflow-hidden mr-2">
                <img 
                  src="https://img.freepik.com/premium-photo/attractive-excited-young-girl-standing-isolated-white-pointing-finger-copy-space_171337-103437.jpg?ga=GA1.1.1102787616.1725702790&semt=ais_hybrid&w=740" 
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
            src="https://img.freepik.com/free-photo/person-taking-photo-assortment-sandwiches-with-smartphone_23-2149428219.jpg?ga=GA1.1.1102787616.1725702790&semt=ais_hybrid&w=740" 
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
        src="/api/placeholder/400/300"
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
        src="/api/placeholder/400/300"
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
        src="/api/placeholder/400/300"
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
        src="/api/placeholder/400/300"
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
        src="/api/placeholder/400/300"
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
        src="/api/placeholder/400/300"
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


<footer className="border-t pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Logo and Description */}
          <div className="mb-6 md:mb-0 md:w-1/4">
            <div className="flex items-center mb-3">
              <span className="font-bold text-xl">
                <span className="text-black">Perfect</span>
                <span className="text-red-500">Recipe</span>
              </span>
            </div>
            <p className="text-gray-600 text-sm">
              The purpose of lorem ipsum is to create a natural looking block of text (sentence, 
              paragraph, page, etc.) that doesn't distract from the layout.
            </p>
          </div>

          {/* Quick Links - First Column */}
          <div className="mb-6 md:mb-0">
            <h3 className="font-medium mb-4">Quick links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-600 hover:text-red-500">Home</a></li>
              <li><a href="/recipes" className="text-gray-600 hover:text-red-500">Recipes</a></li>
              <li><a href="/blog" className="text-gray-600 hover:text-red-500">Blog</a></li>
            </ul>
          </div>

          {/* Quick Links - Second Column */}
          <div className="mb-6 md:mb-0">
            <h3 className="font-medium mb-4">Quick links</h3>
            <ul className="space-y-2">
              <li><a href="/share-recipe" className="text-gray-600 hover:text-red-500">Share Recipe</a></li>
              <li><a href="/about-us" className="text-gray-600 hover:text-red-500">About Us</a></li>
              <li><a href="/contact" className="text-gray-600 hover:text-red-500">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="mb-6 md:mb-0">
            <h3 className="font-medium mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="/terms" className="text-gray-600 hover:text-red-500">Terms Of Use</a></li>
              <li><a href="/privacy" className="text-gray-600 hover:text-red-500">Privacy & Cookies</a></li>
            </ul>
          </div>

       
        
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 pt-6 border-t">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-600">© 2023 RecipeLogo. All Right Reserved</p>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <span className="sr-only">TikTok</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <span className="sr-only">Twitter</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <span className="sr-only">Facebook</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <span className="sr-only">Instagram</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <span className="sr-only">Pinterest</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>

    
  </div>
















);
}
export default HomePage;