const express = require('express');
const router = express.Router();
const path = require('path'); 
const db = require("./dbconnect");
const app = express();


router.get('/', async (req, res) => {
    try {
        const rows = await db.pool.query(`SELECT id,name from Language;`);
        res.send(rows);
    } catch (err) {
        console.log(err);
        res.status(500).send('Server error');
    }
});
router.get('/original/:languageId', async(req,res)=>{
    try{
        const languageId = req.params.languageId;
        const result= await db.pool.query(`SELECT books.id, books.book_name , Author.name AS book_author from books join books_authors on books.id=books_authors.book_id join Author ON Author.id=books_authors.author_id WHERE books.language_id= ?;`,[languageId]);
        res.json(result);
    } catch (err){
        console.error("Database error:", err);
        res.status(500).send('Server error');
    }
});
router.get('/translated/:languageId', async(req,res)=>{
    try{
        const languageId = req.params.languageId;
        const result= await db.pool.query(`SELECT books.id,books.book_name , Author.name AS book_author from books join books_translators on books_translators.book_id=books.id join Author ON Author.id=books_translators.translator_id WHERE books.language_id= ?;`,[languageId]);
        res.json(result);
    } catch (err){
        console.error("Database error:", err);
        res.status(500).send('Server error');
    }
});
router.get('/details/:bookId', async(req, res)=>{
    try{
        const bookId = req.params.bookId;
        const result = await db.pool.query(`SELECT quote from Quote where book_id = ? order by order_no `,[bookId]);
        res.json(result)
    } catch(err) {
       console.error("Database error:", err);
        res.status(500).send('Server error');
    }
})
module.exports = router;
