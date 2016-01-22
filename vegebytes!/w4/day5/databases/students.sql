CREATE DATABASE ga;

CREATE TABLE students (
  id SERIAL4 PRIMARY KEY,
  firstname VARCHAR(100),
  lastname VARCHAR(100),
  dob DATE,
  gpa FLOAT8
);

SELECT * FROM students;

INSERT INTO students (firstname, lastname, dob, gpa) VALUES ('vege', 'byte', '1/1/2015', 4);

INSERT INTO students (firstname, lastname, dob, gpa) VALUES ('joe', 'dirt', '1/2/1990', 3.2);

INSERT INTO students (firstname, lastname, dob, gpa) VALUES ('joe', 'black', '3/4/1950', 1.3);

INSERT INTO students (firstname, lastname, dob, gpa) VALUES ('gary', 'barlow', '9/15/1998', 2.2);
INSERT INTO students (firstname, lastname, dob, gpa) VALUES ('riyad', 'mahrez', '11/28/2001', 3);
INSERT INTO students (firstname, lastname, dob, gpa) VALUES ('luke', 'vardy', '12/11/2004', 2.8);

UPDATE students SET firstname = 'jolly' WHERE id = 3;
-- this is how to select and change specific areas of the DATABASE

DELETE FROM students WHERE id = 3;
-- this is how to delete records

-- you can do selections like:
-- select * from students WHERE gpa > 2.0 and gpa < 4.0;

-- To select how many records there are:
-- select count(*) from students;

-- to do an average:
-- select avg(gpa) from students;

-- Select the lowest gpa:
-- select min(gpa) from students;