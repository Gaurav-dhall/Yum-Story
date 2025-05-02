const express = require('express');
const cors = require('cors');
const app = express();


const dotenv = require('dotenv');
const port = process.env.PORT || 3000;
const mongoConnection =require('./config/db')
const cookieParser = require('cookie-parser');
const path = require('path');

const index=require('./routes/index');
const UserRoute=require('./routes/UserRoute')
const RecipeRoute=require('./routes/RecipeRoute')

const cloudinary = require('cloudinary').v2;



cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.use(cors({
  origin: [
    'https://yum-story.vercel.app',
    'https://yum-story-gaurav-dhalls-projects.vercel.app/',
    'http://localhost:5173' // Development environment
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(cookieParser());
app.use(express.static('public'));
mongoConnection(); // Connect to MongoDB
// Connect to MongoDB;

dotenv.config();

app.use('/', index);
app.use('/users', UserRoute);
app.use('/recipes', RecipeRoute);

app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend is working!' });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});