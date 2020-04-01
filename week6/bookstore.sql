CREATE DATABASE bookstore;
SHOW DATABASES;
USE bookstore;
CREATE table books
(
category varchar(45),
year_published year,
author varchar(35),
title varchar(50),
qty int
);
insert into books (category, year_published, author, title, qty) values("fiction", 1976, "James Howard", "Back in the Day", 1500);
insert into books (qty, title, category, year_published, author) values (10000, "The Year of Jazz", "nonfiction", 1997, "Rodger Jeffers");
insert into books (year_published, category, author, qty, title) values (2009, "home improvement", "Richard Rodgers", 2500, "How to Build a Deck");
insert into books (author, qty, year_published, title, category) values ("Wendy Nelson", 5000, 1989, "This Little Bear", "childrens_novels");
show tables;

SELECT * from books;
DELETE from books where title = "This Little Bear";
UPDATE books SET author = "Rodger Jefferson" WHERE author = "Rodger Jeffers"; 
SELECT * from books;
