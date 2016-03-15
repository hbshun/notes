show databases;
create database bang;
show create database bang;
drop database bang;
show engines;
show variables like 'storage_engine';
use bang;
create table tbl_emp
(
id int(11),
name varchar(25),
deptID int(11) /*default 1111*/,
primary key (id)
/**primary key(name,deptID)*/
/*constraint fk_emp_dept foreign key(deptID) references tbl_dept(id)*/
);

create table tbl_dept(
id int(11)/* primary key auto_increment*/,
name varchar(25)/* not null unique*/,
location varchar(100)
);

describe tbl_emp;
desc tbl_emp;

/**修改表名*/
alter table tbl_dept rename tbl_dept2;
alter table tbl_dept2 rename tbl_dept;

/*修改字段数据类型*/
alter table tbl_dept modify deptID int(5);

/*修改字段名*/
alter table tbl_dept change name deptName varchar(20);

/*添加字段*/
alter table tbl_dept add phone varchar(11) unique default "" after location;/*first*/

/*删除字段*/
alter table tbl_dept drop phone;
alter table tbl_dept add phone varchar(11) unique default "" after location;/*first*/

/*修改字段的排列位置**/
alter table tbl_dept modify phone varchar(11) /*first*/ after deptName;

/*更改表的存储引擎*/
alter table tbl_dept engine = MyISAM;

/*删除表的外键约束*/
alter table tbl_emp drop foreign key fk_emp_dept;

/*删除没有被关联的表*/

/*删除被其他表关联的主表*/










