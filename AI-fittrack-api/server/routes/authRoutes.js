const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getProfile } = require('../Controllers/authController');
const { protect } = require('../middleware/authmiddleware');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', protect, getProfile);

module.exports = router;