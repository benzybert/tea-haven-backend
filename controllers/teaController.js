const Product = require('../models/Product');

exports.getAllTeas = async (req, res, next) => {
  try {
    const teas = await Product.find({});
    res.json({ products: teas });
  } catch (error) {
    next(error);
  }
};

exports.getTeaById = async (req, res, next) => {
  try {
    const tea = await Product.findById(req.params.id);
    if (!tea) {
      return res.status(404).json({ message: 'Tea not found' });
    }
    res.json(tea);
  } catch (error) {
    next(error);
  }
};

exports.getTeasByType = async (req, res, next) => {
  try {
    const teas = await Product.find({ category: req.params.type });
    res.json({ products: teas });
  } catch (error) {
    next(error);
  }
};