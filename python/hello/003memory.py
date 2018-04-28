print('---------内存--基于值的内存管理方式-------')

a = 3
print(id(a))
b = a
print(id(b))

a = 4
c = 4
print(id(a))
print(id(b))
print(id(4))
print(id(c))

tmpList = [4, 4, 4]
print(id(tmpList[0]) == id(tmpList[2]))
