-- INSERT INTO Language (id, name, code)
-- VALUES (1, "chinese", "zh");

-- INSERT INTO Language (id, name, code)
-- VALUES (2, "bulgarian", "bg");

-- INSERT INTO Language (id, name, code)
-- VALUES (3, "czech", "cs");

-- INSERT INTO Language (id, name, code)
-- VALUES (4, "danish", "da");

-- INSERT INTO Language (id, name, code)
-- VALUES (5, "spanish", "es");

INSERT INTO Author_Name(id, author_id, name, des, language_id, created_at, updated_at)
VALUES (611, 249, "老子", "", 1, "2024-10-15 10:31:24", "2024-10-15 10:31:24");

INSERT INTO Author_Name(id, author_id, name, des, language_id, created_at, updated_at)
VALUES (612, 249, "Лао Дзъ", "", 2, "2024-10-15 10:31:24", "2024-10-15 10:31:24");

INSERT INTO Author_Name(id, author_id, name, des, language_id, created_at, updated_at)
VALUES (613, 249, "Lao-c’", "", 3, "2024-10-15 10:31:24", "2024-10-15 10:31:24");

INSERT INTO Author_Name(id, author_id, name, des, language_id, created_at, updated_at)
VALUES (614, 249, "Lao-tse", "", 4, "2024-10-15 10:31:24", "2024-10-15 10:31:24");

INSERT INTO Author_Name(id, author_id, name, des, language_id, created_at, updated_at)
VALUES (615, 249, "Lao-Tse", "", 5, "2024-10-15 10:31:24", "2024-10-15 10:31:24");

INSERT INTO Author (id, name, des, b_date, d_date, image_path)
VALUES (616,'Álex Ferrara', NULL, NULL, NULL, NULL);

INSERT INTO Author (id, name, des, b_date, d_date, image_path)
VALUES (612,'Heshang Gong', NULL, NULL, NULL, NULL);

INSERT INTO Author (id, name, des, b_date, d_date, image_path)
VALUES (613,'', NULL, NULL, NULL, NULL);

INSERT INTO Author (id, name, des, b_date, d_date, image_path)
VALUES (614,'Egon Bondy', NULL, NULL, NULL, NULL);

INSERT INTO Author (id, name, des, b_date, d_date, image_path)
VALUES (615,'Piao Yu-suen', NULL, NULL, NULL, NULL);

INSERT INTO books (id, book_name, created_at, updated_at, language_id)
VALUES (2, "道德經", "2024-10-13 14:44:45","2024-10-13 14:44:45",1);

INSERT INTO books (id, book_name, created_at, updated_at, language_id)
VALUES (3, "Дао Дъ Дзин", "2024-10-13 14:44:45","2024-10-13 14:44:45",2);

INSERT INTO books (id, book_name, created_at, updated_at, language_id)
VALUES (4, "Tao Te ťing", "2024-10-13 14:44:45","2024-10-13 14:44:45",3);

INSERT INTO books (id, book_name, created_at, updated_at, language_id)
VALUES (5, "Tao Te Ching", "2024-10-13 14:44:45","2024-10-13 14:44:45",4);

INSERT INTO books (id, book_name, created_at, updated_at, language_id)
VALUES (6, "Dàodé jīng", "2024-10-13 14:44:45","2024-10-13 14:44:45",5);

INSERT INTO books_translators (translator_id, book_id, created_at, updated_at) 
VALUES (612, 1, "2024-10-13 14:44:45","2024-10-13 14:44:45") ;

INSERT INTO books_translators (translator_id, book_id, created_at, updated_at) 
VALUES (613, 2, "2024-10-13 14:44:45","2024-10-13 14:44:45") ;

INSERT INTO books_translators (translator_id, book_id, created_at, updated_at) 
VALUES (614, 3, "2024-10-13 14:44:45","2024-10-13 14:44:45") ;

INSERT INTO books_translators (translator_id, book_id, created_at, updated_at) 
VALUES (615, 4, "2024-10-13 14:44:45","2024-10-13 14:44:45") ;

INSERT INTO books_translators (translator_id, book_id, created_at, updated_at) 
VALUES (616, 5, "2024-10-13 14:44:45","2024-10-13 14:44:45") ;