const mongoose = require('mongoose');
const { Schema } = mongoose;

const recipeSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    ingredients: { type: [String], required: true },
    instructions: { type: [String], required: true },
    category: { type: String, required: true }, 
    difficulty: { type: String, required: true },
    prepTime: { type: String, required: true },
    cookTime: { type: String, required: true },
    servings: { type: Number, required: true },
    calories: { type: Number, required: true },
    protein: { type: Number, required: true },
    carbs: { type: Number, required: true },
    fat: { type: Number, required: true },
    fiber: { type: Number, required: true },
    sugar: { type: Number, required: true },
    cholesterol: { type: Number, required: true },
    sodium: { type: Number, required: true },
    potassium: { type: Number, required: true },
    cholesterol: { type: Number, required: true },
    saturatedFat: { type: Number, required: true },
    transFat: { type: Number, required: true },
    unsaturatedFat: { type: Number, required: true },
    addedSugar: { type: Number, required: true },
    addedSodium: { type: Number, required: true },
    addedSaturatedFat: { type: Number, required: true },
    addedTransFat: { type: Number, required: true },    
    addedCholesterol: { type: Number, required: true },
    addedPotassium: { type: Number, required: true },
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;