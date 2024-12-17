const express = require('express');
const router = express.Router();
const teaController = require('../controllers/teaController');

// Get all teas
router.get('/search', teaController.getAllTeas);

// Get tea by id
router.get('/:id', teaController.getTeaById);

// Get teas by type
router.get('/type/:type', teaController.getTeasByType);

module.exports = router;