const express = require('express');
const router = express.Router();
const path = require('path'); 
const db = require("./dbconnect");
const app = express();

router.get('/', async (req, res) => {
    try {
        const rows = await db.pool.query(`SELECT name, des FROM World_day where day = DATE_FORMAT(CURDATE(), '%d') AND month =  DATE_FORMAT(CURDATE(), '%m') and lang_id = 77;`);
        res.send(rows);
    } catch (err) {
        console.log(err);
        res.status(500).send('Server error');
    }
});

module.exports = router;