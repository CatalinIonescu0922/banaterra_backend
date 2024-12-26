
/* 

!!! DE PUS legatura noului translator


INSERT INTO Topic (id, name)
VALUES (1,"test")



INSERT INTO Language (id, name, code)
VALUES (6,"estonian","et");

INSERT INTO Language (id, name, code)
VALUES (7,"finnish","fi");

INSERT INTO Language (id, name, code)
VALUES (8,"french","fr");

INSERT INTO Language (id, name, code)
VALUES (9,"greek","gr");
*/

INSERT InTO Author_Name (id, author_id, name, des, language_id, created_at, updated_at)
VALUES (616,249, "Laozi", "", 6, "2024-10-15 10:31:24","2024-10-15 10:31:24");

INSERT InTO Author_Name (id, author_id, name, des, language_id, created_at, updated_at)
VALUES (617,249, "Laozi", "", 7, "2024-10-15 10:31:24","2024-10-15 10:31:24");

INSERT InTO Author_Name (id, author_id, name, des, language_id, created_at, updated_at)
VALUES (618,249, "Lao Tseu", "", 8, "2024-10-15 10:31:24","2024-10-15 10:31:24");

INSERT InTO Author_Name (id, author_id,name, des, language_id, created_at, updated_at)
VALUES (619,249, "Λαο Τσε", "", 9, "2024-10-15 10:31:24","2024-10-15 10:31:24");

INSERT InTO Author_Name (id, author_id,name, des, language_id, created_at, updated_at)
VALUES (620,249, "Lao Ce", "", 40, "2024-10-15 10:31:24","2024-10-15 10:31:24");

INSERT INTO Author (id, name, des, b_date, d_date, image_path)
VALUES (617,'Jaan Kaplinski', NULL, NULL, NULL, NULL);

INSERT INTO Author (id, name, des, b_date, d_date, image_path)
VALUES (618,'Pekka Ervast', NULL, NULL, NULL, NULL);

INSERT INTO Author (id, name, des, b_date, d_date, image_path)
VALUES (619,'Léon Wieger', NULL, NULL, NULL, NULL);

INSERT INTO Author (id, name, des, b_date, d_date, image_path)
VALUES (620,'Νικόλα Ρώσση', NULL, NULL, NULL, NULL);

INSERT INTO Author (id, name, des, b_date, d_date, image_path)
VALUES (621,'Ágner Lajos', NULL, NULL, NULL, NULL);


INSERT INTO books (id, book_name, created_at, updated_at, language_id)
VALUES (7,"Daodejing","2024-10-15 10:31:24","2024-10-15 10:31:24",6);

INSERT INTO books (id, book_name, created_at, updated_at, language_id)
VALUES (8,"Daodejing","2024-10-15 10:31:24","2024-10-15 10:31:24",7);

INSERT INTO books (id, book_name, created_at, updated_at, language_id)
VALUES (9,"Dao de jing","2024-10-15 10:31:24","2024-10-15 10:31:24",8);

INSERT INTO books (id, book_name, created_at, updated_at, language_id)
VALUES (10,"Ταό Τε Τσινγκ","2024-10-15 10:31:24","2024-10-15 10:31:24",9);

INSERT INTO books (id, book_name, created_at, updated_at, language_id)
VALUES (11,"A Legfőbb lényről és az Erényről, Lao-ce Tao te Kingje","2024-10-15 10:31:24","2024-10-15 10:31:24",40);

INSERT INTO books_translators (translator_id, book_id, created_at, updated_at) 
VALUES (617, 7, "2024-10-15 10:31:24","2024-10-15 10:31:24");

INSERT INTO books_translators (translator_id, book_id, created_at, updated_at) 
VALUES (618, 8, "2024-10-15 10:31:24","2024-10-15 10:31:24"); 

INSERT INTO books_translators (translator_id, book_id, created_at, updated_at) 
VALUES (619, 9, "2024-10-15 10:31:24","2024-10-15 10:31:24"); 

INSERT INTO books_translators (translator_id, book_id, created_at, updated_at) 
VALUES (620, 10, "2024-10-15 10:31:24","2024-10-15 10:31:24"); 

INSERT INTO books_translators (translator_id, book_id, created_at, updated_at) 
VALUES (621, 11, "2024-10-15 10:31:24","2024-10-15 10:31:24"); 

