const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Tea = require('../models/Tea');

// @route   GET api/teas
// @desc    Get all teas
// @access  Public
router.get('/', async (req, res) => {
  try {
    const teas = await Tea.find();
    res.json(teas);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   GET api/teas/search
// @desc    Search teas
// @access  Public
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
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   GET api/teas/:id
// @desc    Get tea by ID
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const tea = await Tea.findById(req.params.id);
    if (!tea) {
      return res.status(404).json({ message: 'Tea not found' });
    }
    res.json(tea);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   POST api/teas
// @desc    Create a tea
// @access  Private
router.post('/', auth, async (req, res) => {
  try {
    const tea = new Tea(req.body);
    await tea.save();
    res.status(201).json(tea);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   PUT api/teas/:id
// @desc    Update a tea
// @access  Private
router.put('/:id', auth, async (req, res) => {
  try {
    const tea = await Tea.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!tea) {
      return res.status(404).json({ message: 'Tea not found' });
    }
    res.json(tea);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   DELETE api/teas/:id
// @desc    Delete a tea
// @access  Private
router.delete('/:id', auth, async (req, res) => {
  try {
    const tea = await Tea.findByIdAndDelete(req.params.id);
    if (!tea) {
      return res.status(404).json({ message: 'Tea not found' });
    }
    res.json({ message: 'Tea removed' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;