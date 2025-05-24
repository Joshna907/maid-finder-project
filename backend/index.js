require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Import routes
const maidRoute = require('./routes/MaidRoutes');

const app = express();
const PORT = process.env.PORT || 2002;

// CORS: allow your React app at port 5173
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET','POST','PUT','DELETE','OPTIONS'],
  credentials: true,
}));

// Body parsers (for JSON & urlencoded—multer handles files)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use your routes
app.use('/api', maidRoute);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL, {
  dbName: 'Maid-Finder',
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('MongoDB connection error:', err));

// Start server
app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
