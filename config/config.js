require('dotenv').config();

module.exports = {
  mongoUri: process.env.MONGO_URI,
  port: process.env.PORT || 5001,
  jwtSecret: process.env.JWT_SECRET
};