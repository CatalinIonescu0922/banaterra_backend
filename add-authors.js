const express = require('express');
const router = express.Router();
const db = require("./dbconnect");
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Function to get the next available number for the image file
const getNextImageNumber = () => {
  const files = fs.readdirSync('poze').filter(file => file.match(/^\d+\.jpg$/));
  if (files.length === 0) return 1;
  const numbers = files.map(file => parseInt(file.split('.')[0], 10));
  return Math.max(...numbers) + 1;
};

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'poze/'); // Ensure this directory exists
  },
  filename: function (req, file, cb) {
    const nextImageNumber = getNextImageNumber();
    cb(null, `${nextImageNumber}.jpg`);
  }
});
const upload = multer({ storage: storage });

// Define the route to add a new author
router.post('/', upload.single('image'), async (req, res) => {
  console.log('Received form data:', req.body);
  console.log('Received file:', req.file);

  try {
    const { name, b_date, d_date, des } = req.body;
    const baseURL = 'http://localhost:8000/authors/poze/';
    const image_path = req.file ? `${baseURL}${req.file.filename}` : null;

    console.log('name:', name);
    console.log('des:', des);
    console.log('b_date:', b_date);
    console.log('d_date:', d_date);

    // Ensure the dates are in the correct format (YYYY-MM-DD)
    const formattedBDate = b_date ? new Date(b_date).toISOString().split('T')[0] : null;
    const formattedDDate = d_date ? new Date(d_date).toISOString().split('T')[0] : null;

    console.log('formattedBDate:', formattedBDate);
    console.log('formattedDDate:', formattedDDate);

    // Wrap the des text with <p> and </p>
    const wrappedDes = des ? `<p>${des}</p>` : null;

    console.log('wrappedDes:', wrappedDes);

    const conn = await db.pool.getConnection();
    const query = `INSERT INTO Author (name, des, b_date, d_date, image_path) VALUES (?, ?, ?, ?, ?)`;
    const values = [name, wrappedDes, formattedBDate, formattedDDate, image_path];

    console.log('query:', query);
    console.log('values:', values);

    // Execute the query
    const result = await conn.query(query, values);
    conn.release();

    console.log('Database insert result:', result); // Log the result

    res.status(200).json({ message: 'Author successfully added JS' });
  } catch (error) {
    console.error('Error adding author:', error);
    res.status(500).json({ message: 'Error adding author JS', error });
  }
});

module.exports = router;
