DROP DATABASE IF EXISTS GOODCAMP_DB;

CREATE DATABASE GOODCAMP_DB;

USE GOODCAMP_DB;

DROP TABLE IF EXISTS IMAGES;
CREATE TABLE IMAGES (
  ID INT NOT NULL AUTO_INCREMENT,
  NAME VARCHAR(150) NOT NULL,
  PATH VARCHAR(1000),
  ORIGINALNAME VARCHAR(150),
  MIMETYPE VARCHAR(150),
  DESTINATION VARCHAR(255),
  SIZE INT,
  CREATEDAT TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (ID)
);

DROP TABLE IF EXISTS USERS;
CREATE TABLE USERS (
  ID INT NOT NULL AUTO_INCREMENT,
  FIRST_NAME VARCHAR(100) NOT NULL,
  LAST_NAME  VARCHAR(100) NOT NULL,
  EMAIL      VARCHAR(100) NOT NULL,
  PASSWORD VARCHAR(100),
  POSTAL   VARCHAR(5),
  ADDRESS    VARCHAR(255),
  CREATEDAT TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (ID)
);

DROP TABLE IF EXISTS CATEGORIES;
CREATE TABLE CATEGORIES (
  ID INT NOT NULL AUTO_INCREMENT,
  NAME VARCHAR(100) NOT NULL,
  CREATEDAT TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  
  PRIMARY KEY (ID)
);

DROP TABLE IF EXISTS PLACES;
CREATE TABLE PLACES (
  ID INT NOT NULL AUTO_INCREMENT,
  LOCATION VARCHAR(1000) NOT NULL,
  DESCRIPTION VARCHAR(1000),
  CATEGORY_ID INT NOT NULL,
  OWNER_ID INT NOT NULL,
  GUEST_ID INT,
  IMAGE_ID INT,
  PENDING BOOLEAN DEFAULT FALSE,
  AVAILABLE_DATE DATE,
  AVAILABLE_PERIOD INT,
  OCCUPIED_DATE DATE,
  OCCUPIED_PERIOD INT,
  COST DECIMAL(9,2),
  CREATEDAT TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (ID)
);

ALTER TABLE PLACES
ADD FOREIGN KEY PLACES_FK1(CATEGORY_ID)
REFERENCES CATEGORIES(ID);
ALTER TABLE PLACES
ADD FOREIGN KEY PLACES_FK2(OWNER_ID)
  REFERENCES USERS(ID);
ALTER TABLE PLACES
ADD FOREIGN KEY PLACES_FK3(GUEST_ID)
  REFERENCES USERS(ID);
ALTER TABLE PLACES
ADD FOREIGN KEY PLACES_FK4(IMAGE_ID)
  REFERENCES IMAGES(ID);