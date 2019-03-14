/**
 * aaabbccccadeffff => a3b2c4d1e1f4
 * @param input
 * @returns {*}
 */

function zip(input) {

  let result = '';
  let char = input[0];
  let count = 1;
  for(let index = 1;index < input.length; index++) {
    if (input[index] === char) {
      count += 1;
    } else {
      result += `${char}${count}`;
      char = input[index];
      count = 1;
    }
  }
  result += `${char}${count}`;
  return result;
}

console.log(zip('aaabbccccadeffffa'))
