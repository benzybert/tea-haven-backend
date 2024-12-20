const mongoose = require('mongoose');

const teaSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  type: {
    type: String,
    required: true,
    enum: ['green', 'black', 'herbal']
  },
  image: {
    type: String,
    default: '/images/tea-placeholder.jpg'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Tea', teaSchema);
