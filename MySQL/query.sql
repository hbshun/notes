/*
test data
wget https://launchpadlibrarian.net/24493586/employees_db-full-1.0.6.tar.bz2
tar -jxvf employees_db-full-1.0.6.tar.bz2
cd employees
mysql -u root -p -t < employees.sql
*/


/*
select
from
where 
group by 
having
order by
limit
*/

show databases;

use employees;

show tables;

describe departments;
describe dept_emp;
describe dept_manager;
describe employees;
describe salaries;
describe titles;

select emp_no,birth_date,first_name,last_name,gender,hire_date
from employees.employees;

select emp_no,birth_date,first_name,last_name,gender,hire_date
from employees.employees
where first_name like '%guo%' && birth_date > '1950-01-01';

select emp_no,birth_date, first_name,last_name,gender,hire_date
from employees.employees
where first_name like '%guo%' && birth_date BETWEEN '1960-01-01' AND '1962-12-31' && gender IN ('M','T')
order by first_name asc,birth_date desc;/*排序*/

/*去除重复字段*/
select DISTINCT first_name 
from employees.employees
where first_name like '%guo%' && birth_date BETWEEN '1960-01-01' AND '1960-12-31' && gender IN ('M','T')
order by first_name asc,birth_date desc;
select first_name 
from employees.employees
where first_name like '%guo%' && birth_date BETWEEN '1960-01-01' AND '1960-12-31' && gender IN ('M','T')
order by first_name asc,birth_date desc;


/*分组查询*/
/*group by*/
/*having*/
select first_name,count(*),group_concat(first_name,' ',last_name) as name
from employees.employees
where first_name like '%guo%'
group by first_name;
select first_name,count(*) as total,group_concat(first_name,' ',last_name)
from employees.employees
where first_name like '%guo%'
group by first_name having count(*)<250;

select first_name,count(*),group_concat(first_name,' ',last_name)
from employees.employees
where first_name like '%guo%'
group by first_name with rollup;
/*多字段分组*/
select first_name, gender,count(*),group_concat(first_name,' ',last_name)
from employees.employees
where first_name like '%guo%'
group by first_name,gender;
select first_name, gender,count(*),group_concat(first_name,' ',last_name)
from employees.employees
where first_name like '%guo%'
group by first_name,gender with rollup;/* */

select first_name, gender,count(*),group_concat(first_name,' ',last_name)
from employees.employees
where first_name like '%guo%'
group by first_name,gender
order by count(*);/*order 和 with rollup 不能共用*/

select first_name, gender,count(*) as total,group_concat(first_name,' ',last_name)
from employees.employees
where first_name like '%guo%'
group by first_name,gender
order by total;


/*聚合函数*/
select count(*) as sum_count
from employees.employees;
/*
avg()
count()
max()
min()
sum()
*/








