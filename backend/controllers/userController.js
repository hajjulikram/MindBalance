// controllers/userController.js
const db = require("../db");

// Logika register user
const registerUser = (req, res) => {
  const { username, email, password } = req.body;

  // Query untuk menyimpan user ke database
  const query =
    "INSERT INTO Users (username, email, password) VALUES (?, ?, ?)";
  db.query(query, [username, email, password], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Error registering user" });
    }
    res.status(201).json({ message: "User registered successfully" });
  });
};

// Logika login user
const loginUser = (req, res) => {
  const { email, password } = req.body;

  // Query untuk mengecek login
  const query = "SELECT * FROM Users WHERE email = ? AND password = ?";
  db.query(query, [email, password], (err, results) => {
    if (err) {
      return res.status(500).json({ message: "Error logging in" });
    }
    if (results.length > 0) {
      res.status(200).json({ user: results[0], message: "Login successful" });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  });
};

module.exports = {
  registerUser,
  loginUser,
};
