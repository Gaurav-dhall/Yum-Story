const express = require('express');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');
const port = process.env.PORT || 3000;
const mongoConnection =require('./config/db')


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static('public'));
mongoConnection(); // Connect to MongoDB
// Connect to MongoDB;

dotenv.config();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});