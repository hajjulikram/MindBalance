// db.js
const mysql = require("mysql2");

// Koneksi ke database MySQL
const db = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASS || "",
  database: process.env.DB_NAME || "mindbalance_db",
});

// Cek koneksi ke MySQL
db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL: " + err.message);
    return;
  }
  console.log("Connected to the MySQL server.");
});

module.exports = db;
