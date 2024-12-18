const express = require('express');
const { authenticateToken } = require('../middleware/auth.middleware');
const {
  validateRegistration,
  validateLogin,
  validatePasswordChange,
  handleValidationErrors
} = require('../middleware/validation.middleware');
const {
  register,
  login,
  getCurrentUser,
  updateProfile,
  changePassword
} = require('../controllers/auth.controller');

const router = express.Router();

// Public routes
router.post('/register',
  validateRegistration,
  handleValidationErrors,
  register
);

router.post('/login',
  validateLogin,
  handleValidationErrors,
  login
);

// Protected routes
router.get('/me',
  authenticateToken,
  getCurrentUser
);

router.put('/profile',
  authenticateToken,
  updateProfile
);

router.post('/change-password',
  authenticateToken,
  validatePasswordChange,
  handleValidationErrors,
  changePassword
);

module.exports = router;
