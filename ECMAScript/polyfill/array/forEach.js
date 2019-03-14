Array.prototype.mochForEach = function (fn) {
  for(let i = 0; i < this.length; i++) {
    fn(this[i], i, this);
  }
};

let arr = [1, 3, 8];

arr.mochForEach(console.log);

arr.forEach(console.log);
