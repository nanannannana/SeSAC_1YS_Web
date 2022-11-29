USE 데이터베이스;
CREATE TABLE MEMBER(
	ID VARCHAR(10) NOT NULL primary key, -- primary key지정
    NAME VARCHAR(5) NOT NULL default "홍길동", -- 기본값 지정
    BIRTHDAY DATE
);

desc member;
-- DDL/alter
alter table member drop column birthday; 
alter table member add column birthday date; -- column명, type
alter table member modify birthday date not null;
-- DDL/drop,truncate
drop table member; -- table 삭제
truncate table user; -- truncate table 테이블명; table 안에 있는 모든 data 삭제
-- sql 공통
show tables; -- 선택한 데이터베이스 내 table 확인
show databases; -- mysql 내 datebase 확인


-- 실습1
alter table member drop column birthday;
alter table member add column age int;
alter table member add column gender varchar(2) not null;
alter table member add column email varchar(50);
alter table member add column promotion varchar(2) default "x";
alter table member modify column id varchar(20) primary key;
desc member;
-- 실습2
alter table member modify column id varchar(10);
alter table member drop column age;
alter table member add column interest varchar(100);

-- dml
create table user(
	ID VARCHAR(10) NOT NULL primary key, -- primary key지정
    NAME VARCHAR(5) NOT NULL, -- 기본값 지정
    age int not null
);
show tables;
desc user;
insert into user(id, name, age) values("a","서예지",100);
insert into user(id, name, age) values("b","서예지",99);
insert into user values("c","서예징",98); -- field생략할 시 field에 해댱하는 value를 모두 적어야 함
select * from user;
select id,name from user;
select * from user where name="서예징"; -- where은 조건절
select * from user order by id desc limit 2; -- limit 가장 마지막에 위치
-- where절 sql연산자/논리연산자
select * from user where name in('서예징','홍길동'); -- in()은 or과 의미가 같음
select * from user where name like '%서%'; -- like는 조건에 부합하는 데이터 출력
select * from user where name like '_예_'; -- 언더바(_)는 한 글자 취급
select * from user where name is not null and age between 80 and 99;
-- update와 delete
update user set age=20 where id = "a"; -- update 테이블명 set 변경할 내용 where 조건;
delete from user where id = "a"; -- delete from 테이블명 where 조건;

-- 실습3
drop table user;
create table user(
	id varchar(10) not null primary key,
    pw varchar(20) not null,
    name varchar(5) not null,
    gender ENUM('f','m','') default '',
    birthday date not null,
    age int(3) not null default 0
);
desc user;
select * from user;
insert into user values("hong1234","8o4bkg","홍길동","M","1990-01-31",33);
insert into user values("sexysung","87awjkdf","성춘향","F","1992-03-31",31);
insert into user values("power70","qxur8sda","변사또","M","1970-05-02",53);
insert into user values("hanjo","jk48fn4","한조","M","1984-10-18",39);
insert into user values("widowmaker","38ewifh3","위도우","F","1976-06-27",47);
insert into user values("dvadva","k3f3ah","송하나","F","2001-06-03",22);
insert into user values("jungkrat","4ifha7f","정크랫","M","1999-11-11",24);

select * from user order by birthday;  -- 01
select * from user where gender="M" order by name desc; -- 02
select id,name from user where birthday like "199_-%-%"; -- 03
select * from user where date_format(birthday, "%m") = "06" order by birthday; -- 04
select * from user where birthday like "%-06-%" order by birthday;
select * from user where gender="m" and birthday like "197_-%-%"; -- 05
select * from user order by age desc limit 3; -- 06
select * from user where age between 25 and 50; -- 07
update user set pw="12345678" where id="hong1234"; -- 08
delete from user where id="jungkrat"; -- 09

# mysql 사용자 추가하기
CREATE USER 'user'@'%' IDENTIFIED BY '12123'; -- user만듦
# DB 권한 부여 (모든 DB에 접근 가능하도록)
GRANT ALL PRIVILEGES ON *.* TO 'user'@'%' WITH GRANT OPTION;
# 현재 사용중인 MySQL의 캐시를 지우고 새로운 설정을 적용하기 위해 사용
FLUSH PRIVILEGES;
# 현재 사용자에 대한 정보 출력
select host, user, plugin, authentication_string from mysql.user;
# mysql 계정 비밀번호를 바꾸고 싶을 때
ALTER USER 'user'@'%' IDENTIFIED WITH mysql_native_password BY '12123';
# 결과적으로, 변경한 내용으로 mysql에 로그인 가능