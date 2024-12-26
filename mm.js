const express = require('express');
const router = express.Router();
const path = require('path'); 
const db = require("./dbconnect");
const app = express();

router.get('/', async (req, res) => {
    try {
        const rows = await db.pool.query(`SELECT name, avg_m, avg_f FROM Country;`);
        res.send(rows);
    } catch (err) {
        console.log(err);
        res.status(500).send('Server error');
    }
});

module.exports = router;