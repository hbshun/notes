const _ = require('lodash');

const o1 = {a: 1, b: 2};
const o2 = {a: 2};
const o3 = {
  a: {b: 1, c: 2}
};
const o4 = {
  b: 2, a: {c: 5}
}
const o5 = {
  a: [1, 2]
};
const o6 = {
  a: [1, 3]
}

_.merge(o1, o2);
_.merge(o3, o4);
_.merge(o5, o6);

console.log(o1, o2);
console.log(o3, o4);
console.log(o5, o6);

const diff = (newObj, baseObj) => {
  _.keysIn(newObj).forEach((key) => {
    const newValue = newObj[key];
    const baseValue = baseObj[key];
    if (_.isPlainObject(baseValue) && _.isPlainObject(newValue)) {
      return diff(newValue, baseValue);
    } else if (_.isPlainObject(baseValue) && !_.isPlainObject(newValue)) {
      
    }
  });
};