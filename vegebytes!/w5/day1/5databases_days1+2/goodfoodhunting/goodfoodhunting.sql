CREATE DATABASE goodfoodhunting;

CREATE TABLE dishes (
  id SERIAL4 PRIMARY KEY, -- the number after serial shows how many numbers can be in that id
  name VARCHAR(100) NOT NULL, -- not null means there has to be something in there
  image_url VARCHAR(200), -- the number means the max amount of characters in the string
  venue VARCHAR(100)
);

INSERT INTO dishes (name, image_url) VALUES ('fried donuts', 'http://s3.amazonaws.com/foodspotting-ec2/reviews/5714113/thumb_600.jpg?1453015528?1453075084', 'Niji Sushi Bar');

INSERT INTO dishes (name, image_url) VALUES ('saag bheda', 'http://s3.amazonaws.com/foodspotting-ec2/reviews/5714183/thumb_600.jpg?1453026044?1453075141', 'Mandala Nepalese Restaurant');

CREATE TABLE dish_types (
  id SERIAL4 PRIMARY KEY,
  name VARCHAR(100) NOT NULL
);

INSERT INTO dish_types (name) VALUES ('snack');
INSERT INTO dish_types (name) VALUES ('dessert');
INSERT INTO dish_types (name) VALUES ('lunch');

-- How to alter a table to add the column dish_types column into the dishes table

ALTER TABLE dishes ADD dish_type_id INTEGER;

