const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    name: { 
        type: String, 
        required: true
     },
    email: {
        type: String, 
        required: true,
        unique: true
     },
    password: { 
        type: String, 
        required: true
     },
     recipe:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Recipe',
        default: [],
        required: true
     
     }],

     savedRecipes:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Recipe',
        default: [],
        required: true
     
     }],

    })
    // Add other fields as needed
    const User = mongoose.model('User', userSchema);

module.exports = User;
// module.exports = User;