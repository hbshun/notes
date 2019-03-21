# 构造函数及实例化

```js
function Person(name) {
    this.name = name
    return name;
}
let p = new Person('Tom');
p instanceof Person  //true???


/**
  * 构造函数不需要显示的返回值。使用new来创建对象(调用构造函数)时，
  * 如果return的是非对象(数字、字符串、布尔类型等)会忽而略返回值;
  * 如果return的是对象，则返回该对象(注：若return null也会忽略返回值）。
  * new 创建一个新对象，同时继承对象类的原型，即Person.prototype；
  * 执行对象类的构造函数，同时该实例的属性和方法被this所引用，即this指向新构造的实例；
  * 如果构造函数return了一个新的“对象”，那么这个对象就会取代整个new出来的结果。
  * 如果构造函数没有return对象，那么就会返回步骤1所创建的对象，即隐式返回this。
  * 一般情况下构造函数不会返回任何值，不过在一些特殊情况下，如果用户想覆盖这个值，可以选择返回一个普通的对象来覆盖。
  */

// let p = new Person()，代码实现：
let p = (function () {
    let obj = {};
    obj.__proto__ = Person.prototype;
    
    // 其他赋值语句...
    
    return obj;
})();

function instanceof(x, constructor) {
  while(x.__proto__!==null) {
      if(x.__proto__===constructor.prototype) {
          return true;
      }
      x.__proto__ = x.__proto__.proto__;
  }
  if(x.__proto__==null) {return false;}
}



function F() {}
function O() {}

O.prototype = new F();
var obj = new O();

console.log(obj instanceof O); // true
console.log(obj instanceof F); // true
console.log(obj.__proto__ === O.prototype); // true
console.log(obj.__proto__.__proto__ === F.prototype); // true

```


