const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Tea = require('../models/Tea');

// @route   GET api/teas
// @desc    Get all teas
// @access  Public
router.get('/', async (req, res) => {
  try {
    console.log('Fetching all teas...');
    const teas = await Tea.find();
    console.log(`Found ${teas.length} teas`);
    res.json(teas);
  } catch (err) {
    console.error('Error fetching teas:', err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// @route   POST api/teas/seed
// @desc    Seed sample tea data
// @access  Public (for testing)
router.post('/seed', async (req, res) => {
  try {
    // Delete existing teas
    await Tea.deleteMany({});

    // Sample tea data
    const sampleTeas = [
      {
        name: 'Earl Grey',
        description: 'Classic black tea flavored with oil of bergamot.',
        price: 12.99,
        category: 'Black Tea',
        image: 'https://placeholder.com/teas/earl-grey.jpg',
        stock: 50,
        rating: 4.5,
        numReviews: 10
      },
      {
        name: 'Green Sencha',
        description: 'Traditional Japanese green tea with a fresh, grassy flavor.',
        price: 15.99,
        category: 'Green Tea',
        image: 'https://placeholder.com/teas/sencha.jpg',
        stock: 30,
        rating: 4.8,
        numReviews: 8
      },
      {
        name: 'Chamomile',
        description: 'Soothing herbal tea with calming properties.',
        price: 9.99,
        category: 'Herbal Tea',
        image: 'https://placeholder.com/teas/chamomile.jpg',
        stock: 45,
        rating: 4.2,
        numReviews: 15
      }
    ];

    // Insert sample teas
    const teas = await Tea.insertMany(sampleTeas);
    res.status(201).json(teas);
  } catch (err) {
    console.error('Error seeding teas:', err);
    res.status(500).json({ message: 'Error seeding data', error: err.message });
  }
});

// Rest of the routes remain the same...

module.exports = router;