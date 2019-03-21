/**
 * 相邻元素去重
 * merge([3,2,2,4,5,5,6,2,1]); // 输出[3,2,4,5,6,2,1]
 * merge([3,2,3]); // 输出[3,2,3]
 * merge([2,2,3]); // 输出[2,3]
 */

function merge(arr) {
  if(!Array.isArray(arr) || !arr.length) return [];
  const rst = [arr[0]];
  arr.forEach(item => {
    if (rst.lastIndexOf(item) !== rst.length - 1) {
      rst.push(item);
    }
  });
  return rst;
}

console.log(merge([3,2,2,4,5,5,6,2,1]));
console.log(merge([3,2,3]));
console.log(merge([2,2,3]));