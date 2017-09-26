print("Hello,world");
-- comment
--
--
--[[
comment1
comment2
--]]

--[[
key words
and or not
if else elseif
do end break while for in 
function return
true false
nil

--]]

print("~~~~~~~~~~varible~~~~~~~~~~~~")
print(var)
var = 3
print(var)

var = nil
print(var)

--[[
]]

print("~~~~~~~~~~data type~~~~~~~~~~~~")
--nil
--boolean
--number
--string
--function
--userdata
--thread
--table

print(type("Hello world"))
print(type(10.4*3))             
print(type(print))
print(type(type))
print(type(true))
print(type(nil))
print(type(type(X)))

if false or nil then
    print("至少有一个是 true")
else
    print("false 和 nil 都为 false!")
end

print("~~~~~~~~~~number~~~~~~~~~~~~")
print(type(2))
print(type(2.2))
print(type(0.2))
print(type(2e+1))
print(type(0.2e-1))
print(type(7.8263692594256e-06))


print("~~~~~~~~~~string~~~~~~~~~~~")
str = "Hello,world"
html = [[
<html>
<head></head>
<body>
    <a href="http://www.runoob.com/">菜鸟教程</a>
</body>
</html>
]]
print(html)
--print(str + 1) --error
print(str .. str)
print(#str) --the length of str;
print(10 .. 20)
print(type(10 .. 20))



print("~~~~~~~~~~table~~~~~~~~~~~~")
tbl1 = {}
tbl1.k1 = "v1"
print(tbl1)  --memory location
print(tbl1["k1"])
tbl1["bool"] = true

--tbl2 = {"hello", 12, nil, false, 10}
--table中包含true或false 遍历时报错

tbl2 = {"hello", 12, nil, 10}
print(pairs(tbl2))
for k, v in pairs(tbl2) do
    print(k .. " : " .. v)
end


print("~~~~~~~~~~function~~~~~~~~~~~~")
function factorial1(n)
    if n == 0 then
        return 1
    else
        return n * factorial1(n - 1)
    end
end
print(factorial1(5))
factorial2 = factorial1
print(factorial2(5))


function testFun(tab,fun)
    for k ,v in pairs(tab) do
        print(fun(k,v));
    end
end

tab={key1="val1",key2="val2"};
testFun(tab,
function(key,val)--匿名函数
    return key.."="..val;
end
);

print("~~~~~~~~~~data type~~~~~~~~~~~~")
print("~~~~~~~~~~data type~~~~~~~~~~~~")
print("~~~~~~~~~~data type~~~~~~~~~~~~")
print("~~~~~~~~~~data type~~~~~~~~~~~~")

