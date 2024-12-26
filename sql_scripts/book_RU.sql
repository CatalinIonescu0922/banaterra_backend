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
/*LANGUAGE*/
/*
INSERT INTO Language (id, name, code)
VALUES (16, "russian", "ru");

INSERT INTO Language (id, name, code)
VALUES (17, "swedish", "sv");

INSERT INTO Language (id, name, code)
VALUES (18, "ukrainian", "uk");

INSERT INTO Language (id, name, code)
VALUES (19, "persian", "fa");

INSERT INTO Language (id, name, code)
VALUES (20, "korean", "ko");
*/
/*AUTHOR NAME*/
/*
INSERT INTO Author_Name(id, author_id, name, des, language_id, created_at, updated_at)
VALUES (627, 249, "Лао-цзы", "", 16, "2024-10-15 10:31:24", "2024-10-15 10:31:24");
*/
INSERT INTO Author_Name(id,author_id, name, des, language_id, created_at, updated_at)
VALUES (628, 249, "Lao Zi", "", 17, "2024-10-15 10:31:24", "2024-10-15 10:31:24");

INSERT INTO Author_Name(id, author_id,name, des, language_id, created_at, updated_at)
VALUES (629, 249, "Лао-Цзи", "", 18, "2024-10-15 10:31:24", "2024-10-15 10:31:24");

INSERT INTO Author_Name(id,author_id, name, des, language_id, created_at, updated_at)
VALUES (630, 249, "لائوتسه", "", 19, "2024-10-15 10:31:24", "2024-10-15 10:31:24");

INSERT INTO Author_Name(id,author_id, name, des, language_id, created_at, updated_at)
VALUES (631, 249, "노자", "", 20, "2024-10-15 10:31:24", "2024-10-15 10:31:24");

/*AUTHOR*/

INSERT INTO Author (id, name, des, b_date, d_date, image_path)
VALUES (628,'Д. П. Кониееи.', NULL, NULL, NULL, NULL);

INSERT INTO Author (id, name, des, b_date, d_date, image_path)
VALUES (629,'Gordon Sandgren', NULL, NULL, NULL, NULL);

INSERT INTO Author (id, name, des, b_date, d_date, image_path)
VALUES (630,'', NULL, NULL, NULL, NULL);

INSERT INTO Author (id, name, des, b_date, d_date, image_path)
VALUES (631,'فرشيد قهرماني', NULL, NULL, NULL, NULL);

INSERT INTO Author (id, name, des, b_date, d_date, image_path)
VALUES (632,'오강남', NULL, NULL, NULL, NULL);

/*BOOKS*/

INSERT INTO books (id, book_name, created_at, updated_at, language_id)
VALUES (18,"Тао-Те-Кинг","2024-10-15 10:31:24","2024-10-15 10:31:24",16);

INSERT INTO books (id, book_name, created_at, updated_at, language_id)
VALUES (19,"Daodejing","2024-10-15 10:31:24","2024-10-15 10:31:24",17);

INSERT INTO books (id, book_name, created_at, updated_at, language_id)
VALUES (20,"Дао-Де-Цзин","2024-10-15 10:31:24","2024-10-15 10:31:24",18);

INSERT INTO books (id, book_name, created_at, updated_at, language_id)
VALUES (21,"تائو ت چینگ","2024-10-15 10:31:24","2024-10-15 10:31:24",19);

INSERT INTO books (id, book_name, created_at, updated_at, language_id)
VALUES (22,"도덕경","2024-10-15 10:31:24","2024-10-15 10:31:24",20);


/*BOOKS TRANSLATORS*/

INSERT INTO books_translators (translator_id, book_id, created_at, updated_at) 
VALUES (628, 18, "2024-10-15 10:31:24","2024-10-15 10:31:24"); 

INSERT INTO books_translators (translator_id, book_id, created_at, updated_at) 
VALUES (629, 19, "2024-10-15 10:31:24","2024-10-15 10:31:24");

INSERT INTO books_translators (translator_id, book_id, created_at, updated_at) 
VALUES (630, 20, "2024-10-15 10:31:24","2024-10-15 10:31:24"); 

INSERT INTO books_translators (translator_id, book_id, created_at, updated_at) 
VALUES (631, 21, "2024-10-15 10:31:24","2024-10-15 10:31:24") ;

INSERT INTO books_translators (translator_id, book_id, created_at, updated_at) 
VALUES (632, 22, "2024-10-15 10:31:24","2024-10-15 10:31:24") ;


