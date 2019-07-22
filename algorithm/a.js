/**
 * N个人围成圈数数，从第一个人开始数，数到FLAG的人出局，然后再从1开始数。求最后剩下的那个人。
 * @param {N} N 
 * @param {*} FLAG 
 */

function v(N, FLAG) {
  // N 总人数
  let flag = 1; // 当前数到了f
  const arr = new Array(N).fill(0).map((item, index) => (index + 1));

  while(arr.length > 1) {
    // console.log(111, arr, flag);
    for(let i = 0; i < arr.length; i++) {
      // console.log(222, arr, flag)
      if (flag === FLAG) {
        arr.splice(i, 1);
        i--;
        flag = 1;
      } else {
        flag++;
      }
    }
  }
  return arr[0];
}

const FLAG = 2;
for (let i = 1; i < 1000; i++) {
  console.log(`${i} -> ${v(i, FLAG)}`);
}

