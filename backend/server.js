// server.js
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const db = require("./db");

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Untuk menangani JSON body

// Import routes
const userRoutes = require("./routes/users");

// Gunakan routes di server
app.use("/api/users", userRoutes); // Rute untuk register dan login

// Jalankan server di port yang diinginkan (misalnya 3001)
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
