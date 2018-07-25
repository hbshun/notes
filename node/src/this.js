
const that = this;
console.log(module.exports === that)
console.log(':::this===global::::', this === global);

const fn1 = () => {
  console.log('fn1:::this===that::::', this === that);
}
fn1();

const fn2 = function() {
  console.log('fn2:::this===that::::', this === that);
  console.log('fn2:::this===global::::', this === global);
}
fn2();

const o1 = {
  fn1: () => {
    console.log('o1.fn1:::this:::', this);
    console.log('o1.fn1:::this===that::::', this === that);
  },
  fn2: function() {
    console.log('o1.fn2::::', this);
    return this;
  },
  fn3() {
    console.log('o1.fn3::::', this);
    return this;
  },
  fn4: () => {
    (() => {
      console.log('o1.fn4:::inner:::', this);
    })();
  },
  fn5(){
    (() => {
      console.log('o1.fn5:::inner:::', this);
    })();
  },
  fn6: () => {
    (function(){
      console.log('o1.fn6:::inner:::', this === global);
    })();
  },
  fn7(){
    (function() {
      console.log('o1.fn7:::inner:::', this === global);
    })();
  }
}
// console.log(o1.fn1() === o1.fn2());
// console.log(o1.fn2() === o1.fn3());

o1.fn4();
o1.fn5();
o1.fn6();
o1.fn7();

const o2 = {
  a: 1, b: 'bb'
}

o1.fn1.call(o2);
o1.fn4.bind(o2)();
o1.fn5.bind(o2)();
o1.fn6.bind(o2)();
o1.fn7.bind(o2)();

console.log();

const foo = function() {
  (() => {
    console.log('id:', this.id);
  })();
}

let id = 21;

foo.call({ id: 42 });