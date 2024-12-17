const mongoose = require('mongoose'); 
const { mongoUri } = require('./config'); 

// this function is used to connect to the MongoDB database using the mongoose library.
const connectDB = async () => {    
  try {
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1);
  }
};

module.exports = connectDB;