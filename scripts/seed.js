const mongoose = require('mongoose');
const Product = require('../models/Product');
const teasData = require('../data/teas.json');

mongoose.connect('mongodb://localhost:27017/tea-haven', {
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
    
    // Transform and insert teas
    const products = teasData.teas.map(transformTeaToProduct);
    await Product.insertMany(products);
    
    console.log('Database seeded successfully!');
    
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    mongoose.connection.close();
  }
};

seedProducts();