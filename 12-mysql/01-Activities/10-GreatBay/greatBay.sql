DROP DATABASE IF EXISTS bidDB;

CREATE DATABASE bidDB;

USE bidDB;

CREATE TABLE jobs (
  id INT NOT NULL AUTO_INCREMENT,
  price INT NOT NULL,
  os VARCHAR(25) NOT NULL,
  issue VARCHAR(25) NOT NULL,
  PRIMARY KEY (id)
);