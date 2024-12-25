// routes/auth.js
const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/authController');
const authController = new AuthController();

router.post('/register', authController.register.bind(authController));
router.post('/login', authController.login.bind(authController));

module.exports = router;