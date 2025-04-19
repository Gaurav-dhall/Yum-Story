import React from 'react'
import { useState } from 'react';
import { Search, Camera, Clock, ChevronDown, Twitter, Facebook, Instagram, AtSign } from 'lucide-react';
import Footer from '../components/Footer'
import Nav from '../components/Nav'

export default function RecipeWebsite() {
    const [recipeTitle, setRecipeTitle] = useState('');
    const [description, setDescription] = useState('');
    const [ingredients, setIngredients] = useState([]);
    const [newIngredient, setNewIngredient] = useState('');
    const [servings, setServings] = useState(null);
    const [cookHours, setCookHours] = useState('');
    const [cookMinutes, setCookMinutes] = useState('');
    const [prepHours, setPrepHours] = useState('');
    const [prepMinutes, setPrepMinutes] = useState('');
    const [cuisine, setCuisine] = useState('Italian');
    const [collection, setCollection] = useState('Breakfast');
    const [instructions, setInstructions] = useState([]);
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
        variant: collection,
      };

      try {
        // Make the API call
        const response = await fetch('http://localhost:3000/recipes/create-recipe', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            // Add any auth headers if needed
            // 'Authorization': 'Bearer yourTokenHere'
          },
          credentials: 'include', 
          body: JSON.stringify(recipeData)
        });

        // Handle the response
        const data = await response.json();
        if (response.ok) {
          
          setSaveMessage('Recipe saved successfully!');
          // You could redirect to the recipe page or do something else here
        } else {
          console.error('Failed to save recipe:', data.message);
          setSaveMessage(`Failed to save recipe: ${data.message}`);
        }
      } catch (error) {
        console.error('Error saving recipe:', error.message);
        setSaveMessage('Error connecting to server. Please check your connection.');
      } finally {
        setIsLoading(false);
      }
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
        {/* <header className="bg-white border-b border-gray-200 py-3 px-6 flex justify-between items-center">
          <div className="flex items-center">
            <span className="font-bold text-lg">Yum<span className="text-red-500">Story</span></span>
          </div>
         
        </header>
   */}

   <Nav />
        <main className="flex-grow p-6 max-w-4xl mx-auto w-full">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold">Create new recipe🍽️</h1>
            
          </div>
          
          
  
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Recipe Title:</label>
              <input
                type="text"
                value={recipeTitle}
                onChange={(e) => setRecipeTitle(e.target.value)}
                placeholder='Enter recipe title'
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
                    alt="Recipe image" 
                    className="rounded object-cover w-64 h-36" 
                  />
                </div>
                <div className="flex mt-2 space-x-2">
                  <button className="bg-gray-100 p-4 flex-1 rounded flex items-center justify-center">
                    <Camera size={20} className="text-red-500" />
                    <span className="ml-2 text-sm text-red-500">Add Photo</span>
                  </button>
                 
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
                    placeholder={`Ingredient ${index + 1}`}
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
                  placeholder={`Ingridient ${ingredients.length + 1}`}
                  className="w-full border border-gray-300 rounded p-2"
                />
              </div>
             
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
                placeholder={`Step ${instructions.length + 1}`}
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
                type="number"
                value={servings}
                onChange={(e) => setServings(e.target.value)}
                placeholder="Ex:- 4"
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
                  <option value="Dinner">Dinner</option>
                  <option value="Lunch">Lunch</option>
                  <option value="Breakfast">Breakfast</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <ChevronDown size={16} />
                </div>
              </div>
            </div>

            <button 
              className={`${isLoading ? 'bg-gray-400' : 'bg-red-400 hover:bg-red-500'} text-white px-4 py-2 rounded`}
              onClick={saveRecipe}
              disabled={isLoading}
            >
              {isLoading ? 'Saving...' : 'Save'}
            </button>

            {saveMessage && (
            <div className={`p-2 mb-4 rounded ${saveMessage.includes('success') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
              {saveMessage}
            </div>
          )}
          </div>
        </main>
  
       <Footer />
      </div>
    ); 
  }