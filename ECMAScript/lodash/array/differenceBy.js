/**
 * This method is like _.difference except that it accepts iteratee which is invoked for each element of array
 * and values to generate the criterion by which they're compared.
 * The order and references of result values are determined by the first array.
 *
 * _.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor); // => [1.2]
 * // The `_.property` iteratee shorthand.
 * _.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x'); // => [{ 'x': 2 }]
 *
 * */

function differenceBy(arr, arr2, iteratee) {
  let arr2new = arr2.map(ele => iteratee(ele));
  let arrnew = arr.map(ele => iteratee(ele));

  const result = [];
  arrnew.forEach((ele, index) => {
    if(arr2new.indexOf(ele) < 0) {
      result.push(arr[index]);
    }
  });
  return result;
}

console.log(differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor))
