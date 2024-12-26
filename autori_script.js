const mariadb = require('mariadb');
const fs = require('fs');
const path = require('path');

// Database configuration
const dbConfig = {
    host: '127.0.0.1',
    port: 3306,
    user: 'admin',
    password: 'banaterra123',
    database: 'banaterra'
};

// Function to read tag IDs from the file
const readTagIds = async () => {
    const filePath = path.join(__dirname, 'tag_ids.txt');
    const data = await fs.promises.readFile(filePath, 'utf-8');
    return data.split(/\s+/).filter(id => id.trim() !== '');
};

// Function to connect to the database and execute queries
const executeQuery = async (query, params = []) => {
    let conn;
    try {
        conn = await mariadb.createConnection(dbConfig);
        const rows = await conn.query(query, params);
        return rows;
    } catch (err) {
        console.error('Database query error: ', err);
        throw err;
    } finally {
        if (conn) conn.end();
    }
};

// Function to ensure language exists

// Main function to generate the SQL inserts
const generateInserts = async () => {
    try {
        const tagIds = await readTagIds();
        const languageId = 77;
        let authorId = 1;
        let inserts = '';

        for (const tagId of tagIds) {
            console.log(`Processing tagId: ${tagId}, authorId: ${authorId}`);  // Debug

            // Get quote IDs for the current tag ID
            const quoteIds = await executeQuery('SELECT quote_id FROM quote_tag WHERE tag_id = ?', [tagId]);
            console.log(`Found ${quoteIds.length} quoteIds for tagId: ${tagId}`);  // Debug

            for (const quoteIdRow of quoteIds) {
                const quoteId = quoteIdRow.quote_id;
                // Get quotes from quote_ft for the current quote ID
                const quotes = await executeQuery('SELECT quote FROM quote_ver WHERE quote_id = ? and lang_id= ?', [quoteId,languageId]);
                console.log(`Found ${quotes.length} quotes for quoteId: ${quoteId}`);  // Debug

                for (const quoteRow of quotes) {
                    const quoteText = quoteRow.quote;
                    // Create insert statement
                    inserts += `INSERT INTO Quote (quote, author_id, language_id) VALUES ('${quoteText.replace(/'/g, "''")}', ${authorId}, ${languageId});\n`;
                }
            }

            authorId++;
        }

        // Write inserts to the .sql file
        const outputPath = path.join(__dirname, 'inserts.sql');
        await fs.promises.writeFile(outputPath, inserts, 'utf-8');
        console.log('SQL file generated successfully.');
        console.log('Final authorId:', authorId);  // Added for debugging

    } catch (err) {
        console.error('Error generating SQL inserts: ', err);
    }
};

generateInserts();
