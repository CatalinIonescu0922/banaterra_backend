const express = require('express');
const router = express.Router();
const db = require('./dbconnect'); // Import the db with pool as a property
let book_id_org;
router.post('/', async (req, res) => {
    const { extractedData_Org, extractedData_Trans } = req.body;

    try {
        for (const item of extractedData_Org) {
            const authorName = item.author_name;
            let authorId;

            // Check if the author already exists in the Author table
            const existingAuthor = await db.pool.query(  // Use db.pool.query
                'SELECT id FROM Author WHERE name = ?',
                [authorName]
            );

            if (existingAuthor.length > 0) {
                authorId = existingAuthor[0].id;
            } else {
                const result = await db.pool.query(  // Use db.pool.query
                    'INSERT INTO Author (name) VALUES (?)',
                    [authorName]
                );
                authorId = result.insertId;
            }
            console.log(`Processed author: ${authorName}, ID: ${authorId}`);
            
            const languageResult = await db.pool.query(
                'SELECT id FROM Language WHERE code = ?',
                [item.code]
            );

            let languageID;
            if (languageResult.length > 0) {
                languageID = languageResult[0].id;
            } else {
                throw new Error(`Language with code ${item.code} not found`);
            }

            const bookName = item.book_name;
            let bookID;
            
            const existingBook = await db.pool.query(
                'SELECT id FROM books WHERE book_name = ?',
                [bookName]
            );

            if (existingBook.length > 0) {
                bookID = existingBook[0].id;
            } else {
                const bookResult = await db.pool.query(
                    'INSERT INTO books (book_name, link_carte, poza, language_id) VALUES (?, ?, ?, ?)',
                    [bookName, item.link_carte, item.poza, languageID]
                );
                bookID = bookResult.insertId;
            }
            book_id_org=bookID;
            console.log(`Processed book: ${bookName}, ID: ${bookID}`);
            
            const existingTuples = await db.pool.query('SELECT author_id, book_id FROM books_authors');

        // Check if the tuple (authorId, bookId) already exists in the result
           const tupleExists = existingTuples.some(
            (row) => row.author_id === authorId && row.book_id === bookID
           );
           if(!tupleExists){
              await db.pool.query(
                'INSERT INTO books_authors (author_id, book_id) VALUES (?, ?)',
                [authorId, bookID]
            );
           }
            const quote_verify = await db.pool.query(`SELECT id from Quote where quote = ?`,
                [item.quote]
            )
            if(quote_verify.length == 0){
                await db.pool.query(
                    `INSERT INTO Quote (quote,author_id,language_id,chapter_id,book_id) VALUES (?, ?, ?, ?, ?)`,
                    [item.quote,authorId,languageID,item.chapter,bookID]
                )
            }
        }

        res.status(200).json({ message: 'Authors and books processed successfully' });
    } catch (error) {
        console.error('Error processing authors and books:', error);
        res.status(500).json({ error: 'An error occurred while processing authors and books' });
    }
     try {
        for (const item of extractedData_Trans) {
            const authorName = item.translator_name;
            let authorId;

            // Check if the author already exists in the Author table
            const existingAuthor = await db.pool.query(  // Use db.pool.query
                'SELECT id FROM Author WHERE name = ?',
                [authorName]
            );

            if (existingAuthor.length > 0) {
                authorId = existingAuthor[0].id;
            } else {
                const result = await db.pool.query(  // Use db.pool.query
                    'INSERT INTO Author (name) VALUES (?)',
                    [authorName]
                );
                authorId = result.insertId;
            }
            author_id_org=authorId;
            console.log(`Processed author: ${authorName}, ID: ${authorId}`);
            
            const languageResult = await db.pool.query(
                'SELECT id FROM Language WHERE code = ?',
                [item.code]
            );

            let languageID;
            if (languageResult.length > 0) {
                languageID = languageResult[0].id;
            } else {
                throw new Error(`Language with code ${item.code} not found`);
            }

            const bookName = item.book_name;
            let bookID;
            
            const existingBook = await db.pool.query(
                'SELECT id FROM books WHERE book_name = ?',
                [bookName]
            );

            if (existingBook.length > 0) {
                bookID = existingBook[0].id;
            } else {
                const bookResult = await db.pool.query(
                    'INSERT INTO books (book_name, link_carte, poza, language_id) VALUES (?, ?, ?, ?)',
                    [bookName, item.link_carte, item.poza, languageID]
                );
                bookID = bookResult.insertId;
            }

            console.log(`Processed book: ${bookName}, ID: ${bookID}`);
            
            const existingTuples = await db.pool.query('SELECT translator_id, book_id FROM books_translators');

        // Check if the tuple (authorId, bookId) already exists in the result
           const tupleExists = existingTuples.some(
            (row) => row.translator_id === authorId && row.book_id === bookID
           );
           if(!tupleExists){
              await db.pool.query(
                'INSERT INTO books_translators (translator_id, book_id, original_book) VALUES (?, ?, ?)',
                [authorId, bookID,book_id_org]
            );
           }
            const quote_verify = await db.pool.query(`SELECT id from Quote where quote = ?`,
                [item.quote]
            )
            if(quote_verify.length == 0){
                await db.pool.query(
                    `INSERT INTO Quote (quote,author_id,language_id,chapter_id,book_id) VALUES (?, ?, ?, ?, ?)`,
                    [item.quote,authorId,languageID,item.chapter,bookID]
                )
            }
        }

        // res.status(200).json({ message: 'Authors and books processed successfully' });
    } catch (error) {
        console.error('Error processing translators and books:', error);
        res.status(500).json({ error: 'An error occurred while processing translators and bookss' });
    }
});

module.exports = router;
