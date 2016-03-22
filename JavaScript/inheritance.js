
if (typeof Object.create !== 'function') {
  Object.create = function (o) {
    var F = function () {};
    F.prototype = o;
    return new F();
  }
}

//////////////////////////
//继承

//代码重用模式（基于类，）


//伪类
//this.prototype = {constructor:this}



//对象说明符
//给函数传n个参数，可以传一个对象，这样就不管顺序了


//原型
var myMammal = {
  name:'myMammal',
  get_name:function () {
    return this.name;
  },
  says:function () {
    return this.saying || '';
  }
};

var myCat = Object.create(myMammal);
myCat.name = "myCat";
myCat.saying = "hello";

//应用模块模式
var constructor = function (spec,my) {
  var that;//var 其他的私有变量
  my = my||{};
  that = {}
};

