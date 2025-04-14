const express = require('express');
const router = express.Router();
const Recipe = require('../models/RecipeModel')

router.get('/', (req, res) => {
    try{
        const recipes = Recipe.find()
        res.status(200).json(recipes)
    }catch(error){
        res.status(500).json({ message: 'Error retrieving recipes', error })
    }
    }
);

router.get('/:id', (req, res) => {
    const { id } = req.params;
    try {
    const clickedRecipe = Recipe.findById(id)
       if(!clickedRecipe){
        return res.status(404).json({ message: 'Recipe not found' });
       }
         res.status(200).json(clickedRecipe);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving recipe', error });
    }
       
    });

    router.post('/create-recipe', (req, res) => {
        try {
            const { createdBy,title,description,createdAt,ingredients,instructions,cuisine,prepTime,cookTime,servings,
            } = req.body;
            const newRecipe= Recipe.create({
                createdBy,
                title,
                description,
                createdAt,
                ingredients,
                instructions,
                cuisine,
                prepTime,
                cookTime,
                servings,
            })
            res.status(201).json(newRecipe)
        } catch (error) {
            res.status(500).json({ message: 'Error creating recipe', error });
        }
      
            
    });

    module.exports = router;