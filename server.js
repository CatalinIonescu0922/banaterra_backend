const express = require('express');
const app = express();
const path = require('path'); // Import the path module
const cors = require('cors');
const port = 8000;
const ip = '0.0.0.0';

app.use(cors());
app.use(express.json());
const authorsRouter = require('./authors');
const addAuthorsRouter = require('./add-authors');
const mmRouter = require('./mm');
const peopleRouter = require('./people');
const animalsRouter = require('./animals');
const plantsRouter = require('./plants');
const bibleRouter = require('./bible');
const nascut_aziRouter = require('./nascut_azi');
const decedat_aziRouter = require('./decedat_azi');
const dayRouter = require('./day');
const companiiRouter = require('./companii');
const bookRouter = require('./book');
const quotesRouter = require('./learn');
const addBooksRouter = require('./add-book');
const addExcelBook = require('./add-excel-book');
app.use('/authors', authorsRouter);
app.use('/mm',mmRouter);
app.use('/people',peopleRouter);
app.use('/animals',animalsRouter);
app.use('/plants',plantsRouter);
app.use('/bible',bibleRouter);
app.use('/add-authors',addAuthorsRouter);
app.use('/nascut_azi',nascut_aziRouter);
app.use('/decedat_azi',decedat_aziRouter);
app.use('/day',dayRouter);
app.use('/companii',companiiRouter);
app.use('/books',bookRouter);
app.use('/learn', quotesRouter);
app.use('/add-book',addBooksRouter);
app.use('/add-excel/books',addExcelBook);

app.listen(port, ip, () => {
    console.log(`Server running at http://${ip}:${port}/`);
});
