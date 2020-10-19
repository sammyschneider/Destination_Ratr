--CREATE DATABASE
CREATE DATABASE destination_ratr;
\c destination_ratr;

--CREATE TABLE
CREATE TABLE destination(
  id SERIAL,
  location varchar(255),
  img varchar(255),
  rating int,
  cost int,
  title varchar(255),
  dated text,
  description text
);
