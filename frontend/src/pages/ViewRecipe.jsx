import React from 'react';
  import Nav from '../components/Nav';
  import Footer from '../components/Footer'
  import  { useState } from 'react';
import { Star, Bookmark, Share2, Clock, MessageSquare, Heart, ChevronDown } from 'lucide-react';

export default function RecipePage() {
  const [saved, setSaved] = useState(false);
  const [liked, setLiked] = useState(false);
  const [rating, setRating] = useState(0);
  
  return (
    <div className="font-sans max-w-6xl mx-auto bg-white">
      {/* Navigation */}
      <Nav />

      {/* Breadcrumbs */}
      <div className="text-sm px-8 py-4 text-gray-500">
        <span>Home</span> &gt; <span>Recipe</span> &gt; <span className="text-gray-700">Mixed Greens with Sun-Dried Tomato Dressing</span>
      </div>

      {/* Recipe Header */}
      <div className="px-8">
        <h1 className="text-3xl font-bold mb-2">Mixed Greens with Sun-Dried Tomato Dressing</h1>
        
        <div className="flex items-center space-x-4 mb-2">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-xs">AV</div>
            <span className="ml-2 text-sm">Author name</span>
          </div>
          <div className="text-sm text-gray-500">Feb 26, 2023</div>
          <div className="flex items-center text-sm">
            <MessageSquare size={16} className="mr-1" />
            <span>23 comments</span>
          </div>
          <div className="flex items-center">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star 
                  key={star}
                  size={16} 
                  className={star <= 4 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} 
                />
              ))}
            </div>
            <span className="ml-1 text-sm text-gray-500">(17 reviews)</span>
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
              src="/api/placeholder/800/500" 
              alt="Mixed Greens with Sun-Dried Tomato Dressing" 
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Recipe Info */}
          <div className="flex justify-between mb-6">
            <div className="text-center px-4">
              <p className="text-gray-500 text-sm">Prep time:</p>
              <p className="font-medium">5 mins</p>
            </div>
            <div className="text-center px-4">
              <p className="text-gray-500 text-sm">Cook time:</p>
              <p className="font-medium">5 mins</p>
            </div>
            <div className="text-center px-4">
              <p className="text-gray-500 text-sm">Serving</p>
              <p className="font-medium">4 Serving</p>
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
              This recipe features a vibrant and refreshing salad made with a medley of mixed greens, 
              accompanied by a flavorful sun-dried tomato dressing.
            </p>
          </div>

          {/* Ingredients */}
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-4">Ingredients:</h2>
            <div className="space-y-2">
              <div className="flex items-start">
                <input type="checkbox" className="mt-1 mr-2" />
                <span>1/4 cup Sun-dried tomatoes</span>
              </div>
              <div className="flex items-start">
                <input type="checkbox" className="mt-1 mr-2" />
                <span>2 tbsp Soymilk</span>
              </div>
              <div className="flex items-start">
                <input type="checkbox" className="mt-1 mr-2" />
                <span>5/8 tsp Rosemary</span>
              </div>
              <div className="flex items-start">
                <input type="checkbox" className="mt-1 mr-2" />
                <span>3/4 tsp Thyme</span>
              </div>
              <div className="flex items-start">
                <input type="checkbox" className="mt-1 mr-2" />
                <span>1/4 medium whole Tomatoes</span>
              </div>
              <div className="flex items-start">
                <input type="checkbox" className="mt-1 mr-2" />
                <span>1/4 fruit without seeds Lemons</span>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-4">Instructions:</h2>
            <ol className="space-y-4">
              <li className="flex">
                <div className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">1</div>
                <p>Soak the sun-dried tomatoes in the soy milk for an hour.</p>
              </li>
              <li className="flex">
                <div className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">2</div>
                <p>Chop the fresh herbs, tomato, and onions and toss them with the salad greens. Add additional veggies as desired.</p>
              </li>
              <li className="flex">
                <div className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">3</div>
                <p>Juice the lemon and combine in a high-powered blender with the sun dried tomato mixture and garlic until smooth. Pour over salad and toss together well. Top with brazil nuts and enjoy!</p>
              </li>
            </ol>
          </div>

          {/* Recipe Card for Smaller Screens */}
          <div className="lg:hidden mb-6 border rounded-lg p-4">
            <div className="flex items-center mb-4">
              <img 
                src="/api/placeholder/100/100" 
                alt="Recipe thumbnail" 
                className="w-20 h-20 rounded-md mr-4"
              />
              <div>
                <h3 className="font-bold">Mixed Greens with Sun-Dried Tomato Dressing</h3>
                <div className="flex items-center text-sm text-gray-500">
                  <span>Author name</span>
                  <span className="mx-2">•</span>
                  <span>Feb 26, 2023</span>
                </div>
                <div className="flex mt-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star 
                      key={star}
                      size={12} 
                      className={star <= 4 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} 
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
                    src={`/api/placeholder/200/150`}
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
            <div className="space-y-2">
              <div className="flex justify-between border-b pb-1">
                <span className="text-gray-600">Calories</span>
                <span>494</span>
              </div>
              <div className="flex justify-between border-b pb-1">
                <span className="text-gray-600">Carbs</span>
                <span>80g</span>
              </div>
              <div className="flex justify-between border-b pb-1">
                <span className="text-gray-600">Fat</span>
                <span>18g</span>
              </div>
              <div className="flex justify-between border-b pb-1">
                <span className="text-gray-600">Protein</span>
                <span>24g</span>
              </div>
              <div className="flex justify-between border-b pb-1">
                <span className="text-gray-600">Fiber</span>
                <span>23g</span>
              </div>
              <div className="flex justify-between border-b pb-1">
                <span className="text-gray-600">Net carbs</span>
                <span>56g</span>
              </div>
              <div className="flex justify-between border-b pb-1">
                <span className="text-gray-600">Sodium</span>
                <span>444mg</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Cholesterol</span>
                <span>0mg</span>
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
                    src={`/api/placeholder/80/80`}
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
                    src={`/api/placeholder/80/80`}
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
          <Footer />
    </div>
  );
}
