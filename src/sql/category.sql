CREATE TABLE category (
    id SERIAL PRIMARY KEY,
    name VARCHAR(48),
    icon TEXT
);

INSERT INTO category (
    name, icon
) VALUES ('fastfood', 'fastfood.png');