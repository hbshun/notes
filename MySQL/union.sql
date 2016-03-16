/*合并查询结果*/

/*
合并多个select的查询结果
列数，对应数据类型相同。
*/

select num1 from tbl1
union /*all 带all不会去重，效率较高*/
select num2 from tbl2