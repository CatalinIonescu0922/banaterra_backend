const express = require('express');
const router = express.Router();
const db = require('./dbconnect');
const multer = require('multer');

// Set up multer to handle `multipart/form-data`
const upload = multer();

router.post('/', upload.none(), async (req, res) => {
  try {
    const { book_name } = req.body;  // Access the field directly from req.body

    if (!book_name) {
      return res.status(400).json({ message: 'Book name is required' });
    }

    console.log('book_name:', book_name);

    const conn = await db.pool.getConnection();
    const query = `INSERT INTO books (book_name) VALUES (?)`;
    const values = [book_name];

    // Execute the query
    const result = await conn.query(query, values);
    conn.release();

    console.log('Database insert result:', result);

    res.status(200).json({ message: 'Book successfully added' });
  } catch (error) {
    console.error('Error adding book:', error);
    res.status(500).json({ message: 'Error adding book', error: error.message });
  }
});

module.exports = router;
