/*
tinyint smallint mediumint int bigint 
float double
decimal
year time date datetime timestamp
char varchar binary varbinary blob text enum set
*/

/*显示宽度只用于显示，并不能限制取值范围和占用空间*/

create table tmp1(
x tinyint,
y smallint,
z mediumint,
m int,
n bigint
);

desc tmp1;

/*YEAR 1901-2155*/
create table tmp2
(
y year
);

insert into tmp2 values(2005),('2012'),('78'),(8),(20),(100),(2266);/*最后两个出错*/

/*TIME  -838:59:59~838:59:59*/
create table tmp3
(
t time
);
/*
HH:MM:SS
HHHMMSS
MMSS
MSS
D HH:MM
D HH
SS
*/

insert into tmp3 values('10 10:20:30'),('10:12'),('5'),('111213'),('5111213');
insert into tmp3 values('98');
insert into tmp3 values('9 8'),('1 15');/*前者时间为00:00:09*/
insert into tmp3 values(now()),(current_time()),(current_time);

/*DATE YYYY-MM-DD 1000-01-01~9999-12-31*/
create table tmp4
(
d date
);

insert into tmp4 values('1998-08-08'),('2000/2/15'),('20121212'),(20161216),(99991231);
insert into tmp4 values('111111'),('99*12*21');
insert into tmp4 values(111111),('99+12+21');
insert into tmp4 values(current_date()),(curdate()),(now());

/*DATETIME YYYY-MM-DD HH:MM:SS  1000-01-01 00:00:00 ~ 9999-12-31 23:59:59*/

/*TIMESTAMP 1970-01-01 00:00:01UTC ~ 2038-01-19 03:14:17UTC*/
/*与时区相关*/
create table tmp5
(
t timestamp
);

insert into tmp5 values('2038-01-19 11:14:07');
insert into tmp5 values(2147483647);/*warning 不支持毫秒数*/


/*CHAR(M)*/
/*VARCHAR(M)*/
/*TINYTEXT*/
/*TEXT*/
/*MEDIUMTEXT*/
/*LONGTEXT*/
/*ENUM*/
/*SET*/
/*BLOB(M)*/
/*BIT(M)*/
/*BINARY(M)*/
/*VARBINARY(M)*/
/*TINYBLOB(M)*/
/*BLOB(M)*/
/*MEDIUMBLOB(M)*/
/*LONGBLOB(M)*/
/**/























