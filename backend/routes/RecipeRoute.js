const express = require('express');
const router = express.Router();
const Recipe= require('../models/RecipeModel')

router.get('/', (req, res) => {
    res.send('Hello from Recipe Route!');
});

module.exports = router;