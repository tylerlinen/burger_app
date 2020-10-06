create database burgers_db;

use burgers_db;

Create table burgers(
    id INT auto_increment,
    burgerName varchar(100),
    devoured boolean,
    Primary Key (id)
);
