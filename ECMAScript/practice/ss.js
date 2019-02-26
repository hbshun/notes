'use strict';
let type = v => Object.prototype.toString.apply(v);

let isObj = v => type(v) === '[object Object]';
let isArr = v => type(v) === '[object Array]';

const deepAssign = (o1, o2) => {

  if (!isObj(o1)) {
    throw 'o1 isn\'t an object';
  }
  if (!isObj(o2)) {
    throw 'o2 isn\'t an object';
  }
  let o1Keys = Object.keys(o1);
  let o2Keys = Object.keys(o2);

  o2Keys.forEach(k2 => {
    if (o1Keys.indexOf(k2) > -1) {
      if (isObj(o1[k2]) && isObj(o2[k2])) {
        deepAssign(o1[k2], o2[k2])
      } else {
        o1[k2] = JSON.parse(JSON.stringify(o2[k2]));
      }
    } else {
      o1[k2] = JSON.parse(JSON.stringify(o2[k2]));
    }
  })


};


let obj1 = {a: 1, b: {c: 3}, e: 5, arr: [1, 2]};
let obj2 = {a: 2, b: {d: 3}, e: {}, d: {e: 2}, arr: [2, 3, 5]};

console.log(obj1);
console.log(obj2);

deepAssign(obj1, obj2);

console.log(obj1);

