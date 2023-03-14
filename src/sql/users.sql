CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(128),
    password VARCHAR(48),
    name VARCHAR(48),
    surname VARCHAR(48),
    birthday VARCHAR(16),
    phone Varchar(36),
    is_confirmed Boolean,
    role VARCHAR(16),
    token VARCHAR(256)
);

insert into users (
    email, password, name, surname, birthday, phone, is_confirmed, role, token
) values ('amiryusupov.7717@gmail.com', '1234', 'Amir', 'Yusupov', '2009-02-01', 901234567, false, 'user', '234y234u4hi2u34yiu23y423uy4');