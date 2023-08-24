
use sesac;
-- 1. create 문 실습
create table user (
	id varchar (10) not null primary key,
    pw varchar(20) not null,
    name varchar(5) not null,
    gender enum('F','M','') default '',
    birthday date not null,
    age int(3) not null default 0
);

desc user;

-- 2. insert 실습
insert into user value ('hong1234', '8o4bkg', '홍길동', 'M', '1990-01-31', 33),
('sexysung', '87awjkdf', '성춘향', 'F', '1992-03-31', 31),
('power70', 'qxur8sda', '변사또', 'M', '1970-05-02', 53),
('hanjo', 'jk48fn4', '한조', 'M', '1984-10-18', 39),
('widowmaker', '38ewifh3', '위도우', 'F', '1976-06-27', 47),
('dvadva', 'k3f3ah', '송하나', 'F', '2001-06-03', 22),
('jungkrat', '4ifha7f', '정크랫', 'M', '1999-11-11', 24);

select * from user;

-- 3. select 문 실습
-- 3-1
select * from user order by birthday asc;

-- 3-2
select * from user where gender = 'M' order by name desc;

-- 3-3
select id, name, birthday from user where birthday >= '1990-01-01' and birthday <= '1999-12-31';

-- 3-4
select * from user where birthday like '______6%' order by birthday asc;

-- 3-5
select * from user where gender = 'M' and birthday >= '1970-01-01' and birthday <= '1979-12-31';

-- 3-6
select * from user order by age desc limit 3;

-- 3-7
select * from user where age between 25 and 50;

-- 3-8
update user set pw = '12345678' where id = 'hong1234';
select * from user where id = 'hong1234';

-- 3-9
delete from user where id = 'jungkrat';
select * from user where id = 'jungkrat';

-- 선택 실습
-- < 실습 >
-- 아래 조건을 만족하는 SQL 문을 작성해주세요.
/*
authors, books, orders 이름을 갖는 3개의 테이블을 생성합니다. 
authors 테이블에는 author_id(기본 키), first_name, last_name 및 email의 4개 열이 있습니다. 
책 테이블에는 book_id(기본 키), title, author_id(작가 테이블에서 author_id 열을 참조하는 외부 키), publication_date의 네 개의 열이 있습니다. 
주문 테이블에는 order_id(기본 키), book_id(책 테이블의 book_id 열을 참조하는 외부 키), customer_name 및 order_date의 네 개의 열이 있습니다.
*/

create table authors (
    author_id int primary key not null,
    first_name varchar(50),
    last_name varchar(50),
    email varchar(50)
);
desc authors;

create table books (
    book_id int primary key not null,
    title varchar(100),
    author_id int,
    publication_date date,
    foreign key (author_id) references authors(author_id) on update cascade on delete cascade
);
desc books;

create table orders2 (
    order_id int primary key not null,
    book_id int,
    customer_name varchar(50),
    order_date date,
    foreign key (book_id) references books(book_id) on update cascade on delete cascade
);
desc orders;


/*
books 테이블의 author_id 컬럼은 authors 테이블의 author_id와 관계를 맺는다. 
(즉, 작가 테이블에 존재하는 작가만이 책 테이블에 데이터가 추가될 수 있다.)

orders 테이블의 book_id 컬럼은 books 테이블의 book_id와 관계를 맺는다. 
(즉, 책 테이블에 존재하는 책만이 주문 테이블에 데이터가 추가될 수 있다.)

*3가지 테이블의 자세한 정보는 추가 이미지를 참고할 것
*/
