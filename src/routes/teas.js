const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Tea = require('../models/Tea');

// Get all teas
router.get('/', async (req, res) => {
  try {
    const teas = await Tea.find();
    res.json(teas);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Search teas
router.get('/search', async (req, res) => {
  try {
    const { query } = req.query;
    const teas = await Tea.find({
      $or: [
        { name: { $regex: query, $options: 'i' } },
        { description: { $regex: query, $options: 'i' } },
        { category: { $regex: query, $options: 'i' } }
      ]
    });
    res.json(teas);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get single tea
router.get('/:id', async (req, res) => {
  try {
    const tea = await Tea.findById(req.params.id);
    if (!tea) {
      return res.status(404).json({ message: 'Tea not found' });
    }
    res.json(tea);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;