const express = require('express');
const router = express.Router();
const { registerUser,loginUser,getUserById } = require('../controllers/userController');

// Correct usage:
router.post('/register', registerUser);
router.post('/login' , loginUser);
router.get('/profile/:id', getUserById); // 👈 New route


module.exports = router;
