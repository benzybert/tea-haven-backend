const express = require('express');
const { searchTeas } = require('../controllers/tea.controller');
const router = express.Router();

router.get('/search', searchTeas);

module.exports = router;
