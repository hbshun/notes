Array.prototype.mockFilter = function(fn) {
  let result = [];
  this.forEach(function(item) {
    if(fn(...arguments)) result.push(item);
  });
  return result;
};

Array.prototype.mockReject = function(fn) {
  let result = [];
  this.forEach(function(item) {
    if(!fn(...arguments)) result.push(item);
  });
  return result;
}

let arr =[1,2313,432,5,234,1,1234];

const isGreater99 = (item) => item > 99;
console.log(arr.mockFilter(isGreater99));
console.log(arr.mockReject(isGreater99));

function complement(pred) {
  return function() {
    return !pred.call(null, ...arguments);
  }
}
console.log(arr.mockFilter(complement(isGreater99)));