const express = require('express');
const { verifyToken } = require('../middlewares/authMiddleware');
const router = express.Router();


router.get('/feed',verifyToken, (req, res) => {
    res.status(200).json({message:'Welcome to the feed'})
});
router.get('/check-auth',verifyToken, (req, res) => {
    res.json({ message: "Authorized", user: req.user });
});

module.exports = router;