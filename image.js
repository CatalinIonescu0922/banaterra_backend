const fs = require('fs');
const path = require('path');

// Path to the poze folder
const pozeDirectory = path.join(__dirname, 'poze');

// Base path to be used in the image_path
const basePath = 'http://localhost:8000/authors/poze';

// SQL file path
const sqlFilePath = path.join(__dirname, 'update_image_paths.sql');

// Read the photos from the poze directory
fs.readdir(pozeDirectory, (err, files) => {
    if (err) {
        console.error('Error reading poze directory:', err);
        return;
    }

    // Filter and sort files numerically
    const sortedFiles = files
        .filter(file => file.endsWith('.jpg'))
        .sort((a, b) => {
            const numA = parseInt(path.parse(a).name, 10);
            const numB = parseInt(path.parse(b).name, 10);
            return numA - numB;
        });

    // Generate SQL statements
    const sqlStatements = sortedFiles.map((file, index) => {
        const imagePath = `${basePath}/${file}`;
        return `UPDATE Author SET image_path = '${imagePath}' WHERE id = ${index + 1};`;
    });

    // Ensure the SQL file is created if it doesn't exist
    fs.writeFileSync(sqlFilePath, '', { flag: 'a' });

    // Write SQL statements to file
    fs.writeFileSync(sqlFilePath, sqlStatements.join('\n'), 'utf8');
    console.log(`SQL statements written to ${sqlFilePath}`);
});
