
Array.prototype.mockMap = function (fn) {
  const result = [];
  this.forEach((ele, index) => {
    result.push(fn(ele, index, this));
  });
  return result;
};

let arr = [1, 3, 8];
function test(ele) {
  return ele * ele;
}

console.log(arr.map(test));
console.log(arr.mockMap(test));

