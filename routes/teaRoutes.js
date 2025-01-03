const express = require('express');
const router = express.Router();
const teaController = require('../controllers/teaController');

// Get all teas
router.get('/', teaController.getAllTeas);

// Get teas by search query
router.get('/search', teaController.searchTeas);

// Get teas by category
router.get('/category/:category', teaController.getTeasByCategory);

// Get tea by id (keep this last to avoid route conflicts)
router.get('/:id', teaController.getTeaById);

module.exports = router;