const express = require('express');
const { authenticateToken } = require('../middleware/auth.middleware');
const {
  register,
  login,
  getCurrentUser,
  updateProfile,
  changePassword
} = require('../controllers/auth.controller');

const router = express.Router();

// Public routes
router.post('/register', register);
router.post('/login', login);

// Protected routes
router.get('/me', authenticateToken, getCurrentUser);
router.put('/profile', authenticateToken, updateProfile);
router.post('/change-password', authenticateToken, changePassword);

module.exports = router;
