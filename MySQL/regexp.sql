
/*正则表达式*/

create table test_regexp(
str varchar(20)
);

INSERT INTO `test_regexp` (str) VALUES ('Bojan'),('Suzette'),('Prasadram'),('Yongqiao'),('Divier'),('Domenick'),('Otmar'),
('Elvis'),('Karsten'),('Jeong'),('Arif'),('Bader'),('Alain'),('Adamantios'),('Pradeep'),('Huan'),('Alejandro'),
('1234'),('sy12234'),('df2342e9  er'),('h+ellO'),
('Hello'),('sel.fd'),('yellOO'),('oooo'),('re-5\\\\\\'),('rz....'),('r'),('a\\n'),('yes****'),
('564+5654'),('342erw*'),('*$/+'),('@^&safdlaf()%!{}'),('[adf]'),('[]adfadfewrq'),(':,,chifan');

select str from test_regexp where str regexp 'a';
select str from test_regexp where str regexp ' ';
select str from test_regexp where str regexp '\n';
select str from test_regexp where str regexp '\\n';


select str from test_regexp where str regexp 'ad';
select str from test_regexp where str like 'ad';

select str from test_regexp where str regexp '^a';/*以a开头的*/
select str from test_regexp where str regexp 'a$';/*以a结尾的*/
select str from test_regexp where str regexp 'al.in';/*Alain*/
select str from test_regexp where str regexp 'a*'; 	/*'*'匹配0个或多个它前面的字符，这里所有的都会匹配*/
select str from test_regexp where str regexp 'a+'; /*同上，但至少有一个a */

select str from test_regexp where str regexp '(^y)(o+)';
select str from test_regexp where str regexp '(^yo)+';
select str from test_regexp where str regexp '^yo+';
select str from test_regexp where str regexp '^(yo+)';
select str from test_regexp where str regexp '^(yo)+';
select str from test_regexp where str regexp '(^yo)+';

select str from test_regexp where str regexp 'chi|yes';	/*'|'两边不能有空格 */
select str from test_regexp where str regexp '[efga]l';
select str from test_regexp where str regexp '[.]l';/*?*/
select str from test_regexp where str regexp '[^a-h]lO';
select str from test_regexp where str regexp '[A-Z]lO';	/*不区分大小写？*/
select str from test_regexp where str regexp '[0-9A-Z]';

select str from test_regexp where str regexp ']';
select str from test_regexp where str regexp '-';
select str from test_regexp where str regexp '[-]';
select str from test_regexp where str regexp '[+]';
select str from test_regexp where str regexp '[*]';
select str from test_regexp where str regexp '[*a]';
select str from test_regexp where str regexp '[ ]';
/*连续出现的次数*/
select str from test_regexp where str regexp 'o{2}';/*>=2*/
select str from test_regexp where str regexp 'o{2,}';/*>=2*/
select str from test_regexp where str regexp 'o{2,3}';/*x{m,n} m<=字符串连续出现的次数<=n*,,,,,为啥ooooooo也可以*/
select str from test_regexp where str regexp 'ba{2,3}';
select str from test_regexp where str regexp 'o{,}';/*无结果*/
select str from test_regexp where str regexp '1{10}';

SELECT 'fo fo' REGEXP '^fo$';  

/*转义 \\双斜线转义
下面是不转义会出错的
\\ . - + * / | [ ( 

其他字符前面加双\\ 表示原字符
*/

select str from test_regexp where str regexp '\\\\';/*表示一个\ */		
select str from test_regexp where str regexp '^';		
select str from test_regexp where str regexp '\\+';			
select str from test_regexp where str regexp '\.';		/*全部*/

select str from test_regexp where str regexp '[:a;num:]';
select str from test_regexp where str regexp '[:alpha:]';
select str from test_regexp where str regexp '[:upper:]';
select str from test_regexp where str regexp ')';
select str from test_regexp where str regexp '{';
select str from test_regexp where str regexp '}';
select str from test_regexp where str regexp ']';
select str from test_regexp where str regexp '^';		

/*错误的情况*/
select str from test_regexp where str regexp '';/*error*/
select str from test_regexp where str regexp '\\';/*error*/
select str from test_regexp where str regexp '*';
select str from test_regexp where str regexp '+';
select str from test_regexp where str regexp '[+';
select str from test_regexp where str regexp '*\\';
select str from test_regexp where str regexp 'o{3}';
select str from test_regexp where str regexp 'o{9,8}';
select str from test_regexp where str regexp '(';	
select str from test_regexp where str regexp '[';	
select str from test_regexp where str regexp '(';	