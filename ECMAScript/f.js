'use strict';
let f;
let o = 10;

function a(o) {
  console.log('ooo', o);
  if(!f) {
    f = () => {
      console.log('console f', o);
    }
  } else {
    console.log('f true', o);
  }
  o += 1;
  f();
}

a(1);
a(5);
f();

let xxx;

const obj = {
  a: 1,
  out(){
    console.log(this === module.exports);
    console.log(this.a);
    let a = this.a;
    xxx = xxx || (function(){
      console.log(a);
    })
    xxx();
  }
}
obj.out();
obj.out.call({a: 6});