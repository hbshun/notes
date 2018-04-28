print('---------变量-------')
"""
变量名以字母或下划线开头
不能包含空格或符号
不能使用关键字
不建议使用系统内置模块名、类名、函数名等
大小写敏感
"""


def printList(aList):
    for item in aList:
        print(item)


print('abc'.isidentifier())
print('1abc'.isidentifier())
print('a bc'.isidentifier())
print('_bc'.isidentifier())

# 所有内置函数
print(dir(__builtins__))

help('id')
help(id)

import urllib
import urllib.request

print(dir(urllib))
print(type(urllib))
print(type(urllib.request))

print(type([3]))
print(type([3]) in (list, tuple, dict, set))

