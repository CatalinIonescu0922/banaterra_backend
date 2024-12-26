const db = require("./dbconn");

async function asyncFunction() {
    try {

	const rows = await db.pool.query("SELECT * from country");
	console.log(rows);
    } catch (err) {
        // Print error
        console.log(err);
    } finally {
        // Close connection
        db.pool.end();
    }
}

asyncFunction();

