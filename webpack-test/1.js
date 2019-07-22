const { SyncHook } = require("tapable");
let queue = new SyncHook(['name']); //所有的构造函数都接收一个可选的参数，这个参数是一个字符串的数组。

// 订阅
queue.tap('1', function (name, name2) {// tap 的第一个参数是用来标识订阅的函数的
    console.log(name, name2, 1);
    return '1'
});
queue.tap('2', function (name) {
    console.log(name === 'webpack', 2);
});
queue.tap('3', function (name) {
    console.log(name, 3);
});

// 发布
queue.call('webpack', 'webpack-cli');// 发布的时候触发订阅的函数 同时传入参数


const a = {
  arr: [],
  tap(fn) {
    this.arr.push(fn);
    return this;
  },
  async run() {
    for(let i =0; i< this.arr.length; i++) {
      let f = this.arr[i];
      await f();
    }
  }
}


const f3 = function(name,callback){
  return new Promise(function(resolve){
      setTimeout(function(){
          console.log(name, 3);
          resolve();
      },3000)
  });
};

const f2 = function(name,callback){
  return new Promise(function(resolve){
      setTimeout(function(){
          console.log(name, 2);
          resolve();
      },2000)
  });
};

a.tap(f2).tap(f3).run();

