const mongoose = require('mongoose');

const { Schema } = mongoose;

const recipeSchema = new Schema({

     createdBy: {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'User',
         required: true
     },
    title: { 
        type: String, 
        required: true
     },


    description: { 
        type: String,
         required: true
    },

    image: {
         type: String,
          required: true
         },

     rating: {
         type: Number,
          
          default: 0
         },

     reviews: {
         type: [],
          default: []
         },

     createdAt: {
         type: Date,
          default: Date.now
         },

    ingredients: {
         type: [],
          required: true
         },

    instructions: {
         type: [],
          required: true
         },

    cuisine: {
         type: String,
          required: true 
        }, 

 
    prepTime: {
         type: String,
          required: true
         },

    cookTime: { 
        type: String,
         required: true 
        },

    servings: {
         type: String,
          required: true
         },

   
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;