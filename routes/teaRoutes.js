const express = require('express');
const router = express.Router();
const teaController = require('../controllers/teaController');

router.get('/search', teaController.getAllTeas);
router.get('/:id', teaController.getTeaById);
router.get('/type/:type', teaController.getTeasByType);

module.exports = router;