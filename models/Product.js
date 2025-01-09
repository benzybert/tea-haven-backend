const mongoose = require('mongoose');

// Define tea product structure


const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
  countInStock: { type: Number, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Product', ProductSchema);