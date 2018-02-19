-- Drops the burgers if it exists currently --
DROP DATABASE IF EXISTS burgers;
-- Creates the "burgers" database --
CREATE DATABASE burgers;
CREATE TABLE burgers (
	id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
	burger_name VARCHAR(255),
	devoured BOOLEAN DEFAULT FALSE
);

CREATE TABLE customers (
	id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
	customer_name VARCHAR(255),
	createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	burgerId INT,
	FOREIGN KEY (burgerId) REFERENCES burgers(id)
);