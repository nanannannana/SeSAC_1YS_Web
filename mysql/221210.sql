create table visitor (
	id int not null primary key auto_increment,
    name varchar(10) not null,
    comment mediumtext
);
desc visitor;
insert into visitor values(1,"홍길동","내가 왔다");
select * from user;
create table user2 (
	id varchar(15) not null primary key,
    pw varchar(20) not null,
    name varchar(10) not null
);
select * from user2;
