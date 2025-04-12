const express = require('express');
const { verifyToken } = require('../middlewares/authMiddleware');
const router = express.Router();


router.get('/feed',verifyToken, (req, res) => {
    res.status(200).json({message:'Welcome to the feed'})
});

module.exports = router;