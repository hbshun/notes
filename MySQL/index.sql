/*
索引
普通索引 唯一索引
单列索引 组合索引
全文索引
空间索引 geometry point linestring polygon
*/

/*
创建索引
create table table_name [col_name data_type]
[unique|fulltext|spatial] index|key [index_name] (col_name[length])[asc|desc]

alter table table_name
add [unique|fulltext|spatial] index|key [index_name] (col_name[length])[asc|desc]

create [unique|fulltext|spatial] index|key [index_name]
	on table_name (col_name[length])[asc|desc]
*/

/*
查看索引情况
explain select语句
show index from table_name
*/

/*
删除索引
alter table table_name drop index index_name
drop index index_name on table_name
*/

use employees;

alter table employees
add index index_hire_date (hire_date desc);

show index from employees;

explain select * 
from employees
order by hire_date;

drop index index_hire_date on employees;

select * 
from employees
order by hire_date asc
limit 0,300000;
/*感觉没有变化 是不是写的有错误？*/

/*再来一个*/
alter table employees
add index index_first_name (first_name);

drop index index_first_name on employees;

select * 
from employees
order by first_name
limit 0,300000;
/*这个可以哦 0.25s/0.515s*/