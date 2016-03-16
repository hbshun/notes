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
