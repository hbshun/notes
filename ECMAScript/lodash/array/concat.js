/**
 * Creates a new array concatenating array with any additional arrays and/or values.
 * var array = [1];
 * var other = _.concat(array, 2, [3], [[4]]); // => [1, 2, 3, [4]]
 * console.log(array); // => [1]
 */

function concat(arr, ...ele) {
  return arr.concat(...ele);
}
var array = [1];
var other = concat(array, 2, [3], [[4]]);
console.log(array);
console.log(other);
