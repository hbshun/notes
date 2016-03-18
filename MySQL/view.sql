/*
视图
简单化 安全性 逻辑数据独立性
*/


/*
创建视图
create[or replace] [algorithm={undefined|merge|temptable}]
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

create view emp_detp (emp_no,emp_name,gender,dept_no,dept_name,from_date,to_date)
as 
select employees.emp_no,concat(employees.first_name,' ',employees.last_name) as emp_name,employees.gender,
	departments.dept_no,departments.dept_name,dept_emp.from_date,dept_emp.to_date
from employees,dept_emp,departments 
where employees.emp_no = dept_emp.emp_no and dept_emp.dept_no = departments.dept_no;

create or replace view emp_detp (emp_no,emp_name,gender,dept_no,dept_name,from_date,to_date)
as 
select employees.emp_no,concat(employees.first_name,' ',employees.last_name) as emp_name,employees.gender,
	departments.dept_no,departments.dept_name,dept_emp.from_date,dept_emp.to_date
from employees,dept_emp,departments 
where employees.emp_no = dept_emp.emp_no and dept_emp.dept_no = departments.dept_no;

describe emp_detp;
drop view if exists emp_detp;
/*
没有找到视图重命名的方法
*/

create or replace view emp_dept (emp_no,emp_name,gender,dept_no,dept_name,from_date,to_date)
as 
select employees.emp_no,concat(employees.first_name,' ',employees.last_name) as emp_name,employees.gender,
	departments.dept_no,departments.dept_name,dept_emp.from_date,dept_emp.to_date
from employees,dept_emp,departments 
where employees.emp_no = dept_emp.emp_no and dept_emp.dept_no = departments.dept_no;





