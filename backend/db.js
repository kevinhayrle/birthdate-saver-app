// backend/db.js
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Iluvanvi@09', // replace this!
  database: 'birthdate_db'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('✅ MySQL Connected');
});

module.exports = connection;