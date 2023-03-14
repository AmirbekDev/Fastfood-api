create table verification (
    id Text Unique not null,
    code Varchar(6),
    email Varchar(128),
    created_at Timestamp default current_timestamp
);

insert into verification (id, code, email) values ('asdfasdfasdf', '123456', 'amiryusupov.070@gmail.com');