
/**
 * Creates an array of elements split into groups the length of size.
 * If array can't be split evenly, the final chunk will be the remaining elements.
 */

/**
 * Example:
 * _.chunk(['a', 'b', 'c', 'd'], 2); // => [['a', 'b'], ['c', 'd']]
 * _.chunk(['a', 'b', 'c', 'd'], 3); // => [['a', 'b', 'c'], ['d']]
 */

'use strict';

function chunk(array, size) {
  if (array.length <= size) {
    return [array];
  }
  const result = [[]];
  let flag = 0;
  while(flag < array.length) {
    let arr = result[result.length - 1];
    if (arr.length < size) {
      arr.push(array[flag]);
    } else {
      result.push([array[flag]]);
    }
    flag += 1;
  }
  return result;
}

console.log(chunk(['a', 'b', 'c', 'd','a', 'b', 'c', 'd','a', 'b', 'c', 'd','a', 'b', 'c', 'd','a', 'b', 'c', 'd'], 3));
