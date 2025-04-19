import React from 'react'
import { useState } from 'react';
import { Search, Camera, Clock, ChevronDown, Twitter, Facebook, Instagram, AtSign } from 'lucide-react';

export default function RecipeWebsite() {
    const [recipeTitle, setRecipeTitle] = useState('Black Bean & Corn Quesadillas');
    const [description, setDescription] = useState('');
    const [ingredients, setIngredients] = useState([
      '1 x 15 oz can black beans',
      '1 cup corn'
    ]);
    const [newIngredient, setNewIngredient] = useState('');
    const [servings, setServings] = useState('');
    const [cookHours, setCookHours] = useState('0');
    const [cookMinutes, setCookMinutes] = useState('0');
    const [prepHours, setPrepHours] = useState('0');
    const [prepMinutes, setPrepMinutes] = useState('0');
    const [cuisine, setCuisine] = useState('Italian');
    const [collection, setCollection] = useState('1 Collection selected');
    const [instructions, setInstructions] = useState([
      'In a medium bowl, mix together beans, corn, salsa, taco seasoning',
      'Preheat a large skillet over medium low heat, sprayed with cooking spray. Place one tortilla in the skillet, and scoop 1/2 cup of the filling onto the tortilla in the pan. Sprinkle 1/4 cup cheese over the bean mixture, and place second tortilla on top of the cheese. Press down on top tortilla lightly with the back of your spatula, so you can meld the tortillas together. When the bottom tortilla begins to brown, flip the quesadilla over; until both tortillas are lightly browned and crisp and the cheese filling has melted. Cut into wedges if desired and enjoy!'
    ]);
    const [newInstruction, setNewInstruction] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [saveMessage, setSaveMessage] = useState('');
  
    const addIngredient = () => {
      if (newIngredient.trim() !== '') {
        setIngredients([...ingredients, newIngredient]);
        setNewIngredient('');
      }
    };
  
    const handleKeyPress = (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        addIngredient();
      }
    };

    // Function to handle saving the recipe
    const saveRecipe = async () => {
      // Set loading state
      setIsLoading(true);
      setSaveMessage('');

      // Calculate total cooking and prep time in minutes
      const totalCookingTime = (parseInt(cookHours) * 60) + parseInt(cookMinutes);
      const totalPrepTime = (parseInt(prepHours) * 60) + parseInt(prepMinutes);
      
      // Prepare the data to be sent
      const recipeData = {
        title: recipeTitle,
        description: description,
        ingredients: ingredients,
        instructions: instructions,
        servings: servings,
        cookingTime: totalCookingTime,
        prepTime: totalPrepTime,
        cuisine: cuisine,
        collection: collection
      };

      // try {
      //   // Make the API call
      //   const response = await fetch('http://localhost:3000/recipe/create', {
      //     method: 'POST',
      //     headers: {
      //       'Content-Type': 'application/json',
      //       // Add any auth headers if needed
      //       // 'Authorization': 'Bearer yourTokenHere'
      //     },
      //     body: JSON.stringify(recipeData)
      //   });

      //   // Handle the response
      //   if (response.ok) {
      //     const data = await response.json();
      //     console.log('Recipe saved successfully:', data);
      //     setSaveMessage('Recipe saved successfully!');
      //     // You could redirect to the recipe page or do something else here
      //   } else {
      //     console.error('Failed to save recipe:', response.statusText);
      //     setSaveMessage('Failed to save recipe. Please try again.');
      //   }
      // } catch (error) {
      //   console.error('Error saving recipe:', error);
      //   setSaveMessage('Error connecting to server. Please check your connection.');
      // } finally {
      //   setIsLoading(false);
      // }
    };

    const addInstruction = () => {
      if (newInstruction.trim() !== '') {
        setInstructions([...instructions, newInstruction]);
        setNewInstruction('');
      }
    };

    const handleInstructionKeyPress = (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        addInstruction();
      }
    };
  
    return (
      <div className="flex flex-col min-h-screen bg-white">
        <header className="bg-white border-b border-gray-200 py-3 px-6 flex justify-between items-center">
          <div className="flex items-center">
            <span className="font-bold text-lg">Perfect<span className="text-red-500">Recipe</span></span>
          </div>
         
        </header>
  
        <main className="flex-grow p-6 max-w-4xl mx-auto w-full">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold">Create new recipe</h1>
            <button 
              className={`${isLoading ? 'bg-gray-400' : 'bg-red-400 hover:bg-red-500'} text-white px-4 py-2 rounded`}
              onClick={saveRecipe}
              disabled={isLoading}
            >
              {isLoading ? 'Saving...' : 'Save'}
            </button>
          </div>
          
          {saveMessage && (
            <div className={`p-2 mb-4 rounded ${saveMessage.includes('success') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
              {saveMessage}
            </div>
          )}
  
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Recipe Title:</label>
              <input
                type="text"
                value={recipeTitle}
                onChange={(e) => setRecipeTitle(e.target.value)}
                className="w-full border border-gray-300 rounded p-2"
              />
            </div>
  
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Recipe image:</label>
              <div className="mb-3">
                <div className="bg-gray-100 rounded flex items-center justify-between mb-2">
                  <button className="text-red-500 text-xs px-2 py-1 border border-red-500 rounded-sm m-1">Set as cover</button>
                  <button className="text-red-500 text-xs px-2 py-1 border border-red-500 rounded-sm m-1">Change image</button>
                </div>
                <div className="bg-gray-100 p-4 rounded flex justify-center">
                  <img 
                    src="/api/placeholder/350/200" 
                    alt="Quesadilla" 
                    className="rounded object-cover w-64 h-36" 
                  />
                </div>
                <div className="flex mt-2 space-x-2">
                  <button className="bg-gray-100 p-4 flex-1 rounded flex items-center justify-center">
                    <Camera size={20} className="text-red-500" />
                    <span className="ml-2 text-sm text-red-500">Add Photo</span>
                  </button>
                  <div className="bg-red-100 p-1 border border-red-300 rounded">
                    <img 
                      src="/api/placeholder/60/60" 
                      alt="Thumbnail" 
                      className="w-14 h-14 object-cover rounded" 
                    />
                  </div>
                </div>
              </div>
            </div>
  
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Description:</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Introduce your recipe"
                className="w-full border border-gray-300 rounded p-2 h-24"
              />
              <div className="text-right text-xs text-gray-500">{description.length}/150</div>
            </div>
  
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Ingredients:</label>
              <div className="space-y-2">
                {ingredients.map((ingredient, index) => (
                  <input
                    key={index}
                    type="text"
                    value={ingredient}
                    onChange={(e) => {
                      const newIngredients = [...ingredients];
                      newIngredients[index] = e.target.value;
                      setIngredients(newIngredients);
                    }}
                    className="w-full border border-gray-300 rounded p-2"
                  />
                ))}
                <input
                  type="text"
                  value={newIngredient}
                  onChange={(e) => setNewIngredient(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Add ingredients"
                  className="w-full border border-gray-300 rounded p-2"
                />
              </div>
              <button 
                onClick={() => {}} 
                className="text-red-500 text-sm mt-2 flex items-center"
              >
                + Header
              </button>
            </div>
  
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Instructions:</label>
              <div className="mb-4">
                {instructions.map((instruction, index) => (
                  <div key={index} className="mb-4">
                    <div className="flex items-center mb-1">
                      <div className="font-semibold text-sm">Step {index + 1}</div>
                      <button className="ml-auto">
                        <Camera size={16} className="text-gray-400" />
                      </button>
                    </div>
                    <p className="text-sm">{instruction}</p>
                  </div>
                ))}
              </div>
              <input
                type="text"
                value={newInstruction}
                onChange={(e) => setNewInstruction(e.target.value)}
                onKeyPress={handleInstructionKeyPress}
                placeholder="Write instruction"
                className="w-full border border-gray-300 rounded p-2"
              />
              <button 
                onClick={addInstruction} 
                className="text-red-500 text-sm mt-2 flex items-center"
              >
                + Add instruction
              </button>
            </div>
  
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Servings:</label>
              <input
                type="text"
                value={servings}
                onChange={(e) => setServings(e.target.value)}
                placeholder="4"
                className="w-full border border-gray-300 rounded p-2"
              />
              <p className="text-xs text-gray-500 mt-1">How many portions does this recipe make?</p>
            </div>
  
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Cooking Time:</label>
              <div className="flex space-x-2">
                <div className="flex-1">
                  <input
                    type="text"
                    value={cookHours}
                    onChange={(e) => setCookHours(e.target.value)}
                    placeholder="Hours 0"
                    className="w-full border border-gray-300 rounded p-2"
                  />
                </div>
                <div className="flex-1">
                  <input
                    type="text"
                    value={cookMinutes}
                    onChange={(e) => setCookMinutes(e.target.value)}
                    placeholder="Minutes 0"
                    className="w-full border border-gray-300 rounded p-2"
                  />
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-1">How long does it take to cook this recipe?</p>
            </div>
  
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Prep Time:</label>
              <div className="flex space-x-2">
                <div className="flex-1">
                  <input
                    type="text"
                    value={prepHours}
                    onChange={(e) => setPrepHours(e.target.value)}
                    placeholder="Hours 0"
                    className="w-full border border-gray-300 rounded p-2"
                  />
                </div>
                <div className="flex-1">
                  <input
                    type="text"
                    value={prepMinutes}
                    onChange={(e) => setPrepMinutes(e.target.value)}
                    placeholder="Minutes 0"
                    className="w-full border border-gray-300 rounded p-2"
                  />
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-1">How long does it take to prepare this recipe?</p>
            </div>
  
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">cuisine:</label>
              <div className="relative">
                <select
                  value={cuisine}
                  onChange={(e) => setCuisine(e.target.value)}
                  className="w-full border border-gray-300 rounded p-2 pr-8 appearance-none"
                >
                  <option value="Italian">Italian</option>
                  <option value="Mexican">Mexican</option>
                  <option value="Chinese">Chinese</option>
                  <option value="Indian">Indian</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <ChevronDown size={16} />
                </div>
              </div>
            </div>
  
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Collection:</label>
              <div className="relative">
                <select
                  value={collection}
                  onChange={(e) => setCollection(e.target.value)}
                  className="w-full border border-gray-300 rounded p-2 pr-8 appearance-none"
                >
                  <option value="1 Collection selected">1 Collection selected</option>
                  <option value="Dinner">Dinner</option>
                  <option value="Lunch">Lunch</option>
                  <option value="Breakfast">Breakfast</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <ChevronDown size={16} />
                </div>
              </div>
            </div>
          </div>
        </main>
  
        <div className="fixed bottom-20 left-4 bg-white shadow-lg rounded-md p-2 border border-gray-200 flex space-x-2">
          <button className="p-2 bg-blue-50 rounded hover:bg-blue-100">
            <div className="w-5 h-5 flex items-center justify-center text-blue-500">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                <path d="M20 12H4M4 12L10 6M4 12L10 18" />
              </svg>
            </div>
          </button>
          <button className="p-2 hover:bg-gray-100 rounded">
            <div className="w-5 h-5 flex items-center justify-center text-gray-500">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
              </svg>
            </div>
          </button>
          <button className="p-2 hover:bg-gray-100 rounded">
            <div className="w-5 h-5 flex items-center justify-center text-gray-500">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4M12 8h.01" />
              </svg>
            </div>
          </button>
          <button className="px-3 py-1 bg-gray-200 rounded text-xs font-medium hover:bg-gray-300">
            View only
          </button>
          <button className="p-2 hover:bg-gray-100 rounded">
            <div className="w-5 h-5 flex items-center justify-center text-gray-500">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    ); 
  }