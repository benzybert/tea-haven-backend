require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('../models/Product');
const teasData = require('../data/teas.json');

console.log('Starting seed script...');
console.log(`MongoDB URI: ${process.env.MONGODB_URI}`);

mongoose.connect(process.env.MONGODB_URI)
  .then(async () => {
    console.log('Connected to MongoDB');
    console.log(`Found ${teasData.teas.length} teas in JSON file`);

    // Clear existing products
    await Product.deleteMany({});
    console.log('Cleared existing products');

    // Transform tea data
    const products = teasData.teas.map(tea => ({
      name: tea.title,
      description: tea.description,
      price: tea.price,
      category: tea.type,
      image: tea.image,
      countInStock: 100
    }));

    console.log('Transformed tea data to products');
    console.log('First product:', products[0]);

    // Insert products
    const result = await Product.insertMany(products);
    console.log(`Inserted ${result.length} products`);

    // Verify
    const count = await Product.countDocuments();
    console.log(`Total products in database: ${count}`);

    mongoose.connection.close();
    console.log('Database connection closed');
  })
  .catch(error => {
    console.error('Error:', error);
    mongoose.connection.close();
  });
