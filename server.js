const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const { port } = require('./config/config');
const errorHandler = require('./middleware/errorHandler');

const app = express();

// Middleware to parse incoming requests
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
const teaRoutes = require('./routes/teaRoutes');
app.use('/api/teas', teaRoutes);

// Error Handler (should be last)
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));