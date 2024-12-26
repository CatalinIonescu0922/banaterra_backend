const express = require('express');
const router = express.Router();
const path = require('path'); 
const db = require("./dbconnect");
const app = express();

router.get('/', async (req, res) => {
    try {
        const rows = await db.pool.query(`SELECT id,name, image_path FROM Author where DATE_FORMAT(b_date, '%m-%d') = DATE_FORMAT(CURDATE(), '%m-%d');`);
        res.send(rows);
    } catch (err) {
        console.log(err);
        res.status(500).send('Server error');
    }
});

module.exports = router;