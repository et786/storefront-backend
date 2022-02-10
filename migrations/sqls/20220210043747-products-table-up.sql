CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    category VARCHAR(255),
    description VARCHAR(255),
    price FLOAT NOT NULL,
    available BOOLEAN 
);