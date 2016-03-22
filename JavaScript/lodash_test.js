/**
 * Created by admin on 2016/3/22.
 */

const _ = require('lodash');
//const _ = require('underscore');

//Date
console.log(_.now());

//Array
_.chunk(['a', 'b', 'c', 'd'], 2);// → [['a', 'b'], ['c', 'd']]
_.chunk(['a', 'b', 'c', 'd'], 3);// → [['a', 'b', 'c'], ['d']]
_.compact([0, 1, false, 2, '', 3]);// → [1, 2, 3]
_.difference([3, 2, 1], [4, 2]);// → [3, 1]
var array = [1];
var other = _.concat(array, 2, [3], [[4]]);
console.log(other);// → [1, 2, 3, [4]]
console.log(array);// → [1]
_.differenceBy([3.1, 2.2, 1.3], [4.4, 2.5], Math.floor);// → [3.1, 1.3]
_.differenceBy([{'x': 2}, {'x': 1}], [{'x': 1}], 'x');// → [{ 'x': 2 }]

_.drop([1, 2, 3]);// → [2, 3]
_.drop([1, 2, 3], 2);// → [3]
_.drop([1, 2, 3], 5);// → []
_.drop([1, 2, 3], 0);// → [1, 2, 3]
_.dropRight([1, 2, 3]);// → [1, 2]
_.dropRight([1, 2, 3], 2);// → [1]
_.dropRight([1, 2, 3], 5);// → []
_.dropRight([1, 2, 3], 0);// → [1, 2, 3]

var users = [
  {'user': 'barney', 'active': false},
  {'user': 'fred', 'active': false},
  {'user': 'pebbles', 'active': true}
];

_.dropWhile(users, function (o) { return !o.active; });
// → objects for ['pebbles']

// The `_.matches` iteratee shorthand.
_.dropWhile(users, {'user': 'barney', 'active': false});
// → objects for ['fred', 'pebbles']

// The `_.matchesProperty` iteratee shorthand.
_.dropWhile(users, ['active', false]);
// → objects for ['pebbles']

// The `_.property` iteratee shorthand.
_.dropWhile(users, 'active');
// → objects for ['barney', 'fred', 'pebbles']

array = [1, 2, 3];
/**
 * array
 * fill
 * start 0
 * end length-1
 */
_.fill(array, 'a');
console.log(array);// → ['a', 'a', 'a']
_.fill(Array(3), 2);// → [2, 2, 2]
_.fill([4, 6, 8, 10], '*', 1, 3);// → [4, '*', '*', 10]

var x = {'a': 1};
var y = _.castArray(x);
console.log(y);
console.log(y[0] === x);

users = [
  {'user': 'barney', 'age': 36},
  {'user': 'fred', 'age': 40},
  {'user': 'pebbles', 'age': 1}
];

console.log(_.chain(users));
