/*
视图
简单化 安全性 逻辑数据独立性
*/


/*
创建视图
create|replace [algorithm={undefined|merge|temptable}]
	view view_name [(column_list)]
	as select_statement
	[with [cascaded|local] check option]


describe view_name
show table status like view_name
show create view view_name
select * from view_name
*/

/*
修改视图
alter [algorithm={undefined|merge|temptable}]
	view view_name [(column_list)]
	as select_statement
	[with [cascaded|local] check option]
*/

/*
更新视图
update view_name set 
*/

/*
删除视图
drop view if exists
view_name[,view_name]
[restrict|cascade]
*/