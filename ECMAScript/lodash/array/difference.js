/**
 * Creates an array of array values not included in the other given arrays using SameValueZero for equality comparisons.
 * The order and references of result values are determined by the first array.
 *
 * _.difference([2, 1], [2, 3]); // => [1]
 * */

function difference(arr, arr2) {
  return arr.filter(ele => {
    return arr2.indexOf(ele) < 0;
  })
}

console.log(difference([2, 1], [2, 3]));
