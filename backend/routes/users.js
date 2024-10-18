// routes/users.js
const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/userController");

// Rute Register
router.post("/register", registerUser);

// Rute Login
router.post("/login", loginUser);

module.exports = router;