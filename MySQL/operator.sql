/*
+ - * / %
>
<
=		<=>
>=
<=
!=		<>
IN
NOT IN
BETWEEN AND
IS NULL
ISNULL
IS NOT NULL
GREATEST
LEAST
LIKE    'student' LIKE '_t%'
REGEXP	^ $ . [...] *

NOT		!
AND		&& 
OR		||
XOR

&
|
~
^
<<
>>

*/



select 'abcded' regexp '[ce]';
select 'abcded' regexp '^abc';
select 'abcded' regexp 'abc.ed';
select 'abcded' regexp 'c*';
select 'abcded' regexp 't*';/**??????*/









