//1.函数对象
//2.函数字面量

//3.调用
//this,arguments
//调用模式：函数调用，方法调用，构造器调用，apply调用
function add(a, b) { return a + b}
var sum = add.apply(null, [2, 3]);//apply的第一个参数是this绑定的值
/*arguments 有length属性，但没有数组的方法*/

//4.异常
function add2(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw {
      name   : "Type Error",
      message: "need two number"
    }
  }
  return a + b;
}

try {
  add2('three', 4)
} catch (e) {
  console.log(e.name, e.message);
}

//5.扩充类型
Function.prototype.method = function (name, func) {
  if (!this.prototype[name]) {
    this.prototype[name] = func;
  }
  return this;
};

Number.method('integer', function () {
  return Math[this < 0 ? 'ceil' : 'floor'](this);
});
console.log((10 / 3).integer());

//6.递归 （高效的操作树形结构）


//7.作用域

//8.闭包
//内部函数比外部函数生命周期更长

var myValue = (function () {
  var value = 0;
  return {
    increment: function (inc) {
      value += typeof inc === "number" ? inc : 1;
    },
    getValue : function () {
      return value;
    }
  }
}());
myValue.increment();
console.log(myValue.getValue());

var quo = function (status) {
  return {
    get_status: function () {
      return status;
    }
  }
};

var myQuo = quo('great');
console.log(myQuo.get_status());
myQuo.status = "fail";
console.log(myQuo.get_status());
console.log(myQuo.status);

var fade = function (node) {
  var level = 1;
  var step = function () {
    var hex = level.toString(16);
    node.style.backgroundColor = "#FF" + hex;
    if (level < 15) {
      level++;
      setTimeout(step, 1000);
    }
  };
  setTimeout(step, 1000);
};
//fade(document.body);

//9.回调

//10.模块
//通过函数产生模块，几乎可以完全屏蔽全局变量的使用
//使用方法：一个定义了私有变量和函数的函数，利用闭包创建可以访问私有变量和函数的特权函数，
// ...最后返回这个特权函数，或者把它保存到一个可访问到地方

//替换HTML字符实体的方法
String.method('deentityify', function () {
  var entity = {
    quot: '"',
    lt  : '<',
    gt  : '>'
  };
  return function () {
    return this.replace(/&([^&;]+);/g, function (a, b) {
      var r = entity[b];
      return typeof r === 'string' ? r : a;
    })
  }
}());

console.log("&lt;&quot;&gt;".deentityify()); //只有deentityify方法才有权访问entity


var serial_maker = function () {
  var prefix = "", seq = 0;
  return {
    set_prefix: function (p) {
      prefix = String(p);
    },
    set_seq   : function (s) {
      seq = s;
    },
    gensym    : function () {
      var result = prefix + seq;
      seq += 1;
      return result;
    }
  }
};

var seqer = serial_maker();
seqer.set_prefix('Q');
seqer.set_seq(1000);
console.log(seqer.gensym());


//11.级联
//return this

//12.柯里化
//把函数与传递给它的参数相结合
//


//13.记忆
var fibonacci = function (n) {
  return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
};
for (var i = 0; i <= 10; i++) {
  console.log(i, fibonacci(i));
}
//重复计算 过多

var fibonacci = function () {
  var memory = [0,1];
  var fib = function (n) {
    var result = memory[n];
    if(typeof result !=="number"){
      result = fib(n-1)+fib(n-2);
      memory[n] = result;
    }
  };
  return fib;
}();







