/*DML,database manipulation language*/
/*insert update delete*/

create table person(
id int(18) auto_increment primary key ,
name varchar(20) not null,
gender enum('M','F'),
phone varchar(11)
);

select * from person;

/*插入数据*/
insert into person values(20,'bang','M','123456');
insert into person values(20,'bangbang','M','1234563');/*error*/
insert into person values(21,'bangbang','M');/*error. doesn't match*/
insert into person values(21,'bangbang','M',null);
insert into person values(22,'bangshun','H',null);/*warning */
insert into person values(23,'bangshun2',null,'1231456');
insert into person values(24,null,null,'1231456');/*error*/
insert into person values(24,,null,'1231456');/*语法错误 error*/
/*不指定字段如何 让id自增？？-----null*/
insert into person values(null,'bang',null,'1231456');

insert into person(name,gender) values('bang5','M','1234563');/*error. doesn't match */
insert into person(name,gender) values('bang5','M');/**得到id24*/

insert into person(name,gender) values('bang6','M'),('yy','F'),('bb','m'),('bb','');/*m变成了M，空仍为空*/
/*插入查询结果*/
insert into person(name,gender)
select concat(first_name,' ',last_name),gender
from employees
where birth_date>'1965-01-01';/*warning 部分名字太长*/
insert into person(name,gender) values('Adamantios Vanwelkenhuysen','M');/*名字太长*/


/*更新数据*/

update person 
set name='邦',phone='465'
where id=20;/*warning. incorrect string value*/

update person 
set name='hbshun',phone='465'
where id=20;

/*删除数据*/
delete 
from person 
where id>50;

delete 
from person;/*mysql workbench 报错。safe model 删除和更新 需要where条件
Error Code: 1175. You are using safe update mode 
and you tried to update a table without a WHERE that uses a KEY column To disable safe mode, 
toggle the option in Preferences -> SQL Editor and reconnect.
*/




