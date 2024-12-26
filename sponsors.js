// generateInsertStatements.js
const db = require('../backend/dbconn')
const fs = require('fs');
const path = require('path');

// Function to escape and wrap strings with double quotes
function escapeString(str) {
    return `"${str.replace(/"/g, '\\"')}"`;
}

async function fetchAndGenerateSQL() {
    let conn;
    const sqlFilePath = path.join(__dirname, 'insert_sponsors.sql');
    const insertStatements = [];

    try {
        conn = await db.pool.getConnection();

        // Fetch data from sponsor table
        const sponsorQuery = `
            SELECT name, rep_name, phone, email, link
            FROM sponsor
        `;
        const sponsorRows = await conn.query(sponsorQuery);

        for (const row of sponsorRows) {
            const { name, rep_name, phone, email, link } = row;
            const createdAt = new Date().toISOString().slice(0, 19).replace('T', ' ');

            // Prepare the INSERT statement
            const insertQuery = `
INSERT INTO Sponsors (name, rep_name, phone, email, link, created_at)
VALUES (${escapeString(name)}, ${escapeString(rep_name)}, ${escapeString(phone)}, ${escapeString(email)}, ${escapeString(link)}, "${createdAt}");
            `.trim();

            // Add the INSERT statement to the array
            insertStatements.push(insertQuery);
        }

        // Write the INSERT statements to the SQL file
        fs.writeFileSync(sqlFilePath, insertStatements.join('\n\n'));
        console.log(`SQL file generated successfully at ${sqlFilePath}`);
    } catch (err) {
        console.error('Error: ', err);
    } finally {
        if (conn) conn.end();
    }
}

fetchAndGenerateSQL();
