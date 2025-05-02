const Recipe = require('../models/RecipeModel');
const User = require('../models/UserModel');
const cloudinary = require('cloudinary').v2;

exports.getAllRecipes = async(req, res) => {
    try {
        const recipes = await Recipe.find().populate('createdBy', 'name')
        if (!recipes || recipes.length === 0) {
            return res.status(404).json({ message: 'No recipes found' });
        }
        // Sort recipes by createdAt in descending order
        recipes.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        res.status(200).json(recipes);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error retrieving recipes', error });   
    }
    
}

exports.getClickedRecipe = async(req, res) => {
    const { id } = req.params;
    try {
    const clickedRecipe =await Recipe.findById(id).populate('createdBy', 'name')
       if(!clickedRecipe){
        return res.status(404).json({ message: 'Recipe not found' });
       }
         res.status(200).json(clickedRecipe);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving recipe', error });
    }
       
    }

   exports.createRecipe = async (req, res) => {
        try {
            const { createdBy,image,title,description,createdAt,ingredients,instructions,cuisine,prepTime,cookTime,servings,variant
            } = req.body;

            if (!title || !description || !ingredients || !instructions || !cuisine) {
                return res.status(400).json({ message: 'Please fill all required fields' });
            }
           
            const owner = req.user.id; // Assuming you have middleware to set req.user from the token
            const newRecipe=await Recipe.create({
                createdBy: owner,
                title,
                description,
                createdAt,
                image,
                ingredients,
                instructions,
                cuisine,
                prepTime,
                cookTime,
                servings,
                variant
            })

            const user = await User.findById(owner);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            user.recipe.push(newRecipe._id);
            await user.save();
            res.status(201).json({ message: 'Recipe created successfully', recipe: newRecipe });
            
            
        } catch (error) {
            res.status(500).json({ message: 'Error creating recipe', error });
            console.log(error);
        }
      
            
    }

    exports.uploadImage = (req, res) => {
        try {
            const { file } = req;
            if (!file) {
                return res.status(400).json({ message: 'No file uploaded' });
            }
            
            const stream = cloudinary.uploader.upload_stream(
                { resource_type: 'image' },
                (error, result) => {
                    if (error) {
                        console.error('Cloudinary upload error:', error);
                        return res.status(500).json({ message: 'Upload failed', error: error.message });
                    }
                    res.json({ imagePath: result.secure_url });
                }
            );
            
            stream.end(req.file.buffer);
        } catch (error) {
            console.error('Upload error:', error);
            res.status(500).json({ message: 'Server error during upload', error: error.message });
        }
    }