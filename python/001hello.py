#!/usr/bin/env python3
# coding=utf-8


print('hello, world')

print(0.2 + 2)
print(6/3)
"""
/除法的结果一定是浮点数。
//整除的结果如果有浮点数参与。
其他运算符，如果有浮点数参与结果就是浮点数、否则为整数

运算符
**
*  /  %  //
+  -
>  <  ==  !=  >=  <=
and  or  not

=




"""

print(3.0 * 2)

print(type(2))
print(type(2.0))
print(type(type(2.0)))
print(type(type(type(2.0))))

print(2**3)

print(25**0.5)

print(10%3)
print(11.5%2)

print(11//2)
print(11.8//2)


# 字母、数字、下划线
result = 1
result = result + 333
print(result)

a, b, c = 1, 2, 4

print    (a + b + c)

# 字符串 + *

# birth = input('你出生在哪一年？')
# age = 2019 - int(birth)

# print(str(age))

string = '0123456789'
print(string[5])
print(string[-3])
print(string[2:9:2])
print(string[::-1])
print(string[5::1])
print(string[5::-1])
print(string[-5:-2:1])
print(string[-2:-5:-1])

string = 'Hello, world.'
print(len(string))
print(string.find('or'))
print(string.find('4'))
print(string.find('o'))
print(string.count('o'))
print('ll' in string)
print('oll' not in string)

print(string.replace('o', 'oo'))

print(string.encode('utf-8'))

print(string.split(','))
print(string.upper())
print(string.lower())
print(string.capitalize())

print(r"C:\test")
print("C:\test")

'''
格式化字符串

F-String (3.6+)
f"hhh {age} sfsdf"

format
"hhh {} sfsdf".format(age)


% (弃用)




格式化数字


'''

a = True

print( a == False)
print( a == False)


import random

random.randint(1,5)

t = a, b, c = 1,2,3
print(t)