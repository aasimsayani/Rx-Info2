
CREATE TABLE drugs_comments (
id SERIAL PRIMARY KEY,
name VARCHAR(255) UNIQUE NOT NULL,
comment TEXT,
consent TEXT
);
