DROP DATABASE IF EXISTS playlistDB;
CREATE DATABASE playlistDB;

USE playlistDB;

CREATE TABLE songs(
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(45) NULL,
  artist VARCHAR(45) NULL,
  genre VARCHAR(45) NULL,
  PRIMARY KEY (id)
);

INSERT INTO songs (title, artist, genre)
VALUES ("Human", "Krewella", "Dance");

INSERT INTO songs (title, artist, genre)
VALUES ("TRNDSTTR","Black Coast", "Dance");

INSERT INTO songs (title, artist, genre)
VALUES ("Whos Next", "The Who", "Classic Rock");

INSERT INTO songs (title, artist, genre)
VALUES ("Yellow Submarine", "The Beatles", "Classic Rock");


INSERT INTO songs (title, artist, genre)
VALUES ("All of the Lights", "kanye", "Rap");


INSERT INTO songs (title, artist, genre)
VALUES ("Hard to Explain", "The Strokes", "Alternative Rock");


INSERT INTO songs (title, artist, genre)
VALUES ("Dum Surfer", "King Krule", "Punk");