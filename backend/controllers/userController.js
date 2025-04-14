
const User =require('../models/UserModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.registerUser=async(req,res)=>{
    const {name,email,password}=req.body
    if(!name || !email || !password){
        return res.status(400).json({message:'Please fill all fields'})
    }
    // Check if user already exists
    const existingUser=await User.findOne({email})
    if(existingUser){
        return res.status(400).json({message:'User already exists'})
    }
    bcrypt.genSalt(10, function(err, salt) {
       
        bcrypt.hash(password, salt, async function(err, hash) {
            // Store hash in your password DB.
            
            if(err){
                return res.status(500).json({message:'Error hashing password'})
            }
             try {
        const user=await User.create({name,email,password:hash})
        res.status(201).json({message:"User created successfully"})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
 
            });
        });
    }

exports.loginUser=async(req,res)=>{
    const {email,password}=req.body
    if(!email || !password){
        return res.status(400).json({message:'Please fill all fields'})
    }
    try {
        const user=await User.findOne({email})
        if(!user){
            return res.status(400).json({message:'Invalid email or password'})
        }
        bcrypt.compare(password, user.password, function(err, result) {
            if(err){
                return res.status(500).json({message:'Error comparing password'})
            }
            if(!result){
                return res.status(400).json({message:'Invalid email or password'})
            }

            const token = jwt.sign({email: user.email , id: user._id }, process.env.JWT_SECRET);
            res.cookie('token', token);
            
            res.status(200).json({message:'Login successful', token})
            // You can also send user data if needed

            // Passwords match, login successful
            // You can set a session or token here if needed
        });
        
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

exports.logoutUser=async(req,res)=>{    
    res.clearCookie('token')
    res.status(200).json({message:'Logout successful'})
}
