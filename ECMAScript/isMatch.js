const brackets = ['[', '{', '(', ')', '}', ']'];
const leftBrackets= ['[', '{', '('];
const rightBrackets = [ ')', '}', ']'];

const matches = {
  '[': ']',
  '{': '}',
  '(': ')',
};

const isBracket = (bracket) => brackets.indexOf(bracket) !== -1;
const notBracket = (bracket) => brackets.indexOf(bracket) === -1;

const isLeftBracket = (bracket) => leftBrackets.indexOf(bracket) !== -1;
const isRightBracket = (bracket) => rightBrackets.indexOf(bracket) !== -1;

const isMatch = (originStr) => {
  if (typeof originStr !== 'string') return false;

  const str = originStr.replace(/[^\(\)\{\}\[\]]/g, '');
  if (str.length === 0) return true;
  if (str.length === 1 ) return false;

  let start = 0;
  let end = str.length - 1;

  while(start < end) {
    if (notBracket(str[start])) {
      start++;
      continue;
    } else if (isRightBracket(str[start])) {
      return false;
    } else {
      while(notBracket(str[end]) && end > start) {
        end--;
      }

      if(isLeftBracket(str[end])) return false;
      
      if (matches[str[start]] !== str[end]) {
        return false;
      } else {
        start++;
        end--;
        // continue;
      }
    }
  }

  return matches[str[start]] === str[end];
};


console.log(isMatch('5 * [abc+q(e*(a+222) - 313 )]'))
console.log(isMatch('1[(s))]'))