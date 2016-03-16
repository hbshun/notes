/*内连接，外连接（左、右、全），交叉连接，自身连接*/


/*内连接 Inner Join*/

select dept.dept_no,dept.dept_name,man.emp_no
from employees.departments dept,employees.dept_manager man
where dept.dept_no = man.dept_no;

select man.emp_no,emp.first_name
from employees.dept_manager man inner join employees.employees emp
on emp.emp_no = man.emp_no
order by man.emp_no;

select dept.dept_no,dept.dept_name,man.emp_no,concat(emp.first_name,' ',emp.last_name) as manager_name
from employees.departments dept,employees.dept_manager man,employees.employees emp
where dept.dept_no = man.dept_no && man.emp_no = emp.emp_no;



/**外连接*/
/*Left Join*/
select dept.dept_no,dept.dept_name,man.emp_no
from employees.departments dept left /*outer*/ join employees.dept_manager man
on dept.dept_no = man.dept_no;
select emp.first_name,man.emp_no
from employees.employees emp left /*outer*/ join employees.dept_manager man
on emp.emp_no = man.emp_no
order by man.emp_no;

/*Right Join*/
select man.emp_no,emp.first_name
from  employees.dept_manager man right /*outer*/ join employees.employees emp
on emp.emp_no = man.emp_no
order by man.emp_no;

/*Full Join*/
