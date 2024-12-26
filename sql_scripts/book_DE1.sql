
/* !!!DE PUS autor-translator
INSERT INTO Author (id, name, des, b_date, d_date, image_path)
VALUES (611,'Wing-Tsit Chan', NULL, NULL, NULL, NULL);


INSERT INTO books (id, book_name, created_at, updated_at, language_id)
VALUES (1,"The Way of Lao Tzu - Tao Te Ching","2024-10-13 14:44:45","2024-10-13 14:44:45",23);

INSERT INTO books_authors (author_id, book_id, created_at, updated_at)
VALUES (249,1,"2024-10-13 14:44:35","2024-10-13 14:44:35"); 

!!! DE PUS legatura noului translator
INSERT INTO books_translators (translator_id, book_id, created_at, updated_at) 
VALUES (611, 1, "2024-10-13 14:44:45","2024-10-13 14:44:45") 

INSERT INTO Topic (id, name)
VALUES (1,"test")

*/

/*first ID for DANI : */

/*LANGUAGE*/
/*
INSERT INTO Language (id, name, code)
VALUES (10, "deutsch", "de");

INSERT INTO Language (id, name, code)
VALUES (11, "italian", "it");

INSERT INTO Language (id, name, code)
VALUES (12, "japanese", "ja");

INSERT INTO Language (id, name, code)
VALUES (13, "dutch", "nl");

INSERT INTO Language (id, name, code)
VALUES (14, "polish", "pl");

INSERT INTO Language (id, name, code)
VALUES (15, "romanian", "ro");

AUTHOR NAME

INSERT INTO Author_Name(id, author_id, name, des, language_id, created_at, updated_at)
VALUES (621,249, "Laotse", "", 10, "2024-10-15 10:31:24", "2024-10-15 10:31:24");
INSERT INTO Author_Name(id, author_id, name, des, language_id, created_at, updated_at)
VALUES (622,249, "Laozi", "", 11, "2024-10-15 10:31:24", "2024-10-15 10:31:24");

INSERT INTO Author_Name(id, author_id, name, des, language_id, created_at, updated_at)
VALUES (623,249, "老子", "", 12, "2024-10-15 10:31:24", "2024-10-15 10:31:24");

INSERT INTO Author_Name(id, author_id, name, des, language_id, created_at, updated_at)
VALUES (624,249, "Laozi", "", 13, "2024-10-15 10:31:24", "2024-10-15 10:31:24");

INSERT INTO Author_Name(id, author_id, name, des, language_id, created_at, updated_at)
VALUES (625,249, "Lao-Tsy", "", 14, "2024-10-15 10:31:24", "2024-10-15 10:31:24");

INSERT INTO Author_Name(id, author_id, name, des, language_id, created_at, updated_at)
VALUES (626,249, "Lao-Tze", "", 15, "2024-10-15 10:31:24", "2024-10-15 10:31:24");

AUTHOR

INSERT INTO Author (id, name, des, b_date, d_date, image_path)
VALUES (622,'Richard Wilhelm', NULL, NULL, NULL, NULL);

INSERT INTO Author (id, name, des, b_date, d_date, image_path)
VALUES (623,'Luciano Parinetto', NULL, NULL, NULL, NULL);

INSERT INTO Author (id, name, des, b_date, d_date, image_path)
VALUES (624,'Fukunaga Mitsuji', NULL, NULL, NULL, NULL);

INSERT INTO Author (id, name, des, b_date, d_date, image_path)
VALUES (625,'Roeland Schweitzer', NULL, NULL, NULL, NULL);

INSERT INTO Author (id, name, des, b_date, d_date, image_path)
VALUES (626,'Leon Zawadzki', NULL, NULL, NULL, NULL);

INSERT INTO Author (id, name, des, b_date, d_date, image_path)
VALUES (627,'', NULL, NULL, NULL, NULL);

BOOKS

INSERT INTO books (id, book_name, created_at, updated_at, language_id)
VALUES (12,"Tao Te King - Das Buch des Alten vom Sinn und Leben","2024-10-15 10:31:24","2024-10-15 10:31:24",10);

INSERT INTO books (id, book_name, created_at, updated_at, language_id)
VALUES (13,"Daodejing","2024-10-15 10:31:24","2024-10-15 10:31:24",11);

INSERT INTO books (id, book_name, created_at, updated_at, language_id)
VALUES (14,"老子道徳経","2024-10-15 10:31:24","2024-10-15 10:31:24",12);

INSERT INTO books (id, book_name, created_at, updated_at, language_id)
VALUES (15,"Daodejing","2024-10-15 10:31:24","2024-10-15 10:31:24",13);

INSERT INTO books (id, book_name, created_at, updated_at, language_id)
VALUES (16,"Tao-te-king - Drogi I Cnoty Księga","2024-10-15 10:31:24","2024-10-15 10:31:24",14);

INSERT INTO books (id, book_name, created_at, updated_at, language_id)
VALUES (17,"Tao Te King - Cartea Cărării Supremului Adevăr","2024-10-15 10:31:24","2024-10-15 10:31:24",15);
*/
/*BOOKS TRANSLATORS*/

INSERT INTO books_translators (translator_id, book_id, created_at, updated_at) 
VALUES (622, 12, "2024-10-15 10:31:24","2024-10-15 10:31:24"); 

INSERT INTO books_translators (translator_id, book_id, created_at, updated_at) 
VALUES (623, 13, "2024-10-15 10:31:24","2024-10-15 10:31:24");

INSERT INTO books_translators (translator_id, book_id, created_at, updated_at) 
VALUES (624, 14, "2024-10-15 10:31:24","2024-10-15 10:31:24"); 

INSERT INTO books_translators (translator_id, book_id, created_at, updated_at) 
VALUES (625, 15, "2024-10-15 10:31:24","2024-10-15 10:31:24"); 

INSERT INTO books_translators (translator_id, book_id, created_at, updated_at) 
VALUES (626, 16, "2024-10-15 10:31:24","2024-10-15 10:31:24"); 

INSERT INTO books_translators (translator_id, book_id, created_at, updated_at) 
VALUES (627, 17, "2024-10-15 10:31:24","2024-10-15 10:31:24");
