const express = require('express');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');
const port = process.env.PORT || 3000;
const mongoConnection =require('./config/db')
const cookieParser = require('cookie-parser');

const index=require('./routes/index');
const UserRoute=require('./routes/UserRoute')
const RecipeRoute=require('./routes/RecipeRoute')


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());
app.use(express.static('public'));
mongoConnection(); // Connect to MongoDB
// Connect to MongoDB;

dotenv.config();

app.use('/', index);
app.use('/users', UserRoute);
app.use('/recipes', RecipeRoute);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});