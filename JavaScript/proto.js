if (typeof Object.create !== 'function') {
  Object.create = function (o) {
    var F = function () {};
    F.prototype = o;
    return new F();
  }
}

var stooge = {
  "first-name": "hello",
  "last-name" : "world"
};

var stooge2 = Object.create(stooge);
console.error(11111111111,"stooge1:" + stooge["first-name"] + " " + stooge["last-name"]);
console.error(22222222222,"stooge2:" + stooge2["first-name"] + " " + stooge2["last-name"]);

stooge2['first-name'] = "hi";
console.error(33333333333,"stooge1:" + stooge["first-name"] + " " + stooge["last-name"]);
console.error(44444444444,"stooge2:" + stooge2["first-name"] + " " + stooge2["last-name"]);

delete stooge2['first-name'];
console.error(55555555555,"stooge1:" + stooge["first-name"] + " " + stooge["last-name"]);
console.error(66666666666,"stooge2:" + stooge2["first-name"] + " " + stooge2["last-name"]);

console.error(77777777777,stooge.__proto__);
console.error(88888888888,stooge2.__proto__);

//////////////////////////////////////

var F = function () {};
var f1 = new F();
console.log(f1.__proto__ === F.prototype);//true

//1.对象有__proto__，对象的__proto__是创建这个对象的函数的原型，
// 函数是对象，所以函数也有__proto__,因为函数也是对象，F.__proto__ 是创建这个函数（对象）的原型
console.log(F.__proto__ === Function.prototype);

//2.函数 才有prototype（原型）,
console.log(typeof F.prototype); //"object"

// 函数的prototype（原型）的两个属性 constructor 和 __proto__，
//3.constructor即函数本身
console.log(F.prototype.constructor === F); //true
//对象也有constructor属性
console.log(f1.constructor === f1.__proto__.constructor);
console.log(f1.constructor === F);

//4.而函数F的prototype(原型)也是对象，它的__proto__ （创建这个对象的函数的原型）
//定义函数F var F = function () {};时，F的原型是对象字面量，所以它的__proto__是Object.prototype
console.log(F.prototype.__proto__ === Object.prototype); //true


//Function
//Object

Object.prototype.testObjectExtend = "test Object Extend oo";
console.log(Function.testObjectExtend);
var obj = new Object();
console.log(obj.testObjectExtend);
var FFn = new Function();
console.log(FFn.testObjectExtend);
//所有的对象都扩展了
console.log('---------------------');
Function.prototype.testFunctionExtend = "test Function Extend oo";
console.log(Object.testFunctionExtend);
var obj2 = new Object();
console.log(obj2.testFunctionExtend);//undefined
var Fn = new Function();
console.log(Fn.testFunctionExtend);
var fn = new Fn();
console.log(fn.testFunctionExtend);//undefined
var Fn2 = function () {};
console.log(Fn2.testFunctionExtend);
var fn2 = {};
console.log(fn2.testFunctionExtend);
//所有的函数都扩展了，但普通对象没有



var oo = {};
var ooo = new Object();
console.log(oo.__proto__.__proto__ === null);
console.log(ooo.__proto__.__proto__ === null);
console.log(Object.prototype.__proto__ === null);

console.log(Object.__proto__ === Function.prototype);
console.log(Function.__proto__ === Function.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);
console.log(F.prototype.__proto__ === Object.prototype);


//__proto__ 是用来扩展函数自身的，可以直接调用或访问。new出的对象不能访问和调用
//prototype 是用来扩展子对象的，函数本身不能直接访问，new出的对象可以

var xx = function () {};
xx.xxx = function(){console.log('xx.xxx')};
xx.__proto__.xxx = function(){console.log('xx.__proto__.xxx')};
xx.__proto__.yyy = function(){console.log('xx.__proto__.yyy')};
xx.xxx();
xx.__proto__.xxx();
xx.yyy();
xx.prototype.xxx = function(){console.log('xx.prototype.xxx')};
xx.yyy = function () {console.log('xx.yyy');};
xx.yyy();//不能访问xx.__proto__.yyy了
var x = new xx();
x.xxx();
console.log(x.yyy);//undefined


//函数是根据他的原型创建对象的
console.log(typeof Function.__proto__,typeof Function.prototype);
console.log(typeof Object.__proto__,typeof Object.prototype);
//函数的prototype是函数，new出来的对象也是函数
//Object.__proto__ 和 Function.prototype 和 Function.__proto__ 这三个是一个东西。


//内置对象12个
//Arguments,Number,Boolean,String,Object,Function,Array,RegExp,Error,Date,JSON,Math

//内置构造器/函数的__proto__都指向Function.prototype
//Number Boolean String Object Function Array RegExp Error Date

//内置对象的__proto__ 指向Object.prototype
//Math  JSON


///Object.prototype 具有的属性或方法
//hasOwnProperty
//isPrototypeOf
//valueOf
//toString
//toLocaleString
//propertyIsEnumerable


//Function.prototype 的属性或方法
//name
//arguments
//length
//apply
//bind
//call
//caller


