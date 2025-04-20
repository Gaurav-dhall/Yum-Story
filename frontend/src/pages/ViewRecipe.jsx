import React from 'react';
  import Nav from '../components/Nav';
  import Footer from '../components/Footer'
  import  { useState } from 'react';
import { Star, Bookmark, Share2, Clock, MessageSquare, Heart, ChevronDown } from 'lucide-react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';

export default function RecipePage() {
  const [saved, setSaved] = useState(false);
  const [liked, setLiked] = useState(false);
  const [rating, setRating] = useState(0);
  const [recipe, setRecipe] = useState(null);
  const [nutrients, setNutrients] = useState([]);
  const apiKey = import.meta.env.VITE_USDA_API_KEY;

  // Helper function to find nutrient value
const findNutrientValue = (nutrients, nutrientName) => {
  const nutrient = nutrients.find(n => n.nutrientName === nutrientName);
  return nutrient ? Math.round(nutrient.value) : 0;
};


  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3000/recipes/${id}`)
      .then((res) => setRecipe(res.data))
      .catch((err) => console.error(err));
  }, [id]);
  
  const fetchNutrients = async (dishTitle) => {
    try {
      const response = await fetch(
        `https://api.nal.usda.gov/fdc/v1/foods/search?query=${encodeURIComponent(dishTitle)}&api_key=${apiKey}`
      );
  
      const data = await response.json();
  
      if (data.foods && data.foods.length > 0) {
        const topResult = data.foods[0]; // Top matching dish
        setNutrients(topResult.foodNutrients);
        console.log("Nutrients:", topResult.foodNutrients);
      } else {
        setNutrients([]); // clear if no data
        console.log("No results found for this dish.");
      }
    } catch (error) {
      console.error("Error fetching nutrient data:", error);
    }
  };
  
  useEffect(() => {
    if (recipe && recipe.title) {
      fetchNutrients(recipe.title);
    }
  }, [recipe]);
  

  if (!recipe) return <p>Loading...</p>;
  return ( <>
     <Nav />
    <div className="font-sans max-w-6xl mx-auto bg-white">
      {/* Navigation */}
    

      {/* Breadcrumbs */}
      <div className="text-sm px-8 py-4 text-gray-500">
        <a href="/" className="text-gray-700 hover:text-red-400">Home</a> &gt; <a href="/recipes" className="text-gray-700 hover:text-red-400">Recipes</a>  &gt; <span className="text-gray-700">{recipe.title}</span>
      </div>

      {/* Recipe Header */}
        <div className="px-8">
          <h1 className="text-3xl font-bold mb-2">{recipe.title}</h1>
          
          <div className="flex items-center space-x-4 mb-2">
            <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-xs">AV</div>
          <span className="ml-2 text-sm">{recipe.createdBy.name}</span>
            </div>
            <div className="text-sm text-gray-500">
          {new Date(recipe.createdAt).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}
            </div>
            <div className="flex items-center text-sm">
          <MessageSquare size={16} className="mr-1" />
          <span>{recipe.reviews.length} comments</span>
            </div>
            <div className="flex items-center">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star 
            key={star}
            size={16} 
            className={star <= recipe.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} 
              />
            ))}
          </div>
          <span className="ml-1 text-sm text-gray-500">({recipe.reviews.length} reviews)</span>
            </div>
          </div>

          <div className="flex justify-between items-center mb-4">
            <div></div>
            <div className="flex space-x-2">
          <button className="p-2">
            <Bookmark size={20} className={saved ? "text-red-500 fill-red-500" : "text-gray-400"} onClick={() => setSaved(!saved)} />
          </button>
          <button className="p-2">
            <Share2 size={20} className="text-gray-400" />
          </button>
            </div>
          </div>
        </div>

        {/* Recipe Content */}
      <div className="px-8 flex flex-col lg:flex-row gap-8">
        {/* Left Column - Main Recipe */}
        <div className="lg:w-2/3">
          {/* Recipe Image */}
          <div className="mb-6">
            <img 
              src={`http://localhost:3000${recipe.image}`}
              alt="Mixed Greens with Sun-Dried Tomato Dressing" 
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Recipe Info */}
          <div className="flex justify-between mb-6">
            <div className="text-center px-4">
              <p className="text-gray-500 text-sm">Prep time:</p>
              <p className="font-medium">{recipe.prepTime} mins</p>
            </div>
            <div className="text-center px-4">
              <p className="text-gray-500 text-sm">Cook time:</p>
              <p className="font-medium">{recipe.cookTime} mins</p>
            </div>
            <div className="text-center px-4">
              <p className="text-gray-500 text-sm">Serving</p>
              <p className="font-medium">{recipe.servings} Serving</p>
            </div>
            <div>
              <button className="bg-red-100 text-red-500 px-4 py-2 rounded-md flex items-center">
                Print Recipe
              </button>
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <p className="text-gray-700">
              {recipe.description}
            </p>
          </div>

          {/* Ingredients */}
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-4">Ingredients:</h2>
            <div className="space-y-2">
              {recipe.ingredients.map((ingredient, index) => (
                <div key={index} className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2" />
                  <span>{ingredient}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Instructions */}
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-4">Instructions:</h2>
            <ol className="space-y-4">
              {recipe.instructions.map((instruction, index) => (
                <li key={index} className="flex">
                  <div className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">
                    {index + 1}
                  </div>
                  <p>{instruction}</p>
                </li>
              ))}
            </ol>
          </div>

          {/* Reviews */}
          <div className="lg:hidden mb-6 border rounded-lg p-4">
            <div className="flex items-center mb-4">
              <img 
                src={`http://localhost:3000${recipe.image}`}
                alt="Recipe thumbnail" 
                className="w-20 h-20 rounded-md mr-4"
              />
              <div>
                <h3 className="font-bold">{recipe.title}</h3>
                <div className="flex items-center text-sm text-gray-500">
                  <span>{recipe.createdBy.name}</span>
                  <span className="mx-2">•</span>
                  <span> {new Date(recipe.createdAt).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                </div>
                <div className="flex mt-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star 
                      key={star}
                      size={12} 
                      className={star <= recipe.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} 
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="flex space-x-2">
              <button className="bg-red-500 text-white px-3 py-1 rounded text-sm flex items-center">
                Print Recipe
              </button>
              <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded text-sm flex items-center">
                Add to Favorite
              </button>
              <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded text-sm flex items-center">
                Share Recipe
              </button>
            </div>
          </div>

          {/* Comments */}
          <div className="mb-6">
            <div className="border-t pt-6">
              <div className="flex mb-6">
                <div className="w-10 h-10 rounded-full bg-gray-300 mr-3 flex-shrink-0"></div>
                <div>
                  <div className="flex items-center">
                    <h4 className="font-bold">David Wilson</h4>
                    <span className="text-sm text-gray-500 ml-2">10h ago</span>
                  </div>
                  <p className="text-gray-700 mt-2">
                    The combination of fresh greens and the zesty sun-dried tomato dressing is a 
                    real game-changer! It's become a staple in my weekly menu, so easy to 
                    make and so incredibly delicious!
                  </p>
                  <div className="flex items-center mt-2">
                    <button className="text-gray-500 text-sm flex items-center mr-4">
                      <span className="mr-1">Reply</span>
                    </button>
                    <button className="text-gray-500 text-sm flex items-center" onClick={() => setLiked(!liked)}>
                      <Heart size={14} className={liked ? "text-red-500 fill-red-500 mr-1" : "mr-1"} />
                      <span>48</span>
                    </button>
                  </div>
                </div>
              </div>
              <button className="text-center w-full border border-gray-300 py-2 rounded-md text-gray-600">
                Load more comments
              </button>
            </div>
          </div>

          {/* Rate Recipe */}
          <div className="mb-6">
            <h3 className="font-bold mb-2">Rate this recipe and share your opinion</h3>
            <div className="flex mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star 
                  key={star}
                  size={24} 
                  className={star <= rating ? "text-yellow-400 fill-yellow-400 cursor-pointer" : "text-gray-300 cursor-pointer"} 
                  onClick={() => setRating(star)}
                />
              ))}
            </div>
            <textarea 
              className="w-full border rounded-md p-2 mb-2" 
              rows="3" 
              placeholder="Type here..."
            ></textarea>
            <div className="flex justify-end">
              <button className="bg-red-500 text-white px-6 py-2 rounded-md">
                Post
              </button>
            </div>
          </div>

          {/* You might like this */}
          <div className="mb-8">
  <h3 className="font-bold text-xl mb-4">You might like this</h3>
  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
    {[1, 2, 3, 4, 5, 6].map((item) => (
      <div key={item} className="relative">
        <img 
          src={item === 1 ? "https://images.unsplash.com/photo-1619096252214-ef06c45683e3?q=80&w=200&h=150&fit=crop" : 
               item === 2 ? "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=200&h=150&fit=crop" :
               item === 3 ? "https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=200&h=150&fit=crop" :
               item === 4 ? "https://images.unsplash.com/photo-1600803907087-f56d462fd26b?q=80&w=200&h=150&fit=crop" :
               item === 5 ? "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=200&h=150&fit=crop" :
               "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=200&h=150&fit=crop"}
          alt="Related recipe" 
          className="w-full h-32 object-cover rounded-md"
        />
        <button className="absolute top-2 right-2 bg-white p-1 rounded-full">
          <Bookmark size={16} className="text-gray-600" />
        </button>
        <div className="mt-1">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star 
                key={star}
                size={12} 
                className={star <= 4 ? "text-yellow-400 fill-yellow-400" : "text-gray-200"} 
              />
            ))}
          </div>
          <p className="font-medium text-sm line-clamp-2">
            {item === 1 ? "Toast with Tomato, Olive & Hummus" : 
             item === 2 ? "Spinach and Cheese pasta" :
             item === 3 ? "Strawberry and Cherry pancake" :
             item === 4 ? "Creamy Cajun Chicken Pasta" :
             item === 5 ? "Chocolate Chip Cookies" : "Homemade Pizza Dough"}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>
        </div>

        {/* Right Column - Sidebar */}
        <div className="lg:w-1/3">
         {/* Nutrition Facts */}
<div className="bg-gray-50 p-4 rounded-lg mb-6">
  <h3 className="font-bold mb-2">Nutrition Facts</h3>
  
  <div>
    <div className="flex justify-between py-1 border-b">
      <span className="text-gray-600">Calories</span>
      <span>{findNutrientValue(nutrients, 'Energy') || "-"}</span>
    </div>
    
    <div className="flex justify-between py-1 border-b">
      <span className="text-gray-600">Carbs</span>
      <span>{findNutrientValue(nutrients, 'Carbohydrate, by difference') || "-"}g</span>
    </div>
    
    <div className="flex justify-between py-1 border-b">
      <span className="text-gray-600">Fat</span>
      <span>{findNutrientValue(nutrients, 'Total lipid (fat)') || "-"}g</span>
    </div>
    
    <div className="flex justify-between py-1 border-b">
      <span className="text-gray-600">Protein</span>
      <span>{findNutrientValue(nutrients, 'Protein') || "-"}g</span>
    </div>
    
    <div className="flex justify-between py-1 border-b">
      <span className="text-gray-600">Fiber</span>
      <span>{findNutrientValue(nutrients, 'Fiber, total dietary') || "-"}g</span>
    </div>
    
    <div className="flex justify-between py-1 border-b">
      <span className="text-gray-600">Net carbs</span>
      <span>{Math.max(0, findNutrientValue(nutrients, 'Carbohydrate, by difference') - findNutrientValue(nutrients, 'Fiber, total dietary')) || "-"}g</span>
    </div>
    
    <div className="flex justify-between py-1 border-b">
      <span className="text-gray-600">Sodium</span>
      <span>{findNutrientValue(nutrients, 'Sodium, Na') || "-"}mg</span>
    </div>
    
    <div className="flex justify-between py-1 border-b">
      <span className="text-gray-600">Cholesterol</span>
      <span>{findNutrientValue(nutrients, 'Cholesterol') || "-"}mg</span>
    </div>
  </div>
</div>

          {/* Newsletter */}
          <div className="bg-red-50 p-4 rounded-lg mb-6">
            <h3 className="font-bold mb-1">Stay connected with our Recipes updates</h3>
            <p className="text-sm text-gray-600 mb-3">for the latest health tips and delicious recipes</p>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full border rounded-md p-2 mb-2"
            />
            <button className="w-full bg-red-500 text-white py-2 rounded-md">
              Sign up
            </button>
          </div>

          {/* Related Recipes */}
          <div className="mb-6">
  <h3 className="font-bold mb-4">Related Recipes</h3>
  <div className="space-y-4">
    {[1, 2, 3, 4].map((item) => (
      <div key={item} className="flex">
        <img 
          src={item === 1 ? "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=80&h=80&fit=crop" : 
               item === 2 ? "https://images.unsplash.com/photo-1619096252214-ef06c45683e3?q=80&w=80&h=80&fit=crop" :
               item === 3 ? "https://images.unsplash.com/photo-1513442542250-854d436a73f2?q=80&w=80&h=80&fit=crop" : 
               "https://images.unsplash.com/photo-1604909052743-94e838986d24?q=80&w=80&h=80&fit=crop"}
          alt="Related recipe" 
          className="w-20 h-20 object-cover rounded-md mr-3"
        />
        <div>
          <h4 className="font-medium">
            {item === 1 ? "Fisherman's Quick Fish" : 
             item === 2 ? "Toast with Tomato, Olive & Hummus" :
             item === 3 ? "Mac, Egg, and Spinach Roll-Ups" : "Tuna Mini Tuna Salad"}
          </h4>
          <div className="flex mt-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star 
                key={star}
                size={12} 
                className={star <= 4 ? "text-yellow-400 fill-yellow-400" : "text-gray-200"} 
              />
            ))}
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

          {/* Trending Recipes */}
          <div>
  <h3 className="font-bold mb-4">Trending Recipes</h3>
  <div className="space-y-4">
    {[1, 2, 3].map((item) => (
      <div key={item} className="flex">
        <img 
          src={item === 1 ? "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=80&h=80&fit=crop" : 
               item === 2 ? "https://images.unsplash.com/photo-1600335895229-6e75511892c8?q=80&w=80&h=80&fit=crop" :
               "https://images.unsplash.com/photo-1520072959219-c595dc870360?q=80&w=80&h=80&fit=crop"}
          alt="Trending recipe" 
          className="w-20 h-20 object-cover rounded-md mr-3"
        />
        <div>
          <h4 className="font-medium">Green Goddess Wrap in a Light & Simple</h4>
          <div className="flex mt-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star 
                key={star}
                size={12} 
                className={star <= 5 ? "text-yellow-400 fill-yellow-400" : "text-gray-200"} 
              />
            ))}
          </div>
          <div className="text-sm text-gray-500 mt-1">
            {item === 1 ? "3,225 views" : item === 2 ? "1,470 views" : "1,328 views"}
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
        </div>
      </div>
         
    </div>
     <Footer />
    </>
  );
}
