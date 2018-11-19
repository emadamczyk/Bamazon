CREATE DATABASE bamazon_db;

USE bamazon_db;


CREATE TABLE products (
	id INT(15) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(255) NOT NULL,
    department_name VARCHAR(255) NOT NULL,
    price DECIMAL(10) NOT NULL,
    stock_quantity INT(10) NOT NULL,
);
