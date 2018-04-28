x = 3
print(x ** 2)

x += 6
print(x)

# print(x ** 99999)

print(0.1 + 0.2 == 0.3)

x = 3 + 4j
y = 5 + 6j

print(x + y)
print(x - y)
print(x * y)
print(x / y)
print(abs(x))
print(x.imag)
print(x.real)
print(x.conjugate())

print('---------分数---------')
from fractions import Fraction

x = Fraction(3, 5)
y = Fraction(3, 7)
print(x + y)
print(x * y)
print(x / y)

print('---------内存--基于值的内存管理方式-------')

a = 3
print(id(a))
print(id(3))

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
