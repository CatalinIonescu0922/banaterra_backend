const express = require('express');
const router = express.Router();
const path = require('path'); 
const db = require("./dbconnect");
const app = express();

router.use('/poze', express.static(path.join(__dirname, 'poze')));

router.get('/', async (req, res) => {
    try {
        const rows = await db.pool.query(`SELECT id, name, des, image_path FROM Author;`);
        res.send(rows);
    } catch (err) {
        console.log(err);
        res.status(500).send('Server error');
    }
});

router.get('/details/:authorId/ro', async (req, res) => {
    fetchAuthorDetails(req, res, 77); // 77 is the ID for Romanian
});

router.get('/details/:authorId/en', async (req, res) => {
    fetchAuthorDetails(req, res, 23); // 23 is the ID for English
});

router.get('/details/:authorId/mag', async (req, res) => {
    fetchAuthorDetails(req, res, 40); // 40 is the ID for Hungarian
});

router.get('/:authorId/quotes/count', async (req, res) => {
  const authorId = req.params.authorId;
  try {
    const result = await db.pool.query(`
      SELECT L.name as language, CAST(COUNT(Q.id) AS CHAR) as count
        FROM Quote Q
        JOIN Language L ON Q.language_id = L.id
        WHERE Q.author_id = ?
        GROUP BY L.id`, [authorId]);
    res.json(result);
  } catch (err) {
    console.error("Database error:", err);
    res.status(500).send('Server error');
  }
});


// Modifică declararea funcției pentru a o face asincronă
async function fetchAuthorDetails(req, res, languageId) {
    const authorId = req.params.authorId;
    try {
     const authorQuery = `
            SELECT A.name, A.des, A.b_date, A.d_date, A.image_path, Q.quote
            FROM Author A
            LEFT JOIN Quote Q ON A.id = Q.author_id AND Q.language_id = ?
            WHERE A.id = ?` ;
        const rows = await db.pool.query(authorQuery, [languageId, authorId]); // Acum funcția este asincronă, deci putem folosi await aici.
        sendAuthorDetails(rows, res);
    } catch (err) {
        console.log(err);
        res.status(500).send('Server error');
    }
}


function sendAuthorDetails(rows, res) {
    if (rows.length > 0) {
        const authorInfo = {
            name: rows[0].name,
            des: rows[0].des,
            b_date: rows[0].b_date,
            d_date: rows[0].d_date,
            quotes: rows.map(row => row.quote).filter(quote => quote != null),
            image_path : rows[0].image_path
        };
        res.send(authorInfo);
    } else {
        res.status(404).send('Author not found');
    }
}

module.exports = router;
