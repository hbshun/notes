/*子查询*/
/*SELECT * FROM t1 WHERE column1 = (SELECT column1 FROM t2);*/

/*子查询是一个 SELECT 语句，嵌套在一个 
SELECT 语句、
SELECT...INTO 语句、
INSERT...INTO 语句、
DELETE 语句、
UPDATE 语句
另一个子查询
中。

comparison [ANY | ALL | SOME] (sqlstatement)
expression [NOT] IN (sqlstatement)
[NOT] EXISTS (sqlstatement)
*/

create table tbl1 (num1 int not null);
create table tbl2 (num2 int not null);

insert into tbl1 values(2),(5),(13),(27),(11);
insert into tbl2 values(6),(14),(11),(25);

select num1 
from tbl1 
where num1 > any (select num2 from tbl2);/*any some*任意一个符合条件即可*/

select num1 
from tbl1 
where num1 > all (select num2 from tbl2);/*符合子查询结果的每个元素都符合结果*/

select num1 
from tbl1 
where num1 > exists (select num2 from tbl2);/*exists返回值为false或者true*/

select num1 
from tbl1 
where num1 /*not*/ in (select num2 from tbl2);












