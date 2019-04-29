# Event Loop
>https://zhuanlan.zhihu.com/p/55511602

在JavaScript中，任务被分为两种，一种宏任务（MacroTask）也叫Task，一种叫微任务（MicroTask）。
MacroTask（宏任务）：script全部代码、setTimeout、setInterval、I/O、UI Rendering。
MicroTask（微任务）：Process.nextTick（Node独有）、Promise、MutationObserver


## 浏览器中的Event Loop
Javascript 有一个 main thread 主线程和 call-stack 调用栈(执行栈)，所有的任务都会被放到调用栈等待主线程执行。
JS调用栈：JS调用栈采用的是后进先出的规则，当函数执行的时候，会被添加到栈的顶部，当执行栈执行完成后，就会从栈顶移出，直到栈内被清空。

同步任务和异步任务
Javascript单线程任务被分为同步任务和异步任务，同步任务会在调用栈中按照顺序等待主线程依次执行，异步任务会在异步任务有了结果后，将注册的回调函数放入任务队列中等待主线程空闲的时候（调用栈被清空），被读取到栈内等待主线程的执行。

事件循环的进程模型
选择当前要执行的任务队列，选择任务队列中最先进入的任务，如果任务队列为空即null，则执行跳转到微任务（MicroTask）的执行步骤。
将事件循环中的任务设置为已选择任务。
执行任务。
将事件循环中当前运行任务设置为null。
将已经运行完成的任务从任务队列中删除。
microtasks步骤：进入microtask检查点。
更新界面渲染。
返回第一步。


## Node中的Event Loop
Node中的Event Loop是基于libuv实现的，而libuv是 Node 的新跨平台抽象层，libuv使用异步，事件驱动的编程方式，核心是提供i/o的事件循环和异步回调。libuv的API包含有时间，非阻塞的网络，异步文件操作，子进程等等。 Event Loop就是在libuv中实现的。

timers: 执行setTimeout和setInterval中到期的callback。
pending callback: 上一轮循环中少数的callback会放在这一阶段执行。
idle, prepare: 仅在内部使用。
poll: 最重要的阶段，执行pending callback，在适当的情况下回阻塞在这个阶段。
check: 执行setImmediate(setImmediate()是将事件插入到事件队列尾部，主线程和事件队列的函数执行完成之后立即执行setImmediate指定的回调函数)的callback。
close callbacks: 执行close事件的callback，例如socket.on('close'[,fn])或者http.server.on('close, fn)。


# promise的实现原理


# 什么是尾调用，尾递归？为什么只有在严格模式下生效？
>http://es6.ruanyifeng.com/#docs/function

```js
function f(x){
  return g(x);
}

function f2(x) {
  if (x > 0) {
    return m(x)
  }
  return n(x);
}
```
上面这两种类似的情况是尾调用，函数f的最后一步是调用函数g，并且直接return函数调用。

尾调用之所以与其他调用不同，就在于它的特殊的调用位置。
函数调用会在内存形成一个“调用记录”，又称“调用帧”（call frame），保存调用位置和内部变量等信息。如果在函数A的内部调用函数B，那么在A的调用帧上方，还会形成一个B的调用帧。等到B运行结束，将结果返回到A，B的调用帧才会消失。如果函数B内部还调用函数C，那就还有一个C的调用帧，以此类推。所有的调用帧，就形成一个“调用栈”（call stack）。

尾调用由于是函数的最后一步操作，所以不需要保留外层函数的调用帧，因为调用位置、内部变量等信息都不会再用到了，只要直接用内层函数的调用帧，取代外层函数的调用帧就可以了。
```js
function f() {
  let m = 1;
  let n = 2;
  return g(m + n);
}
f();

// 等同于
function f() {
  return g(3);
}
f();

// 等同于
g(3);
```

## 尾递归
函数调用自身，称为递归。如果尾调用自身，就称为尾递归。递归非常耗费内存，因为需要同时保存成千上百个调用帧，很容易发生“栈溢出”错误（stack overflow）。但对于尾递归来说，由于只存在一个调用帧，所以永远不会发生“栈溢出”错误。

尾递归如何实现



# 简单问题
* == 与 ===
* 如何clone对象
* 如何比较两个对象
* 什么是真值（truthy），假值（falsy）


# JS垃圾回收
>https://zhuanlan.zhihu.com/p/60279001


# 文件上传怎么做
