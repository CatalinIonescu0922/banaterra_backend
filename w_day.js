const mariadb = require('mariadb');
const fs = require('fs');
const path = require('path');

// Create a connection pool
const pool = mariadb.createPool({
    host: '127.0.0.1',
    port: '3306',
    user: 'admin',
    password: 'banaterra123',
    database: 'banaterra'
});

// Function to escape and wrap strings with double quotes
function escapeString(str) {
    return `"${str.replace(/"/g, '\\"')}"`;
}

async function fetchDataAndGenerateSQL() {
    let conn;
    const sqlFilePath = path.join(__dirname, 'insert_statements.sql');
    const insertStatements = [];

    try {
        conn = await pool.getConnection();

        // Fetch data from wd_tr table
        const wdTrQuery = `
            SELECT wd_id, lang_id, name, des
            FROM wd_tr
            WHERE lang_id IN (23, 40, 77)
        `;
        const wdTrRows = await conn.query(wdTrQuery);

        for (const row of wdTrRows) {
            const { wd_id, lang_id, name, des } = row;

            // Fetch m and d columns from w_day table
            const wDayQuery = `
                SELECT m, d
                FROM w_day
                WHERE wd_id = ?
            `;
            const wDayRows = await conn.query(wDayQuery, [wd_id]);

            for (const wDayRow of wDayRows) {
                const { m: month, d: day } = wDayRow;

                // Prepare the INSERT statement
                const insertQuery = `
INSERT INTO World_day (lang_id, name, des, day, month)
VALUES (${lang_id}, ${escapeString(name)}, ${escapeString(des)}, ${day}, ${month});
                `.trim();
                
                // Add the INSERT statement to the array
                insertStatements.push(insertQuery);
            }
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

fetchDataAndGenerateSQL();
