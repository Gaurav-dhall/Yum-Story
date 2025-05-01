import React, { useEffect, useState } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // 👈 Import useNavigate

const Feed = () => {
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate(); // 👈 useNavigate hook for navigation

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_BASE_URL}/recipes/`)
      .then(response => {
        setRecipes(response.data); // Adjust if your data structure differs
      })
      .catch(error => {
        console.error('Error fetching recipes:', error);
      });
  }, []);

  return (
    <div>
      <Nav />
      <section className="px-8 py-24  bg-gray-50">
        <h2 className="text-4xl font-bold mb-8 text-center">
          Trending <span className="text-red-400">Recipes</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe) => (
            <div key={recipe._id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition ">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">{recipe.title}</h3>
                <p className="text-gray-600">{recipe.cuisine}</p>
                <div className="flex items-center text-yellow-400 mb-2">
                  {[...Array(recipe.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-gray-600 mb-2">{recipe.rating} stars</p>
                <div className="flex justify-between items-center text-sm text-gray-600">
                <p>By {recipe.createdBy.name}</p> 

                  <button onClick={()=> navigate(`/recipes/${recipe._id}`)} className="px-4 cursor-pointer py-2 bg-red-400 text-white rounded hover:bg-red-500">
                View
              </button>
                </div>
              </div>
             
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Feed;
