// backend/server.js
const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
app.use(cors());
app.use(express.json());

// Route to add a new birthdate
app.post('/add', (req, res) => {
  const { name, date } = req.body;
  const sql = 'INSERT INTO birthdates (name, birthdate) VALUES (?, ?)';
  db.query(sql, [name, date], (err, result) => {
    if (err) return res.status(500).send(err);
    res.send('✅ Birthdate saved');
  });
});

// Route to fetch all birthdates
app.get('/all', (req, res) => {
  db.query('SELECT * FROM birthdates', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

// Start the server
app.listen(3000, () => {
  console.log('✅ MySQL Connected and 🚀 Server running on http://localhost:3000');
});