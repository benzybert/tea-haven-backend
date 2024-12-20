const Tea = require('../models/tea.model');

// Get all teas with optional filtering
exports.searchTeas = async (req, res) => {
  try {
    const { type, search } = req.query;
    let query = {};

    if (type && type !== 'all') {
      query.type = type.toLowerCase();
    }

    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } }
      ];
    }

    const products = await Tea.find(query);
    res.json({ products });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: 'Error fetching teas', 
      error: error.message 
    });
  }
};
