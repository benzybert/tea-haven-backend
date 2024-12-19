const mongoose = require('mongoose');
const Product = require('../models/Product');
const teasData = require('../data/teas.json');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const transformTeaToProduct = (tea) => ({
  name: tea.title,
  description: tea.description,
  price: tea.price,
  category: tea.type,
  image: tea.image,
  countInStock: 100  // default value
});

const seedProducts = async () => {
  try {
    // Clear existing products
    await Product.deleteMany({});
    console.log('Cleared existing products');
    
    // Transform and insert teas
    const products = teasData.teas.map(transformTeaToProduct);
    console.log(`Preparing to insert ${products.length} products...`);
    
    const insertedProducts = await Product.insertMany(products);
    console.log(`Successfully inserted ${insertedProducts.length} products`);
    
    // Verify the insertion
    const count = await Product.countDocuments();
    console.log(`Total products in database: ${count}`);
    
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    mongoose.connection.close();
  }
};

seedProducts();