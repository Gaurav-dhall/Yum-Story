const express = require('express');
const router = express.Router();

const { verifyToken } = require('../middlewares/authMiddleware');
const recipeController=require('../controllers/recipeController')
const upload = require('../config/multerConfig');

router.get('/',verifyToken,recipeController.getAllRecipes);

router.get('/:id', recipeController.getClickedRecipe);

router.post('/create-recipe',verifyToken,recipeController.createRecipe); 

router.post('/upload-image',upload.single("avatar"),recipeController.uploadImage);

    module.exports = router;