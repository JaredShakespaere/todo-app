CREATE DATABASE todo_database;

CREATE TABLE todo(
  todo_id SERIAL PRIMARY KEY NOT NULL,
  description VARCHAR(255)
);

ALTER TABLE todo(
  ADD title VARCHAR(250),
  dueDate DATE;
);
