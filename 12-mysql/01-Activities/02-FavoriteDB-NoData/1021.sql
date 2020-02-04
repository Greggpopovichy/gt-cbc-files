CREATE DATABASE favorite_db;

USE favorite_db;

CREATE TABLE favorite_foods (
	food VARCHAR(50) NOT NULL,
    score INTEGER(10)
);

CREATE TABLE favorite_songs(
	song VARCHAR(100) NOT NULL,
    artist VARCHAR(50) NOT NULL,
    score INTEGER(10)
);

CREATE TABLE favorite_movies(
	film VARCHAR(100) NOT NULL,
    five_times BOOLEAN DEFAULT FALSE,
    score INTEGER(10)
);
CREATE TABLE people(
	name VARCHAR(30) NOT NULL,
    has_pet BOOLEAN NOT NULL,
    pet_name VARCHAR(30),
    pet_age INTEGER(10)
);

INSERT INTO people(name, has_pet, pet_name, pet_age)
VALUES ("Charlie", true, "Ollie", 1);
