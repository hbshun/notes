'use strict';
const arr = [
  100,
  1000,
  3000,
  100,
  5000,
  1000,
  3000,
  1000,
  500,
];

const members = ['YY', 'BB', 'AA']

let index = 0;
const queue = async (member, i) => {
  let size = arr[index++];

  while (size) {
    try {
      console.log(member, await new Promise(function(resolve) {
        setTimeout(function() {
          resolve(size)
        }, size);
      }));
    } catch(e) {
      console.log(e);
    }
    size = arr[index++];
  }
}

members.forEach(queue);


const performTasks = (arr, fn, performerCount = 3) => {
  let index = 0;
  const queue = async () => {
    let task = arr[index++];
    while (task) {
      try {
        await fn(task);
        // 执行结果怎么告诉调用者，对操作
      } catch(e) {
        // 出现错误怎么告诉调用者

      }
    }
    task = arr[index++]; 
  }

  for (let i = 0; i < performerCount; i++) {
    queue();
  }
}