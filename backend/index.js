const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 2002;

// Middleware
app.use(express.json());

// Example route
app.get("/", (req, res) => {
  res.send("Server is running ✅");
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL, { dbName: "maidfinder" })
  .then(() => {
    console.log("✅ MongoDB connected");
    // Start server only after DB connects
    app.listen(PORT, () => console.log(`🚀 Server started on port ${PORT}`));
  })
  .catch(err => console.error("❌ MongoDB connection error:", err));
