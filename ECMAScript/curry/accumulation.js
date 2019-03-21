/**
 * 一道头条的面试题
 * 
 * sum(1,2) //3
 * sum(1)(3)(5)  //9
 * sum(1, 2, 4)(8, 9) //24
 * 
 * 就类似如此的一个累加器的实现、或许不应该叫累加器…，反正就是这样一个东西。
 * 当初想到了函数克里化，但是又感觉不一样，估计是因为对克里化没有什么研究。
 * 现在研究也不深，不够好像也用不到克里化的知识。。
 * 
 * 分析一下：
 * 1. 函数链式调用会持续保存结果，再次调用则重新开始计算，这里的可以用闭包保存调用链上的值。
 * 2. 而且函数调用返回的肯定是个函数，但他的求值是一个数字，这就用到了最近复习的valueOf
 */

function sum (...args) {
  let summation = 0;
  summation = Array.prototype.reduce.call(args, (s, item)=>s += item, summation);

  const fn = (...args) => {
    summation = Array.prototype.reduce.call(args, (s, item)=>s += item, summation);
    return fn;
  }

  fn.valueOf = function() {
    return summation;
  }
  fn.toString = function() {
    console.log(123131);
    return summation;
  };
  return fn;
}

console.log(sum(1,2));
console.log(sum(1,2)(9));
console.log(sum(1)(9));
console.log(sum(1,2)(9)(5, 9));

let obj = {
  toString() {
    console.log(123131);
    return 123;
  }
}

console.log(obj);