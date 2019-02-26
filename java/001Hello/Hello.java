/**
 * Java: The Complete Reference, Ninth Edition
 * 
 * Java 源文件的文件名非常重要
 * 源文件的正式称谓是编译单元 compilation unit
 * 是一个包含一个或多个类定义的文本文件
 * 文件扩展名必须是.java
 * 
 * 所有代码必须包含类中
 * 主类的名称应当与包含程序的文件的名称匹配
 * 大小写也要匹配
 * Java大小写是敏感的
 * 
 * 这样虽然专断。但是这样使得维护和组织程序更加容易。
 */

/**

 */

/**
 * 关键字
 * public private protected
 * for if while do else switch case break continue
 * new class extends this super
 * package import
 * void
 * static
 * return
 * enum
 * try catch throw finally throws
 * int boolean byte char short float double long
 * 
 * native final default abstract assert 
 * synchronized transient volatile 
 * strictfp implements instanceof interface 
 * 
 * 
 * 保留字
 * const goto
 * true false null
 * 
 * 访问修饰符access modifier
 */

/**
 * 数据类型
 * Java是强类型的语言
 * 
 * 基本类型
 * 八种：int boolean byte char short float double long
 * 四类：整型 浮点型 字符型 布尔型
 * 
 * 整型 int long short byte
 * long 64  -9223372036854775808~9223372036854775807
 * int 32  -2147483648~2147483647
 * short 16  -32768~32767
 * byte 8  -128~127
 * 整数操作时byte和short会被提升为int型
 * 高阶位用于定义整型的符号
 * 整型由宽度可变的二进制数字表示。
 * 所有类型都是有符号的（char没有符号），既可以表示正数也可以表示负数
 * 使用“2的补码”进行编码：反转+1，反转+1
 * 
 * 
 * 浮点型float double
 * float 32  1.4e-045~3.4e+038
 * double 64  4.9e-324~1.8e+308
 * 
 * 字符型
 * 使用Unicode表示字符
 * 本质上是int的子集
 * char 16位 0-65536

 * 布尔型
 * true false
 * 关系运算的返回结果是布尔值
 */

/**
 * 变量
 * 声明变量type var1 [ = value ] [, var2 [ = value ] ...];
 * 所有变量都有作用域，作用域定义了变量的可见性和生存期。
 * 
 * 作用域
 * 块作用域
 * 全局作用域
 * 局部作用域
 * 类作用域
 * 方法作用域
 * 为封装提供了基础
 * 可以嵌套
 * 进入作用域时创建变量，离开时销毁，
 * 
 * 类型转换
 * 自动转换，条件：类型兼容、目标类型大于原类型
 * 强制转换
 * 
 * 自动类型提升
 * 赋值类型提升
 * 
 * 表达式中类型提升
 * 所有byte、short和char类型都会提升为int类型
 * 如果有一个操作数是long类型的，表达式都会提升为long类型
 * 如果有一个操作数是float类型，都会提升为float类型
 * 如果有一个操作数是double类型，结果将是double类型
 * 
 */

/**
 * 控制语句
 * if
 * for
 */

/**
 * 代码块
 */

/**
 * 词汇问题
 * 空白符 标识符 字面值 注释 运算符 分隔符 关键字
 * 
 * -------------------------
 * 标识符
 * 组成：大小写字母 数字 下划线 美元符
 * 大小写敏感
 * 不能以数字开头
 * 不建议使用下划线
 * 
 * --------------------------
 * 字面值
 * 96   3.2    'C'  "Hello,world"
 * 
 * 整型字面值
 * 八进制以0开头， 09会报错。
 * 十六进制以0x或0X开头，以a-f或A-F代替10-15
 * 二进制以0b或0B开头
 * 在整型字面量中可以嵌入一个或多个下划线，以增强阅读，编译时会忽略下划线
 * 
 * 浮点型字面值
 * 表示有小数部分的十进制数值
 * 标准计数法、科学计数法E或e
 * 默认是双精度的，同加D或d后缀。
 * 单精度的加F或f后缀。
 * 浮点型字面量中可以嵌入一个或多个下划线，以增强阅读，编译时会忽略下划线
 * 
 * 布尔型字面量
 * true或false
 * 不能转化成数字
 * 
 * 字符型字面量
 * 字符被索引到Unicode字符集。可以转换成整数的16位值，并可以使用整数运算符进行操作。
 * 使用单引号表示
 * 'a', '@', ' ', '\234', '\u1234', '\b', '\t' '\\' '\r' '\'', '\n' '\"' '\f'
 * 
 * 字符串字面量
 * "Hello,world"
 * 
 * --------------------------
 * 分隔符
 * ()
 * []
 * {}
 * ;
 * ,
 * .
 * ::
 * --------------------------
 * 注释 comment
 * 三种注释风格
 * 单行
 * 多行
 * 文档
 * 注释
 * 
 * --------------------------
 * 运算符
 * 关系运算符
 * >  <  ==  <=  >=  !=
 * 
 * 算术运算符
 * 必须是数值类型、char类型。不可以是boolean
 * +  -  *  /  %  ++  --  +=  -=  *=  /=  %=
 * 
 * 位运算符
 * ~  &  |  ^  >>  >>>  <<    &=  |=  ^=  >>=  >>>=  <<=
 * 
 * 逻辑运算符
 * &  |  ^  ||  &&  !  &=  |=  ^=  ==  !=  ?:
 * 
 * 类型比较运算符
 * instanceof
 * 
 * 箭头运算符
 * ->
 * 
 */

/**
 * 控制语句
 * 
 * 选择语句
 * if (condition) {}
 * if (condition) {} else {}
 * if (condition) {} else if() {}
 * if (condition) {} else if() {} else {}
 * condition表达式的结果必须是boolean型值
 * 
 * switch(expression)
 *   case value1:
 * expression 需要时byte，short，int，char，枚举或String（JDK7新增）
 * case值不允许重复
 * default是可选的
 * switch比大量的if-else性能更好
 * 匹配字符串会更耗时相对于整数
 * 只能执行相等性测试
 * 编译器检查每个case常量，并创建“跳转表”，
 * 
 * 迭代语句
 * for
 * for( ; ; ) { }
 * for(type item: collection) { }
 * while  可以没有循环体
 * do while
 * 
 * 跳转语句
 * break
 * 用于switch结构中
 * 退出循环，嵌套循环只退出内层
 * continue
 * return
 * 
 */

public class Hello {
    static public void main(String[] args) {
        System.out.println("Hello world");
        System.out.println(args);
        int num;
        num = 100;
        num = num * 2;
        System.out.println("num is " + num);

        char ch1, ch2;
        ch1 = 88;
        ch2 = 'Y';
        System.out.println("ch1 and ch2: " + ch1 + " " + ch2);
        Example e = new Example();

        // int num2 = 09; // error: integer number too large

        // int num3 = 3234123131321312321; // error: integer number too large
        // int num4 = 3234123131321312321L; // error: incompatible types: possible lossy conversion from long to int

        long num5 = 176__0020_3374l;
        int num6 = 0b1101_0101_0001_1010;

        // float f1 = 121.1231; //error: incompatible types: possible lossy conversion from double to float
        float f2 = 6.01E3F;
        double f3 = 2.4e+10; //2e+100D
        double f4 = 12__3_456.12_34;

        char c1 = ' ';
        char c2 = '"';
        char c3 = '\"';
        System.out.println(c2 == c3);

        {
            // char c1; // error: variable c1 is already defined in method main(String[])
            int inner1 = 1231;
        }
        int inner1; //no problem

        // [Java] The constructor System() is not visible
        // java.lang.System.System()
        // Don't let anyone instantiate this class
        // System s = new System();
        // system.out.println(s);

        // type conversion
        byte by1 = (byte) 130; // error: incompatible types: possible lossy conversion from int to byte
        System.out.println(by1);

        byte by2 = 50;
        by2 = (byte) (by2 * 2); //error: incompatible types: possible lossy conversion from int to byte
        System.out.println(by2);

        //数组

        int iArr[] = new int[3];
        System.out.println(iArr[0]); //0

        int monthDays[] = { 31, 28, 31, 30, 31 };
        int monthDays2[] = { 31, (byte) 'q' };
        // int monthDays2[] = { 31, (byte)false }; //error: incompatible types: boolean cannot be converted to int
        // Example examArr = new Example()[1]; //error: array required, but Example found
        // Example examArr = new Example[1]; //error: incompatible types: Example[] cannot be converted to Example
        // System.out.println(examArr[1]);

        int twoD[][] = new int[2][5];
        String twoD2[][] = new String[9][];
        for (int i = 0; i < 9; i++) {
            twoD2[i] = new String[i + 1];
            for (int j = 0; j <= i; j++) {
                twoD2[i][j] = (j + 1) + "*" + (i + 1) + "=" + ((i + 1) * (j + 1));
                System.out.print(twoD2[i][j]);
                System.out.print("; ");
            }
            System.out.println();
        }
        System.out.println(twoD2[8][8]);

        // twoD2[0] = new int[5];
        // twoD2[1] = new int[8];

        //int twoD3[][] = new int[][]; //error: array dimension missing
        //int twoD4[][] = new int[][1]; //error: ']' expected

        int[] iArr2 = new int[3];
        int[][] iArr3 = new int[1][]; //这也行？

        // 位运算
        int w1 = 1, w2 = -1;
        System.out.println(w1 & w2);
        System.out.println(w2 << 3);
        int w3 = -1073741824;
        System.out.println(w3 << 1);

        int w4 = 0b10010110;
        for (int i = 1; i < 40; i++) {
            System.out.println(w4 + "<<" + i + " = " + (w4 << i));
        }

        if (w4 == 1) {
            System.out.println("w4 == 1");
        } else {
            System.out.println("w4 != 1");
        }
        //if (w4) {}//error: incompatible types: int cannot be converted to boolean

        System.out.println("w4 != 1");
        
        int w5 = 55;
        switch (w4) {
            case 55:
                System.out.println("w4 == 1");
                break;
            case 28:
                System.out.println("w4 == 2");
                break;
            default:
                System.out.println("w4 == 2");
                break;
        }
        System.out.println("switch" == "switch");
        System.out.println("switch" == ("switch".substring(1)));
        System.out.println("switch".substring(1).length());
        System.out.println((int) ("switch".length()));
        System.out.println((int) ("switch".length()));
        System.out.println("switch------");

        for (int i = 0; i < 6; i++) {
            System.out.println("-----index: " + i + "------");
            System.out.println((int)("switch".charAt(i)));
            System.out.println((int)("switch".substring(1).charAt(i)));
        }

        int big = 100, small = 25;
        while (--big > ++small);
        System.out.println(big);

        big = 100;
        small = 1;
        for (;;) {
            if (--big < ++small)
                break;
        }
        System.out.println(big);
    }
}

class Example {

}

/**
 * 数组
 * 声明：type varname[];
 * varname = new type[size];
 * varname = {item0, item1, item2, item3, ...};
 * 通过new分配的数组，元素会被自动初始化，值为0，false或null
 * 通过array initializer
 */