require('dotenv').config(); // Load environment variables

module.exports = {
  port: process.env.PORT || 5000,
  mongoUri: process.env.MONGO_URI,
  jwtSecret: process.env.JWT_SECRET
};


/* this file is used to store configuration variables for the application.
an example for these configuration variables is the port number that the server will run on, the URI for the MongoDB
database, and the secret key for the JSON Web Token (JWT) that will be used for authentication. */
