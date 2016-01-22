CREATE DATABASE grade_school;

CREATE TABLE classes (
  id SERIAL4 PRIMARY KEY,
  name VARCHAR(100),
  grade INTEGER
)

INSERT INTO classes (name, grade) VALUES ('John Smith', 4);

INSERT INTO classes (name, grade) VALUES ('Lizzy Eilzabethson', 2);
