const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');


const app = express();

// Middleware
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());

// Connect to MongoDB
connectDB();


// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/teas', require('./routes/teaRoutes'));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// Explicitly use port 5001
const PORT = 5001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});